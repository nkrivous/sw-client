import Home from './Home';
import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import createStore from '../store';
import { getRoot, getRoots } from '../api';

jest.mock('../api');

function renderWithRedux(
    ui
) {
    return render(<Provider store={createStore()}>{ui}</Provider>);
}

beforeEach(() => {
    const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
    };

    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
        writable: true,
    });
});

it('renders component heading', async () => {
    getRoots.mockResolvedValue([]);
    renderWithRedux(<Home />);
    const headingNode = await screen.findByText('My little Star Wars app 👾');

    expect(headingNode).toBeInTheDocument();
});

it('renders Tabs', async () => {
    getRoots.mockResolvedValue({ rocket: '' });
    renderWithRedux(<Home />);
    const tabNode = await screen.findByTestId('nav-rocket');

    expect(tabNode).toBeInTheDocument();
});

it('does not render tab content on the first render', async () => {
    getRoots.mockResolvedValue({ rocket: '' });
    renderWithRedux(<Home />);
    const tabContentsNode = await screen.findByTestId('tab-content');
    const activeTab = tabContentsNode.getElementsByClassName('active')[0];

    expect(activeTab).toBeUndefined();
});

it('displays tab content on the nav click', async () => {
    getRoots.mockResolvedValue({ rocket: '' });
    getRoot.mockResolvedValue({});
    renderWithRedux(<Home />);
    const tabNode = await screen.findByTestId('nav-rocket');

    tabNode.click();
    const tabContentsNode = await screen.findByTestId('tab-content');
    const activeTab = tabContentsNode.getElementsByClassName('active')[0];

    expect(activeTab).not.toBeUndefined();
});

it('shows error if api call was failed', async () => {
    getRoots.mockResolvedValue(Promise.reject('Error'));
    renderWithRedux(<Home />);
    const errorNode = await screen.findByText('Error occurred');

    expect(errorNode).toBeInTheDocument();
});

it('picks tab from localStorage on load', async () => {
    getRoots.mockResolvedValue({ rocket: '' });
    getRoot.mockResolvedValue({});
    renderWithRedux(<Home />);

    await screen.findByText('Rocket');

    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(
        'tab'
    );
});

it('stores tab to localStorage on tab click', async () => {
    getRoots.mockResolvedValue({ rocket: '' });
    getRoot.mockResolvedValue({});
    renderWithRedux(<Home />);

    const fetchButton = await screen.findByText('Rocket');

    fireEvent.click(fetchButton);

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'tab', JSON.stringify('rocket')
    );
});

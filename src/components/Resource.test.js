import Resource from './Resource';
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import createStore from '../store';
import { getRoot } from '../api';

jest.mock('../api');

function renderWithRedux(
    ui
) {
    return render(<Provider store={createStore()}>{ui}</Provider>);
}

it('renders component heading', async () => {
    getRoot.mockResolvedValue({ results: [] });
    renderWithRedux(<Resource active
        name="planets"
    />);
    const headingNode = await screen.findByText('Planets');

    expect(headingNode).toBeInTheDocument();
});

it('renders wrong resource heading', async () => {
    getRoot.mockResolvedValue({ results: [] });
    renderWithRedux(<Resource active
        name="wrong_name"
    />);
    const headingNode = await screen.findByText('Wrong resources');

    expect(headingNode).toBeInTheDocument();
});

it('renders api error', async () => {
    getRoot.mockResolvedValue(Promise.reject('Error'));
    renderWithRedux(<Resource active
        name="planets"
    />);
    const headingNode = await screen.findByText('Error occurred');

    expect(headingNode).toBeInTheDocument();
});

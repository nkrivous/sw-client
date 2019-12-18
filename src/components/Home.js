import classnames from 'classnames';
import { fetchRoots } from '../actions';
import sentenceCase from 'sentence-case';
import {
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane,
} from 'reactstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Resource from './Resource';
import useLocalStorage from '../hooks/useLocalStorage';

const Home = () => {
	const dispatch = useDispatch();
	const [tab, setTab] = useLocalStorage('tab', void 0);
	const roots = useSelector(state => state.roots);

	useEffect(() => {
		dispatch(fetchRoots());
	}, [dispatch]);

	if (roots.isLoading)
		return <div>Loading...</div>;
	if (roots.error)
		return <div>Error occurred</div>;

	const keys = Object.keys(roots.payload || {});

	return (
		<div>
			<h1>{'My little Star Wars app 👾'}</h1>

			{roots.payload && (
				<div className={'mt-3'}>
					<Nav tabs>
						{keys.map(k => (
							<NavItem key={k}>
								<NavLink
									className={classnames({ active: tab === k })}
									data-testid={`nav-${k}`}
									onClick={() => setTab(k)}
								>
									{sentenceCase(k)}
								</NavLink>
							</NavItem>
						))}
					</Nav>

					<TabContent activeTab={tab}
						data-testid={'tab-content'}
					>
						{keys.map(k => (
							<TabPane
								key={k}
								tabId={k}
							>
								<Resource active={tab === k}
									name={k}
								/>
							</TabPane>
						))}
					</TabContent>
				</div>
			)}
		</div>
	);
};

export default Home;

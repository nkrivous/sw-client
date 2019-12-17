import React, { memo } from 'react';
import { Table } from 'reactstrap';

const Starships = ({ data }) => (<>
    <h1>Starships</h1>
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Model</th>
                <th>Class</th>
                <th>Manufacturer</th>
                <th>Cost in Credits</th>
            </tr>
        </thead>
        <tbody>
            {data.results.map((x, idx) => (<tr key={x.name}>

                <th scope="row">{idx + 1}</th>
                <td>{x.name}</td>
                <td>{x.model}</td>
                <td>{x.starship_class}</td>
                <td>{x.manufacturer}</td>
                <td>{x.cost_in_credits}</td>
            </tr>)
            )}
        </tbody>
    </Table>

</>);

export default memo(Starships);

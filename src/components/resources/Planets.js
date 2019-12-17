import React, { memo } from 'react';
import { Table } from 'reactstrap';

const Planets = ({ data }) => (<>
    <h1>Planets</h1>
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Diameter</th>
                <th>Rotation Period</th>
                <th>Orbital Period</th>
                <th>Gravity</th>
            </tr>
        </thead>
        <tbody>
            {data.results.map((x, idx) => (<tr key={x.name}>

                <th scope="row">{idx + 1}</th>
                <td>{x.name}</td>
                <td>{x.diameter}</td>
                <td>{x.rotation_period}</td>
                <td>{x.orbital_period}</td>
                <td>{x.gravity}</td>
            </tr>)
            )}
        </tbody>
    </Table>

</>);

export default memo(Planets);

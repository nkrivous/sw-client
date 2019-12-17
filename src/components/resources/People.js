import React, { memo } from 'react';
import { Table } from 'reactstrap';

const People = ({ data }) => (<>
    <h1>People</h1>
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Eye Color</th>
                <th>Gender</th>
                <th>Hair Color</th>
            </tr>
        </thead>
        <tbody>
            {data.results.map((x, idx) => (<tr key={x.name}>

                <th scope="row">{idx + 1}</th>
                <td>{x.name}</td>
                <td>{x.birth_year}</td>
                <td>{x.eye_color}</td>
                <td>{x.gender}</td>
                <td>{x.hair_color}</td>
            </tr>)
            )}
        </tbody>
    </Table>

</>);

export default memo(People);

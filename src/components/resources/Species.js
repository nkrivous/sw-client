import React, { memo } from 'react';
import { Table } from 'reactstrap';

const Species = ({ data }) => (<>
    <h1>Species</h1>
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Classification</th>
                <th>Designation</th>
                <th>Average Height</th>
                <th>Average Lifespan</th>
            </tr>
        </thead>
        <tbody>
            {data.results.map((x, idx) => (<tr key={x.name}>

                <th scope="row">{idx + 1}</th>
                <td>{x.name}</td>
                <td>{x.classification}</td>
                <td>{x.designation}</td>
                <td>{x.average_height}</td>
                <td>{x.average_lifespan}</td>
            </tr>)
            )}
        </tbody>
    </Table>

</>);

export default memo(Species);

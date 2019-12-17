import React, { memo } from 'react';
import { Table } from 'reactstrap';

const Films = ({ data }) => (<>
    <h1>Films</h1>
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Episode</th>
                <th>Director</th>
                <th>Producer</th>
            </tr>
        </thead>
        <tbody>
            {data.results.map((x, idx) => (<tr key={x.title}>

                <th scope="row">{idx + 1}</th>
                <td>{x.title}</td>
                <td>{x.episode_id}</td>
                <td>{x.director}</td>
                <td>{x.producer}</td>
            </tr>)
            )}
        </tbody>
    </Table>

</>);

export default memo(Films);

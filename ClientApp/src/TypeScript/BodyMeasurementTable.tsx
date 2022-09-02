import React, { useState } from 'react';
import { Table } from 'reactstrap';

export {BodyMeasurementTable}

function BodyMeasurementTable(props: any)
{
    return (
    <>
        <div className='text-center text-5xl font-semibold pt-4 pb-8 mb-4 mx-auto'>Dziś Bambi kończy 11 tygodni! &#127881;</div>
        <Table striped>
            <thead>
                <tr>
                    <th>Data wpisu</th>
                    <th>Waga</th>
                    <th>Ilość kup</th>
                    <th>Długość snu</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                </tr>
                <tr>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                </tr>
                <tr>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                </tr>
                <tr>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                </tr>
            </tbody>
        </Table>
    </>);
}
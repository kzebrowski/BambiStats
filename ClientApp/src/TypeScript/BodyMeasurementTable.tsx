import React, { useState } from 'react';
import { Table } from 'reactstrap';

export {BodyMeasurementTable}

export interface BodyMeasurementRecord
{
    valueDate: Date,
    weight: number,
    numberOfPoops: number,
    sleepLength: number | undefined
}

export interface BodyMeasurementProps
{
    data: BodyMeasurementRecord[]
}

function BodyMeasurementTable(props: BodyMeasurementProps)
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
                {props.data.map(x =>
                    <tr>
                        <th>{x.valueDate.toDateString()}</th>
                        <th>{x.weight}</th>
                        <th>{x.numberOfPoops}</th>
                        <th>{x.sleepLength == undefined ? '---' : x.sleepLength}</th>
                    </tr>)}
            </tbody>
        </Table>
    </>);
}
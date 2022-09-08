import React from 'react';
import { Table } from 'reactstrap';

export interface BodyMeasurementRecord
{
    valueDate: Date,
    weight: number,
    numberOfPoops: number,
    sleepLength?: number
}

interface BodyMeasurementProps
{
    data: BodyMeasurementRecord[]
}

export const BodyMeasurementTable : React.FC<BodyMeasurementProps> = (props: BodyMeasurementProps) =>
{
    return (
    <>
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
                        <th>{x.valueDate.toLocaleDateString('pl-PL')}</th>
                        <th>{x.weight}</th>
                        <th>{x.numberOfPoops}</th>
                        <th>{x.sleepLength === undefined ? '---' : x.sleepLength}</th>
                    </tr>)}
            </tbody>
        </Table>
    </>);
}
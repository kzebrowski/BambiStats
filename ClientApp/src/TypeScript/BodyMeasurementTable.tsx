import React from 'react';
import { Table } from 'reactstrap';
import { ActionIcon } from './ActionIcon'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

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
                    <tr key={x.valueDate.toDateString() + x.weight}>
                        <th>{x.valueDate.toLocaleDateString('pl-PL')}</th>
                        <th>{x.weight}</th>
                        <th>{x.numberOfPoops}</th>
                        <th>{x.sleepLength === undefined ? '---' : x.sleepLength}</th>
                        <th><ActionIcon data={{}} icon={faTrashCan} handleClick={() => {}}/></th>
                    </tr>)}
            </tbody>
        </Table>
    </>);
}
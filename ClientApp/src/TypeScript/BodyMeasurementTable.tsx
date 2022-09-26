import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { ActionIcon } from './ActionIcon'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { ConfirmationModal } from './ConfirmationModal';

export interface BodyMeasurementRecord
{
    valueDate: Date,
    weight: number,
    numberOfPoops: number,
    sleepLength?: number
}

interface BodyMeasurementProps
{
    data: BodyMeasurementRecord[],
    handleEditClick: (editedItem: BodyMeasurementRecord) => void
}

interface ConfirmationModalData
{
    isOpen: boolean,
    valueDate?: Date
}

export const BodyMeasurementTable : React.FC<BodyMeasurementProps> = (props: BodyMeasurementProps) =>
{
    let [confirmationModalData, setConfirmationModalData] = useState<ConfirmationModalData>({isOpen: false});

    function handleEntryDeletionClick(rowDate: Date)
    {
        setConfirmationModalData({isOpen: true, valueDate: rowDate });
    }

    function deleteEntry(valueDate: Date | undefined)
    {
        if (valueDate === undefined)
            return;
    }

    function handleEntryEditClick(rowDate: Date)
    {
        let editedItem = props.data.filter(x => x.valueDate === rowDate)[0];
        props.handleEditClick(editedItem);
    }

    return (
    <>
        <Table striped>
            <thead>
                <tr>
                    <th>Data wpisu</th>
                    <th>Waga</th>
                    <th>Ilość kup</th>
                    <th>Czas snu (godz.)</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(x =>
                    <tr key={x.valueDate.toDateString() + x.weight}>
                        <th>{x.valueDate.toLocaleDateString('pl-PL')}</th>
                        <th>{x.weight}</th>
                        <th>{x.numberOfPoops}</th>
                        <th>{x.sleepLength === undefined ? '---' : x.sleepLength}</th>
                        <th className='px-3 md:px-2'><ActionIcon data={x.valueDate} icon={faPenToSquare} handleClick={handleEntryEditClick}/></th>
                        <th className='px-3 md:px-2'><ActionIcon data={x.valueDate} icon={faTrashCan} handleClick={handleEntryDeletionClick}/></th>
                    </tr>)}
            </tbody>
        </Table>
        <ConfirmationModal
            isOpen={confirmationModalData.isOpen}
            message={"Czy na pewno chesz usunąć wpis z "+ confirmationModalData.valueDate?.toLocaleDateString() + "?"}
            handleYes={() => deleteEntry(confirmationModalData.valueDate)}
            handleNo={() => setConfirmationModalData({isOpen: false})} />
    </>);
}
import React, { FormEvent, useEffect, useState } from "react";
import { BodyMeasurementRecord } from "./BodyMeasurementTable";

interface Props extends EditionProps
{
    addNewItem: (newItem : BodyMeasurementRecord) => void
}

interface EditionProps 
{
    isUnderEdition: boolean,
    itemUnderEdition: BodyMeasurementRecord,
    setIsUnderEdition: React.Dispatch<React.SetStateAction<boolean>>,
    submitRecordEdition: (editedItem: BodyMeasurementRecord) => void
}

export const BodyMeasurementForm : React.FC<Props> = (props: Props) =>
{
    let [valueDate, setValueDate] = useState(new Date());
    let [weight, setWeight] = useState<number | undefined>(undefined);
    let [numberOfPoops, setNumberOfPoops] = useState<number | undefined>(undefined);
    let [sleepLength, setSleepLength] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (props.isUnderEdition)
        {
            setValueDate(props.itemUnderEdition.valueDate);
            setWeight(props.itemUnderEdition.weight);
            setNumberOfPoops(props.itemUnderEdition.numberOfPoops);
            setSleepLength(props.itemUnderEdition.sleepLength);
        }
    }, [props.isUnderEdition, props.itemUnderEdition]);

    const handleValueDateChange = (event: React.FormEvent<HTMLInputElement>) =>
        setValueDate(new Date(event.currentTarget.value));
    const handleWeightChange = (event: React.FormEvent<HTMLInputElement>) =>
        setWeight(+event.currentTarget.value);
    const handleNumberOfPoopsChange = (event: React.FormEvent<HTMLInputElement>) =>
        setNumberOfPoops(+event.currentTarget.value);
    const handlesleepLengthChange = (event: React.FormEvent<HTMLInputElement>) =>
        setSleepLength(+event.currentTarget.value);
    
    function onFormSubmit(event: FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        let newRecord = getRecordFromFormState();

        if (props.isUnderEdition)
        {
            props.submitRecordEdition(newRecord);
            props.setIsUnderEdition(false);
        }
        else
        {
            props.addNewItem(newRecord);
        }

        event.currentTarget.reset();
        resetFormValues();
    }

    function getRecordFromFormState() : BodyMeasurementRecord
    {
        return (
            {
                valueDate: valueDate,
                weight: weight ?? 0,
                numberOfPoops: numberOfPoops ?? 0,
                sleepLength: sleepLength === 0 ? undefined : sleepLength 
            });
    }

    function resetFormValues()
    {
        setValueDate(new Date());
        setWeight(undefined);
        setNumberOfPoops(undefined);
        setSleepLength(undefined);
    }

    return (
        <form className="py-2 px-4 my-3 border-2 border-solid rounded flex flex-wrap" onSubmit={onFormSubmit}>
            <div className="flex flex-col lg:flex-row m-auto space-y-1  lg:space-y-0 lg:space-x-5">
                <div>
                    <label htmlFor="measurementDate" className="hidden lg:inline-block lg:pr-2 font-semibold">Data:</label>
                    <input 
                        type="date"
                        id="measurementDate"
                        className="border-2 rounded pl-2 w-full lg:w-36"
                        placeholder="Data"
                        value={valueDate.toISOString().substring(0,10)}
                        onChange={handleValueDateChange}/>
                </div>
                <div>
                    <label htmlFor="weight" className="hidden lg:inline-block pr-2 font-semibold">Waga(kg):</label>
                    <input 
                        type="number"
                        id="weight"
                        className="border-2 rounded pl-2 lg:w-36"
                        placeholder="Waga(kg)"
                        onFocus={(e) => e.target.select()}
                        value={weight || ''}
                        onChange={handleWeightChange}
                        min="1"
                        step="0.05"/>
                </div>
                <div>
                    <label htmlFor="numberOfPoops" className="hidden lg:inline-block pr-2 font-semibold">Ilość kup:</label>
                    <input
                        type="number"
                        id="numberOfPoops"
                        className="border-2 rounded pl-2 lg:w-36"
                        placeholder="Ilość kup"
                        onFocus={(e) => e.target.select()}
                        value={numberOfPoops || ''}
                        onChange={handleNumberOfPoopsChange}
                        min="0"/>
                </div>
                <div>
                    <label htmlFor="sleepTime" className="hidden lg:inline-block pr-2 font-semibold">Czas snu (godz.):</label>
                    <input
                        type="number"
                        id="sleepTime"
                        className="border-2 rounded pl-2 lg:w-36"
                        placeholder="Czas snu (godz.)"
                        onFocus={(e) => e.target.select()}
                        value={sleepLength === undefined || sleepLength === 0 ? '---' : sleepLength}
                        onChange={handlesleepLengthChange}
                        step="0.5"
                        min="0"/>
                </div>
                <div
                    className="inline-flex pr-2 lg:w-32 font-semibold border-2 border-solid rounded backgroud hover:pointer"
                    style={{backgroundColor: "#FCC5C0"}}>
                    <input type="submit" className="m-auto text-white w-full h-full" value={props.isUnderEdition ? "Zapisz" : "Dodaj"} />
                </div>
                {props.isUnderEdition &&
                    <div className="inline-flex pr-2 lg:w-32 font-semibold border-2 border-solid rounded backgroud hover:pointer">
                        <button className="m-auto w-full h-full" onClick={() => props.setIsUnderEdition(false)}>Anuluj edycję</button>
                    </div>}
                </div>
            </form>
    )
} 
import React, { FormEvent, useState } from "react";
import { BodyMeasurementRecord } from "./BodyMeasurementTable";

interface Props
{
    addNewItem: (newItem : BodyMeasurementRecord) => void
}

export const BodyMeasurementForm : React.FC<Props> = (props: Props) =>
{
    let [valueDate, setValueDate] = useState(new Date());
    let [weight, setWeight] = useState(0);
    let [numberOfPoops, setNumberOfPoops] = useState(0);
    let [sleepLength, setSleepLength] = useState(0);

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
        let newItem : BodyMeasurementRecord =
        {
            valueDate: valueDate,
            weight: weight,
            numberOfPoops: numberOfPoops,
            sleepLength: sleepLength
        };
        
        props.addNewItem(newItem);
        event.currentTarget.reset();
        resetFormValues();
        event.preventDefault();
    }

    function resetFormValues()
    {
        setValueDate(new Date());
        setWeight(0);
        setNumberOfPoops(0);
        setSleepLength(0);
    }

    return (
        <form className="py-2 px-4 my-3 border-2 border-solid rounded flex" onSubmit={onFormSubmit}>
                <div className="flex flex-col lg:flex-row m-auto space-y-1  lg:space-y-0 lg:space-x-5">
                    <div>
                        <label htmlFor="measurementDate" className="hidden lg:inline-block lg:pr-2 font-semibold">Data:</label>
                        <input 
                            type="date"
                            id="measurementDate"
                            className="border-2 rounded pl-2 w-48 lg:w-36"
                            placeholder="Data"
                            defaultValue={valueDate.toISOString().substring(0,10)}
                            onBlur={handleValueDateChange}/>
                    </div>
                    <div>
                        <label htmlFor="weight" className="hidden lg:inline-block pr-2 font-semibold">Waga(kg):</label>
                        <input 
                            type="number"
                            id="weight"
                            className="border-2 rounded pl-2 lg:w-36"
                            placeholder="Waga(kg)"
                            onFocus={(e) => e.target.select()}
                            onBlur={handleWeightChange}
                            min="0"
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
                            onBlur={handleNumberOfPoopsChange}
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
                        onBlur={handlesleepLengthChange}
                        step="0.5"
                        min="0"/>
                    </div>
                    <div className="flex pr-2 lg:w-32 font-semibold border-2 border-solid rounded backgroud hover:pointer"
                        style={{backgroundColor: "#FCC5C0"}}>
                        <input type="submit" className="m-auto text-white w-full h-full" value="Dodaj" />
                    </div>
                </div>
            </form>
    )
} 
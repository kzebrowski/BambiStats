import React, { useState, useEffect } from "react";
import { BodyMeasurementTable, BodyMeasurementRecord } from './BodyMeasurementTable';
import { BodyMeasurementForm } from './BodyMeasurementForm';
import { WeightLineChart } from "./WieightLineChart";
import date from 'date-and-time';
import { Loader } from "../Loader";

interface FetchedBodyMeasurementRecord
{
    valueDate: string,
    weight: number,
    numberOfPoops: number,
    sleepLength?: number
}

export const BodyMeasurementSection: React.FC = () =>
{
    let [formData, setFormData] = useState<BodyMeasurementRecord[]>([]);
    let [isUnderEdition, setIsUnderEdition] = useState(false);
    let [itemUnderEdition, setItemUnderEdition] =
        useState<BodyMeasurementRecord>({valueDate: new Date(), weight: 0, numberOfPoops: 0 });
    let [loaderIsVisible, setLoaderIsVisible] = useState(false);

    useEffect(() => {
        fetchAndUpdateTable();
    }, []);

    function fetchAndUpdateTable()
    {
        setLoaderIsVisible(true);

        fetch("/api/BodyMeasurements")
            .then(response => response.json())
            .then(data => setFormData(
                data.map((x : FetchedBodyMeasurementRecord) => {
                    return {
                        valueDate: new Date(x.valueDate),
                        weight: x.weight,
                        numberOfPoops: x.numberOfPoops,
                        sleepLength: x.sleepLength}
                    })))
            .then(() => setLoaderIsVisible(false))
            .catch(error => console.error(error));
    }
    
    function handleEditClick (editedRecord: BodyMeasurementRecord)
    {
        setItemUnderEdition(editedRecord);
        setIsUnderEdition(true);
    }

    function addRecord(newItem : BodyMeasurementRecord)
    {
        if (!localStorage.getItem("userEmail"))
        {
            alert("Aby dodać wpis, musisz się zalogować.");
            return;
        }

        setLoaderIsVisible(true);
        const requestOptions = getPostRequestOptions(newItem);

        fetch('/api/BodyMeasurements/add', requestOptions)
            .then(response => {
                    if(!response.ok)
                        alert("Wpis na tę datę już istnieje");
                    
                    return response;
                })
            .then(response => response.json())
            .then((data :  FetchedBodyMeasurementRecord) => {
                let createdRecord : BodyMeasurementRecord = {
                    valueDate: new Date(data.valueDate),
                    weight: data.weight,
                    numberOfPoops: data.numberOfPoops,
                    sleepLength: data.sleepLength
                }

                setFormData([createdRecord, ...formData]);
            })
            .then(() => setLoaderIsVisible(false));
    }

    function deleteRecord(valueDate : Date)
    {
        setLoaderIsVisible(true);
        let formatedValueDate = date.format(valueDate, "YYYY-MM-DD");
        fetch(`/api/BodyMeasurements/delete?valuedate=${formatedValueDate}`, {method: "DELETE"})
            .then(data => setFormData(current => current.filter(x => x.valueDate !== valueDate)))
            .then(() => setLoaderIsVisible(false));
    }

    function editRecord(newRecord : BodyMeasurementRecord)
    {
        if (!localStorage.getItem("userEmail"))
        {
            alert("Aby edytować wpis, musisz się zalogować.");
            return;
        }

        setLoaderIsVisible(true);
        const requestOptions = getPostRequestOptions(newRecord);
        
        function handleResponse(response : Response)
        {
            if(!response.ok)
            {
                alert("Wystąpił błąd. Edycja nieudana.");
                return;
            }

            fetchAndUpdateTable();
        }

        fetch('/api/BodyMeasurements/update', requestOptions)
            .then(handleResponse);
    }

    function getPostRequestOptions(body : any)
    {
        return {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
    }

    let sortedFormData: BodyMeasurementRecord[] = [];
    sortedFormData = sortedFormData.concat(formData).sort(function (a, b) {
        if (a.valueDate > b.valueDate)
            return -1;
        if (a.valueDate < b.valueDate)
            return 1;
        return 0;
    });

    return (
        <React.Fragment>
            <WeightLineChart data={sortedFormData} />
            <BodyMeasurementForm
                addNewItem={addRecord}
                isUnderEdition={isUnderEdition}
                itemUnderEdition={itemUnderEdition}
                setIsUnderEdition={setIsUnderEdition}
                submitRecordEdition={editRecord} />
            <BodyMeasurementTable 
                data={sortedFormData}
                handleEditClick={handleEditClick} 
                handleRecordDeletion={deleteRecord}/>
            <Loader isShown={loaderIsVisible}/>
        </React.Fragment>
    );
}
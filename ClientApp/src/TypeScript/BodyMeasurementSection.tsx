import React, { useState } from "react";
import {BodyMeasurementTable, BodyMeasurementRecord} from './BodyMeasurementTable';
import {BodyMeasurementForm} from './BodyMeasurementForm';
import { WeightLineChart } from "./WieightLineChart";

export const BodyMeasurementSection : React.FC = () =>
{
    let dummyData : BodyMeasurementRecord[] =
    [
        {
          valueDate: new Date(2022, 8, 8),
          weight: 2.8,
          numberOfPoops: 4
        },
        {
          valueDate: new Date(2022, 8, 9),
          weight: 4.2,
          numberOfPoops: 12,
          sleepLength: 4
        },
        {
          valueDate: new Date(2022, 8, 10),
          weight: 5,
          numberOfPoops: 12,
          sleepLength: 4
        }
      ];

    let [formData, setFormData] = useState<BodyMeasurementRecord[]>(dummyData);
    
    let sortedFormData : BodyMeasurementRecord[] = [];
    sortedFormData = sortedFormData.concat(formData).sort(function(a, b) {
        if (a.valueDate < b.valueDate)
            return -1;
        if (a.valueDate > b.valueDate)
            return 1;
        return 0;
    });

    return (
        <React.Fragment>
            <WeightLineChart data={sortedFormData}/>
            <BodyMeasurementForm addNewItem={(newItem) => setFormData([newItem, ...formData])} />
            <BodyMeasurementTable data={formData} />
        </React.Fragment>
    );
}
import React, { FormEvent, useState } from "react";
import {BodyMeasurementTable, BodyMeasurementRecord} from './BodyMeasurementTable';
import { BodyMeasurementForm } from "./BodyMeasurementForm";

export const BodyMeasurementSection : React.FC = () =>
{
    let dummyData : BodyMeasurementRecord[] =
    [
        {
          valueDate: new Date(),
          weight: 2.8,
          numberOfPoops: 4
        },
        {
          valueDate: new Date(),
          weight: 4.2,
          numberOfPoops: 12,
          sleepLength: 4
        }
      ];

    let [formData, setFormData] = useState<BodyMeasurementRecord[]>(dummyData);

    return (
        <div>
            <BodyMeasurementTable data={formData} />
            <BodyMeasurementForm addNewItem={(newItem) => setFormData([newItem, ...formData])} />
        </div>
    );
}
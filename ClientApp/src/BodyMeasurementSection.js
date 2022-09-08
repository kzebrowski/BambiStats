import React, { useState } from "react";
import { BodyMeasurementTable } from './BodyMeasurementTable';
export const BodyMeasurementSection = () => {
    let dummyData = [
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
    let [formData, setFormData] = useState(dummyData);
    return (React.createElement("div", null,
        React.createElement(BodyMeasurementTable, { data: formData }),
        React.createElement("form", { className: "py-2 px-4 border-2 border-solid rounded flex" },
            React.createElement("div", { className: "flex margin-auto m-auto" },
                React.createElement("label", { htmlFor: "measurementDate", className: "pr-2 font-semibold" }, "Data:"),
                React.createElement("input", { type: "date", id: "measurementDate", defaultValue: new Date().toISOString().substring(0, 10), className: "border-2 rounded pl-2 w-36" }),
                React.createElement("label", { htmlFor: "weight", className: "ml-4 pr-2 font-semibold" }, "Waga(kg):"),
                React.createElement("input", { type: "number", id: "weight", className: "border-2 rounded pl-2 w-36" }),
                React.createElement("label", { htmlFor: "numberOfPoops", className: "ml-4 pr-2 font-semibold" }, "Ilo\u015B\u0107 kup:"),
                React.createElement("input", { type: "number", id: "numberOfPoops", className: "border-2 rounded pl-2 w-36" }),
                React.createElement("label", { htmlFor: "sleepTime", className: "ml-4 pr-2 font-semibold" }, "Czas snu (godz.):"),
                React.createElement("input", { type: "number", id: "sleepTime", className: "border-2 rounded pl-2 w-36" }),
                React.createElement("input", { type: "submit", className: "ml-4 pr-2 font-semibold border-solid rounded" })))));
};
//# sourceMappingURL=BodyMeasurementSection.js.map
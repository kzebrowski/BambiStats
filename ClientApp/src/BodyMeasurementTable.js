import React from 'react';
import { Table } from 'reactstrap';
export const BodyMeasurementTable = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Table, { striped: true },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Data wpisu"),
                    React.createElement("th", null, "Waga"),
                    React.createElement("th", null, "Ilo\u015B\u0107 kup"),
                    React.createElement("th", null, "D\u0142ugo\u015B\u0107 snu"))),
            React.createElement("tbody", null, props.data.map(x => React.createElement("tr", null,
                React.createElement("th", null, x.valueDate.toLocaleDateString('pl-PL')),
                React.createElement("th", null, x.weight),
                React.createElement("th", null, x.numberOfPoops),
                React.createElement("th", null, x.sleepLength === undefined ? '---' : x.sleepLength)))))));
};
//# sourceMappingURL=BodyMeasurementTable.js.map
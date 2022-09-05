import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Table } from 'reactstrap';
export { BodyMeasurementTable };
function BodyMeasurementTable(props) {
    return (_jsxs(_Fragment, { children: [_jsx("div", Object.assign({ className: 'text-center text-5xl font-semibold pt-4 pb-8 mb-4 mx-auto' }, { children: "Dzi\u015B Bambi ko\u0144czy 11 tygodni! \uD83C\uDF89" })), _jsxs(Table, Object.assign({ striped: true }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Data wpisu" }), _jsx("th", { children: "Waga" }), _jsx("th", { children: "Ilo\u015B\u0107 kup" }), _jsx("th", { children: "D\u0142ugo\u015B\u0107 snu" })] }) }), _jsx("tbody", { children: props.data.map(x => _jsxs("tr", { children: [_jsx("th", { children: "x.valueDate" }), _jsx("th", { children: "x.weight" }), _jsx("th", { children: "x.numberOfPoops" }), _jsx("th", { children: "x.sleepLenght == undefined ? '---' : x.sleepLenght" })] })) })] }))] }));
}

import React from "react";
export const BirthdayNotification = () => {
    const birthDate = new Date(2022, 5, 20);
    const getAgeInWeeks = (date) => Math.floor((date.getTime() - birthDate.getTime()) / (1000 * 3600 * 24)) / 7;
    let ageInWeeks = getAgeInWeeks(new Date());
    if (Number.isInteger(ageInWeeks))
        return (React.createElement("div", { className: 'text-center text-5xl font-semibold pt-4 pb-8 mb-4 mx-auto' },
            "Dzi\u015B Bambi ko\u0144czy ",
            ageInWeeks,
            " tygodni! \uD83C\uDF89"));
    return null;
};
//# sourceMappingURL=BirthdayNotification.js.map
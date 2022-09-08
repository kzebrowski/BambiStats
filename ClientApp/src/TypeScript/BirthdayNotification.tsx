import React from "react";

export const BirthdayNotification : React.FC = () =>
{   
    const birthDate = new Date(2022,5,20);
    
    const getAgeInWeeks = (date : Date) => 
        Math.floor((date.getTime() - birthDate.getTime()) / (1000 * 3600 * 24)) / 7;

    let ageInWeeks = getAgeInWeeks(new Date());
    if (Number.isInteger(ageInWeeks))
        return (
         <div className='text-center text-5xl font-semibold pt-4 pb-8 mb-4 mx-auto'>Dziś Bambi kończy {ageInWeeks} tygodni! &#127881;</div>);
    
    return null;
}
import React from "react";
import { DogFoodReviewItem } from "./DogFoodReviewItem";

export const DogFoodReviewList : React.FC = () =>
{
    let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta qui earum pariatur harum facilis nobis cum quibusdam illum, eligendi repellendus odio minus optio voluptatibus, eos quo, omnis quasi enim."
    return <>
        <div className='text-center text-5xl font-semibold pt-4 pb-8 mb-4 mx-auto'>Recenzje karmy: </div>
        <div className="flex flex-column space-y-6">
            {[...Array(5).keys()].map(() => <DogFoodReviewItem name="Nazwa Karmy" rating={4} description={lorem} />)}
        </div>
    </>;
}
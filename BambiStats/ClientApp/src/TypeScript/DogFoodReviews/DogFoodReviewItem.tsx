import React from "react";

export interface DogFoodReviewItemData {
    name: string,
    rating: 1|2|3|4|5,
    description: string
}

export const DogFoodReviewItem : React.FC<DogFoodReviewItemData> = (props: DogFoodReviewItemData) =>
{
    return <>
        <div className='border-2 border-[#D8D8D8] rounded-xl flex flex-col px-3 py-2'>
            <div className="p-1 font-semibold text-xl md:text-2xl">
                {props.name}
            </div>
            <div className="p-1 font-semibold text-xl md:text-2xl text-brown">
                {[...Array(props.rating).keys()].map(() => <span>&#9733;</span>)}
                {[...Array(5 - props.rating).keys()].map(() => <span>&#9734;</span>)}
            </div>
            <div className="p-1 md:text-xl">
                {props.description}
            </div>
        </div>
    </>;
}
import React from "react";

interface Props {
    name: string,
    rating: 1|2|3|4|5,
    description: string
}

export const DogFoodReviewItem : React.FC<Props> = (props: Props) =>
{
    return <>
        <div className='border-2 border-[#D8D8D8] rounded-xl flex flex-col px-3 py-2'>
            <div className="p-1 font-semibold text-xl md:text-2xl">
                {props.name}
            </div>
            <div className="p-1 font-semibold text-xl md:text-2xl text-[#A64B2A]">
                {[...Array(props.rating).keys()].map(() => <a>&#9733;</a>)}
                {[...Array(5 - props.rating).keys()].map(() => <a>&#9734;</a>)}
            </div>
            <div className="p-1 md:text-xl">
                {props.description}
            </div>
        </div>
    </>;
}
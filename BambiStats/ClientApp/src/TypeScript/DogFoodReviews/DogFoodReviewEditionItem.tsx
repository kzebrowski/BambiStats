import React, { useState, ReactNode } from "react";
import { DogFoodReviewItemData } from "./DogFoodReviewItem";

interface Props {
    cancelAction: () => void,
    acceptAction: (data: DogFoodReviewItemData) => void,
    name?: string,
    rating?: 1|2|3|4|5,
    description?: string,
}

export const DogFoodReviewEditionItem : React.FC<Props> = (props: Props) =>
{
    let [rating, setRating] = useState(0);
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');

    const handleNameChange = (event: React.FormEvent<HTMLInputElement>) =>
        setName(event.currentTarget.value);
    const handleDescriptionChange = (event: any) =>
        setDescription(event.currentTarget.textContent);

    function submitReview() 
    {
        if (!localStorage.getItem("userEmail"))
        {
            alert("Aby dodać recenzję, musisz się zalogować.");
            return;
        }

        if (name === '' || description === '' || rating === 0)
            return;

        let data : DogFoodReviewItemData = {
            name: name,
            rating: rating as 1|2|3|4|5,
            description: description
        }

        props.acceptAction(data);
    }

    function getStars(rating: number) : ReactNode
    {
        return (
        <>
            <span className="cursor-pointer hover:brightness-125 hover:text-brown" onClick={() => setRating(1)}>{rating >= 1 ? "\u2605" : "\u2606"}</span>
            <span className="cursor-pointer hover:brightness-125 hover:text-brown" onClick={() => setRating(2)}>{rating >= 2 ? "\u2605" : "\u2606"}</span>
            <span className="cursor-pointer hover:brightness-125 hover:text-brown" onClick={() => setRating(3)}>{rating >= 3 ? "\u2605" : "\u2606"}</span>
            <span className="cursor-pointer hover:brightness-125 hover:text-brown" onClick={() => setRating(4)}>{rating >= 4 ? "\u2605" : "\u2606"}</span>
            <span className="cursor-pointer hover:brightness-125 hover:text-brown" onClick={() => setRating(5)}>{rating === 5 ? "\u2605" : "\u2606"}</span>
        </>)
    }

    return <>
        <div className='border-4 border-pink rounded-xl flex flex-col px-3 py-2'>
            <div className="p-1 font-semibold text-xl md:text-2xl">
                <input
                    type="text"
                    id="name"
                    className="border-2 border-lightgrey rounded pl-2 w-full"
                    value={name}
                    onChange={handleNameChange}/>
            </div>
            <div className="p-1 font-semibold text-xl md:text-2xl text-[#A64B2A]">
                {getStars(rating)}
            </div>
            <div className="p-1 md:text-xl">
                <span
                    role="textbox"
                    id="name"
                    className="border-2 border-lightgrey rounded pl-2 w-full min-h-[75px] block"
                    contentEditable
                    onInput={handleDescriptionChange}/>
            </div>
            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4">
                <div className="grow border-0 rounded-xl text-center cursor-pointer text-lg font-semibold text-white bg-pink hover:brightness-110"
                     onClick={submitReview}>
                    Zatwiedź
                </div>
                <div className="grow border-2 border-lightgrey rounded-xl text-center cursor-pointer text-lg font-semibold hover:brightness-110"
                     onClick={props.cancelAction}>
                    Anuluj
                </div>
            </div>
        </div>
    </>;
}
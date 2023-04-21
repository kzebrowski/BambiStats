import React, { useState } from "react";
import { DogFoodReviewItem, DogFoodReviewItemData } from "./DogFoodReviewItem";
import { DogFoodReviewEditionItem } from "./DogFoodReviewEditionItem"
import { ConfirmationModal } from "../ConfirmationModal";

export const DogFoodReviewList : React.FC = () =>
{
    let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta qui earum pariatur harum facilis nobis cum quibusdam illum, eligendi repellendus odio minus optio voluptatibus, eos quo, omnis quasi enim.";
    let dummyData : DogFoodReviewItemData[] = [{name: "Nazwa Karmy", rating: 4, description: lorem}, {name: "Nazwa Karmy", rating: 4, description: lorem}, {name: "Nazwa Karmy", rating: 4, description: lorem}, {name: "Nazwa Karmy", rating: 4, description: lorem}, {name: "Nazwa Karmy", rating: 4, description: lorem}]

    let [reviewList, setReviewList] = useState<DogFoodReviewItemData[]>(dummyData);
    let [isCreatingElement, setIsCreatingElement] = useState(false);
    let [isCloseItemCreationModalOpen, setIsCloseItemCreationModalOpen] = useState(false);

    let closeElementCreation = () => setIsCloseItemCreationModalOpen(true);
    let openElementCreation = () => setIsCreatingElement(true);

    function submitReview(newReview: DogFoodReviewItemData)
    {
        setReviewList([newReview, ...reviewList]);
        setIsCreatingElement(false);
    }

    return <>
        <div className='text-center text-5xl font-semibold pt-4 pb-8 mb-4 mx-auto'>Recenzje karmy: </div>
        {!isCreatingElement &&
         <div className='border border-[#D8D8D8] rounded-xl mb-4 p-2 text-center cursor-pointer text-lg font-semibold text-white bg-pink hover:brightness-110' onClick={openElementCreation}>
            Dodaj
        </div>}
        <div className="flex flex-column space-y-6">
            {isCreatingElement ? <DogFoodReviewEditionItem cancelAction={closeElementCreation} acceptAction={submitReview}/> : ""}
            {reviewList.map(x => <DogFoodReviewItem name={x.name} rating={x.rating} description={x.description} />)}
        </div>
        <ConfirmationModal
            isOpen={isCloseItemCreationModalOpen}
            message="Czy na pewno chcesz anulować dodawanie recenzji?"
            handleYes={() => {setIsCreatingElement(false); setIsCloseItemCreationModalOpen(false);}}
            handleNo={() => setIsCloseItemCreationModalOpen(false)} />
    </>;
}
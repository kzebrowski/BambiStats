import React from "react";
import { WishlistItem } from "./WishListItem";

export const WishlistSection : React.FC = () =>
{
    return <>
        <div className='text-center text-5xl font-semibold pt-4 pb-8 mb-4 mx-auto'>Lista rzeczy do kupienia:</div>
        <div className="flex flex-column space-y-6">
            {[...Array(5).keys()].map(() => <WishlistItem />)}
        </div>
    </>;
}
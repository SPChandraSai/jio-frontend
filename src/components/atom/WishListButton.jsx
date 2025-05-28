"use client"

import React from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";

const WishlistButton = () => {
    const user = useSelector((state) => state.user);
    if (!user.isLoggedIn) {
        return <>

        </>
    }
    const addToWishList=()=>{
        // logic to actually add the videos to the wishlist
    }
    return (
        <Button className="sm:ml-auto bg-pink-600" onClick={addToWishList}>
            <PlusIcon className="w-4 h-4 mr-2"/>
            Watchlist
        </Button>
    );
}

export default WishlistButton;
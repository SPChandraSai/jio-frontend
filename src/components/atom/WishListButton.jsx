"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { LoaderPinwheel, PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { api, ENDPOINT } from "@/lib/api";
import { toast } from "sonner";

const WishlistButton = ({wishlist}) => {
    const user = useSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    if (!user.isLoggedIn) {
        return <></>
    }
    const addToWishList = async () => {
        // logic to actually add the videos to the wishlist
        try {
            setLoading(true);
            const res = await api.post(ENDPOINT.addToWishlist, wishlist);
            if(res.status==200){
                toast("wishlist added");
            }
        }
        catch (err) {
            toast(err.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <Button className={`sm:ml-auto bg-pink-600 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={addToWishList}>
            {loading ? <LoaderPinwheel className="w-4 h-4 mr-2" /> : <PlusIcon className="w-4 h-4 mr-2" />}
            Watchlist
        </Button>
    );
}

export default WishlistButton;
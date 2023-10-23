import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import Subscribe from "../Subscribe";
import Overlay from "./overlay";
import { useState } from "react";

const Product = () => {

    // const overlay = () => {


    // }
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    }

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    return (
        <div>
            <Header />
            <div className="flex p-12 m-12">
                {/* Stacked Product Images */}
                <div className="w-1/4 ">
                    <div className="mb-4">
                        <img src="pictures/plant3.png" alt="Product Image 1" className="w-40" />
                    </div>
                    <div className="mb-4">
                        <img src="pictures/plant2.png" alt="Product Image 2" className="w-40" />
                    </div>
                    <div className="mb-4">
                        <img src="pictures/plant1.png" alt="Product Image 3" className="w-40" />
                    </div>
                </div>

                {/* Larger Product Image */}
                <div className="w-2/4 pr-12">
                    <img src="pictures/plant4.png" alt="Main Product Image" className="w-100" />
                </div>

                {/* Product Description */}
                <div className="w-1/4 mt-8">
                    <h1 className="text-2xl font-semibold mb-12 font-Aboreto">Plant 3</h1>

                    <div className="mb-4">
                        <span className="text-2xl font-semibold text-black font-Aboreto">50 &euro;</span>
                    </div>
                    <div>

                    </div>

                    <span className="mr-4 font-Aboreto ">Quantity</span>

                    <button
                        className=" text-gray-700  p-2  border-black"
                        onClick={decrementQuantity}
                    >
                        -
                    </button>
                    <span className="mx-4">{quantity}</span>
                    <button
                        className=" text-gray-700 p-2 "
                        onClick={incrementQuantity}
                    >
                        +
                    </button>


                    <div>
                        <button onClick={toggleOverlay} className="bg-black text-white text-center px-28 py-2 mt-12 ">
                            Add to Cart
                        </button>
                        {/* {isSubscribeOpen && <SubscribeOverlay onClose={closeSubscribe} />} */}
                    </div>

                </div>

            </div>
            {isOverlayVisible && (<Overlay onClose={setIsOverlayVisible} />)}
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Product;
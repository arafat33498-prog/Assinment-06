import React from 'react';
import { HiOutlineTrash } from "react-icons/hi2";

const SelectedCard = ({ selectedCards, handleDelete, handleCheckout }) => {

    const totalPrice = selectedCards.reduce((total, item) => total + parseFloat(item.price), 0);

    return (
        <div className="max-w-4xl mx-auto space-y-4 pb-20">
            {selectedCards.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-400 text-lg">Your cart is empty!</p>
                </div>
            ) : (
                <>
                    {selectedCards.map((item, index) => (
                        <div key={index} className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-3">
                                    <img src={`/${item.icon}`} alt="" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                                    <p className="text-[#7C3AED] font-bold mt-1">${item.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDelete(item.title)}
                                className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all cursor-pointer"
                            >
                                <HiOutlineTrash size={28} />
                            </button>
                        </div>
                    ))}

                    <div className="mt-8 border-t pt-8">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-500 text-lg font-medium">Total:</span>
                            <span className="text-3xl font-bold text-slate-900">${totalPrice.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={handleCheckout} 
                            className="w-full bg-[#8B2CFF] hover:bg-[#7a25e0] text-white font-bold py-5 rounded-2xl shadow-lg transition-all text-lg active:scale-95 cursor-pointer"
                        >
                            Proceed To Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SelectedCard;
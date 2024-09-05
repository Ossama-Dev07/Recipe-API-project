import React, { useState } from 'react';

const RecipeCard = ({ recipe }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="bg-indigo-100 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform">
            <div className="relative">
                <img
                    className="w-full h-48 object-cover object-center rounded-t-lg"
                    src={recipe.image}
                    alt={recipe.label}
                />
                <div className="absolute top-2 left-2 bg-indigo-500 text-white py-1 px-2 rounded">
                    {recipe.dishType[0]}
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-2 capitalize">
                    {recipe.label}
                </h1>
                {showDetails && (
                    <div className="text-gray-600 mb-4">
                        <span className="block mb-1">
                            <b>Ingredients:</b>
                        </span>
                        {recipe.ingredientLines.map((ingredient, index) => (
                            <span key={index} className="block pl-4">
                                {ingredient}
                            </span>
                        ))}
                    </div>
                )}
                <button
                    className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-indigo-600 focus:outline-none"
                    onClick={toggleDetails}
                >
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
               
            </div>
        </div>
    );
};

export default RecipeCard;

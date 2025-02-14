import React from "react";

const Button = ({text}) => {
    return (
        <div className="px-4 py-2 bg-transparent rounded-full flex gap-2 text-white text-sm items-center border-2 border-gray-700">
            {text}
        </div>
    );
};

export default Button;

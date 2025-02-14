import React from "react";

const Button = ({ text }) => {
    return (
        <>
            <button className="bg-[##3C4043] rounded-full flex gap-2 text-white text-sm items-center border-[#2b49a4] py-2 px-2 border-2 md:hidden">
                <svg
                    width="19px"
                    height="19px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                            d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                            fill="#A8C7FA"
                        ></path>{" "}
                    </g>
                </svg>

                <span className="">{text}</span>
            </button>
        </>
    );
};
Button.defaultProps = {
    text: "button",
};
export default Button;

import React from "react";

export const Tab = ({ text }: { text: string }) => {
    return (
        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
                aria-hidden
                className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>{text}</span>
        </span>
    );
};

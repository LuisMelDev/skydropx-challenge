import React from "react";

export const Td = ({ children }: { children: JSX.Element | null }) => {
    return (
        <td className='px-5 py-5 border-b border-gray-200 text-sm text-gray-900 whitespace-no-wrap'>
            {children}
        </td>
    );
};

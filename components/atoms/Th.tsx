import React from "react";

export const Th = ({ name }: { name: string }) => {
    return (
        <th className='px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
            {name}
        </th>
    );
};

import React, { MouseEventHandler } from "react";
import { Tab, Td } from "..";

interface ItemTableProps{
    rate: any;
    recomended: boolean;
    onClick: MouseEventHandler<HTMLTableRowElement>
}

export const ItemTable = ({
    rate,
    recomended = false,
    onClick
}: ItemTableProps) => {
    const { provider, service_level_name, days, total_pricing } = rate;
    return (
        <tr className='hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition ease-in-out delay-80' onClick={onClick} >
            <Td>
                <div className='flex items-center'>
                    <p>{provider}</p>
                </div>
            </Td>
            <Td>
                <p>{service_level_name}</p>
            </Td>
            <Td>
                <p>{days} dias</p>
            </Td>
            <Td>
                <p>{total_pricing} MXN</p>
            </Td>
            <Td>{recomended ? <Tab text='Mejor Opcion' /> : null}</Td>
        </tr>
    );
};

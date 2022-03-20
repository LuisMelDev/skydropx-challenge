import { MouseEventHandler } from "react";
import { ItemTable, TableHead } from "..";

const heads = [
    "Paqueteria",
    "Servicio",
    "Entrega Estimada",
    "Precio",
    "Recomendacion",
];

interface TableRatesProps {
    rates: any;
    onClickRate: (id:string) => void
}

export const TableRates = ({ rates,onClickRate }: TableRatesProps) => {
    return (
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 pt-4 overflow-x-auto'>
            <div className='inline-block min-w-full overflow-hidden'>
                <table className='min-w-full leading-normal'>
                    <TableHead heads={heads} />
                    <tbody>
                        {rates.map((rate: any, index: number) => (
                            <ItemTable
                                key={rate.id}
                                rate={rate}
                                recomended={index === 0}
                                onClick={() => onClickRate(rate.id)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

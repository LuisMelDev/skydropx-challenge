import React from "react";
import { Th } from "..";

export const TableHead = ({ heads }: { heads: string[] }) => {
    return (
        <thead>
            <tr>
                {heads.map((name) => (
                    <Th name={name} key={name} />
                ))}
            </tr>
        </thead>
    );
};


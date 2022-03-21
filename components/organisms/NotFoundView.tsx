import Link from "next/link";
import React from "react";
import { Button } from "..";

export const NotFoundView = () => {
    return (
        <div className='h-full w-full flex flex-col justify-center items-center mt-10'>
            <h1 className='text-9xl font-extrabold text-gray-600 tracking-widest'>
                404
            </h1>
            <div className='bg-blue-600 text-white px-2 text-sm rounded rotate-12 absolute'>
                Page Not Found
            </div>
            <div className='mt-5'>
                <span className='relative block '>
                    <Button className='px-5 py-2 rounded-md text-white bg-blue-500 shadow-md'>
                        <Link href='/' passHref>
                            <a>Ir al Inicio</a>
                        </Link>
                    </Button>
                </span>
            </div>
        </div>
    );
};

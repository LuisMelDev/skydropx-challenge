import React from "react";
import { Navbar, Spinner } from "..";
import { useSelector,useDispatch } from "react-redux";
import { ErrorMessage } from "..";
import { useEffect } from 'react';
import { setTimeout } from "timers";
import { removeError } from "redux/actions";

interface Props {
    children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
    const ui = useSelector((state: any) => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
      let timer: any = null
      if(ui.msgError){
        timer = setTimeout(() => {
          dispatch(removeError());
        }, 5000);
      }
      return () => timer && clearTimeout(timer)
    },[ui]) // eslint-disable-line

    return (
        <div className='min-h-screen w-full bg-slate-100 pb-5 overflow-x-hidden'>
            <Navbar />
            {children}
            {ui.msgError && <ErrorMessage message={ui.msgError} />}
            {ui.loading && <Spinner />}
        </div>
    );
};

import React, {} from 'react'
import { Navbar } from '..'

interface Props {
    children: JSX.Element
}

export const Layout = ({children}: Props) => {
  return (
    <div className='min-h-screen w-full bg-slate-100'>
        <Navbar />
        {children}
    </div>
  )
}

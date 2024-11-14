import React from 'react'
import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from './footer';


export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
};

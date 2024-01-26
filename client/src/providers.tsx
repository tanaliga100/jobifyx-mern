import React from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster position="top-center" />
    </>
  );
};

export default Providers;

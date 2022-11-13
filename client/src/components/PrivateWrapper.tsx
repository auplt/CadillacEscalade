import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export type PrivateWrapperProps = {
    condition: boolean;
};

const PrivateWrapper = ({ condition }: PrivateWrapperProps) => {
    return condition ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateWrapper;

import React from "react";
import { Route, Navigate } from "react-router-dom"; // Update import statement
import { useAuth } from "./authContext";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? (
                    <Component {...props} />
                ) : path === "/" ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" replace /> // Change Redirect to Navigate
                );
            }}
        />
    );
};

export default PrivateRoute;

"use client";

import { deleteCookie } from "cookies-next";
import CONSTANTS from "@/app/constants";

const useAuth = () => {
    const signup = ({ email, password, name }, callback) => {
        const requestBody = {
            email,
            password,
            name
        };

        fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type":"application/json",
            },
        })
        .then((data) => data.json())
        .then((response) => {
            callback(response);

            /* if(response.status === CONSTANTS.RESPONSE_STATUS.OK) {
                if(callback) {
                    callback(response);
                }
            } */
        })
        .catch(() => {});
    };

    const signin = ({ email, password }, callback) => {

        const requestBody = {
            email,
            password,
        };

        fetch(" /api/auth/signin", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type":"application/json",
            },
        })
        .then((data) => data.json())
        .then((response) => {
            if(response.status === CONSTANTS.RESPONSE_STATUS.OK) {
                if(callback) {
                    callback();
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const signout = () => {
        deleteCookie("next-jwt");
    }

    return{
        signup,
        signin,
        signout
    }
}

export default useAuth;
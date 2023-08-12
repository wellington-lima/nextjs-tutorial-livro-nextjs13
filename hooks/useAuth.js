"use client";

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

    return{
        signup,
    }
}

export default useAuth;
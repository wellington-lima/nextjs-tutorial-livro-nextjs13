"use client"

import { useRef } from "react";
import useAuth from "@/hooks/useAuth";

export default function SignUpPage() {
  const { signup } = useAuth();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInpurRef = useRef();

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInpurRef.current.value;

    signup({ email, password, name }, (response) => {
      alert(response.data);
    });
  };

  return (
    <>
      <h1>Create new account</h1>
        <form onSubmit={handleFormSubmission}>
          <div class="row">
            <div class="col-label">
              <label htmlFor="name">Name</label>
            </div>
            <div className="col-input">
              <input type="text" id="name" ref={nameInputRef} />
            </div>
          </div>

          <div class="row">
            <div class="col-label">
              <label htmlFor="email">E-mail</label>
            </div>
            <div className="col-input">
              <input type="email" id="email" ref={emailInputRef} />
            </div>
          </div>
          
          <div class="row">
            <div class="col-label">
              <label htmlFor="password">Password</label>
            </div>
            <div className="col-input">
              <input type="password" id="password" ref={passwordInpurRef} />
            </div>
          </div>

          <input type="submit" value="Sign Up" />
        </form>
    </>
  );
}
import React, { useState, useContext, useEffect } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const switchModeHandler = () => {
    // if (!isLoginMode) {
    //   setFormData(
    //     {
    //       ...formState.inputs,
    //       name: undefined,
    //     },
    //     formState.inputs.email.isValid && formState.inputs.password.isValid
    //   );
    //   setEmail()
    // } else {
    //   setFormData(
    //     {
    //       ...formState.inputs,
    //       name: {
    //         value: "",
    //         isValid: false,
    //       },
    //     },
    //     false
    //   );
    // }
    setIsLoginMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    handleValidations();
  }, [password, name, email, isLoginMode]);

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(email, password);
    auth.login();
  };

  const handleChange = (e) => {
    let name = e.target.id;
    let value = e.target.value;
    //A more optimized way than regular if else
    let map = {
      name: () => {
        setName(value);
      },
      email: () => {
        setEmail(value);
      },
      password: () => {
        setPassword(value);
      },
    };

    //checking if the name property in present in map to avoid runtime error of calling undefined
    if (name in map) {
      map[name]();
    }
  };
  const handleValidations = () => {
    //Logic for handling very basic validations on login page.Try to add more robust validation scenarios
    if (isLoginMode && (password.length < 8 || !email)) {
      setIsDisabled(true);
    }

    //Logic for handling very basic validations on sign up page
    else if (
      !isLoginMode &&
      (name.length < 5 || password.length < 8 || !email)
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler} className={`form-control`}>
        {!isLoginMode && (
          <>
            <label htmlFor={"name"}>{"Your Name"}</label>
            <input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              errorText="Please enter a name."
              onChange={handleChange}
              value={name}
            />
          </>
        )}
        <label htmlFor={"email"}>{"E-Mail"}</label>
        <input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          errorText="Please enter a valid email address."
          onChange={handleChange}
          value={email}
        />

        <label htmlFor={"password"}>{"Password"}</label>
        <input
          element="input"
          id="password"
          type="password"
          label="Password"
          errorText="Please enter a valid password, at least 5 characters."
          onChange={handleChange}
          value={password}
        />
        <br />
        <Button type="submit" disabled={isDisabled}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;

import React, { useState } from "react";

const LoginContext = React.createContext({
  isloggedIn: false,
  login: (token) => {},
  logout: () => {},
  token: "",
});

export const LoginContextProvider = (props) => {
  let initialToken = localStorage.getItem("token");
  console.log(initialToken);
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn);
  const loginUser = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    // setLogin(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
    // setLogin(false);
  };

  const userContext = {
    isloggedIn: userIsLoggedIn,
    login: loginUser,
    logout: logoutUser,
    token: token,
  };
  return (
    <LoginContext.Provider value={userContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;

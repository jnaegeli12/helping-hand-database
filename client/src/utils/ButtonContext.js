import React from "react";

const ButtonContext = React.createContext({
  display: false,
  msg: "default value",
  type: "",
  onClick: () => undefined
});

export default ButtonContext;
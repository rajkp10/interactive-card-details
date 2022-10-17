import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const initialValues = {
  holderName: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  cvv: "",
};

const AppProvider = ({ children }) => {
  const [formDetails, setFormDetails] = useState(initialValues);
  const [success, setSuccess] = useState(false);

  const customHandleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSuccess(!success);
    if (success) {
      setFormDetails(initialValues);
    }
  };

  return (
    <AppContext.Provider
      value={{
        formDetails,
        success,
        setFormDetails,
        customHandleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

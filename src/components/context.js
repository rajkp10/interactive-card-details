import React, { useState, useContext, useEffect } from "react";

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

  useEffect(() => {
    if (!success) {
      setFormDetails(initialValues);
    }
  }, [success]);

  return (
    <AppContext.Provider
      value={{
        formDetails,
        success,
        setFormDetails,
        customHandleChange,
        setSuccess,
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

import React, {useState, createContext, useContext} from 'react';

interface AlertProviderProps {
  children: React.ReactNode;
}

export interface IAlertContext {
  error: null | string;
  success: null | string;
  setError: Function;
  setSuccess: Function;
}

const AlertContext = createContext<IAlertContext>({
  error: null,
  success: null,
  setError: Function,
  setSuccess: Function,
});

export const AlertProvider = ({children}: AlertProviderProps): JSX.Element => {
  const [error, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccessMessage] = useState<string | null>(null);

  const setError = (message: string | null, duration = 5) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, duration * 1000);
  };

  const setSuccess = (message: string | null, duration = 5) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage(null);
    }, duration * 1000);
  };

  return (
    <AlertContext.Provider value={{error, success, setError, setSuccess}}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = (): IAlertContext => {
  const context = useContext(AlertContext);

  // force hook to be used within AlertProvider
  if (context === undefined) {
    throw new Error('useAlert must be used within a AlertProvider');
  }

  return context;
};

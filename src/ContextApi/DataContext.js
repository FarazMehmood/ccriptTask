import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    imperial: {
      pounds: '',
      feet: '',
      inches: '',
    },
    metric: {
      kilograms: '',
      meters: '',
    },
  });

  const saveDataToStorage = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const loadDataFromStorage = async () => {
    try {
      const savedData = await AsyncStorage.getItem('userData');
      if (savedData) {
        setData(JSON.parse(savedData));
      }
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    loadDataFromStorage();
  }, []);
 useEffect(() => {
    saveDataToStorage();
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  return useContext(DataContext);
};

export { DataContextProvider, useDataContext };

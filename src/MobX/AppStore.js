import { makeAutoObservable } from 'mobx';

class DataStore {
  pounds = '';
  feet = '';
  inches = '';

  constructor() {
    makeAutoObservable(this);
  }

  setPounds(pounds) {
    this.pounds = pounds;
  }

  setFeet(feet) {
    this.feet = feet;
  }

  setInches(inches) {
    this.inches = inches;
  }
  
  async saveDataToStorage() {
    try {
      const data = {
        pounds: this.pounds,
        feet: this.feet,
        inches: this.inches,
      };
      await AsyncStorage.setItem('userData', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  }

  async loadDataFromStorage() {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data) {
        const parsedData = JSON.parse(data);
        this.pounds = parsedData.pounds;
        this.feet = parsedData.feet;
        this.inches = parsedData.inches;
      }
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  }
}

const dataStore = new DataStore();

export default dataStore;

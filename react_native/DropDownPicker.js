import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import App from './App.js';

class DropDownPicker extends Component {
  constructor() {
    super();
    this.state = {
      value: '0',
      option: 'INR',
      outputCurrency: '0',
      outputCountry: 'india',
    };
    this.handleCurrency = this.handleCurrency.bind(this);
    this.changedOption = this.changedOption.bind(this);
    this.convertOption = this.convertOption.bind(this);
  }
  handleCurrency(newValue) {
    const convertingCurrency = this.state.value;
    let convertedCurrency;
    const fromcountry = this.state.option;
    const toCountry = this.state.outputCountry;
    if(fromcountry == 'none' && toCountry == 'none'){
      convertedCurrency = "Choose a Currency"
    }
    else if(fromcountry == 'none' && toCountry == 'usd'){
      convertedCurrency = "Choose a Currency"
    }
    else if(fromcountry == 'none' && toCountry == 'euro'){
      convertedCurrency = "Choose a Currency"
    }
    else if(fromcountry == 'none' && toCountry == 'malaysia'){
      convertedCurrency = "Choose a Currency"
    }
    else if(fromcountry == 'none' && toCountry == 'india'){
      convertedCurrency = "Choose a Currency"
    }
    else if(fromcountry == 'none' && toCountry == 'japan'){
      convertedCurrency = "Choose a Currency"
    }
    else if(fromcountry == 'usd' && toCountry == 'none'){
      convertedCurrency = "Choose a Currency"
    }
    else if (fromcountry == 'usd' && toCountry == 'usd') {
      convertedCurrency = convertingCurrency;
    } else if (fromcountry == 'usd' && toCountry == 'euro') {
      convertedCurrency = 0.92 * convertingCurrency;
    } else if (fromcountry == 'usd' && toCountry == 'india') {
      convertedCurrency = 75.88 * convertingCurrency;
    } else if (fromcountry == 'usd' && toCountry == 'malaysia') {
      convertedCurrency = 4.35 * convertingCurrency;
    } else if (fromcountry == 'usd' && toCountry == 'japan') {
      convertedCurrency = 107.1 * convertingCurrency;
    } else if(fromcountry == 'euro' && toCountry == 'none'){
      convertedCurrency = "Choose a Currency"
    } else if (fromcountry == 'euro' && toCountry == 'usd') {
      convertedCurrency = 1.08 * convertingCurrency;
    } else if (fromcountry == 'euro' && toCountry == 'euro') {
      convertedCurrency = convertingCurrency;
    } else if (fromcountry == 'euro' && toCountry == 'india') {
      convertedCurrency = 82.02 * convertingCurrency;
    } else if (fromcountry == 'euro' && toCountry == 'malaysia') {
      convertedCurrency = 4.7 * convertingCurrency;
    } else if (fromcountry == 'euro' && toCountry == 'japan') {
      convertedCurrency = 115.77 * convertingCurrency;
    } else if(fromcountry == 'malaysia' && toCountry == 'none'){
      convertedCurrency = "Choose a Currency"
    }else if (fromcountry == 'malaysia' && toCountry == 'usd') {
      convertedCurrency = 0.23 * convertingCurrency;
    } else if (fromcountry == 'malaysia' && toCountry == 'euro') {
      convertedCurrency = 0.21 * convertingCurrency;
    } else if (fromcountry == 'malaysia' && toCountry == 'malaysia') {
      convertedCurrency = convertingCurrency;
    } else if (fromcountry == 'malaysia' && toCountry == 'india') {
      convertedCurrency = 17.44 * convertingCurrency;
    } else if (fromcountry == 'malaysia' && toCountry == 'japan') {
      convertedCurrency = 24.61 * convertingCurrency;
    } else if(fromcountry == 'india' && toCountry == 'none'){
      convertedCurrency = "Choose a Currency"
    }else if (fromcountry == 'india' && toCountry == 'usd') {
      convertedCurrency = 0.013 * convertingCurrency;
    } else if (fromcountry == 'india' && toCountry == 'euro') {
      convertedCurrency = 0.012 * convertingCurrency;
    } else if (fromcountry == 'india' && toCountry == 'malaysia') {
      convertedCurrency = 0.057 * convertingCurrency;
    } else if (fromcountry == 'india' && toCountry == 'india') {
      convertedCurrency = convertingCurrency;
    } else if (fromcountry == 'india' && toCountry == 'japan') {
      convertedCurrency = 1.41 * convertingCurrency;
    }  else if(fromcountry == 'japan' && toCountry == 'none'){
      convertedCurrency = "Choose a Currency"
    }else if (fromcountry == 'japan' && toCountry == 'usd') {
      convertedCurrency = 0.0093 * convertingCurrency;
    } else if (fromcountry == 'japan' && toCountry == 'euro') {
      convertedCurrency = 0.0086 * convertingCurrency;
    } else if (fromcountry == 'japan' && toCountry == 'malaysia') {
      convertedCurrency = 0.041 * convertingCurrency;
    } else if (fromcountry == 'japan' && toCountry == 'india') {
      convertedCurrency = 0.71 * convertingCurrency;
    } else if (fromcountry == 'japan' && toCountry == 'japan') {
      convertedCurrency = convertingCurrency;
    } 

    this.setState({
      value: newValue,
      outputCurrency: convertedCurrency,
    });
  }
  changedOption(newOption) {
    this.setState({
      option: newOption,
    });
  }
  convertOption(toCurrency) {
    this.setState({
      outputCountry: toCurrency,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/money_burned.png')}
        />
        <Text style={styles.header}>CURRENCY CONVERTER</Text>
        <View>
          <Picker
          mode="dropdown"
            style={styles.picker}
            Label="Select"
            onValueChange={this.changedOption}>
             <Picker.Item label="$$$" value="none" />
            <Picker.Item label="USD" value="usd" />
            <Picker.Item label="EUR" value="euro" />
            <Picker.Item label="INR" value="india" />
            <Picker.Item label="MYR" value="malaysia" />
            <Picker.Item label="JPY" value="japan" />
          </Picker>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Enter Currency Value"
            keyboardType={'numeric'}
            placeholderTextColor="#2ddf28"
            onChangeText={this.handleCurrency}
          />
        </View>
        <View>
          <Picker
            style={styles.picker}
            Label="Select"
            onValueChange={this.convertOption}>
             <Picker.Item label="$$$" value="none" />
            <Picker.Item label="USD" value="usd" />
            <Picker.Item label="EUR" value="euro" />
            <Picker.Item label="INR" value="india" />
            <Picker.Item label="MYR" value="malaysia" />
            <Picker.Item label="JPY" value="japan" />
          </Picker>
        </View>
        <Text style={styles.textInput}>{this.state.outputCurrency}</Text>
      </View>
    );
  }
}
export default DropDownPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2f4f4f',
    padding: 8,
  },

  image: {
    margin: 20,
    padding: 10,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  header: {
    color: '#2ddf28',
    fontFamily: 'Roboto',
    alignSelf: 'center',
    padding: 5,
    margin: 5,
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#777',
    color: '#2ddf28',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    height: 30,
    backgroundColor: '#2f4f5f',
  },
  picker: {
    backgroundColor: '#2f4f5f',
    color: '#2ddf28',
    flexDirection: 'row',
    height: 30,
    width: 55,
  },
});

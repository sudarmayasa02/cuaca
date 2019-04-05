import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, TextInput } from 'react-native';

export default class Cuaca extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        city: '',
        forecast: {
          main: '-',
          description: '-',
          temp: '-',
          pressure: '-',
          humidity: '-',
          sea_level: '-',
          wind_speed: '-',
          sunrise: '-',
          sunset: '-'
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=547e623a913f1fd7c15224590bcf2bfd&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
          sea_level: responseJson.main.sea_level,
          wind_speed: responseJson.wind.speed,
          sunrise: responseJson.sys.sunrise,
          sunset: responseJson.sys.sunset
        }
      });
    });
  }
    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.box1}>
            <Text style={styles.text1}>Prakiraan Cuaca Sederhana</Text>
          </View>
          <View style={styles.box2}>
                <TextInput
                  style={styles.text1}
                  placeholder="Masukkan Nama Kota"
                  onChangeText={(city) => this.setState({ city })}
                />
                <Button
                onPress={() => this.getWeather()}
                  title="Lihat"
                  color="#2E7D32"
                  accessibilityLabel="Klik untuk melihat"
                />
              </View>

              <View style={styles.box3}>

                <View style={styles.box4}>
                  <View style={styles.box5}>
                    <Text style={styles.text2}>
                      Cuaca = {this.state.forecast.main} {'\n'}
                    </Text>
                  </View>
                  <View style={styles.box5}>
                    <Text style={styles.text2}>
                      Deskripsi = {this.state.forecast.description} {'\n'}
                    </Text>
                  </View>
                </View>

                <View style={styles.box4}>
                  <View style={styles.box5}>
                    <Text style={styles.text2} >
                      Temperatur = {this.state.forecast.temp} {"'Celcius"}
                    </Text>
                  </View>
                  <View style={styles.box5}>
                    <Text style={styles.text2} >
                      Tekanan = {this.state.forecast.pressure} {'\n'}
                    </Text>
                  </View>
                </View>

                <View style={styles.box4}>
                  <View style={styles.box5}>
                    <Text style={styles.text2} >
                      Kelembapan = {this.state.forecast.humidity} {'\n'}
                    </Text>
                  </View>
                  <View style={styles.box5}>
                    <Text style={styles.text2} >
                      Tinggi air laut = {this.state.forecast.sea_level} {'\n'}
                    </Text>
                  </View>
                </View>

              <View style={styles.box4}>
                <View style={styles.box5}>
                  <Text style={styles.text2} >
                    Waktu Terbit Matahari = {this.state.forecast.sunrise}
                  </Text>
                </View>
                <View style={styles.box5}>
                  <Text style={styles.text2} >
                    Waktu Terbenam Matahari = {this.state.forecast.sunset}
                  </Text>
                </View>
              </View>

            </View>

          <View style={styles.box6}>
            <Text style={styles.text1}>Gede_Sudarma_Yasa React_Native</Text>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#E8F5E9',
      flex: 1,
      flexDirection: 'column',
    },

    box1: {
      backgroundColor: '#1B5E20',
      flex: 1,
      justifyContent: 'center'
    },

    box2: {
      backgroundColor: '#388E3C',
      flex: 1,
      justifyContent: 'center'
    },

    box3: {
      backgroundColor: '#E8F5E9',
      flex: 4,
      flexDirection: 'column',
      justifyContent: 'space-around',
      // alignItems: 'center',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10
    },

    box4: {
      backgroundColor: 'black',
      flexDirection: 'row',
      flex: 2,
    },

    box5: {
      backgroundColor: '#c6cbd1',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    },

    box6: {
      backgroundColor: '#4a9186',
      flex: 1,
      justifyContent: 'center'
    },

    text: {
      padding: 30,
      fontSize: 20,
      // color: 'white',
      // textAlign: 'center'
    },

    text1: {
      padding: 30,
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
    },

    text2: {
      padding: 10,
      fontSize: 15
    }
  });

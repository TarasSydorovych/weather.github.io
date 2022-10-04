
import React from "react";
import useMap from "./components/Map";
import Weather from "./components/Weather";
import Map from "./components/Map";
import Header from "./components/Header";

class App extends React.Component  {
    state = {
        country: undefined,
        tempre: undefined,
        pressure: undefined,
        sunrise: undefined
    }
     onClick = async (...args: any[]) => {
        const keyApi = '896318734d52acf68f3a8430bdf2c603';
        const cel = 273.15;
        let hf;
        const lat=49.917646, lon=24.601007;
        let x, y;
        // console.log(
        //     'onClick args: ',
        //      args[0].latLng.lat(),
        //     ' : ',
        //      args[0].latLng.lng()
        //  )
        const urlForApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${args[0].latLng.lat()}&lon=${args[0].latLng.lng()}&appid=${keyApi}`)
        const data = await urlForApi.json();
         let unix_timestamp  = data.sys.sunrise;
         let date = new Date(unix_timestamp * 1000);
         let hours = date.getHours();
         let minutes = "0" + date.getMinutes();
         let seconds = "0" + date.getSeconds();
         let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        let tempCel = data.main.temp - cel, tempLike = data.main.feels_like - cel;


         this.setState({
             country: data.sys.country,
             tempre: tempCel.toFixed(2),
             tempLike: tempLike.toFixed(2),
             pressure: (data.main.pressure/1000).toFixed(2),
             windSpeed: data.wind.speed,
             sunrise: formattedTime
         })
    }
    // const getWeather = async () =>{
    //
    //
    //
    //     const urlForApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=${keyApi}`)
    //     const data = await urlForApi.json();
    //     let sunrise = data.sys.sunrise;
    //     let date = new Date();
    //     date.setTime(sunrise)
    //     let sunriseDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    //     let tempCel = data.main.temp - cel;
    //
    //
    //
    //     state.country = data.sys.country;
    //     state.tempre = tempCel.toFixed(2);
    //     state.pressure = data.main.pressure;
    //     state.sunrise = sunriseDate;
    //
    //
    // }

render() {





    return (

        <div>
<Header/>
          <Map oncl={this.onClick} />
            <Weather country={this.state.country}
                     tempre={this.state.tempre}
                     tempLike={this.state.tempLike}
                     windSpeed={this.state.windSpeed}
                     pressure={this.state.pressure}
                     sunrise={this.state.sunrise}
            />
        </div>
    )

}
}

export default App;

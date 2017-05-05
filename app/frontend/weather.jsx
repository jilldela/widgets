import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {location: 'string', weather: "", };
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    var that = this;
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    var request = new XMLHttpRequest();
    request.open(
      'GET',
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=cd5a234e334fc1e33835ca2ebf269cf2`,
      true
    );
    var that = this;
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;

        that.setState({weather: JSON.parse(resp).weather[0].description});
        that.setState({location: JSON.parse(resp).name});
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }


  render() {
    return (
      <div>
        {this.state.location}
      <br/>
        {this.state.weather}
      </div>
    );
  }
}

export default Weather;

// cd5a234e334fc1e33835ca2ebf269cf2

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay'
import Spinner from './spinner';

class App extends React.Component {

    state={lat:null, errorMessage:''};//This is the only time we do direct assignment to this.state



  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition (
      position => this.setState({ lat: position.coords.latitude} ),
      err => this.setState({errorMessage:err.message})
      );

  }
  //React says we have to define render!!
  renderContent() {
    if(this.state.errorMessage && !this.state.lat){
    return  <div>Error:{this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.lat) {
      return <div> <SeasonDisplay lat={this.state.lat} /> </div>;
    }
    return <Spinner message="Please accept the location request."/>;


  }

  render() {
    return (
      <div className="border red">

      {this.renderContent()}t
      </div>

    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

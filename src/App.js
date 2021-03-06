import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Line as LineChart } from 'react-chartjs';

var data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
    };
var options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to</h2>
        </div>
        <p className="App-intro">
          Tso get started, edit <code>rc/App.js</code> and save to reload.
        </p>
        <LineChart data={data} options={options} width="600" height="250"/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





let a = {
    name: "Andrei",
    age: 28,
    address : {
        city: "Tolochin",
        countri: "Belarus"
    }
};

let users =
    [
        {
            name: "Andrei",
            age: 28,
            address: {
                city: "Tolochin",
                countri: "Belarus"
            }
        },
        {
            name: "dimych",
            age: 22,
            address: {
                city: "Minsk",
                countri: "Belarus"
            }
        }
        ]

console.log(users[0].address.city)



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'css/reset.css';
import 'css/style.css';

console.log("Welcome")
ReactDOM.render(<App />, document.getElementById('root'))


//  Toggle the product filters to show when button is click
const filt_toggle = document.querySelector(`.filt-toggle`)
const filters = document.querySelector(`.filters`)

try {
  filt_toggle.addEventListener('click',function () {
    if (filters.classList.contains(`m-hide`)) {
      filters.classList.remove('m-hide')
    } else {
      filters.classList.add('m-hide')
    }
  })
}
catch(err) {
  console.log("Error message: "+err.message)
}

//  Toggle the product filters to show when button is click
const nav_toggle = document.querySelector(`.nav-toggle`)
const navigation = document.querySelector(`.navigation`)
nav_toggle.addEventListener('click',function () {
  if (navigation.classList.contains(`m-hide`)) {
    navigation.classList.remove('m-hide')
    navigation.classList.add('nav_style')
  } else {
    navigation.classList.remove('nav_style')
    navigation.classList.add('m-hide')
  }
})
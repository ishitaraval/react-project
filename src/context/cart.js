import {createContext} from 'react'
// const {BrowserRouter, Switch, Route, Redirect, Link} = ReactRouterDOM

//////////////////////////////////////
// FILE: contexts/cart.js
const CartContext = createContext()
const useMoney = (cents) => {
	return `$ ${(cents / 100).toFixed(2)}`
}

export  {CartContext, useMoney}
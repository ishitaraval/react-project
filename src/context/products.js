const {useState, useContext, createContext} = React
const {BrowserRouter, Switch, Route, Redirect, Link} = ReactRouterDOM


//////////////////////////////////////
// FILE: contexts/products.js
const ProductsContext = createContext()

export default ProductsContext
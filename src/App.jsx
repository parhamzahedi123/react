import React from "react";
import Menu from "Menu.jsx";
import Header from "./Header.jsx";
import Product from "./Product.jsx";
import './App.css';
function App(){
  return(
    <>
    <Header/>
<Menu/>
      
     <div className="container">
      <Product image="O.jpg"  title="product1"  price={50}/>
      <Product image="ww.jpg"  title="product2"  price={1000}/>
      <Product image="O.jpg"  title="product3"  price={60}/>
      
     </div>
     
      
    </>
  )
}
export default App;

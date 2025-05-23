import './Product.css';
function Product (props){
    return(
<>
<div className="product-box">
    <img src={props.image}  alt="this is test" className="product-box img"/>
<h1> {props.title}  </h1>
<p className="product-price">{props.price} </p>
<button className="product-button">افزودن به سبد خرید</button>


</div>
</>


    )
        
}

export default Product;

//parham zahedi and sahand bakhshayesh

import logo from '../logo.svg';
import './Product.css';


function Product() {
  return (
    <div className="Product">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Product Page
        </p>
      </header>
    </div>
  );
}

export default Product;

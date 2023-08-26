import asc from './asc1.svg';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";


function Navbar() {
  return (
    <div class="Navbar">
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <a href="/" class="nlogo d-flex align-items-center">
                    <img src={asc} className="navLogo" alt="navLogo"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span class="navbar-toggler-icon"></span> */}
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-link" to="/" style={{textDecoration: 'none'}}>
                            Beranda
                        </Link> 
                        <Link className="nav-link" to="/product" style={{textDecoration: 'none'}}>
                            Produk
                        </Link>
                        <Link className="nav-link" to="/about" style={{textDecoration: 'none'}} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                            Tentang Kami
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        <Outlet />
        {/* <header id="header" class="header fixed-top">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="/" class="logo d-flex align-items-center">
                    <img src={asc} alt="Logo"/>
                </a>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><Link to="/" style={{textDecoration: 'none'}}>Home</Link></li>
                        <li><Link to="/product" style={{textDecoration: 'none'}}>Product</Link></li>
                        <li><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <Outlet />
            </div>
        </header> */}
    </div>
  );
}

export default Navbar;

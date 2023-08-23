import asc from './asc1.svg';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";


function Navbar() {
  return (
    <div class="Navbar">
        <header id="header" class="header fixed-top">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="/" class="logo d-flex align-items-center">
                    <img src={asc} alt="Logo"/>
                </a>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><Link to="/" style={{textDecoration: 'none'}}>Beranda</Link></li>
                        <li><Link to="/product" style={{textDecoration: 'none'}}>Produk</Link></li>
                        <li><Link to="/about" style={{textDecoration: 'none'}}>Tentang Kami</Link></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <Outlet />
            </div>
        </header>
    </div>
  );
}

export default Navbar;

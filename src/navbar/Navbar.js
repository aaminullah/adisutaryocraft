import asc from './asc1.svg';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const translationsEn = {
    home: "Home",
    product: "Product",
    about: "About",
  };
  
  const translationsId = {
    home: "Beranda",
    product: "Produk",
    about: "Tentang Kami",
  };
  
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: { translation: translationsEn },
        id: { translation: translationsId },
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });

function Navbar() {
  const { t } = useTranslation();
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
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
                            {t("home")}
                        </Link> 
                        <Link className="nav-link" to="/product" style={{textDecoration: 'none'}}>
                            {t("product")}
                        </Link>
                        <Link className="nav-link" to="/about" style={{textDecoration: 'none'}}>
                            {t("about")}
                        </Link>
                        <select class="form-select form-select-sm mx-3" aria-label="Small select example" onChange={onChange}>
                            <option className="option" value="en" selected>EN</option>
                            <option className="option" value="id">ID</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
        <Outlet />
    </div>
  );
}

export default Navbar;

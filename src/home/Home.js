import './Home.css';
import { Link } from "react-router-dom";
import pwood from './pinewood.jpg';
import tray from '../product/photo/Nampan.png';
import tbox from '../product/photo/KotakTisu.png';
import lamp from '../product/photo/LampuHias.png';
import { Suspense } from 'react';


function Home() {
  return (
    <div className="Home">
      <div className="hcont">
        <Suspense>
          <div className="imgcont">
            <img src={pwood} className="imgHeader" alt="pineWood"></img>
            <div className="shdw">
              <div className="txthdr animate__animated animate__fadeInUp">
                <h1 className="hd1">Mengubah</h1>
                <h1 className="hd1a">Kayu Pinus</h1>
                <br></br>
                <h1 className="hd2">Menjadi</h1>
                <h1 className="hd3">Karya</h1>
              </div>
            </div>
          </div>
        </Suspense>
        <div className="mvp">
          <div className="mvpHeader">
            <h1 className="mvptxt pt-4 d-flex justify-content-center">Produk Unggulan Kami</h1>
          </div>
          <div className="row rowmvp d-flex justify-content-center pt-4 pb-4">
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={lamp} className="lamp card-img-top" alt="lamp"></img>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">Lampu Hias</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={tray} className="tray card-img-top" alt="tray"></img>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">Nampan</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={tbox} className="tissueBox card-img-top" alt="tissueBox"></img>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center">Kotak Tisu</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row rowAP pb-5">
            <h6 className="d-flex justify-content-center animate__animated animate__fadeInUp">
              <Link className="allProduct " to="/product" style={{textDecoration: 'none'}}>
                Lihat Semua Produk <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </h6> 
          </div>
        </div>
        <div className="row rowHC">
          <div className="row headerHC">
            <h1 className="txthc pt-4 pb-5 d-flex justify-content-center animate__animated animate__fadeInDown">Hubungi Kami</h1>
          </div>
          <div className="row contactHC pt-5 pb-5 d-flex justify-content-center">
            <div className="col-md-3">
              <div className="ic1 pb-4 d-flex justify-content-center">
                <i class="ico fa-solid fa-location-dot fa-3x"></i>
              </div>
              <h5 className="d-flex justify-content-center text-align-justify">
                <a className="text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/cFT1Jp5oitDPXYcX7">
                  Dusun Gondang RT02 RW12 Nglebak, Tawangmangu, Karanganyar, Jawa Tengah
                </a>
              </h5>
            </div>
            <div className="col-md-3">
              <div className="ic2 pb-4 d-flex justify-content-center">
                <i class="ico fa-brands fa-whatsapp fa-3x"></i>
              </div>
              <h5 className="d-flex justify-content-center">
                <a className="text-decoration-none" target="_blank" rel="noopener noreferrer" href="http://wa.me/6281215805269">
                  +62 812-1580-5269
                </a>
              </h5>
            </div>
            <div className="col-md-3">
              <div className="ic3 pb-4 d-flex justify-content-center">
                <i class="ico fa-regular fa-envelope fa-3x"></i>
              </div>
              <h5 className="d-flex justify-content-center">
                <a className="text-decoration-none" target="_blank" rel="noopener noreferrer" href="mailto:adisutaryocraft357@gmail.com">
                  adisutaryocraft357@gmail.com
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

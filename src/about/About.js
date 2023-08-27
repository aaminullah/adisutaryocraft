import './About.css';
import thgl from './THGL.svg';
import tgl from './TGL.svg';

function About() {
  return (
    <div className="About aboutpage container-fluid">
      <div className="acont">
        <div className="bgimgabout">
          <img src={tgl} className="abimgbg" alt="abimgbg"></img>
        </div>
        <div className="row rowAbout">
          <h1 className="headerAbout animate__animated animate__fadeInDown">Tentang Kami</h1>
        </div>
        <div className="row rowASC">
          <div className="col-md-6 kolom1">
            <img src={thgl} className="logoAboutASC animate__animated animate__fadeInLeft" alt="logo" />
          </div>
          <div className="col-md-6 kolom2">
            <p className="story animate__animated animate__fadeInUp">Adi Sutaryo Craft merupakan UMKM 
              yang bergerak di bidang kriya dengan bahan dasar yang digunakan adalah kayu pinus. 
              Didirikan oleh Bapak Adi Sutaryo dan Bapak Siswo pada tahun 2015 dan bertempat 
              di Dusun Gondang RT02 RW12 Nglebak, Tawangmangu, Karanganyar, Jawa Tengah. Beragam produk 
              telah dihasilkan mulai dari perabotan rumah, peralatan dapur, ornamen hias, 
              hingga produk yang dapat dipesan sesuai permintaan.
            </p>
          </div>
        </div>
      </div>
      <div className="acont2">
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

export default About;

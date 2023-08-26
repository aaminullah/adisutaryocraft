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
            <p className="story animate__animated animate__fadeInUp">Adi Sutaryo Craft merupakan UMKM yang bergerak di bidang kriya dengan bahan dasar
              yang digunakan adalah kayu pinus. Didirikan oleh Bapak Adi Sutaryo dan Bapak Siswo 
              pada tahun 2015 dan bertempat di Dusun Gondang RT02 RW12 Nglebak, Tawangmangu, 
              Karanganyar, Jawa Tengah. Beragam produk telah dihasilkan mulai dari perabotan rumah,
              peralatan dapur, ornamen hias, hingga produk <i>custom</i> yang dapat dipesan sesuai
              permintaan.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="acont2">
        <div className="row rowContact">
          <h1 className="headerContact animate__animated animate__fadeInDown">Hubungi Kami</h1>
        </div>
        <div className="row rowAllContact pt-4 d-flex justify-content-center">
          <div className="col-md-6 kolomC1">
            <a href="mailto:adisutaryocraft357@gmail.com" target="_blank" rel="noopener noreferrer" className="embtn btn btn-outline-light btn-lg"><i class="fa-regular fa-envelope"></i> adisutaryocraft357@gmail.com</a>
            <a href="http://wa.me/+6281215805269" target="_blank" rel="noopener noreferrer" className="wabtn btn btn-outline-light btn-lg"><i class="fa-brands fa-whatsapp"></i> +62 812-1580-5269</a>
          </div>
          <div className="col-md-6 kolomC1">
            
          </div>
        </div>
      </div> */}
      


      {/* <div className="cont">
        <h1 className="headerAbout">Tentang Kami</h1>
        <img src={tgl} className="imgbg" alt="imgbg"></img>
        <div className="row">
          <div className="col">
            <img src={thgl} className="logoAbout" alt="logo" />
          </div>
          <div className="col">
            <p className="story">Adi Sutaryo Craft merupakan UMKM yang bergerak di bidang kriya dengan bahan dasar
              yang digunakan adalah kayu pinus. Didirikan oleh Bapak Adi Sutaryo dan Bapak Siswo 
              pada tahun 2015 dan bertempat di Dusun Gondang RT02 RW12 Nglebak, Tawangmangu, 
              Karanganyar, Jawa Tengah. Beragam produk telah dihasilkan mulai dari perabotan rumah,
              peralatan dapur, ornamen hias, hingga produk <i>custom</i> yang dapat dipesan sesuai
              permintaan.
            </p>
          </div>
        </div>
      </div> */}

    </div>
    
  );
}

export default About;

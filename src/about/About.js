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
    </div>
    
  );
}

export default About;

import './About.css';
import thgl from './THGL.svg';
import tgl from './TGL.svg';


function About() {
  return (
    <div className="About container-fluid">
      <div className="cont">
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
      </div>
      
    </div>
  );
}

export default About;

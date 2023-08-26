import './Product.css';
import tbox from './photo/KotakTisu.png';
import setplate from './photo/PiringSet.png';
import tray from './photo/Nampan.png';
import setspatula from './photo/SetSpatula.png';
import soap from './photo/TempatSabun.png';
import lamp from './photo/LampuHias.png';
import hanger from './photo/Hanger.png';
import wallorn from './photo/HiasanDinding.png';
import pholder from './photo/PhoneHolder.png'
import phorg from './photo/PhoneOrganizer.png';
import rack from './photo/RakMineral.png';
import gmat from './photo/TatakanGelas.png';
import atk from './photo/TempatATK.png';
import jewel from './photo/TempatPerhiasan.png';
import knive from './photo/TempatPisau.png';
import paper from './photo/TempatSelebaran.png';
import cstm from './photo/Custom.png';


function Product() {
  return (
    <div className="Product">
      <div className="container-fluid">
        <div className="pcont">
          <div className="row">
            <h1 className="headerProduct animate__animated animate__fadeInDown">Produk Kami</h1>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={setplate} className="setPlate card-img-top" alt="setPlate"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center"> Set Piring</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={tray} className="tray card-img-top" alt="tray"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Nampan</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={tbox} className="tissueBox card-img-top" alt="tissueBox"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Kotak Tisu</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={setspatula} className="setSpatula card-img-top" alt="setSpatula"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Set Spatula</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={soap} className="soap card-img-top" alt="soap"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Tempat Sabun</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={lamp} className="lamp card-img-top" alt="lamp"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Lampu Hias</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={wallorn} className="wallorn card-img-top" alt="wallorn"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Hiasan Dinding</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={pholder} className="pholder card-img-top" alt="pholder"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Penyangga Handphone</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={hanger} className="hanger card-img-top" alt="hanger"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Gantungan Baju</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={phorg} className="phorg card-img-top" alt="phorg"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Rak Handphone</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={rack} className="rack card-img-top" alt="rack"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Rak Air Mineral</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={gmat} className="gmat card-img-top" alt="gmat"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Tatakan Gelas</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={atk} className="atk card-img-top" alt="atk"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Rak Alat Tulis</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={jewel} className="jewel card-img-top" alt="jewel"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Tempat Perhiasan</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={knive} className="knive card-img-top" alt="knive"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Tempat Pisau</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={paper} className="paper card-img-top" alt="paper"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center">Tempat Selebaran</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card animate__animated animate__fadeInUp">
                <img src={cstm} className="cstm card-img-top" alt="cstm"></img>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-center"><a href="http://wa.me/+6281215805269" target="_blank" rel="noopener noreferrer">Hubungi Kami</a></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

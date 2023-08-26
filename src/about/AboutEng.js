import './About.css';
import thgl from './THGL.svg';
import tgl from './TGL.svg';


function About() {
  return (
    <div className="About container-fluid">
      <div className="cont">
      <h1 className="headerAbout">About Us</h1>
        <img src={tgl} className="imgbg" alt="imgbg"></img>
        <div className="row">
          <div className="col">
            <img src={thgl} className="logoAbout" alt="logo" />
          </div>
          <div className="col">
            <p className="story">Adi Sutaryo Craft is an small business engaged in the field of craft with 
            the basic material used is pine wood. Founded by Mr Adi Sutaryo and Mr Siswo in 2015 and located 
            in Gondang RT02 RW12 Nglebak, Tawangmangu, Karanganyar, Central Java. Various products have been 
            produced ranging from home furnishings, kitchen equipment, ornamental ornaments, to custom products 
            that can be ordered upon request.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;

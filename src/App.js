import "./App.css";
import logo from "./images/logo.png";
import QR from "./images/QR.png";

function App() {
  return (
    <div>
      <div className="main-container">
        <div className="container1">
          <div className="inner-container1">
            <img src={logo} alt="shaastra-logo" id="shaastra-logo" />
            <br />
            <img src={QR} alt="qr" id="qr-code" />
            <h5>
              <u>Download our Shaastra App now</u>
            </h5>
          </div>
        </div>
        <div className="container2-container3">
          <div className="container2">
            <div className="inner-container2">
              <h1 className="h1">Address</h1>
              <address>
                IITM Students Activities Trust Shaastra,
                <br />
                1st Floor, O/o Dean Of Students Office,
                <br />
                IIT Madras, Guindy, Chennai, Tamil Nadu, Chennai - 600036
                <br />
              </address>
            </div>
          </div>
          <div className="container3">
            <div className="inner-container3">
              <h1 className="h1">Contact us</h1>
              <a href="outeach@shaastra.org">outreach@shaastra.org</a>
              <h6>
                To lodge a complaint
                <br /> click below.
              </h6>
              <button id="complaint">Complaints</button>
            </div>
          </div>
        </div>
        <div className="container4">
          <div className="inner-container4">
            <h1 className="h1">Connect with Us</h1>
            <div className="icons">
              <i id="icon1" class="fa-brands fa-square-instagram"></i>
              <i id="icon2" class="fa-brands fa-linkedin"></i>
              <i id="icon3" class="fa-brands fa-youtube"></i>
              <i id="icon4" class="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-info">
        <hr />
        <p> Developed by Shaastra Webops</p>
      </div>
    </div>
  );
}

export default App;

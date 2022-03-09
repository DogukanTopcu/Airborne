import React from 'react';
import "./footer.css";
//import "../bootstrap.css";

export default function Footer(props) {
    return (
        <footer>
            <div className="container" id='footer-text'>
                <div id="footer-top">{props.langFilteredProp[0].footerTitle}</div>
                <div id="adres">
                    <p>{props.langFilteredProp[0].address}</p><p>Gülbahçe, İzmir Yüksek Teknoloji Enstitüsü, 35430 Urla/İzmir</p>
                </div>
                <div id="tel">
                    <p>{props.langFilteredProp[0].phone}</p><p>+90 507 536 91 89</p>
                </div>
                <div id="social-media">
                        <a href="https://www.instagram.com/airbornerocket/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/company/airborneroket" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <br />
                <hr />
                <br />
                <div id='footer-bottom'>
                    <div id="copyright">© 2022 Airborne Rocket</div>
                    <div className='language'><a href='#'>English</a></div>
                </div>
            </div>
        </footer>
    );
}
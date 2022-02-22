import React from 'react';
import "./footer.css";
//import "../bootstrap.css";

export default function Footer() {
    return (
        <footer>
            <div className="container" id='footer-text'>
                <div id="footer-top">İLETİŞİM BİLGİLERİ</div>
                <div id="adres">
                    <p>Adres:</p><p>Gülbahçe, İzmir Yüksek Teknoloji Enstitüsü, 35430 Urla/İzmir</p>
                </div>
                <div id="tel">
                    <p>Telefon Numarası:</p><p>+90 507 536 91 89</p>
                </div>
                <div id="social-media">
                        <a href="https://www.instagram.com/airbornerocket/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/company/airborneroket" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
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
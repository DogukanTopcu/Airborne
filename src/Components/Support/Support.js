import React, { useState, useEffect } from "react";
import "./Support.scss";
import { Link } from "react-router-dom";


const Support = () => {

    const [dimensions, setDimensions] = useState(
        {
            winWidth: 0
        }
    );
    useEffect(() => {
        var cssAnimation = document.createElement('style');
        cssAnimation.type = 'text/css';
        var rules = document.createTextNode('@-webkit-keyframes slider {' +
            'from { left:8%; }' +
            `to { left:${(dimensions.winWidth * 92 / 100) - 489}px; }` +
            '}');
        cssAnimation.appendChild(rules);
        document.getElementsByTagName("head")[0].appendChild(cssAnimation);

        setDimensions({ winWidth: window.innerWidth })

        window.addEventListener("resize", detectSize);

        return () => {
            window.removeEventListener("resize", detectSize)
        }

    }, [dimensions.winWidth])


    const detectSize = () => {
        setDimensions(
            {
                winWidth: window.innerWidth
            }
        );
    }

    return (
        <div className="container support">
            <div className="text-zone">
                <h1>Takımımız için yeni</h1>
                <h1>sponsorlar arıyoruz!</h1>
                <Link to="/airborne_sponsorluk_dosyasi.pdf" target="_blank" download={true} className="flat-button">Sponsorluk Dosyası</Link>
            </div>
        </div>
    );


}

export default Support;
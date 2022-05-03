import React, {useState, useEffect} from "react";
import "./Support.scss";
import { Link } from "react-router-dom";


const Support = () => {

    const [dimensions, setDimensions] = useState(
        {
            winWidth : 0,
            winWidth : 0
        }
    );

    useEffect(()=>{
        var cssAnimation = document.createElement('style');
        cssAnimation.type = 'text/css';
        var rules = document.createTextNode('@-webkit-keyframes slider {'+
        'from { left:8%; }'+
        `to { left:${(dimensions.winWidth*92/100) - 378}px; }`+
        '}');
        cssAnimation.appendChild(rules);
        document.getElementsByTagName("head")[0].appendChild(cssAnimation);

        setDimensions({winWidth: window.innerWidth, winHeight: window.innerHeight})

        window.addEventListener("resize", detectSize);

        return () => {
            window.removeEventListener("resize",detectSize)
        }

    },[dimensions])


    const detectSize = () => {
        setDimensions(
            {
                winWidth: window.innerWidth,
                winHeight: window.innerHeight
            }
        );
    }


    return (
        <div className="container support">
            <div className="text-zone">
                <h1 className="slider-top">Takımımız için</h1>
                <h1>yeni sponsorlar</h1>
                <h1 className="slider-mid">arıyoruz!</h1>
                <Link to="/sponsor" className="flat-button slider-bottom">Sponsorluk Dosyası</Link>
            </div>
        </div>
    );


}

export default Support;
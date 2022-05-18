import React, { useState, useEffect } from 'react'
import "./contact.css"

import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
const Contact = () => {


  const position = [38.319775, 26.639818];


  return (
    <div className='contact-mock container'>
      <div className="contact-column">
        <div className="title">
          <h1>iletişime geç</h1>
          <button>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
        
        <form>

          <div style={{ display: "flex", flexDirection: "row" }}>
              <input placeholder='first name' className="name" type="text" name="name" />
              <input placeholder='last name' className="email" type="text" name="email" />
          </div>

          <input placeholder='description' className="description" type="text" name="descripton"/>

        </form>
      </div>
      <div className='map'>
        <MapContainer center={position} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Izmir Instıtute of Technology
            </Popup>
          </Marker>
        </MapContainer>
      </div>

    </div>
  )
}

export default Contact
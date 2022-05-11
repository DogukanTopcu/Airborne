import React, { useState, useEffect } from 'react'
import "./contact.css"

import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
const Contact = () => {


  const position = [38.319775, 26.639818];


  return (
    <div className='contact-mock container'>
      <div className="contact-column">
        <h1>iletişime geç</h1>
        <form>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>isim</label>
              <input className="name" type="text" name="name" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>email</label>
              <input className="email" type="text" name="email" />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: "60px"}}>
            <label>açıklama</label>
            <input className="description" type="text" name="descripton"/>
          </div>

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
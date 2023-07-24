import React from "react";
import Image from 'react-bootstrap/Image';
import img1 from '../../assets/images/img5.jpg';
import { NavLink } from "react-router-dom";


const Welcome = () => {
  return (
    <>
      {/* Header */}
      <section className="header">
        <div className="container">
          <div className="row " id="welcomeH">
            <div className="col-sm-12 col-md-5 polaroid-left" id="polaroid">
              <Image src={img1} alt="header" />
              <p>LAB-TIF</p>
            </div>
            <div className="col-sm-12 col-md-7" id="contentWH">
              <p id="headlineWH">
              <span>Selamat datang di</span> <br />
                <span>Website LAB-TIF</span>
              </p>
              <p className="pb-4" id="decsWH">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciun
              </p>
              {/* Button */}
              <NavLink
                to="/login"
                className="btn btn-primary col-6 mx-auto mt-4"
                id="btn-home"
              >
                Daftar Sekarang
              </NavLink>
            </div>
            <div className="col-sm-12 col-md-5 polaroid-right" id="polaroid">
              <Image src={img1} alt="header" />
              <p>LAB-TIF</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Welcome
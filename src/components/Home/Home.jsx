import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide carousel-fade" data-bs-ride="true">
        <div className="carousel-indicators d-none-sm">
          <button className="active" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" ></button>
          <button data-bs-target="#carouselExampleRide" data-bs-slide-to="1" ></button>
          <button data-bs-target="#carouselExampleRide" data-bs-slide-to="2" ></button>
          <button data-bs-target="#carouselExampleRide" data-bs-slide-to="3" ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="../../../public/img/imgHome/portada-1-1jpg.jpg" className="d-block" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="../../../public/img/imgHome/portada-2-2.jpg" className="d-block " alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="../../../public/img/imgHome/portada-3-3.jpg" className="d-block" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="../../../public/img/imgHome/portada-4-4.jpg" className="d-block" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Home
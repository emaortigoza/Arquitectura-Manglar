import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__conatiner">
            <div className="footer__logo-container">
                <a href="/index.html"><img className="footer__logo" src="../../../public/img/Logos/isologotipo.png" alt="Isologotipo Manglar"/></a>
            </div>
            <div className="footer__nav">
                <div className="footer__nav-list">
                    <a href="#" className="fa-brands fa-whatsapp"></a>
                    <a href="#" className="fa-brands fa-instagram"></a>
                    <a href="#" className="fa-brands fa-facebook-f"></a>
                    <a href="#" className="fa-regular fa-envelope"></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import React from "react";
import './component.css';
import Gambar1 from '../assets/Logo-KH.svg';

function Navbar2()
{
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="/">
                    <img id="gambarnav" src={Gambar1} alt="logo" className="img-fluid" />
                </a>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-start">
                    <li className="nav-item">
                        <a className="nav-link text-primary" href="/">CARI JASA</a>
                    </li>
                    <div className="ms-5"></div>
                    <li className="nav-item">
                        <a className="nav-link text-primary" href="/">DIREKTORI</a>
                    </li>
                    <div className="ms-5"></div>
                    <li className="nav-item">
                        <a className="nav-link text-primary" href="/">CARI PROJECT</a>
                    </li>
                    <div className="ms-5"></div>
                    <li className="nav-item">
                        <a className="nav-link text-primary" href="/">KREATIF ACEDEMY</a>
                    </li>
                </ul>
                <select className="form-select text-primary">
                    <option>
                        ID
                    </option>
                    <option>
                        EN
                    </option>
                </select>
                <div className="mb-2"></div>
                <form className="d-flex">
                    <button id="btnmasuk" className="btn btn-outline-warning text-warning">MASUK</button>
                    <button id="btndaftar" className="btn btn-md btn-warning">DAFTAR</button>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar2;
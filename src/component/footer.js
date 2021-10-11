import React from "react";
import './component.css';
import Gambar1 from '../assets/Logo-KH.svg';
import Gambar2 from '../assets/payment-methods.png';

function Footer()
{
    return(
        <footer className="footer">
            <br />
            <div className="container align-items-center">
                <div className="row">
                    {/* 1 */}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <img className="img-fluid bg-light p-3 rounded-3" src={Gambar1} alt="logo" />
                    </div>
                    {/* 2 */}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <h3>MEMBERSHIP</h3>
                        <ul>
                            <li>Daftar</li>
                            <li>Profil Saya</li>
                            <li>Pengaturan Akun</li>
                            <li>Pasang Iklan</li>
                            <li>Tingkatkan Membership</li>
                        </ul>
                    </div>
                    {/* 3 */}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <h3>KREATIFHUB</h3>
                        <ul>
                            <li>Tentang Kami</li>
                            <li>Cari Project</li>
                            <li>Daftar Talent</li>
                            <li>Paket Bisnis</li>
                            <li>Syarat dan Ketentuan</li>
                            <li>Kebijakan Privasi</li>
                            <li>Kontak Kami</li>
                            <li>Bantuan (FAQ)</li>
                        </ul>
                    </div>
                    {/* 4 */}
                    <div  className="col-lg-3 col-md-4 col-sm-6">
                        <h3>METODE PEMBAYARAN</h3>
                        <img className="img-fluid" src={Gambar2} alt="pembayaran" />
                    </div>
                </div>
            </div>
            <br />
            <div id="footer2" className="container-fluid">
                <span id="kiri">&copy; 2021 KreatifHub. All Rights Reserved. </span>
                <span id="kanan">
                    <span className="iconify" data-icon="akar-icons:youtube-fill" data-width="30" data-height="30"></span>
                    &nbsp;
                    <span className="iconify" data-icon="brandico:facebook-rect" data-width="20" data-height="20"></span>
                    &nbsp;
                    <span className="iconify" data-icon="bx:bxl-instagram-alt" data-width="30" data-height="30"></span>
                    &nbsp;
                    <span className="iconify" data-icon="akar-icons:linkedin-fill" data-width="20" data-height="20"></span>
                    &nbsp;
                    <span className="iconify" data-icon="bx:bxl-tiktok" data-width="25" data-height="25"></span>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
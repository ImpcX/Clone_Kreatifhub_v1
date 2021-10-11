import React from "react";
import './component.css';
import Gambar1 from '../assets/professional-acc.jpg';
import Gambar2 from '../assets/business-acc.png';

function Section()
{
    return(
        <div className="section4">
            <div className="container-fluid">
                <center>
                    <h1>Gabung dengan KreatifHub Sekarang</h1>
                </center>
                <br />
                <div className="row">
                    {/* 1 */}
                    <div className="col-sm-12 col-lg-6 mb-4 text-center">
                        <h3>Freelancer dan Creative Professionals</h3>
                        <div className="row">
                            {/* 1 */}
                            <div id="sec4fot" className="col-sm-4 col-lg-4 mb-3">
                                <img src={Gambar1} alt="freelance" className="img-fluid" />
                            </div>
                            {/* 2 */}
                            <div className="col-sm-8 col-lg-8">
                                <ul id="checklist">
                                    <li>Buat Iklan Project dan Dapatkan Lamaran dari Talent</li>
                                    <li>Mengikuti Acara KreatifAcademy</li>
                                    <li>Pesan Jasa dari Marketplace</li>
                                    <li>Jual Jasa di Marketplace</li>
                                    <li>Kirim Lamaran Project</li>
                                    <li>Upload Portofolio</li>
                                </ul>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-lg mb-4">Daftar Sekarang</button>
                    </div>
                    {/* 2 */}
                    <div className="col-sm-12 col-lg-6 text-center">
                        <h3>Agensi dan Production House</h3>
                        <div className="row">
                            {/* 1 */}
                            <div id="sec4fot" className="col-sm-4 col-lg-4 mb-4">
                                <img src={Gambar2} alt="agensi" className="img-fluid" />
                            </div>
                            {/* 2 */}
                            <div className="col-sm-8 col-lg-8 mb-4">
                                <ul id="checklist">
                                    <li>Buat Iklan Project dan Dapatkan Lamaran dari Talent</li>
                                    <li>Kirim Lamaran Project</li>
                                    <li>Buat Profil Bisnis dan Tambahkan Anggota Tim</li>
                                    <li>Upload Portofolio Bisnis</li>
                                    <li>Akses & Kelola Banyak Akun Anggota Tim</li>
                                </ul>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-lg">Daftar Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
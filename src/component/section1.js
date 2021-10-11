import React from "react";
import './component.css';
import Gambar1 from '../assets/Ilustrasi-Kayla-Seller.svg';

function Section()
{
    return(
        <div className="section1">
            <div className="container-fluid">
                <div className="row">
                    {/* 1 */}
                    <div  className="col-sm-12 col-lg-7">
                        <h1 className="mb-2" id="memudahkan">Memudahkan akses memesan jasa freelancer industri Kreatif</h1>
                        <h3 className="mb-3" id="memiliki">KreatifHub memiliki misi untuk menghubungkan talent kreatif dengan pencari talent di industri kreatif Indonesia.</h3>
                        <br />
                        <h3 className="mb-4" id="daftarkan">Daftarkan jasa kamu sekarang!</h3>
                        
                        <ul id="tombol-sec1" className="nav me-auto">
                            <button className="btn btn-primary btn-lg mt-3 me-3">Penyedia Jasa Individu</button>
                            
                            <button className="btn btn-primary btn-lg mt-3">Agensi</button>  
                        </ul>
                        <br />
                    </div >
                    {/* 2 */}
                    <div id="picsec1" className="col-sm-12 col-lg-5">
                        <center>
                            <img className="responsive-image" src={Gambar1} alt="Ilustrasi-Kayla" />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
import React from "react";
import './component.css';
import Gambar1 from '../assets/ilustrasi-1.svg';
import Gambar2 from '../assets/ilustrasi-2.svg';
import Gambar3 from '../assets/ilustrasi-3.svg';

function Section()
{
    return(
        <div className="section2">
            <div className="row">
                {/* 1 */}
                <div className="col-sm">
                    <center>
                        <div id="ilu">
                            <img src={Gambar1} alt="ilu-1" />
                        </div>
                        <br />
                        <h3>Publikasi Gratis</h3>
                        <p>
                            Setiap Minggu KreatifHub memilih jasa terbaik untuk dipublikasikan.
                        </p>
                    </center>
                </div>
                {/* 2 */}
                <div className="col-sm">
                    <center>
                        <div id="ilu">
                            <img src={Gambar2} alt="ilu-2" />
                        </div>
                        <br />
                        <h3>Bebas Biaya Komisi</h3>
                        <p>
                            Dana 100% diteruskan ke penyedia jasa. jika sudah menyelesaikan pesanan.
                        </p>
                    </center>
                </div>
                {/* 3 */}
                <div className="col-sm">
                    <center>
                        <div id="ilu">
                            <img src={Gambar3} alt="ilu-3" />
                        </div>
                        <br />
                        <h3>Klien Terpercaya</h3>
                        <p>
                            Terhindar dari <i>ghostingan</i> klien karna pesanan yang masuk dari klien terpercaya.
                        </p>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Section;
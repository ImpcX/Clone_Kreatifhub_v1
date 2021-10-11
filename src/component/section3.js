import React from "react";
import './component.css';
import Gambar1 from '../assets/Youtube-Thumbnail.png';
import Gambar2 from '../assets/Banner-1.svg';

const Card = (props) => {
    return (
        <div className="card h-100">
            <img className="rounded-3" src={props.src} alt={props.title}/>
            <div class="card-body">
                <h5 class="card-title text-center">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button id="clickhere" className="btn btn-light btn-sm">Click here...</button>
            </div>
        </div>
    )
}
  
const dataJasa = [
    {
        img: '../assets/kategori-fotografi-desktop.png',
        title: 'Photography',
        text: 'Pellentesque tristique eros tellus, vitae auctor augue pulvinar sit amet. Vestibulum placerat non ipsum id mollis.'
    },
    {
        img: '../assets/kategori-videografi-desktop.png',
        title: 'Videography',
        text: 'Mauris nec neque cursus, sodales tellus sit amet, faucibus lectus. Sed et lectus nec metus malesuada ultricies.'
    },
    {
        img: '../assets/kategori-beauty-desktop.png',
        title: 'Beauty',
        text: 'Morbi consequat libero laoreet, gravida dui vitae, varius velit. Nullam quis tortor eget lorem semper ornare vitae eu ante.'
    },
    {
        img: '../assets/kategori-desain-desktop.png',
        title: 'Design',
        text: 'Pellentesque tristique eros tellus, vitae auctor augue pulvinar sit amet. Vestibulum placerat non ipsum id mollis.'
    },
    {
        img: '../assets/kategori-musik-dan-audio-desktop.png',
        title: 'Audio & Video',
        text: 'Pellentesque tristique eros tellus, vitae auctor augue pulvinar sit amet. Vestibulum placerat non ipsum id mollis.'
    },
    {
        img: '../assets/kategori-fotografi-desktop.png',
        title: 'Photography',
        text: 'Pellentesque tristique eros tellus, vitae auctor augue pulvinar sit amet. Vestibulum placerat non ipsum id mollis.'
    },
    
];

function Section()
{
    return(
        <div className="section3">
            <div className="container text-center mb-5">
                <h1 className="mb-3">
                    Ikuti Video singkat ini untuk daftarin jasa kamu di KreatifHub
                </h1>
                <img className="img-fluid" src={Gambar1} alt="Youtube" />
            </div>
            <div className="container text-center mb-5">
                <h1 className="mb-3">
                    Mudah tarik dana di KreatifHub
                </h1>
                <img className="img-fluid mb-5" src={Gambar2} alt="Banner" />
            </div>
            <div className="container text-center mb-5">
                <h1 className="mb-3" >
                    Jasa Freelance Paling dimintai UMKM
                </h1>
                <div className="row">
                    {
                        dataJasa.map(function(data, index){
                            return (
                                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 p-2">
                                    <Card src={data.img} text={data.text} title={data.title}></Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Section;
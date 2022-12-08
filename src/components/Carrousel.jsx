import React from 'react'

const Carrousel = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ "https://i.postimg.cc/y8zRRDCm/slide.webp" } className="d-block w-100 slide" alt={"slide"}/>
                    </div>
                    <div className="carousel-item">
                        <img src={"https://i.postimg.cc/y8qmTfcS/2-slide.webp"} className="d-block w-100 slide" alt={"slide"}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrousel

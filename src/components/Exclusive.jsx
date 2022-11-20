import React from 'react'

const Exclusive = () => {
    return (
        <div className='row d-flex justify-content-center p-5'>
            <h2 className='text-center'>EXCLUSIVO ONLINE</h2>
            <div className="card-group col-6  ">
                <div className="card border-0 ">
                    <img src={"images/fast-tote.jpg"} className="card-img-top" alt={"Bolso"} />
                    <div className="card-body">
                        <h5 className="card-title mb-4">FAST TOTE ICONS NEGRO</h5>
                        <span className="card-text">$14.500,00</span>
                        <p className="card-text">3 cuotas sin interés de <b>$4.833,33</b></p>
                            
                    </div>
                </div>
                <div className="card border-0 ">
                    <img src={"images/crazy.jpg"} className="card-img-top" alt={"Short tiro bajo"} />
                    <div className="card-body">
                        <h5 className="card-title">SHORT TIRO BAJO CRAZY SKULLS CARNIVAL 500</h5>
                        <span className="card-text">$9.980,00</span>
                        <p className="card-text">3 cuotas sin interés de <b>$3.326,67</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Exclusive
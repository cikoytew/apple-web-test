import React from 'react';
import { Apple, App } from 'react-bootstrap-icons';

function Shop() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 py-4">
                    <div className='fs-1 fw-bold' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                        Store. The best way to buy the products you love.
                    </div>
                </div>
                <div className="justify-content-end col-lg-1 py-5 d-block d-lg-block d-sm-none">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon_AV1?wid=36&hei=36&fmt=jpeg&qlt=95&.v=1638914056000" alt="Foto" />
                    <div className='py-4'>
                        <App className='ml-4' size={30} />
                        <Apple className='d-flex' />
                    </div>
                </div>
                <div className="col-lg-5 py-5 d-block d-lg-block d-sm-none">
                    <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                        <div className='top-container'>
                            <span className='fw-bold fs-6'>
                                Need shopping help? <br />
                            </span>
                            <span className='fs-6 text-primary'>
                                Ask a Specialist
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-5 py-3  d-block d-lg-block d-sm-none">
                        <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                            <div className='top-container'>
                                <span className='fw-bold fs-8'>
                                    Need shopping help? <br />
                                </span>
                                <span className='fs-8 text-primary'>
                                    Ask a Specialist
                                </span>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    );
}

export default Shop;
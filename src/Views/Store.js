import React from 'react';
import { Apple, App } from 'react-bootstrap-icons';

function Store() {
    return (
        <div className='container-fluid d-flex justify-content-center offset-lg-1'>
            <div className="row">
                <div className="col-lg-6 my-4 d-block d-lg-block">
                    <div className='fs-1 fw-bold' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                        <p className='text-secondary'><p className='text-dark d-inline'>Store. </p>The best way to buy the products you love.</p>
                    </div>
                </div>
                <div className="col-sm-1 my-5 d-none d-lg-block d-sm-none">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon_AV1?wid=36&hei=36&fmt=jpeg&qlt=95&.v=1638914056000" alt="Foto" />
                    <div className='py-4 px-1 position-static'>
                        <App className='mt-3 position-absolute' size={30} />
                        <Apple className='mx-2 mt-4 position-static' />
                    </div>
                </div>
                <div className="col-sm-5 my-5 d-none d-lg-block d-sm-none">
                    <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                        <div className='start-container'>
                            <div className='fw-bold fs-6'>
                                Need shopping help? <br />
                            </div>
                            <div className='fs-6 text-primary'>
                                Ask a Specialist
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 py-3  d-block d-lg-block d-sm-none">
                        <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                            <div className='start-container'>
                                <div className='fw-bold fs-8'>
                                    Need shopping help? <br />
                                </div>
                                <div className='fs-8 text-primary'>
                                    Ask a Specialist
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    );
}

export default Store;
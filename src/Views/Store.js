import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import { Apple, App, Bag, Box } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Store() {
    return (



        <div className='container'>
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-6 py-4 d-block d-lg-block offset-lg-1">
                        <div className='fs-1 fw-bold' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                            Store.<p className='text-secondary d-inline'> The best way to buy the products you love.</p>
                        </div>
                    </div>
                    <div className="col-sm-auto py-5 d-none d-lg-block d-sm-none">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon_AV1?wid=36&hei=36&fmt=jpeg&qlt=95&.v=1638914056000" alt="Foto" />
                        <div className='py-4 px-1 position-static'>
                            <App className='mt-3 position-absolute' size={30} />
                            <Apple className='mx-2 mt-4 position-static' />
                        </div>
                    </div>
                    <div className="col-sm-4 py-5 d-none d-lg-block d-sm-none">
                        <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                            <div className='start-container'>
                                <div className='fw-bold fs-8'>
                                    Need shopping help? <br />
                                </div>
                                <div className='fs-8 text-primary'>
                                    <NavLink to='/'>
                                        <small>
                                            Ask a Specialist
                                        </small>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 py-3 d-block d-lg-block d-sm-none ">
                            <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                                <div className='start-container'>
                                    <div className='fw-bold fs-8'>
                                        Visit an Apple Store <br />
                                    </div>
                                    <div className='fs-8 text-primary'>
                                        <NavLink to='/'>
                                            <small>
                                                Find one near you
                                            </small>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>

                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none">
                            <div className="row">
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=250&hei=150&fmt=png-alpha&.v=1645051958490" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Mac</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=250&hei=150&fmt=png-alpha&.v=1630706116000" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">iPhone</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=250&hei=150&fmt=png-alpha&.v=1625783381000" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">iPad</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202203?wid=250&hei=150&fmt=png-alpha&.v=1645052537409" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Apple Watch</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=250&hei=150&fmt=png-alpha&.v=1633718741000" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">AirPods</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=250&hei=150&fmt=png-alpha&.v=1625783380000" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">AirTag</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none">
                            <div className="row">
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202108?wid=250&hei=150&fmt=png-alpha&.v=1625783378000" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Apple TV</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202110?wid=250&hei=150&fmt=png-alpha&.v=1633355783000" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">HomePod Mini</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202203?wid=250&hei=150&fmt=png-alpha&.v=1645051958489" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Accessories</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=250&hei=150&fmt=png-alpha&.v=1635264815000" alt="" />
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Apple Gift Card</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>


            <div className='fs-3 fw-bold offset-1' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                The latest.<p className='text-secondary d-inline'> Take a look at what’s new, right now.</p>
            </div>


            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card py-5 offset-1 d-lg-block d-none d-md-none" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-pro-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290504" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text>IPHONE 13 PRO</Card.Text>
                                            <Card.Title>
                                                Oh. So. Pro.
                                            </Card.Title>
                                            <Card.Text>Now in Alpine Green. From $999.00 or $41.62/mo.per month for 24 mo.monthsFootnote*</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                                <div className="col-4">
                                    <Card className="text-white bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=160&hei=200&fmt=p-jpg&qlt=95&.v=1645636337374" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text>
                                                IPAD AIR
                                            </Card.Text>
                                            <Card.Title>Light. Bright. Full of might.</Card.Title>
                                            <Card.Text>From $599 or $49.91/mo.per month for 12 mo.monthsFootnote†</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-mac-studio-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848581" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text>
                                                MAC STUDIO
                                            </Card.Text>
                                            <Card.Title>Empower station.</Card.Title>
                                            <Card.Text>From $1999 or $166.58/mo.per month for 12 mo.monthsFootnote†</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card py-5 offset-1 d-lg-block d-none d-md-none">
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-studio-display-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848762" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text>
                                                STUDIO DISPLAY
                                            </Card.Text>
                                            <Card.Title>A sight to be bold.</Card.Title>
                                            <Card.Text>From $1599 or $133.25/mo.per month for 12 mo.monthsFootnote†</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-se-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052592978" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text>
                                                IPHONE SE
                                            </Card.Text>
                                            <Card.Title>
                                                Love the power. <br />
                                                Love the price.
                                            </Card.Title>
                                            <Card.Text> From $429.00 or $17.87/mo.per month for 24 mo.monthsFootnote*</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290452" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text>
                                                IPHONE 13
                                            </Card.Text>
                                            <Card.Title>Your new superpower.</Card.Title>
                                            <Card.Text>Now in Green. From $699.00 or $29.12/mo.per month for 24 mo.monthsFootnote*</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card py-5 offset-1 d-lg-block d-none d-md-none" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-bands-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052880599" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text>
                                                APPLE WATCH BANDS
                                            </Card.Text>
                                            <Card.Title>New hues in bloom.</Card.Title>
                                            <Card.Text>Shop the latest band styles and colors.</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='fs-3 fw-bold offset-1' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Help is here. <p className='text-secondary d-inline'> Whenever and however you need it.</p>
            </div>

            <section>
                <div className="container offset-lg-1 d-lg-block d-none d-md-none position-relative" >
                    <div className="row">
                        <Card className="text-dark border border-5" style={{ width: 550 }}>
                            <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626296836000" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='fw-bold fs-3 mt-5'>Shop one on one with a <br /> Specialist. Online or in store.
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="text-dark border border-5 position-absolute top-0 start-50" style={{ width: 540, height: 260 }}>
                            <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-apps-202108?wid=550&hei=280&fmt=p-jpg&qlt=95&.v=1626223748000" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='fw-bold fs-3 mt-4'>
                                    Get to know your new device <br /> with a free Personal Session.</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="text-dark border border-5 position-absolute bottom-0 start-50" style={{ width: 540, height: 260 }}>
                            <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-genius-202108?wid=550&hei=280&fmt=p-jpg&qlt=95&.v=1626384443000" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='fs-4 fw-bold mt-5'>Get expert service <br />
                                    and support at the <br />
                                    Genius Bar.</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </div>

                </div>
            </section>


            <div className='fs-3 fw-bold offset-1 mt-4' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                The Apple difference. <p className='text-secondary d-inline'> Even more reasons to shop with us.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card py-3 offset-1 d-lg-block d-none d-md-none " >
                            <div className="row">
                                <div className="col-3">
                                    <div className="container position-relative">
                                        <Apple className='top-50 mx-3 position-absolute' color='blue' size={20} />
                                        <Bag color='blue' size={50} />
                                    </div>
                                    <Card className="text-dark bg-white" style={{ width: 300, height: 300 }}>
                                        <Card.ImgOverlay>
                                            <Card.Title className='text-primary mt-5 fw-bold '>
                                                Convenient pickup options <br />that fit into your everyday schedule.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <div className="container position-relative">
                                        <Box color='red' size={50} />
                                    </div>
                                    <Card className="text-dark bg-white" style={{ width: 300, height: 300 }}>
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold mt-5'>
                                                Choose fast, free delivery or <p className='text-danger d-inline'> two-hour courier delivery.</p>
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </section >

        </div >




    );
}

export default Store;
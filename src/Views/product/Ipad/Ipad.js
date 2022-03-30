import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Apple, App, Play } from 'react-bootstrap-icons';
import { NavLink, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Ipad(props) {
    return (
        <div className='container'>
            <div className="d-flex offset-lg-1 mb-5 position-relative">
                <div className="row ">
                    <div className="col-lg-6 py-4 d-block d-lg-block">
                        <div className='fs-1 fw-bold text-nowrap' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                            Shop iPad
                        </div>
                    </div>
                    <div className="col-sm-1 position-absolute start-50 py-5 d-none d-lg-block d-sm-none">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon_AV1?wid=36&hei=36&fmt=jpeg&qlt=95&.v=1638914056000" alt="Foto" />
                        <div className='py-4 px-1 position-static'>
                            <App className='mt-3 position-absolute' size={30} />
                            <Apple className='mx-2 mt-4 position-static' />
                        </div>
                    </div>
                    <div className="col-sm-5 position-absolute end-0 py-5 d-none d-lg-block d-sm-none">
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
            <Carousel>
                <Carousel.Item>
                    <div className='d-inline-flex offset-1 my-5'>
                        <div className='item ms-5'>All Model</div>
                        <div className='item ms-5'>Shopping Guides</div>
                        <div className='item ms-5'>Ways to Save</div>
                        <div className='item ms-5'>The Apple Difference</div>
                        <div className='item ms-5'>Accessories</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='d-inline-flex offset-1 my-5'>
                        <div className='item ms-5'>Setup and Support</div>
                        <div className='item ms-5'>Do More</div>
                        <div className='item ms-5'>Shop by Group</div>
                    </div>
                </Carousel.Item>

            </Carousel>

            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                All models.<p className='text-secondary d-inline'> Take your pick.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Link to='ipad-pro' style={{ textDecoration: 'none' }}>
                                        <Card className="text-dark bg-white" style={{ width: 320 }}>

                                            <Card.Title className='mx-4 mt-4'>
                                                <Card.Text style={{ color: 'red' }}>
                                                    <small>
                                                        New
                                                    </small>
                                                </Card.Text>
                                                ipad Pro
                                            </Card.Title>
                                            <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627413382000" alt="Card image" />
                                            <Card.ImgOverlay className='bg-white position-relative'>
                                                <Card.Text>
                                                    <small>
                                                        From $799 or $66.58/mo. for 12 mo.
                                                    </small>
                                                    <Link to='ipad-pro'>
                                                        <button className='btn btn-primary rounded-pill text-light position-absolute mb-3 mx-3 bottom-0 end-0'>
                                                            Buy
                                                        </button>
                                                    </Link>
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Title className='mx-4 mt-4'>
                                            <Card.Text style={{ color: 'red' }}>
                                                <small>
                                                    New
                                                </small>
                                            </Card.Text>
                                            iPad Air
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-air-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1644963446761" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $699or $29.12/mo. for 24 mo.
                                                </small>
                                                <button className='btn btn-secondary rounded-pill text-light position-absolute mb-3 mx-3 bottom-0 end-0'>
                                                    Buy
                                                </button>
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Title className='mx-4 mt-4'>
                                            <Card.Text style={{ color: 'white' }}>
                                                <small>
                                                    New
                                                </small>
                                            </Card.Text>
                                            iPad
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1630640992000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $429or $17.87/mo. for 24 mo.
                                                </small>
                                                <button className='btn btn-secondary rounded-pill text-light position-absolute mb-3 mx-3 bottom-0 end-0'>
                                                    Buy
                                                </button>
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Title className='mx-4 mt-4'>
                                            <Card.Text style={{ color: 'white' }}>
                                                <small>
                                                    New
                                                </small>
                                            </Card.Text>
                                            iPad Mini
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1630457637000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $599or $24.95/mo. for 24 mo.
                                                </small>
                                                <button className='btn btn-secondary rounded-pill text-light position-absolute mb-3 mx-3 bottom-0 end-0'>
                                                    Buy
                                                </button>
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' style={{ width: 318, height: 386 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-all-accessories-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1631315742000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold fs-3 mt-4'>Explore all iPhone accessories.</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Shopping guides.<p className='text-secondary d-inline'> Can’t decide? Start here.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-compare-202203?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1644962931934" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'><small>
                                                COMPARE ALL MODELS
                                            </small>
                                            </Card.Text>
                                            <Card.Title className='fs-4 fw-bold'>
                                                Which iPad is <br />right for you?
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-specialist-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625269621000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                SHOPPING HELP
                                            </Card.Text>
                                            <Card.Title className='fs-4 fw-bold'>
                                                Shop one on one with a <br />iPad Specialist.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Ways to save.<p className='text-secondary d-inline'>  Find what works for you.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-trade-in-202203?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1644962956233" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                APPLE TRADE IN
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Trade in your device, get <br />credit toward a new one.¹
                                            </Card.Title>

                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-apple-card-202108?wid=480&hei=500&fmt=png-alpha&.v=1625760821000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>APPLE CARD
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Get 3% back in Daily <br />Cash with Apple Card.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-monthlypayments-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1632249509000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>LOW MONTHLY PAYMENTS
                                            </Card.Text>
                                            <Card.Title className='fs-4 mt-4 fw-bold'>Pay 0% APR over 24 <br />months when you choose to <br />check out with Apple Card <br />Monthly Installments.²
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-refurb-202202?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1643155826000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                CERTIFIED REFURBISHED
                                            </Card.Text>
                                            <Card.Title className='fs-3'>
                                                Shop like-new products <br />backed by a one-year <br />warranty.</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                The Apple difference.<p className='text-secondary d-inline'>  Even more reasons to shop with us.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-engraving-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625269613000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                FREE ENGRAVING
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Personalize your iPad with <br />a message or emoji.
                                            </Card.Title>

                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-basic-tips-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1631731651000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>ONLINE PERSONAL SESSION
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Get to know your new iPad. <br />From the basics to top tips.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-apple-gifting-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1628181535000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>APPLE GIFTING
                                            </Card.Text>
                                            <Card.Title className='fs-4 mt-4 fw-bold'>Add a special touch to <br />your gift.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                iPad Accessories.<p className='text-secondary d-inline'> Work and create with ease.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-story-202203_GEO_US?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645557248403" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='mt-4 fw-bold'>
                                                Accessories that have you covered.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQJ3LL?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645163989903" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'white' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                Magic Keyboard for iPad Pro 11-inch (3rd generation) and...
                                            </Card.Title>
                                            <Card.Text>$299.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 275 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU8F2?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1540596407165" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                Free Engraving
                                            </Card.Text>
                                            <Card.Title>
                                                Apple Pencil (2nd generation)
                                            </Card.Title>
                                            <Card.Text>$129.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXNK2LL?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1646273938554" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'white' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                Smart Keyboard Folio for iPad Pro 11-inch (3rd generation)...
                                            </Card.Title>
                                            <Card.Text>$179.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645642309453" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'white' }}>
                                                Not New
                                            </Card.Text>
                                            <Card.Title>
                                                Smart Folio for iPad Air (5th generation) - Marine Blue
                                            </Card.Title>
                                            <Card.Text>$79.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 275 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1591634795000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                Free Engraving
                                            </Card.Text>
                                            <Card.Title>
                                                AirPods Pro
                                            </Card.Title>
                                            <Card.Text>$249.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX3L2US?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1631228524000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'white' }}>
                                                Not New
                                            </Card.Text>
                                            <Card.Title>
                                                Smart Keyboard for iPad (9th generation) - US English
                                            </Card.Title>
                                            <Card.Text>$159.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-accessories-202203_GEO_US?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645553817814" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold fs-3 mt-4'>Explore all iPad accessories.</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </section>

            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Setup and support.<p className='text-secondary d-inline'> Our Specialists are here to help.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-light bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-applecare-202111?wid=480&hei=500&fmt=png-alpha&.v=1635293656000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                WATCH AND LEARN
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                It’s no problem with <br /> AppleCare+.
                                            </Card.Title>
                                            <div className='container-fluid bg-opacity-75 bg-dark position-absolute bottom-0 start-0 py-3'>
                                                Learn how to protect your iPad in <br /> this 30‑second video.
                                                <Play className='position-absolute bg-secondary rounded-circle mb-4 mx-3 bottom-0 end-0' size={30} />
                                            </div>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-icloud-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1629955002000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                EASY DATA TRANSFER
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Access all the iCloud <br />storage you need to move <br />everything over to your <br />new iPad.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none  border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-setupguide-202108_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1633374627000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                QUICK START SETUP
                                            </Card.Text>
                                            <Card.Title className='fs-4 mt-4'>
                                                Automatically set up your <br />new iPad with your <br />current iOS device.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-todayatapple-202203?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1644963050293" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                TODAY AT APPLE
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Virtual Session: Getting Started <br />with iPad.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Do more.<p className='text-secondary d-inline'> See what else you can do with iPad.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-whyipad-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1647597399412" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                WHY IPAD
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Yes, it does that. And then some.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-ios-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1632259716000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                IPADOS
                                            </Card.Text>
                                            <Card.Title className='fs-4 mt-3'>
                                                Work wonders. With ease.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-50-appletv-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626831782000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6 text-secondary'> <small>
                                                APPLE TV+
                                            </small>
                                            </Card.Text>
                                            <Card.Title className='fs-4 text-light'>
                                                New Apple Originals every <br />month.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark border border-2 ms-5 position-absolute top-0 start-50" style={{ width: 465, height: 240 }}>
                                        <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-25-apple-at-college-202109?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1629928306000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <p className='fw-normal'>
                                                APPLE AT COLLEGE
                                            </p>
                                            <Card.Title className='fs-4 fw-bold mt-2'>
                                                Light in your backpack. <br />Heavy on features.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                    <Card className="text-dark border border-2 ms-5 position-absolute bottom-0 start-50" style={{ width: 465, height: 240 }}>
                                        <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-25-apple-at-work-202109?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1631386713000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <p className='fw-normal'>
                                                APPLE AT WORK
                                            </p>
                                            <Card.Title className='fs-4 fw-bold mt-2'>
                                                Breeze through <br />your workflow
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Shop by group.<p className='text-secondary d-inline'> Get special pricing for students, businesses, and more.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-edu-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627492399000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                EDUCATION
                                            </Card.Text>
                                            <Card.Title className='fs-2 fw-bold'>
                                                We offer special iPad <br />pricing for students and <br />educators.³
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-light bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-small-business-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627318784000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6 text-secondary'>BUSINESS
                                            </Card.Text>
                                            <Card.Title className='fs-2 fw-bold'>
                                                From enterprise to small business, we’ll work with you.2

                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-light bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1632870676000" alt="Card image" />
                                        <Card.ImgOverlay>

                                            <Card.Text className='fs-6 text-secondary'>GOVERNMENT
                                            </Card.Text>
                                            <Card.Title className='fs-2 fw-bold'>
                                                Special pricing is available for state, local, and federal agencies.2
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veterans-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645468079106" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6 text-secondary'>VETERANS AND MILITARY
                                            </Card.Text>
                                            <Card.Title className='fs-2 fw-bold'>
                                                Active and veteran members may be eligible for exclusive savings.2
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>


            <small className='offset-1 lh-1 mt-5 text-secondary d-lg-block d-none d-md-none'>
                * Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple, and is subject to credit approval and credit limit. Financing terms vary by product. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
            </small>
            <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
            </small>
            <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                2. Apple Card Monthly Installments (ACMI) is a 0% APR payment option available to select at checkout for certain Apple products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204 for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. If you choose the pay-in-full or one-time-payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile.
            </small>
            <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings General Software Update. Tap Download and Install.
            </small>
            <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                Available for qualifying applicants in the United States.
            </small>
            <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            </small>
            <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                3. Special pricing available to qualified customers. To learn more about how to start qualifying toward special pricing, talk to an Apple Specialist in a store or give us a call at 1‑800‑MY‑APPLE.
            </small>
            <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            </small>
            <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                †† We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.
                <hr style={{ height: 1 }} />
            </small>

        </div >
    );
}

export default Ipad;
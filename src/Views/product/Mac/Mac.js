import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Apple, App, Play } from 'react-bootstrap-icons';
import { NavLink, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Mac(props) {
    return (
        <div className='container'>
            <div className="d-flex offset-lg-1 mb-5 position-relative">
                <div className="row ">
                    <div className="col-lg-6 py-4 d-block d-lg-block">
                        <div className='fs-1 fw-bold text-nowrap' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                            Shop Mac
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
                                    <Link to='macbook-air' style={{ textDecoration: 'none' }}>
                                        <Card className="text-dark bg-white" style={{ width: 320 }}>
                                            <Card.Title className='mx-4 mt-4'>
                                                MacBook Air
                                            </Card.Title>
                                            <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726242000" alt="Card image" />
                                            <Card.ImgOverlay className='bg-white position-relative'>
                                                <Card.Text>
                                                    <small>
                                                        From $999 or $83.25/mo. for 12 mo.
                                                    </small>
                                                    <Link to='macbook-air'>
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
                                            MacBook Pro 13"
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726243000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $1299 or $108.25/mo.
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
                                            MacBook Pro 14"
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726243000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $1999 or $166.58/mo.
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
                                            MacBook Pro 16"
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-16-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726244000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $1599 or $208.25/mo.
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
                                            iMac 24"
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=490&hei=500&fmt=jpeg&qlt=95&.v=1625868688000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $1299 or $108.25/mo.
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
                                            Mac mini
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-mini-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1626106830000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $699 or $58.25/mo.
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
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Title className='mx-4 mt-4'>
                                            Mac Studio
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-studio-202203?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1645558306355" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $1299 or $166.58/mo.
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
                                            Studio Display
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-studio-display-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645558306366" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $1599 or $133.25/mo.
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
                                            Mac Pro
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-pro-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1625864628000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $5999 or $499.91/mo.
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
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Title className='mx-4 mt-4'>
                                            Pro Display XDR
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-pro-display-202108?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1625864626000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $4999 or $416.58/mo.
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-compare-models-202203?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1645055994685" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>COMPARE ALL MODELS
                                            </Card.Text>
                                            <Card.Title className='fs-4 fw-bold'>
                                                Which Mac is right for you?
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-specialist-help-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625760842000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                SHOPPING HELP
                                            </Card.Text>
                                            <Card.Title className='fs-4 fw-bold'>
                                                Shop one on one with a <br />Mac Specialist.
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-tradein-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625760823000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>APPLE TRADE IN
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-monthly-payments-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625760820000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>LOW MONTHLY PAYMENTS
                                            </Card.Text>
                                            <Card.Title className='fs-4 mt-4'>Pay 0% APR over 12 months when you <br /> choose to check out with Apple Card Monthly Installments.²
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
                <div className="container offset-lg-1 d-lg-block d-none d-md-none position-relative" >
                    <div className="row">
                        <Card className="text-dark border border-5 position-relative start-50" style={{ width: 550 }}>
                            <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-apple-gifting-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1627430357000" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Text className='fs-6'>
                                    APPLE GIFTING
                                </Card.Text>
                                <Card.Title className='fw-bold fs-2'>
                                    Add a special touch to <br /> your gift.
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="text-dark border border-5 ms-5 position-absolute top-0 start-0" style={{ width: 465, height: 260 }}>
                            <div className="container position-relative mt-2">
                                <Apple color={'coral'} size={50} />
                            </div>
                            <Card.ImgOverlay>
                                <Card.Title className='fw-bold mt-5'>
                                    <p className='d-inline rainbow-text'>Customize </p>  your Mac <br /><p className='fw-normal'>
                                        Build it just the way you want. Choose your memory, storage, graphics, even color.
                                    </p>
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="text-dark border border-5 ms-5 position-absolute bottom-0 start-0" style={{ width: 465, height: 260 }}>
                            <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-25-apps-202108?wid=500&hei=260&fmt=p-jpg&qlt=95&.v=1625760933000" alt="Card image" />
                            <Card.ImgOverlay>
                                <p className='fw-normal'>
                                    ONLINE PERSONAL SESSION</p>
                                <Card.Title className='fs-4 fw-bold mt-2'>
                                    Get to know your new Mac. <br />From the basics to top tips.
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </div>

                </div>
            </section >

            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Accessories.<p className='text-secondary d-inline'> Made for Mac.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-magic-acc-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645055994661" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='mt-2 fw-bold'>
                                                Shop Magic accessories to complete your studio.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1646446502337" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                Studio Display - Standard glass - Tilt-adjustable stand
                                            </Card.Title>
                                            <Card.Text>$1599.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645719947833" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                Magic Keyboard with Touch ID and Numeric Keypad for Mac
                                            </Card.Title>
                                            <Card.Text>$199.00</Card.Text>
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
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645138486301" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                Magic Mouse - Black Multi-Touch Surface
                                            </Card.Title>
                                            <Card.Text>$99.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMP3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645136899926" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                Magic Trackpad - Black Multi-Touch Surface
                                            </Card.Title>
                                            <Card.Text>$149.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN713?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645063997942" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                Thunderbolt 4 Pro Cable (1.8 m)
                                            </Card.Title>
                                            <Card.Text>$129.00</Card.Text>
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
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM6F3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632956535000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                Polishing Cloth
                                                <br />
                                                <br />
                                            </Card.Title>
                                            <Card.Text>$19.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-explore-mac-acc-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645055994778" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold fs-3 mt-4'>Explore all Mac accessories.</Card.Title>
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
                        <div className="card offset-1 d-lg-block d-none d-md-none" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-applecare-202111?wid=480&hei=500&fmt=png-alpha&.v=1635293660000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                WATCH AND LEARN
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                It’s no problem with <br /> AppleCare+.
                                            </Card.Title>
                                            <div className='container-fluid bg-opacity-75 bg-white position-absolute bottom-0 start-0 py-3'>
                                                Learn how to protect your Mac in <br /> this 30‑second video.
                                                <Play className='position-absolute bg-white rounded-circle mb-4 mx-3 bottom-0 end-0' size={30} />
                                            </div>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-virtual-session-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625761002000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                TODAY AT APPLE
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Virtual Session: Getting <br />Started with Mac

                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-data-transfer-202110_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1634001507000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                EASY DATA TRANSFER
                                            </Card.Text>
                                            <Card.Title className='fs-4 mt-4'>
                                                New Mac? See how easy it is to move your content over.
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
                Do more.<p className='text-secondary d-inline'> See what else you can do with Mac.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-why-mac-202110?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1634002551000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                WHY MAC
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Incredible power. <br /> Incredibly simple.

                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-macos-202110_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1634002399000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                MACOS
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Connect, share, and create <br />like never before. Discover <br />macOS Monterey.

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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-icloud-202111?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1635434008000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>ICLOUD+
                                            </Card.Text>
                                            <Card.Title className='fs-4 mt-4'>
                                                Get more storage and <br />great new ways to protect <br />your privacy.
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
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <Card className="text-light bg-black" style={{ width: 480, height: 240 }}>
                                            <Card.Img className='rounded mb-0 mx-auto' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-25-college-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1625760980000" alt="Card image" />
                                            <Card.ImgOverlay>
                                                <Card.Text className='fs-6 text-secondary'>APPLE AT COLLEGE
                                                </Card.Text>
                                                <Card.Title className='fs-4 mt-4'>
                                                    Ace it all with <br />Apple.
                                                </Card.Title>
                                                <Card.Text className='fs-6'>
                                                    Take your learning to the <br />next level with Mac.
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <Card className="text-light bg-black" style={{ width: 480, height: 240 }}>
                                            <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-25-work-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1625760980000" alt="Card image" />
                                            <Card.ImgOverlay>
                                                <Card.Text className='fs-6 text-secondary'>
                                                    APPLE AT WORK
                                                </Card.Text>
                                                <Card.Title className='fs-4 mt-4'>
                                                    Power your <br />workplace with <br />Apple hardware, <br />software, and <br />services.
                                                </Card.Title>
                                            </Card.ImgOverlay>
                                        </Card></div>

                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-50-appleone-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625760978000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fs-3 mt-3'>
                                                Six Apple services. <br />One easy subscription.
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-education-202110_GEO_US?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1634004541000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                EDUCATION
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Save on a new Mac with <br />special education pricing.³
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-light bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-business-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627073464000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6 text-secondary'>BUSINESS
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                From enterprise to small <br />business, we’ll work with <br />you.³
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
                                            <Card.Title className='fs-4 mt-4'>
                                                Special pricing is available <br />for state, local, and federal <br />agencies.³

                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veterans-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645468079106" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                VETERANS AND MILITARY
                                            </Card.Text>
                                            <Card.Title className='fs-3'>
                                                Active and veteran <br />members may be eligible <br />for exclusive savings.³
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>


            <p className='offset-1 lh-1 mt-5 text-secondary d-lg-block d-none d-md-none'>
                * Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple, and is subject to credit approval and credit limit. Financing terms vary by product. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement(Opens in a new window) for more information. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                2. Apple Card Monthly Installments (ACMI) is a 0% APR payment option available to select at checkout for certain Apple products purchased at Apple Store locations, apple.com(Opens in a new window), the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204(Opens in a new window) for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. If you choose the pay-in-full or one-time-payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement(Opens in a new window) for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                3. Special pricing available to qualified customers. To learn more about how to start qualifying toward special pricing, talk to an Apple Specialist in a store or give us a call at 1‑800‑MY‑APPLE.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings General Software Update. Tap Download and Install.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                Available for qualifying applicants in the United States.

            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                †† We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.
                <hr style={{ height: 1 }} />
            </p>

        </div >
    );
}

export default Mac;
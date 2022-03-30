import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Apple, App, Play } from 'react-bootstrap-icons';
import { NavLink, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Iphone(props) {
    return (
        <div className='container'>
            <div className="d-flex offset-lg-1 mb-5 position-relative">
                <div className="row ">
                    <div className="col-lg-6 py-4 d-block d-lg-block">
                        <div className='fs-1 fw-bold text-nowrap' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                            Shop iPhone
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
                                    <Link to='iphone13-pro' style={{ textDecoration: 'none' }}>
                                        <Card className="text-dark bg-white" style={{ width: 320 }}>

                                            <Card.Title className='mx-4 mt-4'>
                                                <Card.Text style={{ color: 'red' }}>
                                                    <small>
                                                        New
                                                    </small>
                                                </Card.Text>
                                                iPhone 13 Pro
                                            </Card.Title>
                                            <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1644989935267" alt="Card image" />
                                            <Card.ImgOverlay className='bg-white position-relative'>
                                                <Card.Text>
                                                    <small>
                                                        From $999or $41.62/mo. for 24 mo.
                                                    </small>
                                                    <Link to='iphone13-pro'>
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
                                            iPhone 13
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202203?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1646335268199" alt="Card image" />
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
                                            <Card.Text style={{ color: 'red' }}>
                                                <small>
                                                    New
                                                </small>
                                            </Card.Text>
                                            iPhone SE
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=600&hei=500&fmt=jpeg&qlt=95&.v=1646415838921" alt="Card image" />
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
                                            iPhone 12
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12purple-202109?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1646335268265" alt="Card image" />
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
                                        <Card.Title className='mx-4 mt-4'>
                                            <Card.Text style={{ color: 'white' }}>
                                                <small>
                                                    New
                                                </small>
                                            </Card.Text>
                                            iPhone 11
                                        </Card.Title>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone-11-202108?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1646502984732" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text>
                                                <small>
                                                    From $499or $20.79/mo. for 24 mo.
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
                                        <Card.Img className='rounded mb-0' style={{ width: 318, height: 386 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-accessories-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645037579166" alt="Card image" />
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-stack-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1631661261000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'><small>
                                                COMPARE ALL MODELS
                                            </small>
                                            </Card.Text>
                                            <Card.Title className='fs-4 fw-bold'>
                                                Which iPhone is <br />right for you?
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-specialist-help-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625761517000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                SHOPPING HELP
                                            </Card.Text>
                                            <Card.Title className='fs-4 fw-bold'>
                                                Shop one on one with a <br />iPhone Specialist.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-whyswitch-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1634591305000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'><small>
                                                SWITCH TO IPHONE
                                            </small>
                                            </Card.Text>
                                            <Card.Title className='fs-4 fw-bold'>
                                                Making the switch is easier <br />than you think.
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-carriertrade-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1629948808000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'><small>
                                                SPECIAL CARRIER DEALS AT APPLE
                                            </small>
                                            </Card.Text>
                                            <Card.Title className='fs-3 fw-bold'>
                                                Save up to $800 on <br />iPhone 13 and <br />iPhone 13 Pro after<br /> trade-⁠in.1
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-tradein-202109?wid=480&hei=500&fmt=jpeg&qlt=95&.v=1630464477000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'><small>
                                                APPLE TRADE IN
                                            </small>
                                            </Card.Text>
                                            <Card.Title className='fs-3 fw-bold'>
                                                Get $30-$650 in credit <br />toward a new iPhone.2
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-tradein-202111?wid=480&hei=500&fmt=png-alpha&.v=1635293654000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                WATCH AND LEARN
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Here’s how to trade in your <br />iPhone.
                                            </Card.Title>
                                            <div className='container-fluid bg-white position-absolute bottom-0 start-0 py-4'>
                                                Get a quick two-minute overview from Bella.
                                                <Play className='position-absolute bg-secondary bg-opacity-25 rounded-circle mb-4 mx-3 bottom-0 end-0' size={30} />
                                            </div>
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-monthly-payments-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1628702497000" alt="Card image" />
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
                <div className="container offset-lg-1 d-lg-block d-none d-md-none position-relative" >
                    <div className="row">
                        <Card className="text-dark border border-2" style={{ width: 500 }}>
                            <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-boxes-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1629955004000" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Text className='fs-6'><small>
                                    IPHONE UPGRADE PROGRAM
                                </small>
                                </Card.Text>
                                <Card.Title className='fw-bold fs-3'>
                                    The easiest way to upgrade  <br />to the latest iPhone.
                                </Card.Title>
                                <Card.Text className='fs-6'>
                                    Get the latest iPhone every year, low <br />monthly payments, and AppleCare+.4
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="text-dark border border-2" style={{ width: 500 }}>
                            <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-personal-session-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1630612234000" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Text className='fs-6'>
                                    ONLINE PERSONAL SESSION
                                </Card.Text>
                                <Card.Title className='fw-bold fs-3'>
                                    Get to know your new <br />iPhone. From the basics <br />to top tips.
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-magsafe-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1644989935378" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='mt-2 fw-bold'>
                                                All in a snap.
                                            </Card.Title>
                                            <Card.Text className='fs-6'><small>
                                                Attach a magnetic case, wallet, or both. There’s a mix to match any style.
                                            </small>
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN673?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645996926098" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                iPhone 13 Pro Silicone Case with MagSafe - Eucalyptus
                                            </Card.Title>
                                            <Card.Text>$49.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0Q3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1629865186000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                Now with Find My support
                                            </Card.Text>
                                            <Card.Title>
                                                iPhone Leather Wallet with MagSafe - Golden Brown
                                            </Card.Title>
                                            <Card.Text>$59.00</Card.Text>
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
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6G3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645509710532" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                iPhone SE Silicone Case - Chalk Pink
                                            </Card.Title>
                                            <Card.Text>$35.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXF3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1602179308000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'white' }}>
                                                Not New
                                            </Card.Text>
                                            <Card.Title>
                                                MagSafe Duo Charger
                                            </Card.Title>
                                            <Card.Text>$129.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN623?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645847133291" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                iPhone 13 Silicone Case with MagSafe - Lemon Zest
                                            </Card.Title>
                                            <Card.Text>$49.00</Card.Text>
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
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM2W3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1630714157000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ color: 'white' }}>
                                                Not New
                                            </Card.Text>
                                            <Card.Title>
                                                iPhone 13 mini Clear Case with MagSafe
                                            </Card.Title>
                                            <Card.Text>$49.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-magsafe-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1644989935378" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold fs-3 mt-4'>Explore all MagSafe accessories.</Card.Title>
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
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-applecare-202111?wid=480&hei=500&fmt=png-alpha&.v=1635293654000" alt="Card image" />
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-icloud-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1629955002000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                EASY DATA TRANSFER
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Access all the iCloud <br />storage you need to move <br />everything over to your <br />new iPhone.
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-setup-202109_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1631860863000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                QUICK START SETUP
                                            </Card.Text>
                                            <Card.Title className='fs-4 mt-4'>
                                                Automatically set up your <br />new iPhone with your <br />current iOS device.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-virtual-session-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625761602000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                TODAY AT APPLE
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Virtual Session: Getting Started with iPhone.
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-airpods-202108_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1627348509000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'>
                                                AIRPODS
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                Magic runs in the family.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-ios-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1632259716000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fs-4 mt-3'>
                                                Explore iOS 15. Packed <br />with new features for <br />iPhone.
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
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-airtags-202109?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1631252341000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6'> <small>
                                                AIRTAG
                                            </small>
                                            </Card.Text>
                                            <Card.Title className='fs-4'>
                                                A supereasy way to keep <br />track of your stuff.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-appleone-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625761565000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fs-3 mt-4'>
                                                Bundle up to six Apple <br />services. And enjoy more <br />for less.
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
                                <div className="col-4">
                                    <Card className="text-light bg-black" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-business-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1629955000000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6 text-secondary'>
                                                BUSINESS
                                            </Card.Text>
                                            <Card.Title className='fs-5'>
                                                From enterprise to small <br />business, we’ll work with <br />you.5
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="bg-black" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-government-202109_GEO_US?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1631860864000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6 text-secondary'>GOVERMENT
                                            </Card.Text>
                                            <Card.Title className='fs-5'>
                                                Special pricing is available  <br />for state, local, and federal  <br />agencies.5
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veterans-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645468079106" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text className='fs-6 text-secondary'>
                                                VETERANS AND MILITARY
                                            </Card.Text>
                                            <Card.Title className='fs-5'>
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
                * Pricing for iPhone 13 and iPhone 13 mini includes a $30 carrier instant discount that requires activation with AT&T, T-Mobile, Sprint, or Verizon. Available to qualified customers and requires 24-month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. iPhone activation required with AT&T, T-Mobile, Sprint, or Verizon for purchases made with ACMI at an Apple Store. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. Additional Apple Card Monthly Installments terms are in the Apple Card Customer Agreement(Opens in a new window). Additional iPhone Payments terms are here(Opens in a new window). ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                1. AT&T Special Deal: Offer pricing will reflect application of AT&T trade‑in credit applied over 36 months after trade‑in of eligible smartphone. Requires upgrade of an existing line or activation of a new line and purchase of a new iPhone 13 mini, iPhone 13, iPhone 13 Pro, or iPhone 13 Pro Max on qualifying 36‑month 0% APR installment plan, subject to carrier credit qualification. AT&T Installment Plan with Next Up is not eligible for this promotion. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible unlimited plan. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $30. Trade‑in device may not be on existing installment plan. Bill credits are applied as a monthly credit over the 36‑month installment plan. Credits start within 3 bills. Will receive catch‑up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited‑time offer; subject to change. Limits: one trade‑in per qualifying purchase and one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 13 and iPhone 13 mini includes $30 AT&T instant discount. Activation required.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                Verizon Special Deal: Offer pricing will reflect application of Verizon's trade-in credit up to $440 (iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max) or $412 (iPhone 13 mini) or $425 (iPhone 12) or $375 (iPhone 12 mini) after trade-in of eligible smartphone. Savings comprised of (i) Apple instant trade-in credit at checkout and (ii) Verizon monthly bill credits applied over 24 months (iPhone 13 mini and iPhone 13) or 30 months (iPhone 13 Pro and iPhone 13 Pro Max). Customer must remain in the Verizon Device Payment Program for 24 months (iPhone 12 mini, iPhone 12, iPhone 13 mini, and iPhone 13) or 30 months (iPhone 13 Pro and iPhone 13 Pro Max) to receive the full benefit of the Verizon bill credits. Bill credits may take 1-2 bill cycles to appear. If it takes two cycles for bill credits to appear, you’ll see the credit for the first cycle on your second bill in addition to that month’s credit. Requires purchase and activation of a new iPhone 12 mini, iPhone 12, iPhone 13 mini, iPhone 13, iPhone 13 Pro, or iPhone 13 Pro Max with the Verizon Device Payment Program at 0% APR for 24 months (iPhone 12 mini, iPhone 12, iPhone 13 mini, and iPhone 13) or 30 months (iPhone 13 Pro and iPhone 13 Pro Max), subject to carrier credit qualification, and iPhone availability and limits. Taxes and shipping not included in monthly price. Sales tax may be assessed on full value of new iPhone. Requires eligible unlimited service plan. Requires trade-in of eligible device in eligible condition. Must be at least 18 to trade-in. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason. In-store trade-in requires presentation of a valid, government-issued photo ID (local law may require saving this information). In-store promotion availability subject to local law; speak to a Specialist to learn more. Limited-time offer; subject to change. Additional terms from Apple, Verizon, and Apple’s trade-in partners may apply. Price for iPhone 12 mini, iPhone 12, iPhone 13 mini, and iPhone 13 includes $30 Verizon instant discount. Activation required.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                T-Mobile/Sprint Special Deal: Buy an iPhone 13 Series or iPhone 12 series and trade in a qualifying device (iPhone X, iPhone XS, iPhone XS Max, iPhone XR, iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max, iPhone 12, iPhone 12 mini, iPhone 12 Pro, and iPhone 12 Pro Max) to receive (i) Apple instant trade-in credit and (ii) an additional $200 back in bill credits on your T-Mobile/Sprint rate plan. Bill credits will be applied over 24 months toward your rate plan charges; must be active and in good standing to receive credits; allow 2 bill cycles from valid submission and validation of trade in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, service, and trade-in in good condition required. T-Mobile/Sprint in stores and on customer service calls, $30 assisted or upgrade support charge may be required. Max 4/account. May not be combinable with some offers or discounts. Price for iPhone 13, iPhone 13 mini, iPhone 12, and iPhone 12 mini includes $30 T-Mobile/Sprint instant discount. Activation required.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                2. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                3. Apple Card Monthly Installments (ACMI) is a 0% APR payment option available to select at checkout for certain Apple products purchased at Apple Store locations, apple.com(Opens in a new window), the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204(Opens in a new window) for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. If you choose the pay-in-full or one-time-payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement(Opens in a new window) for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings  General  Software Update. Tap Download and Install.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                4. Program available for iPhone 13 and iPhone 13 Pro. Available to qualified customers with a credit check and eligible U.S. credit or debit card. Requires a 24-month installment loan with a 0% APR from Citizens Bank, N.A. (subject to any interest, fees, or other costs payable to the card issuer), purchase of AppleCare+ for iPhone, and iPhone activation with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile. Sales tax and any applicable fees due at time of purchase. Full terms apply.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                5. Special pricing available to qualified customers. To learn more about how to start qualifying toward special pricing, talk to an Apple Specialist in a store or give us a call at 1-800-854–3680.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                †† We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.
                <hr style={{ height: 1 }} />
            </p>

        </div >
    );
}

export default Iphone;
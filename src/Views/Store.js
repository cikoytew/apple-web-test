import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import { Apple, App, Bag, Box, EmojiLaughing, Square, Laptop, CreditCard } from 'react-bootstrap-icons';
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
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white">
                            <div className="row">
                                <div className="col-lg-2">
                                    <NavLink className='text-black text-decoration-none' to='/shop/buy-mac'>
                                        <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=250&hei=150&fmt=png-alpha&.v=1645051958490" alt="" />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">Mac</h6>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-2">
                                    <NavLink className='text-black text-decoration-none' to='/shop/buy-iphone'>
                                        <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=250&hei=150&fmt=png-alpha&.v=1630706116000" alt="" />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">iPhone</h6>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-2">
                                    <NavLink className='text-black text-decoration-none' to='/shop/buy-ipad'>
                                        <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=250&hei=150&fmt=png-alpha&.v=1625783381000" alt="" />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">iPad</h6>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-2">
                                    <NavLink className='text-black text-decoration-none' to='/shop/buy-watch'>
                                        <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202203?wid=250&hei=150&fmt=png-alpha&.v=1645052537409" alt="" />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">Apple Watch</h6>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-2">
                                    <NavLink className='text-black text-decoration-none' to='/airpods'>
                                        <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=250&hei=150&fmt=png-alpha&.v=1633718741000" alt="" />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">AirPods</h6>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-2">
                                    <NavLink className='text-black text-decoration-none' to='/airtag'>
                                        <img className="card-img-top" style={{ width: 160 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=250&hei=150&fmt=png-alpha&.v=1625783380000" alt="" />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">AirTag</h6>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
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


            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                The latest.<p className='text-secondary d-inline'> Take a look at what’s new, right now.</p>
            </div>


            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: '100%' }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-pro-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290504" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '8em' }}>IPHONE 13 PRO</Card.Text>
                                            <Card.Title style={{ width: '8em' }}>
                                                Oh. So. Pro.
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>Now in Alpine Green. From $999.00 or $41.62/mo.per month for 24 mo.monthsFootnote*</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                                <div className="col-4">
                                    <Card className="text-white bg-white" style={{ width: '100%' }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=160&hei=200&fmt=p-jpg&qlt=95&.v=1645636337374" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '8em' }}>
                                                IPAD AIR
                                            </Card.Text>
                                            <Card.Title style={{ width: '8em' }}>Light. Bright. Full of might.</Card.Title>
                                            <Card.Text style={{ width: '8em' }}>From $599 or $49.91/mo.per month for 12 mo.monthsFootnote†</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: '100%' }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-mac-studio-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848581" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '8em' }}>
                                                MAC STUDIO
                                            </Card.Text>
                                            <Card.Title style={{ width: '8em' }}>Empower station.</Card.Title>
                                            <Card.Text style={{ width: '8em' }}>From $1999 or $166.58/mo.per month for 12 mo.monthsFootnote†</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block border border-white">
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: '100%' }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-studio-display-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848762" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '8em' }}>
                                                STUDIO DISPLAY
                                            </Card.Text>
                                            <Card.Title style={{ width: '8em' }}>A sight to be bold.</Card.Title>
                                            <Card.Text style={{ width: '8em' }}>From $1599 or $133.25/mo.per month for 12 mo.monthsFootnote†</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: '100%' }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-se-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052592978" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '8em' }}>
                                                IPHONE SE
                                            </Card.Text>
                                            <Card.Title style={{ width: '8em' }}>
                                                Love the power. <br />
                                                Love the price.
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}> From $429.00 or $17.87/mo.per month for 24 mo.monthsFootnote*</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: '100%' }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290452" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '8em' }}>
                                                IPHONE 13
                                            </Card.Text>
                                            <Card.Title>Your new superpower.</Card.Title>
                                            <Card.Text style={{ width: '8em' }}>Now in Green. From $699.00 or $29.12/mo.per month for 24 mo.monthsFootnote*</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-black" style={{ width: '100%' }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-bands-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052880599" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '8em' }}>
                                                APPLE WATCH BANDS
                                            </Card.Text>
                                            <Card.Title style={{ width: '8em' }}>New hues in bloom.</Card.Title>
                                            <Card.Text style={{ width: '8em' }}>Shop the latest band styles and colors.</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='fs-4 fw-bold d-none d-sm-none offset-1 my-4 d-lg-block' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Help is here. <p className='text-secondary d-inline'> Whenever and however you need it.</p>
            </div>

            <section>
                <div className="container offset-lg-1 d-none d-sm-none d-lg-block position-relative" >
                    <div className="row">
                        <Card className="text-dark border border-5" style={{ width: 550 }}>
                            <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626296836000" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='fw-bold fs-3 mt-5'>Shop one on one with a <br /> Specialist. Online or in store.
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="text-dark border border-5 position-absolute top-0 start-50" style={{ width: 465, height: 260 }}>
                            <Card.Img className='rounded' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-apps-202108?wid=550&hei=280&fmt=p-jpg&qlt=95&.v=1626223748000" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className='fw-bold fs-3 mt-4'>
                                    Get to know your new device <br /> with a free Personal Session.</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="text-dark border border-5 position-absolute bottom-0 start-50" style={{ width: 465, height: 260 }}>
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


            <div className='fs-4 fw-bold d-none d-sm-none offset-1 my-4 d-lg-block' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                The Apple difference. <p className='text-secondary d-inline'> Even more reasons to shop with us.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white border border-4" style={{ width: 300, height: 200 }}>
                                        <div className="container position-relative mt-2 ">
                                            <Apple className='bottom-0 mx-3 translate-middle-y position-absolute' color='dodgerblue' size={20} />
                                            <Bag color='dodgerblue' size={50} />
                                        </div>
                                        <Card.ImgOverlay>
                                            <Card.Title className='mt-5 fw-bold '>
                                                Convenient pickup options <br />that fit into your everyday schedule.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white border border-4" style={{ width: 300, height: 200 }}>
                                        <div className="container position-relative mt-2">
                                            <Box color='red' size={50} />
                                        </div>
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold mt-5'>
                                                Choose fast, free delivery or <p className='text-danger d-inline'> two-hour courier delivery.</p>
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white border border-4" style={{ width: 300, height: 200 }}>
                                        <div className="container position-relative mt-2">
                                            <EmojiLaughing color='dodgerblue' size={50} />
                                        </div>
                                        <Card.ImgOverlay>
                                            <Card.Title className=' mt-5 fw-bold '>
                                                Make them yours. <br /><p style={{ color: 'dodgerblue' }}> Engrave a mix of emoji, names, and numbers for free.</p>
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white border border-4" style={{ width: 300, height: 200 }}>
                                        <div className="container position-relative mt-2">
                                            <Apple color={'coral'} size={50} />
                                        </div>
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold mt-5'>
                                                <p className='d-inline rainbow-text'>Customize </p>  your Mac and create your own style of Apple Watch.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white border border-4" style={{ width: 300, height: 200 }}>
                                        <div className="container position-relative mt-2">
                                            <Laptop className='bottom-0 mx-3 translate-middle-y position-absolute' color='mediumpurple' size={21} />
                                            <Square color='mediumpurple' size={50} />
                                        </div>
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold mt-5'>
                                                <p className='d-inline' style={{ color: 'mediumpurple' }}>Trade in your current device.</p> Get credit toward a new one.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white border border-4" style={{ width: 300, height: 200 }}>
                                        <div className="container position-relative mt-2">
                                            <CreditCard color='limegreen' size={50} />
                                        </div>
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold mt-5'>
                                                Pay in full or <p className='d-inline' style={{ color: 'limegreen' }}> pay over time.</p> Your choice.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section >

            <div className='fs-4 fw-bold d-none d-sm-none offset-1 my-4 d-lg-block' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Accessories.<p className='text-secondary d-inline'>  Essentials that pair perfectly with your favorite devices.</p>
            </div>

            <section>

                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-new-accessories-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052150646" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title>
                                                In with the new.
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>
                                                Discover fresh new colors for your favorite accessories.</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN683?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645997365583" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                iPhone 13 Pro Silicone Case with MagSafe - Nectarine
                                            </Card.Title>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>$49.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6G3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645509710532" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                iPhone SE Silicone Case - Chalk Pink
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>$35.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white">
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN613?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645847133062" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                iPhone 13 Silicone Case with MagSafe - Blue Fog
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>$49.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0W3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1629865215000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                Now with Find My support
                                            </Card.Text>
                                            <Card.Title>
                                                iPhone Leather Wallet with MagSafe - Wisteria
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>$59.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN1L3ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645079879837" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                New
                                            </Card.Text>
                                            <Card.Title>
                                                45mm Flamingo Braided Solo Loop - Size 6
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>$99.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM013?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1624640873000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                Not New
                                            </Card.Text>
                                            <Card.Title>
                                                AirTag Leather Loop - Forest Green
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>$39.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-allaccessories-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1646846702011" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fw-bold fs-5 mt-4'>Explore all accessories.</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </section>


            <div className='fs-4 fw-bold offset-1 d-none d-sm-none my-4 d-lg-block' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Loud and clear.<p className='text-secondary d-inline'>  Unparalleled choices for rich, high-quality sound.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white" >
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applemusic-202112?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1638212879000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title>
                                                Get 6 months of Apple Music free.
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>
                                                Included with purchase of select AirPods and Beats products, and HomePod mini.**</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 270 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                Free Engraving
                                            </Card.Text>
                                            <Card.Title>
                                                AirPods (3rd generation)
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>$179.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2J3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1634663503000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                Free Engraving
                                            </Card.Text>
                                            <Card.Title>
                                                Beats Fit Pro True Wireless Earbuds — Sage Gray
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>$199.99</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white">
                            <div className="row">
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 270 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1591634795000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                Free Engraving
                                            </Card.Text>
                                            <Card.Title>
                                                AirPods Pro
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>$249.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 270 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-orange-202110?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632925511000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                Not New
                                            </Card.Text>
                                            <Card.Title>
                                                HomePod mini - Orange
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}> $99.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-white" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 270 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1604021221000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-white position-relative'>
                                            <Card.Text style={{ width: '19rem', color: 'red' }}>
                                                Free Engraving
                                            </Card.Text>
                                            <Card.Title>
                                                AirPods Max - Silver
                                            </Card.Title>
                                            <Card.Text style={{ width: '8em' }}>$549.00</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='fs-4 fw-bold d-none d-sm-none offset-1 my-4 d-lg-block' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Do more with Apple products.<p className='text-secondary d-inline'> Here’s where the fun begins.</p>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-todayatapple-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625788042000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '19rem' }} className='fs-6'>WATCH AND LEARN
                                            </Card.Text>
                                            <Card.Title className='fs-4 fw-bold'>
                                                Join a Today at Apple <br /> virtual session.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626375546000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fs-4 fw-bold mt-5'>Six Apple services. One easy subscription.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-sm-none border border-white">
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202203?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1645052537753" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className='fs-3 fw-bold mt-4'>Discover all the ways to <br /> use Apple Pay.
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202110_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1634069685000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '19rem' }} className='fs-6'>
                                                HOME
                                            </Card.Text>
                                            <Card.Title className='fs-3 fw-bold'>
                                                See how one app can control your entire home.</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>


            <div className='fs-4 fw-bold d-none d-sm-none offset-1 my-4 d-lg-block' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Shop by group. <p className='text-secondary d-inline'> Get special pricing for students, businesses, and more.</p>
            </div>


            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-none d-sm-none d-lg-block border border-white" >
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-edu-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627492399000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '19rem' }} className='fs-6'>
                                                EDUCATION
                                            </Card.Text>
                                            <Card.Title className='fs-2 fw-bold'>
                                                Save on Mac or iPad with education pricing.2
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="text-light bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-small-business-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627318784000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '19rem' }} className='fs-6 text-secondary'>BUSINESS
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

                                            <Card.Text style={{ width: '19rem' }} className='fs-6 text-secondary'>GOVERNMENT
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
                                            <Card.Text style={{ width: '19rem' }} className='fs-6 text-secondary'>VETERANS AND MILITARY
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
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
                            <div className="row">
                                <div className="col-6">
                                    <Card className="text-dark bg-black" style={{ width: 480 }}>
                                        <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627318783000" alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Text style={{ width: '19rem' }} className='fs-6'>
                                                CERTIFIED REFURBISHED
                                            </Card.Text>
                                            <Card.Title className='fs-2 fw-bold'>
                                                Shop like-new products backed by a one-year warranty.</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>


            <div className='fs-4 fw-bold offset-1 my-4 d-lg-block d-none d-md-none' style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                Quick Links
            </div>
            <div className="offset-1 d-flex flex-row bd-highlight mb-3">
                <div className="rounded-pill px-3 py-2 bg-secondary bg-opacity-10 d-lg-block d-none d-md-none">Order Status</div>
                <div className="rounded-pill px-3 py-2 bg-secondary bg-opacity-10 ms-3 d-lg-block d-none d-md-none">Shoping Help</div>
                <div className="rounded-pill px-3 py-2 bg-secondary bg-opacity-10 ms-3 d-lg-block d-none d-md-none">Returns</div>
            </div>

            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                * Pricing for iPhone 13 and iPhone 13 mini includes a $30 carrier instant discount that requires activation with AT&T, T-Mobile, Sprint, or Verizon. Available to qualified customers and requires 24-month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. iPhone activation required with AT&T, T-Mobile, Sprint, or Verizon for purchases made with ACMI at an Apple Store. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. Additional Apple Card Monthly Installments terms are in the Apple Card Customer Agreement. Additional iPhone Payments terms are here. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                ** Offer is available for new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later, for a limited time only. Offer good for 3 months after eligible device pairing. Plan automatically renews at your region’s price per month until cancelled. No purchase necessary for current owners of eligible devices. Service availability varies by region. Restrictions and other terms apply.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                ◊ Apple Card Monthly Installments (ACMI) is a 0% APR payment option available to select at checkout for certain Apple products purchased at Apple Store locations, apple.com(Opens in a new window), the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204(Opens in a new window) for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. If you choose the pay-in-full or one-time-payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement(Opens in a new window) for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                † Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple, and is subject to credit approval and credit limit. Financing terms vary by product. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings General Software Update. Tap Download and Install.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                Available for qualifying applicants in the United States.

                Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.

                1. AT&T Special Deal: Offer pricing will reflect application of AT&T trade‑in credit applied over 36 months after trade‑in of eligible smartphone. Requires upgrade of an existing line or activation of a new line and purchase of a new iPhone 13 mini, iPhone 13, iPhone 13 Pro, or iPhone 13 Pro Max on qualifying 36‑month 0% APR installment plan, subject to carrier credit qualification. AT&T Installment Plan with Next Up is not eligible for this promotion. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible unlimited plan. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $30. Trade‑in device may not be on existing installment plan. Bill credits are applied as a monthly credit over the 36‑month installment plan. Credits start within 3 bills. Will receive catch‑up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited‑time offer; subject to change. Limits: one trade‑in per qualifying purchase and one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 13 and iPhone 13 mini includes $30 AT&T instant discount. Activation required.
                T-Mobile/Sprint Special Deal: Buy an iPhone 13 Series or iPhone 12 series and trade in a qualifying device (iPhone X, iPhone XS, iPhone XS Max, iPhone XR, iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max, iPhone 12, iPhone 12 mini, iPhone 12 Pro, and iPhone 12 Pro Max) to receive (i) Apple instant trade-in credit and (ii) an additional $200 back in bill credits on your T-Mobile/Sprint rate plan. Bill credits will be applied over 24 months toward your rate plan charges; must be active and in good standing to receive credits; allow 2 bill cycles from valid submission and validation of trade in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, service, and trade-in in good condition required. T-Mobile/Sprint in stores and on customer service calls, $30 assisted or upgrade support charge may be required. Max 4/account. May not be combinable with some offers or discounts. Price for iPhone 13, iPhone 13 mini, iPhone 12, and iPhone 12 mini includes $30 T-Mobile/Sprint instant discount. Activation required.
                Verizon Special Deal: Offer pricing will reflect application of Verizon's trade-in credit up to $440 (iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max) or $412 (iPhone 13 mini) or $425 (iPhone 12) or $375 (iPhone 12 mini) after trade-in of eligible smartphone. Savings comprised of (i) Apple instant trade-in credit at checkout and (ii) Verizon monthly bill credits applied over 24 months (iPhone 13 mini and iPhone 13) or 30 months (iPhone 13 Pro and iPhone 13 Pro Max). Customer must remain in the Verizon Device Payment Program for 24 months (iPhone 12 mini, iPhone 12, iPhone 13 mini, and iPhone 13) or 30 months (iPhone 13 Pro and iPhone 13 Pro Max) to receive the full benefit of the Verizon bill credits. Bill credits may take 1-2 bill cycles to appear. If it takes two cycles for bill credits to appear, you’ll see the credit for the first cycle on your second bill in addition to that month’s credit. Requires purchase and activation of a new iPhone 12 mini, iPhone 12, iPhone 13 mini, iPhone 13, iPhone 13 Pro, or iPhone 13 Pro Max with the Verizon Device Payment Program at 0% APR for 24 months (iPhone 12 mini, iPhone 12, iPhone 13 mini, and iPhone 13) or 30 months (iPhone 13 Pro and iPhone 13 Pro Max), subject to carrier credit qualification, and iPhone availability and limits. Taxes and shipping not included in monthly price. Sales tax may be assessed on full value of new iPhone. Requires eligible unlimited service plan. Requires trade-in of eligible device in eligible condition. Must be at least 18 to trade-in. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason. In-store trade-in requires presentation of a valid, government-issued photo ID (local law may require saving this information). In-store promotion availability subject to local law; speak to a Specialist to learn more. Limited-time offer; subject to change. Additional terms from Apple, Verizon, and Apple’s trade-in partners may apply. Price for iPhone 12 mini, iPhone 12, iPhone 13 mini, and iPhone 13 includes $30 Verizon instant discount. Activation required.

            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                2. Special pricing available to qualified customers. To learn more about how to start qualifying toward special pricing, talk to an Apple Specialist in a store or give us a call at 1‑800‑MY‑APPLE.
            </p>
            <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                †† We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.
                <hr style={{ height: 1 }} />
            </p>
        </div >




    );
}

export default Store;
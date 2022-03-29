import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Box, ChatDots } from 'react-bootstrap-icons';

function Checkoutiphone(props) {

    return (
        <div className='container'>
            <div className='container'>
                <section>
                    <div className="container d-lg-block d-none d-md-none offset-lg-1 bg-white py-2">
                        <div className="row ">
                            <div className="col-lg-auto fs-5 fw-bold">iPhone 13 Pro</div>
                            <div className="col-lg-auto position-relative mt-2 start-50">
                                <small>
                                    From $999 or $41.62/mo. for 24 mo.
                                </small>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container d-lg-block d-none d-md-none bg-secondary bg-opacity-10">
                <div className="row">
                    <div className="col-lg-3">
                        <small>
                            <p className='fs-5 fw-bold'>
                                Special Carrier Deals at <br />Apple
                            </p>
                            <p className='text-primary'>
                                Learn more
                            </p>
                        </small>
                    </div>
                    <div className="col-lg-3">
                        <small>
                            <img className='offset-4' style={{ width: 80 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-att-202010?wid=106&hei=50&fmt=png-alpha&.v=1601573153000" alt="AT&T" />
                            <p className='text-center'>
                                Get up to $800 credit after <br />trade‑in.
                            </p>
                        </small>
                    </div>
                    <div className="col-lg-3">
                        <small>
                            <img className='offset-3' style={{ width: 150 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-tmobile-202010?wid=194&hei=50&fmt=png-alpha&.v=1602787048000" alt="AT&T" />
                            <p className='text-center'>
                                Get $370–$850 in credit after <br />trade‑in.
                            </p>
                        </small>
                    </div>
                    <div className="col-lg-3">
                        <small>
                            <img className='offset-4' style={{ width: 80 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-verizon-202010?wid=106&hei=50&fmt=png-alpha&.v=1601573153000" alt="AT&T" />
                            <p className='text-center'>
                                Get up to $440 credit after <br />trade‑in.
                            </p>
                        </small>
                    </div>
                </div>

            </div>
            <div className="container d-flex justify-content-center ">
                <div className="d-lg-block d-none d-md-none bg-white py-2">
                    <div className="row ">
                        <div className="col-lg-7">
                            <Card className="text-dark bg-white border border-white sticky-top " style={{ width: 400 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 400, height: 400 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1644969385433' alt="Card image" />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Box className='offset-5' size={25} />
                                        <p className='text-center'>
                                            Get free delivery, or pick up available items at an Apple Store
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <Box className='offset-5' size={25} />
                                        <p className='text-center'>
                                            Free and easy returns
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-lg-5">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <div className="row justify-content-center">
                                </div>
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Text className='fs-6' style={{ color: 'red' }}>
                                        New
                                    </Card.Text>
                                    <Card.Title className='fs-2 fw-bold'>
                                        Buy iPhone 13 Pro
                                    </Card.Title>
                                    <Card.Text>
                                        <small>
                                            Get $100–$650 off when you trade in an iPhone 8 or newer◊◊
                                        </small>
                                    </Card.Text>
                                    <Card.Text style={{ color: 'blue' }}>
                                        <small>
                                            See how trade-in works
                                        </small>
                                    </Card.Text>
                                    <Card.Title className='fw-bold'>
                                        <small>
                                            Choose your model.
                                        </small>
                                    </Card.Title>
                                    <Card.Text style={{ color: 'blue' }}>
                                        <small>
                                            Which model is right for you?
                                        </small>
                                    </Card.Text>

                                    <div className="row border border-2">
                                        <div className="col-lg-6">
                                            <Card.Text>
                                                <small>
                                                    <p className='fw-bold mt-2'>
                                                        iPhone 13 Pro
                                                        <p className='fw-normal'>
                                                            6.1-inch display¹
                                                        </p>
                                                    </p>
                                                </small>
                                            </Card.Text>
                                        </div>
                                        <div className="col-lg-6">
                                            <Card.Text>
                                                <small>
                                                    <p className='mt-2'>
                                                        <small>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From $999 or $41.62/mo. for 24 mo.
                                                        </small>
                                                    </p>
                                                </small>
                                            </Card.Text>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row border border-2">
                                        <div className="col-lg-6">
                                            <Card.Text>
                                                <small>
                                                    <p className='fw-bold mt-2'>
                                                        iPhone 13 Pro Max
                                                        <p className='fw-normal'>
                                                            6.7-inch display¹
                                                        </p>
                                                    </p>
                                                </small>
                                            </Card.Text>
                                        </div>
                                        <div className="col-lg-6">
                                            <Card.Text>
                                                <small>
                                                    <p className='mt-2'>
                                                        <small>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From $1099 or $45.79/mo. for 24 mo.
                                                        </small>
                                                    </p>
                                                </small>
                                            </Card.Text>
                                        </div>
                                    </div>

                                    <div className="bg-white timpah">

                                        <Card.Title className='fw-bold'>
                                            <small>
                                                Choose your finish.
                                            </small>
                                        </Card.Title>

                                        <div className="container">
                                            <div className="row ">
                                                <div className="col-lg-6 border border-2">
                                                    <Card.Text className='d-flex justify-content-center mt-2'>
                                                        <small>
                                                            <button className='btn btn-success rounded-circle ps-4' ><br /></button>
                                                        </small>
                                                    </Card.Text>
                                                    <Card.Text className='d-flex justify-content-center'>
                                                        <small>
                                                            Alpine Green
                                                        </small>
                                                    </Card.Text>
                                                </div>
                                                <div className="col-lg-6 border border-2">
                                                    <Card.Text className='d-flex justify-content-center mt-2'>
                                                        <small>
                                                            <button className='btn btn-secondary opacity-25 rounded-circle ps-4' ><br /></button>
                                                        </small>
                                                    </Card.Text>
                                                    <Card.Text className='d-flex justify-content-center'>
                                                        <small>
                                                            Silver
                                                        </small>
                                                    </Card.Text>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-lg-6 border border-2">
                                                    <Card.Text className='d-flex justify-content-center mt-2'>
                                                        <small>
                                                            <button className='btn btn-warning opacity-50 rounded-circle ps-4' ><br /></button>
                                                        </small>
                                                    </Card.Text>
                                                    <Card.Text className='d-flex justify-content-center'>
                                                        <small>
                                                            Gold
                                                        </small>
                                                    </Card.Text>
                                                </div>
                                                <div className="col-lg-6 border border-2">
                                                    <Card.Text className='d-flex justify-content-center mt-2'>
                                                        <small>
                                                            <button className='btn btn-secondary opacity-75 rounded-circle ps-4' ><br /></button>
                                                        </small>
                                                    </Card.Text>
                                                    <Card.Text className='d-flex justify-content-center'>
                                                        <small>
                                                            Graphite
                                                        </small>
                                                    </Card.Text>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-lg-6 border border-2">
                                                    <Card.Text className='d-flex justify-content-center mt-2'>
                                                        <small>
                                                            <button className='btn btn-info opacity-25 rounded-circle ps-4' ><br /></button>
                                                        </small>
                                                    </Card.Text>
                                                    <Card.Text className='d-flex justify-content-center'>
                                                        <small>
                                                            Sierra Blue
                                                        </small>
                                                    </Card.Text>
                                                </div>
                                            </div>
                                        </div>

                                        <Card.Title className='fw-bold pt-4'>
                                            <small>
                                                Choose your capacity.
                                            </small>
                                        </Card.Title>
                                        <Card.Text style={{ color: 'blue' }}>
                                            <small>
                                                How much capacity is right for you?
                                            </small>
                                        </Card.Text>
                                        <div className="row ">
                                            <div className="col-lg-6 border border-2">
                                                <Card.Text className='d-flex justify-content-center mt-2'>
                                                    <small className='fs-5 fw-bold'>
                                                        128GB
                                                    </small>
                                                </Card.Text>
                                                <Card.Text className='text-center'>
                                                    <small>
                                                        From $999 or $41.62/mo. for 24 mo.
                                                    </small>
                                                </Card.Text>
                                            </div>
                                            <div className="col-lg-6 border border-2">
                                                <Card.Text className='d-flex justify-content-center mt-2'>
                                                    <small className='fs-5 fw-bold'>
                                                        256GB
                                                    </small>
                                                </Card.Text>
                                                <Card.Text className='text-center'>
                                                    <small>
                                                        From $1099 or $45.79/mo. for 24 mo.
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-lg-6 border border-2">
                                                <Card.Text className='d-flex justify-content-center mt-2'>
                                                    <small className='fs-5 fw-bold'>
                                                        512GB
                                                    </small>
                                                </Card.Text>
                                                <Card.Text className='text-center'>
                                                    <small>
                                                        From $1299 or $54.12/mo. for 24 mo.
                                                    </small>
                                                </Card.Text>
                                            </div>
                                            <div className="col-lg-6 border border-2">
                                                <Card.Text className='d-flex justify-content-center mt-2'>
                                                    <small className='fs-5 fw-bold'>
                                                        1TB
                                                    </small>
                                                </Card.Text>
                                                <Card.Text className='text-center'>
                                                    <small>
                                                        From $1499 or $62.45/mo. for 24 mo.
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>

                                        <Card.Title className='fw-bold pt-4'>
                                            <small>
                                                Connect to a carrier now.
                                            </small>
                                        </Card.Title>
                                        <Card.Text>
                                            <small>
                                                Connect to a carrier through us and your iPhone will arrive ready to go. All iPhone models are unlocked except those purchased with AT&T Installment Plans.
                                            </small>
                                        </Card.Text>
                                        <Card.Text style={{ color: 'red' }}>
                                            <small>
                                                Special Carrier Deals Available
                                            </small>
                                        </Card.Text>


                                        <div className="row ">
                                            <div className="col-lg-6 border border-2">
                                                <small>
                                                    <img className='ms-3 mt-2' style={{ width: 80 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-att-202010?wid=106&hei=50&fmt=png-alpha&.v=1601573153000" alt="AT&T" />
                                                    <p className='text-center'>
                                                        From $999 or $41.62/mo. for 24 mo.
                                                    </p>
                                                </small>
                                            </div>
                                            <div className="col-lg-6 border border-2">
                                                <small>
                                                    <img className='ms-3 mt-3' style={{ width: 100 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-tmobile-202010?wid=194&hei=50&fmt=png-alpha&.v=1602787048000" alt="AT&T" />
                                                    <p className='text-center mt-2'>
                                                        From $999 or $41.62/mo. for 24 mo.
                                                    </p>
                                                </small>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-lg-6 border border-2">
                                                <small>
                                                    <img className='ms-3 mt-3' style={{ width: 100 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-tmobile-202010?wid=194&hei=50&fmt=png-alpha&.v=1602787048000" alt="AT&T" />
                                                    <p className='text-center mt-2'>
                                                        From $999 or $41.62/mo. for 24 mo.
                                                    </p>
                                                </small>
                                            </div>
                                            <div className="col-lg-6 border border-2">
                                                <small>
                                                    <img className='ms-3 mt-2' style={{ width: 80 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-carrier-verizon-202010?wid=106&hei=50&fmt=png-alpha&.v=1601573153000" alt="AT&T" />
                                                    <p className='text-center'>
                                                        From $999 or $41.62/mo. for 24 mo.
                                                    </p>
                                                </small>
                                            </div>
                                        </div>
                                        <div className="row border border-2">
                                            <div className="col-lg-12 ">
                                                <Card.Text>
                                                    <small>
                                                        <p className='fw-bold mt-2 text-center'>
                                                            Connect on your own later.
                                                            <p className='fw-normal'>
                                                                From $999 or $41.62/mo. for 24 mo.
                                                            </p>
                                                        </p>
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>

                                        <Card.Text style={{ color: 'blue' }}>
                                            <small>
                                                Explore all pricing and special deals
                                            </small>
                                        </Card.Text>
                                        <Card.Text className='fw-bold'>
                                            <small>
                                                Do you have a smartphone to trade in with Apple?
                                            </small>
                                            <Card.Text className='fw-normal' style={{ color: 'blue' }}>
                                                <small>
                                                    See how trade-in works
                                                </small>
                                            </Card.Text>
                                        </Card.Text>

                                        <div className="row ">
                                            <div className="col-lg-6 border border-2 py-3">
                                                <Card.Text className='d-flex justify-content-center mt-2'>
                                                    <small className='fs-5 fw-bold'>
                                                        NO
                                                    </small>
                                                </Card.Text>
                                            </div>
                                            <div className="col-lg-6 border border-2 py-3">
                                                <Card.Text className='d-flex justify-content-center mt-2'>
                                                    <small className='fs-5 fw-bold'>
                                                        YES
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>
                                        <Card className='container bg-secondary bg-opacity-25 mt-3 py-2'>
                                            <button className="btn btn-primary rounded-pill"><small>
                                                Continue
                                            </small>
                                            </button>
                                            <Card.Text>
                                                <small>
                                                    Still deciding?
                                                </small>
                                                <Card.Text>
                                                    <small>
                                                        Add this item to a list and easily come back to it later.
                                                    </small>
                                                </Card.Text>
                                            </Card.Text>
                                        </Card>

                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
            </div >




            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="d-flex justify-content-center">
                            <ChatDots className='mt-2' size={30} />
                            <Card.Text>
                                <small className='fw-bold ms-2'>
                                    Have questions about buying an iPhone?
                                </small>
                                <Card.Text>
                                    <small className='text-primary ms-2'>
                                        Chat with an iPhone Specialist
                                    </small>
                                </Card.Text>
                            </Card.Text>
                        </div>
                    </div>
                </div>
            </div>












            <div className="container d-lg-block d-none d-md-none py-2">
                <Card className="border border-white" >
                    <div className="row d-flex justify-content-center">
                        <div class="col-lg-2">
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-2022-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1645123527658" alt="Card image" />
                        </div>
                        <div class="col-lg-2">
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-2022-gallery-2_GEO_US?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1645123567917" alt="Card image" />

                        </div>
                        <div class="col-lg-2">
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-2022-gallery-3?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1645810647598" alt="Card image" />

                        </div>
                        <div class="col-lg-2">
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-2022-gallery-4?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1645123526015" alt="Card image" />
                        </div>
                        <div class="col-lg-2">
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-2022-gallery-5?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1645810646735" alt="Card image" />

                        </div>
                    </div>
                </Card>
            </div>

            <div className="container mt-4 d-lg-block d-none d-md-none">
                <div className="cobtainer d-flex justify-content-center ">
                    <p className='fs-3 d-inline fw-bold'>
                        What’s in the Box
                    </p>
                </div>

                <div className="container d-flex justify-content-center">
                    <div className='col-lg-3'>
                        <img className='d-lg-block d-none d-md-none' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-green-witb-202203?wid=172&hei=392&fmt=jpeg&qlt=95&.v=1644965775338" />
                        <span className='ms-5'>
                            iPhone
                        </span>
                    </div>
                    <div className='col-lg-3'>
                        <img className='d-lg-block d-none d-md-none ms-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-cable-witb-202203?wid=92&hei=392&fmt=jpeg&qlt=95&.v=1644966142839" />
                        USB-C to Lightning Cable
                    </div>
                </div>
                <div className="cobtainer d-flex justify-content-center">
                    <Card className='border border-white' style={{ width: 800 }}>
                        <small className='text-center'>
                            As part of our efforts to reach our environmental goals, iPhone 13 Pro and iPhone 13 Pro Max do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.
                        </small>
                        <br />
                        <small className='text-center'>
                            We encourage you to re‑use your current power adapters and headphones that are compatible with these iPhone models. But if you need any new Apple power adapters or headphones, they are available for purchase.
                        </small>
                    </Card>
                </div>
            </div>

            <div className="container mt-5 d-lg-block d-none d-md-none">
                <div className="cobtainer d-flex justify-content-center">
                    <p className='fs-2 fw-bold'>
                        Which iPhone is right for you?
                    </p>
                </div>
            </div>

            <div className="container d-flex justify-content-center">
                <div className="d-lg-block d-none d-md-none bg-white py-2">
                    <div className="row">
                        <div className="col-lg-3">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-13-pro-202203?wid=488&hei=512&fmt=jpeg&qlt=80&.v=1645042316939' alt="Card image" />
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Text className="d-flex justify-content-center">
                                        <small style={{ color: 'red' }} >
                                            New
                                        </small>
                                    </Card.Text>
                                    <Card.Title className="d-flex justify-content-center fw-bold">
                                        iPhone 13 Pro
                                    </Card.Title>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            The ultimate iPhone.
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            From $999.00
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-3' style={{ width: 150 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-13-pro-swatch-202203?wid=224&hei=32&fmt=jpeg&qlt=80&.v=1645042316653' alt="Card image" />

                                    <Card.Title className='fw-bold d-flex justify-content-center my-2'>
                                        6.7″ or 6.1″
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='d-flex justify-content-center my-2'>
                                            All-screen OLED display¹ with ProMotion
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-iphone-13-pro-camera-202109?wid=94&hei=96&fmt=jpeg&qlt=80&.v=1630380241000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Pro camera system
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            Telephoto, Wide, Ultra Wide
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-a15-chip-202109?wid=96&hei=96&fmt=jpeg&qlt=80&.v=1630380245000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            A15 Bionic chip
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            5-core GPU
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-5g-202109?wid=126&hei=88&fmt=jpeg&qlt=80&.v=1630380246000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Superfast 5G cellular³
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-battery-202109?wid=114&hei=60&fmt=jpeg&qlt=80&.v=1630380243000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Up to 28 hours <br />video playback⁴
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-face-id-202203?wid=100&hei=98&fmt=jpeg&qlt=80&.v=1645042317042' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Face ID
                                        </small>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-13-202203?wid=488&hei=512&fmt=jpeg&qlt=80&.v=1645042317099' alt="Card image" />
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Text className="d-flex justify-content-center">
                                        <small style={{ color: 'red' }} >
                                            New
                                        </small>
                                    </Card.Text>
                                    <Card.Title className="d-flex justify-content-center fw-bold">
                                        iPhone 13
                                    </Card.Title>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            A Total powerhouse
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            From $699.00
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-3' style={{ width: 150 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-13-swatch-202203?wid=272&hei=32&fmt=jpeg&qlt=80&.v=1645042316826' alt="Card image" />

                                    <Card.Title className='fw-bold d-flex justify-content-center my-2'>
                                        6.1″ or 5.4″
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='d-flex justify-content-center my-2'>
                                            All-screen OLED display¹
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-iphone-13-camera-202109?wid=96&hei=96&fmt=jpeg&qlt=80&.v=1630380242000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Advanced dual-camera system
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            Wide, Ultra Wide
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-a15-chip-202109?wid=96&hei=96&fmt=jpeg&qlt=80&.v=1630380245000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            A15 Bionic chip
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            4-core GPU
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-5g-202109?wid=126&hei=88&fmt=jpeg&qlt=80&.v=1630380246000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Superfast 5G cellular³
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-battery-202109?wid=114&hei=60&fmt=jpeg&qlt=80&.v=1630380243000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Up to 19 hours <br />video playback⁴
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-face-id-202203?wid=100&hei=98&fmt=jpeg&qlt=80&.v=1645042317042' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Face ID
                                        </small>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-se-202203?wid=488&hei=512&fmt=jpeg&qlt=80&.v=1645035723159' alt="Card image" />
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Text className="d-flex justify-content-center">
                                        <small style={{ color: 'red' }} >
                                            New
                                        </small>
                                    </Card.Text>
                                    <Card.Title className="d-flex justify-content-center fw-bold">
                                        iPhone SE
                                    </Card.Title>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            Serious power. Serious value
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            From $429.00
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-4' style={{ width: 80 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-se-swatch-202203?wid=130&hei=32&fmt=jpeg&qlt=80&.v=1645035723178' alt="Card image" />

                                    <Card.Title className='fw-bold d-flex justify-content-center my-2'>
                                        4.7″
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='d-flex justify-content-center my-2'>
                                            LCD Display
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-iphone-SE-camera-202203?wid=100&hei=100&fmt=jpeg&qlt=80&.v=1645035723040' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Single Camera System
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            Wide
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-a15-chip-202109?wid=96&hei=96&fmt=jpeg&qlt=80&.v=1630380245000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            A15 Bionic chip
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            4-core GPU
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-5g-202109?wid=126&hei=88&fmt=jpeg&qlt=80&.v=1630380246000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            5G cellular³
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-battery-202109?wid=114&hei=60&fmt=jpeg&qlt=80&.v=1630380243000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Up to 15 hours <br />video playback⁴
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-finger-print-202203?wid=102&hei=102&fmt=jpeg&qlt=80&.v=1645035723115' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Touch ID
                                        </small>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-12-202203?wid=488&hei=512&fmt=jpeg&qlt=80&.v=1645042316874' alt="Card image" />
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Text className="d-flex justify-content-center">
                                        <small style={{ color: 'red' }} >
                                            New
                                        </small>
                                    </Card.Text>
                                    <Card.Title className="d-flex justify-content-center fw-bold">
                                        iPhone 12
                                    </Card.Title>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            As amazing as ever
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            From $599**
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-3' style={{ width: 150 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-12-swatch-202203?wid=272&hei=32&fmt=jpeg&qlt=80&.v=1645042316766' alt="Card image" />

                                    <Card.Title className='fw-bold d-flex justify-content-center my-2'>
                                        6.1″ or 5.4″
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='d-flex justify-content-center my-2'>
                                            All-screen OLED display¹
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-iphone-12-camera-202109?wid=86&hei=96&fmt=jpeg&qlt=80&.v=1630380243000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Dual Camera System
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            Wide, Ultra Wide
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-a15-chip-202109?wid=96&hei=96&fmt=jpeg&qlt=80&.v=1630380245000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            A13 Bionic chip
                                        </small>
                                        <small className="d-flex justify-content-center text-white">
                                            5-core GPU
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-5g-202109?wid=126&hei=88&fmt=jpeg&qlt=80&.v=1630380246000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Superfast 5G cellular³
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-battery-202109?wid=114&hei=60&fmt=jpeg&qlt=80&.v=1630380243000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Up to 17 hours <br />video playback⁴
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mb-0 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-face-id-202203?wid=100&hei=98&fmt=jpeg&qlt=80&.v=1645042317042' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            Face ID
                                        </small>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
            </div >

            <div className="container mt-5 d-lg-block d-none d-md-none">
                <div className="cobtainer d-flex justify-content-center">
                    <p className='fs-6 text-primary'>
                        Compare all iPhone models
                    </p>
                </div>
            </div>

            <div className="container offset-1 d-lg-block d-none d-md-none">
                <div className="row">
                    <div className="col-lg-6">
                        <Card className="offset-1 mt-5" style={{ width: 400 }} >
                            <Card.ImgOverlay>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-ar-icon-202109?wid=152&hei=172&fmt=png-alpha&.v=1630116014000" style={{ width: 80 }} />
                                <Card.Title className='display-5 fw-bold'>
                                    Use AR to see them from every angle.
                                </Card.Title>
                                <Card.Text className='text-secondary fw-bold'>
                                    Open this page in Safari on your <br />iPhone or iPad.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-ar-202203?wid=300&hei=500&fmt=jpeg&qlt=80&.v=1645831430146" alt="" />
                    </div>
                </div>

            </div>


            <div className="container">
                <small className='offset-1 lh-1 mt-5 text-secondary d-lg-block d-none d-md-none'>
                    The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.42 inches (iPhone 13 mini, iPhone 12 mini), 6.06 inches (iPhone 13, iPhone 13 Pro, iPhone 12), or 6.68 inches (iPhone 13 Pro Max) diagonally. Actual viewable area is less.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    Available space is less and varies due to many factors. A standard configuration uses approximately 12GB to 17GB of space, including iOS 15 with its latest features and Apple apps that can be deleted. Apple apps that can be deleted use about 4.5GB of space, and you can download them back from the App Store. Storage capacity subject to change based on software version, settings, and iPhone model.

                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>

                    All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced by Apple service provider. Battery life and charge cycles vary by use and settings. See apple.com/batteries and apple.com/iphone/battery.html for more information.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    Δ AT&T Special Deal: Offer pricing will reflect application of AT&T trade‑in credit applied over 36 months after trade‑in of eligible smartphone. Requires upgrade of an existing line or activation of a new line and purchase of a new iPhone 13 mini, iPhone 13, iPhone 13 Pro, or iPhone 13 Pro Max on qualifying 36‑month 0% APR installment plan, subject to carrier credit qualification. AT&T Installment Plan with Next Up is not eligible for this promotion. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible unlimited plan. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $30. Trade‑in device may not be on existing installment plan. Bill credits are applied as a monthly credit over the 36‑month installment plan. Credits start within 3 bills. Will receive catch‑up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited‑time offer; subject to change. Limits: one trade‑in per qualifying purchase and one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 13 and iPhone 13 mini includes $30 AT&T instant discount. Activation required.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    ° T-Mobile/Sprint Special Deal: Buy an iPhone 13 Series or iPhone 12 series and trade in a qualifying device (iPhone X, iPhone XS, iPhone XS Max, iPhone XR, iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max, iPhone 12, iPhone 12 mini, iPhone 12 Pro, and iPhone 12 Pro Max) to receive (i) Apple instant trade-in credit and (ii) an additional $200 back in bill credits on your T-Mobile/Sprint rate plan. Bill credits will be applied over 24 months toward your rate plan charges; must be active and in good standing to receive credits; allow 2 bill cycles from valid submission and validation of trade in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, service, and trade-in in good condition required. T-Mobile/Sprint in stores and on customer service calls, $30 assisted or upgrade support charge may be required. Max 4/account. May not be combinable with some offers or discounts. Price for iPhone 13, iPhone 13 mini, iPhone 12, and iPhone 12 mini includes $30 T-Mobile/Sprint instant discount. Activation required.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    ΔΔ Verizon Special Deal: Offer pricing will reflect application of Verizon's trade-in credit up to $440 (iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max) or $412 (iPhone 13 mini) or $425 (iPhone 12) or $375 (iPhone 12 mini) after trade-in of eligible smartphone. Savings comprised of (i) Apple instant trade-in credit at checkout and (ii) Verizon monthly bill credits applied over 24 months (iPhone 13 mini and iPhone 13) or 30 months (iPhone 13 Pro and iPhone 13 Pro Max). Customer must remain in the Verizon Device Payment Program for 24 months (iPhone 12 mini, iPhone 12, iPhone 13 mini, and iPhone 13) or 30 months (iPhone 13 Pro and iPhone 13 Pro Max) to receive the full benefit of the Verizon bill credits. Bill credits may take 1-2 bill cycles to appear. If it takes two cycles for bill credits to appear, you’ll see the credit for the first cycle on your second bill in addition to that month’s credit. Requires purchase and activation of a new iPhone 12 mini, iPhone 12, iPhone 13 mini, iPhone 13, iPhone 13 Pro, or iPhone 13 Pro Max with the Verizon Device Payment Program at 0% APR for 24 months (iPhone 12 mini, iPhone 12, iPhone 13 mini, and iPhone 13) or 30 months (iPhone 13 Pro and iPhone 13 Pro Max), subject to carrier credit qualification, and iPhone availability and limits. Taxes and shipping not included in monthly price. Sales tax may be assessed on full value of new iPhone. Requires eligible unlimited service plan. Requires trade-in of eligible device in eligible condition. Must be at least 18 to trade-in. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason. In-store trade-in requires presentation of a valid, government-issued photo ID (local law may require saving this information). In-store promotion availability subject to local law; speak to a Specialist to learn more. Limited-time offer; subject to change. Additional terms from Apple, Verizon, and Apple’s trade-in partners may apply. Price for iPhone 12 mini, iPhone 12, iPhone 13 mini, and iPhone 13 includes $30 Verizon instant discount. Activation required.

                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    ◊◊ Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    * Pricing for iPhone 13 and iPhone 13 mini includes a $30 carrier instant discount that requires activation with AT&T, T-Mobile, Sprint, or Verizon. Available to qualified customers and requires 24-month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. iPhone activation required with AT&T, T-Mobile, Sprint, or Verizon for purchases made with ACMI at an Apple Store. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. Additional Apple Card Monthly Installments terms are in the Apple Card Customer Agreement(Opens in a new window). Additional iPhone Payments terms are here(Opens in a new window). ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
                    <hr style={{ height: 1 }} />
                </small>
            </div>
        </div >
    );
}

export default Checkoutiphone;
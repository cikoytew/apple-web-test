import React, { useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Box, ChatDots, FilterCircle } from 'react-bootstrap-icons';


function Checkoutipad(props) {

    return (
        <div className='container'>
            <div className='container'>
                <section>
                    <div className="container d-lg-block d-none d-md-none offset-lg-1 bg-white py-2">
                        <div className="row ">
                            <div className="col-lg-auto fs-5 fw-bold">iPad Pro</div>
                            <div className="col-lg-auto position-relative mt-2 start-50">
                                <small>
                                    From $799 or $66.58/mo. for 24 mo.
                                </small>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container d-flex justify-content-center ">
                <div className="d-lg-block d-none d-md-none bg-white py-2">
                    <div className="row ">
                        <div className="col-lg-7">
                            <Card className="text-dark bg-white border border-white sticky-top " style={{ width: 400 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 400, height: 400 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104?wid=545&hei=550&fmt=jpeg&qlt=95&.v=1617067380000' alt="Card image" />
                                <div className="row mt-4">
                                    <div className="col-lg-4">
                                        <Box className='offset-5' size={25} />
                                        <p className='text-center'>
                                            Get free delivery, or pick up available items at an Apple Store
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <FilterCircle className='offset-5' size={25} />
                                        <p className='text-center'>
                                            Free personal engraving
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
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
                                    <Card.Title className='fs-2 fw-bold'>
                                        Buy iPad Pro
                                    </Card.Title>
                                    <Card.Text>
                                        <small>
                                            Fast, free delivery
                                        </small>
                                    </Card.Text>
                                    <Card.Title className='fw-bold'>
                                        <small>
                                            Model
                                        </small>
                                    </Card.Title>

                                    <div className="row border border-2">
                                        <div className="col-lg-6">
                                            <Card.Text>
                                                <small>
                                                    <p className='fw-bold mt-2'>
                                                        11-inch display
                                                        <p className='fw-normal'>
                                                            Liquid Retina display
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
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            &nbsp;&nbsp;&nbsp;&nbsp;From $799
                                                            or $66.58/mo. for 12 mo.
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
                                                        12.9-inch display
                                                        <p className='fw-normal'>
                                                            Liquid Retina XDR display
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
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From $1099
                                                            or $91.58/mo. for 12 mo.
                                                        </small>
                                                    </p>
                                                </small>
                                            </Card.Text>
                                        </div>
                                    </div>

                                    <div className="bg-white timpah">

                                        <Card.Title className='fw-bold'>
                                            <small>
                                                Finish.
                                            </small>
                                        </Card.Title>

                                        <div className="container">
                                            <div className="row ">
                                                <div className="col-lg-6 border border-2">
                                                    <Card.Text className='d-flex justify-content-center mt-2'>
                                                        <small>
                                                            <button className='btn btn-secondary rounded-circle ps-4' ><br /></button>
                                                        </small>
                                                    </Card.Text>
                                                    <Card.Text className='d-flex justify-content-center'>
                                                        <small>
                                                            Space Grey
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
                                        </div>

                                        <Card.Title className='fw-bold pt-4'>
                                            <small>
                                                Storage
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
                                                        From $799
                                                        or $66.58/mo. for 12 mo.
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
                                                        From $899
                                                        or $74.91/mo. for 12 mo
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
                                                        From $1099
                                                        or $91.58/mo. for 12 mo.
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
                                                        From $1499
                                                        or $124.91/mo. for 12 mo.
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-lg-6 border border-2">
                                                <Card.Text className='d-flex justify-content-center mt-2'>
                                                    <small className='fs-5 fw-bold'>
                                                        2TB
                                                    </small>
                                                </Card.Text>
                                                <Card.Text className='text-center'>
                                                    <small>
                                                        From $1899
                                                        or $158.25/mo. for 12 mo.
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>

                                        <Card.Title className='fw-bold pt-4'>
                                            <small>
                                                Connectivity
                                            </small>
                                        </Card.Title>
                                        <div className="row ">
                                            <div className="col-lg-6 border border-2 py-3">
                                                <Card.Text className='d-flex justify-content-center mt-2'>
                                                    <small className='fs-6 fw-bold'>
                                                        Wi-Fi
                                                    </small>
                                                </Card.Text>
                                                <Card.Text className='text-center'>
                                                    <small>
                                                        From $799
                                                        or $66.58/mo. for 12 mo.
                                                    </small>
                                                </Card.Text>
                                            </div>
                                            <div className="col-lg-6 border border-2 py-3">
                                                <Card.Text className='d-flex justify-content-center mt-2'>
                                                    <small className='fs-6 fw-bold'>
                                                        Wi-Fi + Cellular
                                                    </small>
                                                </Card.Text>
                                                <Card.Text className='text-center'>
                                                    <small>
                                                        From $999
                                                        or $83.25/mo. for 12 mo.
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>

                                        <Card.Text className='fs-5 fw-bold'>
                                            <small>
                                                Personalize your device.
                                            </small>
                                        </Card.Text>

                                        <div className="row border border-2">
                                            <div className="col-lg-6">
                                                <Card.Text>
                                                    <small>
                                                        <p className='fw-bold mt-2'>
                                                            Add Engraving
                                                        </p>
                                                    </small>
                                                </Card.Text>
                                            </div>
                                            <div className="col-lg-6">
                                                <Card.Text>
                                                    <small>
                                                        <p className='mt-2'>
                                                            <small>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                                &nbsp;&nbsp;&nbsp;&nbsp;Free
                                                            </small>
                                                        </p>
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>
                                        <div className="row border border-2">
                                            <div className="col-lg-6">
                                                <Card.Text>
                                                    <small>
                                                        <p className='fw-bold mt-2'>
                                                            No Egraving
                                                        </p>
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>


                                        <Card.Text className='fs-5 fw-bold'>
                                            <small>
                                                Apple Pencil and Keyboards
                                            </small>
                                        </Card.Text>

                                        <div className="row border border-2">
                                            <div className="col-lg-6">
                                                <Card.Text>
                                                    <small>
                                                        <p className='fw-bold fs-6 mt-2'>
                                                            Apple Pencil
                                                            <p className='fw-normal text-nowrap'>
                                                                Learn more. And add.
                                                            </p>
                                                        </p>
                                                    </small>
                                                </Card.Text>
                                            </div>
                                        </div>

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
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-202104-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1617323487000" />
                        </div>
                        <div class="col-lg-2">
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-202104-gallery-2?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1617136083000" alt="Card image" />

                        </div>
                        <div class="col-lg-2">
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-202104-gallery-3?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1617402527000" alt="Card image" />

                        </div>
                        <div class="col-lg-2">
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-202104-gallery-4?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1617136090000" alt="Card image" />
                        </div>
                        <div class="col-lg-2">
                            <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-202104-gallery-5?wid=2824&hei=2400&fmt=jpeg&qlt=95&.v=1617323484000" alt="Card image" />

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
                        <img className='d-lg-block d-none d-md-none' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-witb-silver-wifi-202104?wid=180&hei=200&fmt=jpeg&qlt=95&.v=1617303383000" />
                        <span className='ms-5'>
                            iPad Pro
                        </span>
                    </div>
                    <div className='col-lg-3'>
                        <img className='d-lg-block d-none d-md-none ms-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-cable-witb-202203?wid=150&hei=200&fmt=jpeg&qlt=95&.v=1644966142839" />
                        <span className='ms-5'>
                            USB-C to Lightning Cable
                        </span>
                    </div>
                    <div className='col-lg-3'>
                        <img className='d-lg-block d-none d-md-none ms-5' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-witb-adapter-202104?wid=150&hei=200&fmt=jpeg&qlt=95&.v=1617984349000" />
                        20W USB-C Power Adapter
                    </div>
                </div>
            </div>

            <div className="container mt-5 d-lg-block d-none d-md-none">
                <div className="cobtainer d-flex justify-content-center">
                    <p className='fs-2 fw-bold'>
                        There’s always more to explore.
                    </p>
                </div>
                <div className="cobtainer d-flex justify-content-center">
                    <p className='fs-5'>
                        Entertainment. Workouts. Games. All on your iPad Pro.
                    </p>
                </div>
            </div>

            <section>
                <Carousel>
                    <Carousel.Item>
                        <div className="card offset-1 d-lg-block d-none d-md-none border border-white">
                            <div className="row">
                                <div className="col-4 ">
                                    <Card className="text-dark bg-dark" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-services-tv-202104_GEO_US?wid=218&hei=158&fmt=png-alpha&.v=1631744323000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-dark position-relative '>
                                            <Card.Text className="d-flex justify-content-center">
                                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-services-tv-icon-202104?wid=48&hei=48&fmt=png-alpha&.v=1617310042000" />
                                            </Card.Text>
                                            <Card.Title className="d-flex justify-content-center text-light">
                                                Apple TV+
                                            </Card.Title>
                                            <Card.Text className="d-flex justify-content-center text-center text-light">
                                                <small>Watch Apple Original series and films across all your devices.⁵ </small>
                                            </Card.Text>
                                            <Card.Text className="d-flex justify-content-center text-primary">
                                                Learn more
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-dark rounded rounded-3" style={{ width: 320 }}>
                                        <Card.Img className='mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-services-fitness-202104_GEO_US?wid=217&hei=177&fmt=png-alpha&.v=1631143550000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-dark position-relative '>
                                            <Card.Text className="d-flex justify-content-center">
                                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-services-fitness-icon-202104?wid=48&hei=48&fmt=png-alpha&.v=1617310042000" />
                                            </Card.Text>
                                            <Card.Title className="d-flex justify-content-center text-light">
                                                Apple Fitness+
                                            </Card.Title>
                                            <Card.Text className="d-flex justify-content-center text-center text-light">
                                                <small> Discover world-class workouts on your new iPad. Powered by Apple Watch.⁵ </small>
                                            </Card.Text>
                                            <Card.Text className="d-flex justify-content-center text-primary">
                                                Learn more
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card className="text-dark bg-dark" style={{ width: 320 }}>
                                        <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-services-arcade-202104?wid=217&hei=157&fmt=png-alpha&.v=1617240518000" alt="Card image" />
                                        <Card.ImgOverlay className='bg-dark position-relative '>
                                            <Card.Text className="d-flex justify-content-center">
                                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-services-arcade-icon-202104?wid=48&hei=48&fmt=png-alpha&.v=1617310042000" />
                                            </Card.Text>
                                            <Card.Title className="d-flex justify-content-center text-light">
                                                Apple Arcade
                                            </Card.Title>
                                            <Card.Text className="d-flex justify-content-center text-center text-light">
                                                <small>
                                                    Enjoy unlimited, ad-free access to Arcade Originals, all-new games produced by Apple.⁵
                                                </small>
                                            </Card.Text>
                                            <Card.Text className="d-flex justify-content-center text-primary">
                                                Learn more
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </section>

            <div className="container mt-5 d-lg-block d-none d-md-none">
                <div className="cobtainer d-flex justify-content-center">
                    <p className='fs-2 fw-bold'>
                        Compare iPad models
                    </p>
                </div>
                <div className="cobtainer d-flex justify-content-center">
                    <p className='fs-5 text-primary'>
                        <small>
                            See which iPad is right for you
                        </small>
                    </p>
                </div>
            </div>

            <div className="container d-flex justify-content-center">
                <div className="d-lg-block d-none d-md-none bg-white py-2">
                    <div className="row">
                        <div className="col-lg-3">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-compare-202109?wid=210&hei=214&fmt=jpeg&qlt=95&.v=1629904094000' alt="Card image" />
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Img className='rounded mt-4 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-ipadpro-swatch-202105?wid=36&hei=14&fmt=jpeg&qlt=95&.v=1621008227000' alt="Card image" />
                                    <Card.Text className="d-flex justify-content-center">
                                        <small style={{ color: 'white' }} >
                                            New
                                        </small>
                                    </Card.Text>
                                    <Card.Title className="d-flex justify-content-center fw-bold">
                                        iPad Pro
                                    </Card.Title>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            The ultimate iPad experience.
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            From $799
                                        </small>
                                    </Card.Text>


                                    <Card.Title className='fw-bold d-flex justify-content-center my-2'>
                                        12.9" or 11"
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='d-flex justify-content-center my-2 text-center'>
                                            Liquid Retina XDR display <br />
                                            Liquid Retina display <br />
                                            ProMotion technology
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-m1-202105?wid=33&hei=33&fmt=jpeg&qlt=95&.v=1621008224000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            M1 chip
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-ipad-pro-camera-202203?wid=56&hei=56&fmt=jpeg&qlt=95&.v=1645072393675' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            12MP Wide and 10MP
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            Ultra Wide back cameras
                                        </small>
                                    </Card.Text>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fs-4 mt-4 fw-bold">
                                            12MP
                                        </small>
                                        <small className="d-flex justify-content-center text-center">
                                            TrueDepth front camera <br />with Center Stage
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-usb-c-thunderbolt-202203?wid=56&hei=35&fmt=jpeg&qlt=95&.v=1645072393676' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            USB-C connector with support for <br />
                                            Thunderbolt / USB 4
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-5g-202203?wid=56&hei=56&fmt=jpeg&qlt=95&.v=1645072393509' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            5G cellular3
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-pencil-202105?wid=67&hei=6&fmt=jpeg&qlt=95&.v=1621008225000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            Works with<br />
                                            Apple Pencil (2nd generation)
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-magic-keyboard-202105?wid=64&hei=44&fmt=jpeg&qlt=95&.v=1621008224000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            Works with<br />
                                            Magic Keyboard<br />
                                            Smart Keyboard Folio
                                        </small>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-compare-202203?wid=210&hei=214&fmt=jpeg&qlt=95&.v=1645072394055' alt="Card image" />
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Img className='rounded mt-4 offset-3' style={{ width: 150 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-compare-swatches-202203?wid=97&hei=14&fmt=jpeg&qlt=95&.v=1645830321913' alt="Card image" />
                                    <Card.Text className="d-flex justify-content-center">
                                        <small style={{ color: 'red' }} >
                                            New
                                        </small>
                                    </Card.Text>
                                    <Card.Title className="d-flex justify-content-center fw-bold">
                                        iPad Air
                                    </Card.Title>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            Powerful. Colorful. Wonderful.
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            From $599
                                        </small>
                                    </Card.Text>


                                    <Card.Title className='fw-bold d-flex justify-content-center my-2'>
                                        10.9"
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='d-flex mb-5 justify-content-center my-2 text-center'>
                                            Liquid Retina display
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-4 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-m1-202105?wid=33&hei=33&fmt=jpeg&qlt=95&.v=1621008224000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            M1 chip
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-ipad-air-camera-202203?wid=56&hei=56&fmt=jpeg&qlt=95&.v=1645072393544' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            12MP Wide back camera
                                        </small>
                                        <small className="d-flex justify-content-center text-white">
                                            Ultra Wide back cameras
                                        </small>
                                    </Card.Text>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fs-4 mt-4 fw-bold">
                                            12MP
                                        </small>
                                        <small className="d-flex justify-content-center text-center">
                                            TrueDepth front camera <br />with Center Stage
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-usb-c-202203?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1645072393508' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            USB-C connector
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-5g-202203?wid=56&hei=56&fmt=jpeg&qlt=95&.v=1645072393509' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            5G cellular3
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-pencil-202105?wid=67&hei=6&fmt=jpeg&qlt=95&.v=1621008225000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            Works with<br />
                                            Apple Pencil (2nd generation)
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-magic-keyboard-202105?wid=64&hei=44&fmt=jpeg&qlt=95&.v=1621008224000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            Works with<br />
                                            Magic Keyboard<br />
                                            Smart Keyboard Folio
                                        </small>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-202109?wid=210&hei=214&fmt=jpeg&qlt=95&.v=1631826686000' alt="Card image" />
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Img className='rounded mt-4 offset-4' style={{ width: 80 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-ipad-swatch-202105?wid=57&hei=14&fmt=jpeg&qlt=95&.v=1621008227000' alt="Card image" />
                                    <Card.Text className="d-flex justify-content-center">
                                        <small style={{ color: 'white' }} >
                                            New
                                        </small>
                                    </Card.Text>
                                    <Card.Title className="d-flex justify-content-center fw-bold">
                                        iPad
                                    </Card.Title>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            Delightfully capable. Surprisingly affordable.
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            From $329
                                        </small>
                                    </Card.Text>


                                    <Card.Title className='fw-bold d-flex justify-content-center my-2'>
                                        10.2"
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='d-flex mb-5 justify-content-center my-2 text-center'>
                                            Retina display with True Tone
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-4 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-a13-202109?wid=33&hei=33&fmt=jpeg&qlt=95&.v=1629904090000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            A13 Bionic chip
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-ipad-camera-202203?wid=56&hei=56&fmt=jpeg&qlt=95&.v=1645072393679' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            8MP Wide back camera
                                        </small>
                                        <small className="d-flex justify-content-center text-white">
                                            Ultra Wide back cameras
                                        </small>
                                    </Card.Text>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fs-4 mt-4 fw-bold">
                                            12MP
                                        </small>
                                        <small className="d-flex justify-content-center text-center">
                                            Ultra Wide front camera <br />with Center Stage
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-lightning-202203?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1645072393500' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            Lightning connector
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-5g-202203?wid=56&hei=56&fmt=jpeg&qlt=95&.v=1645072393509' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            5G cellular3
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-pencil-202105?wid=67&hei=6&fmt=jpeg&qlt=95&.v=1621008225000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            Works with<br />
                                            Apple Pencil (1nd generation)
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-smart-keyboard-202105?wid=64&hei=44&fmt=jpeg&qlt=95&.v=1621008226000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            Works with<br />
                                            Smart Keyboard
                                        </small>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-compare-202109?wid=210&hei=214&fmt=jpeg&qlt=95&.v=1629904095000' alt="Card image" />
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Img className='rounded mt-4 offset-4' style={{ width: 100 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-ipadmini-swatch-202109?wid=78&hei=14&fmt=jpeg&qlt=95&.v=1629904092000' alt="Card image" />
                                    <Card.Text className="d-flex justify-content-center">
                                        <small style={{ color: 'white' }} >
                                            New
                                        </small>
                                    </Card.Text>
                                    <Card.Title className="d-flex justify-content-center fw-bold">
                                        iPad Mini
                                    </Card.Title>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            Mega Power. Mini sized.
                                        </small>
                                        <small className="d-flex justify-content-center">
                                            From $499
                                        </small>
                                    </Card.Text>


                                    <Card.Title className='fw-bold d-flex justify-content-center my-2'>
                                        8.3"
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='d-flex mb-5 justify-content-center my-2 text-center'>
                                            Liquid Retina display
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-4 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-a15-202109?wid=33&hei=33&fmt=jpeg&qlt=95&.v=1629904093000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            A15 Bionic chip with Neural <br />Engine
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-ipad-mini-camera-202203?wid=56&hei=56&fmt=jpeg&qlt=95&.v=1645072393646' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fw-bold">
                                            12MP Wide back camera
                                        </small>
                                    </Card.Text>
                                    <Card.Text >
                                        <small className="d-flex justify-content-center fs-4 mt-5 fw-bold">
                                            12MP
                                        </small>
                                        <small className="d-flex justify-content-center text-center">
                                            Ultra Wide front camera <br />with Center Stage
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-usb-c-202203?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1645072393508' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            USB-C connector
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-5g-202203?wid=56&hei=56&fmt=jpeg&qlt=95&.v=1645072393509' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center">
                                            5G cellular3
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-pencil-202105?wid=67&hei=6&fmt=jpeg&qlt=95&.v=1621008225000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            Works with<br />
                                            Apple Pencil (2nd generation)
                                        </small>
                                    </Card.Text>
                                    <Card.Img className='rounded mt-3 offset-5' style={{ width: 50 }} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-compare-icon-keyboard-202105?wid=51&hei=44&fmt=jpeg&qlt=95&.v=1621008222000' alt="Card image" />
                                    <Card.Text >
                                        <small className="d-flex justify-content-center text-center">
                                            Works with<br />
                                            Bluetooth keyboards
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
                    <p className='fs-2 fw-bold'>
                        Shopping for your business?
                    </p>
                </div>
                <div className="cobtainer d-flex justify-content-center">
                    <small className='fs-5'>
                        Create a business account to start qualifying for special pricing.
                    </small>
                </div>
                <div className="cobtainer d-flex justify-content-center text-primary">
                    <small className='fs-5'>
                        Sign up now
                    </small>
                </div>
            </div>


            <div className="container">
                <small className='offset-1 lh-1 mt-5 text-secondary d-lg-block d-none d-md-none'>
                    ◊ Apple Card Monthly Installments (ACMI) is a 0% APR payment option available to select at checkout for certain Apple products purchased at Apple Store locations, apple.com(Opens in a new window), the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204(Opens in a new window) for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. If you choose the pay-in-full or one-time-payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement(Opens in a new window) for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    ◊◊ Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.

                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    * Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple, and is subject to credit approval and credit limit. Financing terms vary by product. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings  General  Software Update. Tap Download and Install.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    Available for qualifying applicants in the United States.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>

                    1. Available space is less and varies due to many factors. A standard configuration uses approximately 10GB to 13GB of space (including iPadOS and preinstalled apps) depending on the model and settings. Preinstalled apps use about 4GB, and you can delete these apps and restore them. Storage capacity subject to change based on software version and may vary by device.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>

                    2. Data plan required. 5G is available in select markets and through select carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see apple.com/ipad/cellular.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>

                    3. Testing conducted by Apple in March 2021 using preproduction iPad Pro 11-inch (3rd generation) and iPad Pro 12.9-inch (5th generation) units and software. Testing consisted of full battery discharge while performing each of the following tasks: video playback and Internet browsing using Wi-Fi or cellular data network (cellular models subscribed to LTE and 5G carrier networks). Video content was a repeated 2-hour 23-minute movie purchased from the iTunes Store. Internet over Wi-Fi and cellular data network tests were conducted using dedicated web servers, browsing snapshot versions of 20 popular web pages. All settings were default except: Wi-Fi was associated with a network (except for Internet browsing over cellular data network); the Wi-Fi feature Ask to Join Networks and Auto-Brightness were turned off; Brightness was set to 50%; and WPA2 encryption was enabled. Battery life depends on device settings, usage, network, and many other factors. Battery tests are conducted using specific iPad units; actual results may vary.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>

                    4. Accessories sold separately.

                    Magic Keyboard subject to availability.

                    5. Subscription required for Apple TV+, Apple Fitness+, and Apple Arcade.
                </small>
                <small className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    †† We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.
                    <hr style={{ height: 1 }} />
                </small>
            </div>
        </div >
    );
}

export default Checkoutipad;
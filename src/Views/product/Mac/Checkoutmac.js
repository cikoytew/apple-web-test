import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Apple, Bag, Bookmark, Box, ChatDots } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
function Checkoutmac(props) {

    const [gambar1, setGambar1] = useState('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000');
    const [gambar2, setGambar2] = useState('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000');

    return (
        <div>
            <div className='container'>
                <section>
                    <div className="container d-lg-block d-none d-md-none offset-lg-1 bg-white py-2">
                        <div className="row">
                            <div className="col-lg-auto fs-5 fw-bold">MacBook Air</div>
                            <div className="col-lg-auto position-relative mt-2 start-50">
                                <small>
                                    Overview
                                </small>
                            </div>
                            <div className="col-lg-auto position-relative mt-2 start-50">
                                <small>
                                    macOS
                                </small>
                            </div>
                            <div className="col-lg-auto position-relative mt-2 start-50">
                                <small>
                                    Texh Specs
                                </small>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container-lg-fluid d-lg-block d-none d-md-none bg-secondary bg-opacity-10 py-2">
                <small>
                    <p className='text-center'>
                        Pay for your new Mac over 12 months at 0% APR with Apple Card. Just choose Apple Card Monthly Installments when you check out to apply. <br />
                        <p className='text-primary'>
                            Learn more
                        </p>
                    </p>
                </small>
            </div>
            <div className="container d-lg-block d-none d-md-none">

                <p className='text-center fs-1 fw-bold'>
                    Choose your new MacBook Air <br />and select a finish.
                </p>

                <p className='text-center fs-5 fw-bold'>
                    13-inch MacBook Air
                    <br />
                    <ChatDots />
                </p>
                <p className='text-center'>
                    Have questions about buying a Mac? <br />
                    <p className='text-center text-primary'>
                        Chat with a Mac Specialist.
                    </p>
                </p>
            </div>
            <div className="container d-flex justify-content-center ">
                <div className="d-lg-block d-none d-md-none bg-white py-2">
                    <div className="row ">
                        <div className="col-lg-6">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src={gambar1} alt="Card image" />
                                <div className="row justify-content-center">
                                    <div className="col-3">
                                        <small className='text-nowrap'>
                                            Space Gray
                                        </small>
                                        <button className='btn btn-secondary rounded-circle ps-4 ms-2' onClick={() => setGambar1('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000')} ><br /></button>
                                    </div>
                                    <div className="col-3">
                                        <small className='text-nowrap ms-1'>
                                            Gold
                                        </small>
                                        <button className='btn btn-warning opacity-100 rounded-circle ps-4' onClick={() => setGambar1('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&')} ><br /></button>
                                    </div>
                                    <div className="col-3">
                                        <small className='text-nowrap'>
                                            Silver
                                        </small>
                                        <button className='btn btn-secondary opacity-25 rounded-circle ps-4' onClick={() => setGambar1('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000')}><br /></button>
                                    </div>

                                </div>
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Title className='mt-4'>
                                        Apple M1 Chip with 8-Core CPU and 7-Core GPU
                                        256GB Storage
                                    </Card.Title>
                                    <Card.Text>
                                        <small>
                                            Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine <br />
                                            8GB unified memory <br />
                                            256GB SSD storage¹ <br />
                                            Retina display with True Tone <br />
                                            Magic Keyboard <br />
                                            Touch ID <br />
                                            Force Touch trackpad <br />
                                            Two Thunderbolt / USB 4 ports
                                        </small>
                                    </Card.Text>
                                    <Card.Title className='fw-bold mb-3'>
                                        $999.00
                                    </Card.Title>
                                    <p className='fw-normal'>or</p>
                                    <Card.Title className='fw-bold'>
                                        $83.25/mo. for 12 mo
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='text-primary'>
                                            Learn how to pay monthly at 0% APR when you choose Apple Card Monthly Installments
                                        </small>
                                    </Card.Text>
                                    <Card.Text>
                                        <small>
                                            Apple Trade In <br />
                                            Get credit toward a new Mac when you trade in your eligible computer. Or recycle it for free.
                                        </small>
                                        <p className='text-primary mt-2'>
                                            <small>Get Started</small>
                                        </p>
                                    </Card.Text>
                                    <button className='btn btn-primary container rounded-pill text-light'>
                                        Select
                                    </button>
                                    <Card.Text>
                                        <small className='text-primary'>
                                            <br />
                                            Still deciding? <br />
                                            <Bookmark className='position-absolute mx-3 end-0' size={20} />
                                            Add this item to a list and easily <br />
                                            come back to it later.
                                        </small>
                                    </Card.Text>
                                    <Card.Text>
                                        <div className="row">
                                            <div className="col-sm-auto d-none d-lg-block d-sm-none">
                                                <div className='py-4 px-2 position-static'>
                                                    <Box size={25} />
                                                </div>
                                                <div className='my-5 px-1 position-static'>
                                                    <Bag className='mt-3 position-absolute' size={30} />
                                                    <Apple className='mx-2 mt-4 position-static' />
                                                </div>
                                            </div>
                                            <div className="col-sm-4 d-none d-lg-block d-sm-none">
                                                <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                                                    <div className='start-container'>
                                                        <div className='fw-bold fs-8 mt-4'>
                                                            Ships: <br />
                                                        </div>
                                                        <div className='fs-8 text-nowrap'>
                                                            1–3 business days <br />
                                                            Free Shipping <br />
                                                            <NavLink to='/'>
                                                                <small>
                                                                    Get Delivery Dates
                                                                </small>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5 my-3 d-block d-lg-block d-sm-none ">
                                                    <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                                                        <div className='start-container'>
                                                            <div className='fw-bold fs-8 text-nowrap'>
                                                                Pickup <br />
                                                            </div>
                                                            <div className='fs-8 text-nowrap'>
                                                                <NavLink to='/'>
                                                                    <small>
                                                                        Check Avaliability
                                                                    </small>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Text>

                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="col-lg-6">
                            <Card className="text-dark bg-white border border-white" style={{ width: 320 }}>
                                <Card.Img className='rounded mb-0 mx-auto' style={{ width: 250, height: 249 }} src={gambar2} alt="Card image" />
                                <div className="row justify-content-center">
                                    <div className="col-3">
                                        <small className='text-nowrap'>
                                            Space Gray
                                        </small>
                                        <button className='btn btn-secondary rounded-circle ps-4 ms-2' onClick={() => setGambar2('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000')} ><br /></button>
                                    </div>
                                    <div className="col-3">
                                        <small className='text-nowrap ms-1'>
                                            Gold
                                        </small>
                                        <button className='btn btn-warning opacity-100 rounded-circle ps-4' onClick={() => setGambar2('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&')} ><br /></button>
                                    </div>
                                    <div className="col-3">
                                        <small className='text-nowrap'>
                                            Silver
                                        </small>
                                        <button className='btn btn-secondary opacity-25 rounded-circle ps-4' onClick={() => setGambar2('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000')}><br /></button>
                                    </div>

                                </div>
                                <Card.ImgOverlay className='bg-white position-relative'>
                                    <Card.Title className='mt-4'>
                                        Apple M1 Chip with 8-Core CPU and 8-Core GPU
                                        512GB Storage
                                    </Card.Title>
                                    <Card.Text>
                                        <small>
                                            Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine <br />
                                            8GB unified memory <br />
                                            512GB SSD storage¹ <br />
                                            Retina display with True Tone <br />
                                            Magic Keyboard <br />
                                            Touch ID <br />
                                            Force Touch trackpad <br />
                                            Two Thunderbolt / USB 4 ports
                                        </small>
                                    </Card.Text>
                                    <Card.Title className='fw-bold mb-3'>
                                        $1,249.00
                                    </Card.Title>
                                    <p className='fw-normal'>or</p>
                                    <Card.Title className='fw-bold'>
                                        $104.08/mo. for 12 mo
                                    </Card.Title>
                                    <Card.Text>
                                        <small className='text-primary'>
                                            Learn how to pay monthly at 0% APR when you choose Apple Card Monthly Installments
                                        </small>
                                    </Card.Text>
                                    <Card.Text>
                                        <small>
                                            Apple Trade In <br />
                                            Get credit toward a new Mac when you trade in your eligible computer. Or recycle it for free.
                                        </small>
                                        <p className='text-primary mt-2'>
                                            <small>Get Started</small>
                                        </p>
                                    </Card.Text>
                                    <button className='btn btn-primary container rounded-pill text-light'>
                                        Select
                                    </button>
                                    <Card.Text>
                                        <small className='text-primary'>
                                            <br />
                                            Still deciding? <br />
                                            <Bookmark className='position-absolute mx-3 end-0' size={20} />
                                            Add this item to a list and easily <br />
                                            come back to it later.
                                        </small>
                                    </Card.Text>
                                    <Card.Text>
                                        <div className="row">
                                            <div className="col-sm-auto d-none d-lg-block d-sm-none">
                                                <div className='py-4 px-2 position-static'>
                                                    <Box size={25} />
                                                </div>
                                                <div className='my-5 px-1 position-static'>
                                                    <Bag className='mt-3 position-absolute' size={30} />
                                                    <Apple className='mx-2 mt-4 position-static' />
                                                </div>
                                            </div>
                                            <div className="col-sm-4 d-none d-lg-block d-sm-none">
                                                <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                                                    <div className='start-container'>
                                                        <div className='fw-bold fs-8 mt-4'>
                                                            Ships: <br />
                                                        </div>
                                                        <div className='fs-8 text-nowrap'>
                                                            1–3 business days <br />
                                                            Free Shipping <br />
                                                            <NavLink to='/'>
                                                                <small>
                                                                    Get Delivery Dates
                                                                </small>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5 my-3 d-block d-lg-block d-sm-none ">
                                                    <div style={{ fontFamily: "../fonts/SF-Pro-Display-Semibold.otf" }}>
                                                        <div className='start-container'>
                                                            <div className='fw-bold fs-8 text-nowrap'>
                                                                Pickup <br />
                                                            </div>
                                                            <div className='fs-8 text-nowrap'>
                                                                <NavLink to='/'>
                                                                    <small>
                                                                        Check Avaliability
                                                                    </small>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Text>

                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
            </div >

            <div className="container d-lg-block d-none d-md-none">
                <Card className="text-dark bg-black border border-white" >
                    <Card.Img className='rounded mb-0' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-compare-202203?wid=1070&hei=480&fmt=jpeg&qlt=95&.v=1644980746403" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='text-center fs-3 fw-bold'>
                            Compare Mac models
                        </Card.Title>
                        <Card.Text className='text-center text-primary'>
                            Find the best Mac for you
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div className="container d-flex justify-content-center">
                <img className='d-lg-block d-none d-md-none' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecare-hero-bb-201706?wid=152&hei=152&fmt=jpeg&qlt=95&.v=1629955311000" alt="" />

            </div>
            <div className="container mt-4 d-lg-block d-none d-md-none">
                <div className="cobtainer d-flex justify-content-center ">
                    <p className='fs-3 d-inline fw-bold'>
                        AppleCare+ for Mac
                    </p>
                </div>
                <div className="cobtainer d-flex justify-content-center">
                    <Card className='border border-white' style={{ width: 800 }}>
                        <p className='fs-6'>
                            Every Mac comes with a one-year limited warranty and up to 90 days of complimentary technical support. AppleCare+ for Mac extends your coverage from your AppleCare+ purchase date and adds up to two incidents of accidental damage protection every 12 months, each subject to a service fee of $99 for screen damage or external enclosure damage, or $299 for other accidental damage, plus applicable tax. In addition, you’ll get 24/7 priority access to Apple experts via chat or phone. For complete details, see the terms.
                        </p>
                    </Card>
                </div>
                <div className="cobtainer d-flex justify-content-center text-primary">
                    <p className='fs-5'> Learn more about AppleCare+</p>
                </div>
            </div>

            <div className="container mt-5 d-lg-block d-none d-md-none">
                <div className="cobtainer d-flex justify-content-center">
                    <p className='fs-3 d-inline fw-bold'>
                        Shopping for your business?
                    </p>
                </div>
                <div className="cobtainer d-flex justify-content-center">
                    <p className='fs-5'>
                        Create a business account to start qualifying for special pricing.
                    </p>
                </div>
                <div className="cobtainer d-flex justify-content-center">
                    <p className='fs-5 text-primary'> Sign Up Now</p>
                </div>
            </div>

            <div className="container d-flex justify-content-center d-lg-block d-none d-md-none">
                <div className="row">
                    <div className="col-lg-6 bg-black">
                        <Card className="text-dark bg-black offset-1 mt-5" style={{ width: 400 }} >
                            <Card.ImgOverlay>
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-plus-offer-logo-202008?wid=84&hei=33&fmt=p-jpg&qlt=95&.v=1595609989000" />
                                <Card.Title className='text-center text-white fw-bold'>
                                    Get 3 months of Apple TV+ free when you buy a Mac.†
                                </Card.Title>
                                <Card.Text className='text-center text-primary'>
                                    Try it free <span className='ms-3'>
                                        Learn more
                                    </span>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-plus-offer-202201?wid=632&hei=376&fmt=p-jpg&qlt=95&.v=1643074851000" alt="" />
                    </div>
                </div>

            </div>
            <div className="container offset-1">


                <p className='offset-1 lh-1 mt-5 text-secondary d-lg-block d-none d-md-none'>
                    1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual formatted capacity less.
                </p>
                <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    ◊ Apple Card Monthly Installments (ACMI) is a 0% APR payment option available to select at checkout for certain Apple products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204 for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. If you choose the pay-in-full or one-time-payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile.

                </p>
                <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>

                    * Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple, and is subject to credit approval and credit limit. Financing terms vary by product. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
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
                    ◊◊ Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
                </p>
                <p className='offset-1 lh-1 text-secondary d-lg-block d-none d-md-none'>
                    † $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until canceled. Restrictions and other terms apply.
                    <hr style={{ height: 1 }} />
                </p>
            </div>
        </div >
    );
}

export default Checkoutmac;
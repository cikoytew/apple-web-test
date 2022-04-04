import React, { Component } from 'react';
import { Apple, Gift, Box, Bag as Tas, QuestionCircleFill } from 'react-bootstrap-icons';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import datapro from "../Dataset/datapro";



class Bag extends Component {


    constructor(props) {
        super(props);
    }

    state = {


        shipping: ('Free'),
        tax: ('$-'),


        gambarprodukplus1: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1542406417329',
        namaprodukplus1: ('20W USB-C Power Adapter'),
        hargaprodukplus1: ('$19.00'),


        gambarprodukplus2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1603835871000',
        namaprodukplus2: ('MagSafe Charger'),
        hargaprodukplus2: ('$39.00'),


        gambarprodukplus3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM1L3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1634345223000',
        namaprodukplus3: ('iPhone 13 Pro Max Leather Case with MagSafe - Golden Brown'),
        hargaprodukplus3: ('$59.00'),
    }


    render() {

        return (



            < div className='container' >

                <div className="d-flex justify-content-center p-4 ">


                    <div className="text-center">
                        {datapro.productData.reduce((item, index) => {
                            return (
                                <div className='fs-3 fw-bold'>
                                    Your bag total is $
                                    {(item.price + item.price)}.
                                </div>
                            )
                        })}
                        <div className='fs-6 fw-normal'>
                            Free delivery and free returns.
                        </div> <br />

                        <button className="btn-primary rounded-pill" style={{ width: '50%', height: '30%' }}>
                            Check Out
                        </button>
                    </div>
                </div>

                {datapro.productData.map((item, index) => {
                    return (
                        <div className="container d-flex justify-content-center ">
                            <div className="bg-white py-2">
                                <div className="row ">
                                    <div className="col-3">
                                        <Card className="text-dark bg-white border border-white">
                                            <Card.Img className='rounded mb-0 mx-auto' style={{ width: 150, height: 180 }} src={item.image} alt="Card image" />
                                        </Card>
                                    </div>
                                    <div className="col-9">
                                        <Card className="text-dark bg-white border border-white">
                                            <Card.ImgOverlay className='bg-white position-relative'>

                                                <div className="row">
                                                    <div className="col-4">
                                                        <Card.Title className='fs-5 fw-bold'>
                                                            {item.name}
                                                        </Card.Title>
                                                        <Card.Title className='fs-6 fw-bold'>
                                                            <small>
                                                                Carrier:
                                                            </small>
                                                        </Card.Title>
                                                        <Card.Text className='fw-normal'>
                                                            <small>
                                                                Connect with any carrier after you get your new {item.brand}.
                                                            </small>
                                                        </Card.Text>
                                                    </div>
                                                    <div className="col-4 mt-1">
                                                        <select className="form-select-sm rounded-pill ms-5">
                                                            <option selected value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10+">10+</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-4 mt-1">
                                                        <Card.Title className='d-flex justify-content-end'>
                                                            ${item.price}
                                                        </Card.Title>
                                                        <Card.Title className='text-primary fw-normal d-flex justify-content-end'>
                                                            <small>
                                                                remove
                                                            </small>
                                                        </Card.Title>
                                                    </div>
                                                </div>

                                                <hr style={{ height: 1 }} />

                                                <div className="row">
                                                    <div className="col-1 mt-1">
                                                        <Apple style={{ color: 'red' }} size={20} />
                                                    </div>
                                                    <div className="col-7 mt-1">
                                                        <Card.Text className='fw-normal'>
                                                            <small>
                                                                Add AppleCare+ for iPhone 13 Pro Max for $199.00
                                                                <ul>
                                                                    <li>24/7 priority access to Apple experts</li>
                                                                    <li>Apple-certified repairs using genuine Apple parts</li>
                                                                    <li>Coverage for iPhone, including the battery</li>
                                                                    <li>Accidental damage protection</li>
                                                                </ul>
                                                                <span className='text-primary'>
                                                                    Learn More
                                                                </span>
                                                            </small>
                                                        </Card.Text>
                                                    </div>
                                                    <div className="col-4 mt-1">
                                                        <Card.Title className='text-primary fw-normal d-flex justify-content-end'>
                                                            <small>
                                                                Add
                                                            </small>
                                                        </Card.Title>
                                                    </div>
                                                </div>

                                                <hr style={{ height: 1 }} />

                                                <div className="row">
                                                    <div className="col-1 mt-2">
                                                        <Gift size={20} />
                                                    </div>
                                                    <div className="col-7 mt-1">
                                                        <Card.Text className='fw-bold mt-2'>
                                                            Add a gift message
                                                        </Card.Text>
                                                    </div>
                                                    <div className="col-4 mt-1">
                                                        <Card.Title className='text-primary fw-normal d-flex justify-content-end'>
                                                            <small>
                                                                Add
                                                            </small>
                                                        </Card.Title>
                                                    </div>
                                                </div>

                                                <hr style={{ height: 1 }} />

                                                <div className="row">
                                                    <div className="col-12 mt-2">
                                                        <Card.Text className='fw-bold mt-2'>
                                                            Find out how soon you can get this item.
                                                            <small className='ms-1 text-primary fw-normal'>
                                                                Enter zip code
                                                            </small>
                                                        </Card.Text>

                                                    </div>
                                                    <div className="col-5">
                                                        <Card.Text className='mt-2 d-flex text-nowrap'>
                                                            <div className='px-2 position-static'>
                                                                <Box size={20} />
                                                            </div>
                                                            <small className='mt-1'>
                                                                In stock and ready to ship.
                                                            </small>

                                                        </Card.Text>
                                                    </div>
                                                    <div className="col-6">
                                                        <Card.Text className='fw-normal mt-2 d-flex justify-content-end'>
                                                            <div className='px-2 position-static'>
                                                                <Tas className='mx-2 position-absolute' size={23} />
                                                                <Apple className='ms-3 position-relative' size={10} />
                                                            </div>
                                                            <small className='mt-1 ms-1'>
                                                                In stock and ready to ship.
                                                            </small>
                                                        </Card.Text>
                                                    </div>
                                                </div>

                                                <hr style={{ height: 1 }} />

                                                <div className="row">
                                                    <div className="col-1 mt-1 d-flex align-items-end mb-1">
                                                        <QuestionCircleFill className="ms-4" />
                                                    </div>
                                                    <div className="col-7 mt-1">
                                                        <Card.Text>
                                                            <div className='fw-normal'>
                                                                Subtotal
                                                            </div>
                                                            <div className='fw-normal'>
                                                                Shipping
                                                            </div>
                                                            <div className='fw-normal'>
                                                                Estimated tax for:
                                                                <small className='ms-1 text-primary fw-normal'>
                                                                    Enter zip code
                                                                </small>
                                                            </div>

                                                        </Card.Text>

                                                    </div>
                                                    <div className="col-4 mt-1">
                                                        <Card.Text className='fw-normal'>
                                                            <div className='fw-normal d-flex justify-content-end'>
                                                                ${item.price}
                                                            </div>
                                                            <div className='fw-normal d-flex justify-content-end'>
                                                                {this.state.shipping}
                                                            </div>
                                                            <div className='fw-normal d-flex justify-content-end'>
                                                                {this.state.tax}
                                                            </div>
                                                        </Card.Text>
                                                    </div>
                                                </div>

                                                <hr style={{ height: 1 }} />

                                                <div className="row">
                                                    <div className="col-7 mt-1">
                                                        <Card.Text>
                                                            <Card.Text className='fw-bold mt-2 fs-5'>
                                                                Total
                                                            </Card.Text>
                                                        </Card.Text>

                                                    </div>
                                                    <div className="col-5 mt-1">
                                                        <Card.Text className='fw-normal'>
                                                            <div className='fw-bold fs-5 d-flex justify-content-end'>
                                                                ${item.price}
                                                            </div>
                                                            <div className='fw-normal d-flex justify-content-end'>
                                                                <small className='text-primary'>
                                                                    Get Daily Cash with Apple Card
                                                                </small>
                                                            </div>
                                                        </Card.Text>

                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end pt-4">
                                                    <button className="btn-primary rounded-pill" style={{ width: '30%', height: 50 }}>
                                                        Check Out
                                                    </button>
                                                </div>


                                            </Card.ImgOverlay>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div >

                    )
                })}


                <hr style={{ height: 1 }} />
                <div className='d-flex justify-content-lg-start offset-lg-1'>
                    <p className="fs-8 mt-2">More ways to shop: Find an Apple Store or other retailer near you. Or call 1‑800‑MY‑APPLE.</p>
                </div>
                <hr style={{ height: 1 }} />


                <div className='fs-3 fw-bold d-flex justify-content-center'>
                    A few recommendations.
                </div>
                <div className="card offset-1 border border-white" >
                    <div className="row">
                        <div className="col-4">
                            <Link to='macbook-air' style={{ textDecoration: 'none' }}>
                                <Card className="text-dark bg-white" style={{ width: '100%', height: '100%' }}>
                                    <Card.Img className='rounded mb-0 mx-auto' style={{ width: '100%', height: '100%' }} src={this.state.gambarprodukplus1} alt="Card image" />
                                    <Card.ImgOverlay className='bg-white position-relative'>
                                        <Card.Title>
                                            {this.state.namaprodukplus1}
                                        </Card.Title>
                                        <Card.Text>
                                            <small>
                                                {this.state.hargaprodukplus1}
                                            </small>
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                    <div className=' d-flex justify-content-center my-3'>
                                        <Link to='macbook-air'>
                                            <button className='btn btn-primary rounded' style={{ width: '100%', height: '100%' }}>
                                                Add to Bag
                                            </button>
                                        </Link>
                                    </div>
                                </Card>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to='macbook-air' style={{ textDecoration: 'none' }}>
                                <Card className="text-dark bg-white" style={{ width: '100%', height: '100%' }}>
                                    <Card.Img className='rounded mb-0 mx-auto' style={{ width: '100%', height: '100%' }} src={this.state.gambarprodukplus2} alt="Card image" />
                                    <Card.ImgOverlay className='bg-white position-relative'>
                                        <Card.Title>
                                            {this.state.namaprodukplus2}
                                        </Card.Title>
                                        <Card.Text>
                                            <small>
                                                {this.state.hargaprodukplus2}
                                            </small>
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                    <div className=' d-flex justify-content-center '>
                                        <Link to='macbook-air'>
                                            <button className='btn btn-primary rounded' style={{ width: '100%', height: '100%' }}>
                                                Add to Bag
                                            </button>
                                        </Link>
                                    </div>
                                </Card>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to='macbook-air' style={{ textDecoration: 'none' }}>
                                <Card className="text-dark bg-white" style={{ width: '100%', height: '100%' }}>
                                    <Card.Img className='rounded mb-0 mx-auto' style={{ width: '100%', height: '100%' }} src={this.state.gambarprodukplus3} alt="Card image" />
                                    <Card.ImgOverlay className='bg-white position-relative'>
                                        <Card.Title>
                                            {this.state.namaprodukplus3}
                                        </Card.Title>
                                        <Card.Text>
                                            <small>
                                                {this.state.hargaprodukplus3}
                                            </small>
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                    <div className=' d-flex justify-content-center'>
                                        <Link to='macbook-air'>
                                            <button className='btn btn-primary rounded' style={{ width: '100%', height: '100%' }}>
                                                Add to Bag
                                            </button>
                                        </Link>
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='my-3 text-primary d-flex justify-content-center'>
                    Show more products
                </div>

                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <Card className="offset-1 text-center" style={{ width: 400 }} >
                                <Card.ImgOverlay>
                                    <Card.Title className='display-5 fw-bold mt-5'>
                                        New Arrivals
                                    </Card.Title>
                                    <Card.Text className='text-secondary fw-bold'>
                                        Check out the latest accessories.
                                    </Card.Text>
                                    <Card.Text className='text-primary fw-bold'>
                                        <span> Shop</span>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <img className='bg-secondary' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-new-arrivals-checkout-201804?wid=980&hei=400&fmt=jpeg&qlt=95&.v=1523551959954" alt="" />
                        </div>
                    </div>

                </div>

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

            </ div>
        );
    }
}

export default Bag;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Apple } from 'react-bootstrap-icons';

function Footer(props) {
    return (
        <footer className="bg-white text-dark">
            <div className="container">
                <div className="justify-content-start d-flex offset-lg-1">
                    <NavLink className="d-block d-lg-block d-none" to="/">
                        <Apple color='black' size={18} />
                    </NavLink>
                    <div className="col-lg-2 pt-1 ms-3">
                        <div className='d-block d-lg-block d-none'>
                            Apple Store Online
                        </div>
                    </div>
                </div>

                <section className="row justify-content-lg-center py-4">

                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" exact aria-expanded="true" aria-controls="collapseOne">
                                        Shop and Learn
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <small>
                                            <div className="fs-8">Mac</div>
                                            <div className="fs-8">iPad</div>
                                            <div className="fs-8">Iphone</div>
                                            <div className="fs-8">Apple Watch</div>
                                            <div className="fs-8">TV & Home</div>
                                            <div className="fs-8">Music</div>
                                            <div className="fs-8">iTunes</div>
                                            <div className="fs-8">HomePod</div>
                                            <div className="fs-8">Ipod Touch</div>
                                            <div className="fs-8">Apple Card</div>
                                            <div className="fs-8">Accessories</div>
                                            <div className="fs-8">Gift Cards</div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 d-none d-lg-block">
                        <small>
                            <div className="fw-bold fs-6">Shop and Learn</div>
                            <div className="fs-8">Mac</div>
                            <div className="fs-8">iPad</div>
                            <div className="fs-8">Iphone</div>
                            <div className="fs-8">Apple Watch</div>
                            <div className="fs-8">TV & Home</div>
                            <div className="fs-8">Music</div>
                            <div className="fs-8">iTunes</div>
                            <div className="fs-8">HomePod</div>
                            <div className="fs-8">Ipod Touch</div>
                            <div className="fs-8">Apple Card</div>
                            <div className="fs-8">Accessories</div>
                            <div className="fs-8">Gift Cards</div>
                        </small>
                    </div>

                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Apple Store
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <small>
                                            <div className="fs-8">Find a Store</div>
                                            <div className="fs-8">Shop Online</div>
                                            <div className="fs-8">Genius Bar</div>
                                            <div className="fs-8">Today at Apple</div>
                                            <div className="fs-8">Youth Programs</div>
                                            <div className="fs-8">Apple Store App</div>
                                            <div className="fs-8">Refurbished and Clearance</div>
                                            <div className="fs-8">Financing</div>
                                            <div className="fs-8">Apple Trade in</div>
                                            <div className="fs-8">Order Status</div>
                                            <div className="fs-8">Shopping Help</div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 d-none d-lg-block">
                        <small>
                            <div className="fw-bold fs-6">Apple Store</div>
                            <div className="fs-8">Find a Store</div>
                            <div className="fs-8">Shop Online</div>
                            <div className="fs-8">Genius Bar</div>
                            <div className="fs-8">Today at Apple</div>
                            <div className="fs-8">Youth Programs</div>
                            <div className="fs-8">Apple Store App</div>
                            <div className="fs-8">Refurbished and Clearance</div>
                            <div className="fs-8">Financing</div>
                            <div className="fs-8">Apple Trade in</div>
                            <div className="fs-8">Order Status</div>
                            <div className="fs-8">Shopping Help</div>
                        </small>
                    </div>

                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        For Education
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <small>
                                            <div className="fs-8">Apple and Education</div>
                                            <div className="fs-8">Shop for College</div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFourth">
                                    <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth">
                                        For Business
                                    </button>
                                </h2>
                                <div id="collapseFourth" className="accordion-collapse collapse show" aria-labelledby="headingFourth" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <small>
                                            <div className="fs-8">Apple And Business</div>
                                            <div className="fs-8">Shop for Business</div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Government
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <small>
                                            <div className="fs-8">Shop for Government</div>
                                            <div className="fs-8">Shop for Veterans & Military</div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 d-none d-lg-block">
                        <small>
                            <div className="fw-bold fs-6">For Education</div>
                            <div className="fs-8">Apple and Education</div>
                            <div className="fs-8">Shop for College</div><br />
                            <div className="fw-bold fs-6">For Business</div>
                            <div className="fs-8">Apple And Business</div>
                            <div className="fs-8">Shop for Business</div><br />
                            <div className="fw-bold fs-6">Government</div>
                            <div className="fs-8">Shop for Government</div>
                            <div className="fs-8">Shop for Veterans & Military</div>
                        </small>
                    </div>


                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        For Healthcare
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <small>
                                            <div className="fs-8">Apple in Healthcare</div>
                                            <div className="fs-8">Health on Apple Watch</div>
                                            <div className="fs-8">Health Records on iPhone</div><br />
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Apple Values
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <small>
                                            <div className="fs-8">Accessibility</div>
                                            <div className="fs-8">Education</div>
                                            <div className="fs-8">Environment</div>
                                            <div className="fs-8">Inclusion and Diversity</div>
                                            <div className="fs-8">Privacy</div>
                                            <div className="fs-8">Supplier Responsibility</div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-2 d-none d-lg-block">
                        <small>
                            <div className="fw-bold fs-6">For Healthcare</div>
                            <div className="fs-8">Apple in Healthcare</div>
                            <div className="fs-8">Health on Apple Watch</div>
                            <div className="fs-8">Health Records on iPhone</div><br />
                            <div className="fw-bold fs-6">Apple Values</div>
                            <div className="fs-8">Accessibility</div>
                            <div className="fs-8">Education</div>
                            <div className="fs-8">Environment</div>
                            <div className="fs-8">Inclusion and Diversity</div>
                            <div className="fs-8">Privacy</div>
                            <div className="fs-8">Supplier Responsibility</div>
                        </small>
                    </div>


                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Account
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <small>
                                            <div className="fs-8">Manage Your Apple ID</div>
                                            <div className="fs-8">Apple Store Account</div>
                                            <div className="fs-8">iCloud.com</div> <br />
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        About Apple
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <small>
                                            <div className="fs-8">Newsroom</div>
                                            <div className="fs-8">Apple Leadership</div>
                                            <div className="fs-8">Job Opportunities</div>
                                            <div className="fs-8">Investors</div>
                                            <div className="fs-8">Ethics & Compliance</div>
                                            <div className="fs-8">Events</div>
                                            <div className="fs-8">Accessories</div>
                                            <div className="fs-8">Contact Apple</div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 d-none d-lg-block">
                        <small>
                            <div className="fw-bold fs-6">Account</div>
                            <div className="fs-8">Manage Your Apple ID</div>
                            <div className="fs-8">Apple Store Account</div>
                            <div className="fs-8">iCloud.com</div> <br />
                            <div className="fw-bold fs-6">About Apple</div>
                            <div className="fs-8">Newsroom</div>
                            <div className="fs-8">Apple Leadership</div>
                            <div className="fs-8">Job Opportunities</div>
                            <div className="fs-8">Investors</div>
                            <div className="fs-8">Ethics & Compliance</div>
                            <div className="fs-8">Events</div>
                            <div className="fs-8">Accessories</div>
                            <div className="fs-8">Contact Apple</div>
                        </small>
                    </div>
                </section>
            </div >

            <section>
                <div className='container'>
                    <div className="row">
                        <div className='d-flex justify-content-lg-start offset-lg-1'>
                            <p className="fs-8">More ways to shop: Find an Apple Store or other retailer near you. Or call 1‑800‑MY‑APPLE.</p>
                        </div>
                        <hr style={{ height: 3 }} />
                    </div>
                    <small>
                        <div className="fs-8 offset-lg-1 d-inline-flex">
                            Copyright © 2022 Apple Inc. All rights reserved.
                            <div className="row">
                                <NavLink to="/" className="col-md-auto text-dark ms-3">
                                    Privacy Policy
                                </NavLink>
                                <NavLink to="/" className="col-md-auto text-dark">
                                    Terms of Use
                                </NavLink>
                                <NavLink to="/" className="col-md-auto text-dark">
                                    Sales and Refunds
                                </NavLink>
                                <NavLink to="/" className="col-md-auto text-dark">
                                    Legal
                                </NavLink>
                                <NavLink to="/" className="col-md-auto text-dark">
                                    Site Map
                                </NavLink>
                            </div>
                            <NavLink to="/" className="text-dark ms-5">
                                United States
                            </NavLink>
                        </div>
                    </small>
                </div>
            </section>

        </footer >
    );
}

export default Footer;
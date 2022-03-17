import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="bg-light text-dark">
            <div className="container-xl">
                <div className="d-flex justify-content-lg-start offset-lg-1">
                    <div className="col-lg-1">
                        <NavLink className="d-block d-lg-block d-none" to="/">
                            <img className='photo' src='../img/apple-logo.png' width={20} height={20} alt='Apple' />
                        </NavLink>
                    </div>
                    <div className="col-lg-2">
                        <div className='d-block d-lg-block d-none'>
                            Apple Store Online
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className='d-block d-lg-block d-none'>
                            Shop Mac
                        </div>
                    </div>
                </div>


                <section className="row justify-content-lg-center py-4">

                    <div className="col-lg-2 d-lg-none d-sm-block">
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" exact aria-expanded="true" aria-controls="collapseOne">
                                        Shop and Learn
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                    <div class="accordion-body">
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

                    <div className="col-lg-2 d-sm-none d-lg-block">
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
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Apple Store
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                    <div class="accordion-body">
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

                    <div className="col-lg-2 d-sm-none d-lg-block">
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
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        For Education
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                    <div class="accordion-body">
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
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFourth">
                                    <button class="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth">
                                        For Business
                                    </button>
                                </h2>
                                <div id="collapseFourth" class="accordion-collapse collapse show" aria-labelledby="headingFourth" data-bs-parent="#accordion">
                                    <div class="accordion-body">
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
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Government
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordion">
                                    <div class="accordion-body">
                                        <small>
                                            <div className="fs-8">Shop for Government</div>
                                            <div className="fs-8">Shop for Veterans & Military</div>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 d-sm-none d-lg-block">
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
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSix">
                                    <button class="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        For Healthcare
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordion">
                                    <div class="accordion-body">
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
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSeven">
                                    <button class="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Apple Values
                                    </button>
                                </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordion">
                                    <div class="accordion-body">
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


                    <div className="col-lg-2 d-sm-none d-lg-block">
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
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingEight">
                                    <button class="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Account
                                    </button>
                                </h2>
                                <div id="collapseEight" class="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordion">
                                    <div class="accordion-body">
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
                        <div class="accordion" id="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingNine">
                                    <button class="accordion-button fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        About Apple
                                    </button>
                                </h2>
                                <div id="collapseNine" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                    <div class="accordion-body">
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

                    <div className="col-lg-2 d-sm-none d-lg-block">
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
        </footer >
    );
}

export default Footer;
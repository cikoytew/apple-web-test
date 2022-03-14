import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bag, Search } from 'react-bootstrap-icons';

function Navbar({ children }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="justify-content-around container-fluid">


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-nav">
                        <NavLink className="nav-item p-1 me-3" to="/">
                            <img className='photo' src='../img/apple-logo.png' width={20} height={20} alt='Apple' />
                        </NavLink>
                        <li className="nav-item me-3 d-lg-none">
                            <NavLink className="nav-link" to="/about">
                                <Bag />
                            </NavLink>
                        </li>
                        <div className="navbar-collapse collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <NavLink exact className="nav-link" to="/Store">Store</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/Mac">Mac</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/iPad">iPad</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/iPhone">iPhone</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/Watch">Watch</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/AirPods">AirPods</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/Tv_Home">TV & Home</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/Services">Only on Apple</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/Accsessoris">Accessories</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/Support">Support</NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink className="nav-link" to="/Search">
                                        <Search />
                                    </NavLink>
                                </li>
                                <li className="nav-item me-3 d-block">
                                    <NavLink className="nav-link" to="/Bag">
                                        <Bag />
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="py-4">
                {children}
            </div>

        </div>
    );
}

export default Navbar;
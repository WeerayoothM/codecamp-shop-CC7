import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/userContext'


function Navbar() {
    const { user, isLogin, setIsLogin, setUser } = useContext(UserContext)
    console.log(user, 'ieie')
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/home">CodeCamp Shop</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto text-center">

                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shopping">Shopping</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                            {!isLogin && <><li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li></>}
                            {isLogin &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">{user}</Link></li>

                            }

                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar

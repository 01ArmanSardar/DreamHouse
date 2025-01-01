import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import './Header.css'

const Header = () => {
    const { user, Logout } = useContext(AuthContext)

    const HandelLogout = () => {
        Logout()
            .then(console.log('logOut SuccesFully'))
            .catch(err => { console.log(err.message) })
    }
    const Links = <>
        <li><NavLink  to='/' >Home</NavLink></li>
        <li><NavLink to='/Register'>Register</NavLink></li>
        <li><NavLink to='/login'>login</NavLink></li>
        {
            user?<li><NavLink to='/user'>Profile</NavLink></li>:''
        }



    </>

    return (
        <div className="navbar bg-lime-400">
            <div  className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul id="Navbar"
                        tabIndex={0}
                        // style={{position:"relative"}}
                        className="NavbarStart menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost  lg:text-xl md:text-xl">DreamHouse</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><strong className=" max-[426px]:hidden">{user.email}</strong> <a onClick={HandelLogout} className="btn"> Logout</a></>  : <Link to={'/login'} className="btn ">Login</Link>
                }

            </div>

        </div>
    );
};

export default Header;
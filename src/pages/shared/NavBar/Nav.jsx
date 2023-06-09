import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../provider/AuthProvider';



const Nav = () => {

    const {logOut, user}= useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            localStorage.removeItem('car-access-token');
        })
        .catch(error =>{
            alert(error.message)
        })
    }
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li >
            <Link to={``}>ABOUT</Link>
        </li>
        <li><Link to={``}>Contact</Link></li>
        {
            user?.email?<><li><Link to="/booking">Booking</Link></li><li><Link onClick={handleLogOut}>Log Out</Link></li></> : <li><Link to={`http://localhost:5173/login`}>Sign In</Link></li>
        }
        </>
        

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to={`/`}><img src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-secondary">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
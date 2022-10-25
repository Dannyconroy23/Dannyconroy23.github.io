import { Link, Outlet } from "react-router-dom";
import image from "./Pictures/logo.png";


function Navbar(){
    return(
        <>
        <nav className="navBar">
            <img alt="logo" className="logo" src={image}></img>
            <Link className="navBtn" to="/home">Home</Link>
            <Link className="navBtn" to="/about">About</Link>
            <Link className="navBtn" to="/blogs">Blogs</Link>
            <Link className="navBtn" to="/links">Links</Link>
        </nav>
        <Outlet></Outlet>
        </>
    )
}

export default Navbar;
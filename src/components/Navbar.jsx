import bag from "../assets/image.jpg"; 
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <span>TetkaMoney</span>
            <img src={bag} alt="logo"/>
        </div>
        <div className="right">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Sign In</li>
                <li>Sign out</li>
            </ul>
        </div>      
    </div>
  )
}

export default Navbar

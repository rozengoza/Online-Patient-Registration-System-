import Image from 'next/image'
import Logo from '../../public/logo.png'

export default function Header() {
  return (
   <header>
    <div className="container-header">
       <nav>
        <div className="logo">
           <a href='/'><Image src={Logo} alt="Picture of the author"/></a>
        </div>
        <ul className="nav-menus">
            <li><a href="/login">About Us</a></li>
            <li><a href="/login">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Signup</a></li>
        </ul>
       </nav>
    </div>
        
    </header>
    
  )
}
import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  };

  useEffect(()=>{
    window.addEventListener("scroll", isActive);

    return ()=>{
      window.removeEventListener("scroll", isActive);
    };
  },[]);

  const currentUser = {
    id: 1,
    username: "Thang",
    isSeller:true,

  }


  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                  <span className='text'>Fiver</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiver Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                  <div className="user" onClick={()=>setOpen(!open)}>
                    <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8e087a7ce20a2fd70c6fed8b357d3e76~c5_720x720.jpeg?x-expires=1681030800&x-signature=irnM1B6JjK4wcf4jxxoI9Ds%2FpLs%3D" alt="" />
                    <span>{currentUser?.username}</span>
                    {open && <div className="options">
                      {
                        currentUser?.isSeller && (
                          <>
                          <Link className='link' to="/mygigs">Gigs</Link>
                          <Link className='link' to="/add">Add New Gig</Link>
                          </>
                        )
                      }
                      <Link className='link' to="/orders">Orders</Link>
                      <Link className='link' to="/messages">Messages</Link>
                      <Link className='link' to="/">Logout</Link>
                    </div>}
                  </div>
                )}
            </div>
        </div>
        {(active || pathname !=="/") && 
          <>
            <hr />
            <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
            </div>
          </>
        }
    </div>
  )
}

export default Navbar
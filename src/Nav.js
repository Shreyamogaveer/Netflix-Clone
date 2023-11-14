import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);

        });
        return () => {
            window.removeEventListener("scroll", () => {} );
        };

    }, []);


  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/4/42/Dfnefr.png"
        alt='Netflox logo'
        />
        <img
        className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt='Avatar'
        />
      
    </div>
  )
}

export default Nav

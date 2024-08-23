import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ authenticate, setAuthenticate}) => {
    let [width, setWidth] = useState(0);
    const menuList = ['Women', 'Men', 'Kids'];
    const navigate = useNavigate();
    const goToLogin=()=>{
        navigate("/login")
    }
    const search = (event) => {
        if (event.key === "Enter") {
            // console.log("we click this key", event.key);
            let keyword = event.target.value //event 안에 있는 value 를 가져올 수 있음

            //url을 바꿔준다
            navigate(`/?q=${keyword}`);
        }
    }
    const openMenu = () => setWidth(250); 
    const closeMenu = () => setWidth(0);
  return (
    <div>
        <div className="side-menu" style={{ width: `${width}px` }}>
                <button className="closebtn" onClick={closeMenu}>
                    &times;
                </button>
                <div className="side-menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index} onClick={() => navigate(`/${menu.toLowerCase()}`)}>
                            {menu}
                        </button>
                    ))}
                </div>
        </div>
        <div className='header-actions'>
            <div className="burger-menu hide">
            <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
            </div>
            <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
                {authenticate ? (
                    <div onClick={() => setAuthenticate(false)}>
                        <span style={{ cursor: "pointer" }}>로그아웃</span>
                    </div>
                    ) : (
                    <div onClick={() => navigate("/login")}>
                        <span style={{ cursor: "pointer" }}>로그인</span>
                    </div>
                    )}
            </div>

            <div class="group">
                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search" type="search" onKeyPress={(event) => search(event)} class="input"></input>
            </div>

        </div>
        <div className="menu-area">
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Gentle_monster_logo.png"></img>
            </Link>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar
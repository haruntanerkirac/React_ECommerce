import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";


function Header() {
    const [theme, setTheme] = useState(true);

    useEffect(() => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
        else {
            root.style.backgroundColor = "black";
            root.style.color = "white";
        }
    }, [theme])


    const changeTheme = () => {
        setTheme(!theme);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text' style={{ color: theme ? 'darkblue' : 'white' }}>Shoply</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' placeholder='Ara' type='text' />
                <div>
                    {theme ? <IoIosMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}

                    <CiShoppingBasket className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Header
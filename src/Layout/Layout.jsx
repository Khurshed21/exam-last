

import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Switcher from '../Components/Switcher'

import nisa from "../img/nisa.png";
import soc from "../img/soc.png";



import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const Layout = () => {
  let [age, setAge] = useState(localStorage.getItem('i18nextLng'));
  let { t, i18n } = useTranslation();
  
  console.log(age);
  function handleClick(event) {
    setAge(event.target.value)
    i18n.changeLanguage(event.target.value)
  }


  return (
    <div>
      <nav className="h-[100px] bg-[#1E1E1E] text-[20px] font-[500] text-[white] dark:bg-white dark:text-[black] flex flex-wrap justify-around items-center">
          
        <Switcher></Switcher>
          <img src={nisa} alt="" />
        <Link className='xl:hidden' to={"/Home"}>{t("Home")}</Link>
      <Link className='xl:hidden' to={"/Todo"}>{t("Home1")}</Link>
      <Link className='xl:hidden' to={"/Todo"}> {t("Home2")}</Link>
      <Link className='xl:hidden' to={"/Todo"}>{t("Home3")}</Link>
      <Link className='xl:hidden' to={"/Todo"}>{t("Home4")}</Link>
      
          <li>Login</li>
          <button className='w-[150px] h-[50px] rounded-3xl bg-[#FF3C78]'>Buy Nesa</button>
          <select name="" id="" className='bg-black  dark:bg-white dark:text-[black]' onChange={handleClick}>
            <option value="en">Eng</option>
            <option value="ru">Ru</option>
          </select>
        
      </nav>

      <Outlet/>

      <footer className='bg-[#1E1E1E] text-[white] flex flex-wrap justify-around items-center pt-[100px]'> 
        <ul className='w-[300px]'>
          <li className='text-[white] text-[30px] '>{t("build")}</li><br />
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus euismod fusce pulvinar amet. Sollicitudin nullam mauris tellus accumsan, phasellus. Ut ac consequat arcu non aliquam. </li> <br />
          <li><img src={soc} alt="" /></li>
        </ul>

        <ul className='text-[white]'>
          <li className='text-[20px]'>Overview</li> <br />
          <li>Home</li> <br />
          <li>Blog</li> <br />
          <li>Blog post</li> <br />
          <li>Team Mamber</li> 
        </ul>

        <ul className='text-[white]'>
          <li className='text-[20px]'>Pages</li> <br />
          <li>Contact</li> <br />
          <li>Customer Story </li> <br />
          <li>Login</li> <br />
          <li>Register</li> <br />
          <li>Style Guide</li> <br />
          <li>Changelog</li> <br />
          <li>Licance</li> <br />
          <li>404</li> <br />
          <li>Password</li> 
        </ul>

        <ul className='text-[white]'>
          <li className='text-[20px]'>Connect:</li> <br />
          <li>+001 234 567 89</li> <br />
          <li>hellow@nesa.com</li> 
        </ul>

      </footer>
    </div>
  )
}

export default Layout

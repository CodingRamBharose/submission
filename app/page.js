"use client"
import React, { useState } from 'react'
import SideBar from './components/SideBar.jsx'
import Main from './components/Main.jsx'

const page = () => {
  const [activeLink, setActiveLink] = useState("My Projects");

  const handleLinkClick = (event) => {
    const content = event.currentTarget.innerText;
    setActiveLink(content)
  };
  

  return (
    <>
      <Main activeLink = {activeLink}/>
      <SideBar activeLink = {activeLink} handleLinkClick = {handleLinkClick}/>
    </>
  )
}

export default page


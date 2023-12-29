"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const sidebar = ({activeLink,handleLinkClick}) => {


  return (
    <>
      <div className="sidebar">
        <div className="top">
          <div className="logo">
            <div id='rec1'></div>
            <div id='rec2'></div>
            <div id='rec3'></div>
            <h3>ecleo</h3>
          </div>
          <hr />
        <div className='items'>
          <Link href="#" className={`sidebar-link ${activeLink === 'My Projects' ? 'active' : ''}`} onClick={handleLinkClick}>My Projects</Link>
        </div>
        <div className="items">
          <Link href="#" className={`sidebar-link ${activeLink === 'Sample Projects' ? 'active' : ''}`} onClick={handleLinkClick}>Sample Projects</Link>
        </div>
        <hr />
        <div className="items">
          <Link href="#" className={`sidebar-link ${activeLink === 'Apps' ? 'active' : ''}`} onClick={handleLinkClick}>Apps</Link>
        </div>
        <div className="items">
          <Link href="#" className={`sidebar-link ${activeLink === 'Intro To Necleo' ? 'active' : ''}`} onClick={handleLinkClick}>Intro To Necleo</Link>
        </div>
      </div>
      <div className="bottom">
        <div className="items">
          <Link href="#" className={`sidebar-link ${activeLink === 'Help & Support' ? 'active' : ''}`} onClick={handleLinkClick}>Help & Support</Link>
        </div>
        <div className="items">
          <Link href="#" className={`sidebar-link ${activeLink === 'Feedback' ? 'active' : ''}`} onClick={handleLinkClick}>Feedback</Link>
        </div>
        <div className="items">
          <Link href="#" className={`sidebar-link ${activeLink === 'Collapse' ? 'active' : ''}`} onClick={handleLinkClick}>Collapse</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default sidebar

"use client"
import React, { useState, useEffect } from 'react';

export default function WebRing() {


  return (
    <div className="width: fit-content; border: 2px outset; text-align:center">
        <p className="about-item-title text-center flex flex-col items-center gap-4">
            Kiki's Webring
        </p>
        <div className='flex justify-between items-center gap-8'>
            <a href="https://webri.ng/webring/kiki/previous?via=https%3A%2F%2Fwww.filliplampe.com%2F">
                <img src='./icons/arrow-contrast.png' alt='prev website' loading='lazy'
                className={`webring-btn webring-btn-left`}/>
            </a>
            <a href="https://webri.ng/webring/kiki/random?via=https%3A%2F%2Fwww.filliplampe.com%2F">
                <img src='./icons/kiki-icon.png' alt='random website' loading='lazy'
                className={`webring-btn webring-btn-mid`}/>
            </a>
            <a href="https://webri.ng/webring/kiki/next?via=https%3A%2F%2Fwww.filliplampe.com%2F">
                <img src='./icons/arrow-contrast.png' alt='next website' loading='lazy' 
                className={`webring-btn webring-btn-right`}/>
            </a>
        </div>
    </div>    
  );
}
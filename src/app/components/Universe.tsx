"use client";
import { useEffect } from 'react';
import { dark } from './background';

export default function Universe() {
    useEffect(() => {
        dark();
    }, []);
    return (
        <canvas className="universe" id='universe'/>
    )    
}
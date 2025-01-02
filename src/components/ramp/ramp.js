"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Use this instead of useRouter
const PUB_ID = 1025447;
const WEBSITE_ID = 75402;
const Ramp = () => {
   const [rampComponentLoaded, setRampComponentLoaded] = useState(false);
   const pathname = usePathname(); 
   useEffect(() => {
       if (!PUB_ID || !WEBSITE_ID) {
           console.log('Missing Publisher Id and Website Id');
           return;
       }

       if (!rampComponentLoaded) {
           setRampComponentLoaded(true);
           window.ramp = window.ramp || {};
           window.ramp.que = window.ramp.que || [];
           window.ramp.passiveMode = true;
           const configScript = document.createElement("script");
           configScript.src = `https://cdn.intergient.com/${PUB_ID}/${WEBSITE_ID}/ramp.js`;
           document.body.appendChild(configScript); 

           configScript.onload = window.ramp.spaNewPage;
       }

       window.ramp.que.push(() => {
        window.ramp.spaNewPage(pathname); 
    });
   }, [rampComponentLoaded]);

   return null;
};

export default Ramp;
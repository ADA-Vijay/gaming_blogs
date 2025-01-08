"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use this for tracking route changes

const PUB_ID = 1025447;
const WEBSITE_ID = 75402;

const Ramp = () => {
  const [rampComponentLoaded, setRampComponentLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!PUB_ID || !WEBSITE_ID) {
      console.error("Missing Publisher Id and Website Id");
      return;
    }

    // Initialize Ramp only once
    if (!rampComponentLoaded) {
      setRampComponentLoaded(true);

      window.ramp = window.ramp || {};
      window.ramp.que = window.ramp.que || [];
      window.ramp.passiveMode = true;

      const configScript = document.createElement("script");
      configScript.src = `https://cdn.intergient.com/${PUB_ID}/${WEBSITE_ID}/ramp.js`;
      document.body.appendChild(configScript);

      configScript.onload = () => {
        console.log("Ramp script loaded");
        window.ramp.spaNewPage(pathname); // Initial page load
      };
    } else {
      // Handle SPA navigation
      window.ramp.que.push(() => {
        console.log("spaNewPage triggered for:", pathname);
        window.ramp.spaNewPage(pathname);
      });
    }
  }, [pathname]); // Dependency array ensures it runs on navigation

  return null;
};

export default Ramp;

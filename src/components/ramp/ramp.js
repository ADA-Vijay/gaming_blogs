"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Use this for tracking route changes

const PUB_ID = 1025447;
const WEBSITE_ID = 75402;

const Ramp = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!PUB_ID || !WEBSITE_ID) {
      console.error("Missing Publisher Id and Website Id");
      return;
    }

    // Check if the Ramp script is already loaded
    if (!window.rampScriptLoaded) {
      window.rampScriptLoaded = true; // Add a flag to the global object to prevent duplicate loading

      // Initialize Ramp global object
      window.ramp = window.ramp || {};
      window.ramp.que = window.ramp.que || [];
      window.ramp.passiveMode = true;

      // Create the Ramp script
      const configScript = document.createElement("script");
      configScript.src = `https://cdn.intergient.com/${PUB_ID}/${WEBSITE_ID}/ramp.js`;
      document.body.appendChild(configScript);

      // Handle script loading
      configScript.onload = () => {
        console.log("Ramp script loaded");

        // Check and wait for spaNewPage to be available
        const checkSpaNewPage = setInterval(() => {
          if (window.ramp && typeof window.ramp.spaNewPage === "function") {
            clearInterval(checkSpaNewPage);
            console.log("spaNewPage is ready. Triggering for initial load:", pathname);
            window.ramp.spaNewPage(pathname); // Initial page load
          } else {
            console.log("Waiting for spaNewPage to be available...");
          }
        }, 100);

        // Stop checking after a timeout (e.g., 10 seconds)
        setTimeout(() => clearInterval(checkSpaNewPage), 10000);
      };

      configScript.onerror = () => {
        console.error("Failed to load Ramp script.");
      };
    } else {
      // Handle SPA navigation
      window.ramp.que.push(() => {
        if (typeof window.ramp.spaNewPage === "function") {
          console.log("spaNewPage triggered for:", pathname);
          window.ramp.spaNewPage(pathname);
        } else {
          console.error("spaNewPage is not a function during SPA navigation.");
        }
      });
    }
  }, [pathname]); // Dependency array ensures it runs on navigation

  return null;
};

export default Ramp;

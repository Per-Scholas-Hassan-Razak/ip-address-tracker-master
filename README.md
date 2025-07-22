# IP Address Tracker

An interactive frontend web application that allows users to:

- Automatically detect and display their own IP address location on page load.
- Search for any valid IP address and view its geolocation data.
- Visualize the location on an interactive Leaflet.js map.

This project uses the [IP Geolocation API by IPify](https://geo.ipify.org/) and Leaflet.js for map rendering.

---

## Features

- Auto-fetch user's IP and location on initial load/refresh
- Search for other IP addresses
- Render map with accurate location marker
- Display IP, location, timezone, and ISP info
- User input validation with real-time error messages

---

## Technologies Used

- **TypeScript**
- **Leaflet.js**
- **HTML5 & CSS3**
- **ES Modules**
- **IPify API** (IP Geolocation)

---

## How to Use

  ### 1. Clone and Install Compile and Run

  ```bash
  git clone https://github.com/Per-Scholas-Hassan-Razak/ip-address-tracker-master.git
  cd ip-address-tracker-master
  npm install

  # Compile 
  npx tsc

  #Run  - Using Live Server 
  ```
## Functionality
- User IP addresses are validated with a regex utility. Error banners will appear if:
	•	The field is empty on submission
	•	The format is incorrect (e.g., not 123.45.67.89)

The error banner clears in real-time as the user edits the input.


## Reflection
Building the IP Address Tracker was an exciting exercise in combining API data consumption with UI rendering and interactive maps. I began by structuring the application in TypeScript with a clear folder architecture separating models, services, and utilities. This made the codebase modular and easier to manage.

One of the early challenges I faced was understanding how to dynamically fetch and render geolocation data based on a user's own IP address and also from manually entered IPs. Ensuring type safety while transforming API responses into custom `Location` and `GeolocationAPI` classes helped streamline the UI rendering logic and improved code maintainability.

Another significant hurdle was integrating Leaflet.js with ES modules. Because Leaflet exposes a UMD global (`L`), importing it directly in TypeScript modules caused errors. I resolved this by referencing the global Leaflet object from the CDN in the HTML file and using a `declare const L` workaround in the TypeScript service.

UI-wise, dynamically rendering the map and handling error messages during IP validation required careful DOM manipulation. Styling the error message as a banner and ensuring accessibility through clear feedback was a key UX enhancement. Additionally, I implemented a real-time validation system that updated error messages and styling as users typed.

Looking ahead, I’d like to add domain name lookup support, responsive map resizing, and better error handling for edge cases like private IPs or blocked geolocation services.

This project deepened my understanding of TypeScript, DOM manipulation, and third-party library integration.


  ## Referrences 
 ### Layout References

- **CSS Grid Layout**  
  [W3Schools - CSS Grid](https://www.w3schools.com/css/css_grid.asp)

- **Media Queries for Responsiveness**  
  [W3Schools - Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

- **`:first-child` Selector**  
  [W3Schools - CSS :first-child](https://www.w3schools.com/cssref/sel_firstchild.php)

---

###  Module & Service Setup References

- **ES Modules in Browsers**  
  [MDN - ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

- **TypeScript Module Resolution**  
  [TypeScript Handbook - Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

- **HTML Spec for `<script type="module">`**  
  [W3C Spec - script type="module"](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type)

---

###  Key Configuration Notes

- Added `.js` extensions to all **relative imports** for browser compatibility with `type="module"`
- Ensured **TypeScript compiles cleanly** without breaking import paths
- Maintained `src/` for source TypeScript files and `dist/` for browser-ready JavaScript output

  ### Leaflet.js
  - **[Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/)**  
    Helped with initializing the map, setting view, adding tile layers, and placing markers.

  - **[Leaflet Map Methods – setView and flyTo](https://leafletjs.com/reference.html#map-setview)**  
    **[Leaflet flyTo Method](https://leafletjs.com/reference.html#map-flyto)**  
     Used to understand how to center and animate the map view on location changes.

  - **[Leaflet Marker Documentation](https://leafletjs.com/reference.html#marker)**  
     For placing and updating the marker on the map with `.addTo()` and `.setLatLng()`.

  - **[Understanding Leaflet Tile Layers](https://leafletjs.com/reference.html#tilelayer)**  
     Helped with customizing map tiles using OpenStreetMap.

  - **[UMD vs ES Module in Leaflet (Community Discussion)](https://github.com/Leaflet/Leaflet/issues/7334)**  
    Clarified why Leaflet is used as a UMD global rather than as a module in frontend projects without bundlers.
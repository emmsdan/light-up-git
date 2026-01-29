
import { useState } from 'react';
import "../App.css";

export const SwitchOnBulb = () => {
    const [isOn, setIsOn] = useState(false)
    
    const bulbOn = "https://www.w3schools.com/js/pic_bulbon.gif"
    const bulbOff = "https://www.w3schools.com/js/pic_bulboff.gif"
 
    return (
        <>
     <div>
      <img src={isOn ? bulbOn : bulbOff} alt="Bulb"style={{ width: "100px" }} />
      <button onClick = {() => setIsOn(true)}>Turn On The Light</button>
     </div>
      </>
    )
};


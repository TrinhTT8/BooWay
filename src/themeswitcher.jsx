import React, { useState } from "react";
import "./themeOriginal.css";
import "./spookytheme.css";

function ThemeSwitcher() {
    // Theme state
    const [isHalloweenTheme, setIsHalloweenTheme] = useState(false);

    // Toggle theme
    const toggleTheme = () => {
        setIsHalloweenTheme((prevTheme) => !prevTheme);
    };

    return (
        <div className={isHalloweenTheme ? "theme-halloween" : "theme-original"}>
            <button onClick={toggleTheme}>
                Switch to {isHalloweenTheme ? "Original Theme" : "Halloween Theme"}
            </button>
            <h1>Welcome to the Themed Website</h1>
            <p>This content changes theme!</p>
            {/* Other content goes here */}
        </div>
    );
}

export default ThemeSwitcher;

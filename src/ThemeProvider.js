import React, { useState } from "react";
const ThemeContext = React.createContext()

function ThemeProvider(props) {
    const [theme, setTheme] = useState("light")

    function changeTheme() {
        setTheme(prevTheme => {
            return prevTheme === "dark" ? "light" : "dark"
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>


    )
}

export { ThemeProvider, ThemeContext }

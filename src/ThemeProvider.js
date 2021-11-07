import React, { useContext } from "react";

function ThemeProvider() {
    const [theme, setTheme] = useContext("light")

    function changeTheme() {
        setTheme(prevTheme => {
            return prevTheme === "dark" ? "light" : "dark"
        })
    }
}

export default ThemeProvider

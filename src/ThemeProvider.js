import React, { useContext } from "react";

function ThemeProvider() {
    const [theme, setTheme] = useContext("light")

    function changeTheme() {
        setTheme(prevTheme => {
            return prevTheme === "dark" ? "light" : "dark"
        })
    }

    return (
        <div>

        </div>
    )
}

export default ThemeProvider

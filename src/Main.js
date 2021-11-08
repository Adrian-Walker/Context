import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function Main(props) {

    const [theme, changeTheme] = useContext(ThemeContext)

    return (
        <div className="main">
            <header className={`${theme}-theme`}>
                <b>Click The Button To Toggle {theme === "light" ? "Light" : "Dark"} Theme</b>
            </header>

            <button className={`${theme}-theme`} onClick={changeTheme}>Toggle Theme</button>

        </div>
    )
}

export default Main;

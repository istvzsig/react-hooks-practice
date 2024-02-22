// @ts-ignore
import ThemeProvider, { useTheme, useThemeUpdate } from '../context/ThemeContext';

export default function UseStateComponent() {
    const darkTheme = useTheme();
    // console.log(darkTheme)
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? '#222' : 'fff',
        color: darkTheme ? '#fff' : '222',
    }
    return (
        <div style={themeStyles}>
            <h4>Can toggle color theme: {darkTheme}</h4>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    )
}
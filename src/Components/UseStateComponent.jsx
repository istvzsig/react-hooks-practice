import { useState } from 'react';

function initialCount() {
    console.log("Run initial function");
    return 0;
}

function decrementCount(callback) {
    callback(previousCount => previousCount - 1);
}

function increaseCount(callback) {
    callback(previousCount => previousCount + 1);
}

function changeTheme(callback, color) {
    if (color) {
        callback(previousTheme => {
            return {
                // if theme id wont modified just spread
                ...previousTheme,
                color: previousTheme.color === "blue" ? color : "blue"
            }
        })
    }
}

export default function UseStateComponent() {
    // Normal version of useState
    const [c, setC] = useState(0);
    // Function version of useState
    const [count, setCount] = useState(() => initialCount());
    const [theme, setTheme] = useState({ id: 121424, color: 'blue' });

    return (
        <>
            <div>
                <button onClick={() => decrementCount(setCount)}>-</button>
                <span style={{ fontSize: '24px', fontWeight: "600" }}> {count} </span>
                <button onClick={() => increaseCount(setCount)}>+</button>
            </div >
            <hr />
            <div>
                <button onClick={() => changeTheme(setTheme, "pink")}>Change Color</button>
                <div>ID: {theme.id}</div>
                <div>COLOR: {theme.color}</div>
            </div>
        </>
    )
}
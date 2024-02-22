import { useState, useMemo, useEffect } from "react"

function slowFunction(n) {
    console.log("Calling slow function")
    for (let i = 0; i < 99999999; i++) { }
    return n * 2;
}

export default function UseMemoComponent() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    const dubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    useEffect(() => {
        console.log("Theme changed.")
    }, [themeStyles])

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(previousDark => !previousDark)}>
                Change theme
            </button>
            <div style={themeStyles}>{dubleNumber}</div>
        </>
    )
}
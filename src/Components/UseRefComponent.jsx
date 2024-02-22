import { useState, useRef, useEffect } from "react"

export default function UseRefComponent() {
    const [name, setName] = useState('')
    const previousName = useRef('')

    function focus() {
        inputRef.current.focus()
    }

    useEffect(() => {
        previousName.current = name
    }, [name])

    return (
        <>
            <input type="text" value={name}
                onChange={(e) => setName(e.target.value)} />
            <div>My name is: {name} </div >
            <div>Used to be called: {previousName.current} </div >
            <button onClick={focus}>Focus</button>
        </>
    )
}
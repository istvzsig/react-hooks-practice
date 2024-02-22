import { useState, useEffect } from "react";

function changeResourceType(callback, resourceType) {
    if (resourceType) {
        callback(() => resourceType);
    }
}

async function fetchJSONData(url) {
    const data = await fetch(url);
    return data.json();
}

export default function UseStateComponent() {
    const [resourceType, setResourceType] = useState("users");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchJSONData(`https://jsonplaceholder.typicode.com/${resourceType}/?_limit=2`)
            .then(data => setItems(data))
    }, [resourceType]);

    return (
        <>{['users', 'posts', 'comments'].map(resourceType => {
            return <button
                key={resourceType}
                onClick={() => changeResourceType(setResourceType, resourceType)}>
                {resourceType.toUpperCase()}
            </button>

        })}
            <p>Resource type: {resourceType}</p>
            {items.map((item, i) => {
                return <div key={i}>
                    <p>{JSON.stringify(item)}</p>
                </div >
            })}
        </>

    )
}
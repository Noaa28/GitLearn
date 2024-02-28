import { useState } from "react";

export const ToRender = () => {

    const [name, setName] = useState('insert your name');

    return <>

        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <p>your name is {name}</p>

        <a>nbnbnbnbn</a>

    </>
}

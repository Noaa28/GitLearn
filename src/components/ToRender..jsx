import { useState } from "react";
import { Button } from "./batton"

export const ToRender = () => {

    const [name, setName] = useState('insert your name');

    return <>

        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <p>your name is {name}</p>
        
        <a>I love my name!!</a>

        <Button setName={setName}/>

    </>
}

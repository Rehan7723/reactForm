import React from "react";
import { useRef } from "react";
import '../style/formstyle.css';
export default function Forms()
{
    const textref=useRef(null);
    const checkref=useRef(null);
    function output()
    {
        alert(`Name: ${textref.current.value}`);
        alert(`Checkbox: ${checkref.current.value}`);
    }
    return(
        <div className="cont">
            <h1>Form</h1>
            <form onSubmit={output}>
            <input type="text" autocomplete="off" name="text" className="input" ref={textref} placeholder="Username"/><br/>
            <div><label for="check"><small>I agree all the terms and conditions.</small></label>
            <input id="check" type="checkbox" className="check" ref={checkref}/></div><br/>
            <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}
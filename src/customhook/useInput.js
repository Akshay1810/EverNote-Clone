import { useState } from "react";


const useInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue)
    const reset = () => {
        setValue(initialValue)
    }                                      //function to set the value
    const bind = {
        value,
        onChange: (e) => {
            setValue(e.target.value)
        }
    }                                     //biniding the value
    return [value, bind, reset]
}

export default useInput;
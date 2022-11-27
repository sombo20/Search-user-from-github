import {useState} from 'react'
import "../css/input.css"

const InputUser = ({search}) => {
    const [value, setValue] = useState("")

    const submit = e => {
        e.preventDefault();
        search(value)
        setValue("")
    }


    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="Search user github"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
            />
            <button onClick={submit} disabled={!value}>Search</button>
        </form>
    )
        
}

export default InputUser
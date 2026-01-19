

import { useRef, useState } from "react"
function Make({ task, del, ed }) {
    const [disp, setdisp] = useState(false)
    const [val, setVal] = useState("")
    return (
        <p> {disp ? (<input value={val} onChange={(event) => setVal(event.target.value)} />) : task}
            {disp ? null : (<button style={{ marginLeft: "40px" }} onClick={() => { del(task) }}>Delete</button>)}
            <button onClick={() => {
                setdisp(!disp)
                ed(task, val);
                console.log(task, val)

            }}>{disp ? "Update" : "Edit"}</button> </p>
    )
}
export default Make;
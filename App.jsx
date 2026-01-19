import { useState } from 'react'

import './App.css'
import Make from './Design'

function App() {
  const [inp, setinp] = useState("")
  const [list, setlist] = useState([])
  function additem() {
    setlist([...list, inp])
    setinp("")
  }
  function deletei(value) {
    setlist(list.filter(item => item !== value));
  }
  function editt(task, tar) {
    let arr = [...list]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == task) {
        arr[i] = tar;
      }
    }
    setlist(arr)
  }

  return (
    <div style={{ border: '2px solid #646cff', height: '500px', width: '500px' }}>
      <h1>To-Do list</h1>
      <input style={{ fontSize: '25px', borderColor: '#646cff' }} value={inp} onChange={(e) => {
        if (e.target.value != "") {
          setinp(e.target.value)
        }
      }
      } placeholder='Add your task' />
      <button onClick={additem}>ADD</button>
      <br />
      <div>
        {list.map((item, index) => (
          <Make task={item} key={index} del={deletei} ed={editt} />
        ))}
      </div>
    </div>
  )
}

export default App

import React from 'react'

const App = () => {

  const name1 = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

  const logged = true;

  const styles = {
    color : 'pink',
    fontSize : '55px'
  }

  return (

    <>
      {logged ? <h3 className="text-3xl font-bold underline">You are logged in</h3> : <h3>You are not logged in</h3>}
      <div>
        <p style={styles}>Hello</p>
        <ul>
          {name1.map((name1, index) => (
            <li key={index}>{name1} </li>
          ))
          }
        </ul>
      </div>
    </>

  )
}

export default App

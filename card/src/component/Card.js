import React from 'react';


function card(name,age) {
  return (
    <div>
    <h3>my name is {name}</h3>
    <h3> my age is {age}</h3>
    <button onClick={age=this.age+1}></button>
    </div>
  )
}

export default card
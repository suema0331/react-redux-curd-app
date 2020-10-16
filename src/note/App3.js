import React from 'react';
import PropTypes from 'prop-types';

const App = () =>{
  const profiles = [
  { name:"Taro" , age:10 }, 
  { name:"Hanako", age: 5 },
  { name:"Noname" }
]

  return (
    <div>
    {
      profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
    </div>
  )
}

const User = (props) =>{
return <div>Hi!, I am {props.name},and {props.age} years old! </div>
}


//型checkを行う　nameに数値が渡されるとwarningが表示される
//User.propTypes = {のみ　prop小文字なので注意
//入力必須にするにはisRequired で入力ない場合にwarningでる

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;

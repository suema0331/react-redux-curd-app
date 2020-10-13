import { render } from '@testing-library/react';
import React from 'react';

//User Componentに対してnameというPropsを与えることができる
//componentは再利用できる。例えば以下で二行分出力
  //<User name = {"Taro"} age={10}/>
  //<User name = {"Hanako"} age={5}/>
//Mapを使うことで一個のhashを受け取って関数でrenderさせる

//array,iterator should have a unique "key" prop.
//reactではバーチャルDOMがあってどのDOMが変更されたかを管理している。
//変更点のみ実際のDOMに反映している。
//それぞれのDOMにkeyを与えてあげることで必要最低限なDOM範囲を管理している

const App = () =>{
  const profiles = [
  { name:"Taro", age:10 }, 
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

//外からの入力を参照して画面に出力することができる
const User = (props) =>{
return <div>Hi!, I am {props.name},and {props.age} years old! </div>
}

//ageが入力されなかったときにage1がデフォルト値として1が渡される
User.defaultProps ={
  age:1 
}

export default App;

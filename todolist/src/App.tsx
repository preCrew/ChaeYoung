import { useState } from 'react';

import 'antd/dist/antd.min.css';

import InputForm from './components/InputForm';
import ListContents from './components/ListContents';


const App = () => {
  const [text,setText] = useState('')
  const [userList,setUserList] = useState<string[]>([])

  return (
    <>
    {console.log(userList)}
      <InputForm text={text} setText={setText} setUserList={setUserList}/>
      <ListContents text={text} userList={userList}/>
    </>
  )
}

export default App;

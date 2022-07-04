import { useState } from 'react';

import './index.css'
import 'antd/dist/antd.min.css';

import InputForm from './components/InputForm';
import ListContents from './components/ListContents';


const App = () => {
  const [text,setText] = useState('')
  const [userList,setUserList] = useState<string[]>([])

  return (
    <>
      <InputForm text={text} setText={setText} setUserList={setUserList}/>
      <ListContents text={text} userList={userList}/>
    </>
  )
}

export default App;

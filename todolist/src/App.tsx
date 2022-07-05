import { useState } from 'react';

import { Col, Row } from 'antd';
import './index.css'
import 'antd/dist/antd.min.css';

import InputForm from './components/InputForm';
import ListContents from './components/ListContents';
import UserName from './components/UserName';


const App = () => {
  const [text,setText] = useState('')
  const [userList,setUserList] = useState<string[]>([])

  return (
    <>
    <Row align="middle" justify="center">
      <Col md={{span:6}} xs={{span:24}} className="todo__con">
        <UserName/>
        <InputForm text={text} setText={setText} setUserList={setUserList}/>
        <ListContents text={text} userList={userList} setUserList={setUserList}/>
      </Col>
    </Row>    
    </>
  )
}

export default App;

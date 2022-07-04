import { Dispatch, SetStateAction, useCallback, useState, useRef } from 'react';

import type { InputRef } from 'antd';
import { Button, Col, Input, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface UserTodo {
  text: string, 
  setText: Dispatch<SetStateAction<string>>, 
  setUserList: Dispatch<SetStateAction<string[]>>
}

const InputForm = ({text,setText,setUserList}: UserTodo) => {
  const inputRef = useRef<InputRef>(null);

  const onChangeText = useCallback((e: {target: {value: string}})=>{
    setText(e.target.value)
  },[])

  const onClickInput = useCallback(()=>{
    console.log(text)
    setUserList((prevState) => [text,...prevState])
    //초기화
    setText('')
    inputRef.current!.focus({
      cursor: 'start',
    });    
  },[text])

    return (
      <Row justify={'center'} align={'middle'}>
        <Col xs={4}>
          <Input 
          value={text}
          onChange={onChangeText}
          ref={inputRef}
          placeholder="할일을 추가해주세요" />
          <Button 
          shape="circle"
          size='large' 
          onClick={onClickInput}
          icon={<PlusOutlined />} />
        </Col>
      </Row>        
    )
}
export default InputForm
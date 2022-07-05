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
    //console.log(text)
    setUserList((prevState) => [text,...prevState])
    //초기화
    setText('')
    inputRef.current!.focus({
      cursor: 'start',
    });    
  },[text])

    return (
      <Row justify={'center'} align={'middle'} className="todo__input-form">
        <Col xs={24} className="todo__input-inner">
          <Input 
          value={text}
          onChange={onChangeText}
          ref={inputRef} 
          onPressEnter={(e) => (e.key === 'Enter') && onClickInput()}
          placeholder="할일을 추가해주세요"
          className="todo__input"
          />
          <Button 
          shape="circle"
          onClick={onClickInput} 
          className="todo__add-btn" 
          style={{color: '#fff'}}      
          icon={<PlusOutlined />} />
        </Col>
      </Row>        
    )
}
export default InputForm
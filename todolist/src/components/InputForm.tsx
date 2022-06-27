import { useCallback, useState } from 'react';

import { Button, Col, Input, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const InputForm = ({text,setText}:{text: string, setText: (e:string) => void}) =>{

    const onChangeText = useCallback((e:{target:{value:string}})=>{
      setText(e.target.value)
    },[])

    const onClickInput = useCallback(()=>{
      console.log(text)
    },[text])

    return (
    <Row justify={'center'} align={'middle'}>
        <Col xs={4}>
          <Input 
          value={text}
          onChange={onChangeText}
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
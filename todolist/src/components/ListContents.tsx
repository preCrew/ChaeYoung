import { Button, List } from 'antd';

import { DeleteOutlined } from '@ant-design/icons';
import ListInCheckbox from './ListInCheckbox';
import React, { useCallback } from 'react';

interface ListinTodo {
  text : string
  userList : string[]
  setUserList : (deletTodo: string[]) => void
}


const ListContents = ({text,userList,setUserList}: ListinTodo) => {
  const onClickDel = useCallback((val: string) => () => {
    const deletTodo = userList.filter(el => el !== val)
    setUserList(deletTodo)
  },[text])

    return (   
        <List
        className='todo__list-item'
        bordered
        dataSource={userList}
        renderItem={item => (
          <List.Item>
            <ListInCheckbox text={item}/>
            <Button 
            shape="circle" 
            onClick={onClickDel(item)} 
            className='list__btn-del'
            >
              <DeleteOutlined />
            </Button>
          </List.Item>
        )}
      />
    )
}

export default ListContents
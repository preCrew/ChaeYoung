import { List } from 'antd';

import ListInCheckbox from './ListInCheckbox';

const ListContents = ({text,userList}:{text: string,userList:string[]}) => {
    return (   
        <List
        bordered
        dataSource={userList}
        renderItem={item => (
          <List.Item>
            <ListInCheckbox text={item}/>
          </List.Item>
        )}
      />
    )
}

export default ListContents
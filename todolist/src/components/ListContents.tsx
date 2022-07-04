import { List } from 'antd';

const ListContents = ({text,userList}:{text: string,userList:string[]}) => {
    return (   
        <List
        bordered
        dataSource={userList}
        renderItem={item => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
    )
}

export default ListContents
import { useState } from 'react';

import 'antd/dist/antd.min.css';

import InputForm from './components/InputForm';
import { List } from 'antd';
export interface textVal {
  text: string
}

const App = () => {
  const [text,setText] = useState<string>('')
  return (
    <>
      <InputForm text={text} setText={setText}/>
      {/* <List {...text}/> */}
    </>
  )
}

export default App;

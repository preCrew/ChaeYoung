import React, { useState } from 'react';

import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const ListInCheckbox = ({text}: {text: string}) => {
  const [checked,setChecked] = useState<boolean>(false)
  const [checkedClass,setCheckClass] = useState('')

  const onChange = (e: CheckboxChangeEvent) => {
   // console.log(`checked = ${e.target.checked}`);
    setChecked(e.target.checked);
    (checked) ? setCheckClass('') : setCheckClass('list--checked') 
  };

  return (
    <Checkbox onChange={onChange} className={checkedClass}>{text}</Checkbox>
  )  
}


export default ListInCheckbox;
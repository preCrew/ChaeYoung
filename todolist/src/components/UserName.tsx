import { useEffect, useMemo, useState } from "react"

const UserName = () => {
    const [name,setName] = useState<string | null>('')
    let namePrompt: string | null;

    useEffect(()=>{
        if(!namePrompt){
            namePrompt = prompt("이름을 입력해주세용")
            setName(namePrompt)
        }
    },[])

    return (
        <div>
            <h1><b>{name}</b>님의 TodoList</h1>
        </div>
    )
}

export default UserName
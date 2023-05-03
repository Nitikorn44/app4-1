import React, {useState} from 'react'

export default function FontSize(){
    let [size, setSize] = useState(16)

    
    const onClickUp = () => {
        setSize(size + 1)
    }
    const onClickDown = () => {
        if (size > 0){
            setSize(size - 1)
        }
    }
    const dStyle={
        fontSize: size
        }

    return(
        <div>
            <div style={dStyle}>ขนาด Font size :{size}</div>
            <button onClick={onClickUp}>เพิ่มขนาด</button>
            <button onClick={onClickDown}>ลดขนาด</button>
        </div>
    )
}
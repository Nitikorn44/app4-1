import React, {useState} from "react"

export default function Cart(){
    let [numItem, setNumItem] = useState(0)
    let stock = 10

    const onClickAddCart = () => {
        if (numItem < stock){
        let newItem = numItem + 1
        setNumItem(newItem)
        }
    }
    const onClickDeleteCart = () => {
        if (numItem > 0){
            setNumItem(numItem - 1)
        }
    }

    React.useEffect(
        function(){
            alert('อัปเดตสินค้าเรียนร้อยแล้ว')
        }, [numItem]

    )

    return(
        <div>
            <div>จำนวนสินค้าตะกร้า : {numItem}</div>
            <button onClick={onClickAddCart}>เพิ่มสินค้าในตะกร้า</button>
            <button onClick={onClickDeleteCart}>ลบสินค้าในตะกร้า</button>
        </div>
    )
}
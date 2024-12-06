'use client'

import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface CartProps {
    className: string
}

const Cart: React.FC<CartProps> = ({
    className
}) => {

    console.log('classname', className)
    return (
        <FontAwesomeIcon className={className} icon={faCartShopping}/>
    )
}

export default Cart

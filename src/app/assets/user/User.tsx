'use client'

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface UserProps {
    className: string
}

const User: React.FC<UserProps> = ({
    className
}) => {
    return (
        <FontAwesomeIcon className={className} icon={faUser}/>
    )
}

export default User

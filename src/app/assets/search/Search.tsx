'use client'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SearchProps {
    className: string
}

const Search: React.FC<SearchProps> = ({
    className
}) => {
    return (
        <FontAwesomeIcon className={className} icon={faMagnifyingGlass} />
    )
}

export default Search

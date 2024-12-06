import { faHamburger } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface HamburgerProps {
    className: string
}

const Hamburger: React.FC<HamburgerProps> = ({
    className
}) => {
  return (
    <FontAwesomeIcon className={className} icon={faHamburger}/>
  )
}

export default Hamburger

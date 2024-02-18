import "./Nav.css"
import { Link } from "react-router-dom"
const Nav = ({Icon, title, onClick, route}) => {
  return (
    <Link className="nav " onClick={onClick} to={route}>
      {Icon && <Icon className="icon" />}
      <h2>{title ? title : null}</h2>
    </Link>
  )
}

export default Nav
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
            <li>
                <Link to='/infinite-pagination'>Infinite Paginate</Link>
            </li>
            <li>
                <Link to='/debounce'>Debounce</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
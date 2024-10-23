import { Link } from "react-router-dom";

import "./Menu.css"
function Menu() {
    return(
        <nav id="menu_bar">
            <div >
                <Link to="/" className="links">Home </Link>
            </div>
        </nav>
    )
}

export default Menu;
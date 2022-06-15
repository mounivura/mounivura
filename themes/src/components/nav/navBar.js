import {Link} from "react-router-dom";
const NavBar =()=>{
    return(
        <>
        <h1 className="bg-secondary text-light text-center p-2 m-1">Themes</h1>
<Link type="button" className="btn btn-primary p-2 m-5" to="/theme1">Theme 1</Link>
<Link type="button" className="btn btn-secondary p-2 m-5" to="/theme2"> Theme 2</Link>
<Link type="button" className="btn btn-success p-2 m-5" to="/theme3">Theme 3</Link>
<Link type="button" className="btn btn-danger p-2 m-5" to="/theme4">Theme 4</Link>
<Link type="button" className="btn btn-warning p-2 m-5" to="/theme5">Theme 5</Link>
<Link type="button" className="btn btn-info p-2 m-5" to="/theme6">Theme 6</Link>
<Link type="button" className="btn btn-dark p-2 m-5" to="/theme7">Theme 7</Link>
<Link type="button" className="btn btn-primary p-2 m-5" to="/theme8">Theme 8</Link>

        </>
    )
}

export default NavBar;
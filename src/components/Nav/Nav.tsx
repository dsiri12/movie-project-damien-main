import Container from "../Container/Container"
import './Nav.css'

interface NavProps {
    background: string
}

function Nav(props: NavProps) {
    return (
        <nav className='nav' style={{background: props.background}}>
            <div className="nav-content">
                <div className="logo">
                    <img src="logoMovie_Damien_07.png" />
                </div>
                <div className="links">
                    <a className="button" href="/movies">MOVIES</a>
                    <a className="button" href="/tv-shows">T.V. SHOWS</a>
                    <a className="button" href="/contact">CONTACT US</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
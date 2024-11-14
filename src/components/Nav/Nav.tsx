import Container from "../Container/Container"
import './Nav.css'

interface NavProps {
    background: string
}

function Nav(props: NavProps) {
    return (
        <nav className='nav' style={{background: props.background}}><Container>
            <div className="nav-content">
                <div className="logo">
                    <img src="logoMovie_Damien_07.png" />
                </div>
                <div className="links">
                    <a className="button" href="">MOVIES</a>
                    <a className="button" href="">T.V. SHOWS</a>
                    <a className="button">CONTACT US</a>
                </div>
            </div>
        </Container></nav>
    )
}

export default Nav;
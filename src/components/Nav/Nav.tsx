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
                    {/* <img src="googleLogo.png" /> */}
                    logo
                </div>
                <div className="links">
                    <a className="button">MOVIES</a>
                    <a className="button">T.V. SHOWS</a>
                    <a className="button">CONTACT US</a>
                </div>
            </div>
        </Container></nav>
    )
}

export default Nav;
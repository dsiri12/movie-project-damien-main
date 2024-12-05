import './BottomFooter.css'

export interface BottomFooterProps {
    background: string
}

function BottomFooter(props: BottomFooterProps) {
    return (
        <nav className='bottom-footer' style={{background: props.background}}>
            <div className='bottom-footer-content'>
                <div className="bottom-footer-links">
                    <a className='button' href="/copyright">©2024COPYRIGHT</a>
                    <a className="button" href="/support">SUPPORT</a>
                    <a className="button" href="/privacy">PRIVACY</a>
                    <a className="button" href="/accessibility">ACCESSIBILITY</a>
                </div>
            </div>
        </nav>
    )
}

export default BottomFooter;
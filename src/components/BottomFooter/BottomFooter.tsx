import './BottomFooter.css'

export interface BottomFooterProps {
    background: string
}

function BottomFooter(props: BottomFooterProps) {
    return (
        <nav className='bottom-footer' style={{background: props.background}}>
            <div className='bottom-footer-content'>
                <div className="bottom-footer-links">
                    <h4 className='text'>© 2024 COPYRIGHT</h4>
                    <a className="button" href="/support">SUPPORT</a>
                    <a className="button" href="/privacy">PRIVACY</a>
                    <a className="button" href="/terms">TERMS OF USE</a>
                </div>
            </div>
        </nav>
    )
}

export default BottomFooter;
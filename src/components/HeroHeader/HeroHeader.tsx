import './HeroHeader.css'

interface HeroHeaderProps {
    image: string;
    title: string;
    subtitle: string;
    height: number;
}

function HeroHeader(props: HeroHeaderProps) {
    return (
        <div className="hero" style={{backgroundImage: `url(${props.image})`, height: props.height}}>
            <div className="hero-content">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default HeroHeader;
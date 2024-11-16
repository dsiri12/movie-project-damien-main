interface HeroHeaderProps {
    image: string;
    title: string;
    subtitle: string;
    height: number;
}

function HeroHeader(props: HeroHeaderProps) {
    return (
        <div style={{backgroundImage: props.image, height: props.height}}>
            <div>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default HeroHeader;
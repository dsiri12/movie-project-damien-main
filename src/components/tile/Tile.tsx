interface TileProps {
  title: string;
  description: string;
  src?: string;
}

import "./Tile.css";

function Tile(props: TileProps) {
  return (
    <div className="tile">
      {props.src && (
        <div
          style={{
            backgroundImage: props.src,
            height: "200px",
            width: "300px",
          }}
          className="tile-img"
        ></div>
      )}

      <div className="tile-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Tile;

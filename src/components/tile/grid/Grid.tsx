interface GridProps {
  gridItems: React.ReactNode;
  gridColumns: number;
}

import "./Grid.css";

function Grid(props: GridProps) {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `${props.gridColumns}fr` }}
    >
      {props.gridItems.map}
    </div>
  );
}

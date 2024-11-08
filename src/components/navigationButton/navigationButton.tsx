import "./navigationButton.css";

interface NavigationButtonProps extends HTMLAnchorElement {
  text: string;
}

function NavigationButton(props: NavigationButtonProps) {
  return <a className="navigationalButton">{props.text}</a>;
}

export default NavigationButton;

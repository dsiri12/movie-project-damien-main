import NavigationButton from "./components/navigationButton/navigationButton.tsx";
import SearchBar from "./components/searchBar/searchBar.tsx";
import SearchButton from "./components/searchButton/searchButton.tsx";

// import GoogleAppsIconButton from "./components/googleAppsIconButton/googleAppsIconButton.tsx";
// import GoogleSearchLabsIconButton from "./components/googleSearchLabsIconButton/googleSearchLabsIconButton.tsx";
// import GoogleLogo from "./components/googleLogo/googleLogo.tsx";

import './App.css'

function App() {
  return (
    <div className="all-content">
      {/* <GoogleAppsIconButton />
      <GoogleLogo />
      <GoogleSearchLabsIconButton /> */}

        <div className="top-content">
          <div className="top-left-position">
        <NavigationButton text="About" href="#" />
        <NavigationButton text="Store" href="#" />
      </div>

      <div className="top-right-position">
        <NavigationButton text="Gmail" href="#" />
        <NavigationButton text="Images" href="#" />
      </div>
        </div>
      

      <div className="center-content">
        <SearchBar />
        <div className="center-button">
          <SearchButton>Google Search</SearchButton>
          <SearchButton>I'm Feeling Lucky</SearchButton>
        </div>
      </div>

      <div className="bottom-content">
        <div className="bottom-left-position">
          <NavigationButton text="Advertising" href="#" />
          <NavigationButton text="Business" href="#" />
          <NavigationButton text="How Search Works" href="#" />
        </div>

        <div className="bottom-right-position">
          <NavigationButton text="Privacy" href="#" />
          <NavigationButton text="Terms" href="#" />
          <NavigationButton text="Settings" href="#" />
        </div>
      </div>
    </div>
  );
}

export default App;

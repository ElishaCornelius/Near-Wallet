import Logo from "./logo.js";

function Header() {
  return (
    <div id="header-container">
      <div id="header">
        <div id="near-logo-container">
          <Logo id="near-logo"/>
        </div>
        <div id="language-container">
          <div id="language-selector-container">
            <select id="language-selector">
              <option value="english">English</option>
              <option value="italiano">Italiano</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
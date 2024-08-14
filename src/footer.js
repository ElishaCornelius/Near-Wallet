import Logo from "./logo.js";
function Footer(){
  return (
    <footer>
      <div id="small-housing">
        <div id="logo-container"><Logo id="near-footer-logo"/></div>
        
        <div id="footer">
          <p>© 2023 MyNearWallet LLC. All Rights Reserved.</p>
          <p>
            <a href="https://wallet.near.org/terms">Terms of Service</a>
            <span></span>
            <a href="https://wallet.near.org/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
      <div id="near-footer-info" className="black-text">
        NEAR is a scalable computing and storage platform that changes how the web works for the better.
        <a href="https://near.org/" class="lear-more"> Learn More</a>
      </div>
      <div id="discord-community">
        <div>Questions?</div>
        <a href="https://discord.com/invite/zfhfRpaM4m">Join Community </a>
      </div>
    </footer>
  );
}
export default Footer;
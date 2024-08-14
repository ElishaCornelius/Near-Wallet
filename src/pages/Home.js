import React from "react"
import "../css/home.css";
function Home(){
    return(
        <div className="body">
            <div className="body-container">
                <p className="p1">NEAR is here.</p>
                <span className="p2">Securely store and stake your NEAR tokens and compatible assets with</span> <span className="spanned-text">NEAR Wallet.</span>
                <div id="body-links">
                    <a href="/create" id="create-account">Create Account</a>
                    <span>or</span>
                    <a href="/import" id="import-account">Import Existing Account</a>
                </div>
                
            </div>
            
        </div>
    )
}
export default Home;
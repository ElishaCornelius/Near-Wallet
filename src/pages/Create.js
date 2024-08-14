import "../css/create.css";
import Arrow from "../images/arrow-right.png"
function Create(){
    return(
        <div id="body">
            <div id="body-container">
                <div id="main-container">
                    <h1>Create Your Account</h1>
                    <h2>NEAR Waller is a secure waller and accound
                        manager for your accounts on the NEAR blockchain
                    </h2>
                    <h2>Once you create an account, you'll need it to
                        interact with applications on NEAR, and to securely store your various tokens and collectibles (NFTS).
                    </h2>
                    <div id="learn-more-container">
                        <a href="https://near.org/" id="learn-more">
                            Learn more about NEAR
                            <img src={Arrow} alt="arrow" className="arrow-right1" />
                        </a>
                    </div>
                    <a href="" ></a>
                    <div id="get-started-container">
                        
                        <a href="https://wallet.near.org/set-recovery-implicit-account"className="get-started">
                            <span>Get Started</span>
                        </a>
                    </div>
                    <div id="policies-container">
                        <div id="policies">
                            <p>By creating a NEAR account, you agree to the MyNearWallet</p> 
                            <a href="https://wallet.near.org/terms"className="terms">Terms of Service</a> 
                            <span> and </span> 
                            <a href="https://wallet.near.org/privacy"className="privacy">Privacy Policy</a>
                        </div>
                    </div>
                    <div id="existing-container">
                        <p>Already have an account?</p>
                        <a href="/import" className="import-account">Import Existing Account</a>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default Create;
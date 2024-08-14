import "../css/import.css";
import ledgerIcon from "../images/icon-hardware-device.svg";
import phoneIcon from "../images/icon-recover-phone.svg";
import seedPhraseIcon from "../images/icon-recover-seedphrase.svg";
import emailIcon from "../images/icon-recover-email.svg";


function Import() {
  return (
    <div id="body-container" className="grey-text">
      <div className="desktop">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="lock-icon">
          <path
            d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
            stroke="#00C08B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
            stroke="#00C08B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <div>
          Please make sure you are visiting <span className="green-text">https://</span>
          <span className="black-text">wallet.near.org</span>
        </div>
      </div>
      <div id="body-child-container">
        <h1 className="black-text">Import Account</h1>
        <h2>
          If you've setup one or more account recovery methods, follow the instructions below to import your account.
        </h2>
        <div className="ia-components-container">
          <div className="ia-components">
            <div className="ia-components-header">
              <img src={emailIcon} alt="email icon" />
              <span className="black-text">Email</span>
            </div>
            <div className="ia-components-body grey-a-text">
              <p>
                Check your email for a message from near.org with the subject:
                <span> "Important: Near Wallet Recovery Email".</span>
              </p>
              <p>This message contains a magic link. Click the link to begin recovery!</p>
              <p>
                This message was sent when you enabled email/phone recovery.
                We only send this message once, and cannot resend it.
              </p>
            </div>
          </div>
          <div className="ia-components">
            <div className="ia-components-header">
              <img src={phoneIcon} alt="phone icon" />
              <span className="black-text">Phone</span>
            </div>
            <div className="ia-components-body grey-a-text">
              <p>
                Check your phone records for an SMS message from <span>+14086179592.</span>
              </p>
              <p>This message contains a magic link. Click the link to begin recovery!</p>
              <p>
                This message was sent when you enabled email/phone recovery.
                We only send this message once, and cannot resend it.
              </p>
            </div>
          </div>
          <div className="ia-components">
            <div className="ia-components-header">
              <img src={seedPhraseIcon} alt="seed phrase icon"/>
              <span className="black-text">Passphrase</span>
            </div>
            <div className="ia-components-body grey-a-text">
              <p>
                Make sure you have 12 word recovery phrase, then click below to begin the recovery process.
              </p>
              <a href="https://wallet.near.org/recover-seed-phrase"><button>Recover Account</button></a>
            </div>
          </div>
          <div className="ia-components">
            <div className="ia-components-header">
              <img src={ledgerIcon} alt="ledger icon" />
              <span className="black-text">Ledger</span>
            </div>
            <div className="ia-components-body grey-a-text">
              <p>
                Make sure your Ledger is connected securely, and that the NEAR app is open on the device.
              </p>
              <a href="https://wallet.near.org/sign-in-ledger"><button>Sign in with Ledger</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Import;
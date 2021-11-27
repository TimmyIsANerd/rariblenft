import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Transition } from "react-transition-group";
import Auth from "./Auth/Auth";
import Login from "./Auth/Login";
import NFTUploadForm from "./Form/NFTUploadForm";
import SignUp from "./Auth/SignUp";

// console.log(Rarepress)
const TWITTER_HANDLE = "timmyisanerd_";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

function App() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [networkMessage, setNetworkMessage] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const [AuthForm, setAuthForm] = useState(false);
  const defaultStyles = {
    transition: "opacity 300ms ease-in-out",
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  // Connection Status
  const connectionStatus = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      setNetworkMessage("Make sure you have MetaMask");
      return;
    } else {
      let chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("Connected to chain " + chainId);

      // String, hex code of the chainId of the Rinkebey test network
      const rinkebyChainId = "0x4";
      if (chainId !== rinkebyChainId) {
        setNetworkMessage(
          "You are not connected to the Rinkeby Test Network! Minting isn't possible!"
        );
        return true;
      } else if (chainId === rinkebyChainId) {
        setNetworkMessage("You are connected to the Rinkeby Test Network");
      }
    }
  };

  // const checkIfWalletIsConnected = async () => {
  //   const { ethereum } = window;

  //   if (!ethereum) {
  //     console.log("Make sure you have MetaMask");
  //     return;
  //   } else {
  //     connectionStatus();
  //     console.log("Wallet Connected", ethereum);
  //   }

  //   const accounts = await ethereum.request({ method: "eth_accounts" });

  //   // User can have multiple authorized accounts
  //   if (accounts.length !== 0) {
  //     const account = accounts[0];
  //     console.log("Found an authorized account:", account);
  //     setCurrentAccount(account);
  //     // setupEventListener();
  //   } else {
  //     console.log("No authorized account found");
  //   }
  // };

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const LogOutButton = () => {
    return (
      <button
        className="cta-button connect-wallet-button"
        onClick={() => logout()}
      >
        Log Out
      </button>
    );
  };

  const RenderIfConnected = () => {
    return (
      <div>
        <h1>Hello {user.get("username")}</h1>
        <NFTUploadForm />
        {/* <button className="cta-button connect-wallet-button">
          Mass Mint NFTs
        </button> */}
        <LogOutButton />
      </div>
    );
  };

  const LoginSwitch = () => {
    return (
      <div>
        <p className="gradient-text">
          Already have an account?
          <a onClick={() => setAuthForm(true)}> Login</a>
        </p>
      </div>
    );
  };

  const SignUpSwitch = () => {
    return (
      <div>
        <p className="gradient-text">
          Don't have an Account?
          <a onClick={() => setAuthForm(false)}> Sign Up</a>
        </p>
      </div>
    );
  };

  const FormSwitch = () => {
    return <div>{AuthForm ? <SignUpSwitch /> : <LoginSwitch />}</div>;
  };

  const messageStyle = {
    fontSize: "18px",
    margin: "15px auto",
    width: "60%",
  };

  const Rinkeby = () => (
    <div style={messageStyle} className="gradient-text">
      {networkMessage}
    </div>
  );

  useEffect(() => {
    connectionStatus();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <header className="App-header">
            <p className="header gradient-text">Free NFT Generator</p>
            <p className="sub-text">
              Each unique. Each beautiful. Discover your NFT today.
            </p>
            {connectionStatus ? <Rinkeby /> : ""}
            {isAuthenticated ? (
              <div>
                <RenderIfConnected />
              </div>
            ) : (
              <div>
                {AuthForm ? <Login /> : <SignUp />}
                <Auth />
                <FormSwitch />
              </div>
            )}
          </header>
        </div>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`@${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
}

export default App;

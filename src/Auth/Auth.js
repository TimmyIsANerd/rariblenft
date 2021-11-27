import { useMoralis } from "react-moralis";
const Auth = () => {
  const { authenticate,isAuthenticating} = useMoralis();
  return (
    <button
      className="cta-button connect-wallet-button"
      onClick={() => authenticate()}
    >
      {isAuthenticating ? "Authenticating..." : "Connect Via MetaMask"}
    </button>
  );
};

export default Auth;

import { useMoralis } from "react-moralis";
const Auth = () => {
  const { authenticate } = useMoralis();
  return (
    <button
      className="cta-button connect-wallet-button"
      onClick={() => authenticate()}
    >
      Connect Via MetaMask
    </button>
  );
};

export default Auth;

import { useState } from "react";
import { useMoralisFile } from "react-moralis";
 
const NFTUploadForm = () => {
  const [tokenName, setTokenName] = useState();
  const [description, setDescription] = useState();
  const [image, setImageFile] = useState(null);
  const [networkMessage, setNetworkMessage] = useState("");
  const { error, isUploading, moralisFile, saveFile } = useMoralisFile();

  const createNFT = async () => {
    // Make sure network is set to Rinkeby TestNet
    const { ethereum } = window;


    let chainId = await ethereum.request({ method: "eth_chainId" });
      // console.log("Connected to chain " + chainId);

      // // String, hex code of the chainId of the Rinkebey test network
      // const rinkebyChainId = "0x4";
      // if (chainId !== rinkebyChainId) {
      //   setNetworkMessage(
      //     "You are not connected to the Rinkeby Test Network! Minting isn't possible!"
      //   );
      //   return true;
      // } else if (chainId === rinkebyChainId) {
      //   setNetworkMessage("You are connected to the Rinkeby Test Network");
      //   let data = image;
      //   let metadata = {
      //     name: tokenName,
      //     description: description,
      //     image: "/ipfs/" + imageHash,
      //   };
      //   const NFTImage = saveFile(data.name, data, {
      //     type: "image/jpeg",
      //     metadata,
      //     saveIPFS: true,
      //   })
      //   await NFTImage.saveIPFS();

      //   let imageHash = NFTImage.hash();
      //   console.log(metadata);
      //   const jsonFile = saveFile("metadata.json",{base64 : btoa(JSON.stringify(metadata))});
      //   await jsonFile.saveIPFS();

      //   let metadataHash = jsonFile.hash();
      //   console.log(jsonFile.ipfs());

        // let res = await Moralis.Plugins.rarible.lazyMint({
        //   chain: 'rinkeby',
        //   userAddress: user.get('ethAddress'),
        //   tokenType: 'ERC721',
        //   tokenUri: 'ipfs://' + metadataHash,
        //   royaltiesAmount:5, // 0.05% royalty. Optional
        // })
        // console.log(res);
        
      }
  };

  return (
    // NFT Upload Form
    <div>
      <form onSubmit={() => createNFT()}>
        <div className="form_element">
          <input
            className="form_control"
            type="text"
            id="input_name"
            name="name"
            placeholder="Token Name"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
          />
        </div>
        <div className="form_element">
          <input
            className="form_control"
            type="text"
            id="input_description"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form_element">
          {/* <label for="upload" class="file-upload__label">
              Upload NFT
            </label> */}
          <input
            className="form_control file-upload__input"
            type="file"
            id="input_image"
            name="image"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              setImageFile(e.target.files[0]);
            }}
          />
        </div>
        <button
          className="cta-button connect-wallet-button"
          type="submit
        "
        >
        {isUploading ? "Minting NFT..." : "Mint NFT"}
        </button>
      </form>
    </div>
  );
};

export default NFTUploadForm;

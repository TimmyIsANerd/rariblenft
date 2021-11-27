import { useState } from "react";
const NFTUploadForm = () => {
  const [tokenName, setTokenName] = useState();
  const [description, setDescription] = useState();
  return (
    // NFT Upload Form
    <div>
      <form>
        <div className="form_element">
          <input
            className="form_control"
            type="text"
            id="input_name"
            name="name"
            placeholder="Token Name"
            value={tokenName}
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
          />
        </div>
        <button className="cta-button connect-wallet-button">Mint NFT</button>
      </form>
    </div>
  );
};

export default NFTUploadForm;

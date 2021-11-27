import { useState } from "react";
const NFTUploadForm = () => {
  const [tokenName, setTokenName] = useState();
  const [description, setDescription] = useState();
  const [imageFile, setImageFile] = useState(null);


  return (
    // NFT Upload Form
    <div>
      <form onSubmit={() =>{
        
      }}>
        <div className="form_element">
          <input
            className="form_control"
            type="text"
            id="input_name"
            name="name"
            placeholder="Token Name"
            value={tokenName}
            onChange={(e) => setTokenName
            (e.target.value)}
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
        <button className="cta-button connect-wallet-button" type="submit
        ">Mint NFT</button>
      </form>
    </div>
  );
};

export default NFTUploadForm;

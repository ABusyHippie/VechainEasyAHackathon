
import { useState } from "preact/hooks";
import FileUpload from "./FileUpload.tsx";
import ChainSubmit from "./ChainSubmit.tsx";

const UploadButton = () => {
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
//   const [buttonText, setButtonText] = useState("Submit Your Bill Now");

  const handleButtonClick = () => {
    setShowFileUpload(true);
    setButtonVisible(false);
    // console.log("Button clicked. showFileUpload:", showFileUpload);
    // setButtonText("Upload to VeChain");
  };

  return (
    <div>
      {buttonVisible && (
        <a href="#" id="btn-form" onClick={handleButtonClick}>Submit Your Bill Now</a>
      )}
      <br />
      {showFileUpload && (
        <>
          <FileUpload />
          <ChainSubmit />
        </>
      )}
    </div>
  );
};

export default UploadButton;

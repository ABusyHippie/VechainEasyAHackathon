
import { useState } from "preact/hooks";
import FileUpload from "./FileUpload.tsx";

const ChainSubmit = () => {
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [buttonText, setButtonText] = useState("Upload to VeChain");
  const [buttonClass, setButtonClass] = useState("btn-form");
//   const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setShowFileUpload(true);
    // console.log("Button clicked. showFileUpload:", showFileUpload);
    setButtonText("Submitted! B3TR On the Way");
    setButtonClass("btn-form-clicked");
  };

  return (
    <div><br />
      <a href="#" class={buttonClass} onClick={handleButtonClick}>{buttonText}</a>
    </div>
  );
};

export default ChainSubmit;

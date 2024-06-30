
import { useState } from "preact/hooks";
import FileUpload from "./FileUpload.tsx";

const ChainSubmit = () => {
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [buttonText, setButtonText] = useState("Upload to VeChain");
  const [buttonClass, setButtonClass] = useState("btn-form");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
//   const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = async () => {
    try {
        setShowFileUpload(true);
        setButtonText("Submitting..."); // Change text during fetch
        const response = await fetch('http://192.168.8.164:8000/endpoint'); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setButtonText("Submitted! B3TR On the Way");
        setButtonClass("btn-form-clicked"); // Change class after successful fetch
      } catch (error) {
        setError(error.message);
        setButtonText("Submission Failed"); // Change text on error
      }
  };

  return (
    <div><br />
      <a href="#" class={buttonClass} onClick={handleButtonClick}>{buttonText}</a>
    </div>
  );
};

export default ChainSubmit;

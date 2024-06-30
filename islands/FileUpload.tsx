/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

const FileUpload = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      setFileName(target.files[0].name);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {fileName && <p>Selected file: {fileName}</p>}
    </div>
  );
};

export default FileUpload;

import { useState } from "react";
import { File, Upload } from "lucide-react";

const VerificationForm = () => {
  const [files, setFiles] = useState([
    { name: "aadhar-card.pdf", type: "application/pdf" },
  ]);
  const [bankAccount, setBankAccount] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files).map((file) => ({
        name: file.name,
        type: file.type,
      }));
      setFiles([...files, ...newFiles]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        name: file.name,
        type: file.type,
      }));
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  return (
    <div className="bg-background text-text">
      <div className="max-w-lg mx-auto p-6 bg-background rounded-lg shadow-lg">
        <h2 className="text-xl font-medium mb-2">Step 4: Verification</h2>
        <p className="text-sm text-text/70 mb-6">
          Complete your verification to start receiving orders
        </p>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <label className="text-sm font-medium">
              Upload ID Proof (Aadhar, PAN, License)
            </label>
            <div className="ml-2 text-text/70 cursor-help">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
          </div>

          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragging
                ? "border-primary bg-primary/10"
                : "border-text/20 hover:border-text/30"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <div className="flex justify-center mb-2">
              <div className="bg-text/10 rounded-lg p-3">
                <File className="h-6 w-6 text-accent" />
              </div>
            </div>
            <p className="text-sm">
              Drag and drop your files here, or click to browse
            </p>
            <p className="text-xs text-text/60 mt-1">
              Supported formats: PDF, JPG, PNG (Max 5MB)
            </p>
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileInput}
              accept=".pdf,.jpg,.jpeg,.png"
              multiple
            />
          </div>

          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center mt-3 py-2 px-3 bg-text/5 rounded"
            >
              <div className="flex items-center text-secondary mr-2">
                <File size={16} />
              </div>
              <span className="text-sm flex-grow">{file.name}</span>
              <button
                className="text-text/60 hover:text-text transition-colors"
                onClick={() => removeFile(file.name)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 mb-6">
          <h3 className="text-sm font-medium mb-4">Bank Details</h3>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Upload className="h-4 w-4 text-text/60" />
              </div>
              <input
                type="text"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                className="w-full py-2 pl-10 pr-3 bg-text/5 border border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Bank Account Number"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-text/60 text-sm font-medium">₹</span>
              </div>
              <input
                type="text"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                className="w-full py-2 pl-10 pr-3 bg-text/5 border border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="IFSC Code"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-text/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-text/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={accountHolder}
                onChange={(e) => setAccountHolder(e.target.value)}
                className="w-full py-2 pl-10 pr-3 bg-text/5 border border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Account Holder Name"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="rounded border-text/20 text-primary shadow-sm focus:border-primary/50 focus:ring focus:ring-primary/20 focus:ring-opacity-50"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <span className="ml-2 text-sm">
              I agree to the platform's{" "}
              <a href="#" className="text-logoIt hover:underline">
                terms and policies
              </a>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;

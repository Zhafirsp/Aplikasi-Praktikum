import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Uploader() {

  const [selectedFile, setSelectedFile] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (event) => {
    if(event.target.files.length > 0){
      setSelectedFile(event.target.files[0]);
    }
  };

  const validateSelectedFile = () => {
    const MIN_FILE_SIZE = 2048  // 2MB
    const MAX_FILE_SIZE = 10240 // 10MB

    if (!selectedFile) {
      toast("Tolong pilih file terlebih dahulu !", {
        type: "error",
        theme: "colored",
      });
      setIsSuccess(false)
      return
    }

    const fileSizeKiloBytes = selectedFile.size / 1024

    if(fileSizeKiloBytes < MIN_FILE_SIZE){
      toast("Zip file too small !", {
        type: "error",
        theme: "colored",
      });
      setIsSuccess(false)
      return
    }
    if(fileSizeKiloBytes > MAX_FILE_SIZE){
      toast("File zip terlalu besar !", {
        type: "error",
        theme: "colored",
      });
      setIsSuccess(false)
      return
    }

    setErrorMsg("")
    toast("file berhasil diupload !", {
      type: "success",
      theme: "colored",
    });
    setIsSuccess(true)
  };

  return (
      <>
    <ToastContainer />
        <label for="formFile" class="form-label fw-bold">Lengkapi Dokumen (Wajib)</label>
        <p for="formFile" class="form-label text-muted">Unggah file dalam format zip dengan ukuran maksimal 10MB</p>
          <div class="mb-3">
          <input class="form-control" type="file" id="formFileMultiple" accept=".zip" name='file' onChange={handleFileChange}/>
          <button className="btn btn-primary col-3 mx-auto mt-4 float-end" onClick={validateSelectedFile}>
            Submit
          </button>
          <p className="error-message">{errorMsg}</p>
        </div>
    </>
  );
}
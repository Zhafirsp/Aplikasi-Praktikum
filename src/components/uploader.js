// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import GoogleDrivePicker from "./GoogleDrivePicker";

// export default function Uploader() {

//   const [selectedFile, setSelectedFile] = useState();
//   const [errorMsg, setErrorMsg] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleFileChange = (event) => {
//     if(event.target.files.length > 0){
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   const validateSelectedFile = () => {
//     const MIN_FILE_SIZE = 2048  // 2MB
//     const MAX_FILE_SIZE = 10240 // 10MB

//     if (!selectedFile) {
//       toast("Tolong pilih file terlebih dahulu !", {
//         type: "error",
//         theme: "colored",
//       });
//       setIsSuccess(false)
//       return
//     }

//     const fileSizeKiloBytes = selectedFile.size / 1024

//     if(fileSizeKiloBytes < MIN_FILE_SIZE){
//       toast("Zip file too small !", {
//         type: "error",
//         theme: "colored",
//       });
//       setIsSuccess(false)
//       return
//     }
//     if(fileSizeKiloBytes > MAX_FILE_SIZE){
//       toast("File zip terlalu besar !", {
//         type: "error",
//         theme: "colored",
//       });
//       setIsSuccess(false)
//       return
//     }

//     setErrorMsg("")
//     toast("file berhasil diupload !", {
//       type: "success",
//       theme: "colored",
//     });
//     setIsSuccess(true)
//   };

//   return (
//       <>
//     <ToastContainer />
//         <label htmlFor="formFile" className="form-label fw-bold">Lengkapi Dokumen (Wajib)</label>
//         <p htmlFor="formFile" className="form-label text-muted">Unggah file dalam format zip dengan ukuran maksimal 10MB</p>
//           <div className="mb-3">
//           <input className="form-control" type="file" id="formFileMultiple" accept=".zip" name='file' onChange={handleFileChange}/>
//           <GoogleDrivePicker/>
//           <button className="btn btn-primary col-3 mx-auto mt-4 float-end" onClick={validateSelectedFile}>
//             Submit
//           </button>
//           <p className="error-message">{errorMsg}</p>
//         </div>
//     </>
// //   );
// }

import React, { useState } from "react";
import GoogleDrivePicker from "./GoogleDrivePicker";

export default function Uploader() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file.data);
    const response = await fetch("v1/pendaftarans/3", {
      method: "POST",
      body: formData,
    });

    const responseWithBody = await response.json();
    if (response) setUrl(responseWithBody.publicUrl);
  };

  const handleFileChange = (e) => {
    const file = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(file);
  };
  return (
      <>
          <label htmlFor="formFile" className="form-label fw-bold">Lengkapi Dokumen (Wajib)</label>
          <p htmlFor="formFile" className="form-label text-muted">Unggah file dalam format zip dengan ukuran maksimal 10MB</p>
            <form className="mb-3" onSubmit={handleSubmit}>
              <GoogleDrivePicker/>
            <input className="form-control" type="file" id="formFileMultiple" accept=".zip" name='file' onChange={handleFileChange}/>
            <button className="btn btn-primary col-3 mx-auto mt-4 float-end" >
              Submit
            </button>
          </form>
      </>

  );
}
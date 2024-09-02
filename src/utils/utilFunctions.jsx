import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import services from "../../public/services.json";
import app from "../firebase/firebase.config";

export const utilFunctions = () => {
  const { initialApp, fireBaseStorageURL } = app;
  const storage = getStorage(initialApp, fireBaseStorageURL);

  const getCategoryFullForm = (shortForm) => {
    const service = services.find((service) => service.shortForm === shortForm);
    return service ? service.title : "Unknown Category";
  };

  const createUniqueFileName = (getFile) => {
    const timeStamp = Date.now();

    const randomStringValue = Math.random().toString(36).substring(2, 12);

    return `${getFile.name}-${timeStamp}-${randomStringValue}`;
  };

  const helperForUploadingImageToFirebase = async (folderName, file) => {
    const getFileName = createUniqueFileName(file);
    const storageReference = ref(storage, `${folderName}/${getFileName}`);
    const uploadImage = uploadBytesResumable(storageReference, file);

    return new Promise((resolve, reject) => {
      uploadImage.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref)
            .then((downloadUrl) => resolve(downloadUrl))
            .catch((error) => reject(error));
        }
      );
    });
  };

  const handleFileChange = async (
    folderName,
    event,
    setCover,
    setIsUploading
  ) => {
    setIsUploading(true);
    const extractImageUrl = await helperForUploadingImageToFirebase(
      folderName,
      event.target.files[0]
    );

    if (extractImageUrl !== "") {
      setCover(extractImageUrl);
      setIsUploading(false);
      /* setFormData({
        ...formData,
        imageUrl: extractImageUrl,
      }); */
    }
  };

  return { getCategoryFullForm, createUniqueFileName, handleFileChange };
};

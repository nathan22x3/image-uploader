import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import LoadingModal from 'components/image-uploader/loading-modal.component';
import SuccessModal from 'components/image-uploader/success-modal.component';
import UploadModal from 'components/image-uploader/upload-modal.component';
import { storage } from 'configs/firebase.config';
import { FunctionComponent, useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface ImageUploaderProps {}

const ImageUploader: FunctionComponent<ImageUploaderProps> = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState('');

  const handleUpload = async (image: File) => {
    const storageRef = ref(storage, `images/${image.name}`);
    setIsUploading(true);

    try {
      if (image) {
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        setDownloadURL(url);
        setIsUploading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => setDownloadURL('');

  return (
    <section css={tw`flex-1 flex justify-center items-center`}>
      {!downloadURL ? (
        !isUploading ? (
          <UploadModal onUpload={handleUpload} />
        ) : (
          <LoadingModal />
        )
      ) : (
        <SuccessModal {...{ downloadURL, onReset: handleReset }} />
      )}
    </section>
  );
};

export default ImageUploader;

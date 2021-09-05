import ChooseImageButton from 'components/image-uploader/choose-image-button.component';
import DragNDropImageZone from 'components/image-uploader/dnd-image-zone.component';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { ellipsisFilePath } from 'utils/string.util';

export interface UploadModalProps {
  onUpload: (image: File) => Promise<void>;
}

const UploadModal: React.FunctionComponent<UploadModalProps> = ({ onUpload }) => {
  const [image, setImage] = useState<File & Blob>();
  const [previewSrc, setPreviewSrc] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreviewSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="modal">
      <h3 css={tw`text-lg`}>Upload your image</h3>
      <span css={tw`mt-4 mb-7 text-xs`}>File should be jpeg, png,...</span>
      <DragNDropImageZone {...{ previewSrc }} />
      <span css={[tw`my-5`, !image && tw`text-gray-200`]}>
        {image ? `${ellipsisFilePath(image.name, 25)}` : 'Or'}
      </span>
      <div css={tw`space-x-3`}>
        <ChooseImageButton onChange={handleChange} />
        {image && (
          <button className="button" onClick={() => onUpload(image)}>
            Upload image
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadModal;

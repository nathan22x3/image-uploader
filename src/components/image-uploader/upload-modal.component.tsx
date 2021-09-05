import ChooseImageButton from 'components/image-uploader/choose-image-button.component';
import DragNDropImageZone from 'components/image-uploader/dnd-image-zone.component';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { ellipsisFilePath } from 'utils/string.util';

export interface UploadModalProps {
  onUpload: (image: File) => Promise<void>;
}

const UploadModal: React.FunctionComponent<UploadModalProps> = ({ onUpload }) => {
  const [image, setImage] = useState<File & Blob>();
  const [previewSrc, setPreviewSrc] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const { getRootProps } = useDropzone({
    accept: 'image/*',
    onDragEnter: () => setIsDragOver(true),
    onDragLeave: () => setIsDragOver(false),
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles[0]) {
        const file = acceptedFiles[0];
        if (!file.type.startsWith('image')) return;

        setImage(file);
        setPreviewSrc(URL.createObjectURL(file));
      }
      setIsDragOver(false);
    },
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.files && target.files[0]) {
      const file = target.files[0];
      if (!file.type.startsWith('image')) return;

      setImage(file);
      setPreviewSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div className="modal">
      <h3 css={tw`text-lg`}>Upload your image</h3>
      <span css={tw`mt-4 mb-7 text-xs`}>File should be jpeg, png,...</span>
      <div {...getRootProps()}>
        <DragNDropImageZone {...{ previewSrc, isDragOver }} />
      </div>
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

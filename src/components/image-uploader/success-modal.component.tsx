import { ReactComponent as CheckCircleIcon } from 'assets/images/check-circle.svg';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw, { css } from 'twin.macro';

export interface SuccessModalProps {
  downloadURL: string;
  onReset: () => void;
}

const SuccessModal: React.FunctionComponent<SuccessModalProps> = ({ downloadURL, onReset }) => {
  const [buttonText, setButtonText] = useState('Copy link');

  const handleCopyLink = async () => {
    setButtonText('Copied!');
    await navigator.clipboard.writeText(downloadURL);
    setTimeout(() => setButtonText('Copy link'), 5000);
  };

  return (
    <div className="modal">
      <CheckCircleIcon width={40} height={40} css={tw`text-green`} />
      <h3 css={tw`mt-3 mb-6 text-lg`}>Uploaded Successfully!</h3>
      <div
        css={[
          tw`w-full h-[224px] bg-contain bg-no-repeat bg-center`,
          css`
            background-image: url(${downloadURL});
          `,
        ]}
      />
      <div
        css={tw`flex items-center w-full p-1 pl-2 border border-gray-100 rounded-lg mt-6 mb-4 gap-x-3 bg-blue-lightest`}
      >
        <span css={tw`w-60 truncate text-sm`}>{downloadURL}</span>
        <button className="button" css={tw`w-24`} onClick={handleCopyLink}>
          {buttonText}
        </button>
      </div>
      <button className="button" onClick={onReset}>
        Upload another image
      </button>
    </div>
  );
};

export default SuccessModal;

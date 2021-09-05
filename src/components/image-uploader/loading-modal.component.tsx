/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface LoadingModalProps {}

const LoadingModal: React.FunctionComponent<LoadingModalProps> = () => {
  return (
    <div className="modal">
      <h3 css={tw`text-lg self-start`}>Uploading...</h3>
      <div css={tw`overflow-hidden w-full h-[6px] rounded-lg mt-7 bg-gray-50`}>
        <div css={tw`w-24 h-[inherit] rounded-lg bg-blue animate-loading`}></div>
      </div>
    </div>
  );
};

export default LoadingModal;

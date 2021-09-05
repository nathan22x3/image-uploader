/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface ChooseImageButtonProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ChooseImageButton: React.FunctionComponent<ChooseImageButtonProps> = ({ onChange }) => {
  return (
    <label htmlFor="file-upload" className="button">
      <input
        id="file-upload"
        type="file"
        accept="image/jpg, image/jpeg, image/png, image/svg"
        css={tw`sr-only`}
        {...{ onChange }}
      />
      <span>Choose a file</span>
    </label>
  );
};

export default ChooseImageButton;

import { ReactComponent as MountainSvg } from 'assets/images/mountain.svg';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface DragNDropImageZoneProps {
  previewSrc: string;
}

const DragNDropImageZone: React.FunctionComponent<DragNDropImageZoneProps> = ({ previewSrc }) => {
  return (
    <div
      css={[
        tw`flex flex-col justify-evenly items-center w-80 h-56 rounded-xl bg-blue-lightest`,
        !previewSrc && tw`border border-dashed border-blue-light`,
      ]}
    >
      {previewSrc ? (
        <img src={previewSrc} alt="Preview" css={tw`h-full object-contain`} />
      ) : (
        <>
          <MountainSvg />
          <span css={tw`text-gray-200`}>Drag &amp; Drop your image here</span>
        </>
      )}
    </div>
  );
};

export default DragNDropImageZone;

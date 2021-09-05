import { ReactComponent as MountainSvg } from 'assets/images/mountain.svg';
/** @jsxImportSource @emotion/react */
import tw, { css } from 'twin.macro';

export interface DragNDropImageZoneProps {
  previewSrc: string;
  isDragOver: boolean;
}

const DragNDropImageZone: React.FunctionComponent<DragNDropImageZoneProps> = (props) => {
  const { previewSrc, isDragOver } = props;

  return (
    <div
      css={[
        tw`flex flex-col justify-evenly items-center w-80 h-56 rounded-xl duration-200`,
        !previewSrc && tw`border-2 border-dashed border-blue-light bg-blue-lightest`,
        isDragOver && tw`border-green bg-green-lightest`,
      ]}
    >
      {previewSrc ? (
        <div
          css={[
            tw`w-full h-[224px] bg-contain bg-no-repeat bg-center`,
            css`
              background-image: url(${previewSrc});
            `,
          ]}
        />
      ) : (
        <>
          <MountainSvg />
          <span css={[tw`text-gray-200`, isDragOver && tw`text-green duration-200`]}>
            {isDragOver ? 'Drop here' : 'Drag & Drop your image here'}
          </span>
        </>
      )}
    </div>
  );
};

export default DragNDropImageZone;

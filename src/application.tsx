import Footer from 'components/containers/footer.component';
import ImageUploader from 'components/image-uploader';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = () => {
  return (
    <div css={tw`flex flex-col h-screen bg-[#fafafb]`}>
      <ImageUploader />
      <Footer />
    </div>
  );
};

export default Application;

/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer css={tw`py-6 font-montserrat text-sm text-center text-gray-300`}>
      <span>
        created by
        <a
          href="https://github.com/nathan22x3"
          target="_blank"
          rel="noopener noreferrer"
          css={tw`font-bold underline`}
        >
          {' '}
          nathan22x3{' '}
        </a>
        - devChallenges.io
      </span>
    </footer>
  );
};

export default Footer;

import styled from 'styled-components';
import media from '@utils/media';

const HeroTitle = styled.div`
  z-index: 2;
  position: relative;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;

  ${media.phoneLandscape`
    font-size: 38px;
    line-height: 56px;
    font-weight: bold;
  `}
`;

export default HeroTitle;

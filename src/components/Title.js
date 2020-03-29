import styled from 'styled-components';
import { space, typography } from 'styled-system';

import media from '@utils/media';

const Title = styled.div`
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

  ${space}
  ${typography}
`;

export default Title;

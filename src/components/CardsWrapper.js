import styled from 'styled-components';
import media from '@utils/media';

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.phoneLandscape`
    margin-top: 20px;
    justify-content: space-between;
  `};
`;

export default CardsWrapper;

import { css } from 'styled-components';

export const sizes = {
  reallySmall: ['max', 380],
  phoneLandscape: ['min', 576],
  tablet: ['min', 768],
  desktop: ['min', 992],
  large: ['min', 1200],
  larger: ['min', 1440],
  fullscreen: ['min', 1600],
  fullHd: ['min', 1920],
  ultrawide: ['min', 2560],
};

export const breakpoints = () => {
  let breakpoints = {}
  for(let b in sizes) {
    breakpoints[b] = sizes[b][1] 
  }
  return breakpoints
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (${sizes[label][0]}-width: ${sizes[label][1]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
import React from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';

import media from '../components/utils/media';
import colors from '../components/utils/colors';

import playButtonIcon from '../images/icons/playButton.svg';

const MineBar = ({ title, description }) => (
  <Wrapper>
    <InnerWrapper>
      <PlayButton src={playButtonIcon}></PlayButton>
      <StyledSlider
        min={0}
        max={32}
        defaultValue={0}
        step={null}
        marks={{
          0: '<$50K',
          4: '$70K',
          8: '$80K',
          12: '$90K',
          16: '$100K',
          20: '$120K',
          24: '$140K',
          28: '$160K',
          32: '$200K+',
        }}
      />
    </InnerWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  flex: 1;
  display: block;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 400px;
`;

const PlayButton = styled.img``;

const SliderWrapper = styled.div`
  margin-left: 10px;
`;
const StyledSlider = styled(Slider)`
  display: none !important;
  ${media.tablet`
    
    display: flex !important;
    position: relative;
    height: 40px;
    padding: 5px 0;
    width: 100%;
    border-radius: 6px;
    -ms-touch-action: none;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    .rc-slider-rail {
      position: absolute;
      width: 100%;
      background-color: red;
      height: 8px;
      border-radius: 6px;
    }

    .rc-slider-track {
      display: none;
      background: #2BB8C0;
      display: flex;
      z-index: 3;
      height: 8px;
    }

    .rc-slider-handle {
      position: absolute;
      margin-left: -7px;
      margin-top: -6px;
      width: 18px;
      height: 18px;
      cursor: pointer;
      cursor: -webkit-grab;
      cursor: grab;
      border-radius: 50%;
      border: solid 3px ;
      background-color: #fff;
      -ms-touch-action: pan-x;
      touch-action: pan-x;
      z-index: 4;
      &:focus {
        outline: none;
      }

      &:hover {
        border-color: blue;
      }

      &:active {
        border-color: blue;
        box-shadow: 0 0 5px blue;
        cursor: -webkit-grabbing;
        cursor: grabbing;
      }
    }

    .rc-slider-mark {
      position: absolute;
      top: 24px;
      left: 0;
      width: 100%;
      font-size: 12px;
    }

    .rc-slider-mark-text {
      position: absolute;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      color: black;
    }

    .rc-slider-mark-text-active {
      color: black;
    }

    .rc-slider-step {
      position: absolute;
      width: 100%;
      height: 8px;
      background: transparent;
    }

    .rc-slider-dot {
      position: absolute;
      bottom: 0;
      margin-left: -4px;
      width: 8px;
      height: 8px;
      border: 2px solid gray;
      background-color: gray;
      cursor: pointer;
      border-radius: 50%;
      vertical-align: middle;
    }

    .rc-slider-dot-active {
      border: 2px solid #2BB8C0;
      background-color: #2BB8C0;
    }

    .rc-slider-disabled {
      background-color: #e9e9e9;
    }

    .rc-slider-disabled .rc-slider-track {
      background-color: #ccc;
    }

    .rc-slider-disabled .rc-slider-handle,
    .rc-slider-disabled .rc-slider-dot {
      border-color: #ccc;
      box-shadow: none;
      background-color: #fff;
      cursor: not-allowed;
    }

    .rc-slider-disabled .rc-slider-mark-text,
    .rc-slider-disabled .rc-slider-dot {
      cursor: not-allowed !important;
    }

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  `};
`;

export default MineBar;

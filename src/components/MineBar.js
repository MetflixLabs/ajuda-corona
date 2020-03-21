import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';

import media from '../components/utils/media';
import colors from '../components/utils/colors';

import playButtonIcon from '../images/icons/playButton.svg';
import sneezingEmojiIcon from '../images/icons/sneezingEmoji.svg';
import thermoEmojiIcon from '../images/icons/thermoEmoji.svg';
import maskEmojiIcon from '../images/icons/maskEmoji.svg';

const MineBar = () => {
  const [currentThrottle, setCurrentThrottle] = useState(0);

  return (
    <Wrapper>
      <InnerWrapper>
        {/* <PlayButton src={playButtonIcon}></PlayButton> */}
        <StyledSlider
          defaultValue={0}
          step={1}
          marks={{
            0: 'poko',
            50: 'medio',
            100: 'frita',
          }}
          onChange={value => setCurrentThrottle(value)}
          currentThrottle={currentThrottle}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: block;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 400px;
`;

const PlayButton = styled.img`
  cursor: pointer;
  margin-right: 30px;
`;

const StyledSlider = styled(Slider)`
  display: flex !important;
  position: relative;
  height: 40px;
  padding: 5px 0;
  min-width: 390px;
  border-radius: 8px;
  -ms-touch-action: none;
  touch-action: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: ${colors.white};
    height: 20px;
    border-radius: 8px;
  }

  .rc-slider-track {
    display: none;
    background: ${colors.gray};
    display: flex;
    z-index: 3;
    height: 20px;
    border-radius: 8px;
  }

  .rc-slider-handle {
    background-image: ${props =>
      props.currentThrottle < 50
        ? `url(${sneezingEmojiIcon})`
        : props.currentThrottle < 100
        ? `url(${thermoEmojiIcon})`
        : `url(${maskEmojiIcon})`};
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    margin-top: -8px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    cursor: -webkit-grab;
    cursor: grab;
    -ms-touch-action: pan-x;
    touch-action: pan-x;
    z-index: 4;
    &:focus {
      outline: none;
    }

    &:active {
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
    height: 20px;
    background: transparent;
  }

  .rc-slider-dot {
    display: none;
    position: absolute;
    bottom: 0;
    margin-left: -4px;
    width: 8px;
    height: 20px;
    border: 2px solid gray;
    background-color: gray;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
  }

  .rc-slider-dot-active {
    border: 2px solid #${colors.gray};
    background-color: #${colors.gray};
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
`;

export default MineBar;

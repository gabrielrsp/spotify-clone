import React from "react";

import Slider from "rc-slider";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";

import ShuffleIcon from "../../assets/images/shuffle.svg";

import BackwardIcon from "../../assets/images/backward.svg";

import PlayIcon from "../../assets/images/play.svg";

import PauseIcon from "../../assets/images/pause.svg";

import ForwardIcon from "../../assets/images/forward.svg";

import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/Dark_Side_of_the_Moon.png/220px-Dark_Side_of_the_Moon.png"
        alt="cover"
      />

      <div>
        <span>Time</span>
        <small>Pink Floyd</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play" />
        </button>
        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>7:05</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);
export default Player;

import React, { Component } from 'react';
import {getImage, getAudio} from '../FileUtils';

class AudioButton extends Component {
    state = {
        audio: getAudio(this.props.audioId, this.props.lang),
        img: getImage(this.props.imgId, this.props.lang)
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.onAudioPlay(this.state.audio)} className="btn btn-secondary btn-sm">
                    <img src={this.state.img} width="100" />
                </button>
            </React.Fragment>
        );
    }
}

export default AudioButton;
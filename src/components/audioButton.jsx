import React, { Component } from 'react';
import {getImage, getAudio} from '../FileUtils';

class AudioButton extends Component {
    render() {
        const audio = getAudio(this.props.audioId, this.props.selectedLang);
        const img = getImage(this.props.imgId, this.props.selectedLang);
        return (
            <React.Fragment>
                <button onClick={() => this.props.onAudioPlay(audio)} className="btn btn-secondary btn-sm m-1" disabled={audio === undefined}>
                    <img src={img} width="100"/>
                </button>
            </React.Fragment>
        );
    }
}

export default AudioButton;
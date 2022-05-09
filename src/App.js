import React, {Component} from 'react';
import NavBar from './components/navbar';
import AudioButton from './components/audioButton';
import Counters from './components/counters';
import {getStickers} from './FileUtils';
import './App.css';

//thanks Programming with Mosh!

class App extends Component {
    state = {
            lang: "en",
            stickers: getStickers()

    };
    /*
    stickers: [
                    {audioId: 1, imgId: 10001},
                    {audioId: 2, imgId: 10002}
                ],
    */
    handleAudioPlay = (audio) => {
        new Audio(audio).play();
    };

    render(){
            return (
                <React.Fragment>
                    <NavBar
                        totalCounters={5}
                    />
                    <main className="container">
                        <AudioButton
                            onAudioPlay={this.handleAudioPlay}
                        />
                        {this.state.stickers.map(sticker => (
                            <AudioButton
                                key={sticker.audioId}
                                onAudioPlay={this.handleAudioPlay}
                                audioId={sticker.audioId}
                                imgId={sticker.imgId}
                                lang={this.state.lang}
                            />
                        ))}
                    </main>
                </React.Fragment>
            );
    }
}

export default App;

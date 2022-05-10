import React, {Component} from 'react';
import NavBar from './components/navbar';
import AudioButton from './components/audioButton';
import LangButton from './components/langButton';
import Counters from './components/counters';
import {getStickers} from './FileUtils';
import './App.css';

//thanks Programming with Mosh!

class App extends Component {
    state = {
            selectedLang: "en",
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

    handleChangeLang = (lang) => {
        const selectedLang = lang;
        this.setState({selectedLang});
    }

    render(){
            return (
                <React.Fragment>
                    <NavBar/>
                    <main className="container">
                        <div class = "text-center">
                        <LangButton
                            lang = "en"
                            selectedLang = {this.state.selectedLang}
                            onChangeLang = {this.handleChangeLang}
                        />
                        <LangButton
                            lang = "jp"
                            selectedLang = {this.state.selectedLang}
                            onChangeLang = {this.handleChangeLang}
                        />
                        </div>
                        {this.state.stickers.map(sticker => (
                            <AudioButton
                                key={sticker.audioId}
                                onAudioPlay={this.handleAudioPlay}
                                audioId={sticker.audioId}
                                imgId={sticker.imgId}
                                selectedLang={this.state.selectedLang}
                            />
                        ))}
                    </main>
                </React.Fragment>
            );
    }
}

export default App;

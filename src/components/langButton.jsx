import React, { Component } from 'react';

class LangButton extends Component {
    styles = {
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Arial'
    };

    render() {
        return (
            <React.Fragment>
                <button className="m-5" style={this.styles} onClick={() => this.props.onChangeLang(this.props.lang)} className={this.getBadgeClasses()}>
                    {this.props.lang.toUpperCase()}
                </button>
            </React.Fragment>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 btn-lg badge-";
        classes += (this.props.lang !== this.props.selectedLang) ? "secondary" : "primary";
        return classes;
    }
}

export default LangButton;
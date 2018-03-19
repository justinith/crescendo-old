import React, { Component } from 'react';

class InputTypeButtons extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: this.props.user
        }

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    componentDidMount(){
        
    }

    handleAnswer(e){
        this.props.returnAnswer(e.target.value);
    }

    render() {

        let buttons = this.props.buttonOptions.map((option,index) => 
            <button key={option} onClick={this.handleAnswer} value={option}>{option}</button>
        );

        return (
            <div>
                {buttons}
            </div>
        );
    }
}

export default InputTypeButtons;
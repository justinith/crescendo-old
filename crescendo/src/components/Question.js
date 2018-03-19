import React from 'react';
import InputBar from './InputBar';

class Question extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            questionName: this.props.qData.questionName,
            questionText: this.props.qData.data.question
        }

        this.questionAnswered = this.questionAnswered.bind(this);
    }

    componentWillReceiveProps(newProps){
        this.setState({questionName:newProps.qData.questionName});
        this.setState({questionText:newProps.qData.data.question});
    }

    componentDidMount(){

    }

    questionAnswered(answer){
        console.log("The answer to " + this.state.questionName + " is: " + answer);
        // Store the answer in FB, then...
        this.props.qAnswered(this.state.questionName);
    }

    render() {
        return (
            <div>
                <p>{Math.random()}</p>
                <h1>{this.state.questionText}</h1>
                <InputBar inputType={this.props.qData.data.inputType} inputParams={this.props.qData.data.inputParams} returnAnswer={this.questionAnswered}/>
            </div>
        );
    }
}

export default Question;
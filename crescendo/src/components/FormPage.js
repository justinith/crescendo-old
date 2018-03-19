import React, { Component } from 'react';
import Question from './Question';

class FormPage extends React.Component {

    /*
    Page Logic:
    - When the form starts, we identify the first question to show
    - When the question is answered, we store that answer
    - we then show the next question
    - on the last question, we show a success page
    */

    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            totalQCount: 6,
            totalAnswered: 0,
            answeredQs: [],
            getNextQuestion: true
        }

        this.getNextQuestionInfo = this.getNextQuestionInfo.bind(this);
        this.moveToNextQuestion = this.moveToNextQuestion.bind(this);
        this.incrementAnswersCount = this.incrementAnswersCount.bind(this);

        // All the questions
        this.formQs = {
            'productivity': {
                read: {
                    inputType: 'button',
                    inputParams: ['Yes','No'],
                    question: 'Did you read today?'
                },
                paint: {
                    inputType: 'button',
                    inputParams: ['Yes','No'],
                    question: 'Did you paint today?'
                },
                hack: {
                    inputType: 'button',
                    inputParams: ['Yes','No'],
                    question: 'Did you hack today?'
                }
            },
            'health': {
                workout: {
                    inputType: 'button',
                    inputParams: ['No','Cardio','Strength','Bouldering','Other'],
                    question: 'Did you work out today?',
                    conditionals: [
                        {
                            trigger: ['Cardio','Strength','Bouldering','Other'],
                            nextQ: {
                                intensity: {
                                    inputType: 'scale',
                                    inputParams: {
                                        type: 'count',
                                        min: '0',
                                        max: '5'
                                    },
                                    question: 'How intense did you work out?'
                                }
                            }
                        }
                    ]
                },
                timeToBed: {
                    inputType: 'scale',
                    inputParams: {
                        type: 'time',
                        min: '18:00',
                        max: '4:00'
                    },
                    question: 'When did you go to sleep last night?'
                },
                wakeUpTime: {
                    inputType: 'scale',
                    inputParams: {
                        type: 'time',
                        min: '5:00',
                        max: '12:00'
                    },
                    question: 'When did you wake up today?'
                }
            }
        }
    }

    moveToNextQuestion(questionName){
        console.log("The answer for " + questionName + " is stored!");


        let pastAnsweredQuestions = this.state.answeredQs;
        pastAnsweredQuestions.push(questionName);

        let newCount = this.state.totalAnswered;
        newCount++;
        this.setState({
            totalAnswered: newCount
        });

        this.setState({answeredQs:pastAnsweredQuestions});
    }

    incrementAnswersCount(){
        let newCount = this.state.totalAnswered + 1;
        this.setState({totalAnswered:newCount});
    }

    getNextQuestionInfo(){
        for (var bucket in this.formQs){
            var questions = this.formQs[bucket];
            for(var question in questions){
                if(this.state.answeredQs.indexOf(question) < 0){
                    let qData = {
                        "bucket": bucket,
                        "questionName": question,
                        "data": questions[question]
                    };
                    return qData;
                }
            }
        }
    }

    componentDidMount(){

    }

    render() {
        let questionData = this.getNextQuestionInfo();
        let question = <Question uid={this.state.user.uid} qData={questionData} qAnswered={this.moveToNextQuestion} />

        return (
            <div>
                {question}
            </div>
        );
    }
}

export default FormPage;
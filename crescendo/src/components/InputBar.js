import React from 'react';
import InputTypeButtons from './InputTypeButtons';

class InputBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: this.props.user
        }
    }

    componentDidMount(){
        
    }

    render() {
        let buttonType;
        if(this.props.inputType === "button"){
            buttonType = <InputTypeButtons buttonOptions={this.props.inputParams} returnAnswer={this.props.returnAnswer} />;
        } else {
            buttonType = <div>Scale</div>;
        }

        return (
            <div>
                {buttonType}
            </div>
        );
    }
}

export default InputBar;
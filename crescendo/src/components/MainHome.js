import React from 'react';

class MainHome extends React.Component {

    constructor(props){
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount(){
        
    }

    changePage(e){
        this.props.startForm(e.target.value);
    }

    render() {
        return (
            <div>
                <button onClick={this.changePage} value="form">Start Today</button>
                <button onClick={this.changePage} value="review">Your Progress</button>
            </div>
        );
    }
}

export default MainHome;
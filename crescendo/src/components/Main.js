import React, { Component } from 'react';
import FormPage from './FormPage';
import MainHome from './MainHome'
import './main.css';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            pageState: 'form'
        }
        this.showPage = this.showPage.bind(this);
        this.changePageState = this.changePageState.bind(this);
    }

    componentDidMount(){
        
    }

    showPage(){
        if(this.state.pageState == 'home'){
            return <Component>Home Page</Component>;
        } else if(this.state.pageState == 'form'){
            return <FormPage user={this.state.user} />;
        } else {
            return "<div>Review Page</div>";
        }
    }

    changePageState(newPage){
        console.log("The page is " + newPage);
        this.setState({pageState: newPage});
    }

    render() {
        let page;
        // Core Page logic
        if(this.state.pageState == 'home'){
            page = <MainHome startForm={this.changePageState} />;
        } else if(this.state.pageState == 'form'){
            page = <FormPage user={this.state.user} />;
        } else {
            page = <div>Review Page</div>;
        }

        return (
            <div>
                <div className="nav">
                    <h3>Crescendo</h3>
                    <button className="logOutButton">Log Out</button>
                </div>
                {page}
            </div>
        );
    }
}

export default Main;
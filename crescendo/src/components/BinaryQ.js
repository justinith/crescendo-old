import React, { Component } from 'react';
import firebase from './firebase.js';
import moment from 'moment';

class BinaryQ extends React.Component {
    constructor() {
        super();
        this.db = firebase.firestore();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        this.db.collection("users").doc(this.props.uid).collection(this.props.category).doc(moment().format('MM-DD-YYYY')).collection("actions").doc(this.props.action).set({
            didRead: e.target.value
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef);
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <button onClick={this.handleSubmit} value="yes">Yes</button>
                <button onClick={this.handleSubmit} value="no">No</button>
            </div>
        );
    }
}

export default BinaryQ;
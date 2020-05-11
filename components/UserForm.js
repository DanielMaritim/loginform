import React, { Component } from 'react'

export class UserForm extends Component {

    state = {
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    //next step

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step:step + 1
        });
    }

    //previous step

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm

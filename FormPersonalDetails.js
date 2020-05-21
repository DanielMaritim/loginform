import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        const { values, handleChange } = this.props;


        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                        hintText='Enter Your First Occupatin'
                        floatingLabelText='Occcupation'
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <b />
                    <TextField
                        hintText='Enter Your City'
                        floatingLabelText='City '
                        onChange={handleChange('City')}
                        defaultValue={values.city}
                    />
                    <b />
                    <TextField
                        hintText='Enter Your Bio'
                        floatingLabelText='Bio'
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <b />
                    <RaisedButton
                        label='Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />

                    <RaisedButton
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}
export default FormPersonalDetails;
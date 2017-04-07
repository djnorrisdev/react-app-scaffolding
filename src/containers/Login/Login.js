import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Intent, InputGroup } from '@blueprintjs/core';
import { loginUser } from 'redux/modules/auth';
import styles from './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleUpdate(e) {
        let name = e.target.name;
        let val = e.target.value;
        this.setState({[name]: val});
    }

    loginOnEnter(e) {
        if (e.key === 'Enter') {
            this.logIn();
        }
    }

    handleLogin(e) {
        e.preventDefault();
        this.logIn();
    }

    logIn() {
        if (this.state.username && this.state.password) {
            this.props.loginUser({
                username: this.state.username,
                password: this.state.password
            });
        }
    }

    render() {
        return (
            <div className={styles.login}>
                <InputGroup
                    className={styles.input}
                    type='text'
                    name='username'
                    placeholder='Your email address...'
                    leftIconName='user'
                    onChange={this.handleUpdate.bind(this)}
                />
                <InputGroup
                    className={styles.input}
                    type='password'
                    name='password'
                    placeholder='Enter your password...'
                    leftIconName='lock'
                    onChange={this.handleUpdate.bind(this)}
                    onKeyPress={this.loginOnEnter.bind(this)}
                />
                <Button iconName='log-in' intent={Intent.PRIMARY} onClick={this.handleLogin.bind(this)}>Login</Button>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired
};

export default connect(null, {loginUser})(Login);

import React, { Component } from 'react';
import logo from '../birb.png';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';

class Bird extends Component {
    state = { socialsOpen: false }
    toggleChildSocials = () => {
        this.setState({ socialsOpen: !this.state.socialsOpen })
    }

    render() {
        return (
            <div>
                <button className="Bird-button" onClick={this.toggleChildSocials}>
                    <img src={logo} className="Bird-logo" alt="logo" />
                </button>
                <SocialsGithub socialsOpen={this.state.socialsOpen}/> 
            </div>
        );
    };
}

class SocialsGithub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    componentDidUpdate(props) {
        if (this.props.socialsOpen !== this.state.open) {
            this.setState({ open: props.socialsOpen })
        }
    }

    toggleSocials() {
        this.setState({
            open: true
        })
    }

    render() {
        return (
            <div> 
                <a href="https://twitter.com/JumpyJacko" className={"twitter"+this.handleClasses()}><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                <a href="https://github.com/JumpyJacko" className={"github"+this.handleClasses()}><FontAwesomeIcon icon={faGithub} size="lg"/></a>
                <a href="https://twitch.tv/JumpyJacko" className={"twitch"+this.handleClasses()}><FontAwesomeIcon icon={faTwitch} size="lg"/></a>
                <div className="about">
                    Hey, I'm Jackson Ly (JumpyJacko) and I'm currently learning to code.
                </div>
            </div>
        );
    };

    handleClasses() {
        if (this.state.open === true) {
            let classes = "is_revealing";
            return classes;
        } else {
            let classes = "socials";
            return classes;
        }
    };
}

export default Bird;

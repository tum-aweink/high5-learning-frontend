import React from 'react';

import Footer from '../Footer/Footer';
import LogInButton from '../User/LogInButton';
import LogIn from '../User/ModalDialogLogIn';
import Register from '../User/ModalDialogRegister'
import './LandingPage.css';

/*
Landing Page. Appears if you are not logged in only.
 */
export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.onClickLogInButton = this.onClickLogInButton.bind(this);
        this.onClickRegisterButton = this.onClickRegisterButton.bind(this);
        this.onClickCancelModalDialog = this.onClickCancelModalDialog.bind(this);

        this.state = {
            modalDialogVisibility: false,
            modalDialogClass: "register"
        };
    }

    onClickRegisterButton(){
        this.setState({
            modalDialogVisibility: true,
            modalDialogClass: "register"
        });
    }

    onClickLogInButton(){
        this.setState({
            modalDialogVisibility: true,
            modalDialogClass: "logIn"
        });
    }

    onClickCancelModalDialog(){
        this.setState({
            modalDialogVisibility: false
        });
    }

    render() {
        const images = [
            {
                url: '/static/images/grid-list/breakfast.jpg',
                title: 'LogIn',
                width: '40%',
            },
            {
                url: '/static/images/grid-list/burgers.jpg',
                title: 'Register',
                width: '30%',
            }
        ];

        if(this.state.modalDialogClass === "logIn"){
            return (
                <div>
                    <h1>Welcome to High5-Learning</h1>
                    <LogIn cancel={this.onClickCancelModalDialog} visible={this.state.modalDialogVisibility}/>
                    <div className="buttonDiv">
                        <LogInButton onClickCallback={this.onClickLogInButton} content={images[0]}/>
                        <LogInButton onClickCallback={this.onClickRegisterButton} content={images[1]}/>
                    </div>
                    <section>
                        <Footer/>
                    </section>
                </div>
            );
        }else{
            return (
                <div>
                    <h1>Welcome to High5-Learning</h1>
                    <Register cancel={this.onClickCancelModalDialog} visible={this.state.modalDialogVisibility}/>
                    <div className="buttonDiv">
                        <LogInButton onClickCallback={this.onClickLogInButton} content={images[0]}/>
                        <LogInButton onClickCallback={this.onClickRegisterButton} content={images[1]}/>
                    </div>
                    <section>
                        <Footer/>
                    </section>
                </div>
            );
        }
    }
}
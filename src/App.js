import Wrapper from './hoc/Wrapper';
import './scss/style.scss';
import SlideGift from './components/SlideGift/SlideGift';
import Header from './components/Header/Header';
import Rules from './components/Rules/Rules';
import Footer from './components/Footer/Footer';
import GameSlide from './components/GameSlide/GameSlide';
import SlideAction from './components/SlideAction/SlideAction';
import SlideInstruction from './components/SlideInstruction/SlideInstruction';
import GameInfo from './components/GameInfo/GameInfo';
import FormAdd from "./components/Form/FormAdd";
import React from "react";
import Modal from "./components/Modal/Modal";
import ModalError from "./components/Modal/ModalError";
import ModalSuccess from "./components/Modal/ModalSuccess";
import {Route, useRouteMatch, useHistory} from "react-router-dom";
import { FormConfirmation } from './components/Form/FormConfirmation';

function App() {
    const match = useRouteMatch("/add");
    const history = useHistory();
    console.log("match", match);
    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <SlideGift/>
                <Rules/>
                {/* <GameSlide/> */}
                {/* <GameInfo/> */}
                {/* <SlideAction/>
                <Wrapper>
                    <SlideInstruction/>
                </Wrapper> */}
                <Route
                    path="/add/step-1"
                    children={({match}) => {
                        return (
                            Boolean(match) &&
                            <Modal history={history}>
                                <FormAdd/>
                            </Modal>
                        )
                    }}
                />

                {/* если стайет пуст, не показывать роуты ниже */}
                <Route
                    path="/add/step-2"
                    children={({match}) => {
                        return (
                            Boolean(match) &&
                            <Modal history={history}>
                                <FormConfirmation/>
                            </Modal>
                        )
                    }}
                />
                <Route
                    path="/add/success"
                    children={({match}) => {
                        return (
                            Boolean(match) &&
                            <Modal history={history} closeBtn={false}>
                                <ModalSuccess/>
                            </Modal>
                        )
                    }}
                />

                
                <Route
                    path="/add/error"
                    children={({match}) => {
                        return (
                            Boolean(match) &&
                            <Modal history={history} closeBtn={false}>
                                <ModalError/>
                            </Modal>
                        )
                    }}
                />


                <Footer/>
            </div>

        </div>
    );
}

export default App;

import Wrapper from './hoc/Wrapper';
import './scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import FormAdd from "./components/Form/FormAdd";
import React from "react";
import Modal from "./components/Modal/Modal";
import ModalError from "./components/Modal/ModalError";
import ModalSuccess from "./components/Modal/ModalSuccess";
import {Route, useRouteMatch, useHistory} from "react-router-dom";
import { FormConfirmation } from './components/Form/FormConfirmation';
import Home from "./components/Home";

function App() {
    const match = useRouteMatch("/add");
    const history = useHistory();
    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <Home />
                {/*<SlideGift/>*/}
                {/*<Rules/>*/}
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
                            <Modal history={history} size="small">
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
                            <Modal history={history} size="small">
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
                            <Modal history={history} size="small" closeBtn={false}>
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
                            <Modal history={history} size="small" closeBtn={false}>
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

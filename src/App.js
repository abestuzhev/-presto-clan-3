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
import FormAdd from "./components/FormAdd/FormAdd";
import React from "react";
import Modal from "./components/Modal/Modal";
import {Route, useRouteMatch, useHistory} from "react-router-dom";

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
                <GameSlide/>
                <GameInfo/>
                <SlideAction/>
                <Wrapper>
                    <SlideInstruction/>
                </Wrapper>
                <Route
                    path="/add"
                    children={({match}) => {
                        return (
                            Boolean(match) &&
                            <Modal history={history}>
                                <h3 className="c-title c-title--h3">Зарегистрировать чек</h3>
                                <FormAdd/>
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

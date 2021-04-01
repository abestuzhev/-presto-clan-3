import { Link } from "react-router-dom";
import Wrapper from "../../hoc/Wrapper";
import React from "react";

const Header = (props) => {

    return (
        <>
        <header className="header pink">
            <Wrapper>
                <div className="header-grid">
                    <div className="header-col">
                        <Link to="/" className="header-logo">Клан Престо</Link>
                    </div>
                    <div className="header-col">
                        {/* <nav className="header-menu">
                            <Link to="#regulations" className="c-btn medium c-btn--default c-btn--text">Правила участия</Link>
                            <Link to="#game" className="c-btn medium c-btn--default c-btn--text">Игра «Мафия»</Link>
                        </nav> */}
                        <Link to="/add/step-1" className="c-btn medium c-btn--primary">Добавить чек</Link>
                    </div>
                </div>
            </Wrapper>
        </header>

    </>
    )
}

export default Header;
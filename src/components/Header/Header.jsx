const { Link, Route, useRouteMatch, useHistory } = require("react-router-dom")
const { default: Wrapper } = require("../../hoc/Wrapper")

const Header = (props) => {
    const match = useRouteMatch("/add");
    const history = useHistory();
    console.log("match", match);
    return (
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
                        </nav>
                        <Link to="/add" className="c-btn medium c-btn--primary">Добавить купон</Link> */}
                    </div>
                </div>
                
                {/* <Link to="/add" className="c-link">Add coupon</Link> */}

                <Route 
                    path="/add"
                    children={({match}) => {
                        return (
                            Boolean(match) 
                                ? <div className="c-modal">
                                    <button onClick={() => history.goBack()}>закрыть</button>
                                </div> 
                                : null
                            
                        )
                    }}
                />
            </Wrapper>
            
        </header>
    )
}

export default Header;
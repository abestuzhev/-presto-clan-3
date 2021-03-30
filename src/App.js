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

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />    
        <SlideGift />        
        <Rules />
        {/* <GameSlide/>
        <GameInfo/>
        
        <SlideAction />
        <Wrapper>
          <SlideInstruction/>
        </Wrapper> */}

        <Footer/>
      </div> 
        
    </div>
  );
}

export default App;

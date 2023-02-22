
import Articles from "../Articles/Articles";
import Header from "../Header/Header";
import Headline from "../Headline/Headline";
import News from "../News/News";

function App() {
  return (
    <div className="App">
    <Header />

    <div className="homepage-upper">
        <div className="headline">
          <Headline />
        </div>
        <div className="news">
          <News />
        </div>
    </div>

    <div className="articles-container">
    <Articles />
    </div>
    


  
  <p className="attribution">
    <div>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</div> 
    <div>Coded by <a href="#">Phoebe Leung</a>.</div>
  </p>
    </div>
  );
}

export default App;

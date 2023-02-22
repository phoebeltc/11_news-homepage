
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

    {/* Article */}
    <div>
    01
    Reviving Retro PCs
    What happens when old PCs are given modern upgrades?

    02
    Top 10 Laptops of 2022
    Our best picks for various needs and budgets.

    03
    The Growth of Gaming
    How the pandemic has sparked fresh opportunities.

    </div>
    


  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
    </div>
  );
}

export default App;

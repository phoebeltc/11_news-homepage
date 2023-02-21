
import Header from "../Header/Header";
import Headline from "../Headline/Headline";

function App() {
  return (
    <div className="App">
    <Header />

    <div>
      <div>
        <Headline />
      </div>


    {/* New */}
    <div>
    New 

    Hydrogen VS Electric Cars
    Will hydrogen-fueled cars ever catch up to EVs?

    The Downsides of AI Artistry
    What are the possible adverse effects of on-demand AI image generation?

    Is VC Funding Drying Up?
    Private funding by VC firms is down 50% YOY. We take a look at what that means.

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

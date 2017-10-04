import React from "react";
import Google from "./Google";
import Calendar from "./Calendar";
import News from "./News";
import WoD from "./WoD";
import Yelp from "./Yelp";

const App = () =>
<div className='container'>
  <div className='row'>

    <div id ='calendar' className='square'>
    <Calendar/>
    </div>

    <div id='newsbox' className='square'>
    <News/>
    </div>

    <div className='square' id='newsbox'>
    <WoD/>
    </div>

  </div>

  <div className='row'>

    <div className='square'>
    </div>

    <div className='square'>
    <Google />
    </div>

    <div className='square' id='newsbox'>
    <Yelp />
    </div>


  </div>

  <div className='row'>

    <div className='square'>
    </div>

    <div className='square'>
    </div>

    <div className='square'>
    </div>

  </div>
</div>

export default App;

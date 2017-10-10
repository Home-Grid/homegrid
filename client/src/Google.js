import React, {
  Component
} from 'react';


export default class Google extends Component {
  componentDidMount(i){
    if (i){
    i.preventDefault();
  }

  }




  render() {
    return (
      <div>
      <h1 className='projecttitle'> 
      <h1 id ="letter1" className="letter">H</h1>
      <h1 id ="letter2" className="letter">o</h1>
      <h1 id ="letter3" className="letter">m</h1>
      <h1 id ="letter4" className="letter">e</h1>
      <h1 id ="letter5" className="letter">G</h1>
      <h1 id ="letter6" className="letter">r</h1>
      <h1 id ="letter7" className="letter">i</h1>
      <h1 id ="letter8" className="letter">d</h1>
      </h1>
      <img className='homepic' height='30px' src="Untitled-1.png"/>
      <form action="./results.html">
      <input class="search-input" id ="searchbox" name="q" size="35" type="text"/>
      </form>

    </div>
  )
}
}

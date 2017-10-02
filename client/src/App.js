import React from "react";
import Google from "./Google";
import Calendar from "./Calendar";

const App = () =>
<div class='container'>
<div class='row'>
<div id ='calendar' class='square'>
<Calendar/>
</div>
<div class='square'>
</div>
<div class='square'>
</div>
</div>
<div class='row'>
<div class='square'>
</div>
<div class='square'>
<Google />
</div>
<div class='square'>
</div>
</div>
<div class='row'>
<div class='square'>
</div>
<div class='square'>
</div>
<div class='square'>
</div>
</div>
</div>

export default App;

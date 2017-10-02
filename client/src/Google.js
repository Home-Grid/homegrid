import React, {
  Component
} from 'react';


export default class Google extends Component {
  componentDidMount(){
var cx = '015072022119486944339:qglhajlqals';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }

  render() {
    return (
      <div>

    </div>
  )
}
}

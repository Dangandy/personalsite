import React from "react"

function generate_random_list(string_length, string_list, y){
  let random_ascii;
  let random_string = '';
  let ascii_list = [32, 9617, 9619]; //9618 //9608
  for(let i = 0; i < string_length; i++) {
    random_ascii = (Math.floor(Math.random() * 3));
    // string_list.append("blah")
    random_string += String.fromCharCode(ascii_list[random_ascii])
  }
  return random_string
}

class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.font = "18px Courier";
    // ctx.fillStyle = "#2d2a2e";
    ctx.fillStyle = "green";
    for (var j = 0; j < 7; j++) {
      for (var i = 0; i < 40; i++){
        ctx.fillText(generate_random_list(1), i*10.00142 + 3, j*30);
      }
    }

    window.addEventListener('scroll', function(e) {
      console.log(window.scrollY)
      // console.log(window.scrollY % 4 == 0)
      if (window.scrollY % 20 == 0){
      }
      // ctx.fillText(generate_random_string(300), 0, 0);
      // ctx.fillText(generate_random_string(300), 0, 150 + window.scrollY);
    });
  }

  render() {
    // console.log(this)
    return(
      <canvas className={this.props.classname} ref="canvas"/>
    )
  }
}


export default Canvas

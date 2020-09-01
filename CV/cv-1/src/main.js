let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 你好，这里是我建议滑着走!
接下来我要给这段内容加样式了，
我要加的样式是 */
#div1 {
    border: red solid 1px;
    width: 200px;
    height: 200px;
}
/* 然后将这个正方形变成一个圆 */
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 黑白填充 */
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 阴阳鱼 */
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let n = -1;
let string2 = "";

let step = () => {
  setTimeout(() => {
    if (n >= string.length - 1) {
      return;
    }
    ++n;
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    step();
  }, 10);
};

step();

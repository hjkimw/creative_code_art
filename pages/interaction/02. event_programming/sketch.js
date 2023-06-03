new p5((p) => {

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(220);
  };

  p.draw = () => {
    // mouseIsPressed속성으로 마우스가 눌려있는지 확인
    console.log(p.mouseIsPressed);

    if (p.mouseIsPressed) {
      // p.background(220);
      p.circle(p.mouseX + p.random(-10, 10), p.mouseY + p.random(-10, 10), p.random(100));
    }
  };

  // mousePress function으로 마우스가 눌릴때 함수 실행문을 실행한다.
  p.mousePressed = () => {
    p.background(p.random(250), p.random(250), p.random(250));
  };

});

const { innerWidth: w, innerHeight: h } = window;

new p5((p) => {
  const circleSize = 200;
  let x = 0,
      y = 0;

  p.setup = () => {
    p.createCanvas(w, h);
  };

  // setup function이 최초로 실행된 이후에 지속적으로 실행된다. ( animation )
  p.draw = () => {
    // background함수에 의해 캔버스가 초기화되고 위에 그려지는 동작이 반복하게된다.
    p.background(220);

    const Xposition = x <= w ? (x += 10) : (x = 0);
    const Yposition = y <= h ? (y += 5) : (y = 0);
    p.circle(Xposition, Yposition, circleSize);

    // random(number)
    // console.log(p.random(400)); // 0 ~ 400의 값을 랜덤하게 지속적으로 뽑아낸다.
    //p.circle(p.random(w), p.random(w), p.random(w) / 6);
  };
});

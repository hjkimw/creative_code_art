// 화면 좌표 학습
let _p = null;

new p5((p) => {
  console.log(p);

  // parameter를 global variable에 할당
  _p = p;

  p.setup = () => {
    const { innerWidth, innerHeight } = globalThis;

    p.createCanvas(innerWidth, innerHeight);
    p.background(220);

    const circleSize = 100;
    // circle(x, y, z)
    // p.circle(0, 0, circleSize);
    // p.circle(400, 0, circleSize);
    // p.circle(0, 400, circleSize);

    // top-left
    p.circle(circleSize, circleSize, circleSize);
    // middle-left
    p.circle(circleSize, innerHeight / 2, circleSize);
    // bottom-left
    p.circle(innerWidth - circleSize, circleSize, circleSize);

    // top-middle
    p.circle(innerWidth / 2, circleSize, circleSize);
    // bottom-middle
    p.circle(innerWidth / 2, innerHeight - circleSize, circleSize);

    // top-right
    p.circle(circleSize, innerHeight - circleSize, circleSize);
    // middle-right
    p.circle(innerWidth - circleSize, innerHeight / 2, circleSize);
    // bottom-right
    p.circle(innerWidth - circleSize, innerHeight - circleSize, circleSize);

    // center
    p.circle(innerWidth / 2, innerHeight / 2, circleSize * 2);

    // interaction
    const circleAni = (event) => {
      window.addEventListener(event, ({ clientX, clientY }) => {
        p.circle(clientX, clientY, circleSize);
      });
    };
    // circleAni("mousemove");
    // circleAni("click");
  };

  // p.draw = () => {};
});

console.log(_p); // v

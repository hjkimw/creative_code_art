const { innerWidth: w, innerHeight: h } = window;

new p5((p) => {
  p.setup = () => {
    p.createCanvas(w, h);
    p.background(220);
  };

  // setup function이 최초로 실행된 이후에 실행된다.
  p.draw = () => {

    // random(number)
    // console.log(p.random(400)); // 0 ~ 400의 값을 랜덤하게 지속적으로 뽑아낸다.
    p.circle(p.random(w), p.random(w), p.random(w) / 6);
    
  };
});

new p5((p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(220);
  };

  p.draw = () => {
    window.addEventListener("keydown", (e) => {
      // 의도하지 않은 이벤트실행 방지
      if (e.key === "a" || e.key === "q") {
        const circleSize = p.random(100);

        p.circle( p.mouseX + p.random(-10, 10), p.mouseY + p.random(-10, 10), circleSize );
      }
    });
  };
});

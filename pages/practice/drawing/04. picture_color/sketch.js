new p5((p) => {
  p.setup = () => {
    const { innerWidth: w, innerHeight: h } = globalThis;
    const squareSize = 100,
          alpha = 100;

    p.createCanvas(w, h);
    p.background(220);

    p.rect(100, 100, squareSize);

    // fill(v1, v2, v3, [alpha])
    p.fill(255, 0, 255, alpha); // magenta color set
    p.rect(150, 150, squareSize);

  };
  
  // p.draw = () => {};
});

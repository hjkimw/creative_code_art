new p5((p) => {
  p.setup = () => {
    const { innerWidth: w, innerHeight: h } = globalThis;

    p.createCanvas(w, h);
    p.background(220);

    // point(x, y, [z])
    // p.point(w / 2, h / 2); // center position

    // rect(x, y, w, [h], [tl], [tr], [br], [bl])
    // rect(x, y, w, h, [detailX], [detailY])

    // p.rect(100, 100);
    // p.rect(100, 100, 100, 50);
    const squareSize = 500,
      squareSizeHalf = squareSize / 2;

    p.rect(w / 2 - squareSizeHalf, h / 2 - squareSizeHalf, squareSize);
  };

  // p.draw = () => {};
});

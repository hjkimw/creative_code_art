new p5((p) => {
  p.setup = () => {
    const { innerWidth: w, innerHeight: h } = globalThis;

    p.createCanvas(w, h);
    p.background(220);

    // stroke 색 설정 (그려지기 이전에 설정해야한다.)
    p.stroke("blue");

    // stroke 굵기 설정 (그려지기 이전에 설정해야한다.)
    p.strokeWeight(10);

    // 그림이 그려지기 이전에 색상을 채워줘야한다.
    // fill("red")메서드 이후에 등장하는 도형은 빨간색
    p.fill("red");
    p.rect(100, 100, 100);
    p.circle(100, 200, 100);

    // fill("blue")메서드 이후에 등장하는 도형은 파랑색
    p.fill("blue");
    p.rect(100, 200, 100);

    // noFill()메서드 이후에 등장하는 도형은 빈 색상
    p.noFill();
    p.rect(200, 200, 100);
  };
  // p.draw = () => {};
});

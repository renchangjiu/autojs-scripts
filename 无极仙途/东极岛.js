auto.waitFor();
setScreenMetrics(1080, 2400);

// 岛的点击位置
let island = [662, 1546];

let pts = [
    [322, 1585], [537, 1848], [527, 1460],
]

click(island[0], island[1]);
sleep(2000);

while (true) {
    click(pts[0][0], pts[0][1]);
    sleep(2000);

    click(pts[1][0], pts[1][1]);
    sleep(1000);

    click(pts[2][0], pts[2][1]);
    sleep(1000);

}
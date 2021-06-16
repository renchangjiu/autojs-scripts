auto.waitFor();
setScreenMetrics(1080, 2400);
// 坐标, 依次为: 金, 木, 水, 火, 土.
let pts = [[540, 430], [950, 770], [790, 1180], [320, 1160], [130, 780]];

while (true) {
    for (let pt of pts) {
        click(pt[0], pt[1]);
        sleep(2000);
        toastLog(pt[0] + ", " + pt[1])
    }
}

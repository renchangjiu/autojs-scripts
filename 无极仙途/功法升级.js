auto.waitFor();
setScreenMetrics(1080, 2400);

let tabs = [
    [135, 285], [408, 285], [670, 285], [940, 285],
    [135, 390], [408, 390], [670, 390],
];

let pts = [
    [840, 730], [840, 960], [840, 1180], [840, 1410], [840, 1630], [840, 1860],
]
while (true) {
    for (let tab of tabs) {
        // 切换tab
        click(tab[0], tab[1]);
        sleep(2000);
        for (let pt of pts) {
            click(pt[0], pt[1]);
            sleep(2000);
            toastLog(pt[0] + ", " + pt[1])
        }
    }
}


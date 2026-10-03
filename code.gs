function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('短距離得点板')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function doTask2() {
  var SERVICE_KEY = '50677d2550677d2550677d25865016cb815506750677d250ed589def29b43f96a81b492';
  var GROUP_NAME = 'whoinrussia';
  var NUMBER_POST = 5;
  var url = 'https://api.vk.com/method/wall.get?&access_token=' + SERVICE_KEY + '&domain=' + GROUP_NAME + '&v=5.103';
  var response = UrlFetchApp.fetch(url); 
  var jsonObj = JSON.parse(response); 
  headerPrint()
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  for (let i = 0; i < (NUMBER_POST + 1); i++) { 
    var cell = sheet.getActiveSheet().getRange(i+2, 1).setValue(jsonObj['response']['items'][i]['id']);
    var cell = sheet.getActiveSheet().getRange(i+2, 2).setValue(parseData(jsonObj['response']['items'][i]['date']));
    var cell = sheet.getActiveSheet().getRange(i+2, 3).setValue(jsonObj['response']['items'][i]['text']);
    
    var url_image = jsonObj['response']['items'][i]['attachments'][0]['photo']['sizes'][2]['url'];
    var image_height = jsonObj['response']['items'][i]['attachments'][0]['photo']['sizes'][2]['height'];
    var cell = sheet.getActiveSheet().setRowHeight(i+2, (image_height + 10));
    var cell = sheet.getActiveSheet().insertImage(url_image,4,i+2);
  }
}


function parseData(timeStamp) {
        var date = new Date()
        date.setTime(timeStamp*1000)
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if (minutes == 0) {
          minutes = '00';
          }
        var seconds = date.getSeconds();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        return day + "." + month + "." + year + " " + hours + ":" + minutes; 
    }

function headerPrint() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var cell = sheet.getActiveSheet().getRange(1, 1).setValue('id Поста');
  var cell = sheet.getActiveSheet().getRange(1, 2).setValue('Дата');
  var cell = sheet.getActiveSheet().getRange(1, 3).setValue('Подпись');
  var cell = sheet.getActiveSheet().getRange(1, 4).setValue('Картинка из поста (не ссылка)');
    }

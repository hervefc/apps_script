function pickRandomMenu() {
  
  // getting reference to sheet1
  var sheet_db = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Idées de repas');
  var sheet_menu = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Menu');
  
  // clearing previous picked menu
  sheet_menu.getRange('A2:G2').clearContent();
  
  // getting menuList
  var menuList = sheet_db.getRange('B2:B').getDisplayValues();
  
  // getting the picked menus list
  var pickedMenuList = sheet_menu.getRange('A2:G2').getDisplayValues();
  
  // determining how many menus there are to for a random number generator
  var menuListCount = 0;
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i][0] != "") {
      menuListCount++;
    }
  }
    
  // picking random number/menu
  var randomNumber = Math.floor(Math.random() * menuListCount + 1);
  var pickedMenu = menuList[randomNumber - 1][0];
  var menuArray = new Array();
    
  for (var i = 0; i < menuList[i][0].length; i++) {
    menuArray.push(menuList[i][0])
  }
    
  var filteredArray = menuArray.filter(function(n){ return n != '' });
    
  // displaying random menu
  sheet_menu.getRange('a2:g2').setValue(pickedMenu);

    
  // checking if menu picked is in menu picked list
  for (var i = 0; i < pickedMenuList[0].length; i++) {
      pickedMenuList[0][i] = pickedMenu;
      randomNumber = Math.floor(Math.random() * filteredArray.length); 
      pickedMenu = filteredArray[randomNumber - 1];
      filteredArray[randomNumber - 1].splice;
  }

  // displaying new menu list picked
  sheet_menu.getRange('a2:g2').setValues(pickedMenuList);
}
  

/** @OnlyCurrentDoc */

function sendEmail() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var currentCell = sheet.getCurrentCell();
  var currentRow = currentCell.getRowIndex();
  var numRows = 1;
  // Fetch the range of cells from first column of current row selection to column K
  var dataRange = sheet.getRange(currentRow, 1, numRows, 11);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  var row = data[0];
  
  
  var contact = row[0]; // First Column
  var emailAddress = row[3]; // Fourth Column
  var project_name = '\"' + row[4] + '\"'; // Fifth Column
  var request_type = row[10]; // Eleventh Column
    
  // Status value depends on
  // Data Validation in Spreadsheet
  
  function getRevisionStatus() {
    var status_data = row[1];
    var revision_status;
      
    switch(status_data) {
      case "Delayed":
        revision_status = 'has been delayed';
        break;
      case "On Hold":
        revision_status = 'is on hold for the moment';
        break;
      case "Completed":
        revision_status = 'has been revised';
        break;
      case "Cancelled":
        revision_status = 'has been cancelled';
        break;
   // add new conditionals here if needed         
      default:
        revision_status = 'is in our task list';
    }
    return revision_status;
  }

  function getSubject() {
    var status_data = row[1];
    var subject;
      
    switch(status_data) {
      case "Delayed":
        subject = 'Your request has been delayed';
        break;
      case "On Hold":
        subject = 'Your request is on hold';
        break;
      case "Completed":
        subject = 'Your request has been completed';
        break;
      case "Cancelled":
        subject = 'Your request has been cancelled';
        break;
   // add new conditionals here if needed         
      default:
        subject = 'Update on your request';
    }
    return subject;
  }
    
  var status = getRevisionStatus();
  var subject = getSubject();
  
  var newDate = new Date(); // Get Current Date
  var strDate = newDate.toLocaleDateString('en-CA'); // Transform to yyyy-mm-dd format
    
  // Write Message to Send
  var message = `Hi, \n\nJust writing to inform you that your request ${project_name} for ${request_type} by ${contact} ${status} as of ${strDate} \n\nBest regards,\n${contact}`;
  // Send Email
  MailApp.sendEmail(emailAddress, subject, message);
  
  // Change Background Color for Status back to White
  var highlightRange = sheet.getRange(currentRow, 2, 1, 1);  
  highlightRange.setBackground('#ffffff');
  
};

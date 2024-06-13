/**
 * Registers Google Sheets content to Google Calendar
 */
function registerSheetToCalendar() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var calendarId = 'your_calendar_id';
  var calendar = CalendarApp.getCalendarById(calendarId);
  
  // Get the data from the sheet
  var data = sheet.getDataRange().getValues();
  
  // Create events from the data
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var start = row[1];
    var end = row[2];
    var description = row[3];
    
    var event = {
      'summary': title,
      'location': '',
      'description': description,
      'start': {
        'dateTime': start
      },
      'end': {
        'dateTime': end
      }
    };
    
    calendar.createEvent(event);
  }
}
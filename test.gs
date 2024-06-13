/**
 * Test file for the script.
 */
function testCreateEventsFromSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = [
    ['Title', 'Start Date', 'End Date', 'Description'],
    ['Event 1', '2023-03-01', '2023-03-02', 'This is event 1'],
    ['Event 2', '2023-03-05', '2023-03-06', 'This is event 2']
  ];
  
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  
  createEventsFromSheet();
  
  var calendarId = 'your_calendar_id';
  var calendar = CalendarApp.getCalendarById(calendarId);
  var events = calendar.getEvents(new Date('2023-03-01'), new Date('2023-03-07'));
  
  Logger.log(events);
}
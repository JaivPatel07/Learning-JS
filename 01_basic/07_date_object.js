// =================================================================
// Creating Date Objects
// =================================================================

let myDate = new Date();  //  Creates a new Date object with the current date and time.


// =================================================================
// Date Formatting Methods
// =================================================================

console.log(myDate.toString());  
//  Converts the date to a string, e.g., "Sat Nov 22 2025 05:11:13 GMT+0000 (Coordinated Universal Time)".

console.log(myDate.toDateString());  
//  Shows only the date part, e.g., "Sat Nov 22 2025".

console.log(myDate.toTimeString());  
//  Shows only the time part, e.g., "05:11:13 GMT+0000 (Coordinated Universal Time)".

console.log(myDate.toLocaleString());  
//  Shows date and time in a locale-specific format, e.g., "11/22/2025, 5:11:13 AM".

console.log(myDate.toLocaleDateString());  
//  Shows only the date part in a locale-specific format, e.g., "11/22/2025".

console.log(myDate.toLocaleTimeString());  
//  Shows only the time part in a locale-specific format, e.g., "5:11:13 AM".

console.log(myDate.toISOString());  
//  Returns the date in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ), useful for APIs.

console.log(myDate.toJSON());  
//  Returns a JSON representation of the date, which is the same as toISOString().


// =================================================================
// Creating Specific Dates
// =================================================================

//  Using numbers: new Date(year, monthIndex, day, hours, minutes, seconds, ms).
//  Note: Months are 0-indexed (0 for January, 11 for December).
let myCreatedDate = new Date(2023, 0, 23);  //  Creates a date for January 23, 2023.
console.log(myCreatedDate.toDateString());  //  "Mon Jan 23 2023".

let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 3);  //  With time specified.
console.log(myCreatedDateWithTime.toLocaleString());  //  "1/23/2023, 5:03:00 AM".

//  Using a date string. The "YYYY-MM-DD" format is generally the safest.
let myCreatedDateFromString = new Date("2023-01-14");
console.log(myCreatedDateFromString.toLocaleString());  //  "1/14/2023, 12:00:00 AM".

//  Another common format is "MM-DD-YYYY".
let anotherDateFromString = new Date("01-14-2023");
console.log(anotherDateFromString.toLocaleString());  //  "1/14/2023, 12:00:00 AM".


// =================================================================
// Timestamps (Milliseconds since Epoch)
// =================================================================

//  Date.now() returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
let myTimeStamp = Date.now();
console.log(myTimeStamp);  //  e.g., 1763759473000.

//  You can get the timestamp from a specific date object as well.
console.log(myCreatedDate.getTime());  //  e.g., 1674432000000.

//  To get the timestamp in seconds (common in other systems), divide by 1000.
console.log(Math.floor(Date.now() / 1000));  //  e.g., 1763759473.


// =================================================================
// Getter Methods (Getting components of a date)
// =================================================================

let newDate = new Date();

console.log(newDate.getFullYear());  //  Gets the 4-digit year, e.g., 2025.

console.log(newDate.getMonth() + 1);  //  Gets the month (0-11), so add 1 for human-readable format, e.g., 11 for November.

console.log(newDate.getDate());  //  Gets the day of the month (1-31), e.g., 22.

console.log(newDate.getDay());  //  Gets the day of the week (0 for Sunday, 6 for Saturday), e.g., 6 for Saturday.

console.log(newDate.getHours());  //  Gets the hour (0-23), e.g., 5.

console.log(newDate.getMinutes());  //  Gets the minute (0-59), e.g., 11.

console.log(newDate.getSeconds());  //  Gets the second (0-59), e.g., 13.

console.log(newDate.getMilliseconds());  //  Gets the millisecond (0-999).


// =================================================================
// Setter Methods (Modifying components of a date)
// =================================================================

let modifiableDate = new Date();

modifiableDate.setFullYear(2026);  //  Sets the year to 2026.
console.log(modifiableDate.toDateString());

modifiableDate.setMonth(0);  //  Sets the month to January (index 0).
console.log(modifiableDate.toDateString());

modifiableDate.setDate(15);  //  Sets the day of the month to 15.
console.log(modifiableDate.toDateString());


// =================================================================
// Advanced Formatting with toLocaleString
// =================================================================

//  You can format the output of toLocaleString with an options object.
let formattedDate = newDate.toLocaleString('default', {
  weekday: "long",  //  Can be "short" or "narrow".
  year: 'numeric',  //  Can be "2-digit".
  month: 'long',  //  Can be "short" or "numeric".
  day: 'numeric'
});

console.log(formattedDate);  //  e.g., "Saturday, November 22, 2025".

// =================================================================
// Date Rollover Behavior (e.g., Month > 11)
// =================================================================

//  If you provide a month value greater than 11, the date "rolls over" to the next year.
//  Month 12 becomes January of the next year, month 13 becomes February, and so on.
let rolloverDate = new Date(2023, 12, 23);  //  Month index 12 is one past December.
console.log(rolloverDate.toDateString());  //  "Tue Jan 23 2024" - The year incremented to 2024.

//  This also works with the setMonth() method.
let anotherRollover = new Date(2023, 0, 31);  //  Jan 31, 2023
anotherRollover.setMonth(13);  //  Setting month to 13 (February of the next year).
console.log(anotherRollover.toDateString());  //  "Sat Feb 29 2024" - Note it also correctly handles the leap year!


// =================================================================
// Using Different Locales
// =================================================================

//  Instead of 'default', you can specify a BCP 47 language tag to format the date for a specific language/region.
let localeTestDate = new Date();

const localeOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };

console.log(localeTestDate.toLocaleString('en-US', localeOptions));  //  e.g., "Saturday, November 22, 2025"

console.log(localeTestDate.toLocaleString('en-GB', localeOptions));  //  e.g., "Saturday, 22 November 2025"

console.log(localeTestDate.toLocaleString('hi-IN', localeOptions));  //  e.g., "शनिवार, 22 नवंबर 2025"

console.log(localeTestDate.toLocaleString('ja-JP', localeOptions));  //  e.g., "2025年11月22日土曜日"
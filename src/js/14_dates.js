

// There are two ways to deal with dates in JavaScript: the built-in Date object and Temporal API (introduced in ECMAScript 2022).
// The Date object provides methods for working with dates and times, while the Temporal API offers a more modern and comprehensive approach to handling dates and times.


//////////////////////////////////////////////
// Date Object
//////////////////////////////////////////////

/*
Creating dates in JavaScript can be done using the built-in Date object. 
The Date object provides various methods to work with dates and times. 
Here are some examples of how to create and manipulate dates in JavaScript:
*/

const date1 = new Date(); // Creates a new Date object with the current date and time
const date2 = new Date('2024-01-01'); // Creates a Date object for January 1, 2024
const date3 = new Date(2024, 0, 1); // Creates a Date object for January 1, 2024 (months are zero-indexed)
const date4 = new Date(2024, 0, 1, 12, 30, 0); // Creates a Date object for January 1, 2024 at 12:30:00

// Displaying the date
console.log(date1.toString()); // Displays the current date and time. For example: "Wed Sep 15 2024 14:48:00 GMT-0700 (Pacific Daylight Time)"
console.log(date2.toDateString()); // Displays the date in a human-readable format. For example: "Tue Jan 01 2024"
console.log(date3.toISOString()); // Displays the date in ISO format. For example: "2024-01-01T00:00:00.000Z"
console.log(date4.toLocaleString()); // Displays the date and time in the local format. For example: "1/1/2024, 12:30:00 PM"
console.log(date4.toUTCString()); // Displays the date and time in UTC format. For example: "Tue, 01 Jan 2024 20:30:00 GMT"


// Parsing Dates

// JavaScript Long Dates.
// Long dates are most often written with a "MMM DD YYYY" syntax like this:

const d = new Date("Mar 25 2015");
// Month and day can be in any order:

const d2 = new Date("25 Mar 2015");
// And, month can be written in full(January), or abbreviated(Jan):

const d3 = new Date("January 25 2015");
const d4 = new Date("Jan 25 2015");
// Commas are ignored.Names are case insensitive:

const d5 = new Date("JANUARY, 25, 2015");

// Date Input - Parsing Dates
// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// Date.parse() returns the number of milliseconds between the date and January 1, 1970:

let msec = Date.parse("March 21, 2012");
// You can then use the number of milliseconds to convert it to a date object:

let msec = Date.parse("March 21, 2012");
const d6 = new Date(msec);


// Get Date Methods
const d7 = new Date();
d7.getMonth()	// Get month as a number(0 - 11)
d7.getDate()	// Get day as a number(1 - 31)

d7.setMonth(11)	// Set month as a number(0 - 11)

//////////////////////////////////////////////
// Temporal Object
//////////////////////////////////////////////
/*
The Temporal API is a modern and comprehensive approach to handling dates and times in JavaScript. 
It provides a more intuitive and powerful way to work with dates and times compared to the Date object.
/he Temporal API includes several classes, such as Temporal.PlainDate, Temporal.PlainTime, Temporal.ZonedDateTime, and more, which allow for better handling of time zones, durations, and other date - related operations.
*/

/*
The problems with the Date object include:
1. Mutability: Date objects are mutable, which can lead to unintended side effects when modifying dates.
2. Time Zone Handling: The Date object does not handle time zones well, leading to confusion when working with dates across different time zones.
3. Month Indexing: Months are zero-indexed (0-11), which can be counterintuitive and lead to off-by-one errors.
4. Limited Functionality: The Date object lacks many features that are commonly needed when working with dates, such as better formatting options, support for durations, and more intuitive methods for date manipulation.
5. Inconsistent Parsing: The Date object can parse date strings in a variety of formats, but the behavior can be inconsistent across different browsers and environments, leading to potential bugs and confusion.
The Temporal API addresses these issues by providing immutable date and time objects, better time zone handling, and a more comprehensive set of features for working with dates and times.
*/

/*
Types of Temporal Objects:
1. Temporal.PlainDate: Represents a date without a time zone.
2. Temporal.PlainTime: Represents a time without a date or time zone.
3. Temporal.ZonedDateTime: Represents a date and time with a time zone.
4. Temporal.Duration: Represents a duration of time, such as a number of days, hours, or minutes.
5. Temporal.Instant: Represents a specific point in time, independent of any time zone.
6. Temporal.Calendar: Represents a calendar system, such as the Gregorian calendar.
7. Temporal.TimeZone: Represents a time zone, such as "America/New_York" or "UTC".
8. Temporal.PlainDateTime: Represents a date and time without a time zone.
*/

//////////////////////////////////////////////
// Duration Object
//////////////////////////////////////////////

// The Temporal.Duration object represents a duration of time, such as a number of days, hours, or minutes.
// You can create a Temporal.Duration object using the Temporal.Duration.from() method, which takes an object with properties for the duration you want to create. For example:
const duration = Temporal.Duration.from({ days: 5, hours: 3, minutes: 30 });

// You can also create a Temporal.Duration object using the Temporal.Duration.from() method with an ISO 8601 duration string. For example:
const duration2 = Temporal.Duration.from("P5DT3H30M");

// Once you have a Temporal.Duration object, you can perform various operations on it, such as adding it to a Temporal.PlainDate or Temporal.ZonedDateTime object. For example:
const date = Temporal.PlainDate.from("2024-01-01");
const newDate = date.add(duration);

// You can also perform operations on the Temporal.Duration object itself, such as adding two durations together. For example:
const duration3 = Temporal.Duration.from({ days: 2, hours: 1 });
const totalDuration = duration.add(duration3);

// Additionally, you can use the Temporal.Duration object to calculate the difference between two Temporal.PlainDate or Temporal.ZonedDateTime objects. For example:
const date1 = Temporal.PlainDate.from("2024-01-01");
const date2 = Temporal.PlainDate.from("2024-01-10");
const difference = date2.since(date1); // This will give you a Temporal.Duration object representing the difference between the two dates.


// We can also modify the Temporal.Duration object using methods like with() to create a new duration with modified properties. For example:
const modifiedDuration = duration.with({ hours: 4 }); // This will create a new Temporal.Duration object with the hours property modified to 4, while keeping the other properties unchanged.


//////////////////////////////////////////////
// Instant Object
//////////////////////////////////////////////
// The Temporal.Instant object represents a specific point in time, independent of any time zone.
// You can create a Temporal.Instant object using the Temporal.Instant.from() method, which takes an ISO 8601 string or a number representing milliseconds since the Unix epoch. For example:

const instant = Temporal.Instant.from("2024-01-01T00:00:00Z");

/*
What is the Z at the End?
The Z at the end of the time, is the ISO 8601 standard for formatting UTC time.
It indicates that the offset from UTC time is 0 (Zero).
It is also known as Z time, Zero time or Zulu time.
The T in the middle is the ISO 8601 standard for separating date and time.
*/

const instant2 = Temporal.Instant.from(1704067200000); // This represents the same point in time as the previous example, but using milliseconds since the Unix epoch.

// Once you have a Temporal.Instant object, you can perform various operations on it, such as converting it to a Temporal.ZonedDateTime object in a specific time zone. For example:
const zonedDateTime = instant.toZonedDateTime("America/New_York");

// You can also perform operations on the Temporal.Instant object itself, such as adding a Temporal.Duration to it. For example:
const instant3 = Temporal.Now.instant();


// Converting Temporal.Instant to Temporal.ZonedDateTime in a specific time zone:
const instant = Temporal.Instant.from("2026-05-17T14:30:00Z");
const zoned = instant.toZonedDateTimeISO("Europe/Oslo");


//////////////////////////////////////////////
// PlainDateTime Object
//////////////////////////////////////////////

// The Temporal.PlainDateTime object represents a date and time without a time zone.
// You can create a Temporal.PlainDateTime object using the Temporal.PlainDateTime.from() method, which takes an ISO 8601 string or an object with properties for the date and time. For example:
const plainDateTime = Temporal.PlainDateTime.from("2024-01-01T12:30:00");
const plainDateTime2 = Temporal.PlainDateTime.from({ year: 2024, month: 1, day: 1, hour: 12, minute: 30 });
// Once you have a Temporal.PlainDateTime object, you can perform various operations on it, such as converting it to a Temporal.ZonedDateTime object in a specific time zone. For example:
const zonedDateTime = plainDateTime.toZonedDateTime("America/New_York");
// You can also perform operations on the Temporal.PlainDateTime object itself, such as adding a Temporal.Duration to it. For example:
const newPlainDateTime = plainDateTime.add(duration);

//////////////////////////////////////////////
// PlainDate Object
//////////////////////////////////////////////

// The Temporal.PlainDate object represents a date without a time zone.
// You can create a Temporal.PlainDate object using the Temporal.PlainDate.from() method, which takes an ISO 8601 string or an object with properties for the date. For example:
const plainDate = Temporal.PlainDate.from("2024-01-01");
const plainDate2 = Temporal.PlainDate.from({ year: 2024, month: 1, day: 1 });
// Once you have a Temporal.PlainDate object, you can perform various operations on it, such as converting it to a Temporal.ZonedDateTime object in a specific time zone. For example:
const zonedDateTime = plainDate.toZonedDateTime("America/New_York");
// You can also perform operations on the Temporal.PlainDate object itself, such as adding a Temporal.Duration to it. For example:
const newPlainDate = plainDate.add(duration);

/////////////////////////////////////////////////
// PlainYearMonth Object
/////////////////////////////////////////////////
// The Temporal.PlainYearMonth object represents a year and month without a time zone.
// You can create a Temporal.PlainYearMonth object using the Temporal.PlainYearMonth.from() method, which takes an ISO 8601 string or an object with properties for the year and month. For example:
const plainYearMonth = Temporal.PlainYearMonth.from("2024-01");
const plainYearMonth2 = Temporal.PlainYearMonth.from({ year: 2024, month: 1 });
// Once you have a Temporal.PlainYearMonth object, you can perform various operations on it, such as converting it to a Temporal.ZonedDateTime object in a specific time zone. For example:
const zonedDateTime = plainYearMonth.toZonedDateTime("America/New_York");
// You can also perform operations on the Temporal.PlainYearMonth object itself, such as adding a Temporal.Duration to it. For example:
const newPlainYearMonth = plainYearMonth.add(duration);


/////////////////////////////////////////////
// PlainMonthDay Object
/////////////////////////////////////////////
// The Temporal.PlainMonthDay object represents a month and day without a time zone.
// You can create a Temporal.PlainMonthDay object using the Temporal.PlainMonthDay.from() method, which takes an ISO 8601 string or an object with properties for the month and day. For example:
const plainMonthDay = Temporal.PlainMonthDay.from("--01-01");
const plainMonthDay2 = Temporal.PlainMonthDay.from({ month: 1, day: 1 });
// Once you have a Temporal.PlainMonthDay object, you can perform various operations on it, such as converting it to a Temporal.ZonedDateTime object in a specific time zone. For example:
const zonedDateTime = plainMonthDay.toZonedDateTime("America/New_York");
// You can also perform operations on the Temporal.PlainMonthDay object itself, such as adding a Temporal.Duration to it. For example:
const newPlainMonthDay = plainMonthDay.add(duration);

/////////////////////////////////////////////
// Temporal.ZonedDateTime Object
/////////////////////////////////////////////
// The Temporal.ZonedDateTime object represents a date and time in a specific time zone.

const zonedDateTime = Temporal.ZonedDateTime.from("2024-01-01T12:30:00-05:00[America/New_York]");
const zonedDateTime2 = Temporal.ZonedDateTime.from({ year: 2024, month: 1, day: 1, hour: 12, minute: 30, timeZone: "America/New_York" });
// Once you have a Temporal.ZonedDateTime object, you can perform various operations on it, such as converting it to a Temporal.Instant object. For example:
const instant = zonedDateTime.toInstant();
// You can also perform operations on the Temporal.ZonedDateTime object itself, such as adding a Temporal.Duration to it. For example:
const newZonedDateTime = zonedDateTime.add(duration);


///////////////////////////////////////////////
// Temporal.Now Object
///////////////////////////////////////////////
// The Temporal.Now object provides methods for getting the current date and time in various formats. For example:
const currentInstant = Temporal.Now.instant();
const currentPlainDateTime = Temporal.Now.plainDateTimeISO();
const currentPlainDate = Temporal.Now.plainDateISO();
const currentPlainYearMonth = Temporal.Now.plainYearMonthISO();
const currentPlainMonthDay = Temporal.Now.plainMonthDayISO();
const currentZonedDateTime = Temporal.Now.zonedDateTimeISO("America/New_York");

// You can also get the current date and time in a specific time zone using the Temporal.Now.zonedDateTime() method. For example:
const currentZonedDateTimeNY = Temporal.Now.zonedDateTime("America/New_York");
// The Temporal.Now object also provides methods for getting the current date and time in a specific calendar system. For example:
const currentPlainDateTimeGregorian = Temporal.Now.plainDateTime("gregory");
const currentPlainDateTimeIslamic = Temporal.Now.plainDateTime("islamic");
const currentPlainDateTimeHebrew = Temporal.Now.plainDateTime("hebrew");
const currentPlainDateTimePersian = Temporal.Now.plainDateTime("persian");
const currentPlainDateTimeIndian = Temporal.Now.plainDateTime("indian");

// The Temporal.Now object also provides methods for getting the current date and time in a specific locale. For example:
const currentPlainDateTimeUS = Temporal.Now.plainDateTime("en-US");
const currentPlainDateTimeFR = Temporal.Now.plainDateTime("fr-FR");
const currentPlainDateTimeJP = Temporal.Now.plainDateTime("ja-JP");

// The Temporal.Now object also provides methods for getting the current date and time in a specific time zone and calendar system. For example:
const currentZonedDateTimeGregorian = Temporal.Now.zonedDateTime("America/New_York", "gregory");
const currentZonedDateTimeIslamic = Temporal.Now.zonedDateTime("America/New_York", "islamic");
const currentZonedDateTimeHebrew = Temporal.Now.zonedDateTime("America/New_York", "hebrew");


///////////////////////////////////////////////
// Temporal.PlainTime Object
///////////////////////////////////////////////
// The Temporal.PlainTime object represents a time without a date or time zone.
// You can create a Temporal.PlainTime object using the Temporal.PlainTime.from() method, which takes an ISO 8601 string or an object with properties for the time. For example:
const plainTime = Temporal.PlainTime.from("12:30:00");
const plainTime2 = Temporal.PlainTime.from({ hour: 12, minute: 30, second: 0 });

// Once you have a Temporal.PlainTime object, you can perform various operations on it, such as converting it to a Temporal.ZonedDateTime object in a specific time zone. For example:
const zonedDateTime = plainTime.toZonedDateTime("America/New_York");

// You can also perform operations on the Temporal.PlainTime object itself, such as adding a Temporal.Duration to it. For example:
const newPlainTime = plainTime.add(duration);

///////////////////////////////////////////////
// Since and Until Methods
///////////////////////////////////////////////
// The Temporal.PlainDateTime, Temporal.PlainDate, Temporal.PlainYearMonth, Temporal.PlainMonthDay, and Temporal.ZonedDateTime objects all have since() and until() methods that allow you to calculate the difference between two date/time objects. For example:

const plainDateTime1 = Temporal.PlainDateTime.from("2024-01-01T12:30:00");
const plainDateTime2 = Temporal.PlainDateTime.from("2024-01-02T14:45:00");
const durationBetween = plainDateTime1.until(plainDateTime2); // Result is a Temporal.Duration object representing the difference between the two date/time objects
// The durationBetween variable will contain a Temporal.Duration object that represents the difference between the two Temporal.PlainDateTime objects. You can also use the since() method to calculate the difference in the opposite direction. For example:
const durationSince = plainDateTime2.since(plainDateTime1); // Result is a Temporal.Duration object representing the difference between the two date/time objects in the opposite direction

///////////////////////////////////////////////
// Comparing Date/Time Objects
///////////////////////////////////////////////
// The Temporal.PlainDateTime, Temporal.PlainDate, Temporal.PlainYearMonth, Temporal.PlainMonthDay, and Temporal.ZonedDateTime objects all have comparison methods that allow you to compare two date/time objects. For example:
/*
The compare() Method
The compare() method returns:

-1 if the first date is earlier
1 if the first day is later
0 if they are equal:
Example
*/

// Create two Temporal objects
const date1 = Temporal.PlainDate.from("2026-05-17");
const date2 = Temporal.PlainDate.from("2024-12-25");

// Compare the dates
result = Temporal.PlainDate.compare(date1, date2);

/*
Why < and > Do Not Work
Temporal objects are objects, not primitive numbers.
When you write(a < b), JavaScript tries to convert both objects to primitives.
For Temporal objects, this does not produce a numeric timestamp like Dates. Example:
*/

// Create two Temporal objects
const a = Temporal.PlainDate.from("2026-02-17");
const b = Temporal.PlainDate.from("2026-03-01");

// Compare the dates
console.log(a < b); // ❌ Error
Temporal.Duration.compare()

// The Temporal.Duration object does not have an equals() method due to the complexity of handling different representations of the same duration.
// Instead, equality is checked using the static Temporal.Duration.compare() method. Examples:
// Create two Durations
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ minutes: 90 });

// Compare the Durations
let result = Temporal.Duration.compare(d1, d2);


///////////////////////////////////////////////
// Temporal Sort
///////////////////////////////////////////////
// The compare() method is designed to be passed directly into the JavaScript Array.sort() method:

Example
// Create an Array of dates
const dates = [
    Temporal.PlainDate.from("2026-05-17"),
    Temporal.PlainDate.from("2022-01-01"),
    Temporal.PlainDate.from("2024-12-25")
];

// Sort chronologically
dates.sort(Temporal.PlainDate.compare);

////////////////////////////////////////////
// Equal Temporal Objects
////////////////////////////////////////////

/*
Date Comparison
Always use the compare() or equals() methods rather than standard equality operators.
The Temporal equals() Method
Most(*) temporal objects have their own equals() method:
*/

// The equals() method returns true if both dates are equal.

// Example
// Create Temporal.Instant objects
const i1 = Temporal.Instant.from("2026-05-17T12:00:00Z");
const i2 = Temporal.Instant.from("2026-05-17T12:00:00Z");
const i3 = Temporal.Instant.from("2026-05-17T13:00:00Z");

// equals()
let x1 = i1.equals(i2); // true
let x2 = i1.equals(i3); // false



////////////////////////////////////////////
// Common Mistakes with Temporal
////////////////////////////////////////////
/*
1. Using Standard Date Methods
Temporal objects do not support standard Date methods like getTime() or toISOString(). Always use Temporal's own methods for manipulation and formatting.
2. Comparing Temporal Objects with == or ===
Temporal objects are not primitive values, so using == or === will not compare their contents. Always use the compare() or equals() methods for comparisons.
3. Assuming Temporal Objects are Mutable
Temporal objects are immutable. Methods that modify a Temporal object return a new instance rather than changing the original.
4. Not Handling Time Zones Properly
When working with time zones, always use Temporal.ZonedDateTime and be mindful of daylight saving time changes and other time zone quirks.
5. Ignoring Calendar Systems
Temporal supports multiple calendar systems, but many developers assume it only works with the Gregorian calendar. Always specify the calendar system when necessary.
6. Not Using Temporal.Duration for Time Intervals
When calculating differences between dates or times, use Temporal.Duration instead of manually calculating differences, as it handles complexities like varying month lengths and leap years.
7. Forgetting to Polyfill for Older Browsers
Temporal is a new API and may not be supported in all browsers. Always check for support and consider using a polyfill if you need to support older browsers.
8. Not Utilizing Temporal.Now for Current Date/Time
Temporal.Now provides a convenient way to get the current date and time in various formats. Always use Temporal.Now instead of creating new Temporal objects manually for the current date and time.
9. Comparing different Temporal Types
Be cautious when comparing different Temporal types (e.g., Temporal.PlainDate vs. Temporal.ZonedDateTime) as they represent different concepts and may not be directly comparable without conversion.
10. Instant is always in UTC
Temporal.Instant represents a specific point in time in UTC. It does not have a time zone or calendar system, so it should not be used for local date/time representations.

import { formatAdvancedFormat, formatRelativeTime, formatShort } from "./utils/formatDate.js";
const testDates = [
    "2007-04-21T09:40:26+0000",
    "2019-04-21T09:40:26+0000",
    "2021-04-21T09:40:26+0000"
];
testDates.forEach(date => {
    console.log("longs date:", formatAdvancedFormat(date));
    console.log("relative date", formatRelativeTime(date));
    console.log("Shorst date",formatShort(date));
});
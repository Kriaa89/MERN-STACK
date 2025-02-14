import { formatAdancedFormat, formatRelativeTime, formatShort } from "./utils/formatDate.js";
const testDate = [
    "2007-04-21T09:40:26+0000",
    "2019-04-21T09:40:26+0000",
    "2021-04-21T09:40:26+0000"
]
testDate.forEach(date => {
    console.log("longs date:", formatAdancedFormat(Date));
    console.log(formatRelativeTime(Date));
    console.log(formatShort(Date));
});
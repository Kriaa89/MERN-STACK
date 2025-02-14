import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/releativeTime";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

// this 
const formatRelativeTime = (date) => {
    return dayjs(date).fromNow();
};
const formatAdancedFormat = (date) => {
    return dayjs(date).format("dddd, MMMM D, YYYY")
};

const formatShort = (date) => {
    return dayjs(date).format("MM/DD/YYYY")
};

export { formatRelativeTime, formatAdancedFormat, formatShort };

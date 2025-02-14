import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";


dayjs.extend(relativeTime);

// this 
const formatRelativeTime = (date) => {
    return dayjs(date).fromNow();
};
const formatAdvancedFormat = (date) => {
    return dayjs(date).format("dddd, MMMM D, YYYY");
};

const formatShort = (date) => {
    return dayjs(date).format("MM/DD/YYYY");
};

export { formatRelativeTime, formatAdvancedFormat, formatShort };
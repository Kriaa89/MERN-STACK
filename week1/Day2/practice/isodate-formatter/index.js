import dayjs from "dayjs";
const testDate = [
    "2007-04-21T09:40:26+0000",
    "2019-04-21T09:40:26+0000",
    "2021-04-21T09:40:26+0000"
]
testDate.forEach(Date => {
    console.log(dayjs(Date).format("MM/DD/YYYY"));
    console.log(Date);
    console.log(dayjs(Date).format("MMMM D, YYYY"));
    console.log(dayjs(Date).format("dddd"))
})
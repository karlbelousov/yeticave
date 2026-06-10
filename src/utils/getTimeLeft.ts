import dayjs from "dayjs";

export default function getTimeLeft(date: string) {
    const finalDate = dayjs(date);
    const currentDate = dayjs();
    const diff = finalDate.diff(currentDate);
    if (diff < 0) {
        return [0, 0];
    }
    const formatDiff = dayjs(diff).format("D H m");
    const arr = formatDiff.split(" ");
    const hours = +arr[0] * 24 + +arr[1];
    const minutes = +arr[2];

    return [hours, minutes];
}
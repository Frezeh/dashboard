import moment from "moment";

export function parseDate(date: string) {
  return moment(date).format("MMMM Do, YYYY h:mm:ss a");
}

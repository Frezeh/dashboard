import { Users } from "../types";

function differenceBetweenDates(a: string, b: string): number {
  let lastActiveDate = new Date(a);
  let registrationDate = new Date(b);

  let differenceInTime = lastActiveDate.getTime() - registrationDate.getTime();
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays;
}

export function parseStatusToData(userData: Users[]) {
  let dataList = userData;

  for (const data of dataList) {
    if (differenceBetweenDates(data.lastActiveDate, data.createdAt) > 0) {
      data.status = "Active";
    } else {
      data.status = "Inactive";
    }
  }

  return dataList;
}

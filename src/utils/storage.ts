const DATA_PREFIX = "ledsqr::";

export function saveItem<T>(key: string, value: T): void {
  localStorage.setItem(`${DATA_PREFIX}${key}`, JSON.stringify(value));
}

export function getItem<T>(key: string): T | null {
  const got = localStorage.getItem(`${DATA_PREFIX}${key}`);
  return got ? (JSON.parse(got) as T) : null;
}

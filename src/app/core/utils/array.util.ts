/** Immutable list helpers for editing resume collections. */
export function appendItem<T>(list: readonly T[], item: T): T[] {
  return [...list, item];
}

export function replaceItem<T>(list: readonly T[], index: number, item: T): T[] {
  return list.map((current, i) => (i === index ? item : current));
}

export function removeItem<T>(list: readonly T[], index: number): T[] {
  return list.filter((_, i) => i !== index);
}

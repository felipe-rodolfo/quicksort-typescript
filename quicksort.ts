function quickSort<T>(array: T[], compare: (a: T, b: T) => number): T[] {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left: T[] = [];
  const right: T[] = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (compare(array[i], pivot) < 0) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left, compare), pivot, ...quickSort(right, compare)];
}

export { quickSort };

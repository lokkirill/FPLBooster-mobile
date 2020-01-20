export const elementsQuickSort = (items, left, right) => {
  let index;
  if (items.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;
    index = partition(items, left, right);
    if (left < index - 1) {
      elementsQuickSort(items, left, index - 1);
    }
    if (index < right) {
      elementsQuickSort(items, index, right);
    }
  }
  return items;
}

const partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)].total_points,
      i     = left,
      j     = right;
  while (i <= j) {
    while (items[i].total_points > pivot) {
      i++;
    }
    while (items[j].total_points < pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

const swap = (items, firstIndex, secondIndex) => {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

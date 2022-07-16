export function swap(arr: number[], x: number, y: number): void {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

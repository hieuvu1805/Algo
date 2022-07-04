<?php
/**
 * TC: O(n)
 * SC: O(1)
 */
function fibLoop(int $n): int {
  if ($n < 2) {
    return $n;
  }
  $temp = 1; $prev = 0; $cur = 1;

  for ($i = 2; $i <= $n; $i++) {
    $temp = $prev + $cur;
    $prev = $cur;
    $cur = $temp;
  }
  return $cur;
}

/**
 * TC: O(n)
 * SC: O(n)
 */
function fibRecursionDynamic(int $n, array $cache = [0, 1, 1]): int {
  if (!$cache[$n]) {
    $cache[$n] = fibRecursionDynamic($n - 1, $cache) + fibRecursionDynamic($n - 2, $cache);
  }
  return $cache[$n];
}

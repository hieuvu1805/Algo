node Fibonacci
ts-node SortAlgorithms

for dir in 'Array' 'Algorithms' 'Statistics'
do
  for path in "$dir"/*
  do
    ts-node "$path"
  done
done

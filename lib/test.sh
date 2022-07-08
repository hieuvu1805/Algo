node Fibonacci
for dir in 'Array' 'Algorithms'
do
  for path in "$dir"/*
  do
    ts-node "$path"
  done
done

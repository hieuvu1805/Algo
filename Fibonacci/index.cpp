#include <iostream>

using namespace std;

unsigned long long int fibonacci(unsigned int n) {
  if(n < 2) return n;
  unsigned long long int c, a = 1, b = 1;
  n--;
  while(n--){
      c = a + b;
      b = a;
      a = c;
  }
  return b;
}

int main() {
  cout << "C++\n";
  unsigned short int n;
  do {
    cout << "Enter n (n >= 0 && n <= 93): ";
    cin.clear();
    cin >> n;
  } while (cin.fail() || n < 0 || n > 93);
  
  int start = n - 2;
  if (start < 0) start = 0;
  int end = (n + 3);
  if (end > 94) end = 94;

  for (int i = start; i < end; i++) {
    cout << "Fn(" << i << ") = " << fibonacci(i) << "\n";
  }
}

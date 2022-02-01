# Find GCD between 2 numbers
print("Welcome to the GCD finder.")
num1 = int(input("1st number: "))
num2 = int(input("2nd number: "))
num1List = []
num2List = []
x = 1
result = 0
while x <= num1:
    if num1 % x == 0:
        num1List.append(x)
    x += 1
x = 1
while x <= num2:
    if num2 % x == 0:
        num2List.append(x)
    x += 1
y = num1List.pop()
while len(num1List) != 0:
    if num2List.count(y) > 0:
        break
    else:
        y = num1List.pop()
    x += 1
print("The GCD of " + str(num1) + " and " + str(num2) + " is: " + str(y))

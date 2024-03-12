# FOR LOOPS
for i in range (3,9):
    print(f"This item number {i} in the cart")
    print("packing item.....")

#WHILE LOOPS
n = 0

while n<5:
    print("n is less than 5 and the value is", n )
    n = n+1

#ARRAYS
cart_items =["soap" , "sugar" , "Mangoes", "bread" ]
print(cart_items[0])
print(cart_items[1])
print(cart_items[2])
print(cart_items[3])
print(cart_items[1:3])

age = int(input("We need you to be above 18: "))
while age<18:
    print("Congs")

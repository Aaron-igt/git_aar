name = input("enter your name: ")

age =int(input("enter your age: "))

prdt = input("enter the name of the product: ")
price = float(input("enter the price: "))
quantity = int(input("enter the quantity: "))
total = price * quantity
print(f"I want to buy {quantity} {prdt}/s")
print(f"The total price is ${round(total ,2)}")
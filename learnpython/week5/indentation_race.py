def main():
    print("Welcome to the indentation race.")
    for i in range(5):
         print("current number:", i)
         if i % 2 == 0:
            print("Even number.")
         else:
            print("Odd number.")
    print("race completed!") 

main()
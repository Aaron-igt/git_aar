#print("I'm writing.")

#def sum_of_numbers(first_number,second_number):
 #   return first_number + second_number
#print(sum_of_numbers(6,4))
#print(sum_of_numbers(9,4))
#print(sum_of_numbers(6,6))

#def grader(mark):
 #   if mark >= 80:
  #      return'EXCELLENT'
   # elif mark > 70:
    #    return'VERY GOOD'
    #elif mark > 60:
     #   return'GOOD'
    #elif mark > 50:
     #   return'FAIR'
    #else:
     #   return'FAILED'
    


#print("Your grade is" ,grader(90))    
#user_mark =int(input("what is your mark in SP?"))
#print("your grade is ", grader(user_mark))
students_list =["Jane","John","Doe","Abba"]
name_input =input("Please enter your name:")

def check_students(name):
    if name in students_list:
        return True
    else:
        return False
    
print(check_students())

def grader():
    if check_students(name_input) == True:
        mark = int(input("What is your mark for SP?"))
        if mark >= 80:
            return'EXCELLENT'
        elif mark >= 70:
            return'VERY GOOD'
        elif mark >= 60:
            return'GOOD'
        elif mark >= 50:
            return'FAIR'
    else:
        return'FAILED'

print(grader())
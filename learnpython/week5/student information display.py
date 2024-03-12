def display_student_info(name, age):
    print("Student name:", name)
    print("Student age:", age)
    if age < 18:
        print("status: minor")
    else:
        print("status: adult")
        return
    
student_name = "Alice"
student_age = 20

display_student_info(student_name, student_age)
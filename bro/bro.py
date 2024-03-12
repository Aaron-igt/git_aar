while True:
    score = input("Enter score: ")

    if score.lower() == 'stop':
        print("Program stopped.")
        break
    
    try:
        score = float(score)
        if score < 0.0 or score > 1.0:
            print("Error: Score is out of range. ")
        else:
            if score >= 0.9:
                print("A") 
                print("Exellent")
            elif score >= 0.8:
                print("B")
                print("Very good")
            elif score >= 0.7:
                print("C")
                print("Good")
            elif score >= 0.6:
                print("D")
                print("Fair")
            else:
                print("F")
                print("Fail")
    except ValueError:
        print("please enter valid values")
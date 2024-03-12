def investigation_scene():
    print("You arrive at a dimly lit room with clues scattered around.")
    if flashlight_available:
        print("You can see better with your flashlight")
        print("you find a note the table.")
    if flashlight_available:
        print("The note reads, 'The code to the safe in 4732'")
    else:
        print("The note reads, 'You need to find the flashlight first'")

def open_safe(code):
    if code == 4732:
        print("The safe opens, revealing a hidden treasure.")
        print("Congratulations! You solved the mystery.")
    else:
        print("The safe remains loced, try again.")
flashlight_available = True

investigation_scene()
safe_code = 4732
open_safe(safe_code)
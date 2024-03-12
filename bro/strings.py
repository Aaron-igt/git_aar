#creating a string: a string can be created by enclosing text in qoutes either (double or single).
my_string="Hello,world."

#accessing characters in a string: this is done through indexing. to access the first character, we start
#with index of 0 and to access the last character we use negative.    
print(my_string[0])
print(my_string[-1])

#slicing: slicing from the start
#leaving out the first index, it will start from the beginning
print(my_string[:5])

#slicing at the end
#leaving out the end index, will go to the end
print(my_string[2:])
#negative indexing
print(my_string[-6:])

#modifying strings

#replacing characters or substrings, we use .replace()
a=" Hello,world. "
print(a.replace("l","j"))
#Changing case of the strings: use .lower() to change to lower case and .upper() for uppercase.
print(a.upper())
print(a.lower())
#splitting a string in characters: we use .split()
print(a.split())
#removing whitespace(space before and/or after a string.)
print(a.strip())
#.join(): joins a list of words and makes it one string
b=["hello","world!"]
c= " ".join(b)
print(c)
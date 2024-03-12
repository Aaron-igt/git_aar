a=("hello,world")
print(a)
# indexing
print(a[3])
# slicing
print(a[:3])
print(a[3:])
print(a[:-6])
print(a[-3:])
# modifying strings
# cases
print(a.lower())
print(a.upper())
# split separates string into a list.
print(a.split())
# strip
print(a.strip())
# replace replaces character or substring
print(a.replace("l","j"))
print(a.replace("world","Uganda"))
# join turns a list into one string
b=["hello","world"]
c=" ".join(b)
print(b)
# endswith() tells whether the string ends with a specific string
print(a.endswith("world"))
print(a.endswith("hello"))
# startswith()
print(a.startswith("hello"))
print(a.startswith("hello"))

#def greet():
 #   name ="sangalo"
  #  print("Good afternoon",name)

#fn = input("enter the full name: ")
#print(fn)

def revenue():
    tui= 2.5
    grts= 0.5
    dons= 0.2
    prjts= 3.0
    tt= (tui + grts + dons + prjts)
    print("Total revenue is: ", tt)
revenue()


def revenue(tui:float,grts:float, dons:float, prjts:float) -> float:
    tt = tui+grts+dons+prjts
    return tt
print(revenue(6.0,4.2,7.3,3.0))
print(revenue(4.0,3.2,6.2,3.0)) 
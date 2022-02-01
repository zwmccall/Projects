# Fun project to brush up on Python and Regex skills
import re
print("Welcome to the infinity bottle calculator.")
print("Input each pour for your infinity bottle in the format \"x oz y proof\"")
print("Ex: 2 oz 100 proof")
print("Enter \"Done\" when you are finished inputting pours")
ozList = []
proofList = []
x = 0
pattern = re.compile("[0-9]+[.]?[0-9]* oz [0-9]+ proof")

while True:
    choice = input("Pour " + str(len(ozList) + 1) + ": ")
    if choice.lower() == "done":
        totalOz = sum(ozList)
        if len(ozList) == 0:
            print("You did not enter any pours.")
            break
        elif len(ozList) == 1:
            print("You entered 1 pour.")
        else:
            print("You entered " + str(len(ozList)) + " pours.")
        while len(ozList) != 0:
            x += ozList.pop() * proofList.pop()
        x = x / totalOz
        print("Your bottle is a total of " + str(totalOz) + " oz and " + str(x) + " proof.")
        break
    elif str(pattern.fullmatch(choice)) != "None":
        ozList.append(float(choice.partition(" oz")[0]))
        proofList.append(int(choice.partition(" oz ")[2].partition(" proof")[0]))
    else:
        print("Incorrect syntax, please try again.")
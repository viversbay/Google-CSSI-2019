#print("Enter a word: ")
word = raw_input()
print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
arrayWord = list(word)  #if word = "word" ==> ["w", 'o', 'r', 'd']
arrayNewWord = []
guessWord = ""
guess = ""
guesses = ""
guessesArray = []
mistakes = 0
TorF = True
mistakeOrNot = True
for i in word:
    if(i == " "):
        guessWord += " "
        arrayNewWord.append(" ")
    else:
        guessWord += "_ "
        arrayNewWord.append("_")
     # creating an array ["_ ", "_ ", ...]
print(guessWord)
# print(arrayNewWord)
while (mistakes < 5):
    print("Enter a letter: ")
    guess = raw_input()
    for i in range(0, len(guessesArray)):
        if(guess == guessesArray[i]):
            TorF = False
            break
        else:
            TorF = True
    for i in range(0, len(arrayWord)):
        if (guess == arrayWord[i]):
            mistakeOrNot = True
            break
        else:
            mistakeOrNot = False

    if (mistakeOrNot == False):
        mistakes += 1
        if (mistakes < 5):
            print("You have made "+str(mistakes)+" mistakes. You have "+str(5-mistakes)+" chances left")
        else:
            print("You have made too many mistakes! The phrase was \""+word+"\"")
            break

    if (TorF == True and mistakeOrNot == True):
        for i in range (0, len(arrayWord)):
            if (guess == arrayWord[i]):
                arrayNewWord[i] = guess
    else:
        print("You have already guessed that letter.")


    guessWord = ''.join(arrayNewWord)
    print(guessWord)
    guessesArray.append(guess)
    guesses += guess+" "
    print("Guesses: "+guesses)

    if (guessWord == word):
        print("You guessed correctly! The phrase was \""+guessWord+"\"")
        break

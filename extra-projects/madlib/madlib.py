print("Welcome to the Funny Mad Libs Game!")
print("Get ready to create a hilarious story.")

noun1 = input("Enter a noun: ")
adj1 = input("Enter an adjective: ")
verb1 = input("Enter a verb (past tense): ")
adverb1 = input("Enter an adverb: ")
noun2 = input("Enter another noun: ")

print("\nHere's your funny Mad Libs story:")

story = f"Once upon a time, there was a {adj1} {noun1} who {verb1} {adverb1}. It was a sight to behold! People would stop and stare, amazed by the extraordinary {noun2}. The end."
print(story)

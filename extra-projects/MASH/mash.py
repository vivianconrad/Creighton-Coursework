import random

def play_mash():
    print("Welcome to the MASH game!")
    print("Think of your crushes, dream jobs, and more to predict your future!")

    crushes = input("Enter 4 crushes (separated by commas): ").split(',')
    jobs = input("Enter 4 dream jobs (separated by commas): ").split(',')
    places = input("Enter 4 places (e.g., cities) (separated by commas): ").split(',')

    print("\nCalculating your future...\n")

    mansion = random.choice(crushes)
    apartment = random.choice(jobs)
    shack = random.choice(places)
    house = random.choice(crushes)

    print("In the future, you will:")
    print(f"Live in a Mansion with {mansion}")
    print(f"Live in an Apartment and work as a {apartment}")
    print(f"Live in a Shack in {shack}")
    print(f"Live in a House with {house}")

    print("\nThanks for playing MASH! Your future looks... interesting!")

if __name__ == "__main__":
    play_mash()

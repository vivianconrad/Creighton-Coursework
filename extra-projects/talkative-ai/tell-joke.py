import random

def tell_joke():
    jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Parallel lines have so much in common. It's a shame they'll never meet.",
        "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them."
    ]

    joke = random.choice(jokes)
    return joke

# joke = tell_joke()
# print(joke)

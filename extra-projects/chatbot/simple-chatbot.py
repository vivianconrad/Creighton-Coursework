def chatbot_response(user_input):
    user_input = user_input.lower()

    if "hello" in user_input:
        return "Hi there! How can I help you?"
    elif "how are you" in user_input:
        return "I'm just a chatbot, but thanks for asking!"
    elif "bye" in user_input:
        return "Goodbye! Feel free to come back anytime."
    else:
        return "I'm not sure how to respond to that."

def main():
    print("Chatbot: Hi, I'm your friendly chatbot. Type 'bye' to exit.")

    while True:
        user_input = input("You: ")
        if user_input.lower() == "bye":
            print("Chatbot: Goodbye!")
            break
        response = chatbot_response(user_input)
        print("Chatbot:", response)

if __name__ == "__main__":
    main()

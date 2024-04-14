from openai import OpenAI
import os


openai_api_key = os.getenv('OPENAI_API_KEY')
client = OpenAI()


def chatbot(input):
    MODEL = "gpt-3.5-turbo"
    response = client.chat.completions.create(
    model=MODEL,
    messages=[
        {"role": "system", "content": "You are a helpful assistant who is also a professional photographer who can create vivid ideas for a photo session."},
        {"role": "user", "content": input},
    ],
    temperature=1,
    max_tokens=150,
    
    
    )
    return response.choices[0].message.content
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.environ.get("OPENAI_API_KEY")
client = OpenAI()


# def create_assistant():
    
#     assistant = client.beta.assistants(
#         name="My Assistant Nala",
#         instructions="I am an assistant that can help you with your queries",
#         tools={'type':"function"},
#         model = "gpt-3.5-turbo",
        
#     )
    
#     return assistant


# assistant = create_assistant()



# def generate_response(message):
    
#     thread = client.beta.assistants.create_message()
#     thread_id = thread.id
    
#     message = client.beta.assistants.message(
#         thread_id = thread_id,
#         role = 'user',
#         content = message
#     )
    
#     message = "what is your name?"
    

# def run_assistant(message):
    
#     assistant = client.beta.assistants.create_message()
    
#     return response
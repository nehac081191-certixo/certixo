import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

def analyze_document(text: str, query: str = "Summarize this document"):
    if not OPENAI_API_KEY:
        raise ValueError("OPENAI_API_KEY not configured on server")
    
    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a professional GRC and compliance auditor. Maintain strict institutional standards."},
                {"role": "user", "content": f"{query}\n\nDocument Content:\n{text}"}
            ],
            temperature=0.2 # Lower temperature for auditing consistency
        )
        return response.choices[0].message.content
    except Exception as e:
        # Avoid leaking raw API error details if they contain sensitive info
        print(f"AI Service Error: {str(e)}")
        raise RuntimeError("OpenAI synthesis failed. Check server logs.")

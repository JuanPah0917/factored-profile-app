from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Permitir CORS para el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/employee")
def get_employee():
    return {
        "name": "Juan Pablo",
        "position": "Software Engineer Intern",
        "avatar_url": "https://api.dicebear.com/7.x/avataaars/svg?seed=Juanpa",
        "skills": {
            "Python": 80,
            "SQL": 75,
            "Java": 60,
            "Spark": 65,
            "Docker": 70
        }
    }


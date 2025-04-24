# fastapi_backend/main.py

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict
import uvicorn
import shutil
from pathlib import Path

from ner import extract_entities
from score import evaluate_resume

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = Path("uploaded_resumes")
UPLOAD_DIR.mkdir(exist_ok=True)

@app.post("/ner")
async def ner_resume(file: UploadFile = File(...)) -> Dict:
    filepath = UPLOAD_DIR / file.filename
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    entities = extract_entities(str(filepath))
    return {"entities": entities}

@app.post("/score")
async def score_resume(file: UploadFile = File(...)) -> Dict:
    filepath = UPLOAD_DIR / file.filename
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    score = evaluate_resume(str(filepath))
    return {"score": score}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

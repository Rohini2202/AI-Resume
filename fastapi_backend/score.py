import joblib
import numpy as np
from PyPDF2 import PdfReader
from sklearn.feature_extraction.text import TfidfVectorizer

model = joblib.load("xgboost_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")

def extract_text(file_path: str) -> str:
    text = ""
    if file_path.endswith(".pdf"):
        reader = PdfReader(file_path)
        for page in reader.pages:
            text += page.extract_text()
    else:
        with open(file_path, "r", encoding="utf-8") as f:
            text = f.read()
    return text

def evaluate_resume(file_path: str) -> float:
    resume_text = extract_text(file_path)
    vectorized = vectorizer.transform([resume_text])
    score = model.predict(vectorized)[0]
    return float(np.round(score, 2))

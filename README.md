# AI-Powered Resume Maker

This project is a smart resume-building web application powered by **Machine Learning (ML)** and **Natural Language Processing (NLP)**. It helps users create personalized, industry-optimized resumes quickly and efficiently.

## Features

- Upload resume files (PDF/DOC) and extract important details using NER (Named Entity Recognition).
- Classify and evaluate resume quality using TF-IDF and XGBoost.
- Generate project/job descriptions using OpenAI GPT.
- Save resume data and download professional PDF resumes.
- User-friendly UI to enter personal, education, work, skills, and project details.

## Tech Stack

### Frontend
- HTML, CSS, JavaScript

### Backend (Dual Mode)
- Node.js + Express
  - API routes for GPT, resume data saving
- FastAPI (Python)
  - Resume NER and evaluation APIs

### Database
- MySQL

### Machine Learning (Python)
- `spacy` for NER
- `openai` for GPT-based description generation

---

## Project Structure
ai-resume/ │ ├── backend/ # Node.js backend │ ├── routes/ │ │ ├── gpt_api.js │ │ └── resume_api.js │ ├── server.js │ └── .env │ ├── fastapi_backend/ # FastAPI backend for ML tasks │ ├── main.py │ ├── ner.py │ ├── score.py │ ├── frontend/ │ └── index.html # Main HTML UI │ ├── ner_api.py # Optional: for testing NER separately └── README.md







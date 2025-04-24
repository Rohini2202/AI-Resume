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
ai-resume/├── backend/ # Node.js 
          ├──backend │ ├── routes/ ├── gpt_api.js 
                                   └── resume_api.js 
          ├── server.js 
          └── .env │ 
          ├── fastapi_backend/ ├── main.py 
                               ├── ner.py 
                               ├── score.py 
          ├── frontend/ │ 
                        └── index.html # Main HTML UI 
          └── README.md


---

## Setup Instructions

### Prerequisites

- Node.js and npm
- Python 3.8+
- MySQL Server
- `spacy`, `xgboost`, `scikit-learn`, `openai`, `joblib`, `PyPDF2`

### Frontend

Just open the `frontend/index.html` in a browser or serve it via Live Server extension (VS Code).

### Node.js Backend

```bash
cd backend
npm install
node server.js
```

### Set your .env:
env
OPENAI_API_KEY=your_openai_key
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=resumedb

### FastAPI Backend
bash
```
cd fastapi_backend
pip install -r requirements.txt
uvicorn main:app --reload
```
requirements.txt
fastapi
uvicorn
spacy
openai
xgboost
scikit-learn
joblib
PyPDF2
Install SpaCy model:
bash
```
python -m spacy download en_core_web_sm
```
### API Endpoints
Node.js

Endpoint	Description
POST /gpt/generate	Generate GPT-based text
POST /resume/save	Save resume data to MySQL
FastAPI

Endpoint	Description
POST /ner/extract	Extract entities from resume file
POST /score/resume	Predict resume completeness score

To-Do
 - Export resume as PDF
 - Add more GPT prompt types (job summary, achievements)
 - Deploy backend on Render/Heroku and FastAPI on Deta/AWS Lambda

## Credits
Built with using JavaScript, Python, Node.js, and OpenAI APIs.

## License
MIT License









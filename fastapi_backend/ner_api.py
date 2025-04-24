import spacy
from PyPDF2 import PdfReader

nlp = spacy.load("en_core_web_sm")

def extract_entities(file_path: str):
    text = ""
    if file_path.endswith(".pdf"):
        reader = PdfReader(file_path)
        for page in reader.pages:
            text += page.extract_text()
    else:
        with open(file_path, "r", encoding="utf-8") as f:
            text = f.read()

    doc = nlp(text)
    entities = {ent.label_: ent.text for ent in doc.ents}
    return entities

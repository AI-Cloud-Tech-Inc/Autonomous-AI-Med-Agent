from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Autonomous Agentic AI Med Agent Backend")

class SymptomAssessmentRequest(BaseModel):
    patient_id: str
    symptoms: List[str]
    age: Optional[int] = None
    gender: Optional[str] = None

class SymptomAssessmentResponse(BaseModel):
    risk_level: str
    recommendations: List[str]
    next_steps: Optional[str] = None

@app.get("/")
def root():
    return {"message": "AI Med Agent Backend is running."}

@app.post("/symptom-assessment", response_model=SymptomAssessmentResponse)
def assess_symptoms(request: SymptomAssessmentRequest):
    # Placeholder logic for demo
    if "chest pain" in request.symptoms:
        return SymptomAssessmentResponse(
            risk_level="high",
            recommendations=["Seek immediate medical attention."],
            next_steps="Call emergency services."
        )
    return SymptomAssessmentResponse(
        risk_level="low",
        recommendations=["Monitor symptoms.", "Schedule a routine checkup."]
    )

@app.post("/upload-medical-data")
def upload_medical_data(file: UploadFile = File(...)):
    # Placeholder for file processing
    return {"filename": file.filename, "status": "received"}

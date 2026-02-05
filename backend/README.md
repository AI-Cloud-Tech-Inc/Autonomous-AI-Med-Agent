# Backend - FastAPI

This folder will contain Python FastAPI microservices for:
- Medical data analysis
- Symptom assessment
- Patient monitoring
- Workflow automation
- Compliance and audit logging

## Getting Started
1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install fastapi uvicorn pydantic[dotenv] python-multipart
   ```
3. To run the API server:
   ```bash
   uvicorn main:app --reload
   ```

See `/docs/AI_Med_Agent_Publication_Strategy.md` for compliance and deployment details.

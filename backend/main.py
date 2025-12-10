from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine, SessionLocal
from app.routes.auth import router as auth_router
from app.models.user import User
from app.utils.security import hash_password, generate_user_id
import os

# create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Monone Matlab API")

# create admin user on startup if not exists
@app.on_event("startup")
def ensure_admin_user():
    db = SessionLocal()
    try:
        admin_email = os.getenv("ADMIN_EMAIL", "mononemotlob@gmail.com")
        admin_password = os.getenv("ADMIN_PASSWORD", "admin123#")
        existing = db.query(User).filter(User.email == admin_email).first()
        if not existing:
            admin = User(
                id=generate_user_id(),
                name="Admin",
                email=admin_email,
                phone="",
                password_hash=hash_password(admin_password),
                education=False,
                location=False,
                terms=False,
                role="admin",
                is_active=True,
            )
            db.add(admin)
            db.commit()
    finally:
        db.close()

# CORS - allow your frontend origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api/auth", tags=["auth"])

@app.get("/")
def read_root():
    return {"message": "Monone Matlab API"}
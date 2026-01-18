from sqlalchemy.orm import Session
from database import SessionLocal, engine
from database import SessionLocal, engine
from models import audit, audit_log, integration, framework, policy, user, access_review, vendor, drift, inventory, people, risk, data_discovery, data_lineage, organization
from services.auth_service import get_password_hash
import sys

def seed_admin(email, password, full_name):
    # Ensure tables exist
    user.Base.metadata.create_all(bind=engine)
    organization.Base.metadata.create_all(bind=engine)
    audit.Base.metadata.create_all(bind=engine)
    # ... actually better to use a single Base if they all share it
    # But currently they are separate. Let's just create all.
    audit_log.Base.metadata.create_all(bind=engine)
    integration.Base.metadata.create_all(bind=engine)
    framework.Base.metadata.create_all(bind=engine)
    policy.Base.metadata.create_all(bind=engine)
    access_review.Base.metadata.create_all(bind=engine)
    vendor.Base.metadata.create_all(bind=engine)
    drift.Base.metadata.create_all(bind=engine)
    inventory.Base.metadata.create_all(bind=engine)
    people.Base.metadata.create_all(bind=engine)
    risk.Base.metadata.create_all(bind=engine)
    data_discovery.Base.metadata.create_all(bind=engine)
    data_lineage.Base.metadata.create_all(bind=engine)

    db = SessionLocal()
    try:
        # Check if user already exists
        db_user = db.query(user.User).filter(user.User.email == email).first()
        if db_user:
            print(f"User {email} already exists.")
            return

        new_user = user.User(
            email=email,
            hashed_password=get_password_hash(password),
            full_name=full_name,
            role="certixo_admin",
            company="Certixo HQ"
        )
        db.add(new_user)
        db.commit()
        print(f"Admin user {email} created successfully.")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python seed_user.py <email> <password> <full_name>")
    else:
        seed_admin(sys.argv[1], sys.argv[2], sys.argv[3])

from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import audit, audit_log, integration, framework, policy, user, access_review, vendor, drift, inventory, people, risk, data_discovery, data_lineage, organization
from services.auth_service import get_password_hash
from datetime import datetime, timedelta
import random
import json

def seed_demo_data():
    # 1. Ensure all tables are created
    user.Base.metadata.create_all(bind=engine)
    organization.Base.metadata.create_all(bind=engine)
    audit.Base.metadata.create_all(bind=engine)
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
        # --- Frameworks ---
        f_soc2 = db.query(framework.Framework).filter_by(name="SOC2").first()
        if not f_soc2:
            f_soc2 = framework.Framework(name="SOC2", description="System and Organization Controls 2")
            db.add(f_soc2)
            db.flush()
            # Add some controls
            c1 = framework.Control(framework_id=f_soc2.id, code="CC1.1", name="COSO Principle 1", description="Commitment to integrity and ethical values.")
            c2 = framework.Control(framework_id=f_soc2.id, code="CC6.1", name="Logical Access", description="The entity restricts logical access to information software.")
            db.add_all([c1, c2])

        f_iso = db.query(framework.Framework).filter_by(name="ISO27001").first()
        if not f_iso:
            f_iso = framework.Framework(name="ISO27001", description="Information Security Management Systems")
            db.add(f_iso)
            db.flush()

        # --- ORG 1: TATA STEEL (Active & Fully Loaded) ---
        org_tata = db.query(organization.Organization).filter_by(name="Tata Steel").first()
        if not org_tata:
            org_tata = organization.Organization(
                name="Tata Steel",
                domain="tatasteel.com",
                tax_id="GSTIN-TATA-7788",
                legal_address="Jamshedpur, Jharkhand, India",
                industry="Manufacturing",
                employee_count=35000,
                status="active",
                onboarded_at=datetime.utcnow() - timedelta(days=30),
                approved_at=datetime.utcnow() - timedelta(days=29)
            )
            db.add(org_tata)
            db.flush()

        # Tata Admin
        admin_tata = db.query(user.User).filter_by(email="admin@tatasteel.com").first()
        if not admin_tata:
            admin_tata = user.User(
                email="admin@tatasteel.com",
                hashed_password=get_password_hash("TataV3!"),
                full_name="Rajesh Khanna",
                company="Tata Steel",
                role="tenant_admin",
                organization_id=org_tata.id,
                is_active=True
            )
            db.add(admin_tata)

        # Policies for Tata
        policies_data = [
            ("Information Security Policy", "High-level ISMS framework for heavy industries.", "published"),
            ("Physical Security Standard", "Regulating access to steel plants and data centers.", "published"),
            ("Data Retention Policy", "Guidelines for handling historical production data.", "draft")
        ]
        for title, desc, status in policies_data:
            if not db.query(policy.Policy).filter_by(title=title, organization_id=org_tata.id).first():
                p = policy.Policy(
                    title=title,
                    description=desc,
                    content=f"Institutional standard for {title}. Authorized by GRC commitee.",
                    version="1.0",
                    status=status,
                    organization_id=org_tata.id,
                    created_at=datetime.utcnow() - timedelta(days=15)
                )
                db.add(p)

        # Risks for Tata
        risks_data = [
            ("Supply Chain Disruption", "Failure in raw material procurement.", "Operational", 4, 5, "High", 750000),
            ("Industrial Cyber Espionage", "Targeted attacks on proprietary smelting logic.", "Cyber", 3, 5, "Low", 1200000)
        ]
        for title, desc, cat, prob, impact, vel, expo in risks_data:
            r = db.query(risk.RiskItem).filter_by(title=title, organization_id=org_tata.id).first()
            if not r:
                r = risk.RiskItem(
                    title=title,
                    description=desc,
                    category=cat,
                    probability=prob,
                    impact=impact,
                    risk_score=prob * impact,
                    risk_velocity=vel,
                    exposure_value=expo,
                    status="Open",
                    organization_id=org_tata.id
                )
                db.add(r)
                db.flush()
                # Add an alert for one of the risks
                if title == "Supply Chain Disruption":
                    alert = risk.RiskAlert(
                        risk_id=r.id,
                        message="Significant delay detected in coal shipments from Port A.",
                        predicted_impact="Production slowdown in 48 hours.",
                        source="SupplyChain IoT"
                    )
                    db.add(alert)

        # Audit Plan for Tata
        ap_tata = db.query(audit.AuditPlan).filter_by(title="FY2026 SOC2 Audit", organization_id=org_tata.id).first()
        if not ap_tata:
            ap_tata = audit.AuditPlan(
                title="FY2026 SOC2 Audit",
                framework_id=f_soc2.id,
                audit_period_start=datetime.utcnow() - timedelta(days=90),
                audit_period_end=datetime.utcnow() + timedelta(days=270),
                scope=["AWS Production", "Employee Directory", "Source Code"],
                status="Active",
                organization_id=org_tata.id
            )
            db.add(ap_tata)


        # --- ORG 2: SWIGGY (Pending Review - to demo onboarding) ---
        org_swiggy = db.query(organization.Organization).filter_by(name="Swiggy").first()
        if not org_swiggy:
            org_swiggy = organization.Organization(
                name="Swiggy",
                domain="swiggy.com",
                tax_id="GSTIN-SWG-9900",
                legal_address="Bundl Technologies, Bangalore",
                industry="Logistics/SaaS",
                employee_count=5000,
                status="onboarding_submitted",
                onboarded_at=datetime.utcnow() - timedelta(hours=5)
            )
            db.add(org_swiggy)
            db.flush()

        # Swiggy Admin (Inactive)
        admin_swiggy = db.query(user.User).filter_by(email="compliance@swiggy.com").first()
        if not admin_swiggy:
            admin_swiggy = user.User(
                email="compliance@swiggy.com",
                hashed_password=get_password_hash("SwiggyV3!"),
                full_name="Megha Joshi",
                company="Swiggy",
                role="tenant_admin",
                organization_id=org_swiggy.id,
                is_active=False # Should be False for pending org
            )
            db.add(admin_swiggy)

        swiggy_p = db.query(policy.Policy).filter_by(title="Privacy Policy", organization_id=org_swiggy.id).first()
        if not swiggy_p:
            swiggy_p = policy.Policy(
                title="Privacy Policy",
                description="Consumer data protection for delivery logistics.",
                content="Standard privacy guidelines for food tech platforms.",
                version="1.0",
                status="draft",
                organization_id=org_swiggy.id,
                created_at=datetime.utcnow()
            )
            db.add(swiggy_p)

        # Risks for Swiggy
        swiggy_risk = db.query(risk.RiskItem).filter_by(title="Delivery Fleet Unavailability", organization_id=org_swiggy.id).first()
        if not swiggy_risk:
            swiggy_risk = risk.RiskItem(
                title="Delivery Fleet Unavailability",
                description="Massive strike or extreme weather affecting delivery personnel.",
                category="Logistics",
                probability=2,
                impact=5,
                risk_score=10,
                risk_velocity="High",
                status="Open",
                organization_id=org_swiggy.id
            )
            db.add(swiggy_risk)
            db.flush()
            db.add(risk.RiskAlert(
                risk_id=swiggy_risk.id,
                message="Tropical storm warning issued for Bangalore region.",
                predicted_impact="70% reduction in delivery capacity expected.",
                source="Meteorological Intel"
            ))

        db.commit()
        print("Demo data seeded: Tata Steel (Active), Swiggy (Pending Onboarding).")

    except Exception as e:
        print(f"Error seeding demo data: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_demo_data()

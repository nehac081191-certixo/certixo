from database import SessionLocal
from models import framework, audit_log, audit, policy, user, organization, inventory, risk, people, vendor, drift, integration, access_review, data_discovery, data_lineage

def seed_standard_frameworks():
    db = SessionLocal()
    if db.query(framework.Framework).count() == 0:
        soc2 = framework.Framework(
            name="SOC 2 Type II",
            description="Focuses on a service organization's controls as they relate to security, availability, processing integrity, confidentiality, and privacy."
        )
        db.add(soc2)
        db.flush()

        controls = [
            framework.Control(framework_id=soc2.id, code="CC1.1", name="Demonstrates commitment to integrity and ethical values."),
            framework.Control(framework_id=soc2.id, code="CC6.1", name="Logical access security for both internal and external users."),
            framework.Control(framework_id=soc2.id, code="CC7.1", name="System boundary protection and unauthorized traffic detection."),
        ]
        db.add_all(controls)

        iso = framework.Framework(
            name="ISO 27001:2022",
            description="International standard for information security management systems (ISMS)."
        )
        db.add(iso)
        db.flush()

        iso_controls = [
            framework.Control(framework_id=iso.id, code="A.5.1", name="Policies for information security."),
            framework.Control(framework_id=iso.id, code="A.8.2", name="Classification of information."),
        ]
        db.add_all(iso_controls)
        
        db.commit()
    db.close()

if __name__ == "__main__":
    seed_standard_frameworks()
    print("Standard frameworks seeded.")

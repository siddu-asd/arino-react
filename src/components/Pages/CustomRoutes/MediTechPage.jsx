import React from 'react';
import Div from '../../Div';
import Spacing from '../../Spacing';

// Alternating section block with optional description
const Feature = ({ reverse = false, title, description, points = [], image, alt }) => (
  <Div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
    <Div className="col-lg-6 col-md-12">
      <div className="meditech-image">
        <img src={image} alt={alt} />
      </div>
    </Div>
    <Div className="col-lg-6 col-md-12">
      <div className="meditech-content">
        <h3>{title}</h3>
        {description && <p className="feature-desc">{description}</p>}
        <ul>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </Div>
  </Div>
);

export default function MediTechPage() {
  return (
    <>
      {/* Hero */}
      <div className="meditech-hero">
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-lg-6 col-md-12">
              <div className="hero-copy">
                <h1>
                  Advancing Healthcare<br />Through <span className="accent">Technology</span>
                </h1>
                <p className="hero-sub">Innovative, data‑driven solutions for modern medical care—built to fit your hospital workflow.</p>
                <div className="hero-cta">
                  <a className="btn-cta" href="#meditech-products">Learn More</a>
                </div>
                <div className="hero-icons">
                  <div className="icon-chip">
                    <img src="/images/meditech/icons/digital-health.svg" alt="Digital Health" />
                    <span>Digital Health</span>
                  </div>
                  <div className="icon-chip">
                    <img src="/images/meditech/icons/medical-devices.svg" alt="Medical Devices" />
                    <span>Medical Devices</span>
                  </div>
                  <div className="icon-chip">
                    <img src="/images/meditech/icons/health-analytics.svg" alt="Health Analytics" />
                    <span>Health Analytics</span>
                  </div>
                </div>
              </div>
            </Div>
            <Div className="col-lg-6 col-md-12">
              <div className="hero-art">
                <img src="/images/medtech-1.jpeg" alt="MediTech hero" />
              </div>
            </Div>
          </Div>
        </Div>
      </div>

      <Spacing lg="80" md="60" />

  <Div className="container" id="meditech-products">
        {/* 1 */}
        <Feature
          title="Internal Operations System"
          description="A unified control center for administrators and department heads to orchestrate day‑to‑day hospital operations with real‑time status, configurable alerts and end‑to‑end auditability. Designed for multi‑facility networks, it creates one source of truth across OPD, IPD, OT, Emergency, Labs and Support Services."
          image="/images/internal-operating.jpg"
          alt="Internal operations"
          points={[
            'Department dashboards: OPD, IPD, OT, Pharmacy, Lab, Radiology',
            'Smart scheduling for OTs, beds and equipment with conflict checks',
            'Inventory and consumables: PAR levels, expiries, vendor management',
            'Approvals and workflows with role‑based permissions and e‑sign',
            'Real‑time alerts for SLA breaches, emergencies and low stock',
            'Audit logs and analytics for utilization, TAT and bottlenecks',
            'Bed management with discharge planning and housekeeping turns',
            'Escalation rules, on‑call rosters and duty‑manager view',
            'HL7/FHIR friendly APIs for HIS/EMR, LIS and PACS integration',
            'Exports, scheduled reports and data retention policies'
          ]}
        />
        <Spacing lg="60" md="40" />

        {/* 2 */}
        <Feature
          reverse
          title="Smart Patient Token System"
          description="Digital queueing that reduces waiting anxiety and keeps patients informed at every step—from registration to consultation. Built for high‑volume OPDs with kiosks, displays and mobile updates working in sync."
          image="/images/smart-patient tocken system.jpeg"
          alt="Smart token"
          points={[
            'Counter/doctor/department wise token flows with priorities',
            'Dynamic ETAs on display boards, kiosks and WhatsApp',
            'No‑show and re‑queue handling to keep OPD moving',
            'Multilingual announcements and accessibility support',
            'Analytics for average wait time and peak‑hour staffing',
            'Emergency priority tokens and VIP routing when required',
            'Self‑check‑in via QR/kiosk; print or digital ticket options',
            'Multi‑location support with building/floor/zone mapping',
            'SMS fallback when WhatsApp is unavailable'
          ]}
        />
        <Spacing lg="60" md="40" />

        {/* 3 */}
        <Feature
          title="Patient Tracking System"
          description="Locate patients, attendants and critical assets inside the hospital using wrist‑band RFID/RTLS or BLE beacons. Improve throughput, safety and staff coordination while maintaining strong privacy controls."
          image="/images/Smart patient tracking with RFID and IoT.jpeg"
          alt="Patient tracking"
          points={[
            'RFID/RTLS wrist‑band with geo‑zones for OPD, Lab, Imaging, OT',
            'Live floor map at nurse stations with actionable alerts',
            'Auto‑escort notifications to attendants when token is near',
            'Wandering/exit alerts for critical care and pediatrics',
            'Dwell‑time reports to identify process delays',
            'Asset tracking for wheelchairs, monitors and ECG machines',
            'Historical playback for incident review and process audits',
            'Contact tracing for infection control when required',
            'Consent modes and data minimization to protect patient privacy'
          ]}
        />
        <Spacing lg="60" md="40" />

        {/* 4 (SOP removed per request) */}

        {/* 5 */}
        <Feature
          reverse
          title="Report Printing System"
          description="Produce branded, standardized reports that are secure, verifiable and easy to access. From lab and radiology to discharge summaries, keep formats consistent and compliant across the network."
          image="/images/report-printting software.jpg"
          alt="Report printing"
          points={[
            'Central template library with department branding',
            'QR‑secured verification and one‑tap patient portal access',
            'Auto‑archive to EMR with ICD/Loinc mappings where applicable',
            'Bulk print queues and print‑to‑desk routing',
            'Billing hooks for paid/unpaid report release',
            'Watermarking, access expiry and audit trail for every view/download',
            'e‑Signature blocks, doctor credentials and verification seals',
            'PACS links and image thumbnails where supported',
            'Reprint controls and print audit logs for compliance'
          ]}
        />
        <Spacing lg="60" md="40" />

        {/* 6 */}
        <Feature
          title="WhatsApp Auto Reports"
          description="Deliver results the moment they’re ready—securely—to the patient’s WhatsApp after a quick number verification. Reduce counters crowding and enhance patient satisfaction without compromising security."
          image="/images/whatsapp-reports.png"
          alt="WhatsApp automation"
          points={[
            'OTP based phone verification and consent capture',
            'Instant lab/radiology report PDFs with secure links',
            'Follow‑up reminders, medication nudges and feedback flows',
            'Compliant opt‑out and delivery analytics',
            'Support for multi‑language templates and rich media (images/HL7 PDFs)',
            'PIN protection / link expiry to prevent unauthorized access',
            'Webhook events for HIS updates and CRM journeys',
            'SMS/email fallback for non‑WhatsApp numbers'
          ]}
        />
        <Spacing lg="60" md="40" />

        {/* 7 */}
        <Feature
          reverse
          title="HRMS for Hospitals"
          description="Healthcare‑grade HR operations for clinical and non‑clinical staff. Handle rosters, credentialing, attendance policies and payroll with healthcare‑specific nuances built‑in."
          image="/images/hrms.png"
          alt="HRMS"
          points={[
            'Rostering with multi‑location and skill‑mix constraints',
            'Biometric/GPS attendance with late/OT rules',
            'Payroll, loans, advances and statutory compliance',
            'Performance, appraisals and 360° feedback',
            'Credentialing, CME tracking and document vault',
            'Duty roster exports, swap requests and vacancy insights',
            'Shift differential pay and nurse‑patient ratio planning',
            'Expiry alerts for licenses, ID cards and medical checks',
            'Onboarding/offboarding task lists and asset returns'
          ]}
        />
        <Spacing lg="60" md="40" />

        {/* 8 */}
        <Feature
          title="Internal Hospital App"
          description="A secure mobile app for staff collaboration that brings directory, communication and tasking into one place. Keep teams aligned with real‑time updates and reduce radio/phone dependency for routine coordination."
          image="/images/hospital internal management.png"
          alt="Internal app"
          points={[
            'Role‑based staff directory and secure chat channels',
            'Task boards, shift handovers and smart checklists',
            'Emergency codes, broadcast alerts and on‑call rosters',
            'Integrated knowledge base and micro‑learning',
            'SSO, granular permissions and full audit trail',
            'Push notifications, file/photo attachments and voice notes',
            'Incident reporting with location and media capture',
            'Shift swap requests and quick polls for staff feedback'
          ]}
        />
      </Div>

      <Spacing lg="100" md="80" />

      <style>{`
        .meditech-hero{position:relative;overflow:hidden;padding:120px 0;background:radial-gradient(1000px 600px at 75% 20%,rgba(255,0,0,.25),transparent 60%),linear-gradient(135deg,#000 0%,#0d0d10 55%,#1a0000 100%);color:#fff}
        .meditech-hero:after{content:'';position:absolute;inset:0;background:radial-gradient(800px 400px at 85% -10%,rgba(255,0,0,.15),transparent 60%)}
        .hero-copy{position:relative;z-index:2}
        .meditech-hero h1{font-weight:800;font-size:56px;line-height:1.1;margin:0 0 16px;letter-spacing:-.5px}
        .meditech-hero .accent{color:#ff2a2a}
        .hero-sub{font-size:18px;color:#d7d7d7;max-width:560px;margin-bottom:28px}
        .btn-cta{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#ff0000 0%,#cc0000 100%);color:#fff;padding:14px 22px;border-radius:12px;text-decoration:none;font-weight:700;box-shadow:0 12px 28px rgba(255,0,0,.25)}
        .btn-cta:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(255,0,0,.35)}
        .hero-icons{display:flex;gap:22px;align-items:center;margin-top:28px;flex-wrap:wrap}
        .icon-chip{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,0,0,.25);border-radius:999px;padding:10px 14px}
        .icon-chip img{width:22px;height:22px;filter:drop-shadow(0 2px 8px rgba(255,0,0,.25))}
        .icon-chip span{color:#e7e7e7;font-weight:600;font-size:14px}
        .hero-art{position:relative;z-index:2;display:flex;justify-content:center}
  .hero-art img{width:100%;max-width:560px;filter:drop-shadow(0 30px 60px rgba(255,0,0,.25));border-radius:32px}
        .meditech-image img{width:100%;border-radius:18px;background:linear-gradient(135deg,#0f0f14,#1b1b22);padding:16px;border:1px solid rgba(255,0,0,.25)}
  .meditech-content h3{font-size:28px;margin-bottom:10px}
  .meditech-content .feature-desc{color:#bcbcbc;margin-bottom:12px;max-width:560px}
        .meditech-content ul{margin:0;padding-left:18px;color:#d9d9d9}
        .meditech-content li{margin:6px 0}
        @media(max-width:991px){.meditech-hero{padding:80px 0}.meditech-hero h1{font-size:34px}.hero-art{margin-top:24px}.hero-icons{gap:12px}}
      `}</style>
    </>
  );
}

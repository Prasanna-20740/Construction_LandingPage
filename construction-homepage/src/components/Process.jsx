import React from 'react';
import { ArrowRight, ClipboardCheck, Hammer, CheckCircle2 } from 'lucide-react';
import processMainImg from '../assets/images/process.jpg';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Agency / Bidding",
      description: "Ensure design documents are reviewed and permitted with thorough code compliance and cost analysis.",
      icon: <ClipboardCheck size={28} />
    },
    {
      number: "02",
      title: "Construction",
      description: "Helps to coordinate furnishings and move-in process with dedicated on-site site supervisors and safety officers.",
      icon: <Hammer size={28} />
    },
    {
      number: "03",
      title: "Project Execution",
      description: "Client directs move in of equipment, operations & staff with complete post-handover warranty and validation.",
      icon: <CheckCircle2 size={28} />
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container process-container">
        {/* Section Heading */}
        <div className="section-title-wrap text-center">
          <span className="watermark-text">HOW?</span>
          <p className="section-subtitle">PROCESS OF CONSTRUCTION</p>
          <h2 className="section-title">How it works in construction?</h2>
          <p className="section-lead-desc">
            Slogan creation for your construction company is crucial for the overall branding.
          </p>
        </div>

        {/* Content Row: Left Image, Right Steps */}
        <div className="process-row">
          <div className="process-image-col">
            <div className="process-img-wrapper">
              <div className="process-img-backdrop"></div>
              <img
                src={processMainImg || "/images/process.jpg"}
                alt="Process of Construction"
                className="process-main-img"
                onError={(e) => {
                  e.currentTarget.src = "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/process.jpg";
                }}
              />
            </div>
          </div>

          <div className="process-steps-col">
            <div className="process-steps-list">
              {steps.map((step, idx) => (
                <div key={idx} className="process-step-item">
                  <div className="step-number-box">
                    <span className="step-num">{step.number}</span>
                  </div>
                  <div className="step-text-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="process-cta-wrap">
              <a href="#services" className="btn btn-primary process-btn">
                SERVICES <ArrowRight size={16} className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

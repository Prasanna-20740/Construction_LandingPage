import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, PhoneCall, Mail, MapPin } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Business Department',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Your email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or project overview.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmissionStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Simulate frontend validation & response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'Business Department',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <section id="quote" className="quote-section">
      <div className="container quote-container">
        {/* Section Heading */}
        <div className="section-title-wrap text-center">
          <span className="watermark-text">QUOTE</span>
          <p className="section-subtitle">INTERESTED IN CONSTRUCTION?</p>
          <h2 className="section-title">Request a free and fair quote</h2>
          <p className="section-lead-desc">
            Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored, We hope that the above Construction Slogans. Don’t forget to share it on social media.
          </p>
        </div>

        {/* Form Container Grid */}
        <div className="quote-box-grid">
          {/* Left Dark Info Card */}
          <div className="quote-info-card">
            <h3 className="info-card-title">Let’s discuss your construction vision</h3>
            <p className="info-card-desc">
              Have an upcoming commercial build, residential expansion, or infrastructure engineering project? Reach our estimation desk for a prompt, transparent estimate.
            </p>

            <div className="info-contact-list">
              <div className="info-contact-item">
                <div className="info-icon-circle">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <span className="info-label">Direct Phone Line</span>
                  <a href="tel:+18182345678" className="info-value">+1 (818) 23 45 678</a>
                </div>
              </div>

              <div className="info-contact-item">
                <div className="info-icon-circle">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-label">Inquiry Mailbox</span>
                  <a href="mailto:info@apexbuild.com" className="info-value">info@apexbuild.com</a>
                </div>
              </div>

              <div className="info-contact-item">
                <div className="info-icon-circle">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-label">Headquarters</span>
                  <span className="info-value">123 Construction Blvd, Suite 400, Los Angeles, CA</span>
                </div>
              </div>
            </div>

            <div className="info-note-box">
              <p>
                <strong>Frontend Demo Notice:</strong> This inquiry form performs client-side validation only. Inquiries are not submitted to an active backend server.
              </p>
            </div>
          </div>

          {/* Right Yellow Form Card */}
          <div className="quote-form-card">
            {submissionStatus === 'success' && (
              <div className="form-alert success-alert" role="alert">
                <CheckCircle size={22} className="alert-icon" />
                <div>
                  <strong>Quote Request Received!</strong>
                  <p>Thank you for reaching out. (Frontend demonstration only — inquiry validated successfully).</p>
                </div>
              </div>
            )}

            {submissionStatus === 'error' && (
              <div className="form-alert error-alert" role="alert">
                <AlertCircle size={22} className="alert-icon" />
                <div>
                  <strong>Please correct the errors below</strong>
                  <p>All required fields must be completed properly before proceeding.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="quote-form-element">
              <div className="form-row-2col">
                <div className="form-group">
                  <label htmlFor="quote-name">Your Name</label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    required
                  />
                  {errors.name && <span className="field-error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="quote-email">Your Email</label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    required
                  />
                  {errors.email && <span className="field-error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label htmlFor="quote-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=""
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quote-dept">Department</label>
                  <select
                    id="quote-dept"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Business Department">Business Department</option>
                    <option value="Personal Department">Personal Department</option>
                    <option value="Support Department">Support Department</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="quote-subject">Subject (required)</label>
                <input
                  type="text"
                  id="quote-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=""
                  className={`form-input ${errors.subject ? 'input-error' : ''}`}
                  required
                />
                {errors.subject && <span className="field-error-text">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="quote-message">Your Message (required)</label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=""
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  required
                ></textarea>
                {errors.message && <span className="field-error-text">{errors.message}</span>}
              </div>

              <div className="form-submit-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-dark form-submit-btn"
                >
                  {isSubmitting ? 'Sending Request...' : 'REQUEST A QUOTE'}
                  <Send size={16} className="btn-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

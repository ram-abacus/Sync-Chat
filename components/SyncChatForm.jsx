'use client';

import { useState } from 'react';
import styles from './SyncChatForm.module.css';

export default function SyncChatForm() {
  const [formData, setFormData] = useState({
    f_name: '',
    business_email: '',
    phone: '',
    team_size: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Extract the actual field name from mauticform[field_name]
    const fieldName = name.replace('mauticform[', '').replace(']', '');
    
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    
    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.f_name?.trim()) {
      newErrors.f_name = 'This field is required';
    }
    
    if (!formData.business_email?.trim()) {
      newErrors.business_email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.business_email.trim())) {
      newErrors.business_email = 'Please enter a valid email address';
    }
    
    if (!formData.phone?.trim()) {
      newErrors.phone = 'This field is required';
    }
    
    if (!formData.team_size || formData.team_size === '') {
      newErrors.team_size = 'This field is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    setMessage('');
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Check if there's a redirect URL from Mautic
        if (data.redirect) {
          // Redirect to the URL provided by Mautic
          window.location.href = data.redirect;
        } else {
          // Show success message and clear form if no redirect
          setMessage('Thank you! Your demo request has been submitted successfully.');
          setFormData({
            f_name: '',
            business_email: '',
            phone: '',
            team_size: ''
          });
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage('Sorry, there was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.mauticformWrapper}>
      <form onSubmit={handleSubmit} className={styles.mauticformInnerform} noValidate>
        {message && (
          <div className={`${styles.mauticformMessage} ${message.includes('error') || message.includes('Sorry') ? styles.mauticformError : ''}`}>
            {message}
          </div>
        )}
        
        <div className={`${styles.mauticformRow} ${styles.mauticformRequired}`}>
          <label htmlFor="f_name" className={styles.mauticformLabel}>
            Name
          </label>
          <input
            type="text"
            name="mauticform[f_name]"
            id="f_name"
            placeholder="Your Name"
            className={styles.mauticformInput}
            value={formData.f_name}
            onChange={handleChange}
          />
          {errors.f_name && (
            <span className={styles.mauticformErrormsg}>
              {errors.f_name}
            </span>
          )}
        </div>

        <div className={`${styles.mauticformRow} ${styles.mauticformRequired}`}>
          <label htmlFor="business_email" className={styles.mauticformLabel}>
            Business Email
          </label>
          <input
            type="email"
            name="mauticform[business_email]"
            id="business_email"
            placeholder="name@company.com"
            className={styles.mauticformInput}
            value={formData.business_email}
            onChange={handleChange}
          />
          {errors.business_email && (
            <span className={styles.mauticformErrormsg}>
              {errors.business_email}
            </span>
          )}
        </div>

        <div className={`${styles.mauticformRow} ${styles.mauticformRequired}`}>
          <label htmlFor="phone" className={styles.mauticformLabel}>
            Phone
          </label>
          <input
            type="tel"
            name="mauticform[phone]"
            id="phone"
            placeholder="Phone"
            className={styles.mauticformInput}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <span className={styles.mauticformErrormsg}>
              {errors.phone}
            </span>
          )}
        </div>

        <div className={`${styles.mauticformRow} ${styles.mauticformRequired}`}>
          <label htmlFor="team_size" className={styles.mauticformLabel}>
            Team Size
          </label>
          <select
            name="mauticform[team_size]"
            id="team_size"
            className={styles.mauticformSelectbox}
            value={formData.team_size}
            onChange={handleChange}
          >
            <option value="">Select team size</option>
            <option value="10-50">10-50</option>
            <option value="51-200">51-200</option>
            <option value="201-1000">201-1000</option>
            <option value="1000+">1000+</option>
          </select>
          {errors.team_size && (
            <span className={styles.mauticformErrormsg}>
              {errors.team_size}
            </span>
          )}
        </div>

        <div className={styles.mauticformRow}>
          <button
            type="submit"
            className={`${styles.mauticformButton} ${styles.btnGhost}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Request Demo'}
          </button>
        </div>
      </form>
    </div>
  );
}
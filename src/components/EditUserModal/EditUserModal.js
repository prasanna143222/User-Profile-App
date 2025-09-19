import React, { useState, useEffect } from 'react';

const EditUserModal = ({ 
  visible, 
  user, 
  onCancel, 
  onSave 
}) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user && visible) {
      setFormData({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        company: user.company.name,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode
      });
    }
  }, [user, visible]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      company: {
        name: formData.company
      },
      address: {
        ...user.address,
        street: formData.street,
        suite: formData.suite,
        city: formData.city,
        zipcode: formData.zipcode
      }
    };
    
    onSave(updatedUser);
  };

  if (!visible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">Edit User</div>
        
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input 
              type="text"
              className="form-input"
              value={formData.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input 
              type="text"
              className="form-input"
              value={formData.username || ''}
              onChange={(e) => handleChange('username', e.target.value)}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email"
              className="form-input"
              value={formData.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input 
              type="tel"
              className="form-input"
              value={formData.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Website</label>
            <input 
              type="text"
              className="form-input"
              value={formData.website || ''}
              onChange={(e) => handleChange('website', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Company</label>
            <input 
              type="text"
              className="form-input"
              value={formData.company || ''}
              onChange={(e) => handleChange('company', e.target.value)}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Street</label>
            <input 
              type="text"
              className="form-input"
              value={formData.street || ''}
              onChange={(e) => handleChange('street', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Suite</label>
            <input 
              type="text"
              className="form-input"
              value={formData.suite || ''}
              onChange={(e) => handleChange('suite', e.target.value)}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">City</label>
            <input 
              type="text"
              className="form-input"
              value={formData.city || ''}
              onChange={(e) => handleChange('city', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Zipcode</label>
            <input 
              type="text"
              className="form-input"
              value={formData.zipcode || ''}
              onChange={(e) => handleChange('zipcode', e.target.value)}
            />
          </div>
        </div>
        
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
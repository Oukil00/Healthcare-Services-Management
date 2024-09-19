import React, { useState, useEffect } from 'react';

const ServiceForm = ({ addService, editServiceData }) => {
  const [service, setService] = useState({ name: '', description: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    if (editServiceData) {
      setService(editServiceData);
      setIsEditing(true);
    }
  }, [editServiceData]);

  const handleInputChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    let errors = { name: '', description: '', price: '' };

    if (!service.name) {
      errors.name = 'Service name is required';
      valid = false;
    }
    if (!service.description) {
      errors.description = 'Description is required';
      valid = false;
    }
    if (!service.price || isNaN(service.price)) {
      errors.price = 'Price is required and must be a valid number';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    addService(service, isEditing); 
    setService({ name: '', description: '', price: '' }); 
    setIsEditing(false); 
    setErrors({ name: '', description: '', price: '' }); 
  };

  const handleCancelEdit = () => {
    setService({ name: '', description: '', price: '' });
    setIsEditing(false);
    setErrors({ name: '', description: '', price: '' }); 
  };

  return (
    <div className="flex justify-center items-center mt-12 mb-12">
      <div className="bg-gradient-to-r from-[#53E88B] to-[#15BE77] shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {isEditing ? 'Edit Service' : 'Add New Service'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={service.name}
              className="w-full px-4 py-2 rounded-lg border"
              placeholder="Service Name"
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="description"
              value={service.description}
              className="w-full px-4 py-2 rounded-lg border"
              placeholder="Description"
              onChange={handleInputChange}
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">{errors.description}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="price"
              value={service.price}
              className="w-full px-4 py-2 rounded-lg border"
              placeholder="Price"
              onChange={handleInputChange}
            />
            {errors.price && (
              <p className="text-red-600 text-sm mt-1">{errors.price}</p>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full py-2  text-white rounded-lg font-bold hover:text-black hover:bg-white transition duration-300"
            >
              {isEditing ? 'Update Service' : 'Add Service'}
            </button>
            {isEditing && (
              <button
                type="button"
                className="w-full py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-800 transition duration-300 ml-2"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;

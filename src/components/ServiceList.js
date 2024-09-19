import React from 'react';

const ServiceList = ({ services, editService, deleteService }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.length === 0 && <p>No services available.</p>}
      {services.map((service, index) => (
        <li
          key={index}
          className="bg-gradient-to-r from-[#53E88B] to-[#15BE77] shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <div>
            <strong>{service.name}</strong> - 
            <span className="block text-sm whitespace-normal break-words">{service.description}</span> 
            (${service.price})
          </div>
          <div className="mt-4">
            <button
              className="mr-2 text-blue-600"
              onClick={() => editService(index)}
            >
              Edit
            </button>
            <button
              className="text-red-600"
              onClick={() => deleteService(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;

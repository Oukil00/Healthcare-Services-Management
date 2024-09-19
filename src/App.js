import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import Header from './components/Header';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [services, setServices] = useState([]);
  const [editServiceData, setEditServiceData] = useState(null);

  const handleAuth = (isAuth) => {
    setIsAuthenticated(isAuth);
  };

  const addService = (service, isEditing) => {
    if (isEditing) {
      const updatedServices = services.map((s, index) =>
        index === editServiceData.index ? service : s
      );
      setServices(updatedServices);
      setEditServiceData(null);
    } else {
      setServices([...services, service]);
    }
  };

  const editService = (index) => {
    setEditServiceData({ ...services[index], index });
  };

  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div className="App">
      <Header />
        <div className="container mx-auto p-6">
          <ServiceForm addService={addService} editServiceData={editServiceData} />
          <ServiceList services={services} editService={editService} deleteService={deleteService} />
        </div>
     
    </div>
  );
}

export default App;

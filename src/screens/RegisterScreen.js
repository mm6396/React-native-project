import React, { useState } from 'react';
import { Button, DatePicker, Input, Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const RegisterScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleFormSubmit = () => {
    // Send a POST request to your back-end server
    // This is where you'd handle actual scheduling logic
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '24px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Title level={4}>Date:</Title>
          <DatePicker
            style={{ width: '100%' }}
            value={selectedDate}
            onChange={handleDateSelect}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <Title level={4}>Time Slot:</Title>
          <Input
            placeholder="Enter time slot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <Title level={4}>Name:</Title>
          <Input
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <Title level={4}>Email:</Title>
          <Input
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <Title level={4}>Notes:</Title>
          <Input.TextArea
            placeholder="Enter notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
          />
        </div>
        <Button type="primary" onClick={handleFormSubmit}>
          Schedule Appointment
        </Button>
      </Content>
    </Layout>
  );
};

export default RegisterScreen;
import React, { useState } from 'react';
import { Modal, TextField, Button, Box } from '@mui/material';

const CustomModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  const handleAdd = () => {
    const newCard = {
      id: Date.now(),
      name,
      email,
      phone,
      age,
    };

    onAdd(newCard);
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box className="modal">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <div className="modal-buttons">
          <Button onClick={handleAdd}>Add</Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomModal;
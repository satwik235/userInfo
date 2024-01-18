import React, { useState } from 'react';
import { Modal, TextField, Button, Box } from '@mui/material';

const EditModal = ({ card, onClose, onEdit }) => {
  const [editedCard, setEditedCard] = useState({ ...card });

  const handleEdit = () => {
    onEdit(editedCard);
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box className="modal">
        <TextField
          label="Name"
          value={editedCard.name}
          onChange={(e) => setEditedCard({ ...editedCard, name: e.target.value })}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          value={editedCard.email}
          onChange={(e) => setEditedCard({ ...editedCard, email: e.target.value })}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Phone"
          value={editedCard.phone}
          onChange={(e) => setEditedCard({ ...editedCard, phone: e.target.value })}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Age"
          value={editedCard.age}
          onChange={(e) => setEditedCard({ ...editedCard, age: e.target.value })}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <div className="modal-buttons">
          <Button onClick={handleEdit}>Save</Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditModal;
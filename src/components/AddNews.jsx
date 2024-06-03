import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import axios from 'axios';

const AddNews=({ open, onClose, onAddNews }) => {
    const [formData, setFormData]=useState({
        introtext: '',
        postedBy: '',
        lastUpdated: new Date().toISOString().slice(0, 16),
        category: '',
        published: false,
    });

    const handleChange=(e) => {
        const { name, value, type, checked }=e.target;
        setFormData({
            ...formData,
            [name]: type==='checkbox'? checked:value,
        });
    };

    const handleSubmit=() => {
        axios.post('/api/news', formData)
            .then(response => {
                onAddNews(response.data); // Pass the new news item to the callback
                onClose();
            })
            .catch(error => console.error('Error adding news:', error));
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add News</DialogTitle>
            <DialogContent>
                <TextField
                    name="introtext"
                    label="Introtext"
                    value={formData.introtext}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    name="postedBy"
                    label="Posted By"
                    value={formData.postedBy}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    name="lastUpdated"
                    label="Last Updated"
                    type="datetime-local"
                    value={formData.lastUpdated}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    name="category"
                    label="Category"
                    value={formData.category}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="published"
                            checked={formData.published}
                            onChange={handleChange}
                        />
                    }
                    label="Published"
                />
                <Button onClick={handleSubmit} color="primary" variant="contained" style={{ marginTop: '16px' }}>
                    Add
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default AddNews;

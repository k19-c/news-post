import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const EditNews=({ open, onClose, itemId }) => {
    const [formData, setFormData]=useState({
        introtext: '',
        postedBy: '',
        lastUpdated: '',
        category: '',
        published: false,
    });

    useEffect(() => {
        // Fetch news item data for editing
        axios.get(`/api/news/${itemId}`)
            .then(response => setFormData(response.data))
            .catch(error => console.error('Error fetching news item:', error));
    }, [itemId]);

    const handleChange=(e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit=() => {
        axios.put(`/api/news/${itemId}`, formData)
            .then(response => {
                // Handle success
                onClose();
            })
            .catch(error => console.error('Error editing news:', error));
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit News</DialogTitle>
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
                <TextField
                    name="published"
                    label="Published"
                    value={formData.published}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                />
                <Button onClick={handleSubmit} color="primary" variant="contained">Save</Button>
            </DialogContent>
        </Dialog>
    );
};

export default EditNews;

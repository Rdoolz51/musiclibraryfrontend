import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AddSong = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/songs', {
                title: title,
                artist: artist,
                genre: genre,
            });
            // Handle success, e.g., show a success message or update the song list
            console.log('New song added:', response.data);
            window.location.reload();
        } catch (error) {
            // Handle error, e.g., show an error message
            console.error('Error adding song:', error);
        }
    };

    return (
        <Form className="m-3 bg-dark text-white fw-bold p-3 rounded" style={{ width: 400 }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3 bg-dark" controlId="songTitle">
                <Form.Label className='m-3'>Title</Form.Label>
                <Form.Control
                    style={{ width: 300 }}
                    className='m-3'
                    type="text"
                    placeholder="Enter song title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="songArtist">
                <Form.Label className='m-3'>Artist</Form.Label>
                <Form.Control
                    style={{ width: 300 }}
                    className='m-3'
                    type="text"
                    placeholder="Enter artist name"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="songGenre">
                <Form.Label className='m-3'>Genre</Form.Label>
                <Form.Control
                    style={{ width: 300 }}
                    className='m-3'
                    type="text"
                    placeholder="Enter song genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className='m-3'>
                Add Song
            </Button>
        </Form>
    );
};

export default AddSong;

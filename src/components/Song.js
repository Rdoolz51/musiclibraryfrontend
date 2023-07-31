import { React } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Song = ({ songs }) => {
    return (
        <div>
            {songs.map((song, index) => (
                <Card bg='dark' text='white' style={{ width: '18rem' }} className='m-3' key={index}>
                    <Card.Body>
                        <Card.Title>{song.title}</Card.Title>
                        <Card.Subtitle className="mb-2">{song.artist.name}</Card.Subtitle>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant='dark'>Genre: {song.genre.name}</ListGroup.Item>
                            {/* <ListGroup.Item variant='dark'>Rating: {song.rating}</ListGroup.Item> */}
                        </ListGroup>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
export default Song;
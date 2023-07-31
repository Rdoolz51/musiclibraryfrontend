import { React, useState, useEffect } from 'react';
import Song from './components/Song';
import axios from 'axios';
import AddSong from './components/AddSong';


const App = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/songs');
        const data = response.data;
        setSongs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Song songs={songs} />
      <AddSong />
    </div>


  );
}

export default App;

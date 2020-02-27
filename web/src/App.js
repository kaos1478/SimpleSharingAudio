import React, {useState, useEffect} from 'react';
import Audio from './components/AudioItem';
import Select from './components/Select';
import Api from './services/Api';
import './global.css'
import './App.css'

function App() {
  
  const [audio, setAudio] = useState('');
  const [paths, setPaths] = useState([]);

  useEffect( () => {
    getAudios();
  }, []);

  async function getAudios(){
    const {data} = await Api.get('/audios')
    setPaths(data.paths);
  }

  function handleAudio(e){
    setAudio(e.target.value);
  }

  return (
    <div id="app">
      <aside>
        <Select value={audio} onChange={handleAudio} option={paths} id="audioSelect" />
      </aside>
      <main>
        <Audio file={audio}/>
      </main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannellContainer, ChannellListContainer } from './components'

const apiKey = '7kavkffv4uqa'

const client = StreamChat.getInstance(apiKey)

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannellListContainer

        />
        <ChannellContainer

        />
      </Chat>
    </div>
  );
}

export default App;
 
import './App.css';
import './styles.css'
import Entry from './Entry';

const Entries = (entry) => {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  )
}

function App({ emojipedia }) {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <div>
        <dl className="dictionary">
          {emojipedia.map(Entries)}
        </dl>
      </div>
    </div>
  );
}

export default App;

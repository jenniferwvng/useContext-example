import { useContext } from 'react';
import { NewNoteInput } from './NewNoteInput';
import { NotesContext } from './NotesContext';

function App() {
  const { notes, removeNote } = useContext(NotesContext);

  return (
    <>
      <NewNoteInput />
      <p>Note-making built using React Context</p>
      <ul>
        {notes.map(note => (
          <li onClick={() => removeNote(note.id)} key={note.id}>
            {note.userinput}
          </li>
        ))}
      </ul>
    </>
  );
}

//we need something to store the list of notes and provide the functions to add and remove 
//one of the ways to do it is to use react context



export default App;

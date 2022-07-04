import { useContext, useState } from 'react';
import { NotesContext } from './NotesContext';

export function NewNoteInput () {
    const { addNote } = useContext(NotesContext);
    const [userinput, setUserinput] = useState('');

    const onUserinputChange = (e) => {
        setUserinput(e.target.value);
    }

    const onSubmit = () => {
        addNote(userinput);
        setUserinput('');
    }

    return (
        <>
        <label>
            Make a note 
        <input 
            onChange={onUserinputChange}
            type="text"
            value={userinput}
        />
        </label>
        <button onClick={onSubmit}>Add note</button>
        </>
    );
}
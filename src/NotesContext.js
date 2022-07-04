import { createContext, useState } from 'react';

//Default value will be used only if your component tree is not wrapped into Provider
export const NotesContext = createContext({defaultValue: "No Provider wrapper found"});
//When using Typesript, set defaultValue to undefined when there's no meaningful defaultValue to supply, protects you from forgetting
//to set up the provider - the default value of createContext will only be used if there's no wrapper of Provider

//Context consists of two parts: 1. Provider in which we put the values through the value={{ }} prop 2. In your components, you then use
//the Consumer to get the values back from the Context

//Define the Provider that will hold notes list and will provide the functions to add and remove not
//Wrap App in NotesProvider in index.js
export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    const addNote = (userinput) => {
        setNotes([ ...notes, {userinput, id: Math.random()}])
    }

    const removeNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    return (
    <NotesContext.Provider value={{ notes, addNote, removeNote }}>
        {children}
    </NotesContext.Provider>
    )
}

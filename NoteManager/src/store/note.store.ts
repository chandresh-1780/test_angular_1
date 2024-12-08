import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signal } from '@angular/core';
import { signalStore, withMethods, withState } from '@ngrx/signals';

export interface Note {
    note_type: string;
    note_text: string;
    note_time: string;
    note_username: string;
}

const NoteData = {
    note: [] as Note[]
};

const initialize = signal(NoteData);

export const NoteStore = signalStore(
    { providedIn: 'root' },
    withDevtools('NoteData'),
    withState(initialize),
    withMethods((state) => {
        return {
            // Add a new note to the array
            // addNote(newNote: Note) {
            //     const updatedNotes = [newNote, ...state().note];
            //     state.set({ ...state(), note: updatedNotes });
            // },

            // // Remove a note from the array by index or unique identifier
            // removeNoteByTime(noteTime: string) {
            //     const updatedNotes = state().note.filter((note: any) => note.note_time !== noteTime);
            //     state.set({ ...state(), note: updatedNotes });
            // }

        };
    })
);

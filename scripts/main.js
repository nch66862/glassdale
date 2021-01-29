import { OfficerList } from "./officers/OfficerList.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import "./notes/NoteList.js";
import "./criminals/CriminalAlibiList.js"
import { ShowHeader } from "./header/Header.js";
import { ShowWitnessButton } from "./witnesses/WitnessButton.js";

ShowHeader()
ShowWitnessButton()
CriminalList()
OfficerList()
NoteForm ()
ShowNoteButton()
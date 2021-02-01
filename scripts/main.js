import { OfficerList } from "./officers/OfficerList.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import "./notes/NoteList.js";
import "./criminals/CriminalAlibiList.js"
import "./witnesses/WitnessList.js"
import { ShowHeader } from "./header/Header.js";
import { ShowWitnessButton } from "./witnesses/WitnessButton.js";
import { ShowCriminalButton } from "./criminals/CriminalButton.js";

ShowHeader()
ShowWitnessButton()
ShowCriminalButton()
CriminalList()
OfficerList()
NoteForm ()
ShowNoteButton()
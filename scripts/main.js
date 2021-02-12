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
import { ShowFacilitiesButton } from "./facilities/ShowFacilitiesButton.js";

ShowHeader()
ShowWitnessButton()
ShowCriminalButton()
ShowFacilitiesButton()
OfficerList()
ShowNoteButton()
CriminalList()
    .then(NoteForm)
import { CriminalList } from "./criminals/CriminalList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import "./notes/NoteList.js";
import "./criminals/CriminalAlibiList.js"
import "./witnesses/WitnessList.js"
import "./facilities/FacilityList.js"
import { ShowHeader } from "./header/Header.js";
import { ShowWitnessButton } from "./witnesses/WitnessButton.js";
import { ShowCriminalButton } from "./criminals/CriminalButton.js";
import { ShowFacilitiesButton } from "./facilities/ShowFacilitiesButton.js";

ShowHeader()
ShowWitnessButton()
ShowCriminalButton()
ShowFacilitiesButton()
ShowNoteButton()
CriminalList()
    .then(NoteForm)
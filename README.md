# DriveAssist interaction prototype

README word count: 324 words (excluding headings and commands).

This browser prototype demonstrates the assisted-driving interaction developed in Labs 2 and 3. It explores how a driver understands steering resistance and reports a missed obstacle feature. All scenarios and outcomes are scripted.

## Run

Open `index.html` in a modern browser. Choose a scenario, use the buttons to progress, and restart or switch scenarios at any point. The interface works without a server. The optional DM Sans web font requires internet access; a local fallback is provided.

## Status and technology

HTML, CSS and JavaScript implement the interface, scenario navigation, driver correction and two outcome branches. The road display, detection, prediction, spoken feedback, steering resistance and braking are simulations. Vehicle sensors, real-time perception, path validation, audio, actuators and a production event logger are planned concepts and are not implemented. The user selects the branch to explore the scripted consequence; this selection is not a safety assessment.

## Development and checks

Lab 2 established the motorcycle intervention, explanation and missed-protrusion recovery. Lab 3 specified the system path and described standard and problem cases as simulations. This prototype translates those descriptions into a navigable demonstration, including the no-confirmed-path branch. Its road illustration is schematic and does not establish physical distances or timing. No user study or real-vehicle evaluation is represented.

JavaScript syntax was checked with `node --check`. A simulated DOM check exercised scenario selection, the normal sequence, both correction outcomes and restart. A Chrome browser walkthrough reached the normal review and both correction outcomes without page errors. No participant or real-vehicle testing was performed.

## Project files

`Project_Report.pdf` is the report. `Project_Report.html` contains the same report and embedded illustrations. `report.md` is its editable source, and `figures/` contains the diagrams.

## AI assistance

OpenAI Codex generated the prototype, figures, report draft and README using the existing A1 and Lab 2 and 3 materials. Codex checked the scripted normal and two correction outcomes in a browser and reviewed the simulation boundaries against the lab specification. The student should review the work and verify the design choices and references before submission.

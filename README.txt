NurseVoice AI - Stage 2 Build 2.7

Drug chart redesigned as category-specific entry cards. Select a category first; only its relevant fields are displayed.

START / REGULAR / SOS
- Drug name
- Dose
- Route
- Administration time
- Frequency
- Status / remarks
- No IVF or infusion calculation fields.

INFUSION
- Infusion drug name
- Total mixed-fluid volume (mL)
- Infusion rate (mL/hour), entered as prescribed
- Start time
- Status / remarks
- No drops/min calculation.

IVF
- Fluid: RL, NS, DNS, ½NS or 10D
- Plan: Single fluid or Alternating RL and NS
- Prescribed rate (mL/hour)
- Actual giving-set drop factor: 10, 15, 20 or 60 gtt/mL
- Automatically calculated drops/min
- Start time and status / remarks

Calculation: drops/min = prescribed mL/hour × actual drop factor ÷ 60. Example: 125 mL/hour with a 20 gtt/mL set = 42 drops/min (rounded).

Alternating RL/NS is a documentation label only. Add each bag as a separate row and record the actual fluid and start time. The app does not determine which fluid is due next.

Installation:
1. Extract this ZIP.
2. Replace index.html and sw.js in the GitHub repository (main branch).
3. Commit both files.
4. Close the old website tab and reopen the GitHub Pages URL.
5. Confirm the header says Build 2.7.

Safety:
This is a documentation prototype, not an approved EHR or infusion device. Verify the active prescription, final mixed volume, prescribed rate, actual giving-set drop factor, pump settings and hospital policy. Do not use calculated values as a substitute for clinical verification. Do not enter identifiable patient information in the public demo.

Build 2.9: START category no longer asks for frequency. REGULAR category calculates remaining evenly spaced dose times within the same calendar day from the first dose time and selected interval. Verify actual administration times against the prescription; this is not an automatic medication order. Replace index.html and sw.js.


Build 2.9: Date and time fields now default to the device local current date/time when blank. Fields remain editable; changing a value is supported. Newly added drug time fields also default to the current local time.


BUILD 3.0 - DATE-WISE DRUG CHART
- Drug chart date defaults to today's local phone date.
- Drug entries save automatically in this browser, separately for each date and patient key (UHID, or name if UHID is blank).
- Selecting a previous date loads only that date's saved drug chart. Previous dates are view-only.
- A date with no saved entries starts with a blank daily chart; previous orders are never copied forward.
- Today's chart is editable. Returning to today's date restores today's entries.
- Storage is local to this browser/device. Clearing browser data can erase entries. This prototype is not an approved EHR; use fictional/de-identified data only.

NurseVoice AI Stage 2 - Clinical chart enhancements

1) VITAL SIGNS
Adult screening flags are shown in red:
- HR <60 or >100/min
- RR <12 or >20/min
- Temperature <36 C or >=38 C
- SpO2 <94%
- BP systolic <90 or >=140, or diastolic >=90 mmHg
Green shading means the entered value is within these basic adult screening bounds. These are not universal targets, diagnosis or early-warning scores. Clinical context, age, pregnancy, chronic baseline, oxygen target and local escalation policy take precedence. Values are only flagged after a complete parse.

2) INTAKE / OUTPUT
Totals update whenever hourly rows are entered/edited:
- Total input
- Total output
- Net balance = input minus output
The totals include all rows currently present. Ensure all entries are for the same time period. It does not interpret fluid status.

3) IVF DROP RATE
For IV fluids, enter:
- Volume in mL
- Duration in hours
- Giving set drop factor: 10, 15, 20 or 60 gtt/mL
Formula: drops/min = (volume x drop factor) / (duration in hours x 60)
Result is rounded to the nearest whole drop/min. Confirm actual giving-set calibration and prescribed infusion plan. This is a calculation aid, not a pump setting or independent administration order.

DEPLOY
Replace index.html in your existing GitHub repository, commit to main, wait for GitHub Pages, then refresh:
https://mvb-vijay.github.io/Nurse-voice-AI/

Use fictional/de-identified patient data in this public prototype. Check every calculation and clinical value before use.

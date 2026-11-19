NurseVoice AI - Stage 2 (General Nursing Notes)

FILES
- index.html: complete app
- manifest.json: installable PWA metadata
- sw.js: basic offline shell cache

ANDROID / GITHUB PAGES INSTALL
1. Download and extract this ZIP on your Android phone.
2. Open your GitHub repository: mvb-vijay/Nurse-voice-AI.
3. Replace the existing index.html, manifest.json and sw.js with the files from this folder.
4. Commit the changes to the main branch.
5. Wait for GitHub Pages deployment to finish.
6. Open https://mvb-vijay.github.io/Nurse-voice-AI/ in Chrome.
7. Refresh the page. If the old version remains, Chrome > Site settings > Storage > Clear data for this site, then reopen (this may clear cached Stage 1 model assets too).
8. Chrome menu > Add to Home screen / Install app.

HOW TO USE
- Enter note details and clinical observations manually.
- Use Start dictation to add speech to the transcript box if Chrome speech recognition is supported.
- Or paste the transcript from Stage 1 Whisper into the same box.
- Tap Generate nursing note, review/edit the result, then copy or download.

IMPORTANT LIMITATIONS
- Browser dictation uses the browser/device speech recognition service; it is not the Stage 1 Whisper model and may require internet.
- This version does not send data to an AI API and does not store entries automatically.
- The generated note only organizes entered text. It does not infer diagnoses, interpret findings, or invent missing information.
- Use fictional or de-identified test data only. Do not enter identifiable patient data into this public prototype.
- Verify all details, especially drug names, doses, routes, rates, units, decimal values, allergies and negative findings, before any official documentation.

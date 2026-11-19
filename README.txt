NurseVoice AI — Stage 1.1 Accuracy Upgrade

Files:
- index.html: updated app, model selector, audio recording and transcription
- sw.js: updated service-worker cache version
- manifest.json: PWA metadata

Update GitHub:
1. Open https://github.com/mvb-vijay/Nurse-voice-AI
2. Open index.html > pencil/Edit > replace ALL contents with the supplied index.html > Commit changes.
3. Repeat for sw.js and manifest.json, replacing the entire file contents.
4. Wait for GitHub Pages deployment to show a green tick in Actions.
5. Open https://mvb-vijay.github.io/Nurse-voice-AI/ in Chrome.
6. If old app persists, clear site data for mvb-vijay.github.io in Chrome settings, then reopen. Clearing site data may remove cached models.
7. Connect to Wi-Fi, choose Whisper Base, tap Download/load selected model and wait until loaded. Base is a separate model and must be downloaded separately from Tiny.
8. Test English first, then Telugu. Auto mode may attempt mixed speech but code-switching can remain inaccurate.
9. Test offline only after the selected model has loaded successfully online.

Model:
- Default: Xenova/whisper-base, multilingual and larger/slower than Tiny.
- Fallback: Xenova/whisper-tiny.
- Both use q8 quantized browser execution.
- Browser cache can be evicted/cleared; download again if that happens.

Clinical safety:
This is a prototype, not an approved EHR. Do not enter identifiable patient data or real patient audio. Manually verify every transcription, especially drug names, doses, routes, units, values, times and negative findings. No automatic medical-term correction is performed.

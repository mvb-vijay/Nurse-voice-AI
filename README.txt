# NurseVoice AI — Stage 1

## Files
- `index.html` — app interface and voice transcription logic
- `sw.js` — caches the app shell for offline reopening
- `manifest.json` — Android install/PWA settings

## Run on Android
Microphone access requires a secure context. Do not open `index.html` directly from the file manager.

Recommended free route:
1. Extract this ZIP.
2. Create a GitHub repository named `nursevoice`.
3. Upload all three files to the repository root.
4. In repository Settings → Pages, choose deploy from branch `main`, folder `/ (root)`.
5. Open the generated `https://YOUR-USERNAME.github.io/nursevoice/` URL in Chrome.
6. Allow microphone permission.
7. Tap "Download / load offline AI model" while online. Wait until it says the model is loaded.
8. Make a short test recording and transcribe it.
9. In Chrome menu ⋮ choose "Add to Home screen" or "Install app".
10. Open the installed app once while online, then test airplane mode.

## Offline note
The service worker caches the app shell. Transformers.js uses the browser Cache API for model assets. Browser storage may be cleared automatically or manually; if the model is evicted, connect to the internet and load it again. The initial download requires internet. Keep sufficient free storage and memory.

## Model
`Xenova/whisper-tiny` is a multilingual Whisper ONNX model. This app uses q8 quantization and CPU/WASM execution for broad compatibility. English and Telugu are supported; mixed-language accuracy can vary.

## Clinical safety
This is a prototype, not an approved EHR. Never use identifiable patient information for testing. Verify every transcription, especially patient identifiers, drug names, doses, routes, times, units and observations, before official documentation.

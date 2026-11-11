# Lumié — Android installable game

This is a mobile-first, offline-capable web app (PWA). Android users can install it from Chrome and launch it like an app. It is not a signed APK yet.

## Play on a computer

Open `index.html` directly for a quick preview. For the service worker and offline mode, serve the `outputs` folder on localhost:

```sh
cd outputs
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Install on Android

1. Publish the contents of this folder to a static HTTPS host.
2. Open its URL in Chrome on the Android phone.
3. Use Chrome’s menu and choose **Install app** or **Add to Home screen**.
4. Launch Lumié from the home screen. The game and supplied artwork are cached for offline play.

The first install downloads the artwork bundle (about 7 MB).

## Included gameplay

- Warm and hatch the mystery egg by tapping or shaking (motion permission depends on browser support).
- Discover one of 19 element types and its themed sanctuary.
- Feed, play with, pet, and put Lumié to sleep; progress is saved locally.
- Pop bubbles in a 30-second training round to earn XP and bond.
- Send Lumié on a timed Mystic Woods expedition for treats and star coins.
- Progress through Hatchling, Awakened, and Legendary XP milestones.

The supplied art includes elemental room backgrounds, hatchling/evolution reference boards, mood art, and battle illustrations. The prototype uses the room backgrounds and reference boards in-game. Local Wi-Fi battles, full unique animations for all 19 types, and a native Android APK are not part of this first build.

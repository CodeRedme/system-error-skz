# SYSTEM ERROR — Stray Kids 2D campaign

A browser game built with HTML Canvas, based on the supplied seven-world design guide. The campaign hub links 21 games in the guide's order, with mission objectives, keyboard and touch controls, health/progress HUD, animated character introductions, checkpoints, and sequential unlocks.

## Play

Serve this folder from a static web host such as GitHub Pages and open `index.html`. Keep every project file in the same folder. Browser security may block some media when opening pages directly from the file manager.

## Character art

Each world uses its own eight portraits cropped from the matching `World 1`–`World 9` sheet in `Pixel world character.zip` (`chars-w1-...webp` through `chars-w9-...webp`). Those portraits appear in character selection and during gameplay. The separate `member-art-...webp` images from `SKZ PIXEL PNG.zip` appear only in the animated character introduction. The source roster sheets and world backgrounds are included too.

## Campaign files

- `index.html` — title, world selection, character selection, and progression.
- `campaign.html` — responsive Canvas game screen and animated character intro.
- `campaign-data.js` — seven worlds, 21 game objectives and controls.
- `campaign.js` — playable game mechanics, input, HUD, progression, and results.
- `game-design-guide.pdf` — supplied design reference.
- `GITHUB-UPLOAD-GUIDE.md` — instructions for using the three upload ZIPs.

Older standalone prototypes remain included and now use the matching world-sheet portraits.

## Controls

Keyboard controls appear in each game's intro. WASD or arrows move; Space jumps or acts; Q changes phase/gravity; J fires; Shift dashes; P pauses. Touch controls appear on narrow screens. Progress is stored in the browser's local storage.

## Credits

Game concept, original art, programming, level design, and development: Tulika / @minberrydiary. Unofficial fan project; not affiliated with JYP Entertainment or Stray Kids.

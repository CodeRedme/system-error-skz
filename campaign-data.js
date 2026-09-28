'use strict';
window.SKZCampaignData = {
  members: ['bangchan','leeknow','changbin','hyunjin','han','felix','seungmin','in'],
  worlds: [
    {id:'origins',name:'World 1: Origins & System Escape',tag:'HELLEVATOR / DISTRICT 9 / MIROH',accent:'#35e0d0',bg:'scene-hellevator.webp',previewEra:'hellevator',defaultChar:'bangchan',modes:[
      {id:'hellevator-shaft',name:'Origins Data Maze',family:'arcade',href:'retro-arcade.html',artGroup:'world1',arcade:'pac-maze',bg:'scene-miroh.webp',objective:'Clear the neon maze of memory dots while dodging two roaming security glitches.',controls:'Arrow keys / WASD move · collect every dot · avoid glitches',max:1},
      {id:'district9-wall-breaker',name:'District 9 Pixel Platformer',family:'arcade',href:'retro-arcade.html',artGroup:'world1',arcade:'mario-platform',bg:'scene-hellevator.webp',objective:'Jump across elevated facility platforms, gather eight memory sparks, and reach the exit gate.',controls:'A/D or arrows move · Space or Up jumps',max:8},
      {id:'miroh-maze-runner',name:'Miroh Neon Snake',family:'arcade',href:'retro-arcade.html',artGroup:'world1',arcade:'snake-grid',bg:'scene-thisthat.webp',objective:'Guide a growing neon signal through the grid and collect eight energy cells without hitting yourself or the wall.',controls:'Arrow keys / WASD steer · collect 8 energy cells',max:8}
    ]},
    {id:'anarchy',name:'World 2: Cyber Concrete & Anarchy',tag:'YELLOW WOOD / GO LIVE / IN LIFE',accent:'#f6c453',bg:'scene-miroh.webp',previewEra:'yellowwood',defaultChar:'hyunjin',modes:[
      {id:'yellow-wood-stealth',name:'Cheese Dreams: Moon Bounce',family:'arcade',href:'retro-arcade.html',artGroup:'world2',arcade:'cheese-dreams',bg:'scene-godsmenu.webp',objective:'Bounce between moving moon pads, steering through the old spaceship and collecting six golden cheese pieces.',controls:'A/D or arrows steer · the moon bounces automatically · collect 6 cheeses',max:6},
      {id:'gods-menu-rush',name:'Dino Run: Signal Sprint',family:'arcade',href:'retro-arcade.html',artGroup:'world2',arcade:'dino-run',bg:'scene-rockstar.webp',objective:'Jump over corrupted stage barriers and survive the signal storm for 35 seconds.',controls:'Space or Up jumps · clear 8 obstacles · survive 35 seconds',max:8},
      {id:'back-door-dash',name:'Ball vs Block: Firewall Break',family:'arcade',href:'retro-arcade.html',artGroup:'world2',arcade:'ball-block',bg:'scene-district9.webp',objective:'Aim energy balls into numbered firewall blocks and clear twelve before the wall reaches your launcher.',controls:'Click / tap to aim and fire · each block takes several hits',max:12}
    ]},
    {id:'identity',name:'World 3: Raw Power & Identity',tag:'GRRR/BEWARE / NOEASY / CHRISTMAS EVEL',accent:'#ab8cff',bg:'scene-grrr.webp',previewEra:'grrr',defaultChar:'han',modes:[
      {id:'shadow-forest-hunt',name:'Cat Drop: Member Merge',family:'arcade',href:'retro-arcade.html',artGroup:'world3',arcade:'cat-drop',bg:'scene-grrr.webp',objective:'Drop pixel cats into the tower. Match identical levels and merge your way to a four-cat crown.',controls:'A/D move the drop lane · Space drops · match and merge cats',max:4},
      {id:'thunderous-clash',name:'Thunderous Soundwave Clash',family:'soundwave',bg:'scene-thunderous.webp',objective:'Cross the rooftops and clear ten incoming threats with sonic pulses.',controls:'A/D move · Space jumps · J fires a soundwave',max:10},
      {id:'christmas-evel-panic',name:'Christmas EveL Present Panic',family:'ice',bg:'scene-winter.webp',objective:'Slide over the ice, collect eight presents, and avoid rolling snowballs.',controls:'WASD or arrows steer · momentum continues after release',max:8}
    ]},
    {id:'matrix',name:'World 4: Cyber Matrix & Hearts',tag:'ODDINARY / MAXIDENT / SKZ-REPLAY',accent:'#8b7cf6',bg:'scene-maniac.webp',previewEra:'oddinary',defaultChar:'leeknow',modes:[
      {id:'maniac-gravity-inverter',name:'Maniac Gravity Inverter',family:'gravity',bg:'scene-maniac.webp',objective:'Flip gravity at terminal switches and reach the exit without touching the spikes.',controls:'A/D move · Space jumps · Q flips gravity · E uses terminal',max:3},
      {id:'case143-heart-defense',name:'Case 143 Heart Defense',family:'heart-defense',bg:'scene-maxident.webp',objective:'Match each falling monster shield with the right heart shot and clear three waves.',controls:'A/D move turret · 1/2/3 selects heart · Space or click fires',max:3},
      {id:'replay-cassette-rewind',name:'Replay Cassette Rewind',family:'memory',bg:'scene-cassette.webp',objective:'Repeat each button sequence, then rewind the hazard tape to restore all three logs.',controls:'Watch the sequence · use arrow keys to repeat · R rewinds a hazard',max:3}
    ]},
    {id:'celestial',name:'World 5: Celestial & Concert Arena',tag:'5-STAR / ROCK-STAR / ATE',accent:'#4fd8ff',bg:'scene-5star.webp',previewEra:'fivestar',defaultChar:'bangchan',modes:[
      {id:'s-class-constellation-climber',name:'S-Class Constellation Climber',family:'jetpack',bg:'scene-5star.webp',objective:'Boost between star platforms, refill fuel on landings, and reach the constellation gate.',controls:'A/D steer · hold Space to boost · land to refill fuel',max:1},
      {id:'lalalala-stage-blitz',name:'LALALALA Stage Blitz',family:'rhythm-runner',bg:'scene-rockstar.webp',objective:'Run the stage in time with the beat. Jump amplifiers and slide under pyrotechnics.',controls:'Space or Up jumps · Down slides · follow the visual beat',max:12},
      {id:'chk-chk-target-rush',name:'ATE: Bread Run Maze',family:'arcade',href:'retro-arcade.html',artGroup:'ate',arcade:'ate-maze',bg:'scene-ate.webp',objective:'Sneak through the neon maze, collect three bread-chip keycards, and reach the locked extraction gate.',controls:'Arrow keys / WASD move · collect 3 keycards · reach the exit',max:3}
    ]},
    {id:'horizons',name:'World 6: Next-Gen Horizons',tag:'HOP / GIANT / KARMA',accent:'#7cf9ff',bg:'scene-hop.webp',previewEra:'hop',defaultChar:'felix',modes:[
      {id:'quantum-dimension-switcher',name:'HOP: Waterway Run',family:'arcade',href:'retro-arcade.html',artGroup:'hop',arcade:'hop-run',bg:'scene-hop.webp',objective:'Cross the cyber lake route, jump over cargo crates, and gather seven light orbs before the gate.',controls:'A/D or arrows move · Space jumps · reach the far gate',max:7},
      {id:'titan-mech-rampage',name:'KARMA: Goal Rush',family:'arcade',href:'karma-firewall.html',artGroup:'karma',bg:'scene-karma.webp',objective:'Swipe to shoot at the moving goal target. Lead your shot and break through the firewall.',controls:'Click / drag from the ball to aim · release to shoot',max:2},
      {id:'karma-arena-clash',name:'KARMA: Toast Tower',family:'arcade',href:'karma-stack.html',artGroup:'karma',bg:'scene-karma.webp',objective:'Move the plate to stack the toast as high as possible. Avoid burnt pieces and keep the tower balanced.',controls:'Move the plate with arrows or touch · catch each toast',max:8}
    ]},
    {id:'multiverse',name:'World 7: Cosmic Multiverse',tag:'DO IT / THIS & THAT / SYSTEM ERROR CORE',accent:'#ff63b4',bg:'scene-doit.webp',previewEra:'doit',defaultChar:'seungmin',modes:[
      {id:'do-it-power-charge',name:'DO IT: Find the Members',family:'arcade',href:'do-it.html',artGroup:'doit',bg:'scene-doit.webp',objective:'The SYSTEM drained the color. Find the seven Stray Kids members hidden in each crowd before time runs out.',controls:'Tap or click the hidden members · wrong taps cost time · use hints sparingly',max:7},
      {id:'this-that-dual-track-rush',name:'This & That Dual-Track Rush',family:'dual-track',bg:'scene-thisthat.webp',objective:'Switch between This and That tracks to dodge blockades and reach the endpoint.',controls:'Up/Down switches tracks · Space jumps',max:1},
      {id:'system-error-core-boss',name:'System Error Core Boss',family:'boss',bg:'scene-core.webp',objective:'Survive three boss phases. Jump, shoot, and swap dimensions to expose the core.',controls:'A/D move · Space jumps · J fires · Q swaps dimensions',max:3}
    ]}
  ]
};

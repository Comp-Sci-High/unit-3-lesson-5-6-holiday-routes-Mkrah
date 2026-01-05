// Rank systems for both factions
const RANKS = {
  jedi: [
    { name: 'Jedi Initiate', minExp: 0 },
    { name: 'Jedi Youngling', minExp: 100 },
    { name: 'Jedi Padawan', minExp: 250 },
    { name: 'Jedi Knight', minExp: 500 },
    { name: 'Jedi Master', minExp: 1000 },
    { name: 'Council Member', minExp: 1800 },
    { name: 'Master of the Order', minExp: 2800 },
    { name: 'Grand Master', minExp: 4000 }
  ],
  sith: [
    { name: 'Sith Acolyte', minExp: 0 },
    { name: 'Sith Adept', minExp: 100 },
    { name: 'Sith Apprentice', minExp: 250 },
    { name: 'Sith Master', minExp: 500 },
    { name: 'Sith Lord', minExp: 1000 },
    { name: 'Darth', minExp: 1800 },
    { name: 'Dark Council Member', minExp: 2800 },
    { name: 'Dark Lord of the Sith', minExp: 4000 },
    { name: 'Sith Emperor', minExp: 5500 }
  ]
};

// Quest database
const QUESTS = {
  jedi: [
    {
      id: 'jedi-1',
      title: 'Meditation in the Temple',
      description: 'Meditate for inner peace and clarity.',
      exp: 50,
      choices: [
        { text: 'Focus on the Light Side', outcome: 'You feel the Force flow through you peacefully.' },
        { text: 'Seek guidance from the Masters', outcome: 'A Master provides wisdom and teachings.' }
      ]
    },
    {
      id: 'jedi-2',
      title: 'Save the Innocent',
      description: 'Protect civilians from danger.',
      exp: 75,
      choices: [
        { text: 'Use diplomatic skills', outcome: 'You resolve the conflict peacefully.' },
        { text: 'Defend with your lightsaber', outcome: 'You vanquish the threat with honor.' }
      ]
    },
    {
      id: 'jedi-3',
      title: 'Ancient Knowledge',
      description: 'Seek wisdom in the Jedi Archives.',
      exp: 100,
      choices: [
        { text: 'Study the ancient texts', outcome: 'You unlock secrets of the Force.' },
        { text: 'Ask Master Yoda for guidance', outcome: 'Wisdom flows from the ancient Master.' }
      ]
    },
    {
      id: 'jedi-4',
      title: 'The Trials of Courage',
      description: 'Face your fears in the Jedi Trials.',
      exp: 150,
      choices: [
        { text: 'Trust in the Force', outcome: 'The Force guides you to victory.' },
        { text: 'Overcome through discipline', outcome: 'Your training proves invaluable.' }
      ]
    },
    {
      id: 'jedi-5',
      title: 'Unite the Fallen',
      description: 'Help a lost Padawan find their way back.',
      exp: 125,
      choices: [
        { text: 'Show compassion', outcome: 'The Padawan is redeemed through mercy.' },
        { text: 'Teach through example', outcome: 'The Padawan learns the true path.' }
      ]
    },
    {
      id: 'jedi-6',
      title: 'Galactic Peacekeeper',
      description: 'Negotiate peace between warring nations.',
      exp: 175,
      choices: [
        { text: 'Use political influence', outcome: 'You broker a lasting peace treaty.' },
        { text: 'Appeal to their humanity', outcome: 'Both sides find common ground.' }
      ]
    },
    {
      id: 'jedi-7',
      title: 'The Council\'s Challenge',
      description: 'Prove your worthiness to the Council.',
      exp: 200,
      choices: [
        { text: 'Demonstrate mastery of the Force', outcome: 'The Council recognizes your power.' },
        { text: 'Show wisdom beyond measure', outcome: 'The Council honors your insight.' }
      ]
    }
  ],
  sith: [
    {
      id: 'sith-1',
      title: 'Embrace the Darkness',
      description: 'Tap into your inner rage and power.',
      exp: 50,
      choices: [
        { text: 'Channel your anger', outcome: 'Strength surges through your veins.' },
        { text: 'Seize what you desire', outcome: 'Power is yours for the taking.' }
      ]
    },
    {
      id: 'sith-2',
      title: 'Eliminate Opposition',
      description: 'Remove obstacles in your path.',
      exp: 75,
      choices: [
        { text: 'Strike with cunning', outcome: 'Your enemy falls to deception.' },
        { text: 'Overwhelm with power', outcome: 'Your enemy falls to force.' }
      ]
    },
    {
      id: 'sith-3',
      title: 'Forbidden Knowledge',
      description: 'Learn the secrets of dark Force arts.',
      exp: 100,
      choices: [
        { text: 'Study ancient Sith tomes', outcome: 'Dark knowledge fills your mind.' },
        { text: 'Seek a Sith Master\'s tutelage', outcome: 'You learn devastating power.' }
      ]
    },
    {
      id: 'sith-4',
      title: 'The Path of Domination',
      description: 'Build your power and dominion.',
      exp: 150,
      choices: [
        { text: 'Subjugate through fear', outcome: 'All bend to your will.' },
        { text: 'Rule through absolute strength', outcome: 'None can challenge your might.' }
      ]
    },
    {
      id: 'sith-5',
      title: 'Turn the Weak-Minded',
      description: 'Convert a Force-user to the Dark Side.',
      exp: 125,
      choices: [
        { text: 'Tempt with power', outcome: 'They abandon the light.' },
        { text: 'Break their resolve', outcome: 'They succumb to darkness.' }
      ]
    },
    {
      id: 'sith-6',
      title: 'Expand Your Empire',
      description: 'Conquer new territories for the Sith.',
      exp: 175,
      choices: [
        { text: 'Use military strategy', outcome: 'New worlds bow before you.' },
        { text: 'Unleash the Force', outcome: 'All resistance crumbles.' }
      ]
    },
    {
      id: 'sith-7',
      title: 'The Dark Council Awaits',
      description: 'Prove yourself worthy of the Council.',
      exp: 200,
      choices: [
        { text: 'Display absolute power', outcome: 'The Council fears your strength.' },
        { text: 'Demonstrate cunning and ambition', outcome: 'The Council respects your ruthlessness.' }
      ]
    }
  ]
};

// Species data
const SPECIES = {
  human: 'Human',
  twilek: 'Twi\'lek',
  moncalamari: 'Mon Calamari',
  wookiee: 'Wookiee',
  rodian: 'Rodian',
  gungan: 'Gungan',
  bothan: 'Bothan',
  chiss: 'Chiss',
  zabrak: 'Zabrak',
  nautolan: 'Nautolan',
  togruta: 'Togruta',
  miraluka: 'Miraluka',
  'kel-dor': 'Kel-Dor'
};

// Planets data
const PLANETS = {
  coruscant: 'Coruscant',
  tatooine: 'Tatooine',
  naboo: 'Naboo',
  kashyyyk: 'Kashyyyk',
  mustafar: 'Mustafar',
  geonosis: 'Geonosis',
  hoth: 'Hoth',
  bespin: 'Bespin',
  kessel: 'Kessel',
  dathomir: 'Dathomir',
  ilum: 'Ilum',
  korriban: 'Korriban',
  exegol: 'Exegol',
  jakku: 'Jakku'
};

// Character state
let character = {
  name: '',
  gender: '',
  age: '',
  species: '',
  planet: '',
  faction: '',
  experience: 0,
  completedQuests: []
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadCharacter();
  initializeEventListeners();
  updateUI();
});

function initializeEventListeners() {
  // Faction selection
  document.getElementById('jediBtn').addEventListener('click', () => {
    selectFaction('jedi');
  });
  document.getElementById('sithBtn').addEventListener('click', () => {
    selectFaction('sith');
  });

  // Create character
  document.getElementById('createCharBtn').addEventListener('click', createCharacter);

  // Edit character
  document.getElementById('editCharBtn').addEventListener('click', editCharacter);
}

function selectFaction(faction) {
  character.faction = faction;
  document.getElementById('charFaction').value = faction;
  
  // Update button states
  document.getElementById('jediBtn').classList.toggle('active', faction === 'jedi');
  document.getElementById('sithBtn').classList.toggle('active', faction === 'sith');
}

function createCharacter() {
  const name = document.getElementById('charName').value.trim();
  const gender = document.getElementById('charGender').value;
  const age = document.getElementById('charAge').value;
  const species = document.getElementById('charRace').value;
  const planet = document.getElementById('charPlanet').value;
  const faction = character.faction;

  if (!name || !gender || !age || !species || !planet || !faction) {
    alert('Please fill in all fields and choose a faction.');
    return;
  }

  character.name = name;
  character.gender = gender;
  character.age = age;
  character.species = species;
  character.planet = planet;
  character.experience = 0;
  character.completedQuests = [];

  saveCharacter();
  updateUI();
}

function editCharacter() {
  // Clear form and show creator
  document.getElementById('charName').value = '';
  document.getElementById('charGender').value = '';
  document.getElementById('charAge').value = '';
  document.getElementById('charRace').value = '';
  document.getElementById('charPlanet').value = '';
  
  character = {
    name: '',
    gender: '',
    age: '',
    species: '',
    planet: '',
    faction: '',
    experience: 0,
    completedQuests: []
  };

  saveCharacter();
  updateUI();
}

function saveCharacter() {
  localStorage.setItem('starWarsCharacter', JSON.stringify(character));
}

function loadCharacter() {
  const saved = localStorage.getItem('starWarsCharacter');
  if (saved) {
    character = JSON.parse(saved);
  }
}

function updateUI() {
  if (character.name && character.faction) {
    // Show profile
    document.getElementById('characterCreator').classList.add('hidden');
    document.getElementById('characterProfile').classList.remove('hidden');
    displayCharacterProfile();
    displayQuests();
  } else {
    // Show creator
    document.getElementById('characterCreator').classList.remove('hidden');
    document.getElementById('characterProfile').classList.add('hidden');
  }
}

function displayCharacterProfile() {
  const rankInfo = getCurrentRank();
  
  document.getElementById('profileName').textContent = character.name;
  document.getElementById('profileRank').textContent = rankInfo.name;
  document.getElementById('profileRank').className = `rank-badge ${character.faction}`;
  document.getElementById('profileSpecies').textContent = SPECIES[character.species] || character.species;
  document.getElementById('profileGender').textContent = character.gender.charAt(0).toUpperCase() + character.gender.slice(1);
  document.getElementById('profileAge').textContent = character.age;
  document.getElementById('profilePlanet').textContent = PLANETS[character.planet] || character.planet;
  document.getElementById('profileFaction').textContent = character.faction.toUpperCase();
  document.getElementById('profileExp').textContent = `${character.experience} XP`;

  // Update rank progress
  const nextRank = getNextRank();
  if (nextRank) {
    const progress = ((character.experience - rankInfo.minExp) / (nextRank.minExp - rankInfo.minExp)) * 100;
    document.getElementById('expBar').style.width = Math.min(progress, 100) + '%';
    document.getElementById('expText').textContent = `${character.experience} / ${nextRank.minExp} XP to ${nextRank.name}`;
  } else {
    document.getElementById('expBar').style.width = '100%';
    document.getElementById('expText').textContent = 'Maximum rank achieved!';
  }
}

function displayQuests() {
  const quests = QUESTS[character.faction] || [];
  const questsList = document.getElementById('questsList');
  questsList.innerHTML = '';

  quests.forEach(quest => {
    const isCompleted = character.completedQuests.includes(quest.id);
    const questCard = document.createElement('div');
    questCard.className = `quest-card ${isCompleted ? 'completed' : ''}`;
    questCard.innerHTML = `
      <div class="quest-title">${quest.title}</div>
      <div class="quest-description">${quest.description}</div>
      <div class="quest-reward">
        <span class="quest-exp">+${quest.exp} XP</span>
        <span class="quest-status">${isCompleted ? '✓ Completed' : 'Available'}</span>
      </div>
    `;

    if (!isCompleted) {
      questCard.addEventListener('click', () => showQuestModal(quest));
    }

    questsList.appendChild(questCard);
  });
}

function showQuestModal(quest) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="quest-modal">
      <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      <h2>${quest.title}</h2>
      <p>${quest.description}</p>
      <p style="color: var(--accent); font-weight: 700; margin: 1.5rem 0;">What will you do?</p>
      <div class="choices-container">
        ${quest.choices.map((choice, idx) => `
          <button class="choice-btn" onclick="completeQuest('${quest.id}', ${idx}, '${choice.outcome.replace(/'/g, "\\'")}')">
            ${choice.text}
          </button>
        `).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

function completeQuest(questId, choiceIdx, outcome) {
  const quest = QUESTS[character.faction].find(q => q.id === questId);
  if (!quest) return;

  character.experience += quest.exp;
  character.completedQuests.push(questId);
  
  saveCharacter();

  // Show completion message
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    modal.innerHTML = `
      <div class="quest-modal">
        <h2>Quest Complete!</h2>
        <p style="color: var(--accent); margin: 1rem 0;">"${outcome}"</p>
        <p style="margin: 1.5rem 0;"><strong style="color: var(--accent);">+${quest.exp} Experience Gained</strong></p>
        <button class="complete-quest-btn" onclick="location.reload()">Continue</button>
      </div>
    `;
  }
}

function getCurrentRank() {
  const ranks = RANKS[character.faction] || [];
  let currentRank = ranks[0];
  
  for (let rank of ranks) {
    if (character.experience >= rank.minExp) {
      currentRank = rank;
    }
  }
  
  return currentRank;
}

function getNextRank() {
  const ranks = RANKS[character.faction] || [];
  const currentRank = getCurrentRank();
  const currentIndex = ranks.findIndex(r => r.name === currentRank.name);
  
  if (currentIndex < ranks.length - 1) {
    return ranks[currentIndex + 1];
  }
  
  return null;
}

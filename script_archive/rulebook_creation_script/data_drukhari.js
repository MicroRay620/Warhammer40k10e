window.data = window.data || {};
window.data.DRU = {
  "id": "DRU",
  "link": "https://game-datacards.eu",
  "name": "Drukhari",
  "is_subfaction": false,
  "parent_id": "",
  "stratagems": [
    {
      "name": "PREY ON THE WEAK",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Realspace Raiders",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "The scent of a foe in pain draws Drukhari\nto it like hungry predators to an injured\nbeast, their senses sharpening at its tang.",
      "when": "Your Shooting phase.",
      "target": "One Kabal unit from your\narmy and one enemy unit that is\nBelow Half-strength.",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes an attack\nthat targets that enemy unit, you can\nre-roll the Wound roll. ",
      "restrictions": "",
      "id": "7f0797a2-ee06-53c5-b7d4-c4901d5df9f0"
    },
    {
      "name": "STRIKE AND FADE",
      "cost": 2,
      "type": "Epic Deed",
      "detachment": "Realspace Raiders",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "The Drukhari are masters at using\nhit-and-run tactics, engaging a target\nwith a flurry of shots before quickly\nmanoeuvring into cover or out of sight.",
      "when": "End of your Shooting phase.",
      "target": "One Drukhari unit from your\narmy (excluding Aircraft).",
      "effect": "Your unit can immediately make a\nNormal move.",
      "restrictions": "Until the end of the turn,\nyour unit is not eligible to declare a charge\nand that unit cannot embark within a\nTransport at the end of this move.",
      "id": "21eac06a-e7a0-5d21-96fa-dcbd850a335c"
    },
    {
      "name": "ACROBATIC DISPLAY",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Realspace Raiders",
      "turn": "your",
      "phase": ["charge"],
      "fluff": "Many Wych Cults favour spectacular\ngymnastic displays. Their fighters are\nnever still, springing from one foot to the\nother at blinding speed.",
      "when": "Your Charge phase.",
      "target": "One Wych Cult unit from\nyour army.",
      "effect": "Until the end of the phase, your\nunit is eligible to declare a charge even if it\nFell Back or Advanced this turn. ",
      "restrictions": "",
      "id": "c727e347-87ae-56a4-80a4-2700171b47dc"
    },
    {
      "name": "ALLIANCE OF AGONY",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Realspace Raiders",
      "turn": "either",
      "phase": ["any"],
      "fluff": "Even the most bloodthirsty Drukhari\nwill veil their enmity to work together\nagainst a shared enemy for the same\ngruesome purpose.",
      "when": "Start of any phase.",
      "target": "One Archon, one Succubus and\none Haemonculus from your army.",
      "effect": "Discard one Pain token from\nyour Pain token pool. Until the end of the\nphase, all three of those models’ units\nare Empowered.",
      "restrictions": "You can only use this\nStratagem if you are able to select all\nthree of the target models stated above.",
      "id": "9b777f2f-a019-51d7-996a-9d5d545eafd8"
    },
    {
      "name": "QUICKSILVER REACTIONS",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Realspace Raiders",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "The hyper-fast reflexes of the Drukhari\nallow them to duck and weave to avoid all\nbut the swiftest enemy strikes.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Drukhari unit from your\narmy that was selected as the target of\none or more of the attacking unit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack that targets your unit,\nsubtract 1 from the Hit roll.",
      "restrictions": "You cannot target a\nHaemonculus Covens unit from your\narmy for this Stratagem. ",
      "id": "b46b9e5f-bf1e-5929-a414-e02d106f729c"
    },
    {
      "name": "INSENSIBLE TO PAIN",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Realspace Raiders",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "The twisted creations of the Haemonculus\nCovens are insensible to all but the most\nmortal injuries.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Haemonculus Covens unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack targets your unit, subtract\n1 from the Wound roll.",
      "restrictions": "",
      "id": "e430bbf9-7b0b-50df-9676-871be059127a"
    }
  ],
  "enhancements": [
    {
      "name": "Crucible of Malediction",
      "description": "Haemonculus model only. Once per battle, at the start of any Shooting phase, the bearer can use this Enhancement. When it does, every enemy unit within 12\" must take a Battle-shock test, subtracting 1 from that test if the bearer’s unit is currently Empowered. Each time a Psyker unit fails this test, it suffers D3 mortal wounds.",
      "keywords": ["Haemonculus"],
      "excludes": [],
      "cost": "10"
    },
    {
      "name": "Labyrinthine Cunning",
      "description": "Archon model only. Each time you select the bearer’s unit as the target of a Stratagem, roll one D6, adding 3 to the result if the Stratagem being used is Alliance of Agony. On a 4+, you gain 1 Command Point.",
      "keywords": ["Archon"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "Blood Dancer",
      "description": "Succubus model only. Improve the Attacks and Armour Penetration characteristics of the bearer’s melee weapons by 1. While the bearer is Empowered, improve the Attacks and Armour Penetration characteristics of the bearer’s melee weapons by 2 instead.",
      "keywords": ["Succubus"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "The Art of Pain",
      "description": "Drukhari model only. In your Command phase, if the bearer is on the battlefield, you gain 1 Pain token.",
      "keywords": ["Drukhari"],
      "excludes": [],
      "cost": "25"
    }
  ],
  "datasheets": [
    {
      "id": "f0164c73-b047-5e23-9ed1-b8068a690340",
      "name": "Archon",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Court of the Archon ■ Kabalite Warriors",
      "composition": ["1 Archon"],
      "loadout": "This model is equipped with: splinter pistol; huskblade.",
      "wargear": [
        "This model’s splinter pistol can be replaced with 1 blast pistol."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "85",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "2+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Overlord",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, re-roll a Wound roll of 1. While that unit is Empowered, each time a model in that unit makes an attack, you can re-roll the Wound roll instead.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Devious Mastermind",
            "description": "Once per battle, after your opponent uses a Stratagem, if this model is your Warlord and is on the battlefield, it can use this ability. If it does, until the end of the battle, increase the cost of that Stratagem to your opponent by 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "3",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Archon",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Blast pistol",
              "keywords": ["pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pistol",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Huskblade",
              "keywords": ["anti-infantry 3+"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "3",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Kabal", "Character", "Aeldari", "Archon"],
      "factions": ["Drukhari"],
      "leads": {
        "units": ["Court of the Archon", "Kabalite Warriors"],
        "extra": ""
      }
    },
    {
      "id": "8af13920-b98d-5157-933e-ce13909c384c",
      "name": "Beastmaster",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Beastmaster",
        "1 Clawed Fiends",
        "2 Khymerae",
        "3 Razorwing Flocks"
      ],
      "loadout": "The Beastmaster is equipped with: splinter pods; agoniser. Every Clawed Fiend is equipped with: Clawed Fiend fists. Every Khymerae is equipped with: Khymerae talons. Every Razorwing Flock is equipped with: Razorwing feathers.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "7",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 9\""],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Beastmaster",
            "description": "While this unit contains a Beastmaster model, you can re-roll Charge rolls made for this unit, and each time a Beast model in this unit makes an attack, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "4",
          "sv": "6+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "BEASTMASTER 12\" 4 6+ 2 8+ 1 KHYMERAE",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "12\"",
          "t": "4",
          "sv": "6+",
          "w": "5",
          "ld": "8+",
          "oc": "1",
          "name": "CLAWED FIEND 12\" 4 6+ 3 8+ 1 RAZORWING FLOCK",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pods",
              "keywords": ["anti-infantry 3+", "assault"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Agoniser",
              "keywords": ["anti-infantry 3+"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Clawed Fiend fists",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Khymerae talons",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Razorwing feathers",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Beasts",
        "Aeldari",
        "RAZORWING FLOCKS:",
        "Fly",
        "BEASTMASTER:",
        "Mounted",
        "Character",
        "Fly",
        "Beastmaster"
      ],
      "factions": ["Drukhari"]
    },
    {
      "id": "8fa325ab-46ea-51ab-816d-b2ce75c66434",
      "name": "Court Of The Archon",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Lhamaean", "1 Sslyth", "1 Medusae", "1 Ur-ghul"],
      "loadout": "A Lhamaean is equipped with: shaimeshi blade. A Medusae is equipped with: eyeburst; close combat weapon. A Sslyth is equipped with: shardcarbine; splinter pistol; Sslyth battle-blade. An Ur-ghul is equipped with: Ur-ghul talons. COURT OF THE ARCHON In the Declare Battle Formations step, this unit can join one Kabalite Warriors unit from your army that is being led by an Archon (a Kabalite Warriors unit cannot have more than one Court of the Archon unit joined to it). If it does, until the end of the battle, every model in this unit counts as part of that Kabalite Warriors unit, and its Starting Strength is increased accordingly.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "95",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lhamaean",
            "description": "While this unit contains one or more Lhamaean models, weapons equipped by models in this unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Medusae",
            "description": "In your Shooting phase, after this unit has shot, if any of those attacks made with its eyeburst scored a hit against an enemy Infantry unit, that Infantry unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Sslyth",
            "description": "While this unit contains one or more Sslyth models, each time an attack targets this unit, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Ur-ghul",
            "description": "While this unit contains one or more Ur-ghul models, this unit has the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Court Of The Archon",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Eyeburst",
              "keywords": ["pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shardcarbine",
              "keywords": ["anti-infantry 3+", "assault"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pistol",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shaimeshi blade",
              "keywords": ["anti-infantry 2+"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sslyth battle-blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ur-ghul talons",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Kabal", "Aeldari", "Court of the Archon"],
      "factions": ["Drukhari"],
      "leadBy": ["Archon"]
    },
    {
      "id": "3d07f339-ebba-5e0e-85a9-016952e80876",
      "name": "Cronos",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Cronos"],
      "loadout": "Every Cronos is equipped with: spirit syphon; spirit-leech tentacles.",
      "wargear": [
        "Any number of models can each be equipped with 1 spirit vortex."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "50",
          "active": true
        },
        {
          "models": "2",
          "cost": "100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Feel No Pain 5+"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pain Parasite (Aura)",
            "description": "Each time a Pain token is removed from your Pain token pool to Empower a unit, if that Empowered unit is within 9\" of this unit, roll one D6: on a 4+, you gain 1 Pain token.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "7",
          "sv": "3+",
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "Cronos",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Spirit syphon",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Spirit vortex",
              "keywords": ["blast", "ignores cover"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Spirit-leech tentacles",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Haemonculus Covens", "Fly", "Aeldari", "Cronos"],
      "factions": ["Drukhari"]
    },
    {
      "id": "f5df79b5-3976-53b1-9679-d08cbde8a167",
      "name": "Drazhar",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Incubi",
      "composition": ["1 Drazhar – Epic Hero"],
      "loadout": "This model is equipped with: the Executioner’s demiklaives.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Master of Blades",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Vicious Execution",
            "description": "Once per battle, when this model’s unit is selected to fight, it can use this ability. If it does, until the end of the phase, melee weapons equipped by this model have the [PRECISION] ability, and each time an enemy Character model is destroyed by this model, you gain D3 Pain tokens. If that destroyed Character model was the enemy Warlord, you gain 3 Pain tokens instead.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Drazhar",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "The Executioner’s demiklaives – single blade",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "The Executioner’s demiklaives – dual blades",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Aeldari", "Drazhar"],
      "factions": ["Drukhari"],
      "leads": {
        "units": ["Incubi"],
        "extra": ""
      }
    },
    {
      "id": "4f21ef96-b509-556f-83ed-5b97ddc122e1",
      "name": "Grotesques",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Grotesques"],
      "loadout": "Every model is equipped with: monstrous weapons.",
      "wargear": [
        "Any number of models can each be equipped with 1 liquifier gun."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "105",
          "active": true
        },
        {
          "models": "6",
          "cost": "210",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mindless Killing Machines",
            "description": "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and it is then removed from play.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "5",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Grotesques",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Liquifier gun",
              "keywords": ["torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Monstrous weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Haemonculus Covens", "Aeldari", "Grotesques"],
      "factions": ["Drukhari"]
    },
    {
      "id": "d41a6f29-d084-508a-b020-5f207c0c8e90",
      "name": "Haemonculus",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Wracks",
      "composition": ["1 Haemonculus"],
      "loadout": "This model is equipped with: stinger pistol; Haemonculus tools and scissorhands.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Master of Pain",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fear Incarnate (Aura)",
            "description": "While an enemy unit is within 6\" of this model, each time a Battle-shock or Leadership test is taken for that enemy unit, subtract 1 from that test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "4",
          "sv": "6+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Haemonculus",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Stinger pistol",
              "keywords": ["anti-infantry 2+", "pistol", "precision"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "2",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Haemonculus tools and scissorhands",
              "keywords": ["anti-infantry 2+", "precision"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "3",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Haemonculus Covens",
        "Character",
        "Aeldari",
        "Haemonculus"
      ],
      "factions": ["Drukhari"],
      "leads": {
        "units": ["Wracks"],
        "extra": ""
      }
    },
    {
      "id": "686583a0-8333-5d5d-8668-912d9d8ad6a4",
      "name": "Hellions",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Helliarch", "4-9 Hellions"],
      "loadout": "Every model is equipped with: splinter pods; hellglaive.",
      "wargear": [
        "The Helliarch can be equipped with 1 phantasm grenade launcher.",
        "The Helliarch’s hellglaive can be replaced with 1 splinter pistol and 1 Helliarch weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "110",
          "active": true
        },
        {
          "models": "10",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Phantasm Grenade Launcher",
            "description": "The bearer’s unit has the Grenades keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Hit and Run",
            "description": "This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "4",
          "sv": "5+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Hellions",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pistol",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pods",
              "keywords": ["anti-infantry 3+", "assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Helliarch weapon",
              "keywords": ["anti-infantry 3+", "sustained hits 1"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hellglaive",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Aeldari", "Wych Cult", "Hellions"],
      "factions": ["Drukhari"]
    },
    {
      "id": "a87d6522-7e1a-5f02-a6cd-f32bacdf03c0",
      "name": "Incubi",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Klaivex", "4-9 Incubi"],
      "loadout": "Every model is equipped with: klaive.",
      "wargear": ["The Klaivex’s klaive can be replaced with 1 demilklaives."],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "85",
          "active": true
        },
        {
          "models": "10",
          "cost": "170",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tormentors",
            "description": "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "Incubi",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "KLAIVEX",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Demiklaives – single blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Demiklaives – dual blades",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Klaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Aeldari", "Incubi"],
      "factions": ["Drukhari"],
      "leadBy": ["Drazhar"]
    },
    {
      "id": "ed01e2f2-7522-597f-913f-1205c8df3ace",
      "name": "Kabalite Warriors",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sybarite", "9 Kabalite Warriors"],
      "loadout": "Every model is equipped with: splinter rifle; close combat weapon.",
      "wargear": [
        "The Sybarite’s close combat weapon can be replaced with 1 Sybarite weapon.",
        "The Sybarite can be equipped with 1 phantasm grenade launcher.",
        "The Sybarite’s splinter rifle can be replaced with one of the following: ◦ 1 blast pistol ◦ 1 splinter pistol",
        "1 Kabalite Warrior’s splinter rifle can be replaced with 1 blaster.",
        "1 Kabalite Warrior’s splinter rifle can be replaced with 1 dark lance.",
        "1 Kabalite Warrior’s splinter rifle can be replaced with 1 shredder.",
        "1 Kabalite Warrior’s splinter rifle can be replaced with 1 splinter cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Phantasm Grenade Launcher",
            "description": "The bearer’s unit has the Grenades keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sadistic Raiders",
            "description": "If you control an objective marker at the end of your Command phase, and this unit (or any Transport it is embarked within) is within range of that objective marker, that objective marker remains under you control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "2",
          "name": "Kabalite Warriors",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Blast pistol",
              "keywords": ["pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Blaster",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dark lance",
              "keywords": ["heavy"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shredder",
              "keywords": ["assault", "torrent"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter cannon",
              "keywords": ["anti-infantry 3+", "heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pistol",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter rifle",
              "keywords": ["anti-infantry 3+", "assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sybarite weapon",
              "keywords": ["anti-infantry 3+"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Kabal",
        "Battleline",
        "Aeldari",
        "Kabalite Warriors"
      ],
      "factions": ["Drukhari"],
      "leadBy": ["Archon"]
    },
    {
      "id": "e69027cf-35e4-500e-ab20-0fb01cd281b0",
      "name": "Lelith Hesperax",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Wyches",
      "composition": ["1 Lelith Hesperax – Epic Hero"],
      "loadout": "This model is equipped with: Lelith’s blades.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Fights First", "Leader"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Brides of Death",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability, and each time a model in that unit makes a melee attack, add 1 to the Strength characteristic of that attack and improve the Armour Penetration characteristic of that attack by 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Thrilling Spectacle",
            "description": "Once per battle, at the start of the Fight phase, this model can use this ability. When it does, until the end of the phase, the Attacks characteristic of Lelith’s blades is increased to 12 and this model’s invulnerable save is increased to 3+.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "3",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Lelith Hesperax",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lelith’s blades",
              "keywords": ["anti-infantry 2+", "sustained hits 2"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "3",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Wych Cult",
        "Character",
        "Epic Hero",
        "Aeldari",
        "Succubus",
        "Lelith Hesperax"
      ],
      "factions": ["Drukhari"],
      "leads": {
        "units": ["Wyches"],
        "extra": ""
      }
    },
    {
      "id": "163eda0b-b737-5705-8fcc-32284892df01",
      "name": "Mandrakes",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Nightfiend", "4-9 Mandrakes"],
      "loadout": "Every model is equipped with: baleblast; glimmersteel blade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "70",
          "active": true
        },
        {
          "models": "10",
          "cost": "140",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Stealth"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fade Away",
            "description": "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove this unit from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models. If the battle ends and this unit is not on the battlefield, it is destroyed.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "3",
          "sv": "7+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "Mandrakes",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Baleblast",
              "keywords": ["assault", "devastating wounds"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Glimmersteel blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Aeldari", "Mandrakes"],
      "factions": ["Drukhari"]
    },
    {
      "id": "85c03b0d-973a-5b99-bf38-8b869a4b8a99",
      "name": "Raider",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Raider"],
      "loadout": "This model is equipped with: dark lance; bladevanes.",
      "wargear": [
        "This model’s dark lance can be replaced with 1 disintegrator cannon."
      ],
      "transport": "This model has a transport capacity of 11 Drukhari Infantry models. Each Grotesque model takes up the space of 3 models. This model cannot transport models that can Fly.",
      "points": [
        {
          "models": "1",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike", "Firing Deck 11"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aethersails",
            "description": "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of this model.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "8",
          "sv": "4+",
          "w": "10",
          "ld": "6+",
          "oc": "2",
          "name": "Raider",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dark lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Disintegrator cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bladevanes",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Dedicated Transport",
        "Fly",
        "Aeldari",
        "Raider"
      ],
      "factions": ["Drukhari"]
    },
    {
      "id": "075546f0-4a15-560e-a1fd-488f9937204c",
      "name": "Ravager",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Ravager"],
      "loadout": "This model is equipped with: 3 dark lances; bladevanes.",
      "wargear": [
        "Any number of this model’s dark lances can each be replaced with 1 disintegrator cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "95",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Eradicate the Foe",
            "description": "Each time this model makes an attack that targets an enemy unit that is at its Starting Strength, re-roll a Hit roll of 1. If a unit has a Starting Strength of 1, this ability only applies if the target has its starting number of wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time it makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "9",
          "sv": "4+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Ravager",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dark lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Disintegrator cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bladevanes",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Kabal", "Fly", "Aeldari", "Ravager"],
      "factions": ["Drukhari"]
    },
    {
      "id": "32e4f038-a0af-5e65-92b3-cad8518ad317",
      "name": "Raven Strike Fighter",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Raven Strike Fighter"],
      "loadout": "This model is equipped with: 2 dark lances; splinterstorm cannon; Bladed wings.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Stealth"],
        "faction": ["Power From Pain"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Strafing Run",
            "description": "Each time this model makes a ranged attack that targets a unit that cannot Fly, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "8",
          "sv": "4+",
          "w": "10",
          "ld": "6+",
          "oc": "0",
          "name": "Raven Strike Fighter",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dark lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinterstorm cannon",
              "keywords": ["anti-infantry 3+", "sustained hits 2"],
              "range": "36\"",
              "attacks": "8",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bladed wings",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Aeldari",
        "Raven Strike Fighter"
      ],
      "factions": ["Drukhari"]
    },
    {
      "id": "6d9f1792-a381-5b5f-94de-beffb94e1604",
      "name": "Razorwing Jetfighter",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Razorwing Jetfighter"],
      "loadout": "This model is equipped with: 2 dark lances; Razorwing missiles; twin splinter rifle; bladed wings.",
      "wargear": [
        "This model’s 2 dark lances can be replaced with 2 disintegrator cannons.",
        "This model’s twin splinter rifle can be replaced with 1 splinter cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "170",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Stealth"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ground Attack Craft",
            "description": "Each time this model makes a ranged attack that targets an enemy unit (excluding units that can Fly), add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "8",
          "sv": "4+",
          "w": "10",
          "ld": "6+",
          "oc": "0",
          "name": "Razorwing Jetfighter",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dark Lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Disintegrator",
              "keywords": [],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Razorwing missiles – monoscythe missiles",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Razorwing missiles – nuerotoxin missiles",
              "keywords": ["anti-infantry 2+", "blast"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Razorwing missiles – shatterfield missiles",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin splinter rifle",
              "keywords": [
                "anti-infantry 3+",
                "assault",
                "rapid fire 1",
                "twin-linked"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter cannon",
              "keywords": ["anti-infantry 3+", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bladed wings",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Aeldari",
        "Razorwing Jetfighter"
      ],
      "factions": ["Drukhari"]
    },
    {
      "id": "c34ad9b3-11cb-576e-9af3-52f2b68aa4e5",
      "name": "Reaper",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Reaper"],
      "loadout": "This model is equipped with: storm vortex projector; bladevanes; prow blade.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Power From Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Eradicate the Foe",
            "description": "Each time this model makes an attack that targets an enemy unit that is at its Starting Strength, re-roll a Hit roll of 1. If the target unit has a Starting Strength of 1, this ability only applies if that unit has its starting number of wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time it makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "9",
          "sv": "4+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Reaper",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm vortex projector – beam",
              "keywords": [],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Storm vortex projector – blast",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bladevanes",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Prow blade",
              "keywords": ["extra attacks", "lance", "sustained hits 3"],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Kabal", "Fly", "Aeldari", "Reaper"],
      "factions": ["Drukhari"]
    },
    {
      "id": "a52a5ba0-7c76-5719-bb74-93d8cd740f5c",
      "name": "Reavers",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Arena Champion", "2-5 Reavers"],
      "loadout": "Every model is equipped with: splinter pistol; splinter rifle; bladevanes.",
      "wargear": [
        "The Arena Champion can be equipped with 1 agoniser.",
        "For every 3 models in this unit, 1 model’s splinter rifle can be replaced with one of the following: ◦ 1 blaster ◦ 1 heat lance",
        "For every 3 models in this unit, 1 model can be equipped with one of the following: ◦ 1 grav-talon ◦ 1 cluster caltrops"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "75",
          "active": true
        },
        {
          "models": "6",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Cluster Caltrops",
            "description": "Each time you roll to inflict wounds using this unit’s Eviscerating Fly-by ability, you can re-roll one D6 for each model in this unit equipped with cluster caltrops.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Grav-talon",
            "description": "The bearer’s melee weapons have the [LANCE] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Eviscerating Fly-by",
            "description": "Each time this unit ends a Normal move, you can select one enemy unit (excluding Monster and Vehicle units) that it moved over during that move. If you do, roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "16\"",
          "t": "4",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Reavers",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Blaster",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heat lance",
              "keywords": ["assault", "melta 3"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pistol",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter rifle",
              "keywords": ["anti-infantry 3+", "assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Agoniser",
              "keywords": ["anti-infantry 3+"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bladevanes",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Wych Cult", "Fly", "Aeldari", "Reavers"],
      "factions": ["Drukhari"]
    },
    {
      "id": "df49e14a-d6d6-528b-ad8f-246a9bcf2b3a",
      "name": "Scourges",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Solarite", "4-9 Scourges"],
      "loadout": "Every model is equipped with: shardcarbine; close combat weapon.",
      "wargear": [
        "The Solarite can be equipped with 1 Solarite weapon.",
        "The Solarite can replace its shardcarbine with one of the following: ◦ 1 blast pistol ◦ 1 splinter pistol",
        "Up to 4 Scourges can each replace their shardcarbine with one of the following: ◦ 1 blaster ◦ 1 dark lance ◦ 1 Drukhari haywire blaster ◦ 1 heat lance ◦ 1 shredder ◦ 1 splinter cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "120",
          "active": true
        },
        {
          "models": "10",
          "cost": "200",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Winged Strike",
            "description": "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this unit is not eligible to declare a charge.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "Scourges",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Blast pistol",
              "keywords": ["pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Blaster",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dark lance",
              "keywords": ["heavy"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Drukhari haywire blaster",
              "keywords": ["anti-vehicle 4+", "devastating wounds", "heavy"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heat lance",
              "keywords": ["assault", "heavy", "melta 3"],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shardcarbine",
              "keywords": ["anti-infantry 3+", "assault"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shredder",
              "keywords": ["assault", "torrent"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter cannon",
              "keywords": ["anti-infantry 3+", "heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pistol",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Solarite weapon",
              "keywords": ["anti-infantry 3+"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Fly",
        "Grenades",
        "Jump Pack",
        "Aeldari",
        "Scourges"
      ],
      "factions": ["Drukhari"]
    },
    {
      "id": "0663ebd8-7d9f-5e90-baca-a6b938468f23",
      "name": "Succubus",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Wyches",
      "composition": ["1 Succubus"],
      "loadout": "This model is equipped with: Succubus weapons.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 blast pistol ◦ 1 splinter pistol"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "70",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Storm of Blades",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Combat Drugs",
            "description": "If this model is Empowered in the Fight phase, then until the end of the phase, models in this model’s unit, have the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "3",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Succubus",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Blast pistol",
              "keywords": ["pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pistol",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Succubus weapons",
              "keywords": ["anti-infantry 3+"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "3",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Wych Cult", "Character", "Aeldari", "Succubus"],
      "factions": ["Drukhari"],
      "leads": {
        "units": ["Wyches"],
        "extra": ""
      }
    },
    {
      "id": "1e30664e-db2c-535b-bb85-4d6759053a26",
      "name": "Talos",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Talos"],
      "loadout": "Every model is equipped with: twin splinter cannon; 2 macro-scalpels.",
      "wargear": [
        "Any number of models can each replace their twin splinter cannon with one of the following: ◦ 1 twin Drukhari haywire blasters ◦ 1 twin heat lance ◦ 1 stinger pod",
        "Any number of models can each replace one of their macro-scalpels with one of the following: ◦ 1 Talos ichor injector ◦ 1 twin liquifier gun",
        "Any number of models can each replace one of their macro-scalpels with one of the following: ◦ 1 chain-flails ◦ 1 Talos gauntlet"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "90",
          "active": true
        },
        {
          "models": "2",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Feel No Pain 5+"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pain Engine",
            "description": "If this unit destroys an enemy unit, until the end of the battle, it is Empowered.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "7",
          "sv": "3+",
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "Talos",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin Drukhari haywire blaster",
              "keywords": [
                "anti-vehicle 4+",
                "devastating wounds",
                "twin-linked"
              ],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heat lance",
              "keywords": ["assault", "melta 3", "twin-linked"],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin splinter cannon",
              "keywords": [
                "anti-infantry 3+",
                "sustained hits 1",
                "twin-linked"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Stinger pod",
              "keywords": [],
              "range": "24\"",
              "attacks": "2D6",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin liquifier gun",
              "keywords": ["torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chain-flails",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Macro-scalpel",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Talos gauntlet",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Talos ichor injector",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Haemonculus Covens", "Fly", "Aeldari", "Talos"],
      "factions": ["Drukhari"]
    },
    {
      "id": "b972d176-9a6c-5ab2-8695-764dc8fe3817",
      "name": "Tantalus",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tantalus"],
      "loadout": "This model is equipped with: pulse disintegrators; dire scythe blades.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 16 Drukhari Infantry models. Each Grotesque model takes up the space of 3 models. This model cannot transport models that can Fly.",
      "points": [
        {
          "models": "1",
          "cost": "230",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike", "Firing Deck 16"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Scything Charge",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time it makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "16\"",
          "t": "10",
          "sv": "4+",
          "w": "18",
          "ld": "6+",
          "oc": "5",
          "name": "Tantalus",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Pulse disintegrators",
              "keywords": ["assault"],
              "range": "36\"",
              "attacks": "12",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dire scythe blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Transport", "Fly", "Aeldari", "Tantalus"],
      "factions": ["Drukhari"]
    },
    {
      "id": "805c5224-bee4-5c3d-9d31-e0e3e4947500",
      "name": "Urien Rakarth",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Wracks",
      "composition": ["1 Urien Rakarth – Epic Hero"],
      "loadout": "This model is equipped with: Casket of Flensing; Haemonculus tools and scissorhands.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 4+", "Leader"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fleshcraft",
            "description": "At the end of your Movement phase, this model can heal one friendly Cronos, Talos, Grotesques or Wracks unit within 6\". If it does, one model in that unit regains up to 3 lost wounds (if you selected a Wracks unit, up to 3 destroyed models are returned to that unit instead).",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Horrific Regeneration",
            "description": "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "4",
          "sv": "6+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Urien Rakarth",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Casket of Flensing",
              "keywords": ["devastating wounds", "one shot", "torrent"],
              "range": "12\"",
              "attacks": "3D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Haemonculus tools and scissorhands",
              "keywords": ["anti-infantry 2+", "precision"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "3",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Haemonculus Covens",
        "Character",
        "Epic Hero",
        "Aeldari",
        "Haemonculus",
        "Urien Rakarth"
      ],
      "factions": ["Drukhari"],
      "leads": {
        "units": ["Wracks"],
        "extra": ""
      }
    },
    {
      "id": "4c3ce51c-97f7-5dfb-a0a0-a2d9599ec48e",
      "name": "Venom",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Venom"],
      "loadout": "This model is equipped with: splinter cannon; twin splinter rifle; bladevanes.",
      "wargear": [
        "This model’s twin splinter rifle can be replaced with 1 splinter cannon."
      ],
      "transport": "This model has a transport capacity of 6 Drukhari Infantry models. This model cannot transport Grotesque models or models that can Fly. Before the battle, at the start of the Declare Battle Formations step, you can select one Kabalite Warriors or Wyches unit from your army. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this Transport; the other can start the battle embarked within another Transport, or it can be deployed as a separate unit.",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Deep Strike", "Firing Deck 6", "Stealth"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Athletic Aerialists",
            "description": "At the end of the Fight phase, if there are no models currently embarked within this Transport, you can select one friendly Drukhari Infantry unit that has 6 or fewer models that is wholly within 6\" of this Transport (you cannot select a Grotesques unit or a unit that can Fly). Unless that unit is within Engagement Range of one or more enemy units, it can embark within this Transport.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Venom",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter cannon",
              "keywords": ["anti-infantry 3+", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin splinter rifle",
              "keywords": [
                "anti-infantry 3+",
                "assault",
                "rapid fire 1",
                "twin-linked"
              ],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bladevanes",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Dedicated transport",
        "Fly",
        "Aeldari",
        "Venom"
      ],
      "factions": ["Drukhari"]
    },
    {
      "id": "31b00211-e1f3-52c2-a019-956f8b4afe54",
      "name": "Voidraven Bomber",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Voidraven Bomber"],
      "loadout": "This model is equipped with: 2 void lances; bladed wings.",
      "wargear": [
        "This model can be equipped with 1 Voidraven missiles.",
        "The model’s 2 void lances can be replaced with 2 dark scythes."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "195",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Stealth"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Void Mine",
            "description": "Once per battle, after this unit ends a Normal move, you can select one enemy model it moved over during that move and roll one D6 for each enemy unit within D6\" of that enemy model: on a 4+, that enemy unit suffers D6 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "4+",
          "w": "12",
          "ld": "6+",
          "oc": "0",
          "name": "Voidraven Bomber",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dark scythe",
              "keywords": [],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Void lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Voidraven missiles – implosion missiles",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Voidraven missiles – shatterfield missiles",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bladed wings",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Aircraft", "Fly", "Aeldari", "Voidraven Bomber"],
      "factions": ["Drukhari"]
    },
    {
      "id": "ce4db86a-c461-5977-9294-533b4ddb15dc",
      "name": "Wracks",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Acothyst", "4-9 Wracks"],
      "loadout": "Every model is equipped with: Wrack blades.",
      "wargear": [
        "For every 5 models in the unit: ◦ 1 model can be equipped with 1 hexrifle* ◦ 1 model can be equipped with 1 liquifier gun* ◦ 1 model can be equipped with 1 ossefactor* ◦ 1 model can be equipped with 1 stinger pistol* * Each model cannot be equipped with more than 1 ranged weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "65",
          "active": true
        },
        {
          "models": "10",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Torturer’s Craft",
            "description": "Each time this unit destroys an enemy unit, you gain 1 Pain token. When this unit is destroyed, you gain 1 Pain token.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "4",
          "sv": "6+",
          "w": "1",
          "ld": "6+",
          "oc": "2",
          "name": "Wracks",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hexrifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Liquifier gun",
              "keywords": ["torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ossefactor",
              "keywords": ["anti-infantry 4+", "devastating wounds"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Stinger pistol",
              "keywords": ["anti-infantry 2+", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Wrack blades",
              "keywords": ["anti-infantry 4+"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Haemonculus Covens",
        "Aeldari",
        "Wracks"
      ],
      "factions": ["Drukhari"],
      "leadBy": ["Haemonculus", "Urien Rakarth"]
    },
    {
      "id": "cb257844-3bd9-5053-9f57-bb6ad6589bc4",
      "name": "Wyches",
      "source": "40k-10e",
      "faction_id": "DRU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hekatrix", "9 Wyches"],
      "loadout": "Every model is equipped with: splinter pistol; Hekatarii blade.",
      "wargear": [
        "The Hekatrix can be equipped with 1 phantasm grenade launcher.",
        "The Hekatrix’s splinter pistol can be replaced with 1 blast pistol."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Phantasm Grenade Launcher",
            "description": "The bearer’s unit has the Grenades keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Power from Pain"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "*  The invulnerable save that models in this unit have is improved to a 4+ against melee attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "No Escape",
            "description": "Each time an enemy unit (excluding Monsters and Vehicles) within Engagement Range of one or more units from your army with this ability is selected to Fall Back, models in that enemy unit must take Desperate Escape tests as if their unit was Battle-shocked. When doing so, if that enemy unit is also Battle-shocked by other means, subtract 1 from each of those Desperate Escape tests.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "3",
          "sv": "6+",
          "w": "1",
          "ld": "6+",
          "oc": "2",
          "name": "Wyches",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Blast pistol",
              "keywords": ["pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Splinter pistol",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hekatarii blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Battleline", "Wych Cult", "Aeldari", "Wyches"],
      "factions": ["Drukhari"],
      "leadBy": ["Lelith Hesperax", "Succubus"]
    }
  ],
  "colours": {
    "banner": "#102929",
    "header": "#0f454e"
  }
}
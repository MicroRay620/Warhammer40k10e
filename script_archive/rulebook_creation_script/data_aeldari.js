window.data = window.data || {};
window.data.AE = {
  "id": "AE",
  "link": "https://game-datacards.eu",
  "name": "Aeldari",
  "is_subfaction": false,
  "parent_id": "",
  "stratagems": [
    {
      "name": "FEIGNED RETREAT",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Battle Host",
      "turn": "your",
      "phase": ["movement"],
      "fluff": "The Aeldari are forever elusive, and their\nactions are unpredictable and deceptive.\nWhat appears to be a full retreat one\nmoment is revealed as the prelude to a\ndevastating attack the next.",
      "when": "Your Movement phase, just after\nan Aeldari unit from your army makes a\nFall Back move.",
      "target": "That Aeldari unit.",
      "effect": "Your unit is eligible to shoot and\ndeclare a charge this turn even though it\nFell Back",
      "restrictions": "",
      "id": "b8d0f13c-bda7-5427-8731-d53bd50c8aa6"
    },
    {
      "name": "MATCHLESS AGILITY",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Battle Host",
      "turn": "your",
      "phase": ["movement"],
      "fluff": "Grace in battle and merciless efficiency\nare prized virtues in craftworld armies.\nLike the shimmering blades of Khaine,\nthe Asuryani carve through the ranks of\ntheir enemies.",
      "when": "Your Movement phase.",
      "target": "One Aeldari unit from your\narmy that has not been selected to move\nthis phase.",
      "effect": "Until the end of the phase, if your\nunit Advances, do not make an Advance\nroll for it. Instead, until the end of the\nphase, add 6\" to the Move characteristic\nof models in your unit.",
      "restrictions": "",
      "id": "5452907c-daa4-5cf1-81ef-b0fed2ad95a5"
    },
    {
      "name": "FIRE AND FADE",
      "cost": 2,
      "type": "Strategic Ploy",
      "detachment": "Battle Host",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "The Aeldari are masters of hit-and-run\ntactics, engaging a target with a flurry of\nshots before quickly manoeuvring into\ncover or out of sight.",
      "when": "End of your Shooting phase.",
      "target": "One Aeldari unit from your army.",
      "effect": "Your unit can make a Normal\nmove. It cannot embark within a\nTransport at the end of this move.",
      "restrictions": "You cannot select an\nAircraft unit or a unit within Engagement\nRange of one or more enemy units, and\nuntil the end of the turn, the unit you\nselected is not eligible to declare a charge.",
      "id": "87768d64-0ade-51d3-a1c4-ece233de1cd6"
    },
    {
      "name": "BLADESTORM",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Battle Host",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "The well-trained Aeldari are able to lay\ndown a hail of fire from their weapons,\ntheir superior reflexes allowing them to\ntrack even the most sudden movement\nand place every shot perfectly.",
      "when": "Your Shooting phase.",
      "target": "One Aeldari unit from your\narmy that has not been selected to shoot\nthis phase.",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes an\nattack, on a Critical Wound, improve the\nArmour Penetration characteristic of that\nattack by 2.",
      "restrictions": "",
      "id": "77b00fca-6099-51ce-8af9-fb91fd68cfaa"
    },
    {
      "name": "PHANTASM",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Battle Host",
      "turn": "opponents",
      "phase": ["movement"],
      "fluff": "The Aeldari are masters of misdirection,\nand they employ holo-emitters and psychic\nphantasms to fool enemy scouts.",
      "when": "End of your opponent’s\nMovement phase.",
      "target": "One Aeldari unit from your army.",
      "effect": "Your unit can make a Normal\nmove of up to 7\". It cannot embark within\na Transport at the end of this move.",
      "restrictions": "You cannot select a unit\nwithin Engagement Range of one or more\nenemy units, and until the end of the turn,\nyou cannot target that unit with the Heroic\nIntervention Stratagem.",
      "id": "0e4d3507-76b8-5e40-b569-62467788d249"
    },
    {
      "name": "LIGHTNING-FAST REACTIONS",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Battle Host",
      "turn": "either",
      "phase": ["any"],
      "fluff": "The Aeldari can process battlefield\nevents at baffling speed, making their\nphysical reactions so fast that they are\nable to dodge attacks that would hit any\nother target.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Aeldari unit from your army\n(excluding Wraith Construct units) that\nwas selected as the target of one or more\nof the attacking unit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack targets your unit, subtract\n1 from the Hit roll.",
      "restrictions": "",
      "id": "4f6fdf85-7731-5541-a01a-71d629ee8bd4"
    }
  ],
  "enhancements": [
    {
      "name": "Fate’s Messenger",
      "description": "Aeldari model only. Once per turn, just after making a Hit roll, a Wound roll, or a saving throw for a model in the bearer’s unit, you can treat the result as an unmodified roll of 6 instead.",
      "keywords": ["Aeldari"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Reader of the Runes",
      "description": "Aeldari Psyker model only. In your Command phase, you can select one dice in your Fate dice pool, re-roll it, then add it back to your Fate dice pool displaying the result you just rolled.",
      "keywords": ["Aeldari", "Psyker"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "The Phoenix Gem",
      "description": "Aeldari model only. The first time the bearer is destroyed, roll one D6: on a 2+, keep it to one side. At the end of the phase, set the bearer back up again, as close as possible to its previous position and not within Engagement Range of any enemy models, with its full wounds remaining.",
      "keywords": ["Aeldari"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "The Weeping Stones",
      "description": "Aeldari model only. Each time the bearer’s unit destroys an enemy unit, roll one D6 and add it to your Fate dice pool displaying the result you just rolled.",
      "keywords": ["Aeldari"],
      "excludes": [],
      "cost": "15"
    }
  ],
  "datasheets": [
    {
      "id": "390ee51b-9724-5add-82d6-b520ce1227a9",
      "name": "Amallyn Shadowguide",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Amallyn Shadowguide – Epic Hero"],
      "loadout": "This model is equipped with: ranger long rifle; power blade.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Lone Operative", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Path Least Travelled",
            "description": "If your army includes this model, after both players have deployed their armies and determined who has the first turn, you can select one Rangers or Shroud Runners unit from your army and redeploy that unit. When doing so, that unit can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Path of the Outcast",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model, if this model is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\".",
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
          "sv": "5+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Amallyn Shadowguide",
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
              "name": "Ranger long rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Power blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Epic Hero",
        "Amallyn Shadowguide"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "a45ca96b-644e-570a-916e-7e8fd860b06b",
      "name": "Asurmen",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Dire Avengers",
      "composition": ["1 Asurmen – Epic Hero"],
      "loadout": "This model is equipped with: the Bloody Twins; the Sword of Asur.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "3+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Hand of Asuryan",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Tactical Acumen",
            "description": "Once per turn, you can target this model’s unit with the Fire Overwatch Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase.",
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
          "name": "Asurmen",
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
              "name": "The Bloody Twins",
              "keywords": ["assault", "lethal hits", "pistol"],
              "range": "24\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
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
              "name": "The Sword of Asur",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Phoenix Lord",
        "Asurmen"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Dire Avengers"],
        "extra": ""
      }
    },
    {
      "id": "0debaad1-ddae-5650-8b46-e72bf0dcf222",
      "name": "Autarch",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Guardian Defenders ■ Storm Guardians",
      "composition": ["1 Autarch"],
      "loadout": "This model is equipped with: shuriken pistol; star glaive.",
      "wargear": [
        "This model’s shuriken pistol can be replaced with one of the following: ◦ 1 death spinner ◦ 1 Dragon fusion gun ◦ 1 fusion pistol ◦ 1 Reaper launcher",
        "This model’s star glaive can be replaced with one of the following: ◦ 1 Banshee blade ◦ 1 Scorpion chainsword",
        "This model can be equipped with one of the following: ◦ 1 Howling Banshee mask ◦ 1 mandiblasters"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Howling Banshee Mask",
            "description": "The bearer’s unit has the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mandiblasters",
            "description": "Melee weapons equipped by the bearer have the [DEVASTATING WOUNDS] ability when targeting units without the Monster or Vehicle keywords.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Superlative Strategist",
            "description": "Once per turn, you can target this model’s unit with a Stratagem even if you have already used that Stratagem on a different unit this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Path of Command",
            "description": "At the start of your Command phase, if this model is your Warlord and is on the battlefield, you gain 1CP.",
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
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Autarch",
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
              "name": "Death spinner",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
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
              "name": "Dragon fusion gun",
              "keywords": ["assault", "melta 3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
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
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Reaper launcher – starshot",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Reaper launcher – starswarm",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Banshee blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Scorpion chainsword",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Star glaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Grenades", "Autarch"],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Guardian Defenders", "Storm Guardians"],
        "extra": ""
      }
    },
    {
      "id": "67ce1dec-dce4-5323-be1b-e118c347213f",
      "name": "Autarch Skyrunner",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Windriders",
      "composition": ["1 Autarch Skyrunner"],
      "loadout": "This model is equipped with: laser lance; twin shuriken catapult.",
      "wargear": [
        "This model’s laser lance can be replaced with one of the following: ◦ 1 Dragon fusion gun ◦ 1 Banshee blade"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Path of Command",
            "description": "At the start of your Command phase, if this model is your Warlord, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Ride the Wind",
            "description": "While this model is leading a unit, each time that unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit.",
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
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Autarch Skyrunner",
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
              "name": "Dragon fusion gun",
              "keywords": ["assault", "melta 3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
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
              "name": "Laser lance",
              "keywords": ["assault"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Banshee blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laser lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Fly",
        "Autarch",
        "Autarch Skyrunner"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Windriders"],
        "extra": ""
      }
    },
    {
      "id": "78b09f0d-6943-5caa-9c6f-683f9ddfe3c5",
      "name": "Autarch Wayleaper",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Autarch Wayleaper"],
      "loadout": "This model is equipped with: shuriken pistol; star glaive.",
      "wargear": [
        "This model’s shuriken pistol can be replaced with one of the following: ◦ 1 death spinner ◦ 1 Dragon fusion gun ◦ 1 fusion pistol ◦ 1 Reaper launcher",
        "This model’s star glaive can be replaced with one of the following: ◦ 1 Banshee blade ◦ 1 Scorpion chainsword",
        "This model can be equipped with one of the following: ◦ 1 Howling Banshee mask ◦ 1 mandiblasters"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Howling Banshee Mask",
            "description": "The bearer has the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mandiblasters",
            "description": "Melee weapons equipped by the bearer have the [DEVASTATING WOUNDS] ability when targeting units without the Monster or Vehicle keywords.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Lone Operative"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Indomitable Strength of Will (Aura)",
            "description": "While a friendly Aeldari unit is within 6\" of this model, each time that unit takes a Battle-shock or Leadership test, add 1 to that test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Path of Command",
            "description": "At the start of your Command phase, if this model is your Warlord and is on the battlefield, you gain 1CP.",
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Autarch Wayleaper",
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
              "name": "Death spinner",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
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
              "name": "Dragon fusion gun",
              "keywords": ["assault", "melta 3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
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
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Reaper launcher – starshot",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Reaper launcher – starswarm",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Banshee blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Scorpion chainsword",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Star glaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Jump Pack",
        "Fly",
        "Grenades",
        "Autarch Wayleaper"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "08f53265-923c-5309-8ced-573127f1defa",
      "name": "Avatar Of Khaine",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Avatar of Khaine – Epic Hero"],
      "loadout": "This model is equipped with: the Wailing Doom",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "295",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Molten Form",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Bloody-Handed (Aura)",
            "description": "While a friendly Aeldari unit is within 6\" of this model, add 1 to Advance and Charge rolls made for that unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "14",
          "ld": "6+",
          "oc": "5",
          "name": "Avatar Of Khaine",
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
              "name": "The Wailing Doom",
              "keywords": ["sustained hits d3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+2"
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
              "name": "The Wailing Doom – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6+2"
            },
            {
              "active": true,
              "name": "The Wailing Doom – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Daemon",
        "Avatar of Khaine"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "723f90b5-bacb-5347-8a66-8eb48e0ffdaa",
      "name": "Baharroth",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Swooping Hawks",
      "composition": ["1 Baharroth – Epic Hero"],
      "loadout": "This model is equipped with: Fury of the Tempest; the Shining Blade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "125",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cry of the Wind",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cloudstrider",
            "description": "In your Shooting phase, after this model’s unit has shot, if it is not within Engagement Range of any enemy units, that unit can make a Normal move of up to 6\" as if it were your Movement phase. If it does, until the end of the turn, that unit is not eligible to declare a charge.",
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
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Baharroth",
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
              "name": "Fury of the Tempest",
              "keywords": ["assault", "lethal hits"],
              "range": "24\"",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
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
              "name": "The Shining Blade",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Jump Pack",
        "Fly",
        "Grenades",
        "Phoenix Lord",
        "Baharroth"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Swooping Hawks"],
        "extra": ""
      }
    },
    {
      "id": "3325b549-06e1-5ccc-9594-4ac51a2ff51c",
      "name": "Bonesinger",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Wraithblades ■ Wraithguard ■ Wraithlord",
      "composition": ["1 Bonesinger"],
      "loadout": "This model is equipped with: psytronome shaper.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Way of the Shaper (Psychic)",
            "description": "While this model is leading a unit, Wraith Construct models in that unit have the Feel No Pain 6+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Bonesinger",
            "description": "While this model is within 3\" of one or more friendly Wraith Construct or Aeldari Vehicle units, unless it is leading a unit, this model has the Lone Operative ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Psytronome Shaper",
            "description": "In your Command phase, you can select one friendly Wraith Construct or Aeldari Vehicle model within 3\" of this model. That Wraith Construct or Aeldari Vehicle model regains up to D3 lost wounds.",
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
          "sv": "6+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Bonesinger",
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
              "name": "Psytronome shaper",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": ["Character", "infantry", "Psyker", "Bonesinger"],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Wraithblades", "Wraithguard", "Wraithlord"],
        "extra": ""
      }
    },
    {
      "id": "b1db34cb-2c3b-5f15-991f-9581c9cf3423",
      "name": "Cobra",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Cobra"],
      "loadout": "This model is equipped with: D-impaler; shuriken cannon; wraithbone hull.",
      "wargear": [
        "This model’s shuriken cannon can be replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "415",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "D-rift",
            "description": "In your Shooting phase, just after selecting a target for this model’s D-impaler, roll one D6 for the target unit and every other unit within 3\" of that unit: on a 5+, the unit being rolled for is struck by a D-rift. After this model has finished making its attacks against that target unit this phase, each unit struck by a D-rift this phase suffers D3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "11",
          "sv": "2+",
          "w": "24",
          "ld": "6+",
          "oc": "8",
          "name": "Cobra",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
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
              "name": "D-impaler",
              "keywords": ["blast", "devastating wounds"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "4"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Fly", "Cobra"],
      "factions": ["Aeldari"]
    },
    {
      "id": "fa3cf56d-cbbd-5f9b-b0f3-cc14e4d6421c",
      "name": "Corsair Cloud Dancer Band",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["0-1 Cloud Dancer Felarch", "3-6 Corsair Cloud Dancers"],
      "loadout": "Every model is equipped with: brace of pistols; twin shuriken catapult; close combat weapon.",
      "wargear": [
        "Any number of models can each have their twin shuriken catapult replaced with one of the following: ◦ 1 dark lance ◦ 1 dissonance cannon ◦ 1 scatter laser ◦ 1 shuriken cannon ◦ 1 splinter cannon",
        "The Cloud Dancer Felarch can be equipped with one of the following: ◦ 1 dissonance pistol ◦ 1 void sabre"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 7\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Reckless Abandon",
            "description": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase.",
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
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Corsair Cloud Dancer Band",
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
              "name": "Brace of pistols",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
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
              "name": "Dissonance cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Dissonance pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "3",
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
              "name": "Void sabre",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Grenades",
        "Anhrathe",
        "Corsair Cloud Dancer Band"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "09897b18-cfc8-5d2a-99cf-34fb7fb53cf9",
      "name": "Corsair Reaver Band",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["0-1 Corsair Reaver Felarch", "5-10 Corsair Reavers"],
      "loadout": "Every model is equipped with: brace of pistols; Corsair firearm; close combat weapon. CORSAIRS If a model from your army with the Leader ability can be attached to a Corsair Voidreavers unit, it can be attached to this unit instead.",
      "wargear": [
        "Any number of models can each have their Corsair firearm replaced with 1 spar-glaive.",
        "For every 5 models in this unit, 1 model’s Corsair firearm can be replaced with one of the following: ◦ 1 Aeldari missile launcher* ◦ 1 blaster ◦ 1 dark lance ◦ 1 flamer ◦ 1 fusion gun ◦ 1 shredder ◦ 1 shuriken cannon ◦ 1 splinter cannon",
        "The Corsair Reaver Felarch can be equipped with one of the following: ◦ 1 dissonance pistol ◦ 1 void sabre * The profile for this weapon can be found on the Aeldari Legends Armoury card."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Reaver Band",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\".",
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
          "sv": "5+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Corsair Reaver Band",
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
              "name": "Brace of pistols",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
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
              "name": "Corsair firearm",
              "keywords": ["assault", "lethal hits"],
              "range": "24\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
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
              "name": "Dissonance pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
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
              "name": "Flamer",
              "keywords": ["assault", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
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
              "name": "Fusion gun",
              "keywords": ["assault", "melta 2"],
              "range": "12\"",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Spar-glaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Void sabre",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Anhrathe", "Corsair Reaver Band"],
      "factions": ["Aeldari"]
    },
    {
      "id": "044fb731-5d66-547f-bc03-8d13f5348585",
      "name": "Corsair Skyreaver Band",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "0-1 Corsair Skyreaver Felarch",
        "5-10 Corsair Skyreavers"
      ],
      "loadout": "Every model is equipped with: brace of pistols; Corsair firearm; close combat weapon.",
      "wargear": [
        "Any number of models can each have their Corsair firearm replaced with one of the following: ◦ 1 shardcarbine ◦ 1 shuriken catapult ◦ 1 spar-glaive",
        "For every 5 models in this unit, 1 model’s Corsair firearm can be replaced with one of the following: ◦ 1 Aeldari missile launcher* ◦ 1 blaster* ◦ 1 dark lance ◦ 1 flamer ◦ 1 fusion gun ◦ 1 shredder* ◦ 1 shuriken cannon ◦ 1 splinter cannon",
        "The Corsair Skyreaver Felarch can be equipped with one of the following: ◦ 1 dissonance pistol ◦ 1 void sabre * The profile for this weapon can be found on the Aeldari Legends Armoury card."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Skyleap",
            "description": "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove this unit from the battlefield and place it into Strategic Reserves.",
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
          "sv": "5+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Corsair Skyreaver Band",
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
              "name": "Brace of pistols",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
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
              "name": "Corsair firearm",
              "keywords": ["assault", "lethal hits"],
              "range": "24\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
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
              "name": "Dissonance pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
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
              "name": "Flamer",
              "keywords": ["assault", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
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
              "name": "Fusion gun",
              "keywords": ["assault", "melta 2"],
              "range": "12\"",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Shuriken catapult",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Spar-glaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Void sabre",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Anhrathe",
        "Fly",
        "Jump Pack",
        "Corsair Skyreaver Band"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "cf793a0d-edbd-55f6-946b-3021177779f1",
      "name": "Corsair Voidreavers",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Voidreaver Felarch", "4-9 Corsair Voidreavers"],
      "loadout": "Every model is equipped with: shuriken pistol; Aeldari power sword; close combat weapon.",
      "wargear": [
        "The Voidreaver Felarch’s shuriken pistol can be replaced with one of the following: ◦ 1 neuro disruptor ◦ 1 shuriken rifle",
        "The Voidreaver Felarch can be equipped with: ◦ 1 mistshield",
        "All of the Corsair Voidreavers in this unit can each have their shuriken pistol and Aeldari power sword replaced with 1 shuriken rifle.",
        "For every 5 models in this unit, 1 Corsair Voidreaver’s Aeldari power sword or shuriken rifle can be replaced with one of the following: ◦ 1 Corsair blaster ◦ 1 Corsair shredder",
        "If this unit contains 10 models, 1 Corsair Voidreaver’s shuriken rifle can be replaced with one of the following: ◦ 1 shuriken cannon ◦ 1 wraithcannon"
      ],
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
        "wargear": [
          {
            "name": "Mistshield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 7\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Reavers of the Void",
            "description": "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Hit roll instead.",
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
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "2",
          "name": "Corsair Voidreavers",
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
              "name": "Corsair blaster",
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
              "name": "Corsair shredder",
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
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Shuriken rifle",
              "keywords": ["assault", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Wraithcannon",
              "keywords": ["devastating wounds"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
        "Grenades",
        "Anhrathe",
        "Corsair Voidreavers"
      ],
      "factions": ["Aeldari"],
      "leadBy": ["Prince Yriel", "The Visarch", "Yvraine"]
    },
    {
      "id": "e9ea6d32-6a27-5001-b786-4eed3a007a31",
      "name": "Corsair Voidscarred",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "This unit can contain a maximum of 10 models.",
        "1 Voidscarred Felarch",
        "4-9 Corsair Voidscarred",
        "0-1 Shade Runner",
        "0-1 Soul Weaver",
        "0-1 Way Seeker"
      ],
      "loadout": "Every Corsair Voidscarred and Voidscarred Felarch is equipped with: shuriken pistol; Aeldari power sword; close combat weapon. A Shade Runner is equipped with: shuriken pistol; close combat weapon; paired Hekatarii blades. A Soul Weaver is equipped with: shuriken pistol; Aeldari power sword; close combat weapon; channeller stones. A Way Seeker is equipped with: shuriken pistol; Executioner; close combat weapon; witch staff.",
      "wargear": [
        "Any number of Corsair Voidscarred can each have their shuriken pistol and Aeldari power sword replaced with 1 shuriken rifle.",
        "The Voidscarred Felarch’s shuriken pistol can be replaced with one of the following: ◦ 1 neuro disruptor ◦ 1 shuriken rifle",
        "The Voidscarred Felarch can be equipped with 1 mistshield.",
        "For every 5 models in this unit, 1 Corsair  Voidscarred’s shuriken rifle can be replaced with one of the following:",
        "◦ 1 Corsair blaster  ◦ 1 Corsair shredder",
        "If this unit contains 10 models, 1 Corsair Voidscarred’s shuriken rifle can be replaced with one of the following: ◦ 1 shuriken cannon ◦ 1 wraithcannon",
        "If this unit contains 10 models, 1 Corsair Voidscarred’s shuriken rifle can be replaced with 1 Ranger long rifle.  If this unit contains 10 models, 1 Corsair Voidscarred’s Aeldari power sword can be  replaced with 1 fusion pistol.  1 Corsair Voidscarred model equipped with a shuriken pistol and Aeldari power sword can be equipped with 1 Faolchú."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "90",
          "active": true
        },
        {
          "models": "10",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Channeller Stones",
            "description": "Once per turn, the first time a saving throw is failed for the bearer’s unit, change the Damage characteristic of that attack to 0.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Faolchú",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mistshield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 7\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Piratical Raiders",
            "description": "At the start of the battle, select one unit from your opponent’s army. Each time a model in this unit makes an attack that targets that unit, that attack has the [LETHAL HITS] and [PRECISION] abilities.",
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
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "Corsair Voidscarred",
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
              "name": "Corsair blaster",
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
              "name": "Corsair shredder",
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
              "name": "Executioner",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
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
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Ranger long rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Shuriken rifle",
              "keywords": ["assault", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Wraithcannon",
              "keywords": ["devastating wounds"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Paired Hekatarii blades",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "3",
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
              "name": "Witch staff",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Anhrathe", "Corsair Voidscarred"],
      "factions": ["Aeldari"],
      "leadBy": ["Prince Yriel", "The Visarch", "Yvraine"]
    },
    {
      "id": "8a6759ff-6329-522a-a734-a677658dfa40",
      "name": "Crimson Hunter",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Crimson Hunter"],
      "loadout": "This model is equipped with: 2 starcannons; pulse laser; wraithbone hull.",
      "wargear": [
        "This model’s 2 starcannons can be replaced with 2 bright lances."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Skyhunter",
            "description": "Each time this model makes a ranged attack that targets a unit that can Fly, add 1 to the Hit roll and add 1 to the Wound roll.",
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
          "t": "8",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "0",
          "name": "Crimson Hunter",
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
              "name": "Bright lance",
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
              "name": "Pulse laser",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Fly", "Aircraft", "Crimson Hunter"],
      "factions": ["Aeldari"]
    },
    {
      "id": "5f7a4231-39b5-5746-b5a0-c1adb7fa87f1",
      "name": "Dark Reapers",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Dark Reaper Exarch", "4-9 Dark Reapers"],
      "loadout": "Every model is equipped with: Reaper launcher; close combat weapon.",
      "wargear": [
        "The Dark Reaper Exarch’s Reaper launcher can be replaced with 1 of the following: ◦ 1 Aeldari missile launcher ◦ 1 shuriken cannon ◦ 1 tempest launcher"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75",
          "active": true
        },
        {
          "models": "10",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Inescapable Accuracy",
            "description": "Each time a model in this unit makes a ranged attack, you can ignore any or all modifiers to that attack’s Ballistic Skill characteristic and to the Hit roll.",
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
          "m": "6\"",
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "DARK REAPER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "DARK REAPER EXARCH",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": ["ignores cover"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast", "ignores cover"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Reaper launcher – starshot",
              "keywords": ["ignores cover"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Reaper launcher – starswarm",
              "keywords": ["ignores cover"],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["ignores cover", "sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Tempest launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
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
      "keywords": ["Infantry", "Dark Reapers"],
      "factions": ["Aeldari"],
      "leadBy": ["Maugan Ra"]
    },
    {
      "id": "df8d1aa0-9916-5aad-82c7-7385c70f3822",
      "name": "Death Jester",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Jester"],
      "loadout": "This model is equipped with: shrieker cannon; Jester’s blade.",
      "wargear": ["None"],
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
        "core": ["Lone Operative"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Death is Not Enough",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks destroyed an enemy model, that enemy model’s unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cruel Amusement",
            "description": "In your Shooting phase, one model from your army with this ability can use it. If they do, until the end of the phase, select one of the following abilities to apply to that model’s shrieker cannon: ■ [IGNORES COVER] ■ [PRECISION] ■ [SUSTAINED HITS 3]",
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
          "name": "Death Jester",
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
              "name": "Shrieker cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "6",
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
              "name": "Jester’s blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Harlequins", "Death Jester"],
      "factions": ["Aeldari"]
    },
    {
      "id": "1aa15be4-e8f8-516d-bcc3-1cce97f1143c",
      "name": "Dire Avengers",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Dire Avenger Exarch", "4-9 Dire Avengers"],
      "loadout": "Every model is equipped with: Avenger shuriken catapult; close combat weapon.",
      "wargear": [
        "The Dire Avenger Exarch’s Avenger shuriken catapult can be replaced with 1 shuriken pistol and one of the following: ◦ 1 diresword ◦ 1 power glaive",
        "If this unit’s Dire Avenger Exarch is equipped with 1 Avenger shuriken catapult, it can be equipped with 1 additional Avenger shuriken catapult.",
        "The Dire Avenger Exarch’s shuriken pistol can be replaced with: ◦ 1 shimmershield"
      ],
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
        "wargear": [
          {
            "name": "Shimmershield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Defence Tactics",
            "description": "Each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+, or unmodified Hit rolls of 4+ instead if this unit is within range of an objective marker you control.",
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
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "DIRE AVENGER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "DIRE AVENGER EXARCH",
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
              "name": "Avenger shuriken catapult",
              "keywords": ["assault", "lethal hits"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Diresword",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power glaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Dire Avengers"],
      "factions": ["Aeldari"],
      "leadBy": ["Asurmen"]
    },
    {
      "id": "07769191-da02-50bd-b2dd-3c3a4e90c01a",
      "name": "Eldrad Ulthran",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Guardian Defenders ■ Storm Guardians ■ Warlock Conclave",
      "composition": ["1 Eldrad Ulthran – Epic Hero"],
      "loadout": "This model is equipped with: shuriken pistol; Mind War; the Staff of Ulthamar and witchblade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Diviner of Futures",
            "description": "At the start of the battle, when making your first Strands of Fate roll, roll an additional three D6 (this means that roll will consist of fifteen D6).",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Doom (Psychic)",
            "description": "At the start of your Shooting phase, you can select one enemy unit within 18\" of and visible to this Psyker and roll one D6: on a 2+, until the end of the turn, each time a friendly Aeldari model makes an attack that targets that enemy unit, add 1 to the Wound roll.",
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
          "name": "Eldrad Ulthran",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Mind War",
              "keywords": ["anti-character 4+", "precision", "psychic"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "D6"
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
              "name": "The Staff of Ulthamar and witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Psyker",
        "Farseer",
        "Eldrad Ulthran"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Guardian Defenders", "Storm Guardians", "Warlock Conclave"],
        "extra": ""
      }
    },
    {
      "id": "2ece8450-cd96-54db-9eea-f29ec2b1616d",
      "name": "Falcon",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Falcon"],
      "loadout": "This model is equipped with: pulse laser; scatter laser; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s scatter laser can be replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 shuriken cannon ◦ 1 starcannon",
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "This model has a transport capacity of 6 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models.",
      "points": [
        {
          "models": "1",
          "cost": "140",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll.",
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
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Falcon",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
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
              "name": "Pulse laser",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Transport", "Fly", "Falcon"],
      "factions": ["Aeldari"]
    },
    {
      "id": "05ee8795-7154-5b71-bac6-a5d0f00b9d14",
      "name": "Farseer",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Guardian Defenders ■ Storm Guardians ■ Warlock Conclave",
      "composition": ["1 Farseer"],
      "loadout": "This model is equipped with: shuriken pistol; Eldritch Storm; witchblade.",
      "wargear": [
        "This model’s witchblade can be replaced with 1 singing spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Branching Fates (Psychic)",
            "description": "Once per turn, when you use a Fate dice to substitute a roll made for a model or unit within 12\" of a Farseer model from your army, one model from your army with this ability can use it. If it does, the result of that Fate dice is first changed to a 6.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fortune (Psychic)",
            "description": "In your Command phase, you can roll one D6: on a 2+, select one friendly Aeldari unit within 12\" of this Psyker. Until the start of your next Command phase, each time an attack targets that unit, subtract 1 from the Wound roll.",
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
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Farseer",
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
              "name": "Eldritch Storm",
              "keywords": ["blast", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
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
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Character", "Infantry", "Psyker", "Farseer"],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Guardian Defenders", "Storm Guardians", "Warlock Conclave"],
        "extra": ""
      }
    },
    {
      "id": "08f7afa4-1e01-54f1-a3ac-854d1be37640",
      "name": "Farseer Skyrunner",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Warlock Skyrunner Conclave ■ Windriders",
      "composition": ["1 Farseer Skyrunner"],
      "loadout": "This model is equipped with: shuriken pistol; twin shuriken catapult; Eldritch Storm; witchblade.",
      "wargear": [
        "This model’s witchblade can be replaced with 1 singing spear."
      ],
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
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Branching Fates (Psychic)",
            "description": "Once per turn, when you use a Fate dice to substitute a roll made for a model or unit within 12” of a Farseer model from your army, one model from your army with this ability can use it. If it does, the result of that Fate dice is first changed to a 6.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Guide (Psychic)",
            "description": "In your Command phase, you can roll one D6: on a 2+, select one friendly Aeldari unit within 12\" of this Psyker. Until the start of your next Command phase, each time a model in that unit makes an attack, you can re-roll the Hit roll.",
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
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Farseer Skyrunner",
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
              "name": "Eldritch Storm",
              "keywords": ["blast", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Fly",
        "Psyker",
        "Farseer",
        "Farseer Skyrunner"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Warlock Skyrunner Conclave", "Windriders"],
        "extra": ""
      }
    },
    {
      "id": "dd651ab0-2c1d-548b-bfc2-9720ebf428ed",
      "name": "Fire Dragons",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Fire Dragon Exarch", "4-9 Fire Dragons"],
      "loadout": "Every model is equipped with: Dragon fusion gun; close combat weapon.",
      "wargear": [
        "The Fire Dragon Exarch’s Dragon fusion gun can be replaced with 1 of the following: ◦ 1 Dragon’s breath flamer ◦ 1 firepike"
      ],
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
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Assured Destruction",
            "description": "Each time a model in this unit makes a ranged attack that targets a Monster or Vehicle unit, re-roll a Wound roll of 1 and re-roll a Damage roll of 1.",
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
          "name": "FIRE DRAGON",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "FIRE DRAGON EXARCH",
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
              "name": "Dragon fusion gun",
              "keywords": ["assault", "melta 3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
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
              "name": "Dragon’s breath flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
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
              "name": "Firepike",
              "keywords": ["melta 3"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-4",
              "damage": "D6"
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
        }
      ],
      "keywords": ["Infantry", "Grenades", "Fire Dragons"],
      "factions": ["Aeldari"],
      "leadBy": ["Fuegan"]
    },
    {
      "id": "34ab4d87-ae76-58d1-96b7-eb47d553562e",
      "name": "Fire Prism",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Fire Prism"],
      "loadout": "This model is equipped with: prism cannon; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Crystal Matrix",
            "description": "Each time this model is selected to shoot, you can re-roll one Hit roll and you can re-roll one Wound roll when resolving those attacks.",
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
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Fire Prism",
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
              "name": "Prism cannon – dispersed pulse",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Prism cannon – focused lances",
              "keywords": ["linked fire"],
              "range": "60\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "18",
              "ap": "-4",
              "damage": "6"
            }
          ],
          "abilities": [
            {
              "name": "Linked Fire",
              "description": "When selecting targets for this weapon, you can measure range and determine visibility from another friendly Fire Prism model that is visible to the bearer.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Fly", "Fire Prism"],
      "factions": ["Aeldari"]
    },
    {
      "id": "737ce394-ded5-5348-853d-58f3ee3eb29d",
      "name": "Firestorm",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Firestorm"],
      "loadout": "This model is equipped with: Firestorm scatter laser; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "This model has a transport capacity of 6 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Skyfire",
            "description": "Each time you target this model with the Fire Overwatch Stratagem just after an enemy unit that can Fly starts or ends a Normal, Advance or Fall Back move, when resolving that Stratagem, in addition to shooting that enemy unit, you can select up to 3 other enemy units within 24\" of this model that can Fly; this model can also shoot at each of those units with its Firestorm scatter laser (provided each one is an eligible target), but when doing so, an unmodified Hit roll of 6 is required to score a hit.",
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
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Firestorm",
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
              "name": "Firestorm scatter laser",
              "keywords": ["anti-fly 2+"],
              "range": "36\"",
              "attacks": "16",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "3",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Fly", "Firestorm"],
      "factions": ["Aeldari"]
    },
    {
      "id": "147ca91a-b950-53fd-988f-b9f657b1f38f",
      "name": "Fuegan",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Fire Dragons",
      "composition": ["1 Fuegan – Epic Hero"],
      "loadout": "This model is equipped with: Searsong; the Fire Axe.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "115",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Burning Lance",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Unquenchable Resolve",
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
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Fuegan",
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
              "name": "Searsong – beam",
              "keywords": ["sustained hits d3"],
              "range": "12\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Searsong – lance",
              "keywords": ["melta 6"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
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
              "name": "The Fire Axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-4",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Phoenix Lord",
        "Fuegan"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Fire Dragons"],
        "extra": ""
      }
    },
    {
      "id": "dff35a09-3399-56d0-8c16-3801f800357d",
      "name": "Guardian Defenders",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["10 Guardian Defenders", "1 Heavy Weapon Platform"],
      "loadout": "Every Guardian Defender is equipped with: shuriken catapult; close combat weapon. The Heavy Weapon Platform is equipped with: shuriken cannon; close combat weapon.",
      "wargear": [
        "The Heavy Weapon Platform can replace its shuriken cannon with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "11",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Defenders of Fate",
            "description": "At the end of your Command phase, for each objective marker you control that has one or more units from your army with this ability within range of it, roll one D6 and add it to your Fate dice pool displaying the result you just rolled.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Crewed Platform",
            "description": "When the last Guardian Defender model in this unit is destroyed, any remaining Heavy Weapon Platform models in this unit are also destroyed.",
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
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "2",
          "name": "GUARDIAN DEFENDER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "0",
          "name": "HEAVY WEAPON PLATFORM",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Shuriken catapult",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
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
        "Grenades",
        "Guardians",
        "Guardian Defenders"
      ],
      "factions": ["Aeldari"],
      "leadBy": [
        "Autarch",
        "Eldrad Ulthran",
        "Farseer",
        "Prince Yriel",
        "The Visarch",
        "Warlock",
        "Yvraine"
      ]
    },
    {
      "id": "66e01aea-5635-5298-9471-a3bb4f982a95",
      "name": "Hemlock Wraithfighter",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hemlock Wraithfighter"],
      "loadout": "This model is equipped with: 2 heavy D-scythes; wraithbone hull.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "155",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mindshock Pod (Aura, Psychic)",
            "description": "While an enemy unit is within 9\" of this model, subtract 1 from Battle-shock and Leadership tests taken for that unit.",
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
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "0",
          "name": "Hemlock Wraithfighter",
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
              "name": "Heavy D-scythe",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "12",
              "ap": "-4",
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
              "name": "Wraithbone hull",
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
        "Psyker",
        "Wraith Construct",
        "Hemlock Wraithfighter"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "4988e545-1f39-50ea-b46e-10b13d972a25",
      "name": "Hornet",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hornet"],
      "loadout": "This model is equipped with: 2 Hornet pulse lasers; wraithbone hull.",
      "wargear": [
        "Each of this model’s Hornet pulse lasers can be replaced with one of the following: ◦ Aeldari missile launcher ◦ Bright lance ◦ Scatter laser ◦ Shuriken cannon ◦ Starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lightning Assault",
            "description": "Each time this model ends a Normal move, you can select one enemy unit (excluding Monster and Vehicle units) that it moved over during that move, then roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.",
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
          "t": "7",
          "sv": "3+",
          "w": "8",
          "ld": "6+",
          "oc": "2",
          "name": "Hornet",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
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
              "name": "Hornet pulse laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Fly", "Hornet"],
      "factions": ["Aeldari"]
    },
    {
      "id": "f919ee87-1632-5d48-baf1-39f3534a169a",
      "name": "Howling Banshees",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Howling Banshee Exarch", "4-9 Howling Banshees"],
      "loadout": "Every model is equipped with: shuriken pistol; Banshee blade.",
      "wargear": [
        "The Howling Banshee Exarch’s Banshee blade can be replaced with 1 of the following: ◦ 1 executioner ◦ 1 triskele",
        "The Howling Banshee Exarch’s shuriken pistol and Banshee blade can be replaced with 1 mirrorswords."
      ],
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
        "core": ["Fights First"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Acrobatic",
            "description": "This unit is eligible to declare a charge in a turn in which it Advanced or Fell Back.",
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
          "oc": "1",
          "name": "HOWLING BANSHEE",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "8\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "HOWLING BANSHEE EXARCH",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Triskele",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
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
              "name": "Banshee blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Executioner",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Mirrorswords",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Triskele",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "3",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Howling Banshees"],
      "factions": ["Aeldari"],
      "leadBy": ["Jain Zar"]
    },
    {
      "id": "623547c2-3a7d-5d0a-8200-4b05dc98caa6",
      "name": "Illic Nightspear",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Rangers",
      "composition": ["1 Illic Nightspear – Epic Hero"],
      "loadout": "This model is equipped with: Voidbringer; shuriken pistol; Aeldari power sword.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Leader", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "*  This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Bringer of the True Death",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Hunter Unseen",
            "description": "This model’s unit can only be selected as the target of a ranged attack if the attacking model is within 12\".",
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
          "sv": "5+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Illic Nightspear",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Voidbringer",
              "keywords": ["devastating wounds", "heavy", "precision"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "3"
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Illic Nightspear"],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Rangers"],
        "extra": ""
      }
    },
    {
      "id": "17fe1673-7bbc-5b85-a8b3-b42ba995f059",
      "name": "Irillyth",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Shadow Spectres",
      "composition": ["1 Irillyth – Epic Hero"],
      "loadout": "This model is equipped with: Spear of Starlight.",
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
        "core": ["Leader", "Deep Strike", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Reaper of Souls",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shadow of Death (Aura)",
            "description": "While an enemy unit is within 6\" of this model, each time that unit takes a Battle-shock or Leadership test, subtract 1 from that test.",
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
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Irillyth",
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
              "name": "Spear of Starlight",
              "keywords": [],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "4"
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
              "name": "Spear of Starlight",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Phoenix Lord",
        "Irillyth"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Shadow Spectres"],
        "extra": ""
      }
    },
    {
      "id": "750c6e6e-773d-591a-8e2a-f2e26b2e4573",
      "name": "Jain Zar",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Howling Banshees",
      "composition": ["1 Jain Zar – Epic Hero"],
      "loadout": "This model is equipped with: the Silent Death; the Blade of Destruction.",
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
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Storm of Silence",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Whirling Death",
            "description": "Once per turn, you can target this model’s unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase.",
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
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Jain Zar",
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
              "name": "The Silent Death",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
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
              "name": "The Blade of Destruction – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
            },
            {
              "active": true,
              "name": "The Blade of Destruction – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Phoenix Lord",
        "Jain Zar"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Howling Banshees"],
        "extra": ""
      }
    },
    {
      "id": "124bb7b9-7b78-5721-ae9a-323dce700218",
      "name": "Karandras",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Striking Scorpions",
      "composition": ["1 Karandras – Epic Hero"],
      "loadout": "This model is equipped with: Arhra’s Bane; Isirmathil; the Scorpion’s Bite.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "The Scorpion’s Bite",
            "description": "Melee weapons equipped by the bearer have the [DEVASTATING WOUNDS] ability when targeting units without the Titanic keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Infiltrators", "Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shadow Hunter",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Sustained Assault",
            "description": "Each time this model makes a melee attack, if it made a Charge move this turn, a successful unmodified Hit roll of 4+ scores a Critical Hit.",
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
          "name": "Karandras",
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
              "name": "Arhra’s Bane",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "5",
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
              "name": "Arhra’s Bane",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Isirmathil",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Phoenix Lord",
        "Karandras"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Striking Scorpions"],
        "extra": ""
      }
    },
    {
      "id": "60d3e229-db6d-5088-b786-2abc8017df6f",
      "name": "Lynx",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Lynx"],
      "loadout": "This model is equipped with: Lynx pulsar; shuriken cannon; wraithbone hull.",
      "wargear": [
        "This model’s shuriken cannon can be replaced with one of the following: ◦ Aeldari missile launcher ◦ Bright lance ◦ Scatter laser ◦ Starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "155",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Speed of Vaul",
            "description": "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 9\" to the Move characteristic of this model.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "16",
          "ld": "6+",
          "oc": "4",
          "name": "Lynx",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
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
              "name": "Lynx pulsar",
              "keywords": ["assault"],
              "range": "48\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "16",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Fly", "Lynx"],
      "factions": ["Aeldari"]
    },
    {
      "id": "a3dff7ee-a03f-5c56-b1fb-259bc952131e",
      "name": "Maugan Ra",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Dark Reapers",
      "composition": ["1 Maugan Ra"],
      "loadout": "This model is equipped with: the Maugetar.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Leader", "Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Harvester of Souls",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Face of Death",
            "description": "Each time this model makes an attack that targets a unit that is Below Half-strength, you can re-roll the Hit roll and you can re-roll the Wound roll.",
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
          "name": "Maugan Ra",
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
              "name": "The Maugetar",
              "keywords": ["devastating wounds", "ignores cover"],
              "range": "36\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "7",
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
              "name": "The Maugetar",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Phoenix Lord",
        "Maugan Ra"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Dark Reapers"],
        "extra": ""
      }
    },
    {
      "id": "d06e11cd-84bf-5174-8f23-096d8322ee71",
      "name": "Night Spinner",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Night Spinner"],
      "loadout": "This model is equipped with: doomweaver; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Monofilament Web",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its doomweaver scored a hit against an enemy unit, that enemy unit is pinned until the end of your opponent’s next turn. While a unit is pinned, subtract 2 from that unit’s Move characteristic and that unit cannot Advance.",
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
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Night Spinner",
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
              "name": "Doomweaver",
              "keywords": [
                "blast",
                "devastating wounds",
                "indirect fire",
                "twin-linked"
              ],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Fly", "Night Spinner"],
      "factions": ["Aeldari"]
    },
    {
      "id": "078ab98e-cae4-54b3-8913-e195f79c5e4c",
      "name": "Nightwing",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Nightwing"],
      "loadout": "This model is equipped with: twin bright lance; twin shuriken cannon; wraithbone hull.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Hover"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Interceptor",
            "description": "Each time this model makes a ranged attack that targets a unit that can Fly, add 1 to the Hit roll.",
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
          "t": "8",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "0",
          "name": "Nightwing",
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
              "name": "Twin bright lance",
              "keywords": ["twin-linked"],
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
              "name": "Twin shuriken cannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Aircaft", "Fly", "Nightwing"],
      "factions": ["Aeldari"]
    },
    {
      "id": "0239a89d-d163-59e4-837c-334d92d94c71",
      "name": "Phantom Titan",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Phantom Titan"],
      "loadout": "This model is equipped with: D-bombard; Phantom pulsar; Phantom starcannon; voidstorm missile launcher; Phantom feet.",
      "wargear": [
        "This model’s D-bombard can be replaced with one of the following: ◦ 2 Phantom starcannons and 1 wraith glaive ◦ 1 Phantom starcannon, 1 pulse laser and 1 wraith glaive ◦ 2 pulse lasers and 1 wraith glaive ◦  1 Phantom pulsar",
        "This model’s Phantom pulsar can be replaced with one of the following: ◦ 1 D-bombard ◦ 2 Phantom starcannons and 1 wraith glaive ◦ 1 Phantom starcannon, 1 pulse laser and 1 wraith glaive ◦ 2 pulse lasers and 1 wraith glaive",
        "This model’s Phantom starcannon can be replaced with 1 pulse laser."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "2100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "* Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Titanic Advance",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Towering Wraith Construct",
            "description": "Each time you target this model with a Stratagem, you must spend three times that Stratagem’s stated CP cost to do so.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Flawless Poise",
            "description": "This model is eligible to shoot and declare a charge in a turn in which it Fell Back.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-16 WOUNDS REMAINING",
          "description": "While this model has 1-16 wounds remaining, subtract 10 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "14",
          "sv": "2+",
          "w": "55",
          "ld": "6+",
          "oc": "20",
          "name": "Phantom Titan",
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
              "name": "D-bombard",
              "keywords": ["blast", "devastating wounds"],
              "range": "72\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "20",
              "ap": "-4",
              "damage": "2D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Phantom pulsar",
              "keywords": [],
              "range": "120\"",
              "attacks": "8",
              "skill": "3+",
              "strength": "18",
              "ap": "-4",
              "damage": "6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Phantom starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Pulse laser",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Voidstorm missile launcher",
              "keywords": [],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Phantom feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "4"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Wraith glaive – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "18",
              "ap": "-4",
              "damage": "12"
            },
            {
              "active": true,
              "name": "Wraith glaive – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "4"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Walker",
        "Wraith Construct",
        "Phantom Titan"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "9dbbf746-0fbe-5ce6-9019-607f6ef519e4",
      "name": "Phoenix",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Phoenix"],
      "loadout": "This model is equipped with: Phoenix missile array; Phoenix pulse laser; twin shuriken cannon; wraithbone hull.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
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
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "16",
          "ld": "6+",
          "oc": "0",
          "name": "Phoenix",
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
              "name": "Phoenix missile array",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
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
              "name": "Phoenix pulse laser",
              "keywords": [],
              "range": "48\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin shuriken cannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Fly", "Aircraft", "Phoenix"],
      "factions": ["Aeldari"]
    },
    {
      "id": "3d23908b-2375-537d-92c2-66b388b7374c",
      "name": "Prince Yriel",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Corsair Voidreavers ■ Corsair Voidscarred ■ Guardian Defenders ■ Storm Guardians",
      "composition": ["1 Prince Yriel – Epic Hero"],
      "loadout": "This model is equipped with: the Eye of Wrath; the Spear of Twilight.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Hero of Iyanden",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Prince of Corsairs",
            "description": "If your army includes this model, after both players have deployed their armies, select up to three Aeldari units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves.",
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
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Prince Yriel",
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
              "name": "The Eye of Wrath",
              "keywords": ["assault"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
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
              "name": "The Spear of Twilight",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Prince Yriel"],
      "factions": ["Aeldari"],
      "leads": {
        "units": [
          "Corsair Voidreavers",
          "Corsair Voidscarred",
          "Guardian Defenders",
          "Storm Guardians"
        ],
        "extra": ""
      }
    },
    {
      "id": "854a02eb-6a01-5734-a1b6-43a5de76571f",
      "name": "Rangers",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Rangers"],
      "loadout": "Every model is equipped with: Ranger long rifle; shuriken pistol; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "55",
          "active": true
        },
        {
          "models": "10",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "*  Models in this unit have a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Path of the Outcast",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\" as if it were your Movement phase.",
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
          "sv": "5+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "Rangers",
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
              "name": "Ranger long rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Rangers"],
      "factions": ["Aeldari"],
      "leadBy": ["Illic Nightspear"]
    },
    {
      "id": "b3bccfe6-2efd-5765-8c51-58307e0eaffc",
      "name": "Revenant Titan",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Revenant Titan"],
      "loadout": "This model is equipped with: cloudburst missile launcher; Revenant pulsar; sonic lance; Revenant feet.",
      "wargear": [
        "This model’s Revenant pulsar can be replaced with 1 sonic lance.",
        "This model’s sonic lance can be replaced with 1 Revenant pulsar."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "1100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "* Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Titanic Advance",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Towering Wraith Construct",
            "description": "Each time you target this model with a Stratagem, you must spend twice that Stratagem’s stated CP cost to do so.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Revenant Jet Pack",
            "description": "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 8\" to the Move characteristic of this model.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, subtract 8 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "16\"",
          "t": "13",
          "sv": "2+",
          "w": "30",
          "ld": "6+",
          "oc": "16",
          "name": "Revenant Titan",
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
              "name": "Cloudburst missile launcher",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "8",
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
              "name": "Revenant pulsar",
              "keywords": ["assault"],
              "range": "60\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "4"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sonic lance",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+",
                "assault",
                "torrent"
              ],
              "range": "18\"",
              "attacks": "D6+6",
              "skill": "N/A",
              "strength": "8",
              "ap": "-3",
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
              "name": "Revenant feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "10",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Walker",
        "Fly",
        "Wraith Construct",
        "Revenant Titan"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "29269392-e970-54c3-9de3-6a76745ec6d8",
      "name": "Scorpion",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Scorpion"],
      "loadout": "This model is equipped with: shuriken cannon; twin Scorpion pulsar; wraithbone hull.",
      "wargear": [
        "This model’s shuriken cannon can be replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "410",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lanced Obliteration",
            "description": "Each time an attack made with this model’s twin Scorpion pulsar destroys an enemy model that has the Deadly Demise ability, that model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of 4+ instead of on a 6.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "11",
          "sv": "2+",
          "w": "24",
          "ld": "6+",
          "oc": "8",
          "name": "Scorpion",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin Scorpion pulsar",
              "keywords": ["twin-linked"],
              "range": "60\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "18",
              "ap": "-3",
              "damage": "5"
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
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Fly", "Scorpion"],
      "factions": ["Aeldari"]
    },
    {
      "id": "80ce60b7-660e-58e9-8c48-7b1686e1e309",
      "name": "Shadow Spectres",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["0-1 Shadow Spectre Exarch", "5-10 Shadow Spectres"],
      "loadout": "Every model is equipped with: prism rifle; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "80",
          "active": true
        },
        {
          "models": "10",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shade of Twilight",
            "description": "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this unit is not eligible to declare a charge.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": false,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "SHADOW SPECTRE",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "12\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "SHADOW SPECTRE EXARCH",
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
              "name": "Prism rifle – dispersed",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Prism rifle – focused",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
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
        }
      ],
      "keywords": ["Infantry", "Jump Pack", "Fly", "Shadow Spectres"],
      "factions": ["Aeldari"],
      "leadBy": ["Irillyth"]
    },
    {
      "id": "1b5d57e8-e866-5fa1-a017-dd224ae1a3c3",
      "name": "Shadowseer",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Troupe",
      "composition": ["1 Shadowseer"],
      "loadout": "This model is equipped with: shuriken pistol; miststave.",
      "wargear": [
        "This model’s shuriken pistol can be replaced with 1 neuro disruptor."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "60",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fog of Dreams (Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Stealth ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Twilight Pathways (Psychic)",
            "description": "At the start of your Movement phase, one model from your army with this ability can use it. If it does, until the end of the turn, you can re-roll Advance rolls made for that model’s unit and that model’s unit is eligible to declare a charge in a turn in which it Advanced.",
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
          "name": "Shadowseer",
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
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Miststave",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Psyker",
        "Grenades",
        "Harlequins",
        "Shadowseer"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Troupe"],
        "extra": ""
      }
    },
    {
      "id": "f5f48c3a-78bc-5ecc-81f1-9de5a9b5bd12",
      "name": "Shining Spears",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Shining Spear Exarch", "2-5 Shining Spears"],
      "loadout": "Every model is equipped with: laser lance; twin shuriken catapult.",
      "wargear": [
        "The Shining Spear Exarch’s laser lance can be replaced with one of the following: ◦ 1 paragon sabre ◦ 1 star lance",
        "The Shining Spear Exarch’s twin shuriken catapult can be replaced with 1 shuriken cannon.",
        "The Shining Spear Exarch can be equipped with 1 shimmershield."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "120",
          "active": true
        },
        {
          "models": "6",
          "cost": "240",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Shimmershield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aerobatic Grace",
            "description": "Each time an attack targets this unit, subtract 1 from the Hit roll.",
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
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "SHINING SPEAR",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "14\"",
          "t": "4",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "SHINING SPEAR EXARCH",
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
              "name": "Laser lance",
              "keywords": ["assault"],
              "range": "6\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Star lance",
              "keywords": ["assault"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Laser lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
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
              "name": "Paragon sabre",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "4",
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
              "name": "Star lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Shining Spears"],
      "factions": ["Aeldari"]
    },
    {
      "id": "d336eae8-70ca-574e-9717-99835426785d",
      "name": "Shroud Runners",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Shroud Runners"],
      "loadout": "Every model is equipped with: Ranger long rifle; scatter laser; shuriken pistol; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "80",
          "active": true
        },
        {
          "models": "6",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 9\"", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "*  Models in this unit have a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Target Acquisition",
            "description": "At the start of your Shooting phase, select one enemy unit within 12\" of and visible to this unit. Until the end of the phase, ranged weapons equipped by friendly Aeldari models have the [LETHAL HITS] ability when targeting that unit.",
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
          "sv": "4+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Shroud Runners",
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
              "name": "Ranger long rifle",
              "keywords": ["precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Shroud Runners"],
      "factions": ["Aeldari"]
    },
    {
      "id": "9cd7492d-eeef-53d2-9819-7853fac13cc1",
      "name": "Skathach Wraithknight",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Skathach Wraithknight"],
      "loadout": "This model is equipped with: inferno lance; titanic feet; scattershield.",
      "wargear": [
        "This model’s inferno lance can be replaced with 1 deathshroud cannon.",
        "This model’s scattershield can be replaced with one of the following: ◦ 1 inferno lance ◦ 1 deathshroud cannon",
        "This model can be equipped with up to two of the following: ◦ 1 scatter laser ◦ 1 shuriken cannon ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "440",
          "active": true
        }
      ],
      "abilities": {
        "wargear": {
          "name": "Scattershield",
          "description": "The bearer has a 4+ invulnerable save.",
          "showAbility": true,
          "showDescription": true
        },
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Agile",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over other models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Webway Shunt Generator",
            "description": "Once per battle, at the end of your opponent’s turn, if this model is not within Engagement Range of one or more enemy units, you can remove this model from the battlefield and place it into Strategic Reserves.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "18",
          "ld": "6+",
          "oc": "10",
          "name": "Skathach Wraithknight",
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
              "name": "Deathshroud cannon – dispersed",
              "keywords": ["blast", "devastating wounds"],
              "range": "12\"",
              "attacks": "3D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Deathshroud cannon – focused",
              "keywords": ["blast", "devastating wounds"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Inferno lance",
              "keywords": ["melta 2"],
              "range": "24\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "12",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Titanic feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Walker",
        "Wraith Construct",
        "Skathach Wraithknight"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "220255f7-7940-52f9-802b-2354b0943d98",
      "name": "Skyweavers",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2-4 Skyweavers"],
      "loadout": "Every model is equipped with: shuriken cannon; star bolas; close combat weapon.",
      "wargear": [
        "Any number of models can each have their shuriken cannon replaced with 1 Skyweaver haywire cannon.",
        "Any number of models can each have their star bolas replaced with 1 zephyrglaive."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "95",
          "active": true
        },
        {
          "models": "4",
          "cost": "190",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Scything Swipes",
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
          "m": "14\"",
          "t": "4",
          "sv": "4+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Skyweavers",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Star bolas",
              "keywords": [],
              "range": "12\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "7",
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
              "name": "Skyweaver haywire cannon",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "3"
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
              "attacks": "4",
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
              "name": "Zephyrglaive",
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
      "keywords": ["Mounted", "Fly", "Smoke", "Harlequins", "Skyweavers"],
      "factions": ["Aeldari"]
    },
    {
      "id": "ce7717de-ecfc-57bc-809a-5644eaac1162",
      "name": "Solitaire",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Solitaire – Epic Hero"],
      "loadout": "This model is equipped with: Solitaire weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "115",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Fights First", "Lone Operative"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "3+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blitz",
            "description": "Once per battle, in your Movement phase, this model can use this ability before it makes a Normal move. If it does, until the end of the turn, add 2D6\" to this model’s Move characteristic and add 3 to the Attacks characteristic of this model’s Solitaire weapons.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Blur of Movement",
            "description": "This model is eligible to declare a charge in a turn in which it Advanced.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "PATH OF DAMNATION",
            "description": "This model cannot be your Warlord.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
          "t": "3",
          "sv": "6+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Solitaire",
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
              "name": "Solitaire weapons",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "9",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Harlequins",
        "Solitaire"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "da7696c5-35af-571b-8891-c7f8e87f0353",
      "name": "Spiritseer",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Wraithblades ■ Wraithguard ■ Wraithlord",
      "composition": ["1 Spiritseer"],
      "loadout": "This model is equipped with: shuriken pistol; witch staff.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Spirit Mark",
            "description": "While this model is leading a unit, weapons in that unit have the [LETHAL HITS] ability and each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Tears of Isha (Psychic)",
            "description": "While this model is leading a unit, in your Command phase, you can return 1 destroyed Bodyguard model to that unit.",
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
          "sv": "6+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Spiritseer",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Witch staff",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": ["Character", "Infantry", "Psyker", "Spiritseer"],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Wraithblades", "Wraithguard", "Wraithlord"],
        "extra": ""
      }
    },
    {
      "id": "a2ab60bb-cde1-5c04-9a9e-ab83e75b5b83",
      "name": "Starweaver",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Starweaver"],
      "loadout": "This model is equipped with: 2 shuriken cannons; close combat weapon.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 6 Harlequins Infantry models.",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Firing Deck 6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rapid Embarkation",
            "description": "At the end of the Fight phase, if there are no models currently embarked within this Transport, you can select one friendly Harlequins Infantry unit that has 6 or fewer models that is wholly within 6\" of this Transport. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this Transport.",
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
          "name": "Starweaver",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "3",
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
        "Smoke",
        "Fly",
        "Harlequins",
        "Starweaver"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "f439bfc5-13ef-56e7-a954-091dedf6b831",
      "name": "Storm Guardians",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["10 Storm Guardians", "1 Serpent’s Scale Platform"],
      "loadout": "Every Storm Guardian is equipped with: shuriken pistol; Guardian combat weapon. The Serpent’s Scale Platform is equipped with: Guardian combat weapon; Serpent shield.",
      "wargear": [
        "Up to 2 Storm Guardians can each have their shuriken pistol replaced with 1 Aeldari flamer.",
        "Up to 2 Storm Guardians can each have their shuriken pistol replaced with 1 Guardian fusion gun.",
        "Up to 2 Storm Guardians can each have their Guardian combat weapon replaced with 1 Aeldari power sword."
      ],
      "transport": "",
      "points": [
        {
          "models": "11",
          "cost": "115",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Serpent Shield",
            "description": "Models in the bearer’s unit have a 5+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Stormblades",
            "description": "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Crewed Platform",
            "description": "When the last Storm Guardian model in this unit is destroyed, any remaining Serpent’s Scale Platform models in this unit are also destroyed.",
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
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "2",
          "name": "STORM GUARDIAN",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "0",
          "name": "SERPENT’S SCALE PLATFORM",
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
              "name": "Aeldari flamer",
              "keywords": ["assault", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
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
              "name": "Guardian fusion gun",
              "keywords": ["assault", "melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Guardian combat weapon",
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
        "Battleline",
        "Grenades",
        "Guardians",
        "Storm Guardians"
      ],
      "factions": ["Aeldari"],
      "leadBy": [
        "Autarch",
        "Eldrad Ulthran",
        "Farseer",
        "Prince Yriel",
        "The Visarch",
        "Warlock",
        "Yvraine"
      ]
    },
    {
      "id": "8b475d6d-ea2c-53f6-8ab3-4e31da4ddc2c",
      "name": "Striking Scorpions",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Striking Scorpion Exarch", "4-9 Striking Scorpions"],
      "loadout": "Every model is equipped with: shuriken pistol; Scorpion chainsword; mandiblasters.",
      "wargear": [
        "The Striking Scorpion Exarch’s shuriken pistol can be replaced with 1 Scorpion’s claw.",
        "The Striking Scorpion Exarch’s shuriken pistol and Scorpion chainsword can be replaced with 1 biting blade."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75",
          "active": true
        },
        {
          "models": "10",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Mandiblasters",
            "description": "Melee weapons equipped by the bearer have the [DEVASTATING WOUNDS] ability when targeting units without the Monster or Vehicle keywords.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Infiltrators"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [],
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
          "name": "STRIKING SCORPION",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "STRIKING SCORPION EXARCH",
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
              "name": "Scorpion’s claw",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "2",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Biting blade",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
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
              "name": "Scorpion chainsword",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
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
              "name": "Scorpion’s claw",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Striking Scorpions"],
      "factions": ["Aeldari"],
      "leadBy": ["Karandras"]
    },
    {
      "id": "4b91cd9c-5102-53f1-9df5-83ac8622bc1e",
      "name": "Support Weapons",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Support Weapon"],
      "loadout": "This model is equipped with: shadow weaver; shuriken catapult; close combat weapon.",
      "wargear": [
        "Any number of models can each have their shadow weaver replaced with one of the following: ◦ 1 D-cannon ◦ 1 vibro cannon"
      ],
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
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Artillery Barrage",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit (excluding Monster and Vehicle untis) that was hit by one or more of those attacks. Until the start of your next turn, while this unit is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
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
          "m": "3\"",
          "t": "6",
          "sv": "4+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Support Weapons",
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
              "name": "D-cannon",
              "keywords": [
                "blast",
                "devastating wounds",
                "heavy",
                "indirect fire"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "16",
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
              "name": "Shadow weaver",
              "keywords": [
                "blast",
                "devastating wounds",
                "heavy",
                "indirect fire"
              ],
              "range": "48\"",
              "attacks": "D6+2",
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
              "name": "Shuriken catapult",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Vibro cannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "8",
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
      "keywords": ["Vehicle", "Support Weapons"],
      "factions": ["Aeldari"]
    },
    {
      "id": "54f6fc00-6f4a-5639-82fc-f3a31357345b",
      "name": "Swooping Hawks",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Swooping Hawk Exarch", "4-9 Swooping Hawks"],
      "loadout": "Every model is equipped with: lasblaster; close combat weapon.",
      "wargear": [
        "The Swooping Hawk Exarch’s lasblaster can be replaced with 1 Hawk’s talon.",
        "The Swooping Hawk Exarch can be equipped with 1 Aeldari power sword."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75",
          "active": true
        },
        {
          "models": "10",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Skyleap",
            "description": "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove this unit from the battlefield and place it into Strategic Reserves.",
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
          "name": "SWOOPING HAWK",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "14\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "SWOOPING HAWK EXARCH",
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
              "name": "Hawk’s talon",
              "keywords": ["assault", "lethal hits"],
              "range": "24\"",
              "attacks": "4",
              "skill": "3+",
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
              "name": "Lasblaster",
              "keywords": ["assault", "lethal hits"],
              "range": "24\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
        "Jump Pack",
        "Fly",
        "Grenades",
        "Swooping Hawks"
      ],
      "factions": ["Aeldari"],
      "leadBy": ["Baharroth"]
    },
    {
      "id": "ebc4b618-c08e-5c19-9633-3a9c63bc3ec3",
      "name": "The Visarch",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Corsair Voidreavers ■ Corsair Voidscarred ■ Guardian Defenders ■ Kabalite Warriors (see Drukhari) ■ Storm Guardians ■ Troupe ■ Wyches (see Drukhari) You can attach this unit to one of the above units, even if Yvraine has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Visarch – Epic Hero"],
      "loadout": "This model is equipped with: Asu-var, the Sword of Silent Screams.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Way of the Blade",
            "description": "While this model is leading a unit, that unit has the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Champion of Ynnead",
            "description": "Each time this model is selected to fight, select one of the abilities below for Asu-var, the Sword of Silent Screams, to gain until the end of the phase: ■ [  SUSTAINED HITS 2] ■ [DEVASTATING WOUNDS] ■ [  LETHAL HITS]",
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
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "The Visarch",
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
              "name": "Asu-var, the Sword of Silent Screams",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-4",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Ynnari",
        "The Visarch"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": [
          "Corsair Voidreavers",
          "Corsair Voidscarred",
          "Guardian Defenders",
          "Kabalite Warriors (see Drukhari)",
          "Storm Guardians",
          "Troupe",
          "Wyches (see Drukhari)"
        ],
        "extra": "You can attach this unit to one of the above units, even if Yvraine has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "2906941e-fa4b-5aa4-bb53-72cf83da47f1",
      "name": "The Yncarne",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Yncarne – Epic Hero"],
      "loadout": "This model is equipped with: swirling soul energy; Vilith-zhar, the Sword of Souls.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "270",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Inevitable Death",
            "description": "Once per phase, if this model is on the battlefield, when another unit is destroyed, just after removing the last model in that unit, you can remove this model from the battlefield and set it up again as close as possible to where that destroyed model was and not within Engagement Range of any enemy models.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Deathly Form",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack.",
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
          "m": "10\"",
          "t": "10",
          "sv": "2+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "The Yncarne",
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
              "name": "Swirling soul energy",
              "keywords": ["ignores cover", "psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
              "strength": "7",
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
              "name": "Vilith-zhar, the Sword of Souls – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "12",
              "ap": "-4",
              "damage": "D6+1"
            },
            {
              "active": true,
              "name": "Vilith-zhar, the Sword of Souls – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
              "strength": "6",
              "ap": "-4",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Fly",
        "Psyker",
        "Daemon",
        "Ynnari",
        "The Yncarne"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "1238411f-7d33-52d3-8fdc-4259230538fe",
      "name": "Troupe",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Lead Player", "4-11 Players"],
      "loadout": "Every model is equipped with: shuriken pistol; Harlequin’s blade.",
      "wargear": [
        "Any number of models can each have their Harlequin’s blade replaced with 1 Harlequin’s special weapon.",
        "The Lead Player’s Harlequin’s blade can be replaced with 1 Aeldari power sword.",
        "If this unit contains 10 or fewer models: ◦  Up to two models can each have their shuriken pistol replaced with 1 neuro disruptor ◦  Up to two models can each have their shuriken pistol replaced with 1 fusion pistol",
        "If this unit contains 11 or more models: ◦  Up to four models can each have their shuriken pistol replaced with 1 neuro disruptor ◦  Up to four models can each have their shuriken pistol replaced with 1 fusion pistol"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75",
          "active": true
        },
        {
          "models": "6",
          "cost": "90",
          "active": true
        },
        {
          "models": "11",
          "cost": "165",
          "active": true
        },
        {
          "models": "12",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Harlequin Assault",
            "description": "Each time this unit makes a Charge move, until the end of the turn, each time a model in this unit makes a melee attack, add 1 to the Wound roll.",
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
          "oc": "1",
          "name": "Troupe",
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
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
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
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Harlequin’s blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Harlequin’s special weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Harlequins", "Troupe"],
      "factions": ["Aeldari"],
      "leadBy": ["Shadowseer", "The Visarch", "Troupe Master", "Yvraine"]
    },
    {
      "id": "058d7578-2cb1-5b5e-bc57-f17c171ea9f0",
      "name": "Troupe Master",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Troupe",
      "composition": ["1 Troupe Master"],
      "loadout": "This model is equipped with: shuriken pistol; Troupe Master’s blade.",
      "wargear": [
        "This model’s shuriken pistol can be replaced with one of the following: ◦ 1 fusion pistol ◦ 1 neuro disruptor",
        "This model’s Troupe Master’s blade can be replaced with 1 Harlequin’s special weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "55",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Choreographer of War",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cegorach’s Favour",
            "description": "Once per turn, when you use a Fate dice to substitute a Hit roll, a Wound roll or a saving throw made for this model, you can first change the result of that Fate dice to a 6.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "TROUPE MASTER",
            "description": "If this model is your Warlord, Troupe units from your army have the Battleline keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
          "name": "Troupe Master",
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
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Harlequin’s special weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
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
              "name": "Troupe Master’s blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Harlequins",
        "Troupe Master"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Troupe"],
        "extra": ""
      }
    },
    {
      "id": "d5ea8847-daaf-5cc2-8583-c93f0e53419e",
      "name": "Vampire Hunter",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Vampire Hunter"],
      "loadout": "This model is equipped with: scatter laser; 2 twin pulse lasers; twin Vampire pulsar; wraithbone hull.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2", "Hover"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+*",
          "info": "Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Titan Hunter",
            "description": "Each time a ranged attack made by this model is allocated to a Monster or Vehicle model, re-roll a Damage roll of 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "12",
          "sv": "3+",
          "w": "30",
          "ld": "6+",
          "oc": "0",
          "name": "Vampire Hunter",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Twin pulse laser",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin Vampire pulsar",
              "keywords": ["twin-linked"],
              "range": "60\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "4"
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
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Aircraft", "Titanic", "Vampire Hunter"],
      "factions": ["Aeldari"]
    },
    {
      "id": "cabaef1d-7efd-5afa-97b2-472553603cce",
      "name": "Vampire Raider",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Vampire Raider"],
      "loadout": "This model is equipped with: scatter laser; 2 twin pulse lasers; wraithbone hull.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 30 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2", "Hover"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+*",
          "info": "Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Into the Foe",
            "description": "If a unit disembarks from this Transport before it moves, until the end of the turn, that unit is eligible to charge in a turn in which it Advanced.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "12",
          "sv": "3+",
          "w": "30",
          "ld": "6+",
          "oc": "0",
          "name": "Vampire Raider",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Twin pulse laser",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
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
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
        "Titanic",
        "Transport",
        "Vampire Raider"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "587ed562-f847-58b6-9366-8e9245b9ac6f",
      "name": "Voidweaver",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Voidweaver"],
      "loadout": "This model is equipped with: 2 shuriken cannons; Voidweaver haywire cannon; close combat weapon.",
      "wargear": [
        "This model’s Voidweaver haywire cannon can be replaced with 1 prismatic cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Devastating Assault",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test.",
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
          "oc": "2",
          "name": "Voidweaver",
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
              "name": "Prismatic cannon – dispersed pulse",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Prismatic cannon – focused lances",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "4"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Voidweaver haywire cannon",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "3"
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
              "attacks": "4",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Smoke", "Harlequins", "Voidweaver"],
      "factions": ["Aeldari"]
    },
    {
      "id": "303e56a0-4c0f-50c9-bfa4-e57d30bf2b0a",
      "name": "Vypers",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Vyper"],
      "loadout": "This model is equipped with: shuriken cannon; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "Any number of models can each have their shuriken cannon replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
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
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Harassment Fire",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover.",
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
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Vypers",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Fly", "Vypers"],
      "factions": ["Aeldari"]
    },
    {
      "id": "91d66514-b08f-545c-ab78-e48c999d8e90",
      "name": "War Walkers",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 War Walker"],
      "loadout": "This model is equipped with: 2 shuriken cannons; War Walker feet.",
      "wargear": [
        "Each model can have each shuriken cannon it is equipped with replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
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
        "core": ["Scouts 9\""],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Power Field",
            "description": "Each time a ranged attack targets this unit, subtract 1 from the Wound roll.",
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
          "m": "10\"",
          "t": "7",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "War Walkers",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "War Walker feet",
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
      "keywords": ["Vehicle", "Walker", "War Walkers"],
      "factions": ["Aeldari"]
    },
    {
      "id": "c9393df2-5191-5d34-b260-5dbafbfa7deb",
      "name": "Warlock",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Guardian Defenders ■ Storm Guardians You can attach this model to one of the above units, even if one other Leader unit (excluding Warlock units) has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Warlock"],
      "loadout": "This model is equipped with: Destructor; shuriken pistol; witchblade.",
      "wargear": [
        "This model’s witchblade can be replaced with 1 singing spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "45",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Runes of Fortune (Psychic)",
            "description": "In your Command phase, select one of the following to take effect until the start of your next Command phase: ■  Quicken: Each time this model’s unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit. ■  Restrain: Each time an enemy unit declares a charge, if this model’s unit is selected as a target of that charge, subtract 2 from the Charge roll. The same enemy unit can only be affected in this way once per phase.",
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
          "sv": "6+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Warlock",
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
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
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
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Psyker", "Warlock"],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Guardian Defenders", "Storm Guardians"],
        "extra": "You can attach this model to one of the above units, even if one other Leader unit (excluding Warlock units) has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "9a4c27e9-42d1-5228-8f74-43a7871b709e",
      "name": "Warlock Conclave",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2-4 Warlocks"],
      "loadout": "Every model is equipped with: Destructor; shuriken pistol; witchblade.",
      "wargear": [
        "Any number of models can each have their witchblade replaced with 1 singing spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "60",
          "active": true
        },
        {
          "models": "4",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Protect (Psychic)",
            "description": "While a Farseer model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Warlock Conclave",
            "description": "Models in this unit have the Feel No Pain 4+ ability against Psychic Attacks.",
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
          "sv": "6+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Warlock Conclave",
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
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Singing spear",
              "keywords": ["psychic", "assault"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
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
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Psyker", "Warlocks", "Warlock Conclave"],
      "factions": ["Aeldari"],
      "leadBy": ["Eldrad Ulthran", "Farseer"]
    },
    {
      "id": "60c8afc3-c477-588d-9d8e-829c6f110d4b",
      "name": "Warlock Skyrunner",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Windriders You can attach this unit to the above unit, even if one other Leader unit (excluding Warlock units) has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Warlock Skyrunner"],
      "loadout": "This model is equipped with: Destructor; shuriken pistol; twin shuriken catapult; witchblade.",
      "wargear": [
        "This model’s witchblade can be replaced with 1 singing spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "55",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Leader", "Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Runes of Battle (Psychic)",
            "description": "In your Command phase, select one of the following to take effect until the start of your next Command phase: ■  Conceal: Models in this model’s unit have the Stealth ability. ■  Reveal: Ranged weapons equipped by models in this model’s unit have the [IGNORES COVER] ability.",
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
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Warlock Skyrunner",
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
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Fly",
        "Psyker",
        "Warlock",
        "Warlock Skyrunner"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": ["Windriders"],
        "extra": "You can attach this unit to the above unit, even if one other Leader unit (excluding Warlock units) has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "83cb9507-f3bb-598b-8eed-8672a2ef2f13",
      "name": "Warlock Skyrunner Conclave",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2-3 Warlock Skyrunners"],
      "loadout": "Every model is equipped with: Destructor; shuriken pistol; twin shuriken catapult; witchblade.",
      "wargear": [
        "Any number of models can each have their witchblade replaced with 1 singing spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "100",
          "active": true
        },
        {
          "models": "3",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Protect (Psychic)",
            "description": "While a Farseer model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Warlock Conclave",
            "description": "Models in this unit have the Feel No Pain 4+ ability against Psychic Attacks.",
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
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Warlock Skyrunner Conclave",
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
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Fly",
        "Psyker",
        "Warlocks",
        "Warlock Skyrunner Conclave"
      ],
      "factions": ["Aeldari"],
      "leadBy": ["Farseer Skyrunner"]
    },
    {
      "id": "b0c7ed8d-7e1f-516a-b729-3d124ff20265",
      "name": "Warp Hunter",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Warp Hunter"],
      "loadout": "This model is equipped with: D-flail; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Devastating Assault",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test.",
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
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Warp Hunter",
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
              "name": "D-flail – blast",
              "keywords": ["blast", "devastating wounds"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "12",
              "ap": "-4",
              "damage": "3"
            },
            {
              "active": true,
              "name": "D-flail – rift",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D3",
              "skill": "N/A",
              "strength": "12",
              "ap": "-4",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "3",
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
              "name": "Wraithbone hull",
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
      "keywords": ["Vehicle", "Fly", "Warp Hunter"],
      "factions": ["Aeldari"]
    },
    {
      "id": "2e5ac6c6-6fa1-5004-b268-249397354dd6",
      "name": "Warp Spiders",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Warp Spider Exarch", "4-9 Warp Spiders"],
      "loadout": "Every model is equipped with: death spinner; close combat weapon.",
      "wargear": [
        "The Warp Spider Exarch can be equipped with 1 additional death spinner and 1 powerblades."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "100",
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
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Flickerjump",
            "description": "In your Movement phase, when this unit makes a Normal move, it can make a flickerjump. If it does, until the end of the phase, its Move characteristic is changed to 24\" but you must roll one D6 after this unit ends that move: on a 1, this unit suffers 1 mortal wound. This unit is not eligible to declare a charge in the same turn in which it makes a flickerjump.",
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
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "WARP SPIDER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "12\"",
          "t": "3",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "WARP SPIDER EXARCH",
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
              "name": "Death spinner",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
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
              "name": "Powerblades",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Jump Pack", "Fly", "Warp Spiders"],
      "factions": ["Aeldari"]
    },
    {
      "id": "9390731c-4387-5fdd-8d5d-e442cd5a5fe1",
      "name": "Wasp Assault Walker",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wasp Assault Walker"],
      "loadout": "This model is equipped with: scatter laser; shuriken cannon; Wasp feet.",
      "wargear": [
        "This model’s scatter laser can be replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 shuriken cannon ◦ 1 starcannon",
        "This model’s shuriken cannon can be replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cloudbreakers",
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
          "m": "10\"",
          "t": "7",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Wasp Assault Walker",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Wasp feet",
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
      "keywords": ["Vehicle", "Walker", "Fly", "Wasp Assault Walker"],
      "factions": ["Aeldari"]
    },
    {
      "id": "09b47c07-47b5-53d3-8758-9a4705bbb61a",
      "name": "Wave Serpent",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wave Serpent"],
      "loadout": "This model is equipped with: twin shuriken cannon; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s twin shuriken cannon can be replaced with one of the following: ◦ 1 twin Aeldari missile launcher ◦ 1 twin bright lance ◦ 1 twin scatter laser ◦ 1 twin starcannon",
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "This model has a transport capacity of 12 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models.",
      "points": [
        {
          "models": "1",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Wave Serpent Shield",
            "description": "Once per battle, in your Shooting phase, you can select one enemy unit that is within 12\" of and visible to this model and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds and must take a Battle-shock test.",
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
          "t": "9",
          "sv": "3+",
          "w": "13",
          "ld": "6+",
          "oc": "2",
          "name": "Wave Serpent",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Twin Aeldari missile launcher – starshot",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Twin Aeldari missile launcher – sunburst",
              "keywords": ["blast", "twin-linked"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Twin bright lance",
              "keywords": ["twin-linked"],
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
              "name": "Twin scatter laser",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Twin shuriken cannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Twin starcannon",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Wraithbone hull",
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
        "Wave Serpent"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "e92afdeb-bee6-5c0a-bfc5-453ab2f9baa8",
      "name": "Windriders",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-9 Windriders"],
      "loadout": "Every model is equipped with: twin shuriken catapult; close combat weapon.",
      "wargear": [
        "Any number of models can each have their twin shuriken catapult replaced with one of the following: ◦ 1 scatter laser ◦ 1 shuriken cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "80",
          "active": true
        },
        {
          "models": "6",
          "cost": "160",
          "active": true
        },
        {
          "models": "9",
          "cost": "240",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Swift Demise",
            "description": "Each time a model in this unit makes a ranged attack that targets the closest eligible target, re-roll a Hit roll of 1. If the target of that attack is within range of an objective marker your opponent controls, you can re-roll the Hit roll instead.",
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
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Windriders",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Windriders"],
      "factions": ["Aeldari"],
      "leadBy": ["Autarch Skyrunner", "Farseer Skyrunner", "Warlock Skyrunner"]
    },
    {
      "id": "9c9af29d-b7a3-5de1-8ff6-41a86a998ca7",
      "name": "Wraithblades",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Wraithblades"],
      "loadout": "Every model is equipped with: ghostswords.",
      "wargear": [
        "All of the models in this unit can each have their ghostswords replaced with 1 ghostaxe and 1 forceshield."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "170",
          "active": true
        },
        {
          "models": "10",
          "cost": "340",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Forceshield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Malevolent Souls",
            "description": "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
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
          "m": "6\"",
          "t": "7",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Wraithblades",
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
              "name": "Ghostaxe",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
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
              "name": "Ghostswords",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Wraith Construct", "Wraithblades"],
      "factions": ["Aeldari"],
      "leadBy": ["Bonesinger", "Spiritseer"]
    },
    {
      "id": "527e915f-9575-5968-99bf-04dae1d145d0",
      "name": "Wraithguard",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Wraithguard"],
      "loadout": "Every model is equipped with: wraithcannon; close combat weapon.",
      "wargear": [
        "All of the models in this unit can each have their wraithcannon replaced with 1 D-scythe."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "155",
          "active": true
        },
        {
          "models": "10",
          "cost": "310",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "War Construct",
            "description": "Once per battle round, when an enemy unit targets this unit, after that unit has finished making its attacks, this unit can shoot as if it were your Shooting phase.",
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
          "m": "6\"",
          "t": "7",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Wraithguard",
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
              "name": "Wraithcannon",
              "keywords": ["devastating wounds"],
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
              "name": "D-scythe",
              "keywords": [],
              "range": "12\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "10",
              "ap": "-4",
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
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Wraith Construct", "Wraithguard"],
      "factions": ["Aeldari"],
      "leadBy": ["Bonesinger", "Spiritseer"]
    },
    {
      "id": "fd526d7e-34b9-517a-bab1-b7baa1e1c1e4",
      "name": "Wraithknight",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wraithknight"],
      "loadout": "This model is equipped with: titanic ghostglaive; titanic feet; scattershield.",
      "wargear": [
        "This model’s titanic ghostglaive can be replaced with one of the following: ◦ 1 heavy wraithcannon ◦ 1 suncannon",
        "This model’s scattershield can be replaced with 1 heavy wraithcannon.",
        "This model can be equipped with up to two of the following: ◦ 1 scatter laser ◦ 1 shuriken cannon ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "475",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Scattershield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Agile",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over other models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Wraithbone Form",
            "description": "Each time an attack is allocated to this model, subtract 1 from that attack’s Damage characteristic.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "18",
          "ld": "6+",
          "oc": "10",
          "name": "Wraithknight",
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
              "name": "Heavy wraithcannon",
              "keywords": ["blast", "devastating wounds"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "20",
              "ap": "-4",
              "damage": "2D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Suncannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
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
              "name": "Titanic feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "8",
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
              "name": "Titanic ghostglaive – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "16",
              "ap": "-3",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Titanic ghostglaive – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "15",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Walker",
        "Wraith Construct",
        "Wraithknight"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "97d00630-43f0-5063-9c3b-a23f407385bf",
      "name": "Wraithlord",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wraithlord"],
      "loadout": "This model is equipped with: 2 shuriken catapults; wraithbone fists.",
      "wargear": [
        "Each of this model’s shuriken catapults can be replaced with 1 Aeldari flamer.",
        "This model can be equipped with 1 ghostglaive.",
        "This model can be equipped with up to two of the following: ◦  1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 shuriken cannon ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fated Hero",
            "description": "Each time this model destroys an enemy unit, roll one D6 and add it to your Fate dice pool displaying the result you just rolled.",
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
          "t": "11",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Wraithlord",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
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
              "name": "Aeldari flamer",
              "keywords": ["assault", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
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
              "name": "Bright lance",
              "keywords": [],
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
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
              "name": "Shuriken catapult",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
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
              "name": "Ghostglaive – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6+1"
            },
            {
              "active": true,
              "name": "Ghostglaive – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "4+",
              "strength": "7",
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
              "name": "Wraithbone fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Walker", "Wraith Construct", "Wraithlord"],
      "factions": ["Aeldari"],
      "leadBy": ["Bonesinger", "Spiritseer"]
    },
    {
      "id": "63e5a52c-23e4-54df-ac74-250e04a3f859",
      "name": "Wraithseer",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wraithseer"],
      "loadout": "This model is equipped with: destructor; ghostspear. SPIRIT BOND If a Spiritseer model from your army with the Leader ability can be attached to a Wraithlord, it can be attached to this unit instead.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 shuriken cannon ◦ 1 starcannon ◦ 1 Wraithseer D-cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Horrify (Psychic)",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test.",
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
          "t": "11",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Wraithseer",
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
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
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
              "name": "Bright lance",
              "keywords": [],
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
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Wraithseer D-cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
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
              "name": "Ghostspear – strike",
              "keywords": ["anti-infantry 2+", "precision", "psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Ghostspear – sweep",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "12",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Psyker",
        "Walker",
        "Wraith Construct",
        "Wraithseer"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "4fe3eb62-3ab8-50a4-bbbc-2886a6cef808",
      "name": "Yvraine",
      "source": "40k-10e",
      "faction_id": "AE",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Corsair Voidscarred ■ Corsair Voidreavers ■ Guardian Defenders ■ Kabalite Warriors (see Drukhari) ■ Storm Guardians ■ Troupe ■ Wyches (see Drukhari)",
      "composition": ["1 Yvraine – Epic Hero"],
      "loadout": "This model is equipped with: Storm of Whispers; Kha-vir, the Sword of Sorrows.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Herald of Ynnead",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Word of the Phoenix (Psychic)",
            "description": "While this model is leading a unit, in your Command phase, you can roll one D6: on a 2+, D3 destroyed Bodyguard models are returned to that unit.",
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
          "name": "Yvraine",
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
              "name": "Storm of Whispers",
              "keywords": ["anti-infantry 2+", "devastating wounds", "psychic"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "2+",
              "strength": "2",
              "ap": "-2",
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
              "name": "Kha-vir, the Sword of Sorrows",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Ynnari",
        "Psyker",
        "Yvraine"
      ],
      "factions": ["Aeldari"],
      "leads": {
        "units": [
          "Corsair Voidscarred",
          "Corsair Voidreavers",
          "Guardian Defenders",
          "Kabalite Warriors (see Drukhari)",
          "Storm Guardians",
          "Troupe",
          "Wyches (see Drukhari)"
        ],
        "extra": ""
      }
    }
  ],
  "colours": {
    "banner": "#0a353a",
    "header": "#347379"
  }
}
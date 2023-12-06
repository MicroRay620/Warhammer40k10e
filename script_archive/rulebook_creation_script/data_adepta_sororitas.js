window.data = window.data || {};
window.data.AS = {
  "id": "AS",
  "link": "https://game-datacards.eu",
  "name": "Adepta Sororitas",
  "is_subfaction": false,
  "parent_id": "",
  "allied_factions": ["AoI", "QI"],
  "stratagems": [
    {
      "name": "DIVINE INTERVENTION",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Hallowed Martyrs",
      "turn": "either",
      "phase": ["any"],
      "fluff": "Sometimes, a brush with death is so close\nthe only explanation is divine intervention.",
      "when": "Any phase.",
      "target": "One Adepta Sororitas\nCharacter unit from your army that\nwas just destroyed. You can use this\nStratagem on that unit even though it was\njust destroyed.",
      "effect": "Discard 1-3 Miracle dice. At the\nend of the phase, set the last destroyed\nmodel from your unit back up on the\nbattlefield, as close as possible to\nwhere it was destroyed and not within\nEngagement Range of any enemy models.\nThat model is set back up with a number\nof wounds remaining equal to the number\nof Miracle dice you discarded.",
      "restrictions": "You cannot select Saint\nCelestine as the target of this Stratagem.\nYou cannot select the same Character\nas the target of this Stratagem more than\nonce per battle. ",
      "id": "bb72bb7c-3ec0-5b0f-84d3-a1d8248f7b25"
    },
    {
      "name": "LIGHT OF THE EMPEROR",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Hallowed Martyrs",
      "turn": "either",
      "phase": ["command"],
      "fluff": "The Emperor’s radiance shines upon his\nwarriors, emboldening them amidst the\nthick of battle in their darkest hour.",
      "when": "Command phase.",
      "target": "One Adepta Sororitas unit\nfrom your army that is below its Starting\nStrength. For the purposes of this\nStratagem, if a unit has a Starting Strength\nof 1, it is considered to be below its\nStarting Strength while it has lost one or\nmore wounds.",
      "effect": "Until the end of the turn, your\nunit can ignore any or all modifiers to\nits characteristics and/or to any roll or\ntest made for it (excluding modifiers to\nsaving throws).",
      "restrictions": "",
      "id": "4a5fcab6-785c-58a0-a83c-44f02afd50bb"
    },
    {
      "name": "HOLY RAGE",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Hallowed Martyrs",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "With psalms on their lips, the faithful hurl\nthemselves forward, striking the foe down\nwith the inner strength born of faith in\nthe Emperor.",
      "when": "Fight phase.",
      "target": "One Adepta Sororitas unit from\nyour army that has not been selected to\nfight this phase.",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes a melee\nattack, add 1 to the Wound roll.",
      "restrictions": "",
      "id": "8219961b-1cce-52b0-a9bc-241b2cd79557"
    },
    {
      "name": "SPIRIT OF THE MARTYR",
      "cost": 2,
      "type": "Strategic Ploy",
      "detachment": "Hallowed Martyrs",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "Even with their dying act, the Sororitas\nmete out the Emperor’s judgement.",
      "when": "Fight phase, just after an enemy\nunit has selected its targets.",
      "target": "One Adepta Sororitas unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime a model in your unit is destroyed, if\nthat model has not fought this phase, do\nnot remove it from play. The destroyed\nmodel can fight after the attacking\nmodel’s unit has finished making attacks,\nand is then removed from play.",
      "restrictions": "",
      "id": "be48ac44-2c54-55c1-a138-e33b62c9cf2b"
    },
    {
      "name": "SUFFERING & SACRIFICE",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Hallowed Martyrs",
      "turn": "either",
      "phase": ["any"],
      "fluff": "Suffering is a staple prayer for the Adepta\nSororitas, and a martyr’s fate only brings\ngreater glory to the God-Emperor.",
      "when": "Start of the Fight phase.",
      "target": "One Adepta Sororitas Infantry\nor Adepta Sororitas Walker unit from\nyour army.",
      "effect": "Until the end of the phase, each\ntime an enemy model within Engagement\nrange of your unit selects targets, it must\nselect your unit as the target of its attacks.",
      "restrictions": "",
      "id": "ea65bd78-19ce-5913-81a4-18e35d9e3796"
    },
    {
      "name": "REJOICE THE FALLEN",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Hallowed Martyrs",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "The death of a Battle Sister only stirs\nthe survivors to fight harder to exact\nswift vengeance.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has resolved\nits attacks.",
      "target": "One Adepta Sororitas unit\nfrom your army that had one or more of\nits models destroyed as a result of the\nattacking unit’s attacks.",
      "effect": "Your unit can shoot as if it were\nyour Shooting phase, but it must target\nonly that enemy unit when doing so, and\ncan only do so if that enemy unit is an\neligible target.",
      "restrictions": "",
      "id": "9c8fc100-3c83-5248-9064-35fe8f996bf4"
    }
  ],
  "enhancements": [
    {
      "name": "SAINTLY EXAMPLE",
      "description": "Adepta Sororitas model only. When the bearer is destroyed, you gain an additional D3 Miracle dice.",
      "keywords": ["Adepta Sororitas"],
      "cost": "10"
    },
    {
      "name": "BLADE OF SAINT ELLYNOR",
      "description": "Adepta Sororitas model only. Add 1 to the Attacks, Strength and Damage characteristics of the bearer’s  melee weapons. If the bearer has lost one or more wounds, add 2 to the Attacks, Strength and Damage characteristics of the bearer’s melee weapons instead.",
      "keywords": ["Adepta Sororitas"],
      "cost": "15"
    },
    {
      "name": "LITANIES OF FAITH",
      "description": "Adepta Sororitas model only. At the end of your Command phase, if the bearer is on the battlefield, you can re-roll one Miracle dice from your Miracle dice pool and return it to your Miracle dice pool with the new result you rolled. When doing so, if the bearer has lost one or more wounds or is leading a unit that is Below Half-strength, you can re-roll up to three Miracle dice in this way instead.",
      "keywords": ["Adepta Sororitas"],
      "cost": "25"
    },
    {
      "name": "MANTLE OF OPHELIA",
      "description": "Canoness or Palatine model only. Each time an attack is allocated to the bearer, change the Damage characteristic of that attack to 1.",
      "keywords": ["Canoness", "Palatine"],
      "cost": "20"
    }
  ],
  "datasheets": [
    {
      "id": "31a5896d-2ef5-59c5-86e5-6f5a05436817",
      "name": "Adepta Sororitas Armoury",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": [],
      "loadout": "",
      "wargear": [],
      "transport": "",
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
        "other": [],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Condemnor boltgun",
              "keywords": [
                "anti-psyker 2+",
                "devastating wounds",
                "precision",
                "rapid fire 1"
              ],
              "range": "24\"",
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
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Ministorum hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": [],
      "factions": [""]
    },
    {
      "id": "3f3b3210-9983-56bc-b505-721f9d8aa7dd",
      "name": "Aestred Thurga And Agathae Dolan",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following units: ■ Battle Sisters Squad ■ Celestian Sacresants ■ Dominion Squad ■ Retributor Squad",
      "composition": [
        "1 Aestred Thurga – Epic Hero",
        "1 Agathae Dolan – Epic Hero"
      ],
      "loadout": "Aestred Thurga is equipped with: bolt pistol; Blade of Vigil. Agathae Dolan is equipped with: bolt pistol; scribe’s staff.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "70",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Auto-Tapestry of the Emperor’s Judgement",
            "description": "While Aestred Thurga is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Recount the Deeds of the Saints",
            "description": "While Agathae Dolan is part of this unit, each time this unit performs an Act of Faith, the result of one of the Miracle dice used in that Act of Faith is first improved by 1 (to a maximum of 6).",
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
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "AESTRED THURGA",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "6+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "AGATHAE DOLAN",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Blade of Vigil",
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
              "name": "Scribe’s staff",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Character",
        "Epic Hero",
        "Imperium",
        "Aestred Thurga and Agathae Dolan"
      ],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": [
          "Battle Sisters Squad",
          "Celestian Sacresants",
          "Dominion Squad",
          "Retributor Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "88b82e4e-c012-50aa-976a-9b63482f25b2",
      "name": "Arco-flagellants",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-10 Arco-flagellants"],
      "loadout": "Every model is equipped with: arco-flails.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "45",
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
        "core": ["Feel No Pain 4+"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Extremis Trigger Word",
            "description": "Each time this unit is selected to fight, you can choose to invoke its extremis trigger word. If you do, then until the end of the phase, arco-flails equipped by models in this unit have an Attacks characteristic of 6 and the [HAZARDOUS] ability.",
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
          "sv": "7+",
          "w": "2",
          "ld": "8+",
          "oc": "1",
          "name": "Arco-flagellants",
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
              "name": "Arco-flails",
              "keywords": ["sustained hits 1", "twin-linked"],
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
      "keywords": ["Infantry", "Imperium", "Arco-flagellants"],
      "factions": ["Adepta Sororitas"],
      "leadBy": ["Missionary", "Preacher"]
    },
    {
      "id": "46bb4ea3-a545-5152-8b6b-4f0a972a85c0",
      "name": "Battle Sanctum",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Battle Sanctum"],
      "loadout": "This model is equipped with: nothing.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Consecrated Ground",
            "description": "When this Fortification is set up, all parts of it must be set up within 1\" of another part. Friendly Adepta Sororitas Infantry models can be set up or end any type of move on top of the floor sections of this Fortification. While an Adepta Sororitas unit from your army is within 1\" of this Fortification, that unit can perform up to two Acts of Faith per phase, instead of just one.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Holy Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
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
          "m": "-",
          "t": "11",
          "sv": "3+",
          "w": "20",
          "ld": "7+",
          "oc": "0",
          "name": "Battle Sanctum",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [],
      "keywords": ["Imperium", "Fortification", "Towering", "Battle Sanctum"],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "d5bfff1a-8946-5275-8b37-0c5e14f353f9",
      "name": "Battle Sisters Squad",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sister Superior", "9 Battle Sisters"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "The Sister Superior’s boltgun can be replaced with one of the following: ◦  1 bolt pistol ◦ 1 combi-weapon* ◦ 1 condemnor boltgun* ◦ 1 inferno pistol* ◦ 1 Ministorum hand flamer* ◦ 1 plasma pistol*",
        "The Sister Superior can be equipped with one of the following: ◦ 1 chainsword ◦ 1 power weapon",
        "1 Battle Sister’s boltgun can be replaced with one of the following: ◦ 1 artificer-crafted storm bolter ◦ 1 meltagun ◦ 1 Ministorum flamer",
        "1 Battle Sister’s boltgun can be replaced with one of the following: ◦ 1 artificer-crafted storm bolter ◦ 1 heavy bolter ◦ 1 meltagun ◦ 1 Ministorum flamer ◦ 1 Ministorum heavy flamer ◦ 1 multi-melta",
        "1 Battle Sister equipped with 1 boltgun can be equipped with 1 simulacrum imperialis (that model’s boltgun cannot be replaced). *  This weapon’s profile can be found on the Adepta Sororitas Armoury card."
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
            "name": "Simulacrum Imperialis",
            "description": "Each time a unit is destroyed by the bearer’s unit, you gain 1 Miracle dice.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cherub",
            "description": "Once per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice. Designer’s Note: Place a Cherub token next to the unit, removing it once this ability has been used.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Defenders of the Faith",
            "description": "At the end of your Command phase, for each objective marker you control that has one or more units from your army with this ability within range of it, you gain 1 Miracle dice.",
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
          "ld": "7+",
          "oc": "2",
          "name": "Battle Sisters Squad",
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
              "name": "Artificer-crafted storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Boltgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
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
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Meltagun",
              "keywords": ["melta 2"],
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
              "name": "Ministorum flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Ministorum heavy flamer",
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
              "name": "Multi-melta",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
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
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
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
        "Battleline",
        "Imperium",
        "Battle Sisters Squad"
      ],
      "factions": ["Adepta Sororitas"],
      "leadBy": [
        "Aestred Thurga And Agathae Dolan",
        "Canoness",
        "Dialogus",
        "Dogmata",
        "Hospitaller",
        "Imagifier",
        "Junith Eruita",
        "Missionary",
        "Palatine",
        "Triumph Of Saint Katherine"
      ]
    },
    {
      "id": "ff8ab591-db4a-5588-a5b6-0fb6c84d1eb8",
      "name": "Canoness",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Battle Sisters Squad ■ Celestian Sacresants",
      "composition": ["1 Canoness"],
      "loadout": "This model is equipped with: bolt pistol; chainsword.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 condemnor boltgun ◦ 1 inferno pistol ◦ 1 plasma pistol",
        "This model’s chainsword can be replaced with one of the following: ◦  1 blessed blade ◦ 1 power weapon",
        "If this model is equipped with a chainsword, it can be equipped with one of the following: ◦ 1 brazier of holy fire ◦ 1 null rod",
        "If this model is equipped with a plasma pistol and a power weapon, it can be equipped with: ◦ 1 rod of office"
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
        "wargear": [
          {
            "name": "Null Rod",
            "description": "Models in the bearer’s unit have the Feel No Pain 4+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Rod of Office",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 4+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lead the Righteous",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Emperor’s Grace",
            "description": "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this model has a 2+ invulnerable save.",
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
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Canoness",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Brazier of holy fire",
              "keywords": ["ignores cover", "one shot", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Condemnor boltgun",
              "keywords": [
                "anti-psyker 2+",
                "devastating wounds",
                "precision",
                "rapid fire 1"
              ],
              "range": "24\"",
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
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Blessed blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "2+",
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
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
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
              "name": "Power weapon",
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
      "keywords": ["Infantry", "Character", "Grenades", "Imperium", "Canoness"],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": ["Battle Sisters Squad", "Celestian Sacresants"],
        "extra": ""
      }
    },
    {
      "id": "3741efa4-b45c-5588-bd3b-e34b7723c590",
      "name": "Castigator",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Castigator"],
      "loadout": "This model is equipped with: Castigator autocannons; 3 heavy bolters; armoured tracks.",
      "wargear": [
        "This model’s Castigator autocannons can be replaced with 1 Castigator battle cannon.",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter."
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
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rites of Castigation",
            "description": "Each time this model makes an attack with its Castigator autocannons that targets an enemy Infantry unit, you can re-roll the Hit roll. Each time this model makes an attack with its Castigator battle cannon that targets an enemy Monster or Vehicle unit, you can re-roll the Hit roll. After this model has shot, select one enemy unit that was hit by its Castigator autocannons or Castigator battle cannon this phase. That unit must take a Battle-shock test.",
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
          "m": "10\"",
          "t": "10",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Castigator",
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
              "name": "Castigator autocannons",
              "keywords": ["twin-linked", "rapid fire 4"],
              "range": "48\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
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
              "name": "Castigator battle cannon",
              "keywords": ["blast", "ignores cover"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "10",
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Armoured tracks",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Castigator"],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "520d767b-3df5-5b7b-b156-0d98246c4472",
      "name": "Celestian Sacresants",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sacresant Superior", "4-9 Celestian Sacresants"],
      "loadout": "Every model is equipped with: bolt pistol; hallowed mace.",
      "wargear": [
        "The Sacresant Superior’s hallowed mace can be replaced with 1 spear of the faithful.",
        "The Sacresant Superior’s bolt pistol can be replaced with one of the following: ◦ 1 inferno pistol ◦ 1 Ministorum hand flamer ◦ 1 plasma pistol",
        "Any number of models can each have their hallowed mace replaced with 1 anointed halberd."
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
        "core": [],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sworn Protectors",
            "description": "While a Canoness, Palatine or Junith Eruita model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Celestian Sacresants",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Ministorum hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Anointed halberd",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
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
              "name": "Hallowed mace",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Spear of the faithful",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Celestian Sacresants"],
      "factions": ["Adepta Sororitas"],
      "leadBy": [
        "Aestred Thurga And Agathae Dolan",
        "Canoness",
        "Dialogus",
        "Dogmata",
        "Hospitaller",
        "Imagifier",
        "Junith Eruita",
        "Palatine"
      ]
    },
    {
      "id": "b0992500-b13e-516c-b85d-29f349f0a55f",
      "name": "Crusaders",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2-6 Crusaders"],
      "loadout": "Every model is equipped with: power weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "20",
          "active": true
        },
        {
          "models": "4",
          "cost": "40",
          "active": true
        },
        {
          "models": "6",
          "cost": "60",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Spiritual Fortitude",
            "description": "While a Missionary or Preacher model is leading this unit, models in this unit have the Feel No Pain 4+ ability against mortal wounds.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Crusaders",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Crusaders"],
      "factions": ["Adepta Sororitas"],
      "leadBy": ["Missionary", "Preacher"]
    },
    {
      "id": "e55011ad-5c67-5c92-9a96-29bb38ee534b",
      "name": "Daemonifuge",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Ephrael Stern – Epic Hero",
        "1 Kyganil of the Bloody Tears – Epic Hero"
      ],
      "loadout": "Ephrael Stern is equipped with: bolt pistol; Sanctity. Kyganil of the Bloody Tears is equipped with: the Outcast’s Weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Fights First", "Lone Operative"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Holy Judgement",
            "description": "At the start of your Shooting phase, select one enemy unit within 12\" of and visible to Ephrael Stern. That unit must take a Leadership test, subtracting 2 from the result if it is a Chaos unit. If the test is failed, that enemy unit suffers 3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mysterious Saviours",
            "description": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
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
          "sv": "3+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "EPHRAEL STERN",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "8\"",
          "t": "3",
          "sv": "6+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "KYGANIL OF THE BLOODY TEARS",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Sanctity",
              "keywords": ["anti-chaos 2+", "precision"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
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
              "name": "The Outcast’s Weapons",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Character",
        "Epic Hero",
        "Imperium",
        "Daemonifuge"
      ],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "c24a8e3b-328d-530c-a874-532601f33280",
      "name": "Death Cult Assassins",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2-6 Death Cult Assassins"],
      "loadout": "Every model is equipped with: Death Cult power blades.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "35",
          "active": true
        },
        {
          "models": "4",
          "cost": "70",
          "active": true
        },
        {
          "models": "6",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Fights First"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Death Cult",
            "description": "Each time a model in this unit makes an attack that targets a Character unit, re-roll a Wound roll of 1.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Death Cult Assassins",
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
              "name": "Death Cult power blades",
              "keywords": ["precision"],
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
      "keywords": ["Infantry", "Imperium", "Death Cult Assassins"],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "0377a6b8-dee1-5703-8748-e4c313a306a2",
      "name": "Dialogus",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Battle Sisters Squad ■ Celestian Sacresants ■ Dominion Squad ■ Retributor Squad ■ Sisters Novitiate Squad This model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine or Junith Eruita model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Dialogus"],
      "loadout": "This model is equipped with: bolt pistol; Dialogus staff.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "35",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Laud Hailer",
            "description": "While this model is leading a unit, that unit can be selected as the target of Stratagems even when it is Battle-shocked.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Stirring Rhetoric",
            "description": "While this model is leading a unit, each time this model’s unit performs an Act of Faith, the result of one of the Miracle dice used in that Act of Faith is first changed to a 6.",
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
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Dialogus",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Dialogus staff",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Imperium", "Dialogus"],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": [
          "Battle Sisters Squad",
          "Celestian Sacresants",
          "Dominion Squad",
          "Retributor Squad",
          "Sisters Novitiate Squad"
        ],
        "extra": "This model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine or Junith Eruita model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "661ffcf0-c14a-5680-a889-4e8587065e6f",
      "name": "Dogmata",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Battle Sisters Squad ■ Celestian Sacresants ■ Dominion Squad ■ Retributor Squad This model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine or Junith Eruita model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Dogmata"],
      "loadout": "This model is equipped with: bolt pistol; mace of the righteous.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "50",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Executioner of Heretics (Aura)",
            "description": "While an enemy unit is within 6\" of this model, each time a Battle-shock or Leadership test is taken for that unit, subtract 1 from the test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Unflinching Determination",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit.",
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
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Dogmata",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Mace of the righteous",
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
      "keywords": ["Infantry", "Grenades", "Character", "Imperium", "Dogmata"],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": [
          "Battle Sisters Squad",
          "Celestian Sacresants",
          "Dominion Squad",
          "Retributor Squad"
        ],
        "extra": "This model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine or Junith Eruita model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "ca91f29f-892d-59b8-bb46-55e50ee598d1",
      "name": "Dominion Squad",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Dominion Superior", "9 Dominions"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "The Dominion Superior’s boltgun can be replaced with one of the following: ◦  1 bolt pistol ◦ 1 combi-weapon* ◦ 1 condemnor boltgun* ◦ 1 inferno pistol* ◦ 1 Ministorum hand flamer* ◦ 1 plasma pistol*",
        "The Dominion Superior can be equipped with one of the following: ◦ 1 chainsword ◦ 1 power weapon",
        "Up to 4 Dominions can each have their boltgun replaced with one of the following: ◦ 1 artificer-crafted storm bolter ◦ 1 meltagun ◦ 1 Ministorum flamer",
        "1 Dominion equipped with 1 boltgun can be equipped with 1 simulacrum imperialis (that model’s boltgun cannot be replaced). *  This weapon’s profile can be found on the Adepta Sororitas Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Simulacrum Imperialis",
            "description": "Each time a unit is destroyed by the bearer’s unit, you gain 1 Miracle dice.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 6\""],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cherub",
            "description": "Once per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice. Designer’s Note: Place a Cherub token next to the unit, removing it once this ability has been used.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Holy Vanguard",
            "description": "You can re-roll Advance rolls made for this unit.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Dominion Squad",
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
              "name": "Artificer-crafted storm bolter",
              "keywords": ["rapid fire 2", "assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Boltgun",
              "keywords": ["assault", "rapid fire 1"],
              "range": "24\"",
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
              "name": "Meltagun",
              "keywords": ["assault", "melta 2"],
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
              "name": "Ministorum flamer",
              "keywords": ["assault", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Dominion Squad"],
      "factions": ["Adepta Sororitas"],
      "leadBy": [
        "Aestred Thurga And Agathae Dolan",
        "Dialogus",
        "Dogmata",
        "Hospitaller",
        "Imagifier",
        "Palatine"
      ]
    },
    {
      "id": "95e41219-dd2d-503f-8bce-dbc1c6a38b91",
      "name": "Exorcist",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Exorcist"],
      "loadout": "This model is equipped with: Exorcist missile launcher; heavy bolter; armoured tracks.",
      "wargear": [
        "This model’s Exorcist missile launcher can be replaced with 1 Exorcist conflagration rockets.",
        "This model can be equipped with 1 hunter-killer missile."
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
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mobile Shrine (Aura)",
            "description": "While a friendly Adepta Sororitas Infantry unit is within 6\" of this model, improve the Leadership characteristic of models in that unit by 1.",
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
          "m": "10\"",
          "t": "10",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Exorcist",
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
              "name": "Exorcist conflagration rockets",
              "keywords": ["blast", "heavy", "ignores cover", "indirect fire"],
              "range": "36\"",
              "attacks": "3D6",
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
              "name": "Exorcist missile launcher",
              "keywords": ["heavy", "indirect fire"],
              "range": "36\"",
              "attacks": "D6+2",
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
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
              "name": "Armoured tracks",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Exorcist"],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "fdc8a2a1-d053-5dfd-a2a6-4b9ee3d84cdc",
      "name": "Hospitaller",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Battle Sisters Squad ■ Celestian Sacresants ■ Dominion Squad ■ Retributor Squad ■ Sisters Novitiate Squad This model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine or Junith Eruita model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Hospitaller"],
      "loadout": "This model is equipped with: bolt pistol; chirurgeon’s tools.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "40",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Medicus Ministorum",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Sacred Healing",
            "description": "At the end of your Movement phase, select one friendly Adepta Sororitas Infantry Character unit within 3\" of this model. That unit regains up to 3 lost wounds. A unit can only be affected by this ability once per turn.",
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Hospitaller",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Chirurgeon’s tools",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Imperium", "Hospitaller"],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": [
          "Battle Sisters Squad",
          "Celestian Sacresants",
          "Dominion Squad",
          "Retributor Squad",
          "Sisters Novitiate Squad"
        ],
        "extra": "This model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine or Junith Eruita model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "6d7a9fea-15a3-566c-8893-f1996af06914",
      "name": "Imagifier",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Battle Sisters Squad ■ Celestian Sacresants ■ Dominion Squad ■ Retributor Squad This model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine or Junith Eruita model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Imagifier"],
      "loadout": "This model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "40",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Litany of Deeds",
            "description": "Each time you gain a Miracle dice as the result of a friendly Adepta Sororitas unit being destroyed, if that unit was destroyed within 12\" of this model, you can re-roll the result of that Miracle dice before adding it to your Miracle dice pool.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Stanchion of Holy Martyrs",
            "description": "While this model is leading a unit, models in that unit have a 4+ invulnerable save. While this model is leading a Celestian Sacresants unit, models in that unit have a Save characteristic of 2+.",
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
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Imagifier",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Boltgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Character",
        "Imperium",
        "Imagifier"
      ],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": [
          "Battle Sisters Squad",
          "Celestian Sacresants",
          "Dominion Squad",
          "Retributor Squad"
        ],
        "extra": "This model can be attached to a Battle Sisters Squad, even if one Canoness, Palatine or Junith Eruita model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "679ec816-197c-50e7-844f-afd0d62a76ca",
      "name": "Immolator",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Immolator"],
      "loadout": "This model is equipped with: heavy bolter; immolation flamers; armoured tracks.",
      "wargear": [
        "This model’s immolation flamers can be replaced with one of the following: ◦ 1 twin heavy bolter ◦ 1 twin multi-melta",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "This model has a transport capacity of 6 Adepta Sororitas Infantry models. It cannot transport Jump Pack models or the Triumph of Saint Katherine. At the start of the Declare Battle Formations step, you can select one Battle Sisters Squad, Dominion Squad or Sisters Novitiate Squad from your army. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this Transport; the other can start the battle embarked within another Transport, or it can be deployed as a separate unit.",
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
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll.",
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
          "t": "10",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "2",
          "name": "Immolator",
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Immolation flamers",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
              "attacks": "2D6",
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
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Twin multi-melta",
              "keywords": ["melta 2", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
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
              "name": "Armoured tracks",
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
        "Smoke",
        "Transport",
        "Dedicated Transport",
        "Imperium",
        "Immolator"
      ],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "2c64d8eb-881c-55dc-a873-3f2f70fbd8d0",
      "name": "Junith Eruita",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Battle Sisters Squad ■ Celestian Sacresants",
      "composition": ["1 Junith Eruita – Epic Hero"],
      "loadout": "This model is equipped with: twin Ministorum heavy flamer; Mace of Castigation.",
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
        "core": ["Deadly Demise 1", "Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Pulpit of Saint Holline’s Basilica",
            "description": "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fiery Conviction",
            "description": "If this model is on the battlefield at the start of your Command phase, you gain 1CP.",
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
          "t": "4",
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Junith Eruita",
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
              "name": "Twin Ministorum heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Mace of Castigation",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Fly",
        "Epic Hero",
        "Imperium",
        "Junith Eruita"
      ],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": ["Battle Sisters Squad", "Celestian Sacresants"],
        "extra": ""
      }
    },
    {
      "id": "25965d2f-8ed6-5605-a5ee-73c8f9f92415",
      "name": "Missionary",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Arco-flagellants ■ Battle Sisters Squad ■ Crusaders ■ Sisters Novitiate Squad",
      "composition": ["1 Missionary"],
      "loadout": "This model is equipped with: holy pistol; power weapon.",
      "wargear": [
        "This model’s power weapon can be replaced with one of the following: ◦ 1 autogun and 1 chainsword ◦ 1 Ministorum shotgun and 1 chainsword"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "35",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "War Hymn",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Holy Piety",
            "description": "Each time this model makes a melee attack, unless this model’s unit is Battle-shocked, you can re-roll the Hit roll.",
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
          "sv": "6+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Missionary",
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
              "name": "Autogun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Holy pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Ministorum shotgun",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
        "Imperium",
        "Missionary"
      ],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": [
          "Arco-flagellants",
          "Battle Sisters Squad",
          "Crusaders",
          "Sisters Novitiate Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "00f20888-3070-5238-b767-f35bc0fc216f",
      "name": "Mortifiers",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Mortifiers"],
      "loadout": "Every model is equipped with: 2 heavy bolters; twin penitent buzz-blades.",
      "wargear": [
        "1 model can be equipped with 1 anchorite sarcophagus.",
        "Any number of models can each have their 2 heavy bolters replaced with one of the following: ◦  1 heavy bolter and 1 Mortifier flamer ◦ 2 Mortifier flamers",
        "Any number of models can each have their twin penitent buzz-blades replaced with one of the following: ◦ 1 twin penitent flails ◦ 1 penitent buzz-blade and 1 penitent flail"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "60",
          "active": true
        },
        {
          "models": "2",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Anchorite Sarcophagus",
            "description": "The bearer has a Save characteristic of 3+.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise 1", "Feel No Pain 5+"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Anguish of the Unredeemed",
            "description": "Each time this unit makes a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability.",
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
          "t": "6",
          "sv": "4+",
          "w": "5",
          "ld": "7+",
          "oc": "2",
          "name": "Mortifiers",
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Mortifier flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Penitent buzz-blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Penitent flail",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
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
              "name": "Twin penitent buzz-blades",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Twin penitent flails",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Imperium", "Mortifiers"],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "8c6557e1-2555-58f9-bd81-513f36465c69",
      "name": "Morvenn Vahl",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Paragon Warsuits",
      "composition": ["1 Morvenn Vahl – Epic Hero"],
      "loadout": "This model is equipped with: Fidelis; Paragon missile launcher; Lance of Illumination.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "135",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Abbess Sanctorum",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll and you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Righteous Repugnance",
            "description": "Once per battle, in your Command phase, this model can use this ability. If it does, until the start of your next Command phase, add 3 to the Attacks characteristic of Fidelis and the Lance of Illumination.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SUPREME COMMANDER",
            "description": "If this model is in your army, it must be your Warlord.",
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
          "t": "6",
          "sv": "2+",
          "w": "8",
          "ld": "6+",
          "oc": "2",
          "name": "Morvenn Vahl",
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
              "name": "Fidelis",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "2+",
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
              "name": "Paragon missile launcher – prioris",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Paragon missile launcher – sanctorum",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "2+",
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
              "name": "Lance of Illumination – strike",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Lance of Illumination – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Epic Hero",
        "Imperium",
        "Morvenn Vahl"
      ],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": ["Paragon Warsuits"],
        "extra": ""
      }
    },
    {
      "id": "d283a405-4cbf-5ef3-8f5c-b863a879ba96",
      "name": "Palatine",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Battle Sisters Squad ■ Celestian Sacresants ■ Dominion Squad ■ Sisters Novitiate Squad",
      "composition": ["1 Palatine"],
      "loadout": "This model is equipped with: bolt pistol; Palatine blade.",
      "wargear": [
        "This model’s bolt pistol can be replaced with 1 plasma pistol."
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
        "core": ["Leader", "Scouts 6\""],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fury of the Righteous",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Rapturous Blows",
            "description": "Each time this model’s unit is selected to fight, you can discard one Miracle dice. If you do, then until the end of the phase, each time a melee attack made by this model scores a wound, the target of that attack suffers 1 mortal wound in addition to any normal damage.",
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Palatine",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Palatine blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Grenades", "Imperium", "Palatine"],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": [
          "Battle Sisters Squad",
          "Celestian Sacresants",
          "Dominion Squad",
          "Sisters Novitiate Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "da1adfbf-6de1-5432-bfa9-b9d3d95c4770",
      "name": "Paragon Warsuits",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Paragon Superior", "2 Paragons"],
      "loadout": "Every model is equipped with: bolt pistol; heavy bolter; Paragon storm bolters; Paragon war blade.",
      "wargear": [
        "Any number of models can each have their Paragon storm bolters replaced with 1 Paragon grenade launchers.",
        "Any number of models can each have their heavy bolter replaced with one of the following: ◦ 1 Ministorum heavy flamer ◦ 1 multi-melta",
        "Any number of models can each have their Paragon war blade replaced with 1 Paragon war mace."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "240",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Righteous Paragons",
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
          "m": "8\"",
          "t": "6",
          "sv": "2+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Paragon Warsuits",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Ministorum heavy flamer",
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
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Paragon grenade launchers",
              "keywords": ["twin-linked"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Paragon storm bolters",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Paragon war blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Paragon war mace",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "12",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Grenades",
        "Imperium",
        "Paragon Warsuits"
      ],
      "factions": ["Adepta Sororitas"],
      "leadBy": ["Morvenn Vahl"]
    },
    {
      "id": "af6e6459-79bd-50a0-8e7d-5bd94c3b9701",
      "name": "Penitent Engines",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Penitent Engines"],
      "loadout": "Every model is equipped with: penitent flamers; twin penitent buzz-blades.",
      "wargear": [
        "Any number of models can each have their twin penitent buzz-blades replaced with one of the following: ◦ 1 penitent buzz-blade and 1 penitent flail ◦ 1 twin penitent flails"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "60",
          "active": true
        },
        {
          "models": "2",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Feel No Pain 5+"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Endless Suffering",
            "description": "This unit is eligible to declare a charge in a turn in which it Advanced.",
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
          "t": "6",
          "sv": "4+",
          "w": "5",
          "ld": "7+",
          "oc": "2",
          "name": "Penitent Engines",
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
              "name": "Penitent flamers",
              "keywords": [
                "assault",
                "ignores cover",
                "torrent",
                "twin-linked"
              ],
              "range": "12\"",
              "attacks": "2D6",
              "skill": "N/A",
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
              "name": "Penitent buzz-blade",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
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
              "name": "Penitent flail",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "8",
              "skill": "4+",
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
              "name": "Twin penitent buzz-blades",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
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
              "name": "Twin penitent flails",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "Melee",
              "attacks": "8",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Imperium", "Penitent Engines"],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "39ca8fac-8846-5960-9af6-7a9020e8c194",
      "name": "Preacher",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Arco-flagellants ■ Crusaders ■ Sisters Novitiate Squad",
      "composition": ["1 Preacher"],
      "loadout": "This model is equipped with: zealot’s vindictor.",
      "wargear": [
        "This model’s zealot’s vindictor can be replaced with 1 autopistol and 1 chainsword."
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
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Righteous Smiting",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Zealot",
            "description": "Once per battle, in the Fight phase, this model can use this ability. If it does, until the end of the phase, improve the Strength and Attacks characteristics of melee weapons equipped by this model by 2.",
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
          "sv": "6+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Preacher",
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
              "name": "Autopistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Zealot’s vindictor",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
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
              "name": "Zealot’s vindictor",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Imperium", "Preacher"],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": ["Arco-flagellants", "Crusaders", "Sisters Novitiate Squad"],
        "extra": ""
      }
    },
    {
      "id": "5293ce3b-95be-5140-9274-e92d7697236a",
      "name": "Repentia Squad",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Repentia Superior", "4-9 Sisters Repentia"],
      "loadout": "The Repentia Superior is equipped with: bolt pistol; neural whips. Each Sister Repentia is equipped with: penitent eviscerator.",
      "wargear": ["None"],
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
        "core": ["Feel No Pain 5+"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Overseer of Redemption",
            "description": "While this unit contains a Repentia Superior, each time a model in this unit makes a melee attack, you can re-roll the Hit roll and, if this unit made a Charge move this turn, you can also re-roll the Wound roll.",
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
          "ld": "7+",
          "oc": "1",
          "name": "REPENTIA SUPERIOR",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "SISTERS REPENTIA",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Neural whips",
              "keywords": ["anti-infantry 4+"],
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
              "name": "Penitent eviscerator",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Repentia Squad"],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "73e3c366-0b9b-5070-a902-7194c4508f0a",
      "name": "Repressor",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Repressor"],
      "loadout": "This model is equipped with: Repressor twin heavy flamer; storm bolter; dozer ram.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy flamer ◦ 1 storm bolter"
      ],
      "transport": "This model has a transport capacity of 12 Adepta Sororitas Infantry models. It cannot transport Jump Pack models or the Triumph of Saint Katherine.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Emergency Combat Embarkation",
            "description": "Once per turn, in your opponent’s Charge phase, after an enemy unit has selected targets for its charge but before it makes a Charge move, you can select one Adepta Sororitas unit from your army that was selected as a target of that charge. Provided that unit is not within Engagement Range of any enemy units and every model in that unit is within 3\" of this Transport, it can embark within this Transport.",
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
          "m": "12\"",
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "2",
          "name": "Repressor",
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
              "name": "Heavy flamer",
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
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Repressor twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
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
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Dozer ram",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Smoke",
        "Transport",
        "Dedicated Transport",
        "Imperium",
        "Repressor"
      ],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "d6156281-f4e5-5b72-8372-13af3eb8572d",
      "name": "Retributor Squad",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Retributor Superior", "4 Retributors"],
      "loadout": "The Retributor Superior is equipped with: bolt pistol; boltgun; close combat weapon. Each Retributor is equipped with: bolt pistol; heavy bolter; close combat weapon.",
      "wargear": [
        "The Retributor Superior’s boltgun can be replaced with one of the following: ◦  1 bolt pistol ◦ 1 combi-weapon* ◦ 1 condemnor boltgun* ◦ 1 inferno pistol* ◦ 1 Ministorum hand flamer* ◦ 1 plasma pistol*",
        "The Retributor Superior can be equipped with one of the following: ◦ 1 chainsword ◦ 1 power weapon",
        "Each Retributor’s heavy bolter can be replaced with one of the following: ◦ 1 Ministorum heavy flamer ◦ 1 multi-melta *  This weapon’s profile can be found on the Adepta Sororitas Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cherubs",
            "description": "Twice per battle, after this unit has performed an Act of Faith, you gain 1 Miracle dice. Designer’s Note: Place two Cherub tokens next to the unit, removing one each time this ability has been used.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Storm of Retribution",
            "description": "Each time a model in this unit makes a ranged attack, re-roll a Wound roll of 1.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Retributor Squad",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Boltgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
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
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Ministorum heavy flamer",
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
              "name": "Multi-melta",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
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
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Retributor Squad"],
      "factions": ["Adepta Sororitas"],
      "leadBy": [
        "Aestred Thurga And Agathae Dolan",
        "Dialogus",
        "Dogmata",
        "Hospitaller",
        "Imagifier"
      ]
    },
    {
      "id": "ccbd4e23-2170-55ca-ad75-6f9af5f167a7",
      "name": "Saint Celestine",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following units: ■ Seraphim Squad ■ Zephyrim Squad",
      "composition": ["1 Celestine – Epic Hero", "2 Geminae Superia"],
      "loadout": "Saint Celestine is equipped with: the Ardent Blade. Each Geminae Superia is equipped with: bolt pistol; power weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Healing Tears",
            "description": "While this unit contains a Celestine model, in your Command phase, if this unit is below its Starting Strength, 1 destroyed model is returned to this unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Lifewards",
            "description": "While this unit contains one or more Geminae Superia models, Celestine has the Feel No Pain 4+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Miraculous Intervention",
            "description": "The first time this unit’s Celestine model is destroyed, roll one D6 at the end of the phase. On a 2+, set that Celestine model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining.",
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
          "name": "CELESTINE",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "12\"",
          "t": "3",
          "sv": "2+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "GEMINAE SUPERIA",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "The Ardent Blade",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Power weapon",
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
              "name": "The Ardent Blade",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Jump Pack", "Fly", "Grenades", "Imperium"],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": ["Seraphim Squad", "Zephyrim Squad"],
        "extra": ""
      }
    },
    {
      "id": "28054192-ed9e-5f9c-a5ee-10e5cbcd365d",
      "name": "Seraphim Squad",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Seraphim Superior", "4-9 Seraphim"],
      "loadout": "Every model is equipped with: 2 bolt pistols; close combat weapon.",
      "wargear": [
        "The Seraphim Superior’s 2 bolt pistols can be replaced with one of the following: ◦ 1 bolt pistol and 1 chainsword ◦ 1 bolt pistol and 1 plasma pistol ◦ 1 bolt pistol and 1 power weapon ◦ 1 plasma pistol and 1 chainsword ◦  1 plasma pistol and 1 power weapon",
        "For every 5 models in the unit, up to 2 Seraphim can each have their 2 bolt pistols replaced with one of the following: ◦ 2 inferno pistols ◦ 2 Ministorum hand flamers"
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
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Angelic Ascent",
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
          "m": "12\"",
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Seraphim Squad",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Ministorum hand flamer",
              "keywords": ["pistol", "torrent", "ignores cover"],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Chainsword",
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
              "name": "Power weapon",
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
        "Jump Pack",
        "Fly",
        "Grenades",
        "Imperium",
        "Seraphim Squad"
      ],
      "factions": ["Adepta Sororitas"],
      "leadBy": ["Saint Celestine"]
    },
    {
      "id": "06efe54d-9b91-59ee-a6c0-22cfa29ca99f",
      "name": "Sisters Novitiate Squad",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Novitiate Superior", "9 Sisters Novitiate"],
      "loadout": "The Novitiate Superior is equipped with: bolt pistol; boltgun; close combat weapon. Each Sister Novitiate is equipped with: autopistol; autogun; close combat weapon.",
      "wargear": [
        "The Novitiate Superior’s bolt pistol and boltgun can be replaced with one of the following: ◦ 1 bolt pistol and 1 power weapon ◦ 1 plasma pistol and 1 power weapon",
        "1 Sister Novitiate’s autogun can be replaced with 1 sacred banner.",
        "1 Sister Novitiate’s autogun can be replaced with 1 simulacrum imperialis.",
        "Up to 2 Sisters Novitiate can each have their autogun replaced with 1 Ministorum flamer.",
        "Any number of Sisters Novitiate can each have their autogun and close combat weapon replaced with 1 Novitiate melee weapons."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Sacred Banner",
            "description": "You can re-roll Advance and Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Simulacrum Imperialis",
            "description": "Each time a unit is destroyed by the bearer’s unit, you gain 1 Miracle dice.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Impetuous Fervour",
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
          "m": "6\"",
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "NOVITIATE SUPERIOR",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "8+",
          "oc": "2",
          "name": "SISTER NOVITIATE",
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
              "name": "Autopistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Autogun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Boltgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
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
              "name": "Ministorum flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "skill": "4+",
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
              "name": "Novitiate melee weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
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
        "Imperium",
        "Sisters Novitiate Squad"
      ],
      "factions": ["Adepta Sororitas"],
      "leadBy": [
        "Dialogus",
        "Hospitaller",
        "Missionary",
        "Palatine",
        "Preacher"
      ]
    },
    {
      "id": "e6cd8570-ae18-5c8d-8b15-2e26a7393014",
      "name": "Sororitas Rhino",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sororitas Rhino"],
      "loadout": "This model is equipped with: storm bolter; armoured tracks.",
      "wargear": ["This model can be equipped with 1 hunter-killer missile."],
      "transport": "This model has a transport capacity of 12 Adepta Sororitas Infantry models. It cannot transport Jump Pack models or the Triumph of Saint Katherine.",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 2"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Self Repair",
            "description": "At the start of your Command phase, this model regains 1 lost wound.",
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
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "2",
          "name": "Sororitas Rhino",
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
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Armoured tracks",
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
        "Smoke",
        "Imperium",
        "Sororitas Rhino"
      ],
      "factions": ["Adepta Sororitas"]
    },
    {
      "id": "f97d4991-a1f9-5474-9e27-ccfd37841c3c",
      "name": "Triumph Of Saint Katherine",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Battle Sisters Squad",
      "composition": ["1 Triumph of Saint Katherine – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistols; relic weapons.",
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
        "core": ["Leader"],
        "faction": ["Acts of Faith"],
        "primarch": [
          {
            "name": "RELICS OF THE MATRIARCHS",
            "showAbility": true,
            "abilities": [
              {
                "name": "The Fiery Heart (Aura)",
                "description": "While a friendly Adepta Sororitas unit is within 6\" of this model, if that unit is destroyed, the Miracle dice you gain as a result is automatically a 6.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Censer of the Sacred Rose (Aura)",
                "description": "While a friendly Adepta Sororitas unit is within 6\" of this model, improve that unit’s Leadership characteristic by 1.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Simulacrum of the Ebon Chalice (Aura)",
                "description": "While a friendly Adepta Sororitas unit is within 6\" of this model, that unit can perform any number of Acts of Faith per phase, instead of only one.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Simulacrum of the Argent Shroud (Aura)",
                "description": "While a friendly Adepta Sororitas unit is within 6\" of this model, add 1 to the Attacks characteristic of Rapid Fire weapons equipped by models in that unit.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Icon of the Valorous Heart (Aura)",
                "description": "While a friendly Adepta Sororitas unit is within 6\" of this model, that unit has the Feel No Pain 6+ ability.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Petals of the Bloody Rose (Aura)",
                "description": "While a friendly Adepta Sororitas unit is within 6\" of this model, melee weapons equipped by models in that unit have the [LETHAL HITS] ability.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Relics of the Matriarchs",
            "description": "At the start of the battle round, select up to two of the abilities in the Relics of the Matriarchs section (see left). Until the start of the next battle round, this model has those abilities.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, the Attacks characteristics of all of its weapons are halved, and you can only select one ability when using its Relics of the Matriarchs ability, instead of up to two."
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "3+",
          "w": "18",
          "ld": "6+",
          "oc": "6",
          "name": "Triumph Of Saint Katherine",
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
              "name": "Bolt pistols",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Relic weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "18",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Character",
        "Epic Hero",
        "Imperium",
        "Triumph of Saint Katherine"
      ],
      "factions": ["Adepta Sororitas"],
      "leads": {
        "units": ["Battle Sisters Squad"],
        "extra": ""
      }
    },
    {
      "id": "d7f0b494-8805-52ab-99c7-6660b49c0763",
      "name": "Zephyrim Squad",
      "source": "40k-10e",
      "faction_id": "AS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Zephyrim Superior", "4-9 Zephyrim"],
      "loadout": "Every model is equipped with: bolt pistol; power weapon.",
      "wargear": [
        "The Zephyrim Superior can be equipped with 1 sacred banner.",
        "The Zephyrim Superior’s bolt pistol can be replaced with 1 plasma pistol."
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
            "name": "Sacred Banner",
            "description": "You can re-roll Advance and Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Acts of Faith"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Embodied Prophecy",
            "description": "Each time a model in this unit makes a melee attack, if this unit made a Charge move this turn, add 1 to the Strength characteristic of that attack.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Zephyrim Squad",
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
              "name": "Bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Power weapon",
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
        "Jump Pack",
        "Fly",
        "Grenades",
        "Imperium",
        "Zephyrim Squad"
      ],
      "factions": ["Adepta Sororitas"],
      "leadBy": ["Saint Celestine"]
    }
  ],
  "colours": {
    "banner": "#561113",
    "header": "#570c0c"
  }
}
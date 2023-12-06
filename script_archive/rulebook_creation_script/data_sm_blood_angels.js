window.data = window.data || {};
window.data.CHBA = {
  "id": "CHBA",
  "link": "https://game-datacards.eu",
  "name": "Blood Angels",
  "is_subfaction": true,
  "parent_id": "SM",
  "parent_keyword": "Adeptus Astartes",
  "allied_factions": ["AoI", "QI"],
  "stratagems": [
    {
      "name": "ANGEL'S SACRIFICE",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Sons of Sanguinius",
      "turn": "either",
      "phase": ["any"],
      "fluff": "The Blood Angels would gladly put\nthemselves in harm’s way to protect\nothers, exemplifying the sacrifice\nof Sanguinius.",
      "when": "Any phase.",
      "target": "One Adeptus Astartes\nCharacter unit from your army that\nwas just destroyed. You can use this\nStratagem on that unit even though it was\njust destroyed.",
      "effect": "Until the end of the battle, each\ntime a friendly Adeptus Astartes unit\nmakes an attack that targets the enemy\nunit that just destroyed your Character\nunit, you can re-roll the Hit roll.",
      "restrictions": "",
      "id": "769bac35-a91d-5709-8702-7fca871ae6eb"
    },
    {
      "name": "ARMOUR OF CONTEMPT",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Sons of Sanguinius",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "The belligerency of the Adeptus Astartes\ncombined with their transhuman\nphysiology makes them unyielding foes\nto face.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Adeptus Astartes unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack targets your unit, worsen\nthe Armour Penetration characteristic of\nthat attack by 1.",
      "restrictions": "",
      "id": "fb6abd3d-eef4-5e85-823a-4f49dd7e9140"
    },
    {
      "name": "AGGRESSIVE ONSLAUGHT",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Sons of Sanguinius",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "The Sons of Sanguinius constantly\npush towards new foes, the bloodlust\nsinging in their veins unleashed in a\ncontrolled dynamism.",
      "when": "Fight phase.",
      "target": "One Adeptus Astartes\nunit from your army, just before that\nunit Consolidates.",
      "effect": "Until the end of the phase,\neach time a model in your unit makes a\nConsolidation move, it can move up to\n6\" instead of up to 3\", provided your unit\nends that Consolidation move in Unit\nCoherency and within Engagement Range\nof one or more enemy units.",
      "restrictions": "",
      "id": "7496a56b-a4c1-556a-8e52-00969a9023f4"
    },
    {
      "name": "RED RAMPAGE",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Sons of Sanguinius",
      "turn": "either",
      "phase": ["any"],
      "fluff": "In times of great desperation, fury and\nferocity can be a warrior’s strongest allies.",
      "when": "Fight phase.",
      "target": "One Adeptus Astartes unit from\nyour army that has not been selected to\nfight this phase.",
      "effect": "Until the end of the phase,\nmelee weapons equipped by models\nin your unit have the [LANCE] and\n[LETHAL HITS] abilities.",
      "restrictions": "",
      "id": "3b81a60c-bf20-5ad3-b14c-b27222999c15"
    },
    {
      "name": "ONLY IN DEATH DOES DUTY END",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Sons of Sanguinius",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "Imminent death does not prevent a Space\nMarine from enacting his final justice\nupon the enemies of the Imperium.",
      "when": "Fight phase, just after an enemy\nunit has selected its targets.",
      "target": "One Adeptus Astartes unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime a model in your unit is destroyed, if\nthat model has not fought this phase, do\nnot remove it from play. The destroyed\nmodel can fight after the attacking\nmodel’s unit has finished making its\nattacks, and is then removed from play.",
      "restrictions": "",
      "id": "27ec1914-0206-5e29-ae17-07aa7c7f3e5a"
    },
    {
      "name": "RELENTLESS ASSAULT",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Sons of Sanguinius",
      "turn": "your",
      "phase": ["movement"],
      "fluff": "The Blood Angels are loathe to resort to\nthe defensive strategies favoured by\nother Chapters, and a tactical withdrawal\nis but a prelude to re-entering the fray.",
      "when": "Your Movement phase, just after\nan Adeptus Astartes unit from your army\nFalls Back.",
      "target": "That Adeptus Astartes unit.",
      "effect": "Until the end of the turn, your unit\nis eligible to declare a charge even though\nit Fell Back this phase.",
      "restrictions": "",
      "id": "1cadb73a-bbd0-5a5d-9d76-c36644ac74a5"
    }
  ],
  "enhancements": [
    {
      "name": "Archangel’s Shard",
      "description": "Adeptus Astartes model only. The bearer’s melee weapons have the [ANTI-CHAOS 5+] and [LANCE] abilities.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "Artisan of War",
      "description": "Adeptus Astartes model only. Improve the Armour Penetration characteristic of the bearer’s weapons by 1, and the bearer has a Save characteristic of 2+.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "Icon of the Angel",
      "description": "Adeptus Astartes model only. Each time an enemy unit (excluding Monsters and Vehicles) within Engagement Range of the bearer’s unit is selected to Fall Back, models in that enemy unit must take Desperate Escape tests as if their unit was Battle-shocked. When doing so, if that enemy unit is also Battle-shocked by other means, subtract 1 from each of those Desperate Escape tests.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "10"
    },
    {
      "name": "Visage of Death",
      "description": "Adeptus Astartes model only. While an enemy unit (excluding Monsters and Vehicles) is within Engagement Range of the bearer’s unit, halve the Objective Control characteristic of models in that unit.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "15"
    }
  ],
  "datasheets": [
    {
      "id": "4c4b1340-4603-51d7-91a8-3b715d94241a",
      "name": "Astorath",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Death Company Marines with Jump Packs",
      "composition": ["1 Astorath – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; the Executioner’s Axe.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Redeemer of the Lost",
            "description": "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mass of Doom",
            "description": "Once per battle, when this model’s unit makes a Charge move, this model can use this ability. When it does, until the end of the turn, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
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
          "sv": "2+",
          "w": "5",
          "ld": "5+",
          "oc": "1",
          "name": "Astorath",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "The Executioner’s Axe",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
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
        "Fly",
        "Jump Pack",
        "Grenades",
        "Imperium",
        "Chaplain",
        "Astorath"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": ["Death Company Marines with Jump Packs"],
        "extra": ""
      }
    },
    {
      "id": "9ce6d8b7-7943-518e-be4d-d89fd9f9a057",
      "name": "Baal Predator",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Baal Predator"],
      "loadout": "This model is equipped with: twin assault cannon; armoured tracks.",
      "wargear": [
        "This model’s twin assault cannon can be replaced with 1 Baal flamestorm cannon.",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter.",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers"
      ],
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
        "core": ["Deadly Demise D3"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Overcharged Engines",
            "description": "You can re-roll Advance rolls made for this model. Each time this model Advances, until the end of the turn, ranged weapons equipped by this model have the [ASSAULT] ability but they can only target Infantry units.",
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
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Baal Predator",
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
              "name": "Baal flamestorm cannon",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
              "attacks": "D6+3",
              "skill": "N/A",
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
              "name": "Heavy flamer",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin assault cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "6",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Baal Predator"],
      "factions": ["Adeptus Astartes", "Blood Angels"]
    },
    {
      "id": "938102da-0715-5260-bd09-cb8c5eb44b30",
      "name": "Brother Corbulo",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Devastator Squad ■ Tactical Squad ■ Vanguard Veteran Squad",
      "composition": ["1 Brother Corbulo – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Heaven’s Teeth.",
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
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sanguinary Priest",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Red Grail",
            "description": "While this model is leading a unit, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit.",
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Brother Corbulo",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heaven’s Teeth",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
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
        "Grenades",
        "Imperium",
        "Sanguinary Priest",
        "Brother Corbulo"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": [
          "Assault Squad",
          "Devastator Squad",
          "Tactical Squad",
          "Vanguard Veteran Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "3324eec6-662c-52c9-ba6e-b1cb445e411e",
      "name": "Captain Tycho",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Tactical Squad ■ Vanguard Veteran Squad",
      "composition": ["1 Captain Tycho – Epic Hero"],
      "loadout": "This model is equipped with: Blood Song; bolt pistol; Dead Man’s Hand.",
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
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Gifted Commander",
            "description": "While this model is leading a unit, each time that unit is selected to shoot, select one of the following abilities to apply to ranged weapons equipped by models in that unit until the end of the phase: ■ [ASSAULT] ■ [HEAVY] ■ [RAPID FIRE 1]",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Embittered",
            "description": "The first time an attack is allocated to this model, after the attacking unit has finished making its attacks, until the end of the battle, change the Attacks characteristic of this model’s Dead Man’s Hand to 12.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "TYCHO",
            "description": "Your army cannot contain both Captain Tycho and Tycho the Lost.",
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
          "m": "6\"",
          "t": "4",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Captain Tycho",
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
              "name": "Blood Song",
              "keywords": ["anti-infantry 4+", "devastating wounds", "melta 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dead Man’s Hand",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
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
        "Grenades",
        "Imperium",
        "Captain",
        "Tycho"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": [
          "Assault Squad",
          "Command Squad",
          "Tactical Squad",
          "Vanguard Veteran Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "dc788dd1-8d00-5724-a0df-a5ab92a159c6",
      "name": "Chief Librarian Mephiston",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Chief Librarian Mephiston – Epic Hero"],
      "loadout": "This model is equipped with: plasma pistol; Fury of the Ancients; Vitarus.",
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
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Quickening (Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Psychic Hood",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Transfixing Gaze (Psychic)",
            "description": "At the start of the Fight phase, you can select one enemy unit within Engagement Range of this Psyker’s unit and roll one D6: on a 1, this Psyker model suffers D3 mortal wounds; on a 2-5, until the end of the phase, worsen the Weapon Skill characteristic of melee weapons equipped by models in that enemy unit by 1; on a 6, until the end of the phase, worsen the Weapon Skill and Attacks characteristics of those weapons by 1.",
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
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Chief Librarian Mephiston",
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
              "name": "Fury of the Ancients – witchfire",
              "keywords": ["pistol", "psychic", "sustained hits 1"],
              "range": "12\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Fury of the Ancients – focused witchfire",
              "keywords": [
                "hazardous",
                "pistol",
                "psychic",
                "sustained hits 3"
              ],
              "range": "12\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "5",
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
              "name": "Vitarus",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "9",
              "ap": "-3",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Psyker",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Chief Librarian Mephiston"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": [
          "Assault Intercessor Squad",
          "Intercessor Squad",
          "Sternguard Veteran Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "e5145978-72b9-5509-a15a-d1213bda57a0",
      "name": "Commander Dante",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Squad with Jump Packs ■ Sanguinary Guard ■ Vanguard Veteran Squad with Jump Packs",
      "composition": ["1 Commander Dante – Epic Hero"],
      "loadout": "This model is equipped with: Perdition; the Axe Mortalis.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord Regent of the Imperium Nihilus",
            "description": "While this model is leading a unit, add 1 to Charge rolls made for that unit and each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Death Mask of Sanguinius",
            "description": "At the start of the Fight phase, each enemy unit within 6\" of this model must take a Battle-shock test, subtracting 1 from that test when they do.",
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
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Commander Dante",
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
              "name": "Perdition",
              "keywords": ["melta 2", "pistol", "sustained hits d3"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
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
              "name": "The Axe Mortalis",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "7",
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
        "Fly",
        "Jump Pack",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Chapter Master",
        "Commander Dante"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": [
          "Assault Squad with Jump Packs",
          "Sanguinary Guard",
          "Vanguard Veteran Squad with Jump Packs"
        ],
        "extra": ""
      }
    },
    {
      "id": "3ee2094c-aa41-580b-bc63-43da2b51f238",
      "name": "Death Company Dreadnought",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Company Dreadnought"],
      "loadout": "This model is equipped with: meltagun; storm bolter; twin Furioso fists.",
      "wargear": [
        "This model’s storm bolter can be replaced with 1 heavy flamer.",
        "This model’s meltagun can be replaced with 1 heavy flamer.",
        "This model’s Furioso fists can be replaced with 1 blood talons.",
        "This model can be equipped with 1 magna-grapple."
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
        "wargear": [
          {
            "name": "Magna-grapple",
            "description": "The bearer loses the Smoke keyword, but add 2 to Charge rolls made for the bearer if one or more of the targets of that charge is a Monster or Vehicle unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise 1", "Feel No Pain 6+"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Black Rage",
            "description": "Each time this model makes an attack, you can re-roll the Hit roll. While this model is not within 12\" of one or more friendly Chaplain models, it cannot be selected to Fall Back and its Objective Control characteristic is 0.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Frenzied Reprisal",
            "description": "Each time an enemy unit targets this model, after that unit has finished making its attacks, this model can either shoot as if it were your Shooting phase or fight as if it were the Fight phase.",
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
          "t": "9",
          "sv": "2+",
          "w": "8",
          "ld": "6+",
          "oc": "3",
          "name": "Death Company Dreadnought",
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
              "name": "Heavy flamer",
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
              "name": "Blood talons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "3+",
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
              "name": "Twin Furioso fists",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Smoke",
        "Imperium",
        "Dreadnought",
        "Death Company Dreadnought"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"]
    },
    {
      "id": "24e8b799-ddc4-547b-bb5a-f58d494021d6",
      "name": "Death Company Intercessors",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Death Company Intercessors"],
      "loadout": "Every model is equipped with: bolt pistol; bolt rifle; close combat weapon.",
      "wargear": [
        "All models in this unit can each have their bolt pistol and bolt rifle replaced with 1 heavy bolt pistol and 1 Astartes chainsword.",
        "1 model’s heavy bolt pistol can be replaced with one of the following: ◦ 1 hand flamer ◦ 1 plasma pistol",
        "For every 5 models in this unit, 1 model equipped with a bolt rifle can be equipped with 1 Astartes grenade launcher.",
        "1 model can replace its bolt rifle or Astartes chainsword with one of the following: ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer"
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
        "wargear": [],
        "core": ["Feel No Pain 6+"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Black Rage",
            "description": "Each time a model in this unit makes an attack, you can re-roll the Hit roll. While this unit is not within 12\" of one or more friendly Chaplain models, it cannot be selected to Fall Back and the Objective Control characteristic of models in this unit is 0.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Visions of Heresy",
            "description": "Once per turn, you can target this unit with the Fire Overwatch Stratagem or the Heroic Intervention Stratagem for 0CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "DEATH COMPANY",
            "description": "If a Chaplain model from your army with the Leader ability can be attached to an Intercessor Squad, it can be attached to this unit instead.",
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
          "m": "6\"",
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Death Company Intercessors",
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
              "name": "Astartes grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Astartes grenade launcher – krak",
              "keywords": [],
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
              "name": "Bolt rifle",
              "keywords": [],
              "range": "24\"",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Heavy bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Death Company Intercessors"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"]
    },
    {
      "id": "8b22cef6-4f2b-599c-8504-b457c3f430fc",
      "name": "Death Company Marines",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Death Company Marines"],
      "loadout": "Every model is equipped with: boltgun; close combat weapon.",
      "wargear": [
        "Any number of models can each have their boltgun and close combat weapon replaced with one of the following: ◦ 1 Astartes chainsword and 1 bolt pistol ◦ 1 thunder hammer",
        "Any number of models can each have their bolt pistol replaced with one of the following: ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol",
        "Any number of models can each have their Astartes chainsword replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "130",
          "active": true
        },
        {
          "models": "10",
          "cost": "260",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 6+"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Black Rage",
            "description": "Each time a model in this unit makes an attack, you can re-roll the Hit roll. While this unit is not within 12\" of one or more friendly Chaplain models, it cannot be selected to Fall Back and the Objective Control characteristic of models in this unit is 0.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "An Honourable Death in Combat",
            "description": "Each time a model in this unit makes an attack, that attack has the [SUSTAINED HITS 1] ability if this unit is below its Starting Strength, or the [SUSTAINED HITS 2] ability if this unit is Below Half-strength.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "DEATH COMPANY",
            "description": "If a Chaplain model from your army with the Leader ability can be attached to a Tactical Squad, it can be attached to this unit instead.",
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
          "m": "6\"",
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Death Company Marines",
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
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Death Company Marines"],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leadBy": ["Tycho The Lost"]
    },
    {
      "id": "e1536aff-8310-5ae5-965f-0316afc8023e",
      "name": "Death Company Marines With Jump Packs",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Death Company Marines with Jump Packs"],
      "loadout": "Every model is equipped with: boltgun; close combat weapon.",
      "wargear": [
        "Any number of models can each have their boltgun and close combat weapon replaced with one of the following: ◦ 1 Astartes chainsword and 1 bolt pistol ◦ 1 thunder hammer",
        "Any number of models can each have their bolt pistol replaced with one of the following: ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol",
        "Any number of models can each have their Astartes chainsword replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon"
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
        "core": ["Deep Strike", "Feel No Pain 6+"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Black Rage",
            "description": "Each time a model in this unit makes an attack, you can re-roll the Hit roll. While this unit is not within 12\" of one or more friendly Chaplain models, it cannot be selected to Fall Back and the Objective Control characteristic of models in this unit is 0.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Berserk Fury",
            "description": "You can re-roll Charge rolls made for this unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "DEATH COMPANY",
            "description": "If a Chaplain model from your army with the Leader ability can be attached to an Assault Squad with Jump Packs, it can be attached to this unit instead.",
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
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Death Company Marines With Jump Packs",
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
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Close combat weapon",
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
      "keywords": [
        "Infantry",
        "Fly",
        "Jump Pack",
        "Grenades",
        "Imperium",
        "Death Company Marines with Jump Packs"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leadBy": ["Astorath", "Lemartes"]
    },
    {
      "id": "58f4f83e-cc8d-5ca8-8e9e-c254c3e665d9",
      "name": "Furioso Dreadnought",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Furioso Dreadnought"],
      "loadout": "This model is equipped with: heavy frag cannon; Furioso fist; storm bolter.",
      "wargear": [
        "This model’s heavy frag cannon and Furioso fist can be replaced with one of the following: ◦ 1 Blood Talons and 1 meltagun ◦ 1 twin Furioso fist and 1 meltagun",
        "This model’s storm bolter can be replaced with 1 heavy flamer.",
        "This model’s meltagun can be replaced with 1 heavy flamer.",
        "This model can be equipped with 1 magna-grapple."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "165",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Magna-grapple",
            "description": "The bearer loses the Smoke keyword, but add 2 to Charge rolls made for the bearer if one or more of the targets of that charge is a Monster or Vehicle unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise 1"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Wrathful Rampage",
            "description": "Each time this model is selected to fight, you can select one enemy unit within Engagement Range of it and roll one D6, adding 2 to the result if this model made a Charge move this turn: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds.",
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
          "t": "9",
          "sv": "2+",
          "w": "8",
          "ld": "6+",
          "oc": "3",
          "name": "Furioso Dreadnought",
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
              "name": "Heavy flamer",
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
              "name": "Heavy frag cannon",
              "keywords": ["blast", "rapid fire d6"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Blood talons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "3+",
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
              "name": "Furioso fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin Furioso fists",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Dreadnought",
        "Furioso Dreadnought"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"]
    },
    {
      "id": "f159f71a-cd68-5bb6-9001-ba434f01e748",
      "name": "Gabriel Seth",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Tactical Squad ■ Vanguard Veteran Squad",
      "composition": ["1 Gabriel Seth – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Blood Reaver.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of Slaughter",
            "description": "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Advanced.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Whirlwind of Gore",
            "description": "Each time this model fights, until that fight is resolved, add 1 to the Attacks characteristic of this model’s Blood Reaver for every 5 enemy models within 6\" of this model.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "FLESH TEARERS",
            "description": "This model is from the Flesh Tearers Chapter, a successor of the Blood Angels. For all rules purposes, it is treated as a Blood Angels model, but cannot be included in an army that includes any other Blood Angels Epic Hero models.",
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
          "m": "6\"",
          "t": "4",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Gabriel Seth",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Blood Reaver",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Grenades",
        "Imperium",
        "Chapter Master",
        "Gabriel Seth"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": [
          "Assault Squad",
          "Command Squad",
          "Tactical Squad",
          "Vanguard Veteran Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "1e784468-8db7-572a-922f-87d8a0060dd2",
      "name": "Lemartes",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Death Company Marines with Jump Packs",
      "composition": ["1 Lemartes – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; the Blood Crozius.",
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
        "core": ["Deep Strike", "Feel No Pain 6+", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Guardian of the Lost",
            "description": "While this model is leading a unit, each time an attack is allocated to a model in that unit, subtract 1 from the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fury Unbound",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability.",
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
          "sv": "3+",
          "w": "4",
          "ld": "5+",
          "oc": "1",
          "name": "Lemartes",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "The Blood Crozius",
              "keywords": ["lethal hits"],
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
        "Fly",
        "Jump Pack",
        "Grenades",
        "Imperium",
        "Chaplain",
        "Lemartes"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": ["Death Company Marines with Jump Packs"],
        "extra": ""
      }
    },
    {
      "id": "a5a75670-2c87-557a-a77d-cbc682a2f5e3",
      "name": "Librarian Dreadnought",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Librarian Dreadnought"],
      "loadout": "This model is equipped with: Blood Lance; storm bolter; Furioso fist, Furioso force halberd.",
      "wargear": [
        "This model’s storm bolter can be replaced with one of the following: ◦ 1 heavy flamer ◦ 1 meltagun"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "185",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shield of Sanguinius (Aura, Psychic)",
            "description": "While a friendly Adeptus Astartes unit is within 6\" of this model, models in that unit have the Feel No Pain 5+ ability against mortal wounds and Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Wings of Sanguinius (Psychic)",
            "description": "Once per turn, at the end of your Movement phase, one Psyker from your army with this ability can use it. If it does, roll one D6: on a 1, that Psyker suffers D3 mortal wounds; on a 2+, select one friendly Adeptus Astartes Infantry unit within 12\" of that Psyker and remove the selected unit from the battlefield, then set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.",
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
          "t": "9",
          "sv": "2+",
          "w": "8",
          "ld": "6+",
          "oc": "3",
          "name": "Librarian Dreadnought",
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
              "name": "Blood Lance – witchfire",
              "keywords": ["psychic", "sustained hits d3"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Blood Lance – focused witchfire",
              "keywords": ["hazardous", "psychic", "sustained hits d3"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+3"
            }
          ]
        },
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
              "name": "Furioso fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Furioso force halberd",
              "keywords": ["extra attacks", "psychic"],
              "range": "Melee",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "-3",
              "damage": "D6+3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Smoke",
        "Psyker",
        "Imperium",
        "Dreadnought",
        "Librarian Dreadnought"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"]
    },
    {
      "id": "3ba1b185-c189-5eec-8440-679398e4b683",
      "name": "Sanguinary Guard",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Sanguinary Guard"],
      "loadout": "Every model is equipped with: angelus boltgun; encarmine blade.",
      "wargear": [
        "Any number of models can each have their angelus boltgun replaced with one of the following: ◦ 1 inferno pistol ◦ 1 plasma pistol",
        "For every 5 models in this unit, one model’s encarmine blade can be replaced with 1 power fist.",
        "1 model can be equipped with 1 sanguinary banner."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "215",
          "active": true
        },
        {
          "models": "10",
          "cost": "430",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Sanguinary Banner",
            "description": "Add 1 to the Objective Control characteristic of models in the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Angelic Visage",
            "description": "Each time a melee attack targets this unit, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Heirs of Azkaellon",
            "description": "While a Warlord model is leading this unit, each time a melee attack targets this unit, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Captain model from your army with the Leader ability can be attached to an Assault Squad with Jump Packs unit, it can be attached to this unit instead.",
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
          "t": "4",
          "sv": "2+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Sanguinary Guard",
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
              "name": "Angelus boltgun",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "2",
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
              "name": "Encarmine blade",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Fly",
        "Jump Pack",
        "Grenades",
        "Imperium",
        "Sanguinary Guard"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leadBy": ["Commander Dante"]
    },
    {
      "id": "d893b19a-cb3f-59e5-8a1f-bd75238d3ff8",
      "name": "Sanguinary Priest",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Devastator Squad ■ Tactical Squad ■ Vanguard Veteran Squad You can attach this model to one of the above units, even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Sanguinary Priest"],
      "loadout": "This model is equipped with: bolt pistol; Astartes chainsword.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sanguinary Priest",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Blood Chalice",
            "description": "While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1.",
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Sanguinary Priest",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
        "Character",
        "Grenades",
        "Imperium",
        "Sanguinary Priest"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": [
          "Assault Squad",
          "Devastator Squad",
          "Tactical Squad",
          "Vanguard Veteran Squad"
        ],
        "extra": "You can attach this model to one of the above units, even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "050048cb-afdc-5b8c-80eb-e8bddbf0d718",
      "name": "Sanguinary Priest On Bike",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Bike Squad ■ Outrider Squad",
      "composition": ["1 Sanguinary Priest on Bike"],
      "loadout": "This model is equipped with: bolt pistol; twin boltgun; Astartes chainsword.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 boltgun ◦ 1 combi-weapon ◦ 1 grav-pistol ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol ◦ 1 storm bolter",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sanguinary Priest",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Blood Chalice",
            "description": "While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1.",
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
          "t": "5",
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Sanguinary Priest On Bike",
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
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin boltgun",
              "keywords": ["twin-linked"],
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Imperium",
        "Sanguinary Priest"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": ["Bike Squad", "Outrider Squad"],
        "extra": ""
      }
    },
    {
      "id": "5c7d67d6-95de-5d69-8dac-ac0345c0d45d",
      "name": "Sanguinary Priest With Jump Pack",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Squad with Jump Packs ■ Vanguard Veteran Squad with Jump packs You can attach this model to one of the above units, even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Sanguinary Priest"],
      "loadout": "This model is equipped with: bolt pistol; Astartes chainsword.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sanguinary Priest",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Blood Chalice",
            "description": "While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1.",
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Sanguinary Priest With Jump Pack",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
        "Character",
        "Grenades",
        "Imperium",
        "Fly",
        "Jump Pack",
        "Sanguinary Priest"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": [
          "Assault Squad with Jump Packs",
          "Vanguard Veteran Squad with Jump packs"
        ],
        "extra": "You can attach this model to one of the above units, even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "ea9e7286-4775-5e55-b2e0-b1c2c7c63b12",
      "name": "The Sanguinor",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 The Sanguinor – Epic Hero"],
      "loadout": "This model is equipped with: encarmine broadsword.",
      "wargear": ["None"],
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
        "core": ["Deep Strike", "Fights First", "Lone Operative"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aura of Fervour (Aura)",
            "description": "While a friendly Adeptus Astartes unit is within 6\" of this model, you can re-roll Battle-shock and Leadership tests taken for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Miraculous Saviour",
            "description": "Once per battle, at the end of your opponent’s Charge phase, if this model is still in Reserves, you can select one enemy unit that made a Charge move this phase. Set this model up on the battlefield within Engagement Range of that enemy unit.",
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
          "sv": "2+",
          "w": "7",
          "ld": "6+",
          "oc": "1",
          "name": "The Sanguinor",
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
              "name": "Encarmine broadsword",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "6",
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
        "Fly",
        "Jump Pack",
        "Imperium",
        "The Sanguinor"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"]
    },
    {
      "id": "3ef8a822-5a80-5c3e-b980-2a2f50355c85",
      "name": "Tycho The Lost",
      "source": "40k-10e",
      "faction_id": "CHBA",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Death Company Marines",
      "composition": ["1 Tycho the Lost – Epic Hero"],
      "loadout": "This model is equipped with: Blood Song; bolt pistol; Dead Man’s Hand.",
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
        "core": ["Leader", "Feel No Pain 6+"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Forlorn Hero",
            "description": "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Advanced.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Black Rage",
            "description": "Each time this model makes an attack, you can re-roll the Hit roll. While this model is not within 12\" of one or more friendly Chaplain models, it cannot be selected to Fall Back and its Objective Control characteristic is 0.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Death Vision of Sanguinius",
            "description": "If this model is destroyed by a melee attack, after the attacking unit has finished making its attacks, you can roll one D6, adding 2 to the result if the attacking unit contains the enemy Warlord: on a 2-3, that enemy unit suffers 3 mortal wounds; on a 4-5, that enemy unit suffers D3+3 mortal wounds; on a 6+, that enemy unit suffers D6+3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "TYCHO",
            "description": "Your army cannot contain both Captain Tycho and Tycho the Lost.",
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
          "m": "6\"",
          "t": "4",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Tycho The Lost",
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
              "name": "Blood Song",
              "keywords": ["anti-infantry 4+", "devastating wounds", "melta 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dead Man’s Hand",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
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
        "Grenades",
        "Imperium",
        "Captain",
        "Tycho the Lost"
      ],
      "factions": ["Adeptus Astartes", "Blood Angels"],
      "leads": {
        "units": ["Death Company Marines"],
        "extra": ""
      }
    }
  ],
  "colours": {
    "banner": "#631210",
    "header": "#72191c"
  }
}
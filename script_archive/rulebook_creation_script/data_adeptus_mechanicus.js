window.data = window.data || {};
window.data.ADM = {
  "id": "AdM",
  "link": "https://game-datacards.eu",
  "name": "Adeptus Mechanicus",
  "is_subfaction": false,
  "parent_id": "",
  "allied_factions": ["AoI", "QI"],
  "stratagems": [
    {
      "name": "BALEFUL HALO",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Rad-Cohort",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "A haze of deadly radiation hangs around\nthe warriors of a Rad-Cohort, every\nexhalation they make adding to the\nisotopic fog, sapping the strength and\nstamina of those who are not inured to\nits effects.",
      "when": "Fight phase, just after an enemy\nunit has selected its targets.",
      "target": "One Adeptus Mechanicus unit\nfrom your army (excluding Vehicle units)\nthat was selected as the target of one or\nmore of that enemy unit’s attacks.",
      "effect": "Until the end of the turn, each\ntime an attack is made that targets your\nunit, subtract 1 from the Wound roll.",
      "restrictions": "",
      "id": "0bd5a05e-76c0-5f90-ae3a-b203ca8f022d"
    },
    {
      "name": "EXTINCTION ORDER",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Rad-Cohort",
      "turn": "your",
      "phase": ["command"],
      "fluff": "As Tech-Priests order the purge of an area\nof the battlefield, rad-bombardments are\nredoubled in the hopes of turning it into\na wasteland.",
      "when": "Your Command phase.",
      "target": "One Tech-Priest model from\nyour army and one objective marker\nwithin 24\" of that model.",
      "effect": "Roll one D6 for each enemy unit\nwithin range of that objective marker. On a\n4+, that unit suffers 1 mortal wound and it\nmust take a Battle-shock test.",
      "restrictions": "",
      "id": "41cf9bad-476c-54ac-a9bf-0dd56ddde70d"
    },
    {
      "name": "LETHAL DOSAGE",
      "cost": 2,
      "type": "Wargear",
      "detachment": "Rad-Cohort",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "Sanctified with the Tri-fold Litany, the\nmost blessed power cells, fuel canisters\nand solid slugs have spent a decade\nin the oldest and most irradiated forge\ntemple to certify their lethality.",
      "when": "Your Shooting phase.",
      "target": "One Adeptus Mechanicus\nunit from your army that has not been\nselected to shoot this phase.",
      "effect": "Until the end of the phase,\neach time a model in your unit makes a\nranged attack that targets an enemy unit\n(excluding Vehicle units), add 1 to the\nWound roll.",
      "restrictions": "",
      "id": "d8616627-c676-5113-82ea-e2a56fa6b8eb"
    },
    {
      "name": "AGGRESSOR IMPERATIVE",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Rad-Cohort",
      "turn": "your",
      "phase": ["charge"],
      "fluff": "The Skitarii feel the press of an invisible\nhand upon their minds as the Machine\nGod drives them forward. Servos are\npushed to their structural limits as fibre\nbundles fill with the boundless energy of\nthe Motive Force and propel the faithful on\nan unstoppable crusade.",
      "when": "Your Charge phase.",
      "target": "One Skitarii unit from your army\nthat Advanced this turn.",
      "effect": "Until the end of the turn, your unit\nis eligible to declare a charge even though\nit Advanced this turn.",
      "restrictions": "You can only use this\nStratagem if the Conqueror Imperative is\nactive for your army.",
      "id": "cff7fbfb-17fe-5ed8-b8be-e1e1c4b1b077"
    },
    {
      "name": "VENGEFUL FALLOUT",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Rad-Cohort",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "The sentence for those who dare strike\nat the Tech-Priests' holy creations has\nbeen carefully prepared in advance and\nit can be unleashed with an anger born of\nfanatical faith.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has resolved\nits attacks.",
      "target": "One Adeptus Mechanicus unit\nfrom your army that was selected as\nthe target of one or more of that enemy\nunit’s attacks.",
      "effect": "Your unit can shoot as if it were\nyour Shooting phase, but it must target\nonly that enemy unit when doing so, and\nit can only do so if that enemy unit is an\neligible target. After your unit has finished\nmaking these attacks, it is not eligible to\nshoot again this turn.",
      "restrictions": "",
      "id": "27444ce2-e55b-5254-8e2f-3846460ef5a3"
    },
    {
      "name": "BULWARK IMPERATIVE",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Rad-Cohort",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "The warrior wisdom of experienced\nReductors is force-loaded into the Skitarii’s\nminds. Each pulse of data bestows a\nsensation of sacred invulnerability upon\nthe Tech-Priests’ soldiers.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has selected\nits targets.",
      "target": "One Skitarii unit from your army\nthat was selected as the target of one or\nmore of that enemy unit’s attacks.",
      "effect": "Until the end of the turn, models\nin your unit have a 4+ invulnerable save.\nRESTRICTIONS: You can only use this\nStratagem if the Protector Imperative is\nactive for your army.",
      "restrictions": "",
      "id": "88641d0c-30cc-5a6a-8e6e-69f408e701b2"
    }
  ],
  "enhancements": [
    {
      "name": "Archived Purge Protocols",
      "description": "Skitarii Marshal model only. At the start of the battle round, you can select one friendly Skitarii unit within 12\" of the bearer. Until the start of the next battle round, if the Protector Imperative is active for your army, the Conqueror Imperative is active for that unit instead, and if the Conqueror Imperative is active for your army, the Protector Imperative is active for that unit instead.",
      "keywords": ["Skitarii Marshal"],
      "excludes": [],
      "cost": "10"
    },
    {
      "name": "Excoriating Emanation",
      "description": "Adeptus Mechanicus model only. While the bearer is leading a unit, models in that unit have the Stealth ability.",
      "keywords": ["Adeptus Mechanicus"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "Master Annihilator",
      "description": "Adeptus Mechanicus model only. While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
      "keywords": ["Adeptus Mechanicus"],
      "excludes": [],
      "cost": "35"
    },
    {
      "name": "Omni-steriliser",
      "description": "Adeptus Mechanicus model only. Add 3 to the Attacks characteristic of the bearer's ranged weapons. In addition, the bearer's ranged weapons have the [ANTI-INFANTRY 2+] and [ANTI-MONSTER 4+] abilities.",
      "keywords": ["Adeptus Mechanicus"],
      "excludes": [],
      "cost": "20"
    }
  ],
  "datasheets": [
    {
      "id": "91f25fb4-4f2b-56e8-a5ef-911b61833a59",
      "name": "Archaeopter Fusilave",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Archaeopter Fusilave"],
      "loadout": "This model is equipped with: cognis heavy stubber array; armoured hull; command uplink.",
      "wargear": [
        "This model’s command uplink can be replaced with 1 chaff launcher."
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
        "wargear": [
          {
            "name": "Chaff Launcher",
            "description": "The bearer has the Smoke keyword.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Command Uplink",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bomb Rack",
            "description": "Each time this model finishes a Normal move, you can select one enemy unit it moved across and roll six D6: for each 3+, that unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-3 WOUNDS REMAINING",
          "description": "While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Archaeopter Fusilave",
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
              "name": "Cognis heavy stubber array",
              "keywords": ["rapid fire 9", "sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "9",
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
              "name": "Armoured hull",
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
        "Aircraft",
        "Fly",
        "Imperium",
        "Skitarii",
        "Archaeopter Fusilave"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "a4830798-deae-5bf2-9f49-4b5e5e5bd4bb",
      "name": "Archaeopter Stratoraptor",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Archaeopter Stratoraptor"],
      "loadout": "This model is equipped with: 2 cognis heavy stubbers; 2 heavy phosphor blasters; twin cognis lascannon; armoured hull; command uplink.",
      "wargear": [
        "This model’s command uplink can be replaced with 1 chaff launcher."
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
            "name": "Chaff Launcher",
            "description": "The bearer has the Smoke keyword.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Command Uplink",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Doctrina Imperatives"],
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
            "description": "Each time this model makes a ranged attack that targets an enemy unit (excluding units that can Fly), add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-3 WOUNDS REMAINING",
          "description": "While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Archaeopter Stratoraptor",
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
              "name": "Cognis heavy stubber",
              "keywords": ["rapid fire 3", "sustained hits 1"],
              "range": "36\"",
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
              "name": "Heavy phosphor blaster",
              "keywords": ["ignores cover"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Twin cognis lascannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Armoured hull",
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
        "Aircraft",
        "Fly",
        "Imperium",
        "Skitarii",
        "Archaeopter Stratoraptor"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "b8f2f15a-f7ca-5d18-a8fd-9532d26292c7",
      "name": "Archaeopter Transvector",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Archaeopter Transvector"],
      "loadout": "This model is equipped with: cognis heavy stubber array; armoured hull; command uplink.",
      "wargear": [
        "This model’s command uplink can be replaced with 1 chaff launcher."
      ],
      "transport": "This model has a transport capacity of 11 Skitarii Infantry or Tech-Priest Infantry models. It cannot transport Jump Pack or Kataphron models.",
      "points": [
        {
          "models": "1",
          "cost": "155",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaff Launcher",
            "description": "The bearer has the Smoke keyword.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Command Uplink",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D3", "Deep Strike", "Hover"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aerial Deployment",
            "description": "If this model starts the game in Hover mode and in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-3 WOUNDS REMAINING",
          "description": "While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Archaeopter Transvector",
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
              "name": "Cognis heavy stubber array",
              "keywords": ["rapid fire 9", "sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "9",
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
              "name": "Armoured hull",
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
        "Aircraft",
        "Transport",
        "Fly",
        "Imperium",
        "Skitarii",
        "Archaeopter Transvector"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "3f62892a-43a7-59c6-89b7-405b1e72cbd6",
      "name": "Belisarius Cawl",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Belisarius Cawl – Epic Hero"],
      "loadout": "This model is equipped with: solar atomiser; arc scourge; Cawl’s Omnissian axe; mechadendrite hive.",
      "wargear": ["None"],
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
        "core": [],
        "faction": [],
        "primarch": [
          {
            "name": "CANTICLES OF THE OMNISSIAH",
            "showAbility": true,
            "abilities": [
              {
                "name": "Invocation of Machine Vengeance (Aura)",
                "description": "While a friendly Adeptus Mechanicus unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Mantra of Discipline (Aura)",
                "description": "While a friendly Adeptus Mechanicus unit is within 6\" of this model, each time you take a Battle-shock or Leadership test for that unit, you can re-roll that test.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Shroudpsalm (Aura)",
                "description": "While a friendly Adeptus Mechanicus unit is within 6\" of this model, that unit has the Stealth ability.",
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
            "name": "Canticles of the Omnissiah",
            "description": "At the start of the battle round, select one of the abilities in the Canticles of the Omnissiah section (see left). Until the start of the next battle round, this model has that ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mechanicus Bodyguard",
            "description": "While this model is within 3\" of one or more other friendly Adeptus Mechanicus units, this model has the Lone Operative ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Self-repair Mechanisms",
            "description": "At the start of your Command phase, this model regains up to D3 lost wounds.",
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
          "m": "6\"",
          "t": "8",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Belisarius Cawl",
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
              "name": "Solar atomiser",
              "keywords": ["blast", "melta d3"],
              "range": "18\"",
              "attacks": "D3",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
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
              "name": "Arc scourge",
              "keywords": [
                "anti-vehicle 4+",
                "devastating wounds",
                "extra attacks"
              ],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
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
              "name": "Cawl’s Omnissian axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
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
              "name": "Mechadendrite hive",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Imperium",
        "Tech-Priest",
        "Belisarius Cawl"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "4cf53304-aa75-538d-ac25-d186e6cbee2c",
      "name": "Corpuscarii Electro-priests",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Corpuscarii Electro-Priests"],
      "loadout": "Every model is equipped with: electrostatic gauntlets.",
      "wargear": ["None"],
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Electro-infusion",
            "description": "While a Character model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll.",
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
          "sv": "7+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Corpuscarii Electro-priests",
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
              "name": "Electrostatic gauntlets",
              "keywords": ["pistol", "sustained hits 2"],
              "range": "12\"",
              "attacks": "3",
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
              "name": "Electrostatic gauntlets",
              "keywords": ["sustained hits 2"],
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
      "keywords": ["Infantry", "Imperium", "Electro-Priests", "Corpuscarii"],
      "factions": ["Adeptus Mechanicus"],
      "leadBy": [
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "53661916-dc81-5293-919b-5c31b0bf7e36",
      "name": "Cybernetica Datasmith",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "This model must be attached to the following unit: ■ Kastelan Robots You must attach this model to a Kastelan Robots unit, even if one or more other Cybernetica Datasmith models have already been attached to it. In such cases, if that Bodyguard unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths. If you cannot attach this model to a Kastelan Robots unit, this model cannot be deployed and counts as having been destroyed during the first battle round.",
      "composition": ["1 Cybernetica Datasmith"],
      "loadout": "This model is equipped with: archeotech pistol; power fist.",
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Battle Protocols",
            "description": "In your Command phase, if this model is leading a Kastelan Robots unit, it can set that unit’s battle protocol. If it does, take a Leadership test for this model; if that test is passed, that unit enters a protocol of your choice from those listed below. Once a unit enters a protocol, it remains in that protocol until it enters a different one. ■  Protector Protocol: Add 2 to the Attacks characteristic of ranged weapons equipped by Kastelan Robot models in that unit. ■  Conqueror Protocol: Add 2 to the Attacks characteristic of melee weapons equipped by Kastelan Robot models in that unit. ■  Aegis Protocol: Add 1 to the Toughness characteristic of Kastelan Robot models in that unit.",
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Cybernetica Datasmith",
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
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
        "Character",
        "Imperium",
        "Tech-Priest",
        "Cybernetica Datasmith"
      ],
      "factions": ["Adeptus Mechanicus"],
      "leads": {
        "units": ["Kastelan Robots"],
        "extra": "You must attach this model to a Kastelan Robots unit, even if one or more other Cybernetica Datasmith models have already been attached to it. In such cases, if that Bodyguard unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths. If you cannot attach this model to a Kastelan Robots unit, this model cannot be deployed and counts as having been destroyed during the first battle round."
      }
    },
    {
      "id": "f6c2e253-82e2-54bf-9125-5e195516b349",
      "name": "Fulgurite Electro-priests",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Fulgurite Electro-Priests"],
      "loadout": "Every model is equipped with: electroleech stave.",
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
        "core": ["Feel No Pain 5+"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Electro-infusion",
            "description": "While a Character model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll.",
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
          "sv": "7+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Fulgurite Electro-priests",
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
              "name": "Electroleech stave",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Electro-Priests", "Fulgurite"],
      "factions": ["Adeptus Mechanicus"],
      "leadBy": [
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "1ac9768e-3ffe-539f-900d-1f33f9087eb2",
      "name": "Ironstrider Ballistarii",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Ironstrider Ballistarii"],
      "loadout": "Every model is equipped with: twin cognis autocannon; Ironstrider feet.",
      "wargear": [
        "Any number of models can each have their twin cognis autocannon replaced with 1 twin cognis lascannon."
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
        },
        {
          "models": "3",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Elevated Strider",
            "description": "This unit is eligible to shoot and declare a charge in a turn in which it Fell Back, and you can re-roll Desperate Escape tests taken for models in this unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Broad Spectrum Data-tether",
            "description": "Each time you select this unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
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
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Ironstrider Ballistarii",
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
              "name": "Twin cognis autocannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Twin cognis lascannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Ironstrider feet",
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
        "Walker",
        "Smoke",
        "Imperium",
        "Skitarii",
        "Ironstrider Ballistarii"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "11fd9afc-58f4-5280-94a2-7f30776436af",
      "name": "Kastelan Robots",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2-4 Kastelan Robots"],
      "loadout": "Every model is equipped with: incendine combustor; twin Kastelan fist.",
      "wargear": [
        "Any number of models can each have their twin Kastelan fist replaced with one of the following: ◦  1 Kastelan phosphor blaster and 1 Kastelan fist ◦ 1 twin Kastelan phosphor blaster and 1 close combat weapon",
        "Any number of models can each have their incendine combustor replaced with 1 heavy phosphor blaster."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "215",
          "active": true
        },
        {
          "models": "4",
          "cost": "430",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Robotic Bodyguard",
            "description": "While a Cybernetica Datasmith model is leading this unit, that model has the Feel No Pain 4+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Repulsor Grid",
            "description": "Each time a ranged attack is allocated to a Kastelan Robot model in this unit, on an unmodified saving throw of 6, the attacking unit suffers 1 mortal wound after it has finished making its attacks.",
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
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Kastelan Robots",
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
              "name": "Heavy phosphor blaster",
              "keywords": ["ignores cover"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Incendine combustor",
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
              "name": "Kastelan phosphor blaster",
              "keywords": ["ignores cover"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
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
              "name": "Twin Kastelan phosphor blaster",
              "keywords": ["ignores cover", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
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
              "name": "Kastelan fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "12",
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
              "name": "Twin Kastelan fist",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Imperium", "Kastelan Robots"],
      "factions": ["Adeptus Mechanicus"],
      "leadBy": ["Cybernetica Datasmith"]
    },
    {
      "id": "8277da97-bfc9-5597-99dc-cbed85744e0e",
      "name": "Kataphron Breachers",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Kataphron Breachers"],
      "loadout": "Every model is equipped with: heavy arc rifle; arc claw.",
      "wargear": [
        "Any number of models can each have their heavy arc rifle replaced with 1 torsion cannon.",
        "Any number of models can each have their arc claw replaced with 1 hydraulic claw."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "150",
          "active": true
        },
        {
          "models": "6",
          "cost": "300",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Breaching Command",
            "description": "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. While this unit is within 6” of one or more friendly Adeptus Mechanicus Battleline units, you can re-roll the Hit roll instead.",
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
          "m": "5\"",
          "t": "7",
          "sv": "3+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Kataphron Breachers",
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
              "name": "Heavy arc rifle",
              "keywords": ["anti-vehicle 4+", "rapid fire 2"],
              "range": "36\"",
              "attacks": "2",
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
              "name": "Torsion cannon",
              "keywords": ["anti-infantry 2+", "blast"],
              "range": "48\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "6",
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
              "name": "Arc claw",
              "keywords": ["anti-vehicle 4+"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Hydraulic claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Kataphron", "Breachers"],
      "factions": ["Adeptus Mechanicus"],
      "leadBy": [
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "c1893b52-e426-59c4-aa4d-0a03e4b329ad",
      "name": "Kataphron Destroyers",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Kataphron Destroyers"],
      "loadout": "Every model is equipped with: heavy grav-cannon; phosphor blaster; close combat weapon.",
      "wargear": [
        "Any number of models can each have their heavy grav-cannon replaced with 1 Kataphron plasma culverin.",
        "Any number of models can each have their phosphor blaster replaced with 1 cognis flamer."
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
        "wargear": [],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sentinel Directives",
            "description": "Each time you target this unit with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ when resolving that Stratagem.",
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
          "m": "5\"",
          "t": "6",
          "sv": "3+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Kataphron Destroyers",
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
              "name": "Cognis flamer",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Heavy grav-cannon",
              "keywords": ["anti-vehicle 2+"],
              "range": "30\"",
              "attacks": "4",
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
              "name": "Kataphron plasma culverin – standard",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Kataphron plasma culverin – supercharge",
              "keywords": ["hazardous"],
              "range": "36\"",
              "attacks": "4",
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
              "name": "Phosphor blaster",
              "keywords": ["ignores cover", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Kataphron", "Destroyers"],
      "factions": ["Adeptus Mechanicus"],
      "leadBy": [
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "99cde65d-31e7-523a-9791-8fe0f1e1c965",
      "name": "Onager Dunecrawler",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Onager Dunecrawler"],
      "loadout": "This model is equipped with: eradication beamer; Dunecrawler legs.",
      "wargear": [
        "This model’s eradication beamer can be replaced with one of the following: ◦ 1 daedalus missile launcher and 1 Icarus array ◦  1 neutron laser and 1 cognis heavy stubber ◦ 1 twin Onager heavy phosphor blaster",
        "This model can be equipped with 1 additional cognis heavy stubber.",
        "This model can be equipped with one of the following: ◦ 1 broad spectrum data-tether ◦ 1 smoke launchers"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "140",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Broad spectrum data-tether",
            "description": "Each time you select the bearer as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Smoke launchers",
            "description": "The bearer has the Smoke keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D3"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dunecrawler",
            "description": "This model can be moved over terrain features that are 4\" or less in height as if they were not there.",
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
          "m": "8\"",
          "t": "10",
          "sv": "2+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Onager Dunecrawler",
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
              "name": "Cognis heavy stubber",
              "keywords": ["rapid fire 3", "sustained hits 1"],
              "range": "36\"",
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
              "name": "Daedalus missile launcher",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Eradication beamer – dissipated",
              "keywords": ["blast", "sustained hits d3"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Eradication beamer – focused",
              "keywords": ["blast", "sustained hits d3"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "9",
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
              "name": "Neutron laser",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "16",
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
              "name": "Icarus array",
              "keywords": ["anti-fly 4+", "twin-linked"],
              "range": "48\"",
              "attacks": "6",
              "skill": "4+",
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
              "name": "Twin Onager heavy phosphor blaster",
              "keywords": ["ignores cover", "twin-linked"],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
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
              "name": "Dunecrawler legs",
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
        "Walker",
        "Imperium",
        "Skitarii",
        "Onager Dunecrawler"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "b745d158-f5fd-54c0-8564-e1a67b432621",
      "name": "Pteraxii Skystalkers",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Pteraxii Skystalker Alpha",
        "4-9 Pteraxii Skystalkers"
      ],
      "loadout": "The Pteraxii Skystalker Alpha model is equipped with: flechette blaster; taser goad. Every Pteraxii Skystalker model is equipped with: flechette carbine; close combat weapon.",
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
        "core": ["Deep Strike"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ride the Thermals",
            "description": "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can do one of the following: ■  Make a Normal move of up to 6\". ■  Make a Normal move of up to 12\", provided every model in this unit ends that move wholly within 6\" of one or more friendly Adeptus Mechanicus Battleline units. In either case, if it does, until the end of the turn, this unit is not eligible to declare a charge.",
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
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Pteraxii Skystalkers",
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
              "name": "Flechette blaster",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "5",
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
              "name": "Flechette carbine",
              "keywords": [],
              "range": "18\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "3",
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
              "name": "Taser goad",
              "keywords": ["sustained hits 2"],
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
        "Infantry",
        "Fly",
        "Jump Pack",
        "Grenades",
        "Imperium",
        "Skitarii",
        "Pteraxii Skystalkers"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "c2cae0ff-1d6d-54ad-8f3f-f2b1b18f5450",
      "name": "Pteraxii Sterylizors",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Pteraxii Sterylizor Alpha",
        "4-9 Pteraxii Sterylizors"
      ],
      "loadout": "The Pteraxii Sterylizor Alpha model is equipped with: flechette blaster; Pteraxii talons; taser goad. Every Pteraxii Sterylizor model is equipped with: phosphor torch; Pteraxii talons.",
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
        "core": ["Deep Strike"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Searing Conflagration",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit (excluding Monsters and Vehicles) that was hit by one or more of this unit’s phosphor torches this phase and roll one D6, adding 3 to the result if this unit is within 6\" of one or more friendly Adeptus Mechanicus Battleline units. On a 4+, until the end of your opponent’s next turn, that enemy unit is aflame. While a unit is aflame, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it.",
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
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Pteraxii Sterylizors",
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
              "name": "Flechette blaster",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "5",
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
              "name": "Phosphor torch",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Pteraxii talons",
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
              "name": "Taser goad",
              "keywords": ["sustained hits 2"],
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
        "Infantry",
        "Fly",
        "Jump Pack",
        "Imperium",
        "Skitarii",
        "Pteraxii Sterylizors"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "0b42829a-8889-5b94-8e48-1e668926ef1f",
      "name": "Secutarii Hoplites",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hoplite Alpha", "4-9 Secutarii Hoplites"],
      "loadout": "Every model is equipped with: arc lance.",
      "wargear": [
        "The Hoplite Alpha’s arc lance can be replaced with 1 archeotech pistol.",
        "The Hoplite Alpha can be equipped with 1 Alpha close combat weapon.",
        "1 Secutarii Hoplite can be equipped with one of the following: ◦ 1 enhanced data-tether ◦ 1 omnispex"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Enhanced data-tether",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Omnispex",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Titan Guard",
            "description": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase. When doing so, if there are one or more friendly Adeptus Titanicus units on the battlefield, you can re-roll the subsequent charge roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SECUTARII",
            "description": "If a model from your army with the Leader ability can be attached to a Skitarii Vanguard unit, it can be attached to this unit instead.",
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
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Secutarii Hoplites",
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
              "name": "Arc lance",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Alpha close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Arc lance",
              "keywords": ["anti-vehicle 4+", "devastating wounds", "lance"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Skitarii", "Secutarii Hoplites"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "62a16a50-4f96-5197-a731-2d2b2057d4bf",
      "name": "Secutarii Peltasts",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Peltast Alpha", "4-9 Secutarii Peltasts"],
      "loadout": "Every model is equipped with: galvanic caster; close combat weapon.",
      "wargear": [
        "The Peltast Alpha’s arc lance can be replaced with 1 archeotech pistol.",
        "The Peltast Alpha can be equipped with 1 Alpha close combat weapon.",
        "1 Secutarii Peltast can be equipped with one of the following: ◦ 1 enhanced data-tether ◦ 1 omnispex"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Enhanced data-tether",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Omnispex",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blind Barrage",
            "description": "In your Shooting phase, after this unit has shot, select one enemy Infantry unit hit by one or more of those attacks. Until the start of your next turn, while this unit is on the battlefield, that enemy unit is blinded. While a unit is blinded, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SECUTARII",
            "description": "If a model from your army with the Leader ability can be attached to a Skitarii Vanguard unit, it can be attached to this unit instead.",
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
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Secutarii Peltasts",
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
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Galvanic caster – flechette",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "5",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Galvanic caster – hammershot",
              "keywords": ["heavy"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Alpha close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
        }
      ],
      "keywords": ["Infantry", "Imperium", "Skitarii", "Secutarii Peltasts"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "70269b85-1b31-543f-8c14-697547dafe48",
      "name": "Serberys Raiders",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Serberys Raider Alpha", "2-5 Serberys Raiders"],
      "loadout": "The Serberys Raider Alpha model is equipped with: archeotech pistol; galvanic carbine; cavalry sabre and clawed limbs. Every Serberys Raider model is equipped with: galvanic carbine; cavalry sabre and clawed limbs.",
      "wargear": [
        "1 Serberys Raider can be equipped with 1 enhanced data-tether."
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
            "name": "Enhanced data-tether",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 9\""],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tactica Obliqua",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can do one of the following: ■  Make a Normal move of up to D6\". ■  Make a Normal move of up to 6\", provided every model in this unit ends that move wholly within 6\" of one or more friendly Adeptus Mechanicus Battleline units.",
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
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Serberys Raiders",
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
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Galvanic carbine",
              "keywords": ["devastating wounds"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Cavalry sabre and clawed limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Imperium", "Skitarii", "Serberys Raiders"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "766d924f-db7c-5ccf-866d-5ed47c6bdfbe",
      "name": "Serberys Sulphurhounds",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Serberys Sulphurhound Alpha",
        "2-5 Serberys Sulphurhounds"
      ],
      "loadout": "The Serberys Sulphurhound Alpha model is equipped with: phosphor blast pistol; sulphur breath; cavalry arc maul; clawed limbs. Every Serberys Sulphurhound model is equipped with: twin phosphor pistols; sulphur breath; clawed limbs.",
      "wargear": [
        "For every 3 models in this unit, 1 Serberys Sulphurhound’s twin phosphor pistols can be replaced with 1 phosphor blast carbine and 1 phosphor pistol."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "65",
          "active": true
        },
        {
          "models": "6",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Line-breakers",
            "description": "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each model in this unit, adding 2 to the result if this unit started its Charge move within 6\" of one or more friendly Adeptus Mechanicus Battleline units. For each 4+, that enemy unit suffers 1 mortal wound.",
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
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Serberys Sulphurhounds",
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
              "name": "Phosphor blast carbine",
              "keywords": ["blast", "ignores cover"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Phosphor blast pistol",
              "keywords": ["ignores cover", "pistol"],
              "range": "12\"",
              "attacks": "D3",
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
              "name": "Phosphor pistol",
              "keywords": ["ignores cover", "pistol"],
              "range": "12\"",
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
              "name": "Sulphur breath",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "9\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Twin phosphor pistols",
              "keywords": ["ignores cover", "pistol", "twin-linked"],
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
              "name": "Cavalry arc maul",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Clawed limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Imperium", "Skitarii", "Serberys Sulphurhounds"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "98f32d4e-f2e4-5b8a-a274-bf31c4467a77",
      "name": "Servitors",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["4 Servitors"],
      "loadout": "Every model is equipped with: Servitor’s servo-arm.",
      "wargear": [
        "Up to 2 models can each have their Servitor’s servo-arm replaced with one of the following: ◦ 1 heavy bolter and 1 Servitor’s tools ◦ 1 multi-melta and 1 Servitor’s tools ◦ 1 plasma cannon and 1 Servitor’s tools"
      ],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "50",
          "active": true
        },
        {
          "models": "4",
          "cost": "50",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mindlock",
            "description": "While a Tech-Priest model is leading this unit, improve the Ballistic Skill and Weapon Skill characteristics of ranged and melee weapons equipped by Servitor models in this unit by 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SERVITOR RETINUE",
            "description": "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a Tech-Priest Enginseer model (a unit cannot have more than one Servitors unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly.",
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
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "8+",
          "oc": "0",
          "name": "Servitors",
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
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "6+",
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
              "name": "Multi-melta",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "6+",
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
              "name": "Plasma cannon – standard",
              "keywords": ["heavy", "blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "6+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["heavy", "blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "6+",
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
              "name": "Servitor’s servo-arm",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Servitor’s tools",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Servitors"],
      "factions": ["Adeptus Mechanicus"],
      "leadBy": ["Tech-priest Enginseer"]
    },
    {
      "id": "3b98c029-9ae1-54d3-a3c4-f008382cca2b",
      "name": "Sicarian Infiltrators",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Sicarian Infiltrator Princeps",
        "4-9 Sicarian Infiltrators"
      ],
      "loadout": "Every model is equipped with: stubcarbine; power weapon.",
      "wargear": [
        "Any number of models can each have their stubcarbine and power weapon replaced with 1 flechette blaster and 1 taser goad."
      ],
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
        "core": ["Infiltrators", "Stealth"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Neurostatic Interference (Aura)",
            "description": "While an enemy unit is within 6\" of this unit, each time a Battle-shock or Leadership test is taken for that unit, subtract 1 from that test. While this unit is within 6\" of one or more friendly Adeptus Mechanicus Battleline units, subtract 2 from that test instead.",
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
          "t": "4",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Sicarian Infiltrators",
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
              "name": "Flechette blaster",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "5",
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
              "name": "Stubcarbine",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "3",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Taser goad",
              "keywords": ["sustained hits 2"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Skitarii", "Sicarian Infiltrators"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "ed740a5b-3573-596f-845e-81c03469e598",
      "name": "Sicarian Ruststalkers",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Sicarian Ruststalker Princeps",
        "4-9 Sicarian Ruststalkers"
      ],
      "loadout": "Every model is equipped with: transonic razor and chordclaw.",
      "wargear": [
        "Any number of Sicarian Ruststalkers can each have their transonic razor and chordclaw replaced with 1 transonic blades.",
        "The Sicarian Ruststalker Princeps’ transonic razor and chordclaw can be replaced with 1 transonic blades and chordclaw."
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
        "core": ["Stealth"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Optimised Gait",
            "description": "Add 1 to Advance and Charge rolls made for this unit. While this unit is within 6\" of one or more friendly Adeptus Mechanicus Battleline units, add 2 to Advance and Charge rolls made for this unit instead.",
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
          "t": "4",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Sicarian Ruststalkers",
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
              "name": "Transonic blades",
              "keywords": ["devastating wounds", "precision"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Transonic blades and chordclaw",
              "keywords": [
                "anti-infantry 3+",
                "devastating wounds",
                "precision"
              ],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
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
              "name": "Transonic razor and chordclaw",
              "keywords": ["anti-infantry 3+", "precision"],
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
      "keywords": ["Infantry", "Imperium", "Skitarii", "Sicarian Ruststalkers"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "5a618444-fd19-5bba-b585-7d8618bdb84e",
      "name": "Skitarii Marshal",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Skitarii Marshal"],
      "loadout": "This model is equipped with: archeotech pistol; control stave.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "45",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Control Stave",
            "description": "The bearer’s unit can still be selected as the target of a Stratagem while Battle-shocked.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Control Edict",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Servo-skull Uplink",
            "description": "Once per turn, you can select this model’s unit for a Stratagem even if that Stratagem has already been used on another unit from your army this phase.",
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
          "sv": "4+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Skitarii Marshal",
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
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Control stave",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Imperium", "Skitarii", "Marshal"],
      "factions": ["Adeptus Mechanicus"],
      "leads": {
        "units": ["Skitarii Rangers", "Skitarii Vanguard"],
        "extra": ""
      }
    },
    {
      "id": "dce7d828-db1b-5c95-9190-0fe0b05960bc",
      "name": "Skitarii Rangers",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Skitarii Ranger Alpha", "9 Skitarii Rangers"],
      "loadout": "Every model is equipped with: galvanic rifle; close combat weapon.",
      "wargear": [
        "The Skitarii Ranger Alpha can be equipped with 1 Alpha combat weapon.",
        "The Skitarii Ranger Alpha’s galvanic rifle can be replaced with 1 archeotech pistol.",
        "1 Skitarii Ranger’s galvanic rifle can be replaced with 1 arc rifle.",
        "1 Skitarii Ranger’s galvanic rifle can be replaced with 1 plasma caliver.",
        "1 Skitarii Ranger’s galvanic rifle can be replaced with 1 transuranic arquebus.",
        "1 Skitarii Ranger equipped with a galvanic rifle can be equipped with one of the following: ◦ 1 enhanced data-tether* ◦ 1 omnispex* *  That model’s galvanic rifle cannot be replaced."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "125",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Enhanced data-tether",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Omnispex",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 6\""],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Objective Scouted",
            "description": "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
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
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Skitarii Rangers",
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
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Arc rifle",
              "keywords": [
                "anti-vehicle 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "30\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Galvanic rifle",
              "keywords": [],
              "range": "30\"",
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
              "name": "Plasma caliver – standard",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma caliver – supercharge",
              "keywords": ["hazardous"],
              "range": "30\"",
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
              "name": "Transuranic arquebus",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
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
              "name": "Alpha combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
        }
      ],
      "keywords": ["Infantry", "Battleline", "Imperium", "Skitarii", "Rangers"],
      "factions": ["Adeptus Mechanicus"],
      "leadBy": [
        "Skitarii Marshal",
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "545bfcca-d944-54d6-b612-1fbf1e59eee9",
      "name": "Skitarii Vanguard",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Skitarii Vanguard Alpha", "9 Skitarii Vanguard"],
      "loadout": "Every model is equipped with: radium carbine; close combat weapon.",
      "wargear": [
        "The Skitarii Vanguard Alpha can be equipped with 1 Alpha combat weapon.",
        "The Skitarii Vanguard Alpha’s radium carbine can be replaced with 1 archeotech pistol.",
        "1 Skitarii Vanguard’s radium carbine can be replaced with 1 arc rifle.",
        "1 Skitarii Vanguard’s radium carbine can be replaced with 1 plasma caliver.",
        "1 Skitarii Vanguard’s radium carbine can be replaced with 1 transuranic arquebus.",
        "1 Skitarii Vanguard equipped with a radium carbine can be equipped with one of the following: ◦ 1 enhanced data-tether* ◦ 1 omnispex* *  That model’s radium carbine cannot be replaced."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Enhanced data-tether",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Omnispex",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rad-saturation (Aura)",
            "description": "While an enemy unit (excluding Vehicle units) is within 3\" of this unit, subtract 1 from the Objective Control characteristic of models in that unit.",
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
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Skitarii Vanguard",
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
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Arc rifle",
              "keywords": [
                "anti-vehicle 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "30\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma caliver – standard",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma caliver – supercharge",
              "keywords": ["hazardous"],
              "range": "30\"",
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
              "name": "Radium carbine",
              "keywords": ["anti-infantry 4+"],
              "range": "18\"",
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
              "name": "Transuranic arquebus",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
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
              "name": "Alpha combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Imperium",
        "Skitarii",
        "Vanguard"
      ],
      "factions": ["Adeptus Mechanicus"],
      "leadBy": [
        "Skitarii Marshal",
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "140f2de9-984b-5fa2-9c66-4cd4fde3c1be",
      "name": "Skorpius Disintegrator",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Skorpius Disintegrator"],
      "loadout": "This model is equipped with: belleros energy cannon; 3 cognis heavy stubbers; disruptor missile launcher; armoured hull.",
      "wargear": [
        "This model’s belleros energy cannon can be replaced with 1 ferrumite cannon."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Broad Spectrum Data-tether",
            "description": "Each time you select this model as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Blistering Salvoes",
            "description": "Each time this model makes an attack with a belleros energy cannon that targets an Infantry unit, add 1 to the Hit roll. Each time this model makes an attack with a ferrumite cannon that targets a Monster or Vehicle unit, add 1 to the Hit roll.",
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
          "sv": "2+",
          "w": "12",
          "ld": "7+",
          "oc": "3",
          "name": "Skorpius Disintegrator",
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
              "name": "Belleros energy cannon",
              "keywords": ["blast", "indirect fire"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "4+",
              "strength": "7",
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
              "name": "Cognis heavy stubber",
              "keywords": ["rapid fire 3", "sustained hits 1"],
              "range": "36\"",
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
              "name": "Disruptor missile launcher",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Ferrumite cannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
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
              "name": "Armoured hull",
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
      "keywords": ["Vehicle", "Imperium", "Skitarii", "Skorpius Disintegrator"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "dc18d2fa-e4ee-5be2-97a7-c62d66da93aa",
      "name": "Skorpius Dunerider",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Skorpius Dunerider"],
      "loadout": "This model is equipped with: cognis heavy stubber array; armoured hull.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 12 Adeptus Mechanicus Infantry models. It cannot transport Jump Pack or Kataphron models.",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Broad Spectrum Data-tether",
            "description": "Each time you select this model as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Dunerider",
            "description": "Units can disembark from this Transport after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn.",
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
          "w": "11",
          "ld": "7+",
          "oc": "2",
          "name": "Skorpius Dunerider",
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
              "name": "Cognis heavy stubber array",
              "keywords": ["rapid fire 9", "sustained hits 1"],
              "range": "36\"",
              "attacks": "9",
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
              "name": "Armoured hull",
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
        "Imperium",
        "Skitarii",
        "Skorpius Dunerider"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "6a0662fc-5077-5df6-ae33-776050a450ba",
      "name": "Sydonian Dragoons",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Sydonian Dragoons"],
      "loadout": "Every model is equipped with: taser lance.",
      "wargear": [
        "Any number of models can each have their taser lance replaced with 1 radium jezzail and 1 Ironstrider feet.",
        "Any number of models can each be equipped with 1 phosphor serpenta."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75",
          "active": true
        },
        {
          "models": "2",
          "cost": "150",
          "active": true
        },
        {
          "models": "3",
          "cost": "225",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Stealth"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Elevated Strider",
            "description": "This unit is eligible to shoot and declare a charge in a turn in which it Fell Back, and you can re-roll Desperate Escape tests taken for models in this unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Broad Spectrum Data-tether",
            "description": "Each time you select this unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
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
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Sydonian Dragoons",
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
              "name": "Phosphor serpenta",
              "keywords": ["ignores cover"],
              "range": "18\"",
              "attacks": "1",
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
              "name": "Radium jezzail",
              "keywords": ["anti-infantry 3+", "heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "5",
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
              "name": "Ironstrider feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Taser lance",
              "keywords": ["anti-walker 2+", "lance", "sustained hits 2"],
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
      "keywords": [
        "Imperium",
        "Vehicle",
        "Walker",
        "Skitarii",
        "Sydonian Dragoons"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "4ee67673-d09b-59b6-ab04-659b15cc35a6",
      "name": "Tech-priest Dominus",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Corpuscarii Electro-Priests ■ Fulgurite Electro-Priests ■ Kataphron Breachers ■ Kataphron Destroyers ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Tech-Priest Dominus"],
      "loadout": "This model is equipped with: macrostubber; volkite blaster; Omnissian axe.",
      "wargear": [
        "This model’s macrostubber can be replaced with 1 phosphor serpenta.",
        "This model’s volkite blaster can be replaced with 1 eradication ray."
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of the Machine Cult",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability. If that unit has the Electro-Priests keyword, models in that unit have the Feel No Pain 4+ ability instead.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Data-spike",
            "description": "At the start of the Fight phase, you can select one enemy Vehicle unit within Engagement Range of this model’s unit and roll one D6: on a 4+, that enemy unit suffers D6 mortal wounds and, until the end of the phase, the Weapon Skill characteristic of melee weapons equipped by that enemy unit is worsened by 1.",
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
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Tech-priest Dominus",
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
              "name": "Eradication ray – dissipated",
              "keywords": [],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Eradication ray – focused",
              "keywords": [],
              "range": "12\"",
              "attacks": "D3",
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
              "name": "Macrostubber",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "5",
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
              "name": "Phosphor serpenta",
              "keywords": ["ignores cover"],
              "range": "18\"",
              "attacks": "1",
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
              "name": "Volkite blaster",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
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
              "name": "Omnissian axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Imperium",
        "Infantry",
        "Character",
        "Tech-Priest",
        "Dominus"
      ],
      "factions": ["Adeptus Mechanicus"],
      "leads": {
        "units": [
          "Corpuscarii Electro-Priests",
          "Fulgurite Electro-Priests",
          "Kataphron Breachers",
          "Kataphron Destroyers",
          "Skitarii Rangers",
          "Skitarii Vanguard"
        ],
        "extra": ""
      }
    },
    {
      "id": "8d5f2317-c4d1-5591-8a54-7f153f91e212",
      "name": "Tech-priest Enginseer",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Corpuscarii Electro-Priests ■ Fulgurite Electro-Priests ■ Kataphron Breachers ■ Kataphron Destroyers ■ Servitors ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Tech-Priest Enginseer"],
      "loadout": "This model is equipped with: archeotech pistol; Omnissian axe; servo-arm.",
      "wargear": ["None"],
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Enginseer",
            "description": "While this model is within 3\" of one or more friendly Adeptus Mechanicus Vehicle units, unless it is leading a unit, this model has the Lone Operative ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Omnissiah’s Blessing",
            "description": "In your Command phase, select one friendly Adeptus Mechanicus model within 3\" of this model. That model regains up to D3 lost wounds and, if it is a Vehicle model, until the start of your next Command phase, that model has a 4+ invulnerable save. Each model can only be selected for this ability once per Command phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Vengeance for the Omnissiah",
            "description": "If a friendly Adeptus Mechanicus Vehicle model is destroyed within 12\" of this model, until the end of the battle, this model’s Omnissian axe has an Attacks characteristic of 6.",
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Tech-priest Enginseer",
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
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Omnissian axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Servo-arm",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Imperium",
        "Infantry",
        "Character",
        "Tech-Priest",
        "Enginseer"
      ],
      "factions": ["Adeptus Mechanicus"],
      "leads": {
        "units": [
          "Corpuscarii Electro-Priests",
          "Fulgurite Electro-Priests",
          "Kataphron Breachers",
          "Kataphron Destroyers",
          "Servitors",
          "Skitarii Rangers",
          "Skitarii Vanguard"
        ],
        "extra": ""
      }
    },
    {
      "id": "7fc12fcd-9030-53ac-9a4c-bc5b861368f3",
      "name": "Tech-priest Manipulus",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Corpuscarii Electro-Priests ■ Fulgurite Electro-Priests ■ Kataphron Breachers ■ Kataphron Destroyers ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Tech-Priest Manipulus"],
      "loadout": "This model is equipped with: magnarail lance; Omnissian staff.",
      "wargear": [
        "This model’s magnarail lance can be replaced with 1 transonic cannon."
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
        "core": ["Leader"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Galvanic Field",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Defend the Divine Work",
            "description": "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, all models in this model’s unit have a 4+ invulnerable save.",
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
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Tech-priest Manipulus",
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
              "name": "Magnarail lance",
              "keywords": ["heavy"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
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
              "name": "Transonic cannon",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
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
              "name": "Omnissian staff",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Imperium",
        "Infantry",
        "Character",
        "Tech-Priest",
        "Manipulus"
      ],
      "factions": ["Adeptus Mechanicus"],
      "leads": {
        "units": [
          "Corpuscarii Electro-Priests",
          "Fulgurite Electro-Priests",
          "Kataphron Breachers",
          "Kataphron Destroyers",
          "Skitarii Rangers",
          "Skitarii Vanguard"
        ],
        "extra": ""
      }
    },
    {
      "id": "0f22e6a2-5162-5a89-847d-54d8b9a931f1",
      "name": "Technoarcheologist",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Corpuscarii Electro-Priests ■ Fulgurite Electro-Priests ■ Kataphron Breachers ■ Kataphron Destroyers ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Technoarcheologist"],
      "loadout": "This model is equipped with: archeotech pistol; servo-arc claw.",
      "wargear": ["None"],
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Seekers of Divine Arcana",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cogitative Instincts",
            "description": "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" horizontally of this model.",
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Technoarcheologist",
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
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Servo-arc claw",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
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
        "Character",
        "Imperium",
        "Tech-Priest",
        "Technoarcheologist"
      ],
      "factions": ["Adeptus Mechanicus"],
      "leads": {
        "units": [
          "Corpuscarii Electro-Priests",
          "Fulgurite Electro-Priests",
          "Kataphron Breachers",
          "Kataphron Destroyers",
          "Skitarii Rangers",
          "Skitarii Vanguard"
        ],
        "extra": ""
      }
    },
    {
      "id": "6917fb74-6102-5353-a204-babd803a7b27",
      "name": "Terrax-pattern Termite",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Terrax-pattern Termite"],
      "loadout": "This model is equipped with: Terrax melta cutter; 2 combi-bolters; Termite drill.",
      "wargear": [
        "This model’s 2 combi-bolters can be replaced with one of the following ◦ 2 heavy flamers ◦ 2 twin volkite chargers"
      ],
      "transport": "This model has a transport capacity of 12 Adeptus Mechanicus Infantry models. It cannot transport Jump Pack or Kataphron models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Termite Assault",
            "description": "This model must start the battle in Reserves, but neither it nor any units embarked within it are counted towards any limits placed on the maximum number of Reserves units you can start the battle with. This model can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. Any units embarked within this model can disembark after it has been set up on the battlefield, and if they do they must be set up more than 9\" away from all enemy models.",
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
          "m": "8\"",
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "6+",
          "oc": "2",
          "name": "Terrax-pattern Termite",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
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
              "name": "Terrax melta cutter",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "5",
              "skill": "4+",
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
              "name": "Twin volkite charger",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
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
              "name": "Termite drill",
              "keywords": ["anti-vehicle 3+"],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "14",
              "ap": "-2",
              "damage": "D3+3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Transport",
        "Dedicated Transport",
        "Terrax-pattern Termite"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "947ef412-f6fa-59a6-aecc-411cfbf76e3f",
      "name": "X-101",
      "source": "40k-10e",
      "faction_id": "AdM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 X-101 – Epic Hero"],
      "loadout": "This model is equipped with: grav-gun; hydraulic claw.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mindlock",
            "description": "While a Tech-Priest model is leading this model’s unit, improve the Ballistic Skill and Weapon Skill characteristics of this model’s weapons by 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Bound Creation",
            "description": "While a Tech-Priest model is leading this model’s unit, that Tech-Priest model has the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SERVITOR BODYGUARD",
            "description": "At the start of the Declare Battle Formations step, this model can join one other unit from your army that is being led by a Tech-Priest Infantry model. If it does, until the end of the battle, this model counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly.",
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
          "t": "3",
          "sv": "4+",
          "w": "3",
          "ld": "8+",
          "oc": "0",
          "name": "X-101",
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
              "name": "Grav-gun",
              "keywords": ["anti-vehicle 4+"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Hydraulic claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Character", "Epic Hero", "X-101"],
      "factions": ["Adeptus Mechanicus"]
    }
  ],
  "colours": {
    "banner": "#5d1615",
    "header": "#9f2628"
  }
}
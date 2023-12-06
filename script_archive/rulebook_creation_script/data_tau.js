window.data = window.data || {};
window.data.TAU = {
  "id": "TAU",
  "link": "https://game-datacards.eu",
  "name": "T'au Empire",
  "is_subfaction": false,
  "parent_id": "",
  "stratagems": [
    {
      "name": "STIMM INJECTORS",
      "cost": 1,
      "type": "Wargear",
      "detachment": "Kauyon",
      "turn": "either",
      "phase": ["fight", "shooting"],
      "fluff": "This system injects the battlesuit pilot with\na measured dose of chemical stimulants\nintended to temporarily accelerate their\nphysical aptitude and pain tolerances.",
      "when": "Fight phase or your opponent’s\nShooting phase, just after an enemy unit\nhas selected its targets.",
      "target": "One T’au Empire Battlesuit\nunit from your army that was selected as\nthe target of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase,\nmodels in your unit have the\nFeel No Pain 6+ ability.",
      "restrictions": "",
      "id": "33248460-d12d-595b-b857-adda1a25f7f1"
    },
    {
      "name": "STRIKE AND FADE",
      "cost": 2,
      "type": "Strategic Ploy",
      "detachment": "Kauyon",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "T’au are experts at harrying and\noutmanoeuvring their foes, bleeding them\nwith accurate fire before fading away into\nthe shadows and luring the foe into a trap.",
      "when": "Your Shooting phase.",
      "target": "One T’au Empire Battlesuit\nunit from your army that can Fly whose\nattacks have been resolved this phase.",
      "effect": "If your unit is not within\nEngagement Range of any enemy units, it\ncan make a Normal move. If it does, your\nunit cannot declare a charge this turn.",
      "restrictions": "",
      "id": "21eac06a-e7a0-5d21-96fa-dcbd850a335c"
    },
    {
      "name": "COORDINATE TO ENGAGE",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Kauyon",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "T’au combined arms groups are called\nHunter Cadres for good reason. Working in\nclose coordination, they hunt and destroy\nthe most dangerous enemy targets.",
      "when": "Your Shooting phase.",
      "target": "One T’au Empire unit from your\narmy that has just been selected as an\nObserver unit (see For the Greater Good).",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes an attack\nthat targets their Spotted unit, improve\nthe Ballistic Skill characteristic of that\nattack by 1 and, if your unit has the\nMarkerlight keyword, that attack has\nthe [IGNORES COVER] ability.",
      "restrictions": "",
      "id": "14235db9-83f6-5405-81f3-1508bfeb4bc3"
    },
    {
      "name": "POINT-BLANK AMBUSH",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Kauyon",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "The Kauyon teaches to lure the enemy\ninto deadly point-blank ambushes.",
      "when": "Your Shooting phase.",
      "target": "One T’au Empire unit from your\narmy that has not been selected to shoot\nthis phase.",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes a ranged\nattack that targets an enemy unit within\n9\", improve the Armour Penetration\ncharacteristic of that attack by 1.",
      "restrictions": "You cannot use this\nStratagem during the first or second\nbattle rounds.",
      "id": "13313fda-8145-557f-abce-6ce4c1d48de2"
    },
    {
      "name": "PHOTON GRENADES",
      "cost": 1,
      "type": "Wargear",
      "detachment": "Kauyon",
      "turn": "opponents",
      "phase": ["charge"],
      "fluff": "Hurling a volley of photon grenades, the\nT’au leave their enemies dazzled and\ndisorientated, unable to close the distance\ninto combat at a crucial moment.",
      "when": "Your opponent’s Charge phase,\njust after an enemy unit has declared\na charge.",
      "target": "One T’au Empire Grenades unit\nfrom your army that was selected as one\nof the targets of that charge.",
      "effect": "That enemy unit must\nimmediately take a Battle-shock test, and\nuntil the end of the phase, subtract 2 from\nCharge rolls made for that enemy unit.",
      "restrictions": "",
      "id": "ecb9ca87-4422-506b-8f47-7237df35cfbe"
    },
    {
      "name": "COMBAT EMBARKATION",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Kauyon",
      "turn": "opponents",
      "phase": ["charge"],
      "fluff": "Those who act as the lure in the\nKauyon must be ready to make a hasty\nwithdrawal once the enemy closes into\nkilling range, lest they be trapped.",
      "when": "Your opponent’s Charge phase,\njust after an enemy unit has declared\na charge.",
      "target": "One T’au Empire Infantry unit\nfrom your army that was selected as one\nof the targets of that charge, and one\nfriendly Transport.",
      "effect": "Your unit can embark within that\nTransport. If it does, your opponent can\nselect new targets for that charge.",
      "restrictions": "Every model in your T’au\nEmpire Infantry unit must be within\n3\" of that Transport and there must be\nsufficient transport capacity to embark\nthe entire unit.",
      "id": "67ca015e-733d-532c-a9d9-1270dddbc17a"
    }
  ],
  "enhancements": [
    {
      "name": "Exemplar of the Kauyon",
      "description": "T’au Empire model only (excluding Kroot Shaper models). While the bearer is leading a unit, that unit’s Kauyon Detachment rule takes effect from the second battle round onwards instead of the third.",
      "keywords": ["T’au Empire"],
      "excludes": ["Kroot Shaper"],
      "cost": "15"
    },
    {
      "name": "Precision of the Patient Hunter",
      "description": "T’au Empire model only. Each time the bearer makes a ranged attack, add 1 to the Hit roll. From the third battle round onwards, add 1 to the Wound roll as well.",
      "keywords": ["T’au Empire"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "Puretide Engram Neurochip",
      "description": "T’au Empire model only (excluding Kroot Shaper models). Once per turn, you can use a Stratagem on the bearer’s unit, even if you have already used that Stratagem on a different unit this phase.",
      "keywords": ["T’au Empire"],
      "excludes": ["Kroot Shaper"],
      "cost": "25"
    },
    {
      "name": "Through Unity, Devastation",
      "description": "T’au Empire model only (excluding Kroot Shaper models). While this model is leading a unit, each time that unit is an Observer unit, until the end of the phase, ranged weapons equipped by models in their Guided unit have the [LETHAL HITS] ability while targeting their Spotted unit.",
      "keywords": ["T’au Empire"],
      "excludes": ["Kroot Shaper"],
      "cost": "20"
    }
  ],
  "datasheets": [
    {
      "id": "79a0a27c-d84c-5e81-9ca3-978a916859c7",
      "name": "Aun’shi",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Breacher Team ■ Kroot Carnivores ■ Strike Team",
      "composition": ["1 Aun’Shi – Epic Hero"],
      "loadout": "This model is equipped with: Fidelity.",
      "wargear": ["None"],
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
            "name": "Inspirational Defiance",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Martial Warrior",
            "description": "Each time this model is selected to fight, select one of the following abilities to be active while resolving those attacks: ■ Direct Grace: Fidelity has the [PRECISION] ability. ■  Forceful Strike: Fidelity has the [DEVASTATING WOUNDS] ability. ■  Whirling Stance: Fidelity has the [SUSTAINED HITS 2] ability instead of [SUSTAINED HITS 1].",
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
          "name": "Aun’shi",
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
              "name": "Fidelity",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Ethereal", "Aun’Shi"],
      "factions": ["T’au Empire"],
      "leads": {
        "units": ["Breacher Team", "Kroot Carnivores", "Strike Team"],
        "extra": ""
      }
    },
    {
      "id": "94e7039f-5196-5e24-86f7-61ea679eaf65",
      "name": "Aun’va",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Aun’Va – Epic Hero", "2 Ethereal Guards"],
      "loadout": "Aun’Va is equipped with: close combat weapon. Each Ethereal Guard is equipped with: supreme honour blade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Lone Operative"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Duality Shield",
            "description": "Once per battle, each time an attack targets this unit, it can use this ability. If it does, until the end of the phase, models in this unit have a 2+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Paradox of Duality",
            "description": "Each time an attack targets this unit, subtract 1 from the Hit roll and subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Supreme Loyalty (Aura)",
            "description": "While a friendly T’au Empire unit is within 6\" of this unit, each time that unit takes a Battle-shock or Leadership test, add 1 to that test.",
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
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "AUN’VA",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "ETHEREAL GUARD",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "6+",
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
              "name": "Supreme honour blade",
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
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "AUN'VA:",
        "Character",
        "Epic Hero",
        "Ethereal",
        "Aun'Va"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "be5c6c13-d32a-554e-b58b-adc3554c65d3",
      "name": "Ax-1-0 Tiger Shark",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 AX-1-0 Tiger Shark"],
      "loadout": "This model is equipped with: 2 burst cannons; 2 missile pods; twin heavy rail cannon; armoured hull.",
      "wargear": [
        "This model can be equipped with up to 6 seeker missiles.",
        "This model’s 2 burst cannons can be replaced with 2 cyclic ion blasters."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "315",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Titan Hunter",
            "description": "This model’s twin heavy rail cannon and seeker missiles have the [ANTI-TITANIC 3+] ability while targeting a unit within half range.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "11",
          "sv": "3+",
          "w": "18",
          "ld": "7+",
          "oc": "0",
          "name": "Ax-1-0 Tiger Shark",
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
              "name": "Burst cannon",
              "keywords": [],
              "range": "18\"",
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
              "name": "Cyclic ion blaster – standard",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Cyclic ion blaster – overcharge",
              "keywords": ["hazardous"],
              "range": "18\"",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Twin heavy rail cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "120\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "26",
              "ap": "-5",
              "damage": "12"
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
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Aircraft", "Fly", "Ax-1-0 Tiger Shark"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "ab2b7e24-77d1-5d91-b6bb-51e9da2fa2b8",
      "name": "Barracuda",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Barracuda"],
      "loadout": "This model is equipped with: 2 long-barrelled burst cannons; swiftstrike burst cannon; 2 missile pods; armoured hull.",
      "wargear": [
        "This model’s 2 long-barrelled burst cannons can be replaced with 2 cyclic ion blasters.",
        "This model’s swiftstrike burst cannon can be replaced with one of the following: ◦ 1 ion cannon ◦  1 swiftstrike railgun",
        "This model can be equipped with up to 4 seeker missiles."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Agile Dogfighter",
            "description": "Each time an attack targets this model, subtract 1 from the Hit roll.",
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
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "0",
          "name": "Barracuda",
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
              "name": "Cyclic ion blaster – standard",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Cyclic ion blaster – overcharge",
              "keywords": ["hazardous"],
              "range": "18\"",
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
              "name": "Ion cannon – standard",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Ion cannon – overcharge",
              "keywords": ["blast", "hazardous"],
              "range": "60\"",
              "attacks": "D6+3",
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
              "name": "Long-barrelled burst cannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "8",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Swiftstrike burst cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "16",
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
              "name": "Swiftstrike railgun",
              "keywords": ["devastating wounds"],
              "range": "72\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "20",
              "ap": "-5",
              "damage": "D6+6"
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
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Aircraft", "Fly", "Barracuda"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "57eb3cb0-89ab-5eb8-a5cf-39b7bcf60fd1",
      "name": "Breacher Team",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Breacher Fire Warrior Shas’ui",
        "9 Breacher Fire Warriors"
      ],
      "loadout": "Every model is equipped with: pulse blaster; pulse pistol; close combat weapon.",
      "wargear": [
        "The Breacher Fire Warrior Shas’ui can be equipped with up to two of the following, and can take duplicates: ◦ 1 guardian drone* (it cannot take duplicates of this piece of wargear) ◦ 1 gun drone* ◦ 1 marker drone* ◦ 1 shield drone* *  This drone’s rules can be found on the T’au Empire Drones card."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "115",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Breach and Clear",
            "description": "Each time a model in this unit makes a ranged attack that targets an enemy unit within range of an objective marker, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "DS8 Support Turret",
            "description": "In your Movement phase, if this unit Remains Stationary, until the start of your next Movement phase, its Fire Warrior Shas’ui model is equipped with the support turret missile system weapon. Designer’s Note: Place a DS8 Support Turret token next to this unit to remind you.",
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
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Breacher Team",
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
              "name": "Pulse blaster",
              "keywords": ["assault"],
              "range": "10\"",
              "attacks": "2",
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
              "name": "Pulse pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Support turret missile system",
              "keywords": ["indirect fire", "twin-linked"],
              "range": "30\"",
              "attacks": "2",
              "skill": "5+",
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
              "attacks": "1",
              "skill": "5+",
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
        "Markerlight",
        "Fire Warrior",
        "Breacher Team"
      ],
      "factions": ["T’au Empire"],
      "leadBy": ["Aun’shi", "Cadre Fireblade", "Ethereal"]
    },
    {
      "id": "76bc5902-8376-5020-8d89-ccacd932f771",
      "name": "Broadside Battlesuits",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Broadside Shas’vre", "0-2 Broadside Shas’ui"],
      "loadout": "Every model is equipped with: heavy rail rifle; crushing bulk.",
      "wargear": [
        "Any number of models can each have their heavy rail rifle replaced with 1 high-yield missile pods.",
        "Any number of models can each be equipped with up to two of the following, but cannot take duplicates: ◦ 1 battlesuit support system ◦ 1 seeker missile ◦ 1 twin plasma rifle* ◦ 1 twin smart missile system* ◦ 1 weapon support system",
        "Any number of models can each be equipped with up to two of the following, and can take duplicates: ◦ 1 gun drone** ◦ 1 marker drone** ◦ 1 missile drone** ◦ 1 shield drone** * No model can be equipped with both a twin plasma rifle and twin smart missile system at the same time. * * This drone’s rules can be found on the T’au Empire Drones card."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "110",
          "active": true
        },
        {
          "models": "2",
          "cost": "220",
          "active": true
        },
        {
          "models": "3",
          "cost": "330",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Battlesuit Support System",
            "description": "The bearer’s unit is eligible to shoot in a turn in which it Fell Back, but when doing so only models equipped with this wargear can make ranged attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weapon Support System",
            "description": "Each time the bearer makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Advanced Armour",
            "description": "Models in this unit have the Feel No Pain 4+ ability against mortal wounds.",
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
          "sv": "2+",
          "w": "8",
          "ld": "7+",
          "oc": "2",
          "name": "Broadside Battlesuits",
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
              "name": "Heavy rail rifle",
              "keywords": ["heavy", "devastating wounds"],
              "range": "60\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "12",
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
              "name": "High-yield missile pods",
              "keywords": ["twin-linked"],
              "range": "30\"",
              "attacks": "6",
              "skill": "4+",
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
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Twin plasma rifle",
              "keywords": ["twin-linked"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
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
              "name": "Twin smart missile system",
              "keywords": ["indirect fire", "twin-linked"],
              "range": "30\"",
              "attacks": "3",
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
              "name": "Crushing bulk",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Battlesuit", "Broadside"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "ed024631-1f7d-5c41-b0c1-76d9bff0685c",
      "name": "Cadre Fireblade",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Breacher Team ■ Strike Team",
      "composition": ["1 Cadre Fireblade"],
      "loadout": "This model is equipped with: Fireblade pulse rifle; close combat weapon.",
      "wargear": [
        "This model can be equipped with up to two of the following, and can take duplicates: ◦ 1 gun drone* ◦ 1 marker drone* ◦ 1 shield drone* *  This drone’s rules can be found on the T’au Empire Drones card."
      ],
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
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Volley Fire",
            "description": "While this model is leading a unit, add 1 to the Attacks characteristic of ranged weapons equipped by models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Crack Shot",
            "description": "Each time this model makes a ranged attack, on a Critical Wound, that attack has an Armour Penetration characteristic of -3.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Cadre Fireblade",
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
              "name": "Fireblade pulse rifle",
              "keywords": ["rapid fire 1"],
              "range": "30\"",
              "attacks": "1",
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
      "keywords": ["Infantry", "Character", "Grenades", "Cadre Fireblade"],
      "factions": ["T’au Empire"],
      "leads": {
        "units": ["Breacher Team", "Strike Team"],
        "extra": ""
      }
    },
    {
      "id": "5ed6cc39-b7b5-57b6-a635-7aaaf08610be",
      "name": "Commander Farsight",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Crisis Battlesuits",
      "composition": ["1 Commander Farsight – Epic Hero"],
      "loadout": "This model is equipped with: high-intensity plasma rifle; Dawn Blade.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Way of the Short Blade",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack that targets an enemy unit within 9\", add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Aggressive Offensive",
            "description": "Once per battle, when this model is selected to fight, it can use this ability. If it does, until the end of the phase, each time it makes an attack, you can re-roll the Hit roll and you can re-roll the Wound roll.",
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
          "t": "5",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Commander Farsight",
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
              "name": "High-intensity plasma rifle",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Dawn Blade – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Dawn Blade – sweep",
              "keywords": [],
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
        "Vehicle",
        "Walker",
        "Fly",
        "Character",
        "Epic Hero",
        "Battlesuit",
        "Commander Farsight"
      ],
      "factions": ["T’au Empire"],
      "leads": {
        "units": ["Crisis Battlesuits"],
        "extra": ""
      }
    },
    {
      "id": "edce4f41-59d3-5573-a8e7-611a69c395a2",
      "name": "Commander In Coldstar Battlesuit",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Crisis Battlesuits",
      "composition": ["1 Commander in Coldstar Battlesuit"],
      "loadout": "This model is equipped with: high-output burst cannon; battlesuit fists.",
      "wargear": [
        "This model’s high-output burst cannon can be replaced with one of the following: ◦ 1 airbursting fragmentation projector* ◦ 1 battlesuit support system* ◦ 1 burst cannon ◦ 1 cyclic ion blaster ◦ 1 fusion blaster ◦ 1 missile pod ◦ 1 plasma rifle ◦ 1 shield generator* ◦ 1 T’au flamer ◦ 1 weapon support system*",
        "This model can be equipped with up to two of the following, and can take duplicates: ◦ 1 gun drone**  ◦ 1 marker drone** ◦ 1 shield drone**",
        "This model can be equipped with up to three of the following, and can take duplicates: ◦ 1 airbursting fragmentation projector* ◦ 1 battlesuit support system* ◦ 1 burst cannon ◦ 1 cyclic ion blaster ◦ 1 fusion blaster ◦ 1 missile pod ◦ 1 plasma rifle ◦ 1 shield generator* ◦ 1 T’au flamer ◦ 1 weapon support system* *  This model cannot have duplicates of these pieces of wargear. **  This drone’s rules can be found on the T’au Empire Drones card."
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
        "wargear": [
          {
            "name": "Battlesuit Support System",
            "description": "The bearer’s unit is eligible to shoot in a turn in which it Fell Back, but when doing so only models equipped with this wargear can make ranged attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shield Generator",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weapon Support System",
            "description": "Each time the bearer makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Coldstar Commander",
            "description": "While this model is leading a unit, models in that unit have a Move characteristic of 12\" and ranged weapons equipped by models in that unit have the [ASSAULT] ability.",
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
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Commander In Coldstar Battlesuit",
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
              "name": "Airbursting fragmentation projector",
              "keywords": ["blast", "indirect fire"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Burst cannon",
              "keywords": [],
              "range": "18\"",
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
              "name": "Cyclic ion blaster – standard",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Cyclic ion blaster – overcharge",
              "keywords": ["hazardous"],
              "range": "18\"",
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
              "name": "Fusion blaster",
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
              "name": "High-output burst cannon",
              "keywords": [],
              "range": "18\"",
              "attacks": "8",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
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
              "name": "Plasma rifle",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
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
              "name": "T’au flamer",
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
              "name": "Battlesuit fists",
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
        "Fly",
        "Character",
        "Battlesuit",
        "Commander in Coldstar Battlesuit"
      ],
      "factions": ["T’au Empire"],
      "leads": {
        "units": ["Crisis Battlesuits"],
        "extra": ""
      }
    },
    {
      "id": "1a6c4bd5-4da6-5918-9c58-43b461ceda0f",
      "name": "Commander In Crisis Battlesuit",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Crisis Battlesuits",
      "composition": ["1 Commander in Crisis Battlesuit"],
      "loadout": "This model is equipped with: burst cannon; battlesuit fists.",
      "wargear": [
        "This model’s burst cannon can be replaced with one of the following: ◦ 1 airbursting fragmentation projector* ◦ 1 battlesuit support system* ◦ 1 cyclic ion blaster ◦ 1 fusion blaster ◦ 1 missile pod ◦ 1 plasma rifle ◦ 1 shield generator* ◦ 1 T’au flamer ◦ 1 weapon support system*",
        "This model can be equipped with up to two of the following, and can take duplicates: ◦ 1 gun drone** ◦ 1 marker drone**  ◦ 1 shield drone**",
        "This model can be equipped with up to three of the following, and can take duplicates: ◦ 1 airbursting fragmentation projector* ◦ 1 battlesuit support system* ◦ 1 burst cannon ◦ 1 cyclic ion blaster ◦ 1 fusion blaster ◦ 1 missile pod ◦ 1 plasma rifle ◦ 1 shield generator* ◦ 1 T’au flamer ◦ 1 weapon support system* *  This model cannot have duplicates of these pieces of wargear. **  This drone’s rules can be found on the T’au Empire Drones card."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Battlesuit Support System",
            "description": "The bearer’s unit is eligible to shoot in a turn in which it Fell Back, but when doing so only models equipped with this wargear can make ranged attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shield Generator",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weapon Support System",
            "description": "Each time the bearer makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Crisis Commander",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
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
          "t": "5",
          "sv": "3+",
          "w": "5",
          "ld": "7+",
          "oc": "2",
          "name": "Commander In Crisis Battlesuit",
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
              "name": "Airbursting fragmentation projector",
              "keywords": ["blast", "indirect fire"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Burst cannon",
              "keywords": [],
              "range": "18\"",
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
              "name": "Cyclic ion blaster – standard",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Cyclic ion blaster – overcharge",
              "keywords": ["hazardous"],
              "range": "18\"",
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
              "name": "Fusion blaster",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
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
              "name": "Plasma rifle",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
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
              "name": "T’au flamer",
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
              "name": "Battlesuit fists",
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
        "Fly",
        "Character",
        "Battlesuit",
        "Commander in Crisis Battlesuit"
      ],
      "factions": ["T’au Empire"],
      "leads": {
        "units": ["Crisis Battlesuits"],
        "extra": ""
      }
    },
    {
      "id": "c9f00aee-454f-5e7f-8923-b7687dbdedee",
      "name": "Commander In Enforcer Battlesuit",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Crisis Battlesuits",
      "composition": ["1 Commander in Enforcer Battlesuit"],
      "loadout": "This model is equipped with: burst cannon; battlesuit fists.",
      "wargear": [
        "This model’s burst cannon can be replaced with one of the following: ◦ 1 airbursting fragmentation projector* ◦ 1 battlesuit support system* ◦ 1 cyclic ion blaster ◦ 1 fusion blaster ◦ 1 missile pod ◦ 1 plasma rifle ◦ 1 shield generator* ◦ 1 T’au flamer ◦ 1 weapon support system*",
        "This model can be equipped with up to two of the following, and can take duplicates: ◦ 1 gun drone** ◦ 1 marker drone**  ◦ 1 shield drone**",
        "This model can be equipped with up to three of the following, and can take duplicates: ◦ 1 airbursting fragmentation projector* ◦ 1 battlesuit support system* ◦ 1 burst cannon ◦ 1 cyclic ion blaster ◦ 1 fusion blaster ◦ 1 missile pod ◦ 1 plasma rifle ◦ 1 shield generator* ◦ 1 T’au flamer ◦ 1 weapon support system* *  This model cannot have duplicates of these pieces of wargear. **  This drone’s rules can be found on the T’au Empire Drones card."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "135",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Battlesuit Support System",
            "description": "The bearer’s unit is eligible to shoot in a turn in which it Fell Back, but when doing so only models equipped with this wargear can make ranged attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shield Generator",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weapon Support System",
            "description": "Each time the bearer makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Enforcer Commander",
            "description": "While this model is leading a unit, each time a ranged attack targets that unit, worsen the Armour Penetration characteristic of that attack by 1.",
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
          "t": "5",
          "sv": "2+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Commander In Enforcer Battlesuit",
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
              "name": "Airbursting fragmentation projector",
              "keywords": ["blast", "indirect fire"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Burst cannon",
              "keywords": [],
              "range": "18\"",
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
              "name": "Cyclic ion blaster – standard",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Cyclic ion blaster – overcharge",
              "keywords": ["hazardous"],
              "range": "18\"",
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
              "name": "Fusion blaster",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
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
              "name": "Plasma rifle",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
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
              "name": "T’au flamer",
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
              "name": "Battlesuit fists",
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
        "Fly",
        "Character",
        "Battlesuit",
        "Commander in Enforcer Battlesuit"
      ],
      "factions": ["T’au Empire"],
      "leads": {
        "units": ["Crisis Battlesuits"],
        "extra": ""
      }
    },
    {
      "id": "ada4d0e5-17fc-5789-bb6c-ae0457815a4a",
      "name": "Commander Shadowsun",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Commander Shadowsun – Epic Hero"],
      "loadout": "This model is equipped with: flechette launcher; 2 high-energy fusion blasters; light missile pod; pulse pistol; battlesuit fists; advanced guardian drone; command-link drone.",
      "wargear": ["None"],
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
            "name": "Advanced Guardian Drone",
            "description": "Each time a ranged attack targets the bearer, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Command-link Drone (Aura)",
            "description": "While a friendly T’au Empire unit is within 6\" of the bearer, each time you select that unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Infiltrators", "Lone Operative", "Stealth"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Agile Combatant",
            "description": "This model is eligible to shoot in a turn in which it Fell Back.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Hero of the Empire (Aura)",
            "description": "While a friendly T’au Empire unit is within 6\" of this model, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
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
          "m": "10\"",
          "t": "4",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Commander Shadowsun",
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
              "name": "Flechette launcher",
              "keywords": [],
              "range": "18\"",
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
              "name": "High-energy fusion blaster",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "10",
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
              "name": "Light missile pod",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Pulse pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Battlesuit fists",
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
        "Infantry",
        "Fly",
        "Character",
        "Epic Hero",
        "Battlesuit",
        "Commander Shadowsun"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "d578844a-9331-50a8-a191-a6ac1e79138b",
      "name": "Crisis Battlesuits",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Crisis Shas’vre", "2-5 Crisis Shas’ui"],
      "loadout": "Every model is equipped with: burst cannon; battlesuit fists.",
      "wargear": [
        "Any number of models can each have their burst cannon replaced with one of the following: ◦ 1 airbursting fragmentation projector* ◦ 1 battlesuit support system* ◦ 1 cyclic ion blaster ◦ 1 fusion blaster ◦ 1 missile pod ◦ 1 plasma rifle ◦ 1 shield generator* ◦ 1 T’au flamer ◦ 1 weapon support system*",
        "Any number of models can be equipped with up to two of the following, and can take duplicate ◦ 1 gun drone**  ◦ 1 marker drone**  ◦ 1 shield drone**",
        "Any number of models can each be equipped with up to three of the following, and can take duplicates***: ◦ 1 airbursting fragmentation projector* ◦ 1 battlesuit support system* ◦ 1 burst cannon ◦ 1 cyclic ion blaster ◦ 1 fusion blaster ◦ 1 missile pod ◦ 1 plasma rifle ◦ 1 shield generator* ◦ 1 T’au flamer  s:  ◦ 1 weapon support system* *  Each model cannot have duplicates of these pieces of wargear.  **  This drone’s rules can be found on the T’au Empire Drones card. ***  Each model cannot be equipped with more than 3 ranged weapons."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "195",
          "active": true
        },
        {
          "models": "6",
          "cost": "390",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Battlesuit Support System",
            "description": "The bearer’s unit is eligible to shoot in a turn in which it Fell Back, but when doing so only models equipped with this wargear can make ranged attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shield Generator",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weapon Support System",
            "description": "Each time the bearer makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Turbo-jets",
            "description": "Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit.",
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
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Crisis Battlesuits",
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
              "name": "Airbursting fragmentation projector",
              "keywords": ["blast", "indirect fire"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Burst cannon",
              "keywords": [],
              "range": "18\"",
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
              "name": "Cyclic ion blaster – standard",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Cyclic ion blaster – overcharge",
              "keywords": ["hazardous"],
              "range": "18\"",
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
              "name": "Fusion blaster",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Plasma rifle",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
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
              "name": "T’au flamer",
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
              "name": "Battlesuit fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Fly", "Battlesuit", "Crisis"],
      "factions": ["T’au Empire"],
      "leadBy": [
        "Commander Farsight",
        "Commander In Coldstar Battlesuit",
        "Commander In Crisis Battlesuit",
        "Commander In Enforcer Battlesuit"
      ]
    },
    {
      "id": "650a3124-c2d4-526d-9ac6-11529ea119b5",
      "name": "Darkstrider",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Pathfinder Team",
      "composition": ["1 Darkstrider – Epic Hero"],
      "loadout": "This model is equipped with: Shade; close combat weapon.",
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
        "core": ["Infiltrators", "Leader", "Scouts 7\""],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Structural Analyser",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Jammer Array",
            "description": "Enemy units that are set up on the battlefield from Reserves cannot be set up within 12\" of this model.",
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Darkstrider",
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
              "name": "Shade",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
              "skill": "2+",
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
        "Character",
        "Epic Hero",
        "Markerlight",
        "Darkstrider"
      ],
      "factions": ["T’au Empire"],
      "leads": {
        "units": ["Pathfinder Team"],
        "extra": ""
      }
    },
    {
      "id": "703c9ce7-b3d1-533c-8bb6-3183b1e44a52",
      "name": "Devilfish",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Devilfish"],
      "loadout": "This model is equipped with: accelerator burst cannon; 2 twin pulse carbines; armoured hull.",
      "wargear": [
        "This model’s 2 twin pulse carbines can be replaced with 2 twin smart missile systems.",
        "This model can be equipped with up to 2 seeker missiles."
      ],
      "transport": "This model has a transport capacity of 12 T’au Empire Infantry models. It cannot transport Battlesuit, Kroot or Vespid Stingwings models.",
      "points": [
        {
          "models": "1",
          "cost": "95",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rapid Deployment",
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
          "w": "13",
          "ld": "7+",
          "oc": "2",
          "name": "Devilfish",
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
              "name": "Accelerator burst cannon",
              "keywords": [],
              "range": "18\"",
              "attacks": "4",
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
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Twin pulse carbine",
              "keywords": ["assault", "twin-linked"],
              "range": "20\"",
              "attacks": "2",
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
              "name": "Twin smart missile system",
              "keywords": ["indirect fire", "twin-linked"],
              "range": "30\"",
              "attacks": "2",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
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
        "Transport",
        "Dedicated Transport",
        "Devilfish"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "a7202c4d-11b6-5049-b853-6a5b1ac5190c",
      "name": "Drone Sentry Turret",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Drone Sentry Turret"],
      "loadout": "This model is equipped with: twin plasma rifle.",
      "wargear": [
        "This model’s twin plasma rifle can be replaced with one of the following: ◦ 1 twin burst cannon ◦ 1 twin fusion blaster ◦ 1 twin missile pod"
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
            "name": "Sentinel Protocols",
            "description": "Each time you select this Fortification for the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ when resolving that Stratagem.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Reinforced Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
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
          "t": "8",
          "sv": "4+",
          "w": "4",
          "ld": "8+",
          "oc": "0",
          "name": "Drone Sentry Turret",
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
              "name": "Twin burst cannon",
              "keywords": ["twin-linked"],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Twin fusion blaster",
              "keywords": ["melta 2", "twin-linked"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Twin missile pod",
              "keywords": ["twin-linked"],
              "range": "30\"",
              "attacks": "2",
              "skill": "5+",
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
              "name": "Twin plasma rifle",
              "keywords": ["twin-linked"],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Vehicle", "Drone Sentry Turret"],
      "factions": ["T'au Empire"]
    },
    {
      "id": "dddc74b8-f810-53b6-a7c4-d2086616d811",
      "name": "Ethereal",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Breacher Team ■ Strike Team",
      "composition": ["1 Ethereal"],
      "loadout": "This model is equipped with: honour stave.",
      "wargear": [
        "This model can be equipped with 1 hover drone.",
        "This model can be equipped with up to two of the following, and can take duplicates: ◦ 1 gun drone* ◦ 1 marker drone* ◦ 1 shield drone* * This drone’s rules can be found on the T’au Empire Drones card."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "50",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Hover Drone",
            "description": "The bearer can Fly and has a Move characteristic of 10\".",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Failure Is Not an Option",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Coordinated Leadership",
            "description": "In your Command phase, roll one D6: on a 4+, you gain 1CP.",
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
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Ethereal",
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
              "name": "Honour stave",
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
      "keywords": ["Infantry", "Character", "Ethereal"],
      "factions": ["T’au Empire"],
      "leads": {
        "units": ["Breacher Team", "Strike Team"],
        "extra": ""
      }
    },
    {
      "id": "7764dea0-8567-5a1b-9cb1-4c940cb496e0",
      "name": "Firesight Team",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Firesight Marksman"],
      "loadout": "This model is equipped with: longshot pulse rifles; pulse pistol; close combat weapons. Designer’s Note: The Firesight Marksman model and sniper drone models are treated as a single model for all rules purposes. All distances are measured to and from the Farsight Marksman model. The sniper drone models do not count as models for any rules purposes.",
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
        "core": ["Infiltrators", "Lone Operative", "Stealth"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Precise Targeting",
            "description": "While this model is a Guided unit, each time it makes an attack that targets its Spotted unit, you can re-roll the Hit roll.",
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
          "w": "4",
          "ld": "7+",
          "oc": "3",
          "name": "Firesight Team",
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
              "name": "Longshot pulse rifles",
              "keywords": ["heavy", "precision"],
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
              "name": "Pulse pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Markerlight", "Firesight Team"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "bcccf73e-41ec-5d85-9dfb-bbc9e61ff93b",
      "name": "Ghostkeel Battlesuit",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Ghostkeel Battlesuit"],
      "loadout": "This model is equipped with: fusion collider; twin T’au flamer; Ghostkeel fists.",
      "wargear": [
        "This model’s fusion collider can be replaced with 1 cyclic ion raker.",
        "This model’s twin T’au flamer can be replaced with one of the following: ◦ 1 twin fusion blaster ◦ 1 twin burst cannon",
        "This model can be equipped with one battlesuit support system."
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
        "wargear": [
          {
            "name": "Battlesuit Support System",
            "description": "The bearer is eligible to shoot in a turn in which it Fell Back but it loses the Smoke keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [
          "Deadly Demise D3",
          "Infiltrators",
          "Lone Operative",
          "Stealth"
        ],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Stealth Drones",
            "description": "Twice per battle, after an attack has been allocated to this model, you can change the Damage characteristic of that attack to 0. Designer’s Note: Place two Stealth Drone tokens next to the unit, removing one each time this ability has been used.",
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
          "t": "8",
          "sv": "2+",
          "w": "12",
          "ld": "7+",
          "oc": "3",
          "name": "Ghostkeel Battlesuit",
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
              "name": "Cyclic ion raker – standard",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Cyclic ion raker – overcharge",
              "keywords": ["hazardous"],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Fusion collider",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Twin burst cannon",
              "keywords": ["twin-linked"],
              "range": "18\"",
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
              "name": "Twin fusion blaster",
              "keywords": ["melta 2", "twin-linked"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Twin T’au flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
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
              "name": "Ghostkeel fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Fly",
        "Smoke",
        "Battlesuit",
        "Ghostkeel"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "edc1f39f-5c9a-56fa-ac19-79293f6d8443",
      "name": "Great Knarloc",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Great Knarloc"],
      "loadout": "This model is equipped with: Great Knarloc beak and talons.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 Kroot bolt thrower and 1 Kroot rifle ◦ 1 twin Kroot gun ◦ 1 baggage harness"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Baggage Harness (Aura)",
            "description": "While a friendly Kroot unit is within 3\" of the bearer, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
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
            "name": "Loping Stride",
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
          "m": "9\"",
          "t": "8",
          "sv": "4+",
          "w": "10",
          "ld": "7+",
          "oc": "3",
          "name": "Great Knarloc",
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
              "name": "Kroot bolt thrower",
              "keywords": ["hooked"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ],
          "abilities": [
            {
              "name": "Hooked",
              "description": "Each time the bearer makes an attack with this weapon that targets a Monster or Vehicle unit, if a hit is scored, until the end of the turn, if the bearer selects that unit as a target of a charge, add 2 to Charge rolls made for the bearer and enemy units cannot use the Fire Overwatch Stratagem to shoot at the bearer.",
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
              "name": "Kroot rifle",
              "keywords": ["rapid fire 1"],
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
              "name": "Twin Kroot gun",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "7",
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
              "name": "Great Knarloc beak and talons",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
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
              "name": "Kroot rifle",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Kroot", "Great Knarloc"],
      "factions": ["T'au Empire"]
    },
    {
      "id": "b680d88d-c028-50bc-a53e-8d56fef86e16",
      "name": "Hammerhead Gunship",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hammerhead Gunship"],
      "loadout": "This model is equipped with: 1 railgun; 2 twin pulse carbines; armoured hull.",
      "wargear": [
        "This model’s railgun can be replaced with 1 ion cannon.",
        "This model’s 2 twin pulse carbines can be replaced with one of the following: ◦ 2 accelerator burst cannons ◦ 2 twin smart missile systems",
        "This model can be equipped with up to 2 seeker missiles."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "145",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Armour Hunter",
            "description": "Each time this model makes an attack that targets a Monster or Vehicle, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Targeting Array",
            "description": "Each time this model is selected to shoot, you can re-roll one Hit roll or you can re-roll one Wound roll when resolving those attacks.",
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
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "3",
          "name": "Hammerhead Gunship",
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
              "name": "Accelerator burst cannon",
              "keywords": [],
              "range": "18\"",
              "attacks": "4",
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
              "name": "Ion cannon – standard",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Ion cannon – overcharge",
              "keywords": ["blast", "hazardous"],
              "range": "60\"",
              "attacks": "D6+3",
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
              "name": "Railgun",
              "keywords": ["heavy", "devastating wounds"],
              "range": "72\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "20",
              "ap": "-5",
              "damage": "D6+6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Twin pulse carbine",
              "keywords": ["twin-linked"],
              "range": "20\"",
              "attacks": "2",
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
              "name": "Twin smart missile system",
              "keywords": ["indirect fire", "twin-linked"],
              "range": "30\"",
              "attacks": "3",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Hammerhead Gunship"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "baee640e-ac9a-5878-bb9a-2cde38492b05",
      "name": "Heavy Gun Drones",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2 Heavy Gun Drones"],
      "loadout": "Every model is equipped with: burst cannon; markerlight; close combat weapon.",
      "wargear": [
        "Any number of models can each have their burst cannon and markerlight replaced with 1 twin burst cannon."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Markerlight",
            "description": "The bearer has the Markerlight keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Drone Escort",
            "description": "Once per turn, in your opponent’s Shooting phase, when a friendly T'au Empire unit within 6\" of this unit is selected as the target of an attack, one unit from your army with this ability can use it. If it does, after that enemy unit has finished making its attacks, the unit using this ability can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target).",
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
          "t": "5",
          "sv": "4+",
          "w": "2",
          "ld": "8+",
          "oc": "0",
          "name": "Heavy Gun Drones",
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
              "name": "Burst cannon",
              "keywords": [],
              "range": "18\"",
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
              "name": "Twin burst cannon",
              "keywords": ["twin-linked"],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
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
              "attacks": "1",
              "skill": "6+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Heavy Gun Drones"],
      "factions": ["T'au Empire"]
    },
    {
      "id": "f4608d96-c857-51fd-be13-11ab6d07bf0e",
      "name": "Knarloc Riders",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Knarloc Riders"],
      "loadout": "Every model is equipped with: Kroot rifle; Knarloc beak and talons.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 7\"", "Stealth"],
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
            "name": "Thunderous Pounce",
            "description": "Each time this unit ends a Charge move, until the end of the turn, Knarloc beak and talons equipped by models in this unit have the [LANCE] ability.",
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
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Knarloc Riders",
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
              "name": "Kroot rifle",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Knarloc beak and talons",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Kroot rifle",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Kroot", "Knarloc Riders"],
      "factions": ["T'au Empire"]
    },
    {
      "id": "9a005efa-4ad4-5aac-9fe5-fe77a7b0d69c",
      "name": "Kroot Carnivores",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["10-20 Kroot Carnivores"],
      "loadout": "Every model is equipped with: Kroot rifle.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "75",
          "active": true
        },
        {
          "models": "20",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 7\"", "Stealth"],
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
            "name": "Grisly Feast",
            "description": "If this unit destroys an enemy unit in the Fight phase, until the end of the battle, models in this unit have the Feel No Pain 5+ ability.",
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
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Kroot Carnivores",
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
              "name": "Kroot rifle",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Kroot rifle",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Kroot", "Carnivores"],
      "factions": ["T’au Empire"],
      "leadBy": ["Aun’shi", "Kroot Shaper"]
    },
    {
      "id": "26f6d9d6-8272-59f8-b141-c4f8fb760593",
      "name": "Kroot Farstalkers",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Kroot Kill-broker",
        "9 Kroot Farstalkers",
        "2 Kroot Hounds"
      ],
      "loadout": "The Kroot Kill-broker is equipped with: Farstalker firearm; Kroot pistol; ritual blade. Every Kroot Farstalker is equipped with: Farstalker firearm; Kroot pistol; close combat weapon. Every Kroot Hound is equipped with: ripping fangs.",
      "wargear": [
        "The Kroot Kill-broker’s Farstalker firearm can be replaced with one of the following: ◦ 1 pulse carbine ◦ 1 pulse rifle",
        "1 Kroot Farstalker’s Farstalker firearm can be replaced with one of the following: ◦ 1 Dvorgite skinner ◦ 1 Londaxi tribalest",
        "1 Kroot Farstalker equipped with a Farstalker firearm can be equipped with 1 Pech’ra."
      ],
      "transport": "",
      "points": [
        {
          "models": "12",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Pech’ra",
            "description": "Ranged weapons equipped by the bearer’s unit have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Infiltrators", "Stealth"],
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
            "name": "Bounty Hunters",
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
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "FARSTALKERS & KILL-BROKER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "12\"",
          "t": "3",
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "0",
          "name": "KROOT HOUNDS",
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
              "name": "Dvorgite skinner",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Farstalker firearm",
              "keywords": ["rapid fire 1"],
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
              "name": "Kroot pistol",
              "keywords": ["pistol"],
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
              "name": "Londaxi tribalest",
              "keywords": ["anti-vehicle 4+", "devastating wounds", "heavy"],
              "range": "18\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Pulse carbine",
              "keywords": [],
              "range": "20\"",
              "attacks": "2",
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
              "name": "Ripping fangs",
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
              "name": "Ritual blade",
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
      "keywords": ["Infantry", "Grenades", "Kroot", "Farstalkers"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "9d360357-8430-5411-b508-36c165cb8867",
      "name": "Kroot Hounds",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["4-12 Kroot Hounds"],
      "loadout": "Every model is equipped with: ripping fangs.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "30",
          "active": true
        },
        {
          "models": "8",
          "cost": "60",
          "active": true
        },
        {
          "models": "12",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 9\"", "Stealth"],
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
            "name": "Hunting Pack",
            "description": "While one or more friendly Kroot Carnivore units within 6\" of this unit are within Engagement Range of one or more enemy units, each time a model in this unit makes a melee attack, add 1 to the Wound roll.",
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
          "sv": "6+",
          "w": "1",
          "ld": "8+",
          "oc": "0",
          "name": "Kroot Hounds",
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
              "name": "Ripping fangs",
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
      "keywords": ["Beasts", "Kroot", "Hounds"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "f467e078-bf57-5edb-b083-165567171e3c",
      "name": "Kroot Shaper",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Kroot Carnivores",
      "composition": ["1 Kroot Shaper"],
      "loadout": "This model is equipped with: Kroot rifle; Shaper’s ritual blade.",
      "wargear": [
        "This model’s Kroot rifle can be replaced with 1 pulse rifle."
      ],
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
        "core": ["Leader", "Scouts 7\"", "Stealth"],
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
            "name": "The Shaper Commands",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 6+ ability. If models in that unit destroy an enemy unit in the Fight phase, then until the end of the battle, while this model is leading that unit, models in the unit have the Feel No Pain 4+ ability instead.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Ritualistic Feeding",
            "description": "Each time this model ends a Charge move, until the end of the turn, add 3 to the Attacks characteristic of its Shaper’s ritual blade.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Kroot Shaper",
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
              "name": "Kroot rifle",
              "keywords": ["rapid fire 1"],
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
              "name": "Pulse rifle",
              "keywords": ["rapid fire 1"],
              "range": "30\"",
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
              "name": "Shaper’s ritual blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "2+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Character", "Grenades", "Infantry", "Kroot", "Shaper"],
      "factions": ["T’au Empire"],
      "leads": {
        "units": ["Kroot Carnivores"],
        "extra": ""
      }
    },
    {
      "id": "efc04c25-5e10-5308-ae2d-528c9706d08b",
      "name": "Krootox Riders",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Krootox Riders"],
      "loadout": "Every model is equipped with: Kroot gun; Krootox fists.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "35",
          "active": true
        },
        {
          "models": "2",
          "cost": "70",
          "active": true
        },
        {
          "models": "3",
          "cost": "105",
          "active": true
        }
      ],
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
            "name": "Kroot Packmates",
            "description": "While one or more friendly Kroot Carnivore units are within 6\" of this unit, each time a model in this unit makes an attack, add 1 to the Hit roll.",
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
          "ld": "7+",
          "oc": "2",
          "name": "Krootox Riders",
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
              "name": "Kroot gun",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "7",
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
              "name": "Krootox fists",
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
      "keywords": ["Mounted", "Kroot", "Krootox Riders"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "9e7c2c45-0c19-55f0-a6fe-61970bb877a8",
      "name": "Longstrike",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Longstrike – Epic Hero"],
      "loadout": "This model is equipped with: 2 twin pulse carbines; railgun; armoured hull.",
      "wargear": [
        "This model’s railgun can be replaced with 1 ion cannon.",
        "This model’s 2 twin pulse carbines can be replaced with one of the following: ◦ 2 accelerator burst cannons ◦ 2 twin smart missile systems",
        "This model can be equipped with up to 2 seeker missiles."
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
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Armour Hunter",
            "description": "Each time this model makes an attack that targets a Monster or Vehicle, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Targeting Array",
            "description": "Each time this model is selected to shoot, you can re-roll one Hit roll or you can re-roll one Wound roll when resolving its attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "XV02 Pilot Battlesuit",
            "description": "In your Command phase, you can select one friendly Hammerhead Gunship unit within 12\". Until the start of your next Command phase, ranged weapons equipped by models in that unit have the [LETHAL HITS] ability.",
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
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "3",
          "name": "Longstrike",
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
              "name": "Accelerator burst cannon",
              "keywords": [],
              "range": "18\"",
              "attacks": "4",
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
              "name": "Ion cannon – standard",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Ion cannon – overcharge",
              "keywords": ["blast", "hazardous"],
              "range": "60\"",
              "attacks": "D6+3",
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
              "name": "Railgun",
              "keywords": ["devastating wounds", "heavy"],
              "range": "72\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "20",
              "ap": "-5",
              "damage": "D6+6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Twin pulse carbine",
              "keywords": ["assault", "twin-linked"],
              "range": "20\"",
              "attacks": "2",
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
              "name": "Twin smart missile system",
              "keywords": ["indirect fire", "twin-linked"],
              "range": "30\"",
              "attacks": "4",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Character", "Epic Hero", "Longstrike"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "6616c54f-955a-5ec1-a9a2-651b1bc1f76d",
      "name": "Manta",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Manta"],
      "loadout": "This model is equipped with: 2 heavy rail cannons; 6 ion cannons; 2 long-barrelled burst cannon arrays; 2 missile pods; 10 seeker missiles; armoured hull.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of all of the following: ■  200 T’au Empire Infantry or Tactical Drone models ■ 4 Devilfish, Sky Ray Gunship or Hammerhead models ■  8 Battlesuit models with a Wounds characteristic of 9 or less",
      "points": [
        {
          "models": "1",
          "cost": "2100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 3D6", "Hover"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aggressive Deployment",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Air Caste Colossus",
            "description": "Each time you target this model with a Stratagem, you must spend three times that Stratagem’s stated CP cost to do so.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-20 WOUNDS REMAINING",
          "description": "While this model has 1-20 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "14",
          "sv": "2+",
          "w": "60",
          "ld": "7+",
          "oc": "0",
          "name": "Manta",
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
              "name": "Heavy rail cannon",
              "keywords": ["devastating wounds"],
              "range": "120\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "26",
              "ap": "-5",
              "damage": "12"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ion cannon – standard",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Ion cannon – overcharge",
              "keywords": ["blast", "hazardous"],
              "range": "60\"",
              "attacks": "D6+3",
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
              "name": "Long-barrelled burst cannon array",
              "keywords": [],
              "range": "24\"",
              "attacks": "32",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "5+",
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
        "Titanic",
        "Transport",
        "Markerlight",
        "Manta"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "6246a701-4b61-5ce8-ba1c-b215ffd50aa8",
      "name": "Orca Dropship",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Orca Dropship"],
      "loadout": "This model is equipped with: 2 long-barrelled burst cannons; missile pod; armoured hull.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 48 T’au Empire Infantry models. This model can also transport up to 6 Battlesuit models (these models take up the space of a number of models equal to their Wounds characteristic, e.g. a Battlesuit with a Wounds characteristic of 8 would take up the space of 8 models). This model cannot transport Kroot or Vespid Stingwings models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2", "Hover"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Jet Pack Insertion",
            "description": "At the end of your opponent’s Movement phase, one or more units embarked within this Transport can disembark from it, provided every model in each of those disembarking units has the Deep Strike ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-9 WOUNDS REMAINING",
          "description": "While this model has 1-9 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "12",
          "sv": "3+",
          "w": "28",
          "ld": "7+",
          "oc": "0",
          "name": "Orca Dropship",
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
              "name": "Long-barrelled burst cannon",
              "keywords": [],
              "range": "36\"",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "8",
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
        "Titanic",
        "Transport",
        "Orca Dropship"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "2eda711d-e384-5f6a-b1ef-ee8936bae847",
      "name": "Pathfinder Team",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Pathfinder Shas’ui", "9 Pathfinders"],
      "loadout": "Every model is equipped with: pulse carbine; pulse pistol; close combat weapon.",
      "wargear": [
        "The Pathfinder Shas’ui can be equipped with one of the following: ◦ 1 grav-inhibitor drone ◦ 1 pulse accelerator drone ◦ 1 recon drone",
        "Up to 3 Pathfinders can each have their pulse carbine replaced with one of the following: ◦ 1 ion rifle ◦ 1 rail rifle",
        "1 model in this unit equipped with a pulse carbine can be equipped with 1 semi-automatic grenade launcher. That model’s pulse carbine cannot be replaced.",
        "1 model in this unit can be equipped with up to two of the following, and can take duplicates: ◦ 1 gun drone* ◦ 1 marker drone* ◦ 1 shield drone* * This drone’s rules can be found on the T’au Empire Drones card."
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
            "name": "Grav-inhibitor Drone",
            "description": "Subtract 2 from Charge rolls made for any enemy unit that declares a charge against the bearer’s unit (this is not cumulative with any other reductions to that Charge roll).",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Pulse Accelerator Drone",
            "description": "Add 6\" to the Range characteristic of pulse carbines equipped by models in the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Recon Drone",
            "description": "The bearer is equipped with 1 drone burst cannon and the bearer’s unit has the Infiltrators ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 7\""],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Target Uploaded",
            "description": "Once per turn, when using the Greater Good ability, you can select this unit to be an Observer unit for a second time. When doing so, you can change which enemy unit is this unit’s Spotted unit.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Pathfinder Team",
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
              "name": "Drone burst cannon",
              "keywords": [],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Ion rifle – standard",
              "keywords": ["heavy"],
              "range": "30\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Ion rifle – overcharge",
              "keywords": ["hazardous", "heavy"],
              "range": "30\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Pulse carbine",
              "keywords": [],
              "range": "20\"",
              "attacks": "2",
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
              "name": "Pulse pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Rail rifle",
              "keywords": ["devastating wounds", "heavy"],
              "range": "30\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "10",
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
              "name": "Semi-automatic grenade launcher – EMP",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Semi-automatic grenade launcher – fusion",
              "keywords": [],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
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
              "attacks": "1",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Markerlight", "Pathfinder Team"],
      "factions": ["T’au Empire"],
      "leadBy": ["Darkstrider"]
    },
    {
      "id": "f4009805-20f9-5eb5-a532-f3f314aa15e2",
      "name": "Piranha",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Piranhas"],
      "loadout": "Every model is equipped with: Piranha burst cannon; 2 twin pulse carbines; armoured hull.",
      "wargear": [
        "Any number of models can each have their Piranha burst cannon can be replaced with 1 Piranha fusion blaster.",
        "Any number of models can each be equipped with up to 2 seeker missiles."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "55",
          "active": true
        },
        {
          "models": "2",
          "cost": "110",
          "active": true
        },
        {
          "models": "3",
          "cost": "165",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Scouts 9\""],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Drone Harassment Tactics",
            "description": "At the end of your Movement phase, select one enemy unit within 12\" of this unit; that enemy unit must take a Battle-shock test.",
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
          "sv": "4+",
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Piranha",
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
              "name": "Piranha burst cannon",
              "keywords": [],
              "range": "18\"",
              "attacks": "4",
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
              "name": "Piranha fusion blaster",
              "keywords": ["melta 4"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Twin pulse carbine",
              "keywords": ["twin-linked", "assault"],
              "range": "20\"",
              "attacks": "2",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Piranha"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "b4cc65dc-05a8-545a-b206-ae7903c94a39",
      "name": "R’varna Battlesuit",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 R’varna Battlesuit"],
      "loadout": "This model is equipped with: 2 pulse submunitions cannons; battlesuit fists.",
      "wargear": [
        "This model can be equipped with up to 2 missile drones.* * This drone’s rules can be found on the T’au Empire Drones card (see Index: T’au Empire)."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "235",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Battlesuit Support System",
            "description": "This model is eligible to shoot in a turn in which it Fell Back.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Nova Shielding",
            "description": "Once per battle, when this model is selected as the target of a ranged attack, it can use this ability. If it does, until the end of the phase, each time an attack targets this model, if the Strength characteristic of that attack is greater than the Toughness characteristic of this model, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weapon Support System",
            "description": "Each time this model makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
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
          "sv": "2+",
          "w": "15",
          "ld": "7+",
          "oc": "4",
          "name": "R’varna Battlesuit",
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
              "name": "Pulse submunitions cannon",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "D6+2",
              "skill": "4+",
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
              "name": "Battlesuit fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Fly", "Battlesuit", "R’varna"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "cd839a13-1816-5eba-864d-7b5cce939422",
      "name": "Razorshark Strike Fighter",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Razorshark Strike Fighter"],
      "loadout": "This model is equipped with: accelerator burst cannon; quad ion turret; 2 seeker missiles; armoured hull.",
      "wargear": [
        "This model’s accelerator burst cannon can be replaced with 1 missile pod."
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
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ground Strike Fighter",
            "description": "Each time this model makes a ranged attack that targets an enemy unit that cannot Fly, add 1 to the Hit roll.",
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
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "0",
          "name": "Razorshark Strike Fighter",
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
              "name": "Accelerator burst cannon",
              "keywords": [],
              "range": "18\"",
              "attacks": "4",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Quad ion turret – standard",
              "keywords": ["twin-linked"],
              "range": "30\"",
              "attacks": "8",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Quad ion turret – overcharge",
              "keywords": ["hazardous", "twin-linked"],
              "range": "30\"",
              "attacks": "8",
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
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Aircraft", "Fly", "Razorshark Strike Fighter"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "b63aeb39-81a9-54d4-bc41-a4954433a72b",
      "name": "Remora Stealth Drones",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2 Remora Stealth Drones"],
      "loadout": "Every model is equipped with: twin long-barrelled burst cannons; 2 Remora seeker missiles; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Stealth"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aerial Disengagement",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\".",
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
          "t": "6",
          "sv": "3+",
          "w": "5",
          "ld": "7+",
          "oc": "0",
          "name": "Remora Stealth Drones",
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
              "name": "Remora seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Twin long-barrelled burst cannon",
              "keywords": ["twin-linked"],
              "range": "24\"",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Markerlight", "Remora Stealth Drones"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "2f2b70e8-9698-513a-a31e-3534776d2930",
      "name": "Remote Sensor Tower",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Remote Sensor Tower"],
      "loadout": "This model is equipped with: nothing.",
      "wargear": ["None"],
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
            "name": "Orbital Comms Array (Aura)",
            "description": "While a friendly T'au Empire unit is within 6\" of this Fortification, each time you target that unit with a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Reinforced Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
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
          "t": "8",
          "sv": "4+",
          "w": "4",
          "ld": "8+",
          "oc": "0",
          "name": "Remote Sensor Tower",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Remote Sensor Tower"],
      "factions": ["T'au Empire"]
    },
    {
      "id": "2daf2e63-9bf4-5d66-bde0-5a85c0f1fe4f",
      "name": "Riptide Battlesuit",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Riptide Battlesuit"],
      "loadout": "This model is equipped with: heavy burst cannon; twin plasma rifle; Riptide fists.",
      "wargear": [
        "This model’s heavy burst cannon can be replaced with 1 ion accelerator.",
        "This model’s twin plasma rifles can be replaced with one of the following: ◦ 1 twin fusion blaster ◦ 1 twin smart missile system",
        "This model can be equipped with up to 2 missile drones*. * This drone’s rules can be found on the T’au Empire Drones card."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "235",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Battlesuit Support System",
            "description": "The bearer is eligible to shoot in a turn in which it Fell Back.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Nova Charge",
            "description": "Once per battle, in your Shooting phase, select one ranged weapon equipped by this model. Until the end of the phase, that weapon has the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weapon Support System",
            "description": "Each time the bearer makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
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
          "t": "9",
          "sv": "2+",
          "w": "14",
          "ld": "7+",
          "oc": "4",
          "name": "Riptide Battlesuit",
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
              "name": "Heavy burst cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "12",
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
              "name": "Ion accelerator – standard",
              "keywords": [],
              "range": "72\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Ion accelerator – overcharge",
              "keywords": ["hazardous"],
              "range": "72\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
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
              "name": "Twin fusion blaster",
              "keywords": ["melta 2", "twin-linked"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Twin plasma rifle",
              "keywords": ["twin-linked"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
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
              "name": "Twin smart missile system",
              "keywords": ["indirect fire", "twin-linked"],
              "range": "30\"",
              "attacks": "3",
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
              "name": "Riptide fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Fly", "Battlesuit", "Riptide"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "4ffe9dd5-1096-5ba0-91dc-7f8d6fc59bf9",
      "name": "Shas'o R'alai",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ XV9 Hazard Battlesuits",
      "composition": ["1 Shas'o R'alai – Epic Hero"],
      "loadout": "This model is equipped with: experimental pulse submunitions rifle; battlesuit fists; blacklight marker drones.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Blacklight Marker Drones",
            "description": "Twice per battle, when this unit is an Observer unit, until the end of the phase, each time a ranged attack is made by a model in their Guided unit that targets their Spotted unit, re-roll a Wound roll of 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Eclipse Field Generator",
            "description": "While this model is leading a unit, models in that unit have a 5+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Assassin",
            "description": "Each time this model makes an attack that targets a Character unit, you can re-roll the Hit roll.",
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
          "sv": "3+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Shas'o R'alai",
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
              "name": "Experimental pulse submunitions rifle – EMP",
              "keywords": ["anti-vehicle 3+", "devastating wounds"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "1",
              "ap": "0",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Experimental pulse submunitions rifle – ionic",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Battlesuit fists",
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
        "Fly",
        "Character",
        "Markerlight",
        "Epic Hero",
        "Battlesuit",
        "Shas'o R'alai"
      ],
      "factions": ["T'au Empire"],
      "leads": {
        "units": ["XV9 Hazard Battlesuits"],
        "extra": ""
      }
    },
    {
      "id": "a5e78785-c5b7-5016-a3e2-85d9d4384c4f",
      "name": "Sky Ray Gunship",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sky Ray Gunship"],
      "loadout": "This model is equipped with: 1 seeker missile rack; 2 twin pulse carbines; armoured hull.",
      "wargear": [
        "This model’s 2 twin pulse carbines can be replaced with one of the following: ◦ 2 accelerator burst cannons ◦ 2 twin smart missile systems"
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
        "core": ["Deadly Demise D3"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aerial Scanners",
            "description": "Each time this model makes an attack with a ranged weapon that targets a unit that can Fly, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Targeting Array",
            "description": "Each time this unit is selected to shoot, you can re-roll one Hit roll or you can re-roll one Wound roll when resolving those attacks.",
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
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "3",
          "name": "Sky Ray Gunship",
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
              "name": "Accelerator burst cannon",
              "keywords": [],
              "range": "18\"",
              "attacks": "4",
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
              "name": "Seeker missile rack",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin pulse carbine",
              "keywords": ["assault", "twin-linked"],
              "range": "20\"",
              "attacks": "2",
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
              "name": "Twin smart missile system",
              "keywords": ["indirect fire", "twin-linked"],
              "range": "30\"",
              "attacks": "3",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Markerlight", "Sky Ray Gunship"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "e9255c83-49c4-59dd-a67d-8283e79a582d",
      "name": "Stealth Battlesuits",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Stealth Shas’vre", "2-5 Stealth Shas’ui"],
      "loadout": "The Stealth Shas’vre model is equipped with: burst cannon; battlesuit fists; homing beacon. Every Stealth Shas’ui model is equipped with: burst cannon; battlesuit fists.",
      "wargear": [
        "The Stealth Shas’vre can be equipped with up to two of the following, and can take duplicates: ◦ 1 gun drone* ◦ 1 marker drone* ◦ 1 shield drone*",
        "For every 3 models in the unit, 1 model’s burst cannon can be replaced with 1 fusion blaster.",
        "For every 3 models in the unit, 1 model can be equipped with 1 battlesuit support system. * This drone’s rules can be found on the T’au Empire Drones card."
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
            "name": "Battlesuit Support System",
            "description": "The bearer’s unit is eligible to shoot in a turn in which it Fell Back, but when doing so only models equipped with this wargear can make ranged attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Homing Beacon",
            "description": "Once per battle, you can use the Rapid Ingress Stratagem for 0CP. The target must be set up within 3\" of the bearer’s unit and not within 9\" of any enemy units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Infiltrators", "Stealth"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Forward Observers",
            "description": "Each time this unit is an Observer unit, until the end of the phase, each time a ranged attack is made by a model in their Guided unit that targets their Spotted unit, re-roll a Wound roll of 1.",
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
          "sv": "3+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Stealth Battlesuits",
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
              "name": "Burst cannon",
              "keywords": [],
              "range": "18\"",
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
              "name": "Fusion blaster",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Battlesuit fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Fly", "Battlesuit", "Stealth"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "70f5e742-6b82-5c2e-8b58-28edfd35ca6f",
      "name": "Stormsurge",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Stormsurge"],
      "loadout": "This model is equipped with: cluster rocket system; destroyer missiles; pulse driver cannon; 2 twin smart missile system; twin T’au flamer; thunderous footfalls.",
      "wargear": [
        "This model’s pulse driver cannon can be replaced with 1 pulse blast cannon.",
        "This model’s twin T’au flamer can be replaced with one of the following: ◦ 1 twin airbursting fragmentation projector ◦ 1 twin burst cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "465",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Heavy Walker",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Support System",
            "description": "Each time this model makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Titan-killer",
            "description": "Each time this model makes a ranged attack that targets a Titanic or Towering unit, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, subtract 3 from this models Objective Control characteristic, and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "11",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "6",
          "name": "Stormsurge",
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
              "name": "Cluster rocket system",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "4D6",
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
              "name": "Destroyer missiles",
              "keywords": ["heavy"],
              "range": "72\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Pulse blast cannon – focused",
              "keywords": ["heavy"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "24",
              "ap": "-6",
              "damage": "12"
            },
            {
              "active": true,
              "name": "Pulse blast cannon – dispersed",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "10",
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
              "name": "Pulse driver cannon",
              "keywords": ["blast", "heavy"],
              "range": "72\"",
              "attacks": "D6+3",
              "skill": "4+",
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
              "name": "Twin airbursting fragmentation projector",
              "keywords": ["blast", "heavy", "indirect fire", "twin-linked"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Twin burst cannon",
              "keywords": ["heavy", "twin-linked"],
              "range": "18\"",
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
              "name": "Twin smart missile system",
              "keywords": ["heavy", "indirect fire", "twin-linked"],
              "range": "30\"",
              "attacks": "2",
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
              "name": "Twin T’au flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
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
              "name": "Thunderous footfalls",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Titanic", "Towering", "Stormsurge"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "0e5e4513-6837-503c-baf8-29aadc418df5",
      "name": "Strike Team",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Fire Warrior Shas’ui", "9 Fire Warriors"],
      "loadout": "Every model is equipped with: pulse pistol; pulse rifle; close combat weapon.",
      "wargear": [
        "The Fire Warrior Shas’ui can be equipped with up to two of the following, and can take duplicates: ◦ 1 guardian drone* (it cannot take duplicates of this piece of wargear) ◦ 1 gun drone* ◦ 1 marker drone* ◦ 1 shield drone*",
        "Any number of Fire Warrior models can each have their pulse rifle replaced with 1 pulse carbine. *  This drone’s rules can be found on the T’au Empire Drones card."
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
        "wargear": [],
        "core": [],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cover Fire",
            "description": "While this unit is within range of an objective marker you control, each time you select it as the target of the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 4+ when resolving that Stratagem.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "DS8 Support Turret",
            "description": "In your Movement phase, if this unit Remains Stationary, until the start of your next Movement phase, its Fire Warrior Shas’ui model is equipped with the support turret missile system weapon. Designer’s Note: Place a DS8 Support Turret token next to this unit to remind you.",
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
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Strike Team",
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
              "name": "Pulse carbine",
              "keywords": [],
              "range": "20\"",
              "attacks": "2",
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
              "name": "Pulse pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Pulse rifle",
              "keywords": ["rapid fire 1"],
              "range": "30\"",
              "attacks": "1",
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
              "name": "Support turret missile system",
              "keywords": ["indirect fire", "twin-linked"],
              "range": "30\"",
              "attacks": "2",
              "skill": "5+",
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
              "attacks": "1",
              "skill": "5+",
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
        "Markerlight",
        "Fire Warrior",
        "Strike Team"
      ],
      "factions": ["T’au Empire"],
      "leadBy": ["Aun’shi", "Cadre Fireblade", "Ethereal"]
    },
    {
      "id": "c4eea76b-80a8-588e-92d3-36ae0275b22c",
      "name": "Sun Shark Bomber",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sun Shark Bomber"],
      "loadout": "This model is equipped with: missile pod; 2 seeker missiles; 2 twin ion rifles; armoured hull.",
      "wargear": [
        "This model’s missile pod can be replaced with 1 twin missile pod."
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
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pulse Bombs",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound.",
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
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "0",
          "name": "Sun Shark Bomber",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Twin missile pod",
              "keywords": ["twin-linked"],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Twin ion rifle – standard",
              "keywords": ["twin-linked"],
              "range": "30\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Twin ion rifle – overcharge",
              "keywords": ["hazardous", "twin-linked"],
              "range": "30\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "8",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Aircraft", "Fly", "Sun Shark Bomber"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "ac3cd97b-2c73-5422-baf6-34be01cfd3b8",
      "name": "T’au Empire",
      "source": "40k-10e",
      "faction_id": "TAU",
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
        "primarch": [
          {
            "name": "T’au Empire",
            "showAbility": true,
            "abilities": [
              {
                "name": "DRONES",
                "description": "If you have upgraded a model to have a drone, place a Drone token next to your model as a reminder. These do not count as models for any rules purposes.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "GUARDIAN DRONE",
                "description": "Each time a model makes a ranged attack that  targets the bearer’s unit, subtract 1 from the  Wound roll.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "MARKER DRONE",
                "description": "The bearer’s unit has the Markerlight keyword  and can act as an Observer unit for another unit  even if it Advanced this turn.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "SHIELD DRONE",
                "description": "Add 1 to the bearer’s Wounds characteristic.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
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
              "name": "GUN DRONE - Twin pulse carbine",
              "keywords": ["assault", "twin-linked"],
              "range": "20\"",
              "attacks": "2",
              "skill": "5+",
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
              "name": "MISSILE DRONE - Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "7",
              "ap": "-2",
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
      "id": "797246a0-73b5-5bfc-8b92-3bb283a2138a",
      "name": "Ta’unar Supremacy Armour",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Ta’unar Supremacy Armour"],
      "loadout": "This model is equipped with: 4 burst cannons; fusion eradicator; 3 pulse ordnance drivers; 4 smart missile systems; tri-axis ion cannon; crushing feet.",
      "wargear": [
        "This model’s tri-axis ion cannon can be replaced with 1 fusion eradicator.",
        "This model’s fusion eradicator can be replaced with 1 tri-axis ion cannon.",
        "This model’s 3 pulse ordnance drivers can be replaced with one of the following: ◦ 2 nexus missile launchers ◦ 1 heavy rail cannon array and 1 fragmentation cluster shell launcher"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "790",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+3"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Coordinated Strike",
            "description": "While this model is a Guided unit, each time it makes an attack that targets its Spotted unit, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Super-heavy Walker",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "13",
          "sv": "2+",
          "w": "30",
          "ld": "7+",
          "oc": "10",
          "name": "Ta’unar Supremacy Armour",
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
              "name": "Burst cannon",
              "keywords": [],
              "range": "18\"",
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
              "name": "Fragmentation cluster shell launcher",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "2D6+6",
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
              "name": "Fusion eradicator",
              "keywords": ["melta 3"],
              "range": "24\"",
              "attacks": "5",
              "skill": "4+",
              "strength": "10",
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
              "name": "Heavy rail cannon array",
              "keywords": ["devastating wounds", "heavy"],
              "range": "120\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "26",
              "ap": "-5",
              "damage": "16"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Nexus missile launcher",
              "keywords": [],
              "range": "36\"",
              "attacks": "8",
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
              "name": "Pulse ordnance driver",
              "keywords": ["anti-infantry 2+"],
              "range": "60\"",
              "attacks": "8",
              "skill": "4+",
              "strength": "5",
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
              "name": "Smart missile system",
              "keywords": ["indirect fire"],
              "range": "30\"",
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
              "name": "Tri-axis ion cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Tri-axis ion cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "9",
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
              "name": "Crushing feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "5+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Ta’unar Supremacy Armour"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "13ba221a-16c6-585c-94f1-c2523897d39d",
      "name": "Tactical Drones",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["4-12 Tactical Drones"],
      "loadout": "Every model is equipped with: twin pulse carbine; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "70",
          "active": true
        },
        {
          "models": "8",
          "cost": "140",
          "active": true
        },
        {
          "models": "12",
          "cost": "210",
          "active": true
        }
      ],
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
          "m": "8\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "0",
          "name": "Tactical Drones",
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
              "name": "Twin pulse carbine",
              "keywords": ["assault", "twin-linked"],
              "range": "20\"",
              "attacks": "2",
              "skill": "5+",
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
              "attacks": "1",
              "skill": "6+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Drone", "Fly", "Tactical Drones"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "f01b9b80-efce-5fda-96bd-b43b45263574",
      "name": "Tetras",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2-4 Tetras"],
      "loadout": "Every model is equipped with: 2 pulse rifles; close combat weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "80",
          "active": true
        },
        {
          "models": "4",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Infiltrators"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "High-intensity Markerlights",
            "description": "Each time this unit is an Observer unit, until the end of the phase, each time a model in its Guided unit makes an attack that targets their Spotted unit, you can re-roll the Hit roll.",
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
          "sv": "4+",
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Tetras",
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
              "name": "Pulse rifle",
              "keywords": ["rapid fire 1"],
              "range": "30\"",
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
              "name": "Close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Markerlight", "Tetras"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "f687b9d9-4a5e-51b5-9250-2ae0d358e816",
      "name": "Tidewall Droneport",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tidewall Droneport"],
      "loadout": "This model is equipped with: drone defenders.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 11 T’au Empire Infantry models. It cannot transport Battlesuit, Kroot or Vespid Stingwings models.",
      "points": [
        {
          "models": "1",
          "cost": "85",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 11"],
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
            "name": "Droneport",
            "description": "Each time this Fortification is selected to shoot, its drone defenders weapon will target and resolve attacks against every enemy unit that is an eligible target to this Fortification.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Tidewall Cover",
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
          "m": "4\"",
          "t": "8",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Tidewall Droneport",
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
              "name": "Drone defenders",
              "keywords": ["assault", "twin-linked"],
              "range": "20\"",
              "attacks": "8",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": [
        "Fortification",
        "Vehicle",
        "Transport",
        "Fly",
        "Tidewall Droneport"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "bb44119a-1855-5e48-9057-f60ef5b1d2b2",
      "name": "Tidewall Gunrig",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tidewall Gunrig"],
      "loadout": "This model is equipped with: supremacy railgun.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 11 T’au Empire Infantry models. It cannot transport Battlesuit, Kroot or Vespid Stingwings models.",
      "points": [
        {
          "models": "1",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 11"],
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
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Tidewall Cover",
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
          "m": "4\"",
          "t": "8",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "0",
          "name": "Tidewall Gunrig",
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
              "name": "Supremacy railgun",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "72\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "20",
              "ap": "-5",
              "damage": "D6+6"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": [
        "Fortification",
        "Vehicle",
        "Transport",
        "Fly",
        "Tidewall Gunrig"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "461404f4-27f2-5e5d-a577-cc90fc70fbc8",
      "name": "Tidewall Shieldline",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tidewall Shieldline"],
      "loadout": "",
      "wargear": [
        "This model can be equipped with 1 Tidewall defence platform."
      ],
      "transport": "This model has a transport capacity of 11 T’au Empire Infantry models. It cannot transport Battlesuit, Kroot or Vespid Stingwings models. If this model is equipped with a Tidewall defence platform, it has a transport capacity of 22 T’au Infantry models instead.",
      "points": [
        {
          "models": "1",
          "cost": "85"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 20"],
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
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Tidewall Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Tidewall Defence Platform",
            "description": "If equipped with a Tidewall defence platform, this Fortification has a Wounds characteristic of 15.",
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
          "m": "4\"",
          "t": "8",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Tidewall Shieldline",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [],
      "keywords": [
        "Fortification",
        "Vehicle",
        "Transport",
        "Fly",
        "Tidewall Shieldline"
      ],
      "factions": ["T’au Empire"]
    },
    {
      "id": "55b3aceb-df4e-5d5f-9865-cc95d73f3cf2",
      "name": "Tiger Shark",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tiger Shark"],
      "loadout": "This model is equipped with: 2 burst cannons; 2 ion cannons; 2 missile pods; armoured hull; transport bay.",
      "wargear": [
        "This model’s 2 ion cannons can be replaced with one of the following: ◦ 2 swiftstrike burst cannons ◦  2 swiftstrike railguns",
        "This model can be equipped with up to 6 seeker missiles.",
        "This model’s transport bay can be replaced with 2 skyspear missile racks."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "275",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Transport Bay",
            "description": "The bearer has the Transport keyword and has a transport capacity of 12 Tactical Drones models.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D6+2"],
        "faction": ["For the Greater Good"],
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
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks that cannot Fly. That enemy unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "11",
          "sv": "3+",
          "w": "18",
          "ld": "7+",
          "oc": "0",
          "name": "Tiger Shark",
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
              "name": "Burst cannon",
              "keywords": [],
              "range": "18\"",
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
              "name": "Ion cannon – standard",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Ion cannon – overcharge",
              "keywords": ["blast", "hazardous"],
              "range": "60\"",
              "attacks": "D6+3",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Seeker missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
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
              "name": "Skyspear missile rack",
              "keywords": ["anti-fly 3+", "blast"],
              "range": "72\"",
              "attacks": "D6+1",
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
              "name": "Swiftstrike burst cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "16",
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
              "name": "Swiftstrike railgun",
              "keywords": ["devastating wounds"],
              "range": "72\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "20",
              "ap": "-5",
              "damage": "D6+6"
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
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Aircraft", "Fly", "Tiger Shark"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "fcf1141f-c3a7-5bdf-8efc-65631d9775b2",
      "name": "Tx42 Piranha",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 TX42 Piranha"],
      "loadout": "This model is equipped with: 2 plasma rifles; armoured hull.",
      "wargear": [
        "This model’s 2 plasma rifles can be replaced with one of the following: ◦ 2 fusion blasters ◦ 2 missile pods ◦ 2 rail rifles"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Scouts 9\""],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Outflank",
            "description": "When this unit arrives from Strategic Reserves, it can be set up within your opponent’s deployment zone (all other restrictions still apply).",
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
          "sv": "4+",
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Tx42 Piranha",
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
              "name": "Fusion blaster",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Missile pod",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Plasma rifle",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
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
              "name": "Rail rifle",
              "keywords": ["devastating wounds"],
              "range": "30\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "TX42 Piranha"],
      "factions": ["T'au Empire"]
    },
    {
      "id": "bdafaf97-9d51-5af8-bf69-1c0727112173",
      "name": "Vespid Stingwings",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Vespid Strain Leader", "4 Vespid Stingwings"],
      "loadout": "Every model is equipped with: neutron blaster; stingwing claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75",
          "active": true
        }
      ],
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
            "name": "Airborne Agility",
            "description": "At the end of your Movement phase, if this unit is not within Engagement Range of any enemy units, you can remove it from the battlefield and place it into Strategic Reserves.",
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
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Vespid Stingwings",
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
              "name": "Neutron blaster",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Stingwing claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Fly", "Vespid Stingwings"],
      "factions": ["T’au Empire"]
    },
    {
      "id": "ccb40484-215f-5b17-becc-34bff0340e53",
      "name": "Xv9 Hazard Battlesuits",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 XV9 Hazard Battlesuits"],
      "loadout": "Every model is equipped with: fusion cascade; twin hazard burst cannon; battlesuit fists.",
      "wargear": [
        "Any number of models can each have their fusion cascade replaced with one of the following: ◦ 1 phased ion gun ◦ 1 twin hazard burst cannon",
        "Any number of models can each have their twin hazard burst cannon replaced with one of the following: ◦ 1 fusion cascade ◦ 1 phased ion gun",
        "Any number of models can each be equipped with one of the following: ◦ 1 battlesuit support system ◦ 1 shield generator ◦ 1 weapon support system",
        "Any number of models can each be equipped with up to two of the following, and can take duplicates: ◦ 1 gun drone* ◦ 1 marker drone* ◦ 1 shield drone* * The rules for this drone can be found on the T'au Empire Drones card."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Battlesuit Support System",
            "description": "The bearer’s unit is eligible to shoot in a turn in which it Fell Back, but when doing so only models equipped with this wargear can make ranged attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shield Generator",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weapon Support System",
            "description": "Each time the bearer makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Photon Casters",
            "description": "In your Shooting phase, after this unit has shot, if an enemy Infantry unit was hit by one or more of those attacks, until the end of your opponent’s next turn, that enemy unit is stunned. While a unit is stunned, subtract 2 from that unit’s Move characteristic, and subtract 2 from Advance and Charge rolls made for that unit.",
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
          "sv": "3+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Xv9 Hazard Battlesuits",
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
              "name": "Fusion cascade",
              "keywords": ["melta 4"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Phased ion gun",
              "keywords": [],
              "range": "30\"",
              "attacks": "4",
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
              "name": "Twin hazard burst cannon",
              "keywords": ["twin-linked"],
              "range": "24\"",
              "attacks": "4",
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
              "name": "Battlesuit fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Fly", "Battlesuit", "XV9 Hazard"],
      "factions": ["T'au Empire"],
      "leadBy": ["Shas'o R'alai"]
    },
    {
      "id": "769c9459-b0e5-5311-bb64-bff08ef63400",
      "name": "Y’vahra Battlesuit",
      "source": "40k-10e",
      "faction_id": "TAU",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Y’vahra Battlesuit"],
      "loadout": "This model is equipped with: flechette pod; ionic discharge cannon; phased plasma-flamer; battlesuit fists.",
      "wargear": [
        "This model can be equipped with up to 2 missile drones.* * This drone’s rules can be found on the T’au Empire Drones card (see Index: T’au Empire)."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "235",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["For the Greater Good"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Battlesuit Support System",
            "description": "This model is eligible to shoot in a turn in which it Fell Back.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Nova Burst",
            "description": "Once per battle, before this model makes a Normal, Advance or Fall Back move, it can use this ability. If it does, until the end of the phase, it has a Move characteristic of 18\".",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weapon Support System",
            "description": "Each time this model makes a ranged attack, you can ignore any or all modifiers to the Hit roll.",
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
          "t": "9",
          "sv": "2+",
          "w": "15",
          "ld": "7+",
          "oc": "4",
          "name": "Y’vahra Battlesuit",
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
              "name": "Flechette pod",
              "keywords": [],
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
              "name": "Ionic discharge cannon – standard",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6+1",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Ionic discharge cannon – overcharge",
              "keywords": ["blast", "hazardous"],
              "range": "18\"",
              "attacks": "D6+1",
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
              "name": "Phased plasma-flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "10",
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
              "name": "Battlesuit fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Fly", "Battlesuit", "Y’vahra"],
      "factions": ["T’au Empire"]
    }
  ],
  "colours": {
    "banner": "#175966",
    "header": "#2e5a6a"
  }
}
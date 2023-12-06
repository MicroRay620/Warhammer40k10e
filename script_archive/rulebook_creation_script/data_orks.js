window.data = window.data || {};
window.data.ORK = {
  "id": "ORK",
  "link": "https://game-datacards.eu",
  "name": "Orks",
  "is_subfaction": false,
  "parent_id": "",
  "stratagems": [
    {
      "name": "CAREEN!",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Waaagh! Tribe",
      "turn": "either",
      "phase": ["any"],
      "fluff": "If their vehicle is on its last legs, any Ork\nworth their steering wheel will aim its\nblazing remains into the nearest cluster\nof enemies. The ensuing explosions never\nfail to raise a rousing cheer from nearby\nOrk onlookers.",
      "when": "Any phase, just after an Orks\nVehicle unit from your army with the\nDeadly Demise ability is destroyed.",
      "target": "That destroyed Orks Vehicle\nunit, if you roll a 6 for its Deadly Demise\nability. You can use this Stratagem on that\nunit even though it was just destroyed.",
      "effect": "Your unit can make a Normal or\nFall Back move before its Deadly Demise\nability is resolved, and before any\nembarked units perform an Emergency\nDisembarkation. When making this move,\nyour unit can move over enemy units\n(excluding Monsters and Vehicles) as if\nthey were not there.",
      "restrictions": "",
      "id": "767468f5-2443-5018-9fd7-c598c44564de"
    },
    {
      "name": "ORKS IS NEVER BEATEN",
      "cost": 2,
      "type": "Epic Deed",
      "detachment": "Waaagh! Tribe",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "So resilient is Ork physiology – and so\nslow are Orks on the uptake – that even\nkilling wounds can take a while to register.",
      "when": "Fight phase, just after an enemy\nunit has selected its targets.",
      "target": "One Orks unit from your army\nthat was selected as the target of one or\nmore of the attacking unit’s attacks.",
      "effect": "Until the end of the phase, each\ntime a model in your unit is destroyed, if\nthat model has not fought this phase, do\nnot remove it from play. The destroyed\nmodel can fight after the attacking\nmodel’s unit has finished making attacks,\nand is then removed from play.",
      "restrictions": "",
      "id": "03dc615c-afcb-5b95-b184-6e250c8f52be"
    },
    {
      "name": "UNBRIDLED CARNAGE",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Waaagh! Tribe",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "When Orks get stuck into the foe, the\ncarnage is wonderful to behold, at least\nfor other Orks.",
      "when": "Fight phase.",
      "target": "One Orks unit from your army\nthat has not been selected to fight\nthis phase.",
      "effect": "Until the end of the phase, each\ntime an Orks model in your unit makes a\nmelee attack, an unmodified hit roll of 5+\nscores a Critical Hit.",
      "restrictions": "",
      "id": "bcbb2226-bb87-5297-9616-2df78cf49648"
    },
    {
      "name": "’ARD AS NAILS",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Waaagh! Tribe",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "Even the lowliest Ork Boy can take a\ntremendous amount of punishment before\nbeing slain.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Orks unit from your army\nthat was selected as the target of one or\nmore of the attacking unit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack targets your unit, subtract\n1 from the Wound roll.",
      "restrictions": "You cannot select\na Vehicle or Gretchin unit for\nthis Stratagem. ",
      "id": "b4c3426b-ca29-57e9-a016-7fdfbc5b5ad1"
    },
    {
      "name": "MOB RULE",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Waaagh! Tribe",
      "turn": "your",
      "phase": ["command"],
      "fluff": "The more Orks that gather in one place the\nmore the Waaagh! energy flows, and the\nmore fearless they all become.",
      "when": "Your Command phase.",
      "target": "One Mob unit from your army that\ncontains 10 or more models and is not\nBelow Half-strength.",
      "effect": "Until the end of the phase, while\na friendly Orks Infantry unit is within 6\"\nof that Mob unit, that Orks Infantry unit\ncan still be selected as the target of your\nStratagems even if it is Battle-shocked.",
      "restrictions": "",
      "id": "a648b08d-7a49-52f1-b26e-7a900e86fd5b"
    },
    {
      "name": "ERE WE GO",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Waaagh! Tribe",
      "turn": "your",
      "phase": ["movement"],
      "fluff": "’Even lumbering Orks can put on a\nsurprising turn of speed when the promise\nof a good face-to-face fight is in the offing.\nOnce a horde of Orks get a sight of the foe,\nnothing can stop them.",
      "when": "Start of your Movement phase.",
      "target": "One Orks Infantry unit from\nyour army.",
      "effect": "Until the end of the turn, add 2\nto Advance and Charge rolls made for\nyour unit.",
      "restrictions": "",
      "id": "da792e2b-d388-52da-93e8-5d5af57ae3ec"
    }
  ],
  "enhancements": [
    {
      "name": "FOLLOW ME LADZ",
      "description": "Orks model only. While the bearer is leading a unit, add 2\" to the Move characteristic of models in that unit.",
      "keywords": ["Orks"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "HEADWOPPA’S KILLCHOPPA",
      "description": "Orks model only. Melee weapons equipped by the bearer that do not have the [EXTRA ATTACKS] ability have the [DEVASTATING WOUNDS] ability.",
      "keywords": ["Orks"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "KUNNIN’ BUT BRUTAL",
      "description": "Orks model only. While the bearer is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      "keywords": ["Orks"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "SUPA-CYBORK BODY",
      "description": "Orks model only. The bearer has the Feel No Pain 4+ ability.",
      "keywords": ["Orks"],
      "excludes": [],
      "cost": "15"
    }
  ],
  "datasheets": [
    {
      "id": "fbd67ac9-9656-5bb3-a1d4-32b08a9296b2",
      "name": "Attack Fighta",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Attack Fighta"],
      "loadout": "This model is equipped with: 2 twin big shootas; small bomms; armoured hull.",
      "wargear": ["This model can be equipped with 1 wing missiles."],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Small Bomms",
            "description": "Each time the bearer ends a Normal move, you can select one enemy unit it moved across during that move and roll three D6: for each 4+, that unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D3"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
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
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
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
          "name": "Attack Fighta",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Wing missiles",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "9",
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
      "keywords": ["Vehicle", "Fly", "Aircraft", "Attack Fighta"],
      "factions": ["Orks"]
    },
    {
      "id": "acda7dbd-3e08-583d-a83d-5085f32f80ee",
      "name": "Battlewagon",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Battlewagon"],
      "loadout": "This model is equipped with: tracks and wheels.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 kannon ◦ 1 killkannon ◦ 1 zzap gun",
        "This model can be equipped with: ◦ 1 lobba",
        "This model can be equipped with up to 4 big shootas.",
        "This model’s tracks and wheels can be replaced with 1 deff rolla.",
        "This model can be equipped with any of the following: ◦ 1 ’ard case ◦ 1 grabbin’ klaw ◦ 1 wreckin’ ball"
      ],
      "transport": "This model has a transport capacity of 22 Orks Infantry models. If this model is equipped with a killkannon, it has a transport capacity of 12 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. If this model is not equipped with an ’ard case, kannon, killkannon or zzap gun, it can transport 1 Ghazghkull Thraka. Ghazghkull Thraka takes up the space of 18 models.",
      "points": [
        {
          "models": "1",
          "cost": "185",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "’Ard Case",
            "description": "Add 2 to the bearer’s Toughness characteristic, but it no longer has the Firing Deck ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D6", "Firing Deck 22"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ramshackle but Rugged",
            "description": "Each time an attack is allocated to this model, worsen the Armour Penetration characteristic of that attack by 1.",
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
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Battlewagon",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Kannon – frag",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Kannon – shell",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Killkannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Lobba",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Zzap gun",
              "keywords": ["devastating wounds"],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "2D6",
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
              "name": "Deff rolla",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "9",
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
              "name": "Grabbin’ klaw",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Tracks and wheels",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
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
              "name": "Wreckin’ ball",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "0",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Transport", "Battlewagon"],
      "factions": ["Orks"]
    },
    {
      "id": "9d13f644-86ae-568e-9f34-97e50e1cb30d",
      "name": "Beast Snagga Boyz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Beast Snagga Nob", "9-19 Beast Snagga Boyz"],
      "loadout": "The Beast Snagga Nob is equipped with: slugga; power snappa. Every Beast Snagga Boy is equipped with: slugga; choppa.",
      "wargear": [
        "For every 10 models in this unit, 1 Beast Snagga Boy’s slugga and choppa can be replaced with 1 thump gun and 1 close combat weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "105",
          "active": true
        },
        {
          "models": "20",
          "cost": "210",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 6+"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Monster Hunters",
            "description": "Each time a model in this unit makes an attack that targets a Monster or Vehicle unit, you can re-roll the Hit roll.",
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
          "t": "5",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "BEAST SNAGGA BOY",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "BEAST SNAGGA NOB",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Thump gun",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D3",
              "skill": "5+",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Power snappa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Mob",
        "Battleline",
        "Beast Snagga",
        "Beast Snagga Boyz"
      ],
      "factions": ["Orks"],
      "leadBy": ["Beastboss", "Painboss", "Wurrboy"]
    },
    {
      "id": "6acd203a-43b6-5fd6-9737-949144462427",
      "name": "Beastboss",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Beast Snagga Boyz",
      "composition": ["1 Beastboss"],
      "loadout": "This model is equipped with: shoota; beastchoppa; Beast Snagga klaw.",
      "wargear": ["None"],
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
        "core": ["Feel No Pain 6+", "Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Beastboss",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Beastly Rage",
            "description": "Each time this model makes a Charge move, until the end of the turn, melee weapons it is equipped with have the [DEVASTATING WOUNDS] ability.",
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
          "t": "5",
          "sv": "4+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Beastboss",
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
              "name": "Shoota",
              "keywords": ["rapid fire 1"],
              "range": "18\"",
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
              "name": "Beast Snagga klaw",
              "keywords": ["anti-monster 4+", "anti-vehicle 4+"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
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
              "name": "Beastchoppa",
              "keywords": ["anti-monster 4+", "anti-vehicle 4+"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Beast Snagga",
        "Warboss",
        "Beastboss"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Beast Snagga Boyz"],
        "extra": ""
      }
    },
    {
      "id": "3136894e-024e-54e7-939f-a249b081c398",
      "name": "Beastboss On Squigosaur",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Beastboss on Squigosaur"],
      "loadout": "This model is equipped with: slugga; beastchoppa; Squigosaur’s jaws.",
      "wargear": ["This model can be equipped with 1 thump gun."],
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
        "core": ["Deadly Demise 1", "Feel No Pain 4+"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "’Ere We Go (Aura)",
            "description": "While a friendly Beast Snagga unit is within 6\" of this model, you can re-roll Charge rolls made for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Single-minded Predator",
            "description": "You can target this model with the Heroic Intervention Stratagem for 1CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
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
          "sv": "3+",
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Beastboss On Squigosaur",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Thump gun",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D3",
              "skill": "5+",
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
              "name": "Beastchoppa",
              "keywords": ["anti-monster 4+", "anti-vehicle 4+"],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Squigosaur’s jaws",
              "keywords": ["devastating wounds", "extra attacks"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Beast Snagga",
        "Beastboss on Squigosaur"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "b0c72ed4-58ab-59bb-8c70-735b0652d8d8",
      "name": "Big Gunz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Big Gunz"],
      "loadout": "Every model is equipped with: kannon; close combat weapons.",
      "wargear": [
        "Any number of models can each have their kannon replaced with one of the following: ◦ 1 lobba ◦ 1 zzap gun"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Splat!",
            "description": "Each time a model in this unit makes a ranged attack that targets a unit containing 10 or more models, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "BIG GUNZ",
            "description": "Designer’s Note: Place two Grot Crew tokens next to each Mek Gun model when this unit is first set up, removing one each time its Big Gun model loses a wound (a Big Gun model itself is considered to represent its final wound).",
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
          "m": "3\"",
          "t": "4",
          "sv": "5+",
          "w": "3",
          "ld": "8+",
          "oc": "1",
          "name": "Big Gunz",
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
              "name": "Kannon – frag",
              "keywords": ["blast", "heavy"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "6+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Kannon – shell",
              "keywords": ["heavy"],
              "range": "36\"",
              "attacks": "1",
              "skill": "6+",
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
              "name": "Lobba",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "6+",
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
              "name": "Zzap gun",
              "keywords": ["devastating wounds", "heavy"],
              "range": "36\"",
              "attacks": "1",
              "skill": "6+",
              "strength": "2D6",
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
              "name": "Close combat weapons",
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
      "keywords": ["Vehicle", "Artillery", "Big Gunz"],
      "factions": ["Orks"]
    },
    {
      "id": "adceb48a-0005-5558-a460-289abae88725",
      "name": "Big Mek In Mega Armour",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Meganobz",
      "composition": ["1 Big Mek in Mega Armour"],
      "loadout": "This model is equipped with: kustom-mega blaster; power klaw.",
      "wargear": [
        "This model’s kustom-mega blasta can be replaced with one of the following: ◦ 1 killsaw ◦ 1 kombi-weapon ◦ 1 kustom shoota",
        "This model can be equipped with one of the following: ◦ 1 tellyport blasta ◦ 1 kustom force field",
        "This model can be equipped with 1 grot oiler."
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
        "wargear": [
          {
            "name": "Kustom Force Field",
            "description": "While the bearer is leading a unit, models in that unit have a 4+ invulnerable save against ranged attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Grot Oiler",
            "description": "Once per battle, at the end of your Movement phase, one model in the bearer’s unit regains D3 lost wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "More Dakka",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fix Dat Armour Up",
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
          "m": "5\"",
          "t": "6",
          "sv": "2+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Big Mek In Mega Armour",
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
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Kustom shoota",
              "keywords": ["rapid fire 2"],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Tellyport blasta",
              "keywords": ["blast"],
              "range": "12\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "8",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "12",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Mega Armour",
        "Big Mek in Mega Armour"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Meganobz"],
        "extra": ""
      }
    },
    {
      "id": "43b23a8d-9817-5a94-adde-36734391237c",
      "name": "Big Mek On Warbike",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Warbikers",
      "composition": ["1 Big Mek on Warbike"],
      "loadout": "This model is equipped with: slugga; twin dakkagun; choppa; close combat weapon.",
      "wargear": [
        "This model’s slugga can be replaced with one of the following: ◦ 1 shokk attack gun ◦ 1 kustom force field ◦ 1 kombi-weapon ◦ 1 kustom mega-blasta ◦ 1 kustom mega-slugga ◦ 1 rokkit launcha ◦ 1 big choppa ◦ 1 power klaw",
        "This model’s choppa can be replaced with one of the following: ◦ 1 kombi-weapon ◦ 1 kustom mega-blasta ◦ 1 kustom mega-slugga ◦ 1 rokkit launcha ◦ 1 big choppa ◦ 1 killsaw ◦ 1 power klaw"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Kustom Force Field",
            "description": "While the bearer is leading a unit, models in that unit have a 4+ invulnerable save against ranged attacks.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "More Dakka",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mekaniak",
            "description": "At the end of your Movement phase, you can select one friendly Orks Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds, and, until the start of your next Movement phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn.",
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
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Big Mek On Warbike",
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
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Kustom mega-slugga",
              "keywords": ["blast", "hazardous"],
              "range": "12\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "8",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Shokk attack gun",
              "keywords": ["blast", "heavy"],
              "range": "60\"",
              "attacks": "D6+1",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Twin dakkagun",
              "keywords": ["assault", "rapid fire 2", "twin-linked"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "12",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Speed Freeks",
        "Character",
        "Grenades",
        "Big Mek on Warbike"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Warbikers"],
        "extra": ""
      }
    },
    {
      "id": "675b6df7-89da-50b0-a4c2-ab52cd62b829",
      "name": "Big Mek With Kustom Force Field",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Burna Boyz ■ Tankbustas ■ Lootas ■ Nobz",
      "composition": ["1 Big Mek with Kustom Force Field"],
      "loadout": "This model is equipped with: slugga; choppa.",
      "wargear": ["This model can be equipped with 1 grot helper."],
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
            "name": "Grot Helper",
            "description": "Once per battle, the bearer can overcharge its kustom force field one additional time.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "More Dakka",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Kustom Force Field",
            "description": "While this model is leading a unit, models in that unit have a 5+ invulnerable save against ranged attacks. Once per battle, at the start of any phase, this model can overcharge its kustom force field. If it does, until the end of the phase, this invulnerable save is improved to 4+.",
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
          "t": "5",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Big Mek With Kustom Force Field",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Grenades",
        "Big Mek with Kustom Force Field"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Boyz", "Burna Boyz", "Tankbustas", "Lootas", "Nobz"],
        "extra": ""
      }
    },
    {
      "id": "ca21b913-eb23-5dd4-967e-aef57fcb4dc7",
      "name": "Big Mek With Shokk Attack Gun",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Lootaz ■ Mek Gunz",
      "composition": ["1 Big Mek with Shokk Attack Gun"],
      "loadout": "This model is equipped with: close combat weapon, shokk attack gun.",
      "wargear": ["This model can be equipped with 1 grot assistant."],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Grot Assistant",
            "description": "Once per battle, after rolling to determine how many attacks the bearer’s shokk attack gun makes, you can re-roll that dice.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "More Dakka",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Deranged Snotling Assault",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks; that unit must take a Battle-shock test.",
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
          "t": "5",
          "sv": "4+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Big Mek With Shokk Attack Gun",
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
              "name": "Shokk attack gun",
              "keywords": ["blast", "heavy"],
              "range": "60\"",
              "attacks": "D6+1",
              "skill": "5+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Big Mek with Shokk Attack Gun"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Boyz", "Lootaz", "Mek Gunz"],
        "extra": ""
      }
    },
    {
      "id": "a3ca37e0-666b-541b-a17c-d22ebb42edfc",
      "name": "Big Trakk",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Big Trakk"],
      "loadout": "This model is equipped with: 2 big shootas; armoured hull.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 kannon ◦ 1 supa-kannon"
      ],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. If this model is equipped with a killkannon, it has a transport capacity of 6 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. This model cannot transport Ghazghkull Thraka.",
      "points": [
        {
          "models": "1",
          "cost": "75",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 12"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Spiked Ram",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds.",
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
          "t": "9",
          "sv": "4+",
          "w": "12",
          "ld": "7+",
          "oc": "3",
          "name": "Big Trakk",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Kannon – frag",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Kannon – shell",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Supa-kannon – frag",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Supa-kannon – shell",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3+3"
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
      "keywords": ["Vehicle", "Transport", "Big Trakk"],
      "factions": ["Orks"]
    },
    {
      "id": "60ac82b0-fd1d-599d-8484-c5e926301cfe",
      "name": "Big’ed Bossbunka",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Big’ed Bossbunka"],
      "loadout": "This model is equipped with: big shoota; Gaze of Gork.",
      "wargear": [
        "This model can be equipped with up to 3 additional big shootas."
      ],
      "transport": "This model has a transport capacity of 11 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models.",
      "points": [
        {
          "models": "1",
          "cost": "135",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 11"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ramshackle Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shoutin’ Pole (Aura)",
            "description": "While a friendly Orks unit is within 6\" of this Fortification, improve the Leadership characteristic of models in that unit by 1.",
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
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "0",
          "name": "Big’ed Bossbunka",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Gaze of Gork – glare",
              "keywords": ["blast", "sustained hits d3"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Gaze of Gork – squint",
              "keywords": ["sustained hits d3"],
              "range": "18\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "12",
              "ap": "-4",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Vehicle", "Transport", "Big’ed Bossbunka"],
      "factions": ["Orks"]
    },
    {
      "id": "0ec6442e-cdf6-5669-b5ab-57cccdf4a27f",
      "name": "Blitza-bommer",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Blitza-bommer"],
      "loadout": "This model is equipped with: big shoota; twin supa-shoota; armoured hull.",
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
        "core": ["Deadly Demise D3"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Boom Bomb",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6: on a 4+, that unit suffers D6 mortal wounds.",
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
          "name": "Blitza-bommer",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Twin supa-shoota",
              "keywords": ["rapid fire 2", "sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "4",
              "skill": "5+",
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
      "keywords": ["Vehicle", "Aircraft", "Fly", "Blitza-bommer"],
      "factions": ["Orks"]
    },
    {
      "id": "0c057420-5a2c-598e-a2ce-50c72fff23de",
      "name": "Boomdakka Snazzwagon",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Boomdakka Snazzwagon"],
      "loadout": "This model is equipped with: big shoota; grot blasta; Mek speshul; spiked wheels.",
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
        "core": ["Deadly Demise 1"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dust Trails (Aura)",
            "description": "While an enemy unit is within 6\" of this model, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Boomdakka Snazzwagon",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Grot blasta",
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
              "name": "Mek speshul",
              "keywords": ["assault", "rapid fire 4", "sustained hits 1"],
              "range": "24\"",
              "attacks": "12",
              "skill": "5+",
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
              "name": "Spiked wheels",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Grenades", "Boomdakka Snazzwagon"],
      "factions": ["Orks"]
    },
    {
      "id": "68d7d3de-7926-54df-8238-c1ed05b23fef",
      "name": "Boss Snikrot",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Kommandos",
      "composition": ["1 Boss Snikrot – Epic Hero"],
      "loadout": "This model is equipped with: slugga; Mork’s Teeth.",
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
        "core": ["Infiltrators", "Leader", "Stealth"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Red Skull Kommandos",
            "description": "While this model is leading a unit, models in that unit have the Benefit of Cover.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Kunnin’ Infiltrator",
            "description": "Once per battle, in your Movement phase, instead of making a Normal move with this model’s unit, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.",
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
          "t": "5",
          "sv": "5+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Boss Snikrot",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
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
              "name": "Mork’s Teeth",
              "keywords": ["precision", "twin-linked"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Epic Hero",
        "Boss Snikrot"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Kommandos"],
        "extra": ""
      }
    },
    {
      "id": "9b4c638a-643c-532d-b632-31330c3e0f99",
      "name": "Boss Zagstruk",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Stormboyz",
      "composition": ["1 Boss Zagstruk – Epic Hero"],
      "loadout": "This model is equipped with: Da Vulcha’s Klaws and choppa; slugga.",
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
        "core": ["Deep Strike", "Feel No Pain 6+", "Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Drill Boss",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Plummeting Descent",
            "description": "You can re-roll Charge rolls made for this model’s unit in a turn in which it was set up on the battlefield from Reserves.",
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
          "sv": "4+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Boss Zagstruk",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Da Vulcha’s Klaws and choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Jump Pack",
        "Fly",
        "Character",
        "Epic Hero",
        "Boss Zagstruk"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Stormboyz"],
        "extra": ""
      }
    },
    {
      "id": "126f5eb6-5c28-57fb-a570-21a60a3d85f0",
      "name": "Boyz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Boss Nob", "9-19 Boyz"],
      "loadout": "The Boss Nob is equipped with: slugga; big choppa. Every Boy is equipped with: slugga; choppa.",
      "wargear": [
        "The Boss Nob’s big choppa can be replaced with 1 power klaw.",
        "The Boss Nob’s big choppa and slugga can be replaced with 1 kombi-weapon and 1 close combat weapon.",
        "Any number of Boyz can each have their slugga and choppa replaced with 1 shoota and 1 close combat weapon.",
        "For every 10 models in this unit, 1 Boy’s choppa and slugga can be replaced with one of the following: ◦ 1 big shoota and 1 close combat weapon ◦ 1 rokkit launcha and 1 close combat weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "85",
          "active": true
        },
        {
          "models": "20",
          "cost": "170",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Breakin’ Heads",
            "description": "While a Warboss model is leading this unit, in your Command phase, the first time a Battle-shock test is failed for this unit that phase, if it is within range of an objective marker, you can choose to break some heads. If you do, 1 Bodyguard model in this unit is destroyed and you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "BODYGUARD",
            "description": "If this unit has a Starting Strength of 20, you can attach up to two Leader units to it instead of one (but only if one of those is a Warboss model). If you do, and this unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths.",
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
          "t": "5",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "BOY",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "BOSS NOB",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Shoota",
              "keywords": ["rapid fire 1"],
              "range": "18\"",
              "attacks": "2",
              "skill": "5+",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Battleline", "Mob", "Grenades", "Boyz"],
      "factions": ["Orks"],
      "leadBy": [
        "Big Mek With Kustom Force Field",
        "Big Mek With Shokk Attack Gun",
        "Mad Dok Grotsnik",
        "Mek",
        "Nob With Waaagh! Banner",
        "Painboy",
        "Warboss",
        "Weirdboy"
      ]
    },
    {
      "id": "aaec3250-022f-5250-8811-fad6216836e7",
      "name": "Burna Boyz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1-3 Spanners*",
        "4-12 Burna Boyz *  This unit must contain 1 Spanner for every 4 Burna Boyz it contains."
      ],
      "loadout": "Every Spanner is equipped with: close combat weapon; big shoota. Every Burna Boy is equipped with: burna; cuttin’ flames.",
      "wargear": [
        "Any number of Spanners can each have their big shoota replaced with one of the following: ◦ 1 kustom mega-blasta ◦ 1 rokkit launcha"
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
        },
        {
          "models": "15",
          "cost": "195",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pyromaniaks",
            "description": "Each time a model in this unit makes a ranged attack with a burna that targets an enemy unit within 6\", re-roll a Wound roll of 1. If the target of that attack is also within range of an objective marker, you can re-roll the Wound roll instead.",
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
          "t": "5",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Burna Boyz",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Burna",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Cuttin’ flames",
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
      "keywords": ["Infantry", "Burna Boyz"],
      "factions": ["Orks"],
      "leadBy": [
        "Big Mek With Kustom Force Field",
        "Mad Dok Grotsnik",
        "Painboy"
      ]
    },
    {
      "id": "5a5b64ff-c95d-5b5b-9f3f-db978a1ad4c4",
      "name": "Burna-bommer",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Burna-bommer"],
      "loadout": "This model is equipped with: twin big shoota; twin supa-shoota; armoured hull.",
      "wargear": ["This model can be equipped with 1 skorcha missile rack."],
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
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Burna Bomb",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move. Until the end of the turn, models in that unit cannot have the Benefit of Cover. In addition, roll one D6 for each model in that unit: for each 6, that unit suffers 1 mortal wound.",
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
          "name": "Burna-bommer",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Twin supa-shoota",
              "keywords": ["rapid fire 2", "sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Skorcha missile rack",
              "keywords": ["blast", "ignores cover"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "5+",
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
      "keywords": ["Vehicle", "Fly", "Aircraft", "Burna-bommer"],
      "factions": ["Orks"]
    },
    {
      "id": "e54ae9b9-91d1-5403-9c62-7149c6b5cb08",
      "name": "Chinork Warkopta",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chinork Warkopta"],
      "loadout": "This model is equipped with: big shoota; 2 deffguns; armoured hull.",
      "wargear": [
        "This model can be equipped with up to 2 big bomms.",
        "This model’s big shoota can be replaced with one of the following: ◦ 1 kustom mega-blasta ◦ 1 rokkit launcha ◦ 1 skorcha",
        "This model’s 2 deffguns can be replaced with 2 rattler kannons."
      ],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. This model cannot transport Ghazghkull Thraka, Mega Armour or Jump Pack models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Big Bomms",
            "description": "Once per battle, after the bearer ends a Normal move, you can select one enemy unit it moved across during that move and roll six D6: for each 4+, that unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D3", "Deep Strike", "Firing Deck 12"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aerial Deployment",
            "description": "If this model starts the game in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules.",
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
          "ld": "7+",
          "oc": "2",
          "name": "Chinork Warkopta",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Deffgun",
              "keywords": ["rapid fire 1"],
              "range": "48\"",
              "attacks": "2",
              "skill": "5+",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Rattler kannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "6",
              "skill": "5+",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Skorcha",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
      "keywords": ["Vehicle", "Fly", "Transport", "Chinork Warkopta"],
      "factions": ["Orks"]
    },
    {
      "id": "cd5fc805-278b-5faf-a133-6c0bfb6b33da",
      "name": "Da Red Gobbo",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Gretchin",
      "composition": ["1 Da Red Gobbo – Epic Hero"],
      "loadout": "This model is equipped with: kustom grot blasta; Icon of da Revolushun.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Da Revolushun!",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Has Yoo Been a Good Little Grot This Year?",
            "description": "Once per battle, in your Shooting phase, you can target this model’s unit with the Grenade Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
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
          "t": "2",
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Da Red Gobbo",
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
              "name": "Kustom grot blasta",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "D3",
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
              "name": "Icon of da Revolushun",
              "keywords": ["devastating wounds"],
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
        "Grenades",
        "Epic Hero",
        "Da Red Gobbo"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Gretchin"],
        "extra": ""
      }
    },
    {
      "id": "9640f5b7-a970-5211-b77d-f607db6edf47",
      "name": "Dakkajet",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Dakkajet"],
      "loadout": "This model is equipped with: 2 twin supa-shootas; armoured hull.",
      "wargear": [
        "This model can be equipped with 1 additional twin supa-shoota."
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
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dakkastorm",
            "description": "Each time this model makes a ranged attack, every successful Hit roll scores a Critical Hit.",
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
          "name": "Dakkajet",
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
              "name": "Twin supa-shoota",
              "keywords": ["rapid fire 2", "sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "4",
              "skill": "5+",
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
      "keywords": ["Vehicle", "Fly", "Aircraft", "Dakkajet"],
      "factions": ["Orks"]
    },
    {
      "id": "a7a7a663-bd7e-55fc-b41c-6402d2745af4",
      "name": "Deff Dread",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Deff Dread"],
      "loadout": "This model is equipped with: 2 big shootas; 2 dread klaws; stompy feet.",
      "wargear": [
        "This model’s big shootas can each be replaced with one of the following: ◦ 1 dread klaw ◦ 1 kustom-mega blasta ◦ 1 rokkit launcha ◦ 1 skorcha",
        "This model’s dread klaws can each be replaced with one of the following: ◦ 1 big shoota ◦ 1 kustom-mega blasta ◦ 1 rokkit launcha ◦ 1 skorcha"
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
        "core": ["Deadly Demise 1"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Piston-driven Brutality",
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
          "m": "8\"",
          "t": "9",
          "sv": "2+",
          "w": "8",
          "ld": "7+",
          "oc": "3",
          "name": "Deff Dread",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Skorcha",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Dread klaw",
              "keywords": ["dead choppy"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ],
          "abilities": [
            {
              "name": "Dead Choppy",
              "description": "The Attacks characteristic of this weapon is increased by 1 for each additional dread klaw this model is equipped with.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Deff Dread"],
      "factions": ["Orks"]
    },
    {
      "id": "7a94d5af-39fb-59f0-8d03-c7b4c0d25eaf",
      "name": "Deff Rolla Battle Fortress",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Deff Rolla Battle Fortress"],
      "loadout": "This model is equipped with: kannon; 2 twin big shootas; 2 zzap guns; deff rolla.",
      "wargear": [
        "This model can be equipped with up to 5 big shootas.",
        "Each of this model’s zzap guns can be replaced with one of the following: ◦ 1 lobba ◦ 1 kannon",
        "This model’s kannon can be replaced with one of the following: ◦ 1 lobba ◦ 1 zzap gun",
        "Each of this model’s twin big shootas can be replaced with one of the following: ◦ 1 skorcha ◦ 1 rokkit launcha"
      ],
      "transport": "This model has a transport capacity of 22 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. The Ghazghkull Thraka model takes up the space of 18 models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2", "Firing Deck 22"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rolling Fortress",
            "description": "Each time a ranged attack is allocated to an Orks model from your army, if that model is not fully visible to every model in the attacking unit because of this Deff Rolla Battle Fortress model, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "7+",
          "oc": "8",
          "name": "Deff Rolla Battle Fortress",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Kannon – frag",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Kannon – shell",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Lobba",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Skorcha",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Zzap gun",
              "keywords": ["devastating wounds"],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "2D6",
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
              "name": "Deff rolla",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "9",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Transport",
        "Deff Rolla Battle Fortress"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "76ae3494-a689-5dd3-92e6-99d47032ef82",
      "name": "Deffkilla Wartrike",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Warbikers",
      "composition": ["1 Defkilla Wartrike"],
      "loadout": "This model is equipped with: defkilla boomsticks; killajet; snagga klaw.",
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
        "core": ["Deadly Demise 1", "Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Speedboss",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "High-octane Fuel",
            "description": "Each time this model’s unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this model’s unit.",
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
          "t": "6",
          "sv": "4+",
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Deffkilla Wartrike",
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
              "name": "Deffkilla boomstikks",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "6",
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
              "name": "Killa jet – burna",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Killa jet – cutta",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Snagga klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Character", "Warboss", "Deffkilla Wartrike"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Warbikers"],
        "extra": ""
      }
    },
    {
      "id": "99d257a5-ca17-5cdf-96a1-7473031a1259",
      "name": "Deffkoptas",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Deffkoptas"],
      "loadout": "Every model is equipped with: kopta rokkits; slugga; spinnin’ blades.",
      "wargear": [
        "For every 3 models in this unit, 1 Deffkopta can have its kopta rokkits replaced with 1 kustom mega-blasta."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "115",
          "active": true
        },
        {
          "models": "6",
          "cost": "230",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Deff from Above",
            "description": "Each time this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound.",
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
          "t": "6",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Deffkoptas",
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
              "name": "Kopta rokkits",
              "keywords": ["blast", "twin-linked"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Spinnin’ blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Grenades", "Deffkoptas"],
      "factions": ["Orks"]
    },
    {
      "id": "92388565-ccc5-5969-857f-f2182af1f3bf",
      "name": "Deffkoptas With Big Shootas",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Deffkoptas with Big Shootas"],
      "loadout": "Every model is equipped with: slugga; twin big shoota; spinnin' blades.",
      "wargear": [
        "Any number of models can each have their twin big shoota replaced with one of the following: ◦ 1 kopta rockets ◦ 1 kustom mega-blasta",
        "Any number of models can each be equipped with 1 killsaw."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Deff from Above",
            "description": "Each time this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound.",
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
          "t": "6",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Deffkoptas With Big Shootas",
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
              "name": "Kopta rokkits",
              "keywords": ["blast", "twin-linked"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "12",
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
              "name": "Spinnin’ blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Grenades", "Deffkoptas with Big Shootas"],
      "factions": ["Orks"]
    },
    {
      "id": "85451f33-91b2-5687-a24c-5a80f8dcb4a8",
      "name": "Fighta-bommer",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Fighta-Bommer"],
      "loadout": "This model is equipped with: 3 twin big shootas; armoured hull.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 Grot-guided bomms ◦ 2 wing missiles ◦ Small bomms"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Small Bomms",
            "description": "Each time the bearer ends a Normal move, you can select one enemy unit it moved across during that move and roll three D6: for each 4+, that unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D3"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
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
          "name": "Fighta-bommer",
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
              "name": "Grot-guided bomm",
              "keywords": ["blast", "one shot", "indirect fire"],
              "range": "72\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Wing missiles",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "9",
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
      "keywords": ["Vehicle", "Fly", "Aircraft", "Fighta-Bommer"],
      "factions": ["Orks"]
    },
    {
      "id": "2505a4c1-5b1a-55ab-8340-c2a874d71104",
      "name": "Flash Gitz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kaptin", "4-9 Flash Gitz"],
      "loadout": "Every model is equipped with: snazzgun; choppa.",
      "wargear": ["This unit can be equipped with 1 ammo runt."],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "95",
          "active": true
        },
        {
          "models": "10",
          "cost": "190",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Ammo Runt",
            "description": "Once per battle, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Gun-crazy Show-offs",
            "description": "Each time a model in this unit targets the closest eligible target with its snazzgun, until the end of the phase, that weapon has an Attacks characteristic of 4.",
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
          "t": "5",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Flash Gitz",
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
              "name": "Snazzgun",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Flash Gitz"],
      "factions": ["Orks"],
      "leadBy": ["Kaptin Badrukk"]
    },
    {
      "id": "3928904f-341e-5718-a995-6a87f94d00f6",
      "name": "Gargantuan Squiggoth",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Gargantuan Squiggoth"],
      "loadout": "This model is equipped with: huge tusks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 kannon ◦  1 supa-kannon"
      ],
      "transport": "This model has a transport capacity of 20 Orks Infantry models. Ghazghkull Thraka takes up the space of 18 models. If this model is equipped with a supa-kannon, it has a transport capacity of 15 Orks Infantry models. It cannot transport Mega Armour or Jump Pack models.",
      "points": [
        {
          "models": "1",
          "cost": "440",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6", "Firing Deck 20"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Gargantuan",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Walking Bastion",
            "description": "This model does not suffer the penalty to its Hit rolls for making ranged attacks while enemy units are within Engagement Range of it.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, subtract 6 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "13",
          "sv": "3+",
          "w": "30",
          "ld": "7+",
          "oc": "12",
          "name": "Gargantuan Squiggoth",
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
              "name": "Kannon – frag",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Kannon – shell",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Supa-kannon",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "2D6",
              "skill": "5+",
              "strength": "12",
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
              "name": "Huge tusks – strike",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "12"
            },
            {
              "active": true,
              "name": "Huge tusks – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "18",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Transport",
        "Gargantuan Squiggoth"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "5eaa496c-6dd6-5387-8308-d5e62f207d0c",
      "name": "Ghazghkull Thraka",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following unit: ■ Meganobz If this unit’s Bodyguard unit is destroyed, Ghazkghull Thraka and Makari become a single unit with their original Starting Strength.",
      "composition": ["1 Ghazghkull Thraka – Epic Hero", "1 Makari"],
      "loadout": "Ghazghkull Thraka is equipped with: Mork’s Roar; Gork’s Klaw. Makari is equipped with: Makari’s stabba.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "235",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Prophet of Da Great Waaagh!",
            "description": "While this unit is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll and add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Ghazghkull’s Waaagh! Banner (Aura)",
            "description": "While a friendly Orks unit is within 12\" of Makari, if you have called a Waaagh! this battle round, melee weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SUPREME COMMANDER",
            "description": "If this unit is in your army, its Ghazghkull Thraka model must be your Warlord.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Invulnerable save: Makari 2+",
            "description": "* You cannot re-roll invulnerable saving throws made for this model.",
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
          "m": "5\"",
          "t": "6",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "4",
          "name": "GHAZGHKULL THRAKA",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "5\"",
          "t": "6",
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "MAKARI",
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
              "name": "Mork’s Roar",
              "keywords": ["rapid fire 4"],
              "range": "36\"",
              "attacks": "12",
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
              "name": "Gork’s Klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Makari’s stabba",
              "keywords": ["devastating wounds"],
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
      "keywords": ["Infantry", "Character", "Epic Hero", "Ghazghkull Thraka"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Meganobz"],
        "extra": "If this unit’s Bodyguard unit is destroyed, Ghazkghull Thraka and Makari become a single unit with their original Starting Strength."
      }
    },
    {
      "id": "4ffe5482-08d8-5c01-bf59-a4bb152fd94e",
      "name": "Gorkanaut",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Gorkanaut"],
      "loadout": "This model is equipped with: deffstorm mega-shoota; 2 rokkit launchas; skorcha; 2 twin big shootas; klaw of Gork.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. It cannot transport Ghazghkull Thraka.",
      "points": [
        {
          "models": "1",
          "cost": "295",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Clankin’ Forward",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over enemy models (excluding Monster and Vehicle models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Big an’ Stompy",
            "description": "Each time this model makes a melee attack, if you have called a Waaagh! this battle round, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from this model’s Objective Control characteristic, and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "12",
          "sv": "3+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Gorkanaut",
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
              "name": "Deffstorm mega-shoota",
              "keywords": ["rapid fire 10"],
              "range": "36\"",
              "attacks": "20",
              "skill": "5+",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Skorcha",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Klaw of Gork – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "18",
              "ap": "-3",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Klaw of Gork – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "15",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Towering",
        "Walker",
        "Transport",
        "Gorkanaut"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "c137a3eb-f513-5d58-9659-b9ca41e61b6b",
      "name": "Gretchin",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Runtherds", "10-20 Gretchin"],
      "loadout": "Every Runtherd is equipped with: slugga; grot-smacka. Every Gretchin is equipped with: grot blasta; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "11",
          "cost": "45",
          "active": true
        },
        {
          "models": "22",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Runtherd",
            "description": "While this unit contains one or more Gretchin models, each time an attack targets this unit, Runtherd models in this unit have a Toughness characteristic of 2.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Thievin’ Scavengers",
            "description": "At the start of your Command phase, roll one D6 for each objective marker you control that has one or more units from your army with this ability within range of it. If one or more of those rolls is a 4+, you gain 1CP.",
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
          "t": "2",
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "2",
          "name": "GRETCHIN",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "5*",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "RUNTHERD",
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
              "name": "Grot blasta",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "attacks": "1",
              "skill": "5+",
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
              "name": "Grot-smacka",
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
      "keywords": ["Infantry", "Gretchin"],
      "factions": ["Orks"],
      "leadBy": ["Da Red Gobbo", "Zodgrod Wortsnagga"]
    },
    {
      "id": "84848a7d-ba32-5a07-9dc4-72a8d5092be3",
      "name": "Grot Bomm Launcha",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Grot Bomm Launcha"],
      "loadout": "This model is equipped with: Grot-guided bomms; spiked wheel.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Furious Barrage",
            "description": "Each time this model makes a ranged attack that targets an enemy unit that contains five or more models, you can re-roll the Hit roll.",
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
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Grot Bomm Launcha",
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
              "name": "Grot-guided bomms",
              "keywords": ["blast", "one shot", "indirect fire"],
              "range": "72\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Spiked wheel",
              "keywords": [],
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
      "keywords": ["Mounted", "Speed Freeks", "Grot Bomm Launcha"],
      "factions": ["Orks"]
    },
    {
      "id": "08e43c54-f5f6-5fcc-b067-a85c4005e2b5",
      "name": "Grot Mega-tank",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Grot Mega-Tank"],
      "loadout": "This model is equipped with: Mega-tank weapons; twin big shoota; twin grotzooka; armoured hull.",
      "wargear": [
        "This model’s twin big shoota can be replaced with one of the following: ◦ 1 twin grotzooka ◦ 1 twin kustom mega-blasta ◦ 1 twin rokkit launcha ◦ 1 twin skorcha",
        "This model’s twin grotzooka can be replaced with one of the following: ◦ 1 twin big shoota ◦ 1 twin kustom mega-blasta ◦ 1 twin rokkit launcha ◦ 1 twin skorcha"
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
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bizarrely Resilient",
            "description": "Each time an attack targets this model, worsen the Armour Penetration characteristic of that attack by 1.",
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
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "8+",
          "oc": "4",
          "name": "Grot Mega-tank",
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
              "name": "Mega-tank weapons",
              "keywords": ["rapid fire 10"],
              "range": "18\"",
              "attacks": "10",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "18\"",
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
              "name": "Twin grotzooka",
              "keywords": ["blast", "twin-linked"],
              "range": "18\"",
              "attacks": "D3+3",
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
              "name": "Twin kustom mega-blasta",
              "keywords": ["hazardous", "twin-linked"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Twin rokkit launcha",
              "keywords": ["blast", "twin-linked"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "9",
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
              "name": "Twin skorcha",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Grot", "Grot Mega-Tank"],
      "factions": ["Orks"]
    },
    {
      "id": "01d4c195-6873-5913-b7b9-daa049d45ece",
      "name": "Grot Tanks",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["4-8 Grot Tanks"],
      "loadout": "Every model is equipped with: big shoota; ramshackle hull.",
      "wargear": [
        "Any number of models can each have their big shoota replaced with one of the following: ◦ 1 grotzooka ◦ 1 kustom mega-blasta ◦ 1 rokkit launcha ◦  1 skorcha",
        "For every four models in this unit, one model can be equipped with one of the following in addition to any other weapons: ◦ 1 big shoota ◦ 1 grotzooka ◦ 1 kustom mega-blasta ◦ 1 rokkit launcha ◦  1 skorcha"
      ],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "155",
          "active": true
        },
        {
          "models": "8",
          "cost": "310",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Scatter!",
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
          "m": "10\"",
          "t": "6",
          "sv": "3+",
          "w": "5",
          "ld": "8+",
          "oc": "2",
          "name": "Grot Tanks",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
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
              "name": "Grotzooka",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D3+3",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "9",
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
              "name": "Skorcha",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Ramshackle hull",
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
      "keywords": ["Vehicle", "Grot", "Grot Tanks"],
      "factions": ["Orks"]
    },
    {
      "id": "5680837d-12d4-5c28-9b6e-6ceb36083c1c",
      "name": "Hunta Rig",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hunta Rig"],
      "loadout": "This model is equipped with: ’eavy lobba; stikka kannon; butcha boyz; savage horns and hooves; saw blades.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 21 Beast Snagga Infantry models.",
      "points": [
        {
          "models": "1",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Feel No Pain 6+", "Firing Deck 21"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bail Out, Boyz!",
            "description": "If this Transport is destroyed, you can re-roll the dice when determining if a disembarking model’s unit suffers mortal wounds.",
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
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Hunta Rig",
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
              "name": "’Eavy lobba",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
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
              "name": "Stikka kannon",
              "keywords": ["anti-monster 2+", "anti-vehicle 2+", "snagged"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ],
          "abilities": [
            {
              "name": "Snagged",
              "description": "Each time this weapon scores a hit against an enemy Monster or Vehicle unit, until the end of the turn, if the bearer selects that unit as a target of a charge, add 2 to Charge rolls made for the bearer.",
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
              "name": "Butcha boyz",
              "keywords": [
                "extra attacks",
                "anti-monster 4+",
                "anti-vehicle 4+"
              ],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Savage horns and hooves",
              "keywords": ["extra attacks", "lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "8",
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
              "name": "Saw blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "10",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Transport", "Beast Snagga", "Hunta Rig"],
      "factions": ["Orks"]
    },
    {
      "id": "dee5e9ac-feef-50f5-a899-c2d3e5756b86",
      "name": "Kannonwagon",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kannonwagon"],
      "loadout": "This model is equipped with: supa-kannon; spiked ram.",
      "wargear": ["This model can be equipped with up to 3 big shootas."],
      "transport": "This model has a transport capacity of 6 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. This model cannot transport Ghazghkull Thraka.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Firing Deck 6"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Big Booms",
            "description": "In your Shooting phase, just after selecting a target for this model’s supa-kannon, roll one D6 for the target unit and every other unit within 3\" of that unit: on a 5+, the unit being rolled for is struck by a concussive wave. After this model has finished making its attacks against that target unit this phase, each unit struck by a concussive wave this phase suffers D3 mortal wounds.",
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
          "m": "12\"",
          "t": "10",
          "sv": "4+",
          "w": "16",
          "ld": "7+",
          "oc": "4",
          "name": "Kannonwagon",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Supa-kannon – frag",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Supa-kannon – shell",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3+3"
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
              "name": "Spiked ram",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Transport", "Kannonwagon"],
      "factions": ["Orks"]
    },
    {
      "id": "61b63a65-5fdf-51da-8260-4e320d8cebc1",
      "name": "Kaptin Badrukk",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Flash Gitz",
      "composition": ["1 Kaptin Badrukk – Epic Hero"],
      "loadout": "This model is equipped with: slugga; choppa; Da Rippa.",
      "wargear": ["None"],
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
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Flashiest Gitz",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Ded Glowy Ammo (Aura)",
            "description": "While an enemy Infantry unit is within 6\" of this model, subtract 1 from the Toughness characteristic of models in that unit.",
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
          "t": "5",
          "sv": "3+",
          "w": "6",
          "ld": "7+",
          "oc": "1",
          "name": "Kaptin Badrukk",
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
              "name": "Da Rippa – standard",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Da Rippa – supercharge",
              "keywords": ["hazardous", "heavy", "sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
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
              "name": "Choppa",
              "keywords": [],
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
      "keywords": ["Infantry", "Character", "Epic Hero", "Kaptin Badrukk"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Flash Gitz"],
        "extra": ""
      }
    },
    {
      "id": "c8930509-b506-5fa4-a93d-eded271a58bf",
      "name": "Kill Krusha",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kill Krusha"],
      "loadout": "This model is equipped with: krusha kannon; tracks and wheels.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 twin big shoota ◦ 2 rokkit launchas ◦ 1 skorcha",
        "This model can be equipped with one of the following: ◦ 1 twin big shoota ◦ 2 rokkit launchas ◦ 1 skorcha"
      ],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. The Ghazghkull Thraka model takes up the space of 18 models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2", "Firing Deck 12"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Da Biggest Booms",
            "description": "In your Shooting phase, just after selecting a target for this model’s krusha kannon, the target unit and every other enemy Infantry unit within 3\" of that unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "7+",
          "oc": "8",
          "name": "Kill Krusha",
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
              "name": "Krusha kannon – blast burna",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "3D6",
              "skill": "5+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Krusha kannon – tankhamma shell",
              "keywords": ["heavy"],
              "range": "60\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "16",
              "ap": "-3",
              "damage": "6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Skorcha",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Tracks and wheels",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Transport", "Kill Krusha"],
      "factions": ["Orks"]
    },
    {
      "id": "c70f4da0-73a6-5bb0-9c6f-893a5a9f42b1",
      "name": "Kill Rig",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kill Rig"],
      "loadout": "This model is equipped with: ’eavy lobba; stikka kannon; wurrtower; butcha boyz; savage horns and hooves; saw blades.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 11 Beast Snagga Infantry models.",
      "points": [
        {
          "models": "1",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Feel No Pain 6+", "Firing Deck 11"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Spirit of Gork (Psychic)",
            "description": "At the start of the Fight phase, you can select one friendly Orks unit within 12\" of this model and roll one D6: on a 1, this model suffers D3 mortal wounds; on a 2-5, until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in that unit; on a 6, until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in that unit and those weapons have the [LETHAL HITS] ability.",
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
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Kill Rig",
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
              "name": "’Eavy lobba",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
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
              "name": "Stikka kannon",
              "keywords": ["anti-monster 2+", "anti-vehicle 2+", "snagged"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ],
          "abilities": [
            {
              "name": "Snagged",
              "description": "Each time this weapon scores a hit against an enemy Monster or Vehicle unit, until the end of the turn, if the bearer selects that unit as a target of a charge, add 2 to Charge rolls made for the bearer.",
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
              "name": "Wurrtower",
              "keywords": ["hazardous", "psychic", "torrent"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "N/A",
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
              "name": "Butcha boyz",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+",
                "extra attacks"
              ],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Savage horns and hooves",
              "keywords": ["extra attacks", "lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "8",
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
              "name": "Saw blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "10",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Psyker",
        "Beast Snagga",
        "Kill Rig"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "e195d3fa-316c-57d4-9621-0f45b697607f",
      "name": "Kill Tank",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kill Tank"],
      "loadout": "This model is equipped with: bursta kannon; skorcha; twin big shoota; reinforced ram.",
      "wargear": [
        "This model’s bursta kannon can be replaced with 1 giga shoota."
      ],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. It cannot transport Ghazghkull Thraka.",
      "points": [
        {
          "models": "1",
          "cost": "305",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Wall of Dakka",
            "description": "Each time this model makes a ranged attack that targets a unit within half range, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "12",
          "sv": "3+",
          "w": "24",
          "ld": "6+",
          "oc": "10",
          "name": "Kill Tank",
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
              "name": "Bursta kannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "3D6",
              "skill": "5+",
              "strength": "14",
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
              "name": "Giga shoota",
              "keywords": ["sustained hits 1"],
              "range": "48\"",
              "attacks": "30",
              "skill": "5+",
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
              "name": "Skorcha",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Reinforced ram",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Transport", "Kill Tank"],
      "factions": ["Orks"]
    },
    {
      "id": "17461bcd-24d2-580b-b1e4-aa86fdaaf5bf",
      "name": "Killa Kans",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Killa Kans"],
      "loadout": "Every model is equipped with: Kan shoota; Kan klaw.",
      "wargear": [
        "Each Killa Kan’s Kan shoota can be replaced with one of the following: ◦ 1 grotzooka ◦ 1 rokkit launcha ◦ 1 skorcha"
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
        "core": ["Deadly Demise 1"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shooty Power Trip",
            "description": "Each time this unit is selected to shoot, you can roll one D6: on a 1, the nearest other friendly Orks unit within 12\" of and visible to this unit suffers D3 mortal wounds; on a 2+, until the end of the phase, ranged weapons equipped by models in this unit have the [IGNORES COVER] ability.",
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
          "t": "6",
          "sv": "3+",
          "w": "5",
          "ld": "8+",
          "oc": "2",
          "name": "Killa Kans",
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
              "name": "Kan shoota",
              "keywords": ["devastating wounds", "rapid fire 2"],
              "range": "36\"",
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
              "name": "Grotzooka",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D3+3",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "9",
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
              "name": "Skorcha",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Kan klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Killa Kans"],
      "factions": ["Orks"]
    },
    {
      "id": "907ea7d6-7868-508c-874b-15982396713d",
      "name": "Kommandos",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Boss Nob", "9 Kommandos"],
      "loadout": "Every model is equipped with: slugga; choppa.",
      "wargear": [
        "The Boss Nob’s choppa can be replaced with one of the following: ◦ 1 big choppa ◦ 1 power klaw",
        "Up to 2 Kommandos can each have their slugga and choppa replaced with 1 speshul Kommando shoota and 1 close combat weapon.",
        "1 Kommando’s slugga and choppa can be replaced with 1 breacha ram.",
        "1 Kommando’s slugga and choppa can be replaced with 1 burna and 1 close combat weapon.",
        "1 Kommando’s slugga and choppa can be replaced with 1 rokkit launcha and 1 close combat weapon.",
        "This unit can be equipped with 1 bomb squig.",
        "This unit can be equipped with 1 distraction grot."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "135",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Distraction Grot",
            "description": "Once per battle, in your opponent’s Shooting phase, before making a saving throw for a model in this unit, it can deploy the distraction grot. If it does, until the end of the phase, models in this unit have a 5+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Infiltrators", "Stealth"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sneaky Surprise",
            "description": "Enemy units cannot use the Fire Overwatch Stratagem to shoot at this unit.",
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
          "t": "5",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "KOMMANDOS",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "BOSS NOB",
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
              "name": "Burna",
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
              "name": "Speshul Kommando shoota",
              "keywords": ["rapid fire 2"],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Breacha ram",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Kommandos"],
      "factions": ["Orks"],
      "leadBy": ["Boss Snikrot"]
    },
    {
      "id": "04e65945-62f8-54a9-82b7-23b92c74a0d2",
      "name": "Kustom Boosta-blasta",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kustom Boosta-blasta"],
      "loadout": "This model is equipped with: burna exhausts; grot blasta; rivet kannon; spiked wheels.",
      "wargear": ["None"],
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
        "core": ["Deadly Demise 1"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rivetin’ Dakka",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with a rivet kannon. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Kustom Boosta-blasta",
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
              "name": "Burna exhausts",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "6\"",
              "attacks": "2D6",
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
              "name": "Grot blasta",
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
              "name": "Rivet kannon",
              "keywords": ["assault", "rapid fire 3"],
              "range": "36\"",
              "attacks": "6",
              "skill": "5+",
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
              "name": "Spiked wheels",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Kustom Boosta-blasta"],
      "factions": ["Orks"]
    },
    {
      "id": "5a77fd8b-0d4c-5bf6-86e9-4bb6c0d9ca6d",
      "name": "Lifta Wagon",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Lifta Wagon"],
      "loadout": "This model is equipped with: lifta-droppa; tracks and wheels.",
      "wargear": [
        "This model’s tracks and wheels can be replaced with 1 deff rolla.",
        "This model can be equipped with 1 grabbin’ klaw.",
        "This model can be equipped with 1 wreckin’ ball.",
        "This model can be equipped with one of the following: ◦ 1 big shoota ◦ 2 big shootas ◦ 1 big shoota and 1 rokkit launcha ◦ 1 rokkit launcha ◦ 2 rokkit launchas"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Da Bigger Dey Are, da Better Dey Drop",
            "description": "Each time an attack made with this model’s lifta-droppa destroys an enemy model that has the Deadly Demise ability, that model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of 3+ instead of on a 6.",
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
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Lifta Wagon",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Lifta-droppa",
              "keywords": ["anti-vehicle 3+"],
              "range": "36\"",
              "attacks": "4",
              "skill": "5+",
              "strength": "6",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Deff rolla",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "9",
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
              "name": "Grabbin’ klaw",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Tracks and wheels",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
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
              "name": "Wreckin’ ball",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "0",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Lifta Wagon"],
      "factions": ["Orks"]
    },
    {
      "id": "4313053f-9a2a-5a45-9427-5cba8aef2c7e",
      "name": "Lootas",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1-3 Spanners*",
        "4-12 Lootas * This unit must contain 1 Spanner for every 4 Lootas it contains."
      ],
      "loadout": "Every Spanner is equipped with: big shoota; close combat weapon. Every Loota is equipped with: deffgun; close combat weapon.",
      "wargear": [
        "Any number of Spanners can each have their big shoota replaced with one of the following: ◦ 1 kustom mega-blasta ◦ 1 rokkit launcha"
      ],
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
        },
        {
          "models": "15",
          "cost": "165",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
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
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Lootas",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Deffgun",
              "keywords": ["heavy", "rapid fire 1"],
              "range": "48\"",
              "attacks": "2",
              "skill": "6+",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Lootas"],
      "factions": ["Orks"],
      "leadBy": [
        "Big Mek With Kustom Force Field",
        "Mad Dok Grotsnik",
        "Mek",
        "Painboy"
      ]
    },
    {
      "id": "7ec0d3aa-8f52-57b5-b3f7-e313c4f10db3",
      "name": "Mad Dok Grotsnik",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Burna Boyz ■ Tankbustas ■ Lootas ■ Nobz",
      "composition": ["1 Mad Dok Grotsnik – Epic Hero"],
      "loadout": "This model is equipped with: slugga; power klaw; ’urty syringe.",
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
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mad Dok",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "One Scalpel Short of a Medpack",
            "description": "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Fell Back.",
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
          "t": "5",
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Mad Dok Grotsnik",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Power klaw",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
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
              "name": "’Urty syringe",
              "keywords": ["anti-infantry 4+", "extra attacks", "precision"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
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
        "Painboy",
        "Mad Dok Grotsnik"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Boyz", "Burna Boyz", "Tankbustas", "Lootas", "Nobz"],
        "extra": ""
      }
    },
    {
      "id": "08091535-8e6c-5553-be4e-fb5d3ab268e7",
      "name": "Mega Dread",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Mega Dread"],
      "loadout": "This model is equipped with: 2 boombits; killkannon; dread rippa klaw; stompy feet.",
      "wargear": [
        "This model’s killkannon can be replaced with one of the following: ◦ 1 dread killsaw ◦ 1 dread rippa klaw",
        "This model’s dread rippa klaw can be replaced with one of the following: ◦ 1 dread killsaw ◦ 1 killkannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "225",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mega Carnage",
            "description": "Each time this model is selected to fight, you can select one enemy unit within Engagement Range of it and roll one D6, adding 2 to the result if this model made a Charge move this turn: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Dead Rippy",
            "description": "If this model is equipped with 2 dread killsaws, those weapons have the [TWIN-LINKED] ability. If this model is equipped with 2 dread rippa klaws, those weapons have the [TWIN-LINKED] ability.",
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
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Mega Dread",
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
              "name": "Boombits",
              "keywords": ["torrent"],
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
              "name": "Killkannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Dread killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Dread rippa klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Stompy feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Mega Dread"],
      "factions": ["Orks"]
    },
    {
      "id": "4a45c36d-652e-5cdb-a08d-a28f6644b794",
      "name": "Meganobz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2-6 Meganobz"],
      "loadout": "Every model is equipped with: kustom shoota; power klaw.",
      "wargear": [
        "Any number of models can each have their kustom shoota and power klaw replaced with one of the following: ◦ 1 kombi-weapon and 1 power klaw ◦ 1 kombi-weapon and 1 killsaw ◦ 1 kustom shoota and 1 killsaw ◦ 1 killsaw and 1 power klaw ◦ 1 twin killsaw"
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "65",
          "active": true
        },
        {
          "models": "3",
          "cost": "100",
          "active": true
        },
        {
          "models": "5",
          "cost": "165",
          "active": true
        },
        {
          "models": "6",
          "cost": "200",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Krumpin’ Time",
            "description": "During the battle round in which you call a Waaagh!, melee weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability.",
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Meganobz",
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
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Kustom shoota",
              "keywords": ["rapid fire 2"],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "12",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
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
              "name": "Twin killsaw",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Mega Armour", "Meganobz"],
      "factions": ["Orks"],
      "leadBy": [
        "Big Mek In Mega Armour",
        "Ghazghkull Thraka",
        "Warboss In Mega Armour"
      ]
    },
    {
      "id": "fd282ce4-c66d-59cb-a801-9077e5569da7",
      "name": "Megatrakk Scrapjet",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Megatrakk Scrapjet"],
      "loadout": "This model is equipped with: rokkit kannon; twin big shoota; wing missiles; nose drill.",
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
        "core": ["Deadly Demise 1"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Drill Through",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds.",
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Megatrakk Scrapjet",
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
              "name": "Rokkit kannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+1",
              "skill": "5+",
              "strength": "9",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Wing missiles",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "9",
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
              "name": "Nose drill",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Megatrakk Scrapjet"],
      "factions": ["Orks"]
    },
    {
      "id": "0d7f5f3a-61ae-5be6-9cbb-217e8b4a9421",
      "name": "Mek",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Lootas ■ Mek Gunz ■ Nobz ■ Tankbustas",
      "composition": ["1 Mek"],
      "loadout": "This model is equipped with: kustom mega-slugga; wrench.",
      "wargear": ["This model’s wrench can be replaced with 1 killsaw."],
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
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mekboy",
            "description": "While this model is within 3\" of one or more friendly Orks Vehicle units, this model has the Lone Operative ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mekaniak",
            "description": "At the end of your Movement phase, you can select one friendly Orks Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds, and, until the start of your next Movement phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn.",
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
          "t": "5",
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Mek",
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
              "name": "Kustom mega-slugga",
              "keywords": ["blast", "hazardous"],
              "range": "12\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "8",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
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
              "name": "Wrench",
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
      "keywords": ["Infantry", "Character", "Mek"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Boyz", "Lootas", "Mek Gunz", "Nobz", "Tankbustas"],
        "extra": ""
      }
    },
    {
      "id": "71a0da31-35c6-57d1-89b9-ca161b90bb1b",
      "name": "Mek Gunz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Mek Gunz"],
      "loadout": "Every model is equipped with: smasha gun; grot crew. Designer’s Note: Place five Grot Crew tokens next to each Mek Gun model when this unit is first set up, removing one each time its Mek Gun model loses a wound (a Mek Gun model itself is considered to represent its final wound).",
      "wargear": [
        "Each model’s smasha gun can be replaced with one of the following: ◦ 1 bubblechukka ◦ 1 kustom mega-kannon ◦ 1 traktor kannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "45",
          "active": true
        },
        {
          "models": "2",
          "cost": "90",
          "active": true
        },
        {
          "models": "3",
          "cost": "135",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Splat!",
            "description": "Each time a model in this unit makes a ranged attack that targets a unit containing 10 or more models, re-roll a Hit roll of 1.",
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
          "t": "5",
          "sv": "5+",
          "w": "6",
          "ld": "8+",
          "oc": "2",
          "name": "Mek Gunz",
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
              "name": "Bubblechukka – big bubble",
              "keywords": ["bubblechukka", "blast"],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Bubblechukka – wobbly bubble",
              "keywords": ["bubblechukka", "blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Bubblechukka – dense bubble",
              "keywords": ["bubblechukka", "blast"],
              "range": "48\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+3"
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
              "name": "Grot crew",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "5+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Mek Gunz"],
      "factions": ["Orks"],
      "leadBy": ["Big Mek With Shokk Attack Gun", "Mek"]
    },
    {
      "id": "4b67d054-edc2-5a96-951f-e7bde1346f83",
      "name": "Meka-dread",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Meka-Dread"],
      "loadout": "This model is equipped with: killkannon; dread rippa klaw; stompy feet.",
      "wargear": [
        "This model’s killkannon can be replaced with one of the following: ◦ 1 dread killsaw ◦ 1 dread rippa klaw",
        "This model’s dread rippa klaw can be replaced with one of the following: ◦ 1 dread killsaw ◦ 1 killkannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "230",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mekaniak",
            "description": "At the end of your Movement phase, you can select one friendly Orks Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds, and, until the start of your next Movement phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Dead Rippy",
            "description": "If this model is equipped with 2 dread killsaws, those weapons have the [TWIN-LINKED] ability. If this model is equipped with 2 dread rippa klaws, those weapons have the [TWIN-LINKED] ability.",
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
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Meka-dread",
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
              "name": "Killkannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Dread killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Dread rippa klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Stompy feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Meka-Dread"],
      "factions": ["Orks"]
    },
    {
      "id": "c33dd7fe-1ade-5788-bf63-5b801dfef7f1",
      "name": "Morkanaut",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Morkanaut"],
      "loadout": "This model is equipped with: kustom mega-blasta; kustom mega-zappa; 2 rokkit launchas; 2 twin big shootas; klaw of Mork.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. It cannot transport Ghazghkull Thraka.",
      "points": [
        {
          "models": "1",
          "cost": "350",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Clankin’ Forward",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over enemy models (excluding Monster and Vehicle models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Big an’ Shooty",
            "description": "Each time this model makes a ranged attack during the battle round in which you called a Waaagh!, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from this model’s Objective Control characteristic, and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "12",
          "sv": "3+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Morkanaut",
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
              "name": "Kustom mega-blasta",
              "keywords": ["hazardous"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Kustom mega-zappa",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "5+",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Klaw of Mork – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "18",
              "ap": "-3",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Klaw of Mork – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Towering",
        "Transport",
        "Walker",
        "Morkanaut"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "9fef8723-d3b7-5638-8b79-5ed7e3399ef4",
      "name": "Mozrog Skragbad",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Mozrog Skragbad – Epic Hero"],
      "loadout": "This model is equipped with: thump gun; Big Chompa’s jaws; gutrippa.",
      "wargear": ["None"],
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
        "core": ["Deadly Demise 1", "Feel No Pain 4+"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Da Bigger Dey iz…",
            "description": "Each time this model makes an attack that targets a Monster or Vehicle unit, add 1 to the Damage characteristic of that attack. Each time this model makes an attack that targets a Titanic unit, add 2 to the Damage characteristic of that attack instead.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Hungry Chompa",
            "description": "Each time this model declares a charge, until the end of the turn, each time this model makes an attack, an unmodified successful Wound roll of 5+ scores a Critical Wound.",
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
          "sv": "3+",
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Mozrog Skragbad",
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
              "name": "Thump gun",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D3",
              "skill": "5+",
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
              "name": "Big Chompa’s jaws",
              "keywords": ["devastating wounds", "extra attacks"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "7",
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
              "name": "Gutrippa",
              "keywords": ["anti-monster 4+", "anti-vehicle 4+"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "7",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Beast Snagga",
        "Epic Hero",
        "Mozrog Skragbad"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "2b72a084-1c84-549d-933b-52c997e45ea4",
      "name": "Nob On Smasha Squig",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Squighog Boyz",
      "composition": ["1 Nob on Smasha Squig"],
      "loadout": "This model is equipped with: slugga; big choppa; smasha squig jaws.",
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
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Hogboss",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Hunt Them Down",
            "description": "During the battle round in which you call a Waaagh!, this model’s big choppa has the [ANTI-MONSTER 3+] and [ANTI-VEHICLE 3+] abilities.",
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
          "sv": "4+",
          "w": "5",
          "ld": "7+",
          "oc": "2",
          "name": "Nob On Smasha Squig",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Big choppa",
              "keywords": ["anti-monster 4+", "anti-vehicle 4+"],
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
              "name": "Smasha squig jaws",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Beast Snagga",
        "Nob on Smasha Squig"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Squighog Boyz"],
        "extra": ""
      }
    },
    {
      "id": "922d4b22-cc64-5dac-a376-097aa3d3c943",
      "name": "Nob With Waaagh! Banner",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Nobz",
      "composition": ["1 Nob with Waaagh! Banner"],
      "loadout": "This model is equipped with: kustom shoota; Waaagh! banner.",
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
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Plant the Waaagh! Banner",
            "description": "Once per battle, at the start of the battle round, this model can use this ability. If it does, until the start of the next battle round, this model’s unit gains the benefits of the Waaagh! ability as if you had called a Waaagh! this battle round.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Da Boss Iz Watchin’",
            "description": "While this model is gaining the benefits of the Waaagh! ability, it has a 4+ invulnerable save and an Objective Control characteristic of 5.",
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
          "t": "5",
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Nob With Waaagh! Banner",
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
              "name": "Kustom shoota",
              "keywords": ["rapid fire 2"],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Waaagh! banner",
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
      "keywords": ["Infantry", "Character", "Nob with Waaagh! Banner"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Boyz", "Nobz"],
        "extra": ""
      }
    },
    {
      "id": "40af5f86-133a-5802-9ee9-4f0a8b483b56",
      "name": "Nobz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Boss Nob", "4-9 Nobz"],
      "loadout": "Every model is equipped with: slugga; big choppa.",
      "wargear": [
        "Any number of models can each have their big choppa replaced with 1 power klaw.",
        "Any number of models can each have their slugga and big choppa replaced with 1 kombi-weapon and 1 close combat weapon.",
        "For every 5 models in this unit, this unit can be equipped with 1 ammo runt."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "115",
          "active": true
        },
        {
          "models": "10",
          "cost": "230",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Ammo Runt",
            "description": "Once per battle for each ammo runt this unit has, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Da Boss’ Ladz",
            "description": "While a Warboss model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll.",
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
          "t": "5",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Nobz",
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
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Nobz"],
      "factions": ["Orks"],
      "leadBy": [
        "Big Mek With Kustom Force Field",
        "Mad Dok Grotsnik",
        "Mek",
        "Nob With Waaagh! Banner",
        "Painboy",
        "Warboss"
      ]
    },
    {
      "id": "504302b7-f7fa-51f7-896d-5ee4bda870c4",
      "name": "Nobz On Warbikes",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Nobz on Warbikes"],
      "loadout": "Every model is equipped with: twin dakkagun; choppa; close combat weapon.",
      "wargear": [
        "Any number of models can each be equipped with 1 slugga.",
        "Any number of models can each have their choppa replaced with one of the following: ◦ 1 big choppa ◦ 1 killsaw ◦ 1 power klaw ◦ 1 power stabba ◦ 1 slugga"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "125",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Drive-by Krumpin'",
            "description": "Each time this unit Consolidates, each model in this unit can move up to 6\" instead of up to 3\".",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SPEED FREEKS MOB",
            "description": "If a model from your army with the Leader ability can be attached to a Warbikers unit, it can be attached to this unit instead.",
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
          "t": "6",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Nobz On Warbikes",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Twin dakkagun",
              "keywords": ["assault", "rapid fire 2", "twin-linked"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "12",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
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
              "name": "Power stabba",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Speed Freeks", "Grenades", "Nobz on Warbikes"],
      "factions": ["Orks"]
    },
    {
      "id": "00de84f1-3352-56ca-944e-a272f9101301",
      "name": "Painboss",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Beast Snagga Boyz",
      "composition": ["1 Painboss"],
      "loadout": "This model is equipped with: Beast Snagga klaw.",
      "wargear": ["This model can be equipped with 1 grot orderly."],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "70",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Grot Orderly",
            "description": "Once per battle, in your Command phase, if the bearer is leading a unit that is below its Starting Strength, you can return up to D3 destroyed Bodyguard models to that unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dok’s Toolz",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Sawbonez",
            "description": "At the end of your Movement phase, select one friendly Beast Snagga Character model within 3\" of this model. That model is healed and regains up to 3 lost wounds. Each model can only be healed once per turn.",
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
          "t": "5",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Painboss",
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
              "name": "Beast Snagga klaw",
              "keywords": ["anti-monster 4+", "anti-vehicle 4+"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Beast Snagga", "Painboss"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Beast Snagga Boyz"],
        "extra": ""
      }
    },
    {
      "id": "233c4eaf-0ffd-51c8-816d-3a05bb14b6bf",
      "name": "Painboy",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Nobz ■ Lootas ■ Burna Boyz ■ Tankbustas",
      "composition": ["1 Painboy"],
      "loadout": "This model is equipped with: power klaw; ’urty syringe.",
      "wargear": ["This model can be equipped with 1 grot orderly."],
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
            "name": "Grot Orderly",
            "description": "Once per battle, in your Command phase, if the bearer is leading a unit that is below its Starting Strength, you can return up to D3 destroyed Bodyguard models to that unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dok’s Toolz",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Hold Still and Say ‘Aargh!’",
            "description": "Each time an attack made by this model with its ’urty syringe scores a Critical Wound against a unit (excluding Vehicle units), that unit suffers D6 mortal wounds.",
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
          "t": "5",
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Painboy",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
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
              "name": "’Urty syringe",
              "keywords": ["anti-infantry 4+", "extra attacks", "precision"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Painboy"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Boyz", "Nobz", "Lootas", "Burna Boyz", "Tankbustas"],
        "extra": ""
      }
    },
    {
      "id": "5de811e6-cb66-5e2f-a060-097f4f0c5e52",
      "name": "Painboy On Warbike",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Warbikers",
      "composition": ["1 Painboy on Warbike"],
      "loadout": "This model is equipped with: twin dakkagun; power klaw; 'urty syringe.",
      "wargear": ["This model’s power klaw can be replaced with 1 killsaw."],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dok’s Toolz",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Hold Still and Say ‘Aargh!’",
            "description": "Each time an attack made by this model with its ’urty syringe scores a Critical Wound against a unit (excluding Vehicle units), that unit suffers D6 mortal wounds.",
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
          "t": "6",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Painboy On Warbike",
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
              "name": "Twin dakkagun",
              "keywords": ["assault", "rapid fire 2", "twin-linked"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "12",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
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
              "name": "’Urty syringe",
              "keywords": ["anti-infantry 4+", "extra attacks", "precision"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Speed Freeks",
        "Character",
        "Painboy on Warbike"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Warbikers"],
        "extra": ""
      }
    },
    {
      "id": "cf029f7c-7e85-5ab4-9b12-acacb0beb38e",
      "name": "Rukkatrukk Squigbuggy",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Rukkatrukk Squigbuggy"],
      "loadout": "This model is equipped with: sawn-off shotgun; squig-launchas; saw blades.",
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
        "core": ["Deadly Demise 1"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Buzzer Squigs",
            "description": "Each time this model makes an attack with its squig launchas that targets an Infantry unit, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Squig Mine",
            "description": "Once per battle, at the start of any phase, select one enemy unit within 3\" of this model and roll one D6: on a 4+, that enemy unit suffers D6 mortal wounds. Designer’s Note: Place a Squig Mine token next to the model, removing it once this ability has been used.",
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Rukkatrukk Squigbuggy",
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
              "name": "Sawn-off shotgun",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "2",
              "skill": "5+",
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
              "name": "Squig launchas",
              "keywords": ["blast", "ignores cover", "indirect fire"],
              "range": "36\"",
              "attacks": "D6+6",
              "skill": "5+",
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
              "name": "Saw blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Rukkatrukk Squigbuggy"],
      "factions": ["Orks"]
    },
    {
      "id": "31525a0d-8f9d-5999-b8b6-eb8e8aa13d1f",
      "name": "Shokkjump Dragsta",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Shokkjump Dragsta"],
      "loadout": "This model is equipped with: kustom shokk rifle; rokkits; saw blades.",
      "wargear": ["None"],
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
        "core": ["Deadly Demise 1"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shokk Tunnel",
            "description": "Each time this model is selected to Advance, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.",
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Shokkjump Dragsta",
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
              "name": "Kustom shokk rifle",
              "keywords": ["devastating wounds", "hazardous", "precision"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
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
              "name": "Rokkits",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Saw blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Shokkjump Dragsta"],
      "factions": ["Orks"]
    },
    {
      "id": "d19e9983-7a4d-5130-aaa8-d57e384858e1",
      "name": "Skorchas",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Skorchas"],
      "loadout": "Every model is equipped with: skorcha; spiked wheel.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pyromaniaks",
            "description": "Each time a model in this unit makes a ranged attack with a Torrent weapon that targets an enemy unit within 6\", re-roll a Wound roll of 1. If the target of that attack is also within range of an objective marker, you can re-roll the Wound roll instead.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SPEED FREEKS",
            "description": "If a model from your army with the Leader ability can be attached to a Warbikers unit, it can be attached to this unit instead.",
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
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Skorchas",
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
              "name": "Skorcha",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Spiked wheel",
              "keywords": [],
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
      "keywords": ["Mounted", "Speed Freeks", "Skorchas"],
      "factions": ["Orks"]
    },
    {
      "id": "4b9efeb7-1988-517f-aadc-fceaf0ef3ceb",
      "name": "Squiggoth",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Squiggoth"],
      "loadout": "This model is equipped with: gorin’ horns.",
      "wargear": ["This model can be equipped with 1 kannon."],
      "transport": "This model has a transport capacity of 10 Orks Infantry models. If this model is equipped with a kannon, it has a transport capacity of 6 Orks Infantry models. It cannot transport Mega Armour, Jump Pack or Ghazghkull Thraka models.",
      "points": [
        {
          "models": "1",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Firing Deck 10"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Trample",
            "description": "Each time this model is selected to fight, you can select one enemy unit within Engagement Range of it and roll one D6, adding 2 to the result if this model made a Charge move this turn: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds.",
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
          "m": "10\"",
          "t": "10",
          "sv": "3+",
          "w": "18",
          "ld": "7+",
          "oc": "5",
          "name": "Squiggoth",
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
              "name": "Kannon – frag",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Kannon – shell",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Gorin’ horns – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Gorin’ horns – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "9",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Transport", "Squiggoth"],
      "factions": ["Orks"]
    },
    {
      "id": "576c28c7-b40a-5ad3-a820-bd80cf729190",
      "name": "Squighog Boyz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Squighog Boyz"],
      "loadout": "Every model is equipped with: saddlegit weapons; stikka; squighog jaws and saddlegits.",
      "wargear": [
        "For every 3 models in this unit, this unit can be equipped with 1 bomb squig."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "110",
          "active": true
        },
        {
          "models": "6",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Bomb Squig",
            "description": "Once per battle for each bomb squig this unit has, after this unit ends a Normal move, you can select one enemy unit within 12\" of it and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Feel No Pain 5+"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Wild Ride",
            "description": "You can ignore any or all modifiers to this unit’s Move characteristic and to Advance and Charge rolls made for this unit.",
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
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "Squighog Boyz",
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
              "name": "Saddlegit weapons",
              "keywords": ["assault"],
              "range": "9\"",
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
              "name": "Stikka",
              "keywords": ["assault", "anti-monster 4+", "anti-vehicle 4+"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Squighog jaws and saddlegits",
              "keywords": ["extra attacks"],
              "range": "Melee",
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
              "name": "Stikka",
              "keywords": ["anti-monster 4+", "anti-vehicle 4+", "lance"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Beast Snagga", "Grenades", "Squighog Boyz"],
      "factions": ["Orks"],
      "leadBy": ["Nob On Smasha Squig"]
    },
    {
      "id": "4a9a33db-6bd9-570c-8a96-6a7841919d6b",
      "name": "Stompa",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Stompa"],
      "loadout": "This model is equipped with: 3 big shootas; deffkannon; skorcha; supa-gatler; supa-rokkits; twin big shoota; mega-choppa.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 22 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. Ghazghkull Thraka takes up the space of 18 models.",
      "points": [
        {
          "models": "1",
          "cost": "800",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Waaagh! Effigy (Aura)",
            "description": "While a friendly Orks unit is within 12\" of this model, each time you take a Battle-shock test for that unit, add 1 to that test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Stompin’ Forward",
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
          "description": "While this model has 1-10 wounds remaining, subtract 6 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "14",
          "sv": "2+",
          "w": "30",
          "ld": "6+",
          "oc": "12",
          "name": "Stompa",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Deffkannon",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "3D6",
              "skill": "5+",
              "strength": "14",
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
              "name": "Skorcha",
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
              "name": "Supa-gatler",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "20",
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
              "name": "Supa-rokkits",
              "keywords": ["blast"],
              "range": "100\"",
              "attacks": "D6",
              "skill": "5+",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Mega-choppa – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "24",
              "ap": "-5",
              "damage": "10"
            },
            {
              "active": true,
              "name": "Mega-choppa – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "18",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Titanic",
        "Towering",
        "Walker",
        "Stompa"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "9fae7cc2-0704-5d98-9819-5c9164820636",
      "name": "Stormboyz",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Boss Nob", "4-9 Stormboyz"],
      "loadout": "Every model is equipped with: slugga; choppa.",
      "wargear": ["The Boss Nob’s choppa can be replaced with 1 power klaw."],
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
        "core": ["Deep Strike"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Full Throttle",
            "description": "This unit is eligible to declare a charge in a turn in which it Advanced. If it does, before making that Charge move, roll one D6 for each model in this unit: for each 1, this unit suffers 1 mortal wound. You cannot use this ability during the battle round in which you call a Waaagh!.",
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
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "STORMBOY",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "12\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "BOSS NOB",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Jump Pack", "Fly", "Grenades", "Stormboyz"],
      "factions": ["Orks"],
      "leadBy": ["Boss Zagstruk"]
    },
    {
      "id": "dcb10a15-0567-5c33-83f9-ba6d36a3b99b",
      "name": "Tankbustas",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Boss Nob", "4 Tankbustas"],
      "loadout": "The Boss Nob is equipped with: rokkit launcha; close combat weapon. One Tankbusta is equipped with: pair of rokkit pistols; close combat weapon. One other Tankbusta is equipped with: tankhammer. Two other Tankbustas are equipped with: rokkit launcha; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "135",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tank Hunters",
            "description": "Each time a model in this unit makes an attack that targets a Monster or Vehicle unit, add 1 to the Hit roll and add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Bomb Squigs",
            "description": "Twice per battle, after this unit ends a Normal move, you can select one enemy unit within 12\" of it and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds. Designer’s Note: Place two Bomb Squig tokens next to the unit, removing one each time this unit uses this ability.",
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
          "t": "5",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "TANKBUSTA",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "BOSS NOB",
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
              "name": "Pair of rokkit pistols",
              "keywords": ["pistol", "twin-linked"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "7",
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
              "name": "Rokkit launcha",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
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
              "name": "Tankhammer",
              "keywords": [
                "anti-vehicle 4+",
                "devastating wounds",
                "hazardous"
              ],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Tankbustas"],
      "factions": ["Orks"],
      "leadBy": [
        "Big Mek With Kustom Force Field",
        "Mad Dok Grotsnik",
        "Mek",
        "Painboy"
      ]
    },
    {
      "id": "7fdf8eed-2556-52b8-b54f-ad8be211aef0",
      "name": "Trukk",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Trukk"],
      "loadout": "This model is equipped with: big shoota; spiked wheels.",
      "wargear": ["This model can be equipped with 1 wreckin’ ball."],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. Each Mega Armour model takes up the space of 2 models. It cannot transport Jump Pack or Ghazghkull Thraka models.",
      "points": [
        {
          "models": "1",
          "cost": "50",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 12"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Grot Riggers",
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
          "t": "8",
          "sv": "4+",
          "w": "10",
          "ld": "7+",
          "oc": "2",
          "name": "Trukk",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Spiked wheels",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Wreckin’ ball",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "0",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Transport", "Dedicated Transport", "Trukk"],
      "factions": ["Orks"]
    },
    {
      "id": "01b374d7-1471-53cf-bff9-cca5d7efcf13",
      "name": "Warbikers",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Boss Nob on Warbike", "2-5 Warbikers"],
      "loadout": "Every model is equipped with: twin dakkagun; close combat weapon.",
      "wargear": [
        "Each Warbiker can be equipped with one of the following: ◦ 1 slugga ◦ 1 choppa",
        "The Boss Nob on Warbike can be equipped with one of the following: ◦ 1 slugga ◦ 1 big choppa ◦ 1 power klaw"
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
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Drive-by Dakka",
            "description": "Each time a model in this unit makes a ranged attack that targets a unit within 9\", improve the Armour Penetration characteristic of that attack by 1.",
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
          "t": "6",
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "WARBIKER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "12\"",
          "t": "6",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "WARBIKE",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Twin dakkagun",
              "keywords": ["rapid fire 2", "assault", "twin-linked"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Grenades", "Warbikers"],
      "factions": ["Orks"],
      "leadBy": [
        "Big Mek On Warbike",
        "Deffkilla Wartrike",
        "Painboy On Warbike"
      ]
    },
    {
      "id": "4adbb8b3-5ea7-5582-b45b-ba8626da7226",
      "name": "Warboss",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Nobz",
      "composition": ["1 Warboss"],
      "loadout": "This model is equipped with: kombi-weapon; twin slugga; big choppa.",
      "wargear": [
        "This model’s big choppa can be replaced with 1 power klaw.",
        "This model can be equipped with 1 attack squig."
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
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Might is Right",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Da Biggest and da Best",
            "description": "When you call a Waaagh!, until the start of the next battle round, add 4 to the Attacks characteristic of this model’s melee weapons.",
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
          "t": "5",
          "sv": "4+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Warboss",
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
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Twin slugga",
              "keywords": ["pistol", "twin-linked"],
              "range": "12\"",
              "attacks": "2",
              "skill": "5+",
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
              "name": "Attack squig",
              "keywords": ["extra attacks"],
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Grenades", "Warboss"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Boyz", "Nobz"],
        "extra": ""
      }
    },
    {
      "id": "13010bb0-bf6d-5579-bf91-ff2402f6b4b7",
      "name": "Warboss In Mega Armour",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Meganobz",
      "composition": ["1 Warboss in Mega Armour"],
      "loadout": "This model is equipped with: big shoota; ’uge choppa.",
      "wargear": ["None"],
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
        "core": ["Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Might is Right",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Dead ’ard",
            "description": "When you call a Waaagh!, until the start of the next battle round, this model has the Feel No Pain 4+ ability.",
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
          "w": "7",
          "ld": "6+",
          "oc": "1",
          "name": "Warboss In Mega Armour",
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
              "name": "Big shoota",
              "keywords": ["rapid fire 2"],
              "range": "36\"",
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
              "name": "’Uge choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "12",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Mega Armour",
        "Warboss in Mega Armour"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Meganobz"],
        "extra": ""
      }
    },
    {
      "id": "0608e43e-d253-53e1-abca-bd0a29b29cc1",
      "name": "Warboss On Warbike",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Warboss on Warbike"],
      "loadout": "This model is equipped with: twin dakkagun; killsaw.",
      "wargear": [
        "This model’s killsaw can be replaced with one of the following: ◦ 1 big choppa ◦ 1 power klaw"
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
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Speedboss",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "High-octane Fuel",
            "description": "Each time this model’s unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this model’s unit.",
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
          "t": "6",
          "sv": "4+",
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "Warboss On Warbike",
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
              "name": "Twin dakkagun",
              "keywords": ["assault", "rapid fire 2", "twin-linked"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "12",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Speed Freeks",
        "Grenades",
        "Warboss"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "2b2c9f57-a3f8-523c-bcc8-7469aedc5952",
      "name": "Warbuggies",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Warbuggies"],
      "loadout": "Every model is equipped with: twin big shoota; spiked wheels.",
      "wargear": [
        "Any number of models can each have their twin big shoota replaced with 1 rack of rokkits."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
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
        "special": [
          {
            "name": "SPEED FREEKS",
            "description": "If a model from your army with the Leader ability can be attached to a Warbikers unit, it can be attached to this unit instead.",
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
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Warbuggies",
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
              "name": "Rack of rokkits",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3+1",
              "skill": "5+",
              "strength": "9",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Spiked wheels",
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
      "keywords": ["Mounted", "Speed Freeks", "Warbuggies"],
      "factions": ["Orks"]
    },
    {
      "id": "765a0bd1-0690-59bd-998d-271bd61c2dac",
      "name": "Wartrakks",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Wartrakks"],
      "loadout": "Every model is equipped with: twin big shoota; spiked wheel.",
      "wargear": [
        "Any number of models can each have their twin big shoota replaced with 1 rack of rokkits."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Drive-by Dakka",
            "description": "Each time a model in this unit makes a ranged attack that targets a unit within 9\", improve the Armour Penetration characteristic of that attack by 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SPEED FREEKS",
            "description": "If a model from your army with the Leader ability can be attached to a Warbikers unit, it can be attached to this unit instead.",
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
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Wartrakks",
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
              "name": "Rack of rokkits",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3+1",
              "skill": "5+",
              "strength": "9",
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
              "name": "Twin big shoota",
              "keywords": ["rapid fire 2", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Spiked wheel",
              "keywords": [],
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
      "keywords": ["Mounted", "Speed Freeks", "Wartrakks"],
      "factions": ["Orks"]
    },
    {
      "id": "5b0506a2-f061-5d06-b6b8-5b9bb351eada",
      "name": "Wazbom Blastajet",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wazbom Blastajet"],
      "loadout": "This model is equipped with: smasha gun; twin wazbom mega-kannon; armoured hull.",
      "wargear": [
        "This model’s twin wazbom mega-kannon can be replaced with 1 twin tellyport mega-blasta.",
        "This model can be equipped with 1 blastajet force field.",
        "This model can be equipped with 1 twin supa-shoota."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "175",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Blastajet Force Field",
            "description": "The bearer has a 4+ invulnerable save, but it loses the Grenades keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D3"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blastajet Attack Run",
            "description": "Each time this model makes a ranged attack that targets a unit that cannot Fly, re-roll a Hit roll of 1.",
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
          "name": "Wazbom Blastajet",
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
              "name": "Smasha gun",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "9",
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
              "name": "Twin wazbom mega-kannon",
              "keywords": ["blast", "hazardous", "twin-linked"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "12",
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
              "name": "Twin supa-shoota",
              "keywords": ["rapid fire 2", "sustained hits 1", "twin-linked"],
              "range": "36\"",
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
              "name": "Twin tellyport mega-blasta",
              "keywords": ["blast", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "9",
              "ap": "-1",
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
        "Grenades",
        "Wazbom Blastajet"
      ],
      "factions": ["Orks"]
    },
    {
      "id": "21308fb3-2753-5c17-a04d-7b8bc695fbbb",
      "name": "Weirdboy",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Boyz",
      "composition": ["1 Weirdboy"],
      "loadout": "This model is equipped with: ’Eadbanger; weirdboy staff.",
      "wargear": ["None"],
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
        "core": ["Deadly Demise D3", "Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Waaagh! Energy",
            "description": "While this model is leading a unit, add 1 to the Strength and Damage characteristics of this model’s ’Eadbanger weapon for every 5 models in that unit (rounding down), but while that unit contains 10 or more models, that weapon has the [HAZARDOUS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Da Jump (Psychic)",
            "description": "Once per turn, at the end of your Movement phase, one Weirdboy from your army can use this ability. If it does, roll one D6: on a 1, that Weirdboy’s unit suffers D6 mortal wounds; on a 2+, remove this Weirdboy’s unit from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.",
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
          "t": "5",
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Weirdboy",
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
              "name": "’Eadbanger",
              "keywords": ["precision", "psychic"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
              "ap": "-3",
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
              "name": "Weirdboy staff",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Psyker", "Weirdboy"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Boyz"],
        "extra": ""
      }
    },
    {
      "id": "3dc1b72a-b8f7-58b4-8bab-fa54e7523b2a",
      "name": "Wurrboy",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Beast Snagga Boyz",
      "composition": ["1 Wurrboy"],
      "loadout": "This model is equipped with: Eyez of Mork; close combat weapon.",
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
        "core": ["Deadly Demise D3", "Feel No Pain 6+", "Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Waaagh! Energy",
            "description": "While this model is leading a unit, add 2 to the Attacks characteristic of this model’s Eyez of Mork weapon for every 5 models in that unit (rounding down), but while that unit contains 10 or more models, that weapon has the [HAZARDOUS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Roar of Mork (Psychic)",
            "description": "In your opponent’s Command phase, you can select one enemy unit within 18\" of and visible to this Psyker and roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2+, until the start of your opponent’s next Command phase, each time a Battle-shock or Leadership test is taken for that enemy unit, subtract 2 from that test.",
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
          "t": "5",
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Wurrboy",
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
              "name": "Eyez of Mork",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "5+",
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
        "Infantry",
        "Character",
        "Beast Snagga",
        "Psyker",
        "Wurrboy"
      ],
      "factions": ["Orks"],
      "leads": {
        "units": ["Beast Snagga Boyz"],
        "extra": ""
      }
    },
    {
      "id": "5c0a00c4-5adf-501e-856d-ab55f4bf892a",
      "name": "Zodgrod Wortsnagga",
      "source": "40k-10e",
      "faction_id": "ORK",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Gretchin",
      "composition": ["1 Zodgrod Wortsnagga – Epic Hero"],
      "loadout": "This model is equipped with: Da Grabzappa; slugga.",
      "wargear": ["None"],
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
        "core": ["Feel No Pain 6+", "Leader"],
        "faction": ["Waaagh!"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Special Dose",
            "description": "When you call a Waaagh!, until the start of the next battle round, add 6\" to the Move characteristic of models in this model’s unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Super Runts",
            "description": "While this model is leading a unit: ■ Models in that unit have the Scouts 9\" ability. ■ Each time a model in that unit makes an attack, add 1 to the Hit roll and add 1 to the Wound roll. ■ Each time an attack targets that unit, subtract 1 from the Wound roll.",
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
          "t": "5",
          "sv": "5+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Zodgrod Wortsnagga",
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
              "name": "Slugga",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Da Grabzappa",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Zodgrod Wortsnagga"],
      "factions": ["Orks"],
      "leads": {
        "units": ["Gretchin"],
        "extra": ""
      }
    }
  ],
  "colours": {
    "banner": "#283109",
    "header": "#465b18"
  }
}
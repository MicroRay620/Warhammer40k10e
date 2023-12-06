window.data = window.data || {};
window.data.QI = {
  "id": "QI",
  "link": "https://game-datacards.eu",
  "name": "Imperial Knights",
  "is_subfaction": false,
  "parent_id": "",
  "allied_factions": ["AoI"],
  "stratagems": [
    {
      "name": "SHOULDER THE BURDEN",
      "cost": 2,
      "type": "Battle Tactic",
      "detachment": "Noble Lance",
      "turn": "your",
      "phase": ["command"],
      "fluff": "When faced with their darkest hour, knightly\nNobles rise to the challenge, for nothing\nshall deter them from fulfilling their duty.",
      "when": "Your Command phase.",
      "target": "One Imperial Knights model\nfrom your army that has lost one or\nmore wounds.",
      "effect": "Until the start of your next\nCommand phase, improve your model’s\nMove, Toughness, Save, Leadership and\nObjective Control characteristics by 1 and\neach time your model makes an attack,\nadd 1 to the Hit roll.",
      "restrictions": "You can only use this\nStratagem once per battle. If your army\nis Honoured, you can use this Stratagem\none additional time.",
      "id": "62dbaf17-2885-54ad-924b-8d1ecb910922"
    },
    {
      "name": "ROTATE ION SHIELDS",
      "cost": 1,
      "type": "Wargear",
      "detachment": "Noble Lance",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "Veteran Knight pilots can swiftly angle their\nion shields to better deflect incoming fire.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has selected\nits targets.",
      "target": "One Imperial Knights model\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase,\nthat Imperial Knights model has a 4+\ninvulnerable save against ranged attacks.",
      "restrictions": "",
      "id": "715c3c0a-e6d7-575d-ad96-befa17252359"
    },
    {
      "name": "THUNDERSTOMP",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Noble Lance",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "The Noble brings their Knight suit’s full\nweight crashing down with the force of\nan industrial piledriver. Few can survive\nsuch a blow.",
      "when": "Fight phase.",
      "target": "One Imperial Knights model\nfrom your army that has not been\nselected to fight this phase.",
      "effect": "Until the end of the phase,\nyour model cannot target Monster or\nVehicle units, but all melee weapons\nequipped by your model have the\n[DEVASTATING WOUNDS] ability.",
      "restrictions": "",
      "id": "abb3ac97-8f56-550c-b4f7-b0fce7e0b195"
    },
    {
      "name": "SQUIRES' DUTY",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Noble Lance",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "Under the scrutiny and judgement of their\nNoble betters, Armiger pilots will redouble\ntheir efforts, attacking as one to smash\naside their foes.",
      "when": "The start of your Shooting phase or\nthe start of the Fight phase.",
      "target": "Two or more Armiger models\nfrom your army and one enemy unit\nthat is an eligible target for all of those\nArmiger models.",
      "effect": "Until the end of the phase,\nimprove the Strength and Armour\nPenetration characteristics of weapons\nequipped by those Armiger models by\n1. If your army is Honoured, until the\nend of the phase, add 1 to the Damage\ncharacteristic of those weapons as well.",
      "restrictions": "",
      "id": "b176daba-7a55-5c7a-bcc2-d8322d7eaa9e"
    },
    {
      "name": "TROPHY CLAIM",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Noble Lance",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "Once a mighty foe is laid low, the\nvictorious Knight’s emitters blare its\ntriumph, announcing the glory brought\nto the Imperium, but shame awaits those\nwho fail in such confrontations.",
      "when": "Your Shooting phase or the\nFight phase.",
      "target": "One Imperial Knights model\nfrom your army that has not been\nselected to shoot or fight this phase, and\none enemy Monster or Vehicle unit.",
      "effect": "Until the end of the phase, each\ntime your model makes an attack that\ntargets that enemy unit, add 1 to the\nWound roll. If your model destroys that\nenemy unit this phase, you gain 1CP, but if\nyour model does not destroy that enemy\nunit this phase, you cannot use this\nStratagem again for the rest of the battle. ",
      "restrictions": "",
      "id": "a99a89ca-d114-5c06-a3d0-5820db24ef70"
    },
    {
      "name": "VALIANT LAST STAND",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Noble Lance",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "Badly wounded, their Knight’s generator\non the verge of overload, still the Noble\nfights on, drawing upon their reserves of\nchivalric heroism to sell their life as dearly\nas they can.",
      "when": "Fight phase.",
      "target": "One Imperial Knights model\nfrom your army that was just destroyed\nand that is eligible to fight but has not\nbeen selected to fight this phase. You can\nuse this Stratagem on that model even\nthough it was just destroyed.",
      "effect": "Before rolling to see if this model\ndeals any mortal wounds as a result of its\nDeadly Demise ability, it can fight; when\ndoing so, it is assumed to have 1 wound\nremaining, or all its wounds remaining\nif your army is Honoured. After it has\nfinished resolving its attacks, resolve its\nDeadly Demise ability as normal.",
      "restrictions": "You cannot target\nSir Hekhtur with this Stratagem.",
      "id": "19e30860-e4ac-583e-a28d-07f1f49e5076"
    }
  ],
  "enhancements": [
    {
      "name": "REVERED KNIGHT",
      "description": "Imperial Knights model only. While a friendly Imperial Knights model is within 6\" of the bearer, improve that model’s Leadership characteristic by 1. If your army is Honoured, increase the range of this Aura ability to 12\".",
      "keywords": ["Imperial Knights"],
      "cost": "20"
    },
    {
      "name": "MYSTERIOUS GUARDIAN",
      "description": "Imperial Knights model only. The bearer has the Deep Strike ability. Once per battle, at the end of your opponent’s turn, if the bearer is not within Engagement Range of any enemy units, it can fade away. If it does, remove it from the battlefield then, in the Reinforcements step of your subsequent Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models. If the battle ends and the bearer is not on the battlefield, it is destroyed",
      "keywords": ["Imperial Knights"],
      "cost": "35"
    },
    {
      "name": "MYTHIC HERO",
      "description": "Questoris model with a Bondsman ability only. Each time the bearer uses its Bondsman ability, you can select one additional friendly Armiger model within 12\" of the bearer that is not already being affected by a Bondsman ability. Until the start of your next Command phase, that model is also affected by that Bondsman ability.",
      "keywords": ["Questoris"],
      "cost": "25"
    },
    {
      "name": "BANNER OF MACHARIUS TRIUMPHANT",
      "description": "Imperial Knights model only. If you control an objective marker at the end of your Command phase and the bearer is within range of that objective marker, that objective marker remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      "keywords": ["Imperial Knights"],
      "cost": "30"
    },
    {
      "name": "UNYIELDING PARAGON",
      "description": "Questoris model only. Each time an attack is allocated to the bearer, worsen the Armour Penetration characteristic of that attack by 1.",
      "keywords": ["Questoris"],
      "cost": "40"
    }
  ],
  "datasheets": [
    {
      "id": "6158e0e8-f527-5d59-914a-a28febaa1923",
      "name": "Acastus Knight Asterius",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Acastus Knight Asterius"],
      "loadout": "This model is equipped with: 2 Asterius volkite culverins; karacnos mortar battery; 2 twin conversion beam cannons; titanic feet.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "840",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Sunderer of Fortresses",
            "description": "Each time this model makes an attack that targets a Vehicle, improve the Strength and Damage characteristics of that attack by 1. If that attack targets a Fortification, improve the Strength and Damage characteristics of that attack by 2 instead.",
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
          "ld": "6+",
          "oc": "10",
          "name": "Acastus Knight Asterius",
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
              "name": "Asterius volkite culverin",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Karacnos mortar battery",
              "keywords": [
                "anti-infantry 2+",
                "blast",
                "ignores cover",
                "indirect fire"
              ],
              "range": "48\"",
              "attacks": "D6+3",
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
              "name": "Twin conversion beam cannon",
              "keywords": ["conversion", "twin-linked", "sustained hits d3"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "16",
              "ap": "-2",
              "damage": "6"
            }
          ],
          "abilities": [
            {
              "name": "Conversion",
              "description": "Each time an attack made with this weapon targets a unit more than 12\" from the bearer, an unmodified successful Hit roll of 4+ scores a Critical Hit.",
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
              "name": "Titanic feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "10",
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
        "Acastus",
        "Imperium",
        "Knight Asterius"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "f2bf3acf-5bd0-52bb-ada8-0866dae62498",
      "name": "Acastus Knight Porphyrion",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Acastus Knight Porphyrion"],
      "loadout": "This model is equipped with: 2 Acastus autocannons; Acastus ironstorm missile pod; 2 twin magna lascannons; titanic feet.",
      "wargear": [
        "This model’s 2 Acastus autocannons can be replaced with one of the following: ◦ 2 lascannons ◦  1 Acastus autocannon and 1 lascannon",
        "This model’s Acastus ironstorm missile pod can be replaced with 1 helios defence missiles."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "745",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Bastion of Firepower",
            "description": "Each time this model Remains Stationary, until the end of the turn, ranged weapons equipped by this model have the [LETHAL HITS] ability.",
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
          "ld": "6+",
          "oc": "10",
          "name": "Acastus Knight Porphyrion",
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
              "name": "Acastus autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
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
              "name": "Acastus ironstorm missile pod",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+6",
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
              "name": "Helios defence missiles",
              "keywords": ["anti-fly 2+", "heavy"],
              "range": "48\"",
              "attacks": "3",
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
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
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
              "name": "Twin magna lascannon",
              "keywords": ["blast", "twin-linked"],
              "range": "72\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "18",
              "ap": "-4",
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
              "name": "Titanic feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "10",
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
        "Imperium",
        "Acastus",
        "Knight Porphyrion"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "e14533c9-3ff6-505c-bc83-b4774a43adcc",
      "name": "Armiger Helverin",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Armiger Helverin"],
      "loadout": "This model is equipped with: 2 Armiger autocannons; Questoris heavy stubber; armoured feet.",
      "wargear": [
        "This model’s Questoris heavy stubber can be replaced with 1 meltagun."
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
        "faction": ["Code Chivalric"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Skyfire Protocols",
            "description": "While this model is either wholly within your deployment zone or within range of an objective marker you control, its Armiger autocannons have the [ANTI-FLY 2+] ability.",
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
          "oc": "8",
          "name": "Armiger Helverin",
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
              "name": "Armiger autocannon",
              "keywords": [],
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
              "name": "Questoris heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Armoured feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Battleline",
        "Imperium",
        "Armiger",
        "Helverin"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "9d85d5b8-b6fe-553a-aa84-5445cb5c77d7",
      "name": "Armiger Moirax",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Armiger Moirax"],
      "loadout": "This model is equipped with: graviton pulsar; volkite veuglaire; armoured feet.",
      "wargear": [
        "This model’s volkite veuglaire can be replaced with one of the following: ◦ 1 siege claw and 1 rad cleanser ◦ 1 graviton pulsar ◦ 1 lightning lock ◦ 1 conversion beam cannon",
        "This model’s graviton pulsar can be replaced with one of the following; ◦ 1 siege claw and 1 rad cleanser ◦ 1 lightning lock ◦ 1 conversion beam cannon ◦ 1 volkite veuglaire"
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
        "faction": ["Code Chivalric"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Protection Protocols",
            "description": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
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
          "oc": "8",
          "name": "Armiger Moirax",
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
              "name": "Conversion beam cannon",
              "keywords": ["conversion", "sustained hits d3"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ],
          "abilities": [
            {
              "name": "Conversion",
              "description": "Each time an attack made with this weapon targets a unit more than 12\" from the bearer, an unmodified successful Hit roll of 4+ scores a Critical Hit.",
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
              "name": "Lightning lock",
              "keywords": ["sustained hits 2"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Rad cleanser",
              "keywords": ["anti-infantry 2+", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Volkite veuglaire",
              "keywords": ["devastating wounds"],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "8",
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
              "name": "Armoured feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Siege claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Battleline",
        "Imperium",
        "Armiger",
        "Moirax"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "497e0b68-98c2-5de1-9b01-6f6540a1c9e9",
      "name": "Armiger Warglaive",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Armiger Warglaive"],
      "loadout": "This model is equipped with: Questoris heavy stubber; thermal spear; reaper chain-cleaver.",
      "wargear": [
        "This model’s Questoris heavy stubber can be replaced with 1 meltagun."
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
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Code Chivalric"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Impetuous Glory",
            "description": "Each time this model makes a Charge move, until the end of the turn, melee weapons equipped by this model have the [SUSTAINED HITS 1] ability.",
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
          "oc": "8",
          "name": "Armiger Warglaive",
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
              "name": "Questoris heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Thermal spear",
              "keywords": ["melta 4"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Reaper chain-cleaver – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Reaper chain-cleaver – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Battleline",
        "Imperium",
        "Armiger",
        "Warglaive"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "0a2f0ee1-27c8-5342-b38e-e16b413456ef",
      "name": "Canis Rex",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["■ 1 Canis Rex – Epic Hero"],
      "loadout": "Canis Rex is equipped with: Chainbreaker las-impulsor; Chainbreaker multi-laser; Freedom’s Hand.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "490",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Legendary Freeblade",
            "description": "Once per turn, you can target this model with a Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem in the same phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Chainbreaker",
            "description": "Each time this model makes an attack, an unmodifed successful Hit roll of 5+ scores a Critical Hit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "Sir Hekhtur",
            "description": "If Canis Rex is destroyed, flip this card and follow the instructions for using Sir Hekhtur.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "5+",
          "oc": "10",
          "name": "Canis Rex",
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
              "name": "Chainbreaker las-impulsor – high intensity",
              "keywords": ["blast", "sustained hits 1"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "4"
            },
            {
              "active": true,
              "name": "Chainbreaker las-impulsor – low intensity",
              "keywords": ["blast", "sustained hits 1"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "2+",
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
              "name": "Chainbreaker multi-laser",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "4",
              "skill": "2+",
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
              "name": "Freedom’s Hand – strike",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "20",
              "ap": "-3",
              "damage": "9"
            },
            {
              "active": true,
              "name": "Freedom’s Hand – sweep",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Questoris",
        "Character",
        "Epic Hero",
        "Imperium",
        "Canis Rex"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "bdef5639-5b37-56f7-93d6-d9af0fcb0c9d",
      "name": "Cerastus Knight Acheron",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Cerastus Knight Acheron"],
      "loadout": "This model is equipped with: Acheron flame cannon; twin heavy bolter; reaper chainfist.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "445",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Acheron’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, at the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test, subtracting 1 from the result when they do.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Searing Flames",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with an Acheron flame cannon. Until the end of the phase, that enemy unit cannot have the Benefit of Cover.",
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
          "w": "25",
          "ld": "6+",
          "oc": "10",
          "name": "Cerastus Knight Acheron",
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
              "name": "Acheron flame cannon",
              "keywords": ["torrent", "ignores cover"],
              "range": "18\"",
              "attacks": "2D6",
              "skill": "N/A",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Reaper chainfist – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Reaper chainfist – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Imperium",
        "Cerastus",
        "Knight Acheron"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "c5620ec4-ce97-5a24-8c44-8b6b58c8e57d",
      "name": "Cerastus Knight Atrapos",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Cerastus Knight Atrapos"],
      "loadout": "This model is equipped with: Atrapos lascutter; graviton singularity cannon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "440",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Atrapos’ Duty (Bondsman)",
            "description": "While a model is affected by this ability, each time that model makes an attack that targets a Titanic or Towering model, you can re-roll the Hit roll and you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Macro-extinction Protocols",
            "description": "Each time this model makes an attack that targets a Monster or Vehicle unit, add 1 to the Hit roll. If that target is Titanic or Towering, add 1 to the Wound roll as well.",
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
          "w": "25",
          "ld": "6+",
          "oc": "10",
          "name": "Cerastus Knight Atrapos",
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
              "name": "Atrapos lascutter – low intensity",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Atrapos lascutter – high intensity",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Graviton singularity cannon – contained",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+1"
            },
            {
              "active": true,
              "name": "Graviton singularity cannon – singularity",
              "keywords": ["blast", "devastating wounds", "hazardous"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
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
              "name": "Atrapos lascutter – low intensity",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Atrapos lascutter – high intensity",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "4"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Imperium",
        "Cerastus",
        "Knight Atrapos"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "4be352a3-5992-5d8f-9c64-b7c20c5e6a42",
      "name": "Cerastus Knight Castigator",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Cerastus Knight Castigator"],
      "loadout": "This model is equipped with: Castigator bolt cannon; tempest warblade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "485",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Castigator’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, its ranged weapons have the [SUSTAINED HITS 1] ability and the Armour Penetration characteristic of its ranged weapons is improved by 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Storm of Bolts",
            "description": "In your Shooting phase, after this model has shot, select one unit (excluding Monsters and Vehicles) hit by one or more of those attacks. Until the start of your next turn, while this model is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
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
          "w": "25",
          "ld": "6+",
          "oc": "10",
          "name": "Cerastus Knight Castigator",
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
              "name": "Castigator bolt cannon",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "18",
              "skill": "3+",
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
              "name": "Tempest warblade – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Tempest warblade – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Imperium",
        "Cerastus",
        "Knight Castigator"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "629874c6-2aaf-5be0-910c-b4d22093a100",
      "name": "Cerastus Knight Lancer",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Cerastus Knight Lancer"],
      "loadout": "This model is equipped with: Cerastus shock lance.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "495",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lancer’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, it is eligible to declare a charge in a turn in which it Advanced.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shock Charge",
            "description": "You can target this model with the Tank Shock Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
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
          "m": "14\"",
          "t": "12",
          "sv": "3+",
          "w": "25",
          "ld": "6+",
          "oc": "10",
          "name": "Cerastus Knight Lancer",
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
              "name": "Cerastus shock lance",
              "keywords": ["assault", "sustained hits 2"],
              "range": "12\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Cerastus shock lance – strike",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "active": true,
              "name": "Cerastus shock lance – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Imperium",
        "Cerastus",
        "Knight Lancer"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "d299e33b-a615-575e-820f-360ee66f78a3",
      "name": "Knight Castellan",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Knight Castellan"],
      "loadout": "This model is equipped with: plasma decimator; 2 shieldbreaker missile launchers; 2 twin meltaguns; twin siegebreaker cannon, volcano lance; titanic feet.",
      "wargear": [
        "This model’s 2 shieldbreaker missile launchers and twin siegebreaker cannon can be replaced with: ◦  1 shieldbreaker missile launcher and 2 twin siegebreaker cannons"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "565",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Ion Aegis (Aura)",
            "description": "While a friendly Armiger model is within 6\" of this model, that Armiger models has the Benefits of Cover.",
            "showAbility": true,
            "showDescription": true
          },
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
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Castellan",
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
              "name": "Plasma decimator – standard",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Plasma decimator – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "3+",
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
              "name": "Shieldbreaker missile launcher",
              "keywords": ["anti-titanic 4+", "devastating wounds"],
              "range": "72\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-6",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin meltagun",
              "keywords": ["melta 2", "twin-linked"],
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
              "name": "Twin siegebreaker cannon",
              "keywords": ["blast", "twin-linked"],
              "range": "36\"",
              "attacks": "D6",
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
              "name": "Volcano lance",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "18",
              "ap": "-5",
              "damage": "D6+8"
            }
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
              "attacks": "4",
              "skill": "4+",
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
        "Dominus",
        "Character",
        "Imperium",
        "Knight Castellan"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "33cdcaba-4e1e-5eef-a499-3867747c66ca",
      "name": "Knight Crusader",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Knight Crusader"],
      "loadout": "This model is equipped with: avenger gatling cannon; heavy flamer; meltagun; thermal cannon; titanic feet.",
      "wargear": [
        "This model’s meltagun can be replaced with 1 Questoris heavy stubber.",
        "This model’s thermal cannon can be replaced with: ◦  1 rapid-fire battle cannon and 1 Questoris heavy stubber",
        "This model can be equipped with one of the following: ◦ 1 Icarus autocannons ◦ 1 ironstorm missile pod ◦ 1 stormspear rocket pod"
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
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Crusader’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, each time that model makes a ranged attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Punishing Salvoes",
            "description": "In your Movement phase, if this model Remains Stationary, until the start of your next Movement phase, this model’s ranged weapons have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Crusader",
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
              "name": "Avenger gatling cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "18",
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
              "name": "Icarus autocannons",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "48\"",
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
              "name": "Ironstorm missile pod",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+1",
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
              "name": "Questoris heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Rapid-fire battle cannon",
              "keywords": ["blast", "rapid fire d6+3"],
              "range": "72\"",
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
              "name": "Stormspear rocket pod",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Thermal cannon",
              "keywords": ["blast", "melta 6"],
              "range": "24\"",
              "attacks": "2D3",
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
              "name": "Titanic feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Walker",
        "Titanic",
        "Towering",
        "Questoris",
        "Character",
        "Imperium",
        "Knight Crusader"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "7ca4ed81-1985-5bb2-98f2-2b14f19def2a",
      "name": "Knight Errant",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Knight Errant"],
      "loadout": "This model is equipped with: meltagun; thermal cannon; reaper chainsword.",
      "wargear": [
        "This model’s meltagun can be replaced with 1 Questoris heavy stubber.",
        "This model’s reaper chainsword can be replaced with 1 thunderstrike gauntlet.",
        "This model can be equipped with one of the following: ◦ 1 Icarus autocannons ◦ 1 ironstorm missile pod ◦ 1 stormspear rocket pod"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "430",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Errant’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, you can re-roll Advance rolls made for that model and its ranged weapons have the [ASSAULT] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Aggressive Assault",
            "description": "Each time this model makes a ranged attack against the closest eligible target, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Errant",
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
              "name": "Icarus autocannons",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "48\"",
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
              "name": "Ironstorm missile pod",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+1",
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
              "name": "Questoris heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Stormspear rocket pod",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Thermal cannon",
              "keywords": ["blast", "melta 6"],
              "range": "24\"",
              "attacks": "2D3",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
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
              "name": "Thunderstrike gauntlet – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "active": true,
              "name": "Thunderstrike gauntlet – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
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
        "Walker",
        "Titanic",
        "Towering",
        "Questoris",
        "Character",
        "Imperium",
        "Knight Errant"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "341162db-1ed2-5b37-bc26-13f63128bbd1",
      "name": "Knight Gallant",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Knight Gallant"],
      "loadout": "This model is equipped with: meltagun; thunderstrike gauntlet; reaper chainsword.",
      "wargear": [
        "This model’s meltagun can be replaced with 1 Questoris heavy stubber.",
        "This model can be equipped with one of the following: ◦ 1 Icarus autocannons ◦ 1 ironstorm missile pod ◦ 1 stormspear rocket pod"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "400",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Gallant’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, you can re-roll Charge rolls made for that model and each time that model makes a melee attack, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Martial Pride",
            "description": "Each time a melee attack targets this model, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Gallant",
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
              "name": "Icarus autocannons",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "48\"",
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
              "name": "Ironstorm missile pod",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+1",
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
              "name": "Questoris heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Stormspear rocket pod",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "18",
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
              "name": "Thunderstrike gauntlet – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "active": true,
              "name": "Thunderstrike gauntlet – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Questoris",
        "Character",
        "Imperium",
        "Knight Gallant"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "2b89200f-4e74-5026-b5a8-fb53ccee78c4",
      "name": "Knight Paladin",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Knight Paladin"],
      "loadout": "This model is equipped with: meltagun; Questoris heavy stubber; rapid-fire battle cannon; reaper chainsword.",
      "wargear": [
        "This model’s meltagun can be replaced with 1 Questoris heavy stubber.",
        "This model’s reaper chainsword can be replaced with 1 thunderstrike gauntlet.",
        "This model can be equipped with one of the following: ◦ 1 Icarus autocannons ◦ 1 ironstorm missile pod ◦ 1 stormspear rocket pod"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "450",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Paladin’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, its weapons have the [LETHAL HITS] and [LANCE] abilities.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Seasoned Noble",
            "description": "Once per phase, you can re-roll one Hit roll, one Wound roll or one saving throw made for this model.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Paladin",
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
              "name": "Icarus autocannons",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "48\"",
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
              "name": "Ironstorm missile pod",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+1",
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
              "name": "Questoris heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Rapid-fire battle cannon",
              "keywords": ["blast", "rapid fire d6+3"],
              "range": "72\"",
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
              "name": "Stormspear rocket pod",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
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
              "name": "Thunderstrike gauntlet – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "active": true,
              "name": "Thunderstrike gauntlet – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
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
        "Walker",
        "Titanic",
        "Towering",
        "Questoris",
        "Character",
        "Imperium",
        "Knight Paladin"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "f149896f-5eac-57e8-a704-85c1b72ce2fc",
      "name": "Knight Preceptor",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Knight Preceptor"],
      "loadout": "This model is equipped with: las-impulsor; Preceptor multi-laser; reaper chainsword.",
      "wargear": [
        "This model’s Preceptor multi-laser can be replaced with one of the following: ◦ 1 meltagun ◦ 1 Questoris heavy stubber",
        "This model’s reaper chainsword can be replaced with 1 thunderstrike gauntlet.",
        "This model can be equipped with one of the following: ◦ 1 Icarus autocannons ◦ 1 ironstorm missile pod ◦ 1 stormspear rocket pod"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "430",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Mentor (Bondsman)",
            "description": "While a model is affected by this ability, improve that model’s Leadership characteristic by 1 and improve that model’s Objective Control characteristic by 2.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Exemplar of the Code",
            "description": "At the start of the battle, select one unit from your opponent’s army. Each time this model makes an attack that targets that unit, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Preceptor",
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
              "name": "Icarus autocannons",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "48\"",
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
              "name": "Ironstorm missile pod",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+1",
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
              "name": "Las-impulsor – high intensity",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "4"
            },
            {
              "active": true,
              "name": "Las-impulsor – low intensity",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "2D6",
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
              "name": "Preceptor multi-laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
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
              "name": "Questoris heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Stormspear rocket pod",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
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
              "name": "Thunderstrike gauntlet – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "active": true,
              "name": "Thunderstrike gauntlet – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
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
        "Walker",
        "Titanic",
        "Towering",
        "Questoris",
        "Character",
        "Imperium",
        "Knight Preceptor"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "50771af7-7227-5e2a-b1c1-6bfb37c6bae0",
      "name": "Knight Valiant",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Knight Valiant"],
      "loadout": "This model is equipped with: conflagration cannon; 2 shieldbreaker missile launchers; thundercoil harpoon; 2 twin meltaguns; twin siegebreaker cannon, titanic feet.",
      "wargear": [
        "This model’s 2 shieldbreaker missile launchers and twin siegebreaker cannon can be replaced with: ◦  1 shieldbreaker missile launcher and 2 twin siegebreaker cannons"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "565",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Ion Aegis (Aura)",
            "description": "While a friendly Armiger model is within 6\" of this model, that Armiger model has the Benefit of Cover.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Overwhelming Firestorm",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by this model this phase. That unit must take a Battle-shock test.",
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
          "m": "8\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Valiant",
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
              "name": "Conflagration cannon",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
              "attacks": "3D6",
              "skill": "N/A",
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
              "name": "Twin meltagun",
              "keywords": ["melta 2", "twin-linked"],
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
              "name": "Shieldbreaker missile launcher",
              "keywords": ["anti-titanic 4+", "devastating wounds"],
              "range": "72\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-6",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Thundercoil harpoon",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+",
                "devastating wounds"
              ],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "24",
              "ap": "-6",
              "damage": "12"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin siegebreaker cannon",
              "keywords": ["blast", "twin-linked"],
              "range": "36\"",
              "attacks": "D6",
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
              "name": "Titanic feet",
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
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Dominus",
        "Character",
        "Imperium",
        "Knight Valiant"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "c3a8ab94-e4e5-526d-b6ce-e2f0ff8549ae",
      "name": "Knight Warden",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Knight Warden"],
      "loadout": "This model is equipped with: avenger gatling cannon; heavy flamer; meltagun; reaper chainsword.",
      "wargear": [
        "This model’s meltagun can be replaced with 1 Questoris heavy stubber.",
        "This model’s reaper chainsword can be replaced with 1 thunderstrike gauntlet.",
        "This model can be equipped with one of the following: ◦ 1 Icarus autocannons ◦ 1 ironstorm missile pod ◦ 1 stormspear rocket pod"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "480",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Warden’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, each time an attack is allocated to that model, subtract 1 from the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Thin Their Ranks",
            "description": "Each time this model makes a ranged attack that targets an enemy unit (excluding Monsters and Vehicles), that attack has the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Warden",
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
              "name": "Avenger gatling cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "18",
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
              "name": "Icarus autocannons",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "48\"",
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
              "name": "Ironstorm missile pod",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+1",
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
              "name": "Questoris heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Stormspear rocket pod",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
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
              "name": "Thunderstrike gauntlet – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "active": true,
              "name": "Thunderstrike gauntlet – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
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
        "Walker",
        "Titanic",
        "Towering",
        "Questoris",
        "Character",
        "Imperium",
        "Knight Warden"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "d5accac6-086b-52e5-8479-30bdcc42a58a",
      "name": "Questoris Knight Magaera",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Questoris Knight Magaera"],
      "loadout": "This model is equipped with: lightning cannon; phased plasma-fusil; reaper chainsword.",
      "wargear": [
        "This model’s reaper chainsword can be replaced with 1 hekaton siege claw and 1 twin rad cleanser."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "450",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Magaera’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, ranged weapons equipped by that model have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Repair Auto-simulacra",
            "description": "At the end of your Command phase, this model regains up to D3 lost wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Questoris Knight Magaera",
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
              "name": "Lightning cannon",
              "keywords": ["sustained hits 2"],
              "range": "48\"",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
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
              "name": "Phased plasma-fusil",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
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
              "name": "Twin rad cleanser",
              "keywords": [
                "torrent",
                "ignores cover",
                "anti-infantry 2+",
                "twin-linked"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Hekaton siege claw – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "active": true,
              "name": "Hekaton siege claw – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "10",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Imperium",
        "Questoris",
        "Knight Magaera"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "e69c72bb-27b9-5ac9-8c74-0fd919684726",
      "name": "Questoris Knight Styrix",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Questoris Knight Styrix"],
      "loadout": "This model is equipped with: graviton crusher; volkite chierovile; reaper chainsword.",
      "wargear": [
        "This model’s reaper chainsword can be replaced with 1 hekaton siege claw and 1 twin rad cleanser."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "490",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Code Chivalric", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Styrix’s Duty (Bondsman)",
            "description": "While a model is affected by this ability, ranged weapons equipped by that model have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Grav-pinned",
            "description": "In your Shooting phase, after this model has shot, if an enemy Infantry unit was hit by one or more of those attacks made with a graviton crusher, until the end of your opponent’s next turn, that enemy unit is grav-pinned. While a unit is grav-pinned, subtract 2 from that unit’s Move characteristic and subtract 2 from Advance and Charge rolls made for that unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Questoris Knight Styrix",
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
              "name": "Graviton crusher",
              "keywords": ["anti-vehicle 2+", "blast"],
              "range": "18\"",
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
              "name": "Twin rad cleanser",
              "keywords": [
                "anti-infantry 2+",
                "ignores cover",
                "twin-linked",
                "torrent"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Volkite chierovile",
              "keywords": ["devastating wounds"],
              "range": "30\"",
              "attacks": "9",
              "skill": "3+",
              "strength": "12",
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
              "name": "Hekaton siege claw – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "active": true,
              "name": "Hekaton siege claw – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "10",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Imperium",
        "Questoris",
        "Knight Styrix"
      ],
      "factions": ["Imperial Knights"]
    },
    {
      "id": "4b339d48-cecd-5bd7-a49c-b6c808e008d4",
      "name": "Sir Hekhtur",
      "source": "40k-10e",
      "faction_id": "QI",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["■ 1 Sir Hekhtur – Epic Hero  "],
      "loadout": "Sir Hekhtur is equipped with: Hekhtur’s pistol; close combat weapon.",
      "wargear": [],
      "transport": "",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Lone Operative"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [],
        "special": [
          {
            "name": "USING SIR HEKHTUR",
            "description": "When your Canis Rex model is destroyed, Sir Hekhtur is treated as a model disembarking from a destroyed Transport – set him up within 3\" of your Canis Rex model before it is removed. Sir Hekhtur then uses the profile, wargear, abilities and keywords shown on this side of the card, but cannot be  selected as the target of any of your Stratagems other than Core Stratagems. Your Canis Rex unit is not considered to be destroyed until Sir Hekhtur is also destroyed.",
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
          "ld": "5+",
          "oc": "1",
          "name": "Sir Hekhtur",
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
              "name": "Hekhtur’s pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
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
        "Imperium",
        "Sir Hekhtur"
      ],
      "factions": ["Imperial Knights"]
    }
  ],
  "colours": {
    "banner": "#122d42",
    "header": "#023e58"
  }
}
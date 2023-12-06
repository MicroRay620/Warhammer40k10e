window.data = window.data || {};
window.data.CHBT = {
  "id": "CHBT",
  "link": "https://game-datacards.eu",
  "name": "Black Templar",
  "is_subfaction": true,
  "parent_id": "SM",
  "parent_keyword": "Adeptus Astartes",
  "allied_factions": ["AoI", "QI"],
  "stratagems": [
    {
      "name": "FERVENT ACCLAMATION",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Righteous Crusaders",
      "turn": "your",
      "phase": ["command"],
      "fluff": "The magnetic force of this Black Templar’s\noratory inspires his fellow warriors to\nswear great vows, even in the midst of\nthe battle.",
      "when": "Your Command phase.",
      "target": "One Adeptus Astartes\nCharacter unit from your army.",
      "effect": "Select one Templar Vow that is\nnot active for your army. Until the start\nof your next Command phase, while that\nCharacter is leading a unit, models in\nthat unit gain the benefits of that vow in\naddition to the vow selected to be active\nfor your army at the start of the battle.",
      "restrictions": "",
      "id": "fdbf86ea-ee7e-5bb7-8791-1481ad4573e2"
    },
    {
      "name": "NO ESCAPE",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Righteous Crusaders",
      "turn": "opponents",
      "phase": ["movement"],
      "fluff": "Glowing blades and revving chainswords\nclose off the foe’s every avenue of escape.",
      "when": "Your opponent’s Movement phase,\nwhen an enemy unit (excluding Vehicles\nand Monsters) is selected to Fall Back.",
      "target": "One Adeptus Astartes unit from\nyour army that is within Engagement\nRange of that enemy unit.",
      "effect": "Roll one D6, adding 1 to the result\nif the Accept Any Challenge, No Matter\nthe Odds vow is active for your army. On\na 4+, that enemy unit cannot Fall Back\nthis phase and must Remain Stationary.\nOtherwise, that enemy unit can Fall Back\nthis phase, but if it does, all models in that\nunit must take a Desperate Escape test.",
      "restrictions": "",
      "id": "c05f7a78-f21d-515f-81fd-9ac9f7f4ded8"
    },
    {
      "name": "DEVOUT PUSH",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Righteous Crusaders",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "With a zealous cry, the Black Templars\npress forward towards victory.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has shot.",
      "target": "One Adeptus Astartes unit\nfrom your army that had one or more of\nits models destroyed as a result of the\nattacking unit’s attacks.",
      "effect": "Your unit can make a Normal\nmove of up to D6\", but it must end that\nmove closer to the enemy unit that just\nshot. If the Abhor the Witch, Destroy the\nWitch vow is active for your army, your\nunit can make a Normal move of up to 6\"\ninstead, but it must end that move either\ncloser to the enemy unit that just shot, or\ncloser to the closest enemy Psyker unit. ",
      "restrictions": "",
      "id": "dc8763fb-bc7c-5439-bf96-217304508a85"
    },
    {
      "name": "ARMOUR OF CONTEMPT",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Righteous Crusaders",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "The belligerency and transhuman\nphysiologies of the Adeptus Astartes make\nthem unyielding foes.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Adeptus Astartes unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack targets your unit, worsen\nthe Armour Penetration characteristic of\nthat attack by 1.",
      "restrictions": "",
      "id": "fb6abd3d-eef4-5e85-823a-4f49dd7e9140"
    },
    {
      "name": "CRUSADER'S WRATH",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Righteous Crusaders",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "The Black Templars channel their fervour\ninto a hate-fuelled flurry of blows.",
      "when": "Fight phase.",
      "target": "One Adeptus Astartes unit from\nyour army that has not been selected to\nfight this phase.",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes a melee\nattack, improve the Armour Penetration\ncharacteristic of that attack by 1. If the\nSuffer Not The Unclean to Live vow is\nactive for your army, add 1 to the Strength\ncharacteristic of that attack as well.",
      "restrictions": "",
      "id": "16eb564f-4aab-5848-aac2-5009ff46b424"
    },
    {
      "name": "VICIOUS RIPOSTE",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Righteous Crusaders",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "Every blow struck against a Black Templar\nis answered in kind. Even as they are\nlaid low, their blades still lash out at the\nenemies of the divine Emperor.",
      "when": "Fight phase, just after an enemy\nunit has selected its targets.",
      "target": "One Adeptus Astartes unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime a model in your unit is destroyed,\nif that model has not fought this phase,\nroll one D6, adding 1 to the result if the\nUphold the Honour of the Emperor vow\nis active for your army. On a 4+, do not\nremove the destroyed model from play; it\ncan fight after the attacking model’s unit\nhas finished making its attacks, and is\nthen removed from play.",
      "restrictions": "",
      "id": "51469cba-c994-509e-b4f9-e7bd745ddf85"
    }
  ],
  "enhancements": [
    {
      "name": "PERDITION’S EDGE",
      "description": "■ Improve the Strength and Armour Penetration characteristics of the bearer’s melee weapons by 1. ■ If the Suffer Not the Unclean to Live vow is active for your army, add 1 to the Attacks characteristic of the bearer’s melee weapons as well.",
      "keywords": ["Adeptus Astartes"],
      "cost": "15"
    },
    {
      "name": "SIGISMUND’S SEAL",
      "description": "■ Improve the Attacks characteristic of the bearer’s melee weapons by 1. ■ While the bearer is leading a unit, if the Accept Any Challenge, No Matter the Odds vow is active for your army, each time a model in that unit makes a melee attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
      "keywords": ["Adeptus Astartes"],
      "cost": "20"
    },
    {
      "name": "TÄNNHAUSER’S BONES",
      "description": "■ Each time an attack is allocated to the bearer, halve the Damage characteristic of that attack. ■ While the bearer is leading a unit, if the Uphold the Honour of the Emperor vow is active for your army, models in that unit have the Feel No Pain 5+ ability.",
      "keywords": ["Adeptus Astartes"],
      "cost": "35"
    },
    {
      "name": "WITCHSEEKER BOLTS",
      "description": "■ The bearer’s ranged weapons have the [PRECISION], [ANTI-PSYKER 4+] and [DEVASTATING WOUNDS] abilities. ■ If the Abhor the Witch, Destroy the Witch vow is active for your army, each time the bearer makes a ranged attack that targets a Psyker unit, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      "keywords": ["Adeptus Astartes"],
      "cost": "10"
    }
  ],
  "datasheets": [
    {
      "id": "2eb12b32-f988-5a53-b8b7-cc508f8479db",
      "name": "Black Templars Armoury",
      "source": "40k-10e",
      "faction_id": "CHBT",
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
              "name": "Grav-cannon",
              "keywords": ["anti-vehicle 2+", "heavy"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
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
              "name": "Lascannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Missile launcher – frag",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Missile launcher – krak",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Plasma cannon – standard",
              "keywords": ["blast", "heavy"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous", "heavy"],
              "range": "36\"",
              "attacks": "D3",
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
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": [],
      "factions": [""]
    },
    {
      "id": "122c2c04-7cc2-5e7e-803f-22ae2923e1d1",
      "name": "Black Templars Gladiator Lancer",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Gladiator Lancer"],
      "loadout": "This model is equipped with: Lancer laser destroyer; 2 storm bolters; armoured hull.",
      "wargear": [
        "This model’s 2 storm bolters can be replaced with 2 fragstorm grenade launchers.",
        "This model can be equipped with one of the following: ◦ 1 ironhail heavy stubber ◦ 1 multi-melta",
        "This model can be equipped with 1 Icarus rocket pod."
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
            "name": "Aquilon Optics",
            "description": "Each time this model is selected to shoot, you can re-roll one Hit roll, you can re-roll one Wound roll and you can re-roll one Damage roll when resolving its attacks.",
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
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Black Templars Gladiator Lancer",
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
              "name": "Fragstorm grenade launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Icarus rocket pod",
              "keywords": ["anti-fly 2+"],
              "range": "24\"",
              "attacks": "D3",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Lancer laser destroyer",
              "keywords": ["heavy"],
              "range": "72\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6+3"
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Gladiator Lancer"],
      "factions": ["Adeptus Astartes", "Black Templars"]
    },
    {
      "id": "ce555c3a-05d3-53f6-93d4-4d5f974bc800",
      "name": "Black Templars Gladiator Reaper",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Gladiator Reaper"],
      "loadout": "This model is equipped with: 2 tempest bolters; twin heavy onslaught gatling cannon; armoured hull.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 ironhail heavy stubber ◦ 1 multi-melta",
        "This model can be equipped with 1 Icarus rocket pod."
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
            "name": "Rotating Death",
            "description": "This model’s twin heavy onslaught gatling cannon has the [SUSTAINED HITS 2] ability when targeting Infantry units.",
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
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Black Templars Gladiator Reaper",
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
              "name": "Icarus rocket pod",
              "keywords": ["anti-fly 2+"],
              "range": "24\"",
              "attacks": "D3",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Tempest bolter",
              "keywords": ["rapid fire 4"],
              "range": "24\"",
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
              "name": "Twin heavy onslaught gatling cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "12",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Gladiator Reaper"],
      "factions": ["Adeptus Astartes", "Black Templars"]
    },
    {
      "id": "91cab762-d65b-5cb5-815b-0d937f31eb2d",
      "name": "Black Templars Gladiator Valiant",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Gladiator Valiant"],
      "loadout": "This model is equipped with: 2 multi-meltas; twin las-talon; armoured hull.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 ironhail heavy stubber ◦ 1 multi-melta",
        "This model can be equipped with 1 Icarus rocket pod."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "180",
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
            "name": "Ferocious Assault",
            "description": "Each time this model makes an attack with its twin las-talon that targets the closest eligible Monster or Vehicle unit, add 1 to the Hit roll.",
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
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Black Templars Gladiator Valiant",
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
              "name": "Icarus rocket pod",
              "keywords": ["anti-fly 2+"],
              "range": "24\"",
              "attacks": "D3",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Twin las-talon",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "10",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Gladiator Valiant"],
      "factions": ["Adeptus Astartes", "Black Templars"]
    },
    {
      "id": "2614b505-bdc4-5619-bb9c-9693b3dfdaf6",
      "name": "Black Templars Impulsor",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Impulsor"],
      "loadout": "This model is equipped with: 2 storm bolters; armoured hull.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 ironhail heavy stubber ◦ 1 multi-melta",
        "This model’s 2 storm bolters can be replaced with 2 fragstorm grenade launchers.",
        "This model can be equipped with one of the following: ◦ 1 bellicatus missile array ◦ 1 ironhail skytalon array ◦ 1 orbital comms array ◦ 1 shield dome"
      ],
      "transport": "This model has a transport capacity of 6 Tacticus or Phobos Infantry models. It cannot transport Jump Pack models.",
      "points": [
        {
          "models": "1",
          "cost": "115",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Orbital Comms Array (Aura)",
            "description": "While a friendly Adeptus Astartes unit is within 6\" of the bearer, each time you target that unit with a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shield Dome",
            "description": "The bearer has a 5+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D3", "Firing Deck 6"],
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
            "name": "Assault Vehicle",
            "description": "Units can disembark from this Transport after it has Advanced. Units that do so count as having made a Normal move, and cannot declare a charge that turn.",
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
          "ld": "6+",
          "oc": "2",
          "name": "Black Templars Impulsor",
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
              "name": "Bellicatus missile array – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Bellicatus missile array – Icarus",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Bellicatus missile array – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Fragstorm grenade launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Ironhail skytalon array",
              "keywords": ["anti-fly 4+", "sustained hits 1"],
              "range": "36\"",
              "attacks": "8",
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
        "Impulsor"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"]
    },
    {
      "id": "2e63eb7b-1573-524a-9fde-f08f44773d50",
      "name": "Black Templars Repulsor",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Repulsor"],
      "loadout": "This model is equipped with: heavy onslaught gatling cannon; hunter-slayer missile; Repulsor defensive array; twin heavy bolter; armoured hull.",
      "wargear": [
        "This model’s twin heavy bolter can be replaced with 1 twin lascannon.",
        "This model’s heavy onslaught gatling cannon can be replaced with 1 las-talon.",
        "This model can be equipped with 1 multi-melta."
      ],
      "transport": "This model has a transport capacity of 12 Adeptus Astartes Infantry models. Each Jump Pack, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
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
            "name": "Emergency Combat Embarkation",
            "description": "Once per turn, in your opponent’s Charge phase, after an enemy unit has selected targets for its charge but before it makes a Charge move, you can select one Adeptus Astartes unit from your army that was selected as a target of that charge. Provided that unit is not within Engagement Range of any enemy units and every model in that unit is within 3\" of this Transport, it can embark within this Transport. The charging unit can then select new targets for its charge.",
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
          "sv": "3+",
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "Black Templars Repulsor",
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
              "name": "Heavy onslaught gatling cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "12",
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
              "name": "Hunter-slayer missile",
              "keywords": ["indirect fire", "one shot"],
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
              "name": "Las-talon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "10",
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
              "name": "Repulsor defensive array",
              "keywords": [],
              "range": "24\"",
              "attacks": "18",
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
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
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
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Smoke", "Transport", "Imperium", "Repulsor"],
      "factions": ["Adeptus Astartes", "Black Templars"]
    },
    {
      "id": "2d30c7c4-6bb8-5b1c-9fb1-e1012942d22b",
      "name": "Black Templars Repulsor Executioner",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Repulsor Executioner"],
      "loadout": "This model is equipped with: heavy onslaught gatling cannon; macro plasma incinerator; Repulsor Executioner defensive array; twin heavy bolter; twin Icarus ironhail heavy stubber; armoured hull.",
      "wargear": [
        "This model’s macro plasma incinerator can be replaced with 1 heavy laser destroyer.",
        "This model can be equipped with one of the following: ◦ 1 ironhail heavy stubber ◦ 1 multi-melta",
        "This model can be equipped with 1 Icarus rocket pod."
      ],
      "transport": "This model has a transport capacity of 6 Adeptus Astartes Infantry models. Each Jump Pack, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "245",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
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
            "name": "Executioner",
            "description": "Each time this model makes an attack that targets a unit that is Below Half-strength, add 1 to the Hit roll.",
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
          "sv": "3+",
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "Black Templars Repulsor Executioner",
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
              "name": "Heavy laser destroyer",
              "keywords": ["heavy"],
              "range": "72\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+4"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy onslaught gatling cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "12",
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
              "name": "Icarus rocket pod",
              "keywords": ["anti-fly 2+"],
              "range": "24\"",
              "attacks": "D3",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Macro plasma incinerator – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Macro plasma incinerator – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "9",
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
              "name": "Repulsor Executioner defensive array",
              "keywords": [],
              "range": "24\"",
              "attacks": "10",
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
              "name": "Twin Icarus ironhail heavy stubber",
              "keywords": ["anti-fly 4+", "rapid fire 3", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
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
        "Imperium",
        "Repulsor Executioner"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"]
    },
    {
      "id": "c754e3a4-fcdb-51bd-a458-8296733b3ea6",
      "name": "Castellan",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Infernus Squad ■ Intercessor Squad ■ Primaris Crusader Squad ■ Primaris Sword Brethren ■ Sternguard Veteran Squad You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Castellan"],
      "loadout": "This model is equipped with: combi-weapon; master-crafted power weapon.",
      "wargear": [
        "This model’s combi-weapon can be replaced with 1 heavy bolt pistol.",
        "This model’s master-crafted power weapon can be replaced with 1 Astartes chainsword."
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
            "name": "Tactical Precision",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Target Priority",
            "description": "This model’s unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
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
          "name": "Castellan",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
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
              "name": "Heavy bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Master-crafted power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Lieutenant",
        "Castellan"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"],
      "leads": {
        "units": [
          "Assault Intercessor Squad",
          "Infernus Squad",
          "Intercessor Squad",
          "Primaris Crusader Squad",
          "Primaris Sword Brethren",
          "Sternguard Veteran Squad"
        ],
        "extra": "You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "68bd0bd6-bbf1-5464-a004-0074c02e764a",
      "name": "Chaplain Grimaldus",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following units: ■ Assault Intercessor Squad ■ Infernus Squad ■ Intercessor Squad ■ Primaris Crusader Squad ■ Primaris Sword Brethren",
      "composition": [
        "1 Chaplain Grimaldus – Epic Hero",
        "3 Cenobyte Servitors"
      ],
      "loadout": "Chaplain Grimaldus is equipped with: plasma pistol; artificer crozius. Every Cenobyte Servitor is equipped with: close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [
          {
            "name": "RELICS OF THE EMPEROR ASCENDANT",
            "showAbility": true,
            "abilities": [
              {
                "name": "Banner of Fallen Crusaders",
                "description": "This unit is eligible to declare a charge in a turn in which it Advanced or Fell Back.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Remnant of the Fallen Temple",
                "description": "Models in this unit have the Feel No Pain 5+ ability.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Sceptre of Anointing",
                "description": "Improve the Armour Penetration characteristic of melee weapons equipped by models in this unit by 1.",
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
            "name": "Litanies of the Devout",
            "description": "While Chaplain Grimaldus is leading a unit, each time a model in that unit makes a melee attack, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Temple Relics",
            "description": "In your Command phase, if this unit contains one or more Cenobyte Servitor models, select one Relics of the Emperor Ascendant ability (see left). Until the start of your next Command phase, this unit’s Chaplain Grimaldus model has that ability.",
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
          "ld": "5+",
          "oc": "1",
          "name": "GRIMALDUS",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "4",
          "sv": "3+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "CENOBYTE SERVITOR",
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
              "name": "Artificer crozius",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
        "ALL MODELS:",
        "Infantry",
        "Imperium",
        "Tacticus",
        "GRIMALDUS:",
        "Character",
        "Epic Hero",
        "Grenades",
        "Chaplain Grimaldus"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"],
      "leads": {
        "units": [
          "Assault Intercessor Squad",
          "Infernus Squad",
          "Intercessor Squad",
          "Primaris Crusader Squad",
          "Primaris Sword Brethren"
        ],
        "extra": ""
      }
    },
    {
      "id": "e7576cd7-d91f-5864-bc14-9b38345b9417",
      "name": "Crusader Squad",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sword Brother", "4-9 Initiates", "0-10 Neophytes"],
      "loadout": "Every model is equipped with: boltgun; bolt pistol; close combat weapon.",
      "wargear": [],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75",
          "active": true
        },
        {
          "models": "10",
          "cost": "145",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
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
            "name": "Righteous Zeal",
            "description": "You can re-roll Advance and Charge rolls made for this unit. Before selecting targets for this weapon, select one of its profiles to make attacks with.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character from your army with the Leader ability can be attached to a Tactical Squad, it can be attached to this unit instead.",
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
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "NEOPHYTES",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "OTHER MODELS",
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
              "name": "Astartes shotgun",
              "keywords": ["assault"],
              "range": "18\"",
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
              "name": "Bolt pistol",
              "keywords": [],
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
              "name": "Flamer",
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
              "name": "Grav-gun",
              "keywords": ["anti-vehicle 2+"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
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
              "name": "Combat knife",
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
              "attacks": "2",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
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
      "keywords": [
        "Infantry",
        "Battleline",
        "Grenades",
        "Imperium",
        "Crusader Squad"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"]
    },
    {
      "id": "42779506-fcd1-5145-a0ed-5df12d5b4096",
      "name": "High Marshal Helbrecht",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Intercessor Squad ■ Primaris Crusader Squad ■ Primaris Sword Brethren",
      "composition": ["1 High Marshal Helbrecht – Epic Hero"],
      "loadout": "This model is equipped with: Ferocity; Sword of the High Marshals.",
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
            "name": "Crusade of Wrath",
            "description": "While this model is leading a unit, add 1 to the Strength characteristic of melee weapons equipped by models in that unit and each time an attack is made with such a weapon, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "High Marshal",
            "description": "At the start of the Fight phase, select one enemy unit within Engagement Range of this model’s unit and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.",
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
          "w": "5",
          "ld": "5+",
          "oc": "2",
          "name": "High Marshal Helbrecht",
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
              "name": "Ferocity",
              "keywords": ["anti-infantry 4+", "devastating wounds"],
              "range": "24\"",
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
              "name": "Sword of the High Marshals – one-handed",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Sword of the High Marshals – two-handed",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Chapter Master",
        "High Marshal Helbrecht"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"],
      "leads": {
        "units": [
          "Assault Intercessor Squad",
          "Intercessor Squad",
          "Primaris Crusader Squad",
          "Primaris Sword Brethren"
        ],
        "extra": ""
      }
    },
    {
      "id": "9892bec6-67ae-5ad3-b020-86a6f127fce7",
      "name": "Marshal",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Infernus Squad ■ Intercessor Squad ■ Primaris Crusader Squad ■ Primaris Sword Brethren ■ Sternguard Veteran Squad",
      "composition": ["1 Marshal"],
      "loadout": "This model is equipped with: plasma pistol; master-crafted power weapon.",
      "wargear": [
        "This model’s plasma pistol can be replaced with one combi-weapon."
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
            "name": "Rites of Battle",
            "description": "Once per battle round, you can target one unit from your army with this ability with a Stratagem for 0CP, and can do so even if another unit from your army has already been targeted by that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Finest Hour",
            "description": "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and those weapons have the [DEVASTATING WOUNDS] ability.",
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Marshal",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
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
              "name": "Master-crafted power weapon",
              "keywords": [],
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Captain",
        "Marshal"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"],
      "leads": {
        "units": [
          "Assault Intercessor Squad",
          "Infernus Squad",
          "Intercessor Squad",
          "Primaris Crusader Squad",
          "Primaris Sword Brethren",
          "Sternguard Veteran Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "98766136-bd99-5bf9-85e2-cfa97cfc2030",
      "name": "Primaris Crusader Squad",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Primaris Sword Brother",
        "5-11 Primaris Initiates",
        "4-8 Primaris Neophytes"
      ],
      "loadout": "The Primaris Sword Brother is equipped with: heavy bolt pistol; power weapon. Every Primaris Initiate is equipped with: bolt pistol; bolt rifle; close combat weapon. Every Primaris Neophyte is equipped with: bolt pistol; Astartes chainsword.",
      "wargear": [
        "The Primaris Sword Brother’s heavy bolt pistol can be replaced with 1 pyre pistol.",
        "Any number of Primaris Neophytes can each have their bolt pistol and Astartes chainsword replaced with 1 Neophyte firearm and 1 close combat weapon.",
        "Any number of Primaris Initiates can each have their bolt rifle replaced with 1 heavy bolt pistol and 1 Astartes chainsword.",
        "For every 10 models in this unit, up to 2 Primaris Initiates can each have their bolt rifle replaced with one of the following: ◦ 1 heavy bolt pistol and 1 power fist ◦ 1 pyreblaster"
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "160",
          "active": true
        },
        {
          "models": "20",
          "cost": "320",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 6\""],
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
            "name": "Righteous Zeal",
            "description": "You can re-roll Advance and Charge rolls made for this unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character from your army with the Leader ability can be attached to an Intercessor Squad, it can be attached to this unit instead.",
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
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "PRIMARIS NEOPHYTE",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "OTHER MODELS",
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
              "name": "Bolt rifle",
              "keywords": ["assault", "heavy"],
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
              "name": "Neophyte firearm",
              "keywords": ["assault"],
              "range": "18\"",
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
              "name": "Pyre pistol",
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
              "name": "Pyreblaster",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
        "Battleline",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Primaris Crusader Squad"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"],
      "leadBy": [
        "Castellan",
        "Chaplain Grimaldus",
        "High Marshal Helbrecht",
        "Marshal",
        "The Emperor’s Champion"
      ]
    },
    {
      "id": "3b3a03d0-07a9-5946-b97d-414f13fa9207",
      "name": "Primaris Sword Brethren",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Sword Brother Castellan",
        "4-9 Primaris Sword Brothers"
      ],
      "loadout": "Every model is equipped with: heavy bolt pistol; Astartes chainsword.",
      "wargear": [
        "Any number of Primaris Sword Brothers can each have their Astartes chainsword replaced with 1 power weapon.",
        "For every 5 models in this unit, 1 Primaris Sword Brother’s Astartes chainsword can be replaced with 1 thunder hammer.",
        "For every 5 models in this unit, 1 Primaris Sword Brother’s heavy bolt pistol can be replaced with 1 plasma pistol.",
        "For every 5 models in this unit, up to 2 Primaris Sword Brothers can each have their heavy bolt pistol replaced with 1 pyre pistol.",
        "The Sword Brother Castellan’s heavy bolt pistol and Astartes chainsword can be replaced with one of the following: ◦ 1 combi-weapon and 1 Astartes chainsword. ◦ 1 combi-weapon and 1 master-crafted power weapon. ◦ 1 heavy bolt pistol and 1 master-crafted power weapon.",
        "For every 5 models in this unit, 1 Primaris Sword Brother’s heavy bolt pistol and Astartes chainsword can be replaced with 1 twin lightning claws."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "165",
          "active": true
        },
        {
          "models": "10",
          "cost": "330",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
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
            "name": "Vow-sworn Bladesmen",
            "description": "At the start of the Fight phase, you can select one of the following effects to apply to melee weapons equipped by models in this unit until the end of the phase: ■ Add 1 to the Attacks characteristic of those weapons. ■ Add 1 to the Damage characteristic of those weapons.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character from your army with the Leader ability can be attached to an Intercessor Squad, it can be attached to this unit instead.",
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
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Primaris Sword Brethren",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Pyre pistol",
              "keywords": ["ignores cover", "pistol", "torrent"],
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
              "name": "Master-crafted power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
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
              "name": "Twin lightning claws",
              "keywords": ["twin linked"],
              "range": "Melee",
              "attacks": "5",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Primaris Sword Brethren"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"],
      "leadBy": [
        "Castellan",
        "Chaplain Grimaldus",
        "High Marshal Helbrecht",
        "Marshal",
        "The Emperor’s Champion"
      ]
    },
    {
      "id": "dff24b85-9eb0-5376-b4c7-d270dba31a35",
      "name": "The Emperor’s Champion",
      "source": "40k-10e",
      "faction_id": "CHBT",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Intercessor Squad ■ Primaris Crusader Squad ■ Primaris Sword Brethren ■ Sternguard Veteran Squad",
      "composition": ["1 Emperor’s Champion – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Black Sword.",
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
            "name": "Skilful Parry",
            "description": "Once per phase, when a melee attack is allocated to this model and the saving throw is failed, you can change the Damage characteristic of that attack to 0.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Sigismund’s Heir",
            "description": "Each time this model makes a melee attack that targets a Character unit, add 1 to the Wound roll.",
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "The Emperor’s Champion",
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
              "name": "Black Sword – strike",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Black Sword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
              "strength": "6",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "The Emperor’s Champion"
      ],
      "factions": ["Adeptus Astartes", "Black Templars"],
      "leads": {
        "units": [
          "Assault Intercessor Squad",
          "Intercessor Squad",
          "Primaris Crusader Squad",
          "Primaris Sword Brethren",
          "Sternguard Veteran Squad"
        ],
        "extra": ""
      }
    }
  ],
  "colours": {
    "banner": "#202a2f",
    "header": "#142637"
  }
}
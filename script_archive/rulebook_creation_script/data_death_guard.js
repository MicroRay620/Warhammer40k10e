window.data = window.data || {};
window.data.DG = {
  "id": "DG",
  "link": "https://game-datacards.eu",
  "name": "Death Guard",
  "is_subfaction": false,
  "parent_id": "",
  "allied_factions": ["CD", "QT"],
  "stratagems": [
    {
      "name": "FERRIC BLIGHT",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Plague Company",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "The spreading rust of the Ferric Blight can\nreduce armour of all kinds to nothing.",
      "when": "Your Shooting phase or the\nFight phase.",
      "target": "One Death Guard unit from your\narmy that has not been selected to shoot\nor fight this phase.",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes an\nattack, improve the Armour Penetration\ncharacteristic of that attack by 1. If the\ntarget of that attack is within Contagion\nRange of an Infected objective marker\nyou control and a Critical Wound is scored\nfor that attack, improve the Armour\nPenetration characteristic of that attack\nby 2 instead.",
      "restrictions": "",
      "id": "131085e7-990c-528f-8158-5f190613d796"
    },
    {
      "name": "SANGUOUS FLUX",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Plague Company",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "Bleeding sores erupt all over enemies\nafflicted by the Sanguous Flux, the wounds\nnever clotting or healing.",
      "when": "Fight phase.",
      "target": "One Death Guard unit from your\narmy that has not been selected to fight\nthis phase.",
      "effect": "Until the end of the phase,\nweapons equipped by models in your unit\nhave the [SUSTAINED HITS 1] ability. While\nyour unit is within range of an Infected\nobjective marker you control, those\nweapons have the [SUSTAINED HITS 2]\nability instead.",
      "restrictions": "",
      "id": "60594f75-c75c-5b0c-8cac-275b8eed1f89"
    },
    {
      "name": "DISGUSTINGLY RESILIENT",
      "cost": 2,
      "type": "Battle Tactic",
      "detachment": "Plague Company",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "Those favoured by Nurgle are inured to\npain, their rotting bodies shrugging off all\nbut the most traumatic damage with ease.\nWHEN: Fight phase, just after an enemy\nunit has selected its targets.",
      "when": "Fight phase, just after an enemy\nunit has selected its targets.",
      "target": "One Death Guard unit from your\narmy that was selected as the target of\none or more of that enemy unit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack is allocated to a model in\nyour unit, subtract 1 from the Damage\ncharacteristic of that attack.",
      "restrictions": "",
      "id": "9b6b8c5d-0e40-5bb3-a4e6-0bbd62da38cb"
    },
    {
      "name": "GIFTS OF DECAY",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Plague Company",
      "turn": "your",
      "phase": ["command"],
      "fluff": "Nurgle is a generous god, and through\nworship and devotion his followers can\ngain mighty rewards as they spread\nsickness in his name.",
      "when": "Your Command phase.",
      "target": "One Death Guard model from\nyour army.",
      "effect": "Your model regains up to D3 lost\nwounds. If your model’s unit is within\nContagion Range of an Infected objective\nmarker you control, your model regains\nup to 3 lost wounds instead.",
      "restrictions": "",
      "id": "ba755d5f-790e-5421-a32c-3d24f3cd12cb"
    },
    {
      "name": "BOILBLIGHT",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Plague Company",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "The strange lumps that form on victims\nof Boilblight – also known as Nurgle’s\nFruit, Lumpen Splatter or the Crawling\nPustulence – are easy to spot at a\ndistance for the Death Guard.",
      "when": "Your Shooting phase.",
      "target": "One Death Guard unit from\nyour army, and one enemy unit within\nContagion Range of that unit.",
      "effect": "Until the end of the phase, each\ntime a weapon equipped by a Death\nGuard model from your army targets that\nenemy unit, that weapon has the [HEAVY]\nand [IGNORES COVER] abilities.",
      "restrictions": "",
      "id": "a42a1e5a-a92e-5b91-bed9-789afff2f7c8"
    },
    {
      "name": "CLOUD OF FLIES",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Plague Company",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "With a thrumming roar, a thick cloud of\ndaemon flies whirls around the Death Guard\nand obscures them from the enemy’s sight.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has selected\nits targets.",
      "target": "One Death Guard unit from your\narmy that was selected as the target of\none or more of that enemy unit’s attacks.",
      "effect": "Until the end of the phase, your\nunit has the Stealth ability.",
      "restrictions": "",
      "id": "526c2b7b-5ba3-558e-a8d5-3b1aa4c8e699"
    }
  ],
  "enhancements": [
    {
      "name": "Living Plague",
      "description": "Death Guard model only. Add 3\" to the range of the bearer’s Aura abilities (including Nurgle’s Gift).",
      "keywords": ["Death Guard"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "The Droning (Aura)",
      "description": "Death Guard model only. While an enemy unit is within Contagion Range of the bearer, each time that unit fails a Battle-shock test, roll one D6: on a 2-5, that unit suffers 1 mortal wound; on a 6, that unit suffers D3 mortal wounds.",
      "keywords": ["Death Guard"],
      "excludes": [],
      "cost": "10"
    },
    {
      "name": "Deadly Pathogen",
      "description": "Death Guard model only. Add 1 to the Strength and Attacks characteristics of the bearer’s melee weapons. While the bearer is within range of an Infected objective marker you control, add 2 to the Strength and Attacks characteristics of the bearer’s melee weapons instead.",
      "keywords": ["Death Guard"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Shamblerot",
      "description": "Death Guard model only. Each time the bearer’s unit is selected as a target of an enemy unit’s charge, until the end of the phase, subtract 2 from Charge rolls made for that enemy unit.",
      "keywords": ["Death Guard"],
      "excludes": [],
      "cost": "25"
    }
  ],
  "datasheets": [
    {
      "id": "951a1b17-e101-525a-abef-b5ccb761c0f4",
      "name": "Biologus Putrifier",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plague Marines You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it (you cannot attach more than one of the same leader to the same unit). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Biologus Putrifier"],
      "loadout": "This model is equipped with: hyper blight grenades; injector pistol; plague knives.",
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
        "core": ["Deadly Demise 1", "Leader"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Foul Infusion",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability. In addition, each time a model in that unit makes an attack, a Critical Hit is scored on an unmodified Hit roll of 5+, instead of only a 6.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Explosive Maladies",
            "description": "Once per battle, in your Shooting phase, you can target this model with the Grenade Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
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
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Biologus Putrifier",
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
              "name": "Hyper blight grenades",
              "keywords": ["assault", "blast", "lethal hits"],
              "range": "12\"",
              "attacks": "D6",
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
              "name": "Injector pistol",
              "keywords": ["pistol"],
              "range": "3\"",
              "attacks": "1",
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
              "name": "Plague knives",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "4",
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
        "Character",
        "Chaos",
        "Nurgle",
        "Grenades",
        "Biologus Putrifier"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Plague Marines"],
        "extra": "You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it (you cannot attach more than one of the same leader to the same unit). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "03151889-d649-524b-a300-a012a530cb1e",
      "name": "Blightlord Terminators",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Blightlord Champion", "4-9 Blightlord Terminators"],
      "loadout": "Every model is equipped with: plague combi-bolter; bubotic blade.",
      "wargear": [
        "For every 5 models in this unit: ◦  Up to 3 models’ plague combi-bolters can each be replaced with 1 combi-weapon. ◦  1 Blightlord Terminator’s plague combi-bolter can be replaced with one of the following: 1 blight launcher; 1 reaper autocannon. ◦  1 Blightlord Terminator’s plague combi-bolter can be replaced with 1 plague spewer. ◦  1 Blightlord Terminator’s plague combi-bolter and bubotic blade can be replaced with 1 flail of corruption."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "175",
          "active": true
        },
        {
          "models": "10",
          "cost": "350",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blistering Fusillade",
            "description": "Each time a model in this unit makes a ranged attack, if it targets the closest eligible enemy unit, re-roll a Wound roll of 1.",
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
          "t": "6",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Blightlord Terminators",
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
              "name": "Blight launcher",
              "keywords": ["lethal hits"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
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
              "name": "Plague spewer",
              "keywords": ["anti-infantry 2+", "ignores cover", "torrent"],
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
              "name": "Reaper autocannon",
              "keywords": ["devastating wounds", "sustained hits 1"],
              "range": "36\"",
              "attacks": "4",
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
              "name": "Bubotic blade",
              "keywords": ["lethal hits"],
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
              "name": "Flail of corruption",
              "keywords": ["lethal hits"],
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
      "keywords": [
        "Infantry",
        "Chaos",
        "Nurgle",
        "Terminator",
        "Blightlord Terminators"
      ],
      "factions": ["Death Guard"],
      "leadBy": [
        "Death Guard Chaos Lord In Terminator Armour",
        "Death Guard Sorcerer In Terminator Armour",
        "Lord Of Contagion",
        "Lord Of Virulence",
        "Typhus"
      ]
    },
    {
      "id": "9ef8a2ff-99fc-5dd3-93e3-c9da2a6366a2",
      "name": "Death Guard Chaos Lord",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plague Marines",
      "composition": ["1 Death Guard Chaos Lord"],
      "loadout": "This model is equipped with: plague bolt pistol; Astartes chainsword.",
      "wargear": [
        "This model’s plague bolt pistol can be replaced with one of the following: ◦ 1 combi-weapon ◦ 1 plague combi-bolter ◦ 1 plague fist ◦ 1 plague-encrusted exalted weapon ◦ 1 plasma pistol",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 plague fist ◦ 1 plague-encrusted exalted weapon",
        "This model’s plague bolt pistol and Astartes chainsword can be replaced with 1 twin lighting claws."
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Chaos Lord",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Desiccation Conduit (Aura)",
            "description": "While an enemy unit is within Contagion Range of this model, at the end of the turn, roll one D6: on a 4+, that enemy unit suffers D3 mortal wounds.",
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
          "t": "5",
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Death Guard Chaos Lord",
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
              "name": "Plague bolt pistol",
              "keywords": ["lethal hits", "pistol"],
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
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
              "name": "Plague fist",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Plague-encrusted exalted weapon",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
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
        "Character",
        "Chaos",
        "Nurgle",
        "Grenades",
        "Chaos Lord"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Plague Marines"],
        "extra": ""
      }
    },
    {
      "id": "680c41ca-3123-5d64-be0e-c99612794441",
      "name": "Death Guard Chaos Lord In Terminator Armour",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blightlord Terminators ■ Deathshroud Terminators",
      "composition": ["1 Death Guard Chaos Lord in Terminator Armour"],
      "loadout": "This model is equipped with: plague combi-bolter; plague-encrusted exalted weapon.",
      "wargear": [
        "This model’s plague combi-bolter can be replaced with one of the following: ◦ 1 combi-weapon ◦ 1 plague-encrusted exalted weapon",
        "This model’s plague-encrusted exalted weapon can be replaced with one of the following: ◦ 1 chainfist ◦ 1 plague fist",
        "This model’s plague combi-bolter and plague-encrusted exalted weapon can be replaced with 1 twin lighting claws."
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Chaos Lord",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Desiccation Conduit (Aura)",
            "description": "While an enemy unit is within Contagion Range of this model, at the end of the turn, roll one D6: on a 4+, that enemy unit suffers D3 mortal wounds.",
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
          "t": "6",
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Death Guard Chaos Lord In Terminator Armour",
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Plague fist",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Plague-encrusted exalted weapon",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
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
        "Character",
        "Chaos",
        "Nurgle",
        "Terminator",
        "Chaos Lord"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Blightlord Terminators", "Deathshroud Terminators"],
        "extra": ""
      }
    },
    {
      "id": "22bd8e91-e3b7-53aa-954e-4e719196d091",
      "name": "Death Guard Chaos Spawn",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2 Chaos Spawn"],
      "loadout": "Every model is equipped with: hideous mutations.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "75",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Regenerating Monstrosities",
            "description": "At the start of each player’s Command phase, one model in this unit regains up to D3 lost wounds.",
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
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Death Guard Chaos Spawn",
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
              "name": "Hideous mutations",
              "keywords": [],
              "range": "Melee",
              "attacks": "D6+2",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Beast", "Chaos", "Nurgle", "Spawn"],
      "factions": ["Death Guard"]
    },
    {
      "id": "51fb865e-eb87-530e-a12c-2d2214fa3b8c",
      "name": "Death Guard Cultists",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Death Guard Cultist Champion",
        "9-19 Death Guard Cultists"
      ],
      "loadout": "Every model is equipped with: Cultist firearm; brutal assault weapon.",
      "wargear": [
        "For every 10 models in the unit, 1 Death Guard Cultist’s Cultist firearm can be replaced with 1 flamer.",
        "For every 10 models in the unit, 1 Death Guard Cultist’s Cultist firearm can be replaced with 1 heavy stubber.",
        "For every 10 models in the unit, 1 Death Guard Cultist’s Cultist firearm can be replaced with 1 grenade launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "55",
          "active": true
        },
        {
          "models": "20",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 6\""],
        "faction": ["Nurgle’s Gift (Aura)"],
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
          "t": "3",
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Death Guard Cultists",
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
              "name": "Cultist firearm",
              "keywords": [],
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
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Brutal assault weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Nurgle", "Cultists"],
      "factions": ["Death Guard"]
    },
    {
      "id": "7bbfe002-937e-5116-a7fd-0296425e4ccc",
      "name": "Death Guard Daemon Prince",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Guard Daemon Prince"],
      "loadout": "This model is equipped with: plague spewer; hellforged weapons.",
      "wargear": ["None"],
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Grandfather’s Blessing (Aura, Psychic)",
            "description": "While a friendly Death Guard Infantry unit is within Contagion Range of this model, models in that unit have the Feel No Pain 6+ ability.",
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
          "t": "11",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Death Guard Daemon Prince",
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
              "name": "Plague spewer",
              "keywords": ["anti-infantry 2+", "ignores cover", "torrent"],
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
              "name": "Hellforged weapons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Hellforged weapons – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Chaos",
        "Nurgle",
        "Psyker",
        "Daemon",
        "Daemon Prince"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "09acd391-9b66-56a9-a3a0-a1afb0a56d45",
      "name": "Death Guard Daemon Prince With Wings",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Guard Daemon Prince with Wings"],
      "loadout": "This model is equipped with: plague spewer; hellforged weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "215",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Warp Horror (Psychic)",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it. That unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Devastating Assault",
            "description": "Each time this model ends a Charge move, until the end of the turn, its hellforged weapons have the [DEVASTATING WOUNDS] ability.",
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
          "m": "11\"",
          "t": "10",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Death Guard Daemon Prince With Wings",
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
              "name": "Plague spewer",
              "keywords": ["anti-infantry 2+", "ignores cover", "torrent"],
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
              "name": "Hellforged weapons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Hellforged weapons – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Fly",
        "Chaos",
        "Nurgle",
        "Psyker",
        "Daemon",
        "Daemon Prince with Wings"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "21299ff3-f747-5ee2-adf9-e337de8f3707",
      "name": "Death Guard Defiler",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Guard Defiler"],
      "loadout": "This model is equipped with: Defiler cannon; reaper autocannon; twin heavy flamer; Defiler claws.",
      "wargear": [
        "This model’s twin heavy flamer can be replaced with one of the following: ◦ 1 Defiler scourge ◦ 1 havoc launcher",
        "This model’s reaper autocannon can be replaced with one of the following: ◦ 1 twin lascannon ◦ 1 twin plague heavy bolter",
        "This model can be equipped with one of the following: ◦ 1 combi-weapon ◦ 1 plague combi-bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "205",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Scuttling Walker",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over friendly Monster and Vehicle models and terrain features that are 4\" or less in height as if they were not there.",
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
          "oc": "5",
          "name": "Death Guard Defiler",
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
              "name": "Defiler cannon",
              "keywords": ["blast"],
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
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
              "name": "Reaper autocannon",
              "keywords": ["devastating wounds", "sustained hits 1"],
              "range": "36\"",
              "attacks": "4",
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
              "name": "Twin heavy flamer",
              "keywords": ["torrent", "ignores cover", "twin-linked"],
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin plague heavy bolter",
              "keywords": ["lethal hits", "sustained hits 1", "twin-linked"],
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
              "name": "Defiler claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "16",
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
              "name": "Defiler scourge",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "12",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Chaos",
        "Nurgle",
        "Daemon",
        "Smoke",
        "Defiler"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "3754d350-aa5d-5860-9821-48d62bf489e0",
      "name": "Death Guard Helbrute",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Guard Helbrute"],
      "loadout": "This model is equipped with: multi-melta; missile launcher; close combat weapon.",
      "wargear": [
        "This model’s multi-melta can be replaced with one of the following: ◦ 1 Helbrute plasma cannon ◦ 1 twin autocannon ◦ 1 twin lascannon ◦ 1 twin plague heavy bolter ◦ 1 Helbrute fist",
        "This model’s missile launcher can be replaced with one of the following: ◦ 1 Helbrute fist ◦ 1 Helbrute hammer ◦ 1 power scourge",
        "For each Helbrute fist this model is equipped with, it can be equipped with one of the following: ◦ 1 plague combi-bolter ◦ 1 heavy flamer"
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
        "core": ["Deadly Demise 1"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Infused with the Blessings of Nurgle",
            "description": "Each time this model is selected to shoot or fight, after it has finished making its attacks, select one enemy unit that was hit by one or more of those attacks. Until the start of your next turn, that enemy unit is always considered to be within Contagion Range of this model.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Enraged Impact",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Helbrute Fists",
            "description": "If this model is equipped with two Helbrute fists, those weapons have the [TWIN-LINKED] ability.",
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
          "name": "Death Guard Helbrute",
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
              "name": "Helbrute plasma cannon",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Missile launcher – frag",
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
              "name": "Missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
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
              "name": "Twin autocannon",
              "keywords": ["twin-linked"],
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin plague heavy bolter",
              "keywords": ["lethal hits", "sustained hits 1", "twin-linked"],
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Helbrute fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Helbrute hammer",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power scourge",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Chaos", "Nurgle", "Helbrute"],
      "factions": ["Death Guard"]
    },
    {
      "id": "c62864a6-263d-59eb-b6d0-74f9b56b5b35",
      "name": "Death Guard Icon Bearer",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plague Marines You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Death Guard Icon Bearer"],
      "loadout": "This model is equipped with: plague boltgun; plague knife.",
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
        "core": ["Leader"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Unclean Icon",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Seed the Disease",
            "description": "Once per battle, at the end of your Movement phase, this model can use this ability. If it does, until the start of your next Command phase, this model’s unit is treated as having a Contagion Range of 12\".",
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
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "5+",
          "oc": "1",
          "name": "Death Guard Icon Bearer",
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
              "name": "Plague boltgun",
              "keywords": ["lethal hits"],
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
              "name": "Plague knife",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "4",
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
        "Character",
        "Chaos",
        "Nurgle",
        "Grenades",
        "Death Guard Icon Bearer"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Plague Marines"],
        "extra": "You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "27360100-1b19-5afe-9f81-b72eb46a5284",
      "name": "Death Guard Land Raider",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Guard Land Raider"],
      "loadout": "This model is equipped with: 2 soulshatter lascannons; twin plague heavy bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 combi-weapon ◦ 1 plague combi-bolter",
        "This model can be equipped with 1 havoc launcher."
      ],
      "transport": "This model has a transport capacity of 12 Death Guard Infantry models (excluding Cultist and Poxwalker models). Each Terminator model takes up the space of 2 models.",
      "points": [
        {
          "models": "1",
          "cost": "250",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Assault Ramp",
            "description": "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn.",
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
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "Death Guard Land Raider",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
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
              "name": "Soulshatter lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
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
              "name": "Twin plague heavy bolter",
              "keywords": ["lethal hits", "sustained hits 1", "twin-linked"],
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
              "name": "Armoured tracks",
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
        "Chaos",
        "Nurgle",
        "Transport",
        "Smoke",
        "Land Raider"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "f1c973f6-dcee-58b3-817c-9194aa19024a",
      "name": "Death Guard Possessed",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Possessed Champion", "4-9 Possessed"],
      "loadout": "Each model is equipped with: hideous mutations.",
      "wargear": ["1 model can be equipped with 1 diseased icon."],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Diseased Icon",
            "description": "Melee weapons in the bearer's unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Nurgle's Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Infectious Bloodshed",
            "description": "Each time this unit makes a Charge move, until the end of the turn, weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "POSSESSED",
            "description": "For the purposes of embarking within Transports, each Death Guard Possessed model counts as one Terminator model.",
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
          "m": "9\"",
          "t": "6",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Death Guard Possessed",
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
              "name": "Hideous mutations",
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
      "keywords": ["Infantry", "Chaos", "Daemon", "Possessed"],
      "factions": ["Death Guard"]
    },
    {
      "id": "c2bc7f7b-9748-5cf4-b7c9-b705189ff448",
      "name": "Death Guard Predator Annihilator",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Guard Predator Annihilator"],
      "loadout": "This model is equipped with: Predator twin lascannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 lascannons ◦ 2 plague heavy bolters",
        "This model can be equipped with one of the following: ◦ 1 combi-weapon ◦ 1 plague combi-bolter",
        "This model can be equipped with 1 havoc launcher."
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Annihilator",
            "description": "Each time this model makes a ranged attack that targets a Monster or Vehicle unit, re-roll a Damage roll of 1.",
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
          "ld": "6+",
          "oc": "4",
          "name": "Death Guard Predator Annihilator",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
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
              "name": "Plague heavy bolter",
              "keywords": ["lethal hits", "sustained hits 1"],
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
        "Chaos",
        "Nurgle",
        "Smoke",
        "Predator Annihilator"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "c26b2349-ac3b-5477-b2b7-387398a0d092",
      "name": "Death Guard Predator Destructor",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Guard Predator Destructor"],
      "loadout": "This model is equipped with: predator autocannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 lascannons ◦ 2 plague heavy bolters",
        "This model can be equipped with one of the following: ◦ 1 combi-weapon ◦ 1 plague combi-bolter",
        "This model can be equipped with 1 havoc launcher."
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Destructor",
            "description": "Each time this model makes a ranged attack that targets an Infantry unit, improve the Armour Penetration characteristic of that attack by 1.",
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
          "ld": "6+",
          "oc": "4",
          "name": "Death Guard Predator Destructor",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
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
              "name": "Plague heavy bolter",
              "keywords": ["lethal hits", "sustained hits 1"],
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
              "name": "Predator autocannon",
              "keywords": ["rapid fire 2"],
              "range": "48\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
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
        "Chaos",
        "Nurgle",
        "Smoke",
        "Predator Destructor"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "d99d9230-872e-5f37-8ebd-c5eb5fd6b624",
      "name": "Death Guard Rhino",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Death Guard Rhino"],
      "loadout": "This model is equipped with: plague combi-bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 combi-weapon ◦ 1 additional plague combi-bolter",
        "This model can be equipped with 1 havoc launcher."
      ],
      "transport": "This model has a transport capacity of 12 Death Guard Infantry models. It cannot transport Terminator, Cultist or Poxwalker models.",
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
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
          "ld": "6+",
          "oc": "2",
          "name": "Death Guard Rhino",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
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
        "Chaos",
        "Nurgle",
        "Transport",
        "Dedicated Transport",
        "Smoke",
        "Rhino"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "c94bd1fc-18af-5742-ba7a-ad40d8abcc0d",
      "name": "Death Guard Sorcerer In Terminator Armour",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blightlord Terminators ■ Deathshroud Terminators",
      "composition": ["1 Death Guard Sorcerer in Terminator Armour"],
      "loadout": "This model is equipped with: Curse of the Leper; plague combi-bolter; force weapon.",
      "wargear": [
        "This model’s plague combi-bolter can be replaced with one of the following: ◦ 1 combi-weapon ◦ 1 plague-encrusted exalted weapon",
        "This model’s force weapon can be replaced with one of the following: ◦ 1 chainfist ◦ 1 plague fist ◦ 1 plague-encrusted exalted weapon",
        "This model’s plague combi-bolter and force weapon can be replaced with 1 twin lighting claws."
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Putrescent Vitality (Psychic)",
            "description": "At the start of the Fight phase, you can roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2+, until the end of the phase, each time an attack is allocated to a model in this Psyker’s unit, subtract 1 from the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Pestilent Familiar (Psychic)",
            "description": "Once per battle, after selecting targets for a Psychic weapon equipped by this model, until the end of the phase, improve the Strength and Damage characteristics of that weapon by 2. Designer’s Note: Place a Pestilent Familiar token next to this model, removing it once this ability has been used.",
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
          "t": "6",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Death Guard Sorcerer In Terminator Armour",
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
              "name": "Curse of the Leper – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Curse of the Leper – focused witchfire",
              "keywords": ["hazardous", "psychic"],
              "range": "24\"",
              "attacks": "2D6",
              "skill": "3+",
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
              "name": "Plague combi-bolter",
              "keywords": ["lethal hits", "rapid fire 2"],
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
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
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
              "name": "Plague fist",
              "keywords": ["lethal hits"],
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
              "name": "Plague-encrusted exalted weapon",
              "keywords": ["lethal hits"],
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
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
        "Character",
        "Psyker",
        "Chaos",
        "Nurgle",
        "Terminator",
        "Sorcerer"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Blightlord Terminators", "Deathshroud Terminators"],
        "extra": ""
      }
    },
    {
      "id": "eb5e8c1b-7044-5a1c-9fa7-6acc0917b4c8",
      "name": "Deathshroud Terminators",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Deathshroud Champion", "2-5 Deathshroud Terminators"],
      "loadout": "Every model is equipped with: plaguespurt gauntlet; manreaper.",
      "wargear": [
        "The Deathshroud Champion can be equipped with 1 additional plaguespurt gauntlet."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "140",
          "active": true
        },
        {
          "models": "6",
          "cost": "280",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Silent Bodyguard",
            "description": "While a Character model is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than this unit’s Toughness characteristic, subtract 1 from the Wound roll.",
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
          "t": "6",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Deathshroud Terminators",
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
              "name": "Plaguespurt gauntlet",
              "keywords": [
                "anti-infantry 4+",
                "ignores cover",
                "pistol",
                "torrent"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Manreaper – strike",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Manreaper – sweep",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Chaos",
        "Nurgle",
        "Terminator",
        "Deathshroud Terminators"
      ],
      "factions": ["Death Guard"],
      "leadBy": [
        "Death Guard Chaos Lord In Terminator Armour",
        "Death Guard Sorcerer In Terminator Armour",
        "Lord Of Contagion",
        "Lord Of Virulence",
        "Typhus"
      ]
    },
    {
      "id": "6b6967c5-ec28-54ec-a1e8-161225c22f35",
      "name": "Foetid Bloat-drone",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Foetid Bloat-drone"],
      "loadout": "This model is equipped with: fleshmower; plague probe.",
      "wargear": [
        "This model’s fleshmower can be replaced with one of the following: ◦ 1 heavy blight launcher ◦ 2 plaguespitters"
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
        "core": ["Deadly Demise 1"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Hovering Death",
            "description": "This model is eligible to shoot and declare a charge in a turn in which it Fell Back.",
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
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Foetid Bloat-drone",
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
              "name": "Heavy blight launcher",
              "keywords": ["lethal hits"],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Plaguespitter",
              "keywords": ["anti-infantry 2+", "ignores cover", "torrent"],
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
              "name": "Fleshmower",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "10",
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
              "name": "Plague probe",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Chaos",
        "Nurgle",
        "Daemon",
        "Foetid Bloat-drone"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "d5fb5b79-6dc0-5394-ab44-31363d11a8fd",
      "name": "Foul Blightspawn",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plague Marines You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it (you cannot attach more than one of the same leader to the same unit). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Foul Blightspawn"],
      "loadout": "This model is equipped with: plague sprayer; close combat weapon.",
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
        "core": ["Leader"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Putrefying Stink",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability.",
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
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Foul Blightspawn",
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
              "name": "Plague sprayer",
              "keywords": ["anti-infantry 2+", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "7",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Character",
        "Chaos",
        "Nurgle",
        "Grenades",
        "Foul Blightspawn"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Plague Marines"],
        "extra": "You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it (you cannot attach more than one of the same leader to the same unit). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "b21749fa-3cad-5c12-922b-1924b0e628bf",
      "name": "Lord Of Contagion",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blightlord Terminators ■ Deathshroud Terminators",
      "composition": ["1 Lord of Contagion"],
      "loadout": "This model is equipped with: plagueblade.",
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Vector of Disease",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Abundance of Sickness",
            "description": "In the Fight phase, each time this model loses a wound, roll one D6: on a 4+, the closest enemy unit within Engagement Range of this model suffers 1 mortal wound.",
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
          "t": "6",
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Lord Of Contagion",
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
              "name": "Plagueblade – strike",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Plagueblade – sweep",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
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
        "Chaos",
        "Nurgle",
        "Terminator",
        "Grenades",
        "Lord of Contagion"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Blightlord Terminators", "Deathshroud Terminators"],
        "extra": ""
      }
    },
    {
      "id": "720ed0f6-a035-582e-80ae-2caa1397496a",
      "name": "Lord Of Virulence",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blightlord Terminators ■ Deathshroud Terminators",
      "composition": ["1 Lord of Virulence"],
      "loadout": "This model is equipped with: twin plague spewer; heavy plague fist.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Master of Destruction",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Blight Bombardment",
            "description": "Each time a friendly Death Guard model makes an attack with a Blast weapon that targets a unit that is visible to this model, add 1 to the Hit roll and that attack has the [IGNORES COVER] ability.",
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
          "t": "6",
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Lord Of Virulence",
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
              "name": "Twin plague spewer",
              "keywords": [
                "anti-infantry 2+",
                "ignores cover",
                "torrent",
                "twin-linked"
              ],
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
              "name": "Heavy plague fist",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "5",
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
        "Chaos",
        "Nurgle",
        "Terminator",
        "Lord of Virulence"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Blightlord Terminators", "Deathshroud Terminators"],
        "extra": ""
      }
    },
    {
      "id": "bcf0fc13-638a-51d7-b0b6-630b22f34cba",
      "name": "Malignant Plaguecaster",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plague Marines",
      "composition": ["1 Malignant Plaguecaster"],
      "loadout": "This model is equipped with: plague bolt pistol; Plague Wind; corrupted staff.",
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Gift of Contagion (Psychic)",
            "description": "In your Shooting phase, you can select one enemy unit within 18\" of and visible to this Psyker and roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2+, until the start of your next Shooting phase, each time a model in that enemy unit makes a melee attack, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Pestilent Fallout (Psychic)",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its Plague Wind scored a wound against an enemy Infantry unit, until the start of your next turn, subtract 2 from that unit’s Move characteristic and subtract 2 from Advance and Charge rolls made for that unit.",
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
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Malignant Plaguecaster",
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
              "name": "Plague bolt pistol",
              "keywords": ["lethal hits", "pistol"],
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
              "name": "Plague Wind – witchfire",
              "keywords": ["psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Plague Wind – focused witchfire",
              "keywords": ["hazardous", "psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
              "strength": "6",
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
              "name": "Corrupted staff",
              "keywords": ["lethal hits", "psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Chaos",
        "Nurgle",
        "Psyker",
        "Malignant Plaguecaster"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Plague Marines"],
        "extra": ""
      }
    },
    {
      "id": "f8f8d778-fea0-5af6-be79-9d3c09870662",
      "name": "Miasmic Malignifier",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Miasmic Malignifier"],
      "loadout": "This model is equipped with: noxious stink.",
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
        "core": ["Deadly Demise D3", "Infiltrators"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Putrescent Fog (Aura)",
            "description": "While a friendly Death Guard unit is wholly within 6\" of this Fortification, each time an attack targets that unit, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Diseased Cover",
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
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "0",
          "name": "Miasmic Malignifier",
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
              "name": "Noxious stink",
              "keywords": ["ignores cover", "torrent"],
              "range": "6\"",
              "attacks": "2D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Chaos", "Nurgle", "Miasmic Malignifier"],
      "factions": ["Death Guard"]
    },
    {
      "id": "53013666-f538-593a-b245-e9af5213228c",
      "name": "Mortarion",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Mortarion – Epic Hero"],
      "loadout": "This model is equipped with: Rotwind; the Lantern; Silence.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "370",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Feel No Pain 5+"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [
          {
            "name": "HOST OF PLAGUES",
            "showAbility": true,
            "abilities": [
              {
                "name": "Miasma of Pestilence (Aura)",
                "description": "While a friendly Death Guard unit is within 6\" of this model, each time a ranged attack targets that unit, models in that unit have the Benefit of Cover against that attack.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Diseased Influence (Aura)",
                "description": "While a friendly Death Guard unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Wound roll of 1.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Toxic Presence (Aura)",
                "description": "While a friendly Death Guard unit is within 12\" of this model, add 3\" to the Contagion Range of that unit.",
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
            "name": "Host of Plagues",
            "description": "At the start of the battle round, select one of the abilities in the Host of Plagues section (see left). Until the start of the next battle round, this model has that ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Lord of the Death Guard (Aura)",
            "description": "While a friendly Death Guard unit is within 6\" of this model, that unit can ignore any or all modifiers to its characteristics and to any roll or test made for it (excluding modifiers to saving throws).",
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
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "16",
          "ld": "5+",
          "oc": "6",
          "name": "Mortarion",
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
              "name": "Rotwind",
              "keywords": [
                "blast",
                "devastating wounds",
                "lethal hits",
                "psychic"
              ],
              "range": "18\"",
              "attacks": "D6+3",
              "skill": "2+",
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
              "name": "The Lantern",
              "keywords": ["pistol", "sustained hits d3"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Silence – strike",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "4"
            },
            {
              "active": true,
              "name": "Silence – sweep",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "15",
              "skill": "2+",
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
        "Fly",
        "Character",
        "Epic Hero",
        "Daemon",
        "Grenades",
        "Chaos",
        "Nurgle",
        "Primarch",
        "Mortarion"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "b8be53ee-dc97-54c2-a384-c109c3ac807e",
      "name": "Myphitic Blight-haulers",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Myphitic Blight-hulers"],
      "loadout": "Every model is equipped with: bile spurt; missile launcher; multi-melta; gnashing maw.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "115",
          "active": true
        },
        {
          "models": "2",
          "cost": "230",
          "active": true
        },
        {
          "models": "3",
          "cost": "345",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tank Hunters",
            "description": "Each time a model in this unit makes a ranged attack that targets a Vehicle unit, add 1 to the Wound roll.",
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
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Myphitic Blight-haulers",
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
              "name": "Bile spurt",
              "keywords": ["lethal hits"],
              "range": "12\"",
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
              "name": "Missile launcher – frag",
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
              "name": "Missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Gnashing maw",
              "keywords": ["lethal hits"],
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
      "keywords": [
        "Vehicle",
        "Chaos",
        "Nurgle",
        "Daemon",
        "Smoke",
        "Myphitic Blight-haulers"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "d1cbfd48-6aed-5140-ad04-6f047ad5565e",
      "name": "Noxious Blightbringer",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plague Marines You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it (you cannot attach more than one of the same Leader to the same unit). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Noxious Blightbringer"],
      "loadout": "This model is equipped with: plasma pistol; cursed plague bell.",
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sickening Vitality",
            "description": "While this model is leading a unit, you can re-roll Advance and Charge rolls made for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Bell Tolls (Aura)",
            "description": "While an enemy unit is within Contagion Range of this model, each time a Battle-shock or Leadership test is taken for that enemy unit, subtract 2 from that test.",
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
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Noxious Blightbringer",
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
              "keywords": ["pistol", "hazardous"],
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
              "name": "Cursed plague bell",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Chaos",
        "Nurgle",
        "Noxious Blightbringer"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Plague Marines"],
        "extra": "You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it (you cannot attach more than one of the same Leader to the same unit). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "27c961bb-dde0-57b3-abca-1e9823dfa9c9",
      "name": "Plague Marines",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Plague Champion", "4-9 Plague Marines"],
      "loadout": "Every model is equipped with: plague boltgun; plague knives.",
      "wargear": [
        "The Plague Champion’s plague boltgun can be replaced with one of the following: ◦ 1 plague bolt pistol ◦ 1 plasma gun ◦ 1 plasma pistol",
        "The Plague Champion’s plague knives can be replaced with one of the following: ◦ 1 bubotic weapons ◦ 1 heavy plague weapon",
        "For every 5 models in this unit, 1 Plague Marine’s plague boltgun can be replaced with 1 blight launcher.",
        "For every 5 models in this unit, 1 Plague Marine’s plague boltgun can be replaced with 1 plague spewer.",
        "For every 5 models in this unit, 1 Plague Marine’s plague boltgun can be replaced with one of the following: ◦ 1 meltagun ◦ 1 plague belcher ◦ 1 plasma gun",
        "For every 5 models in this unit, up to 2 Plague Marines can each have their plague boltgun replaced with 1 bubotic weapons.",
        "For every 5 models in this unit, up to 2 Plague Marines can each have their plague boltgun replaced with 1 heavy plague weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "100",
          "active": true
        },
        {
          "models": "7",
          "cost": "140",
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
        "core": [],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Remorseless",
            "description": "While this unit is within range of an objective marker you control, each time you take a Battle-shock test for this unit, add 1 to that test.",
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
          "t": "5",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Plague Marines",
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
              "name": "Blight launcher",
              "keywords": ["lethal hits"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Plague belcher",
              "keywords": ["anti-infantry 4+", "ignores cover", "torrent"],
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
              "name": "Plague bolt pistol",
              "keywords": ["lethal hits", "pistol"],
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
              "name": "Plague boltgun",
              "keywords": ["lethal hits"],
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
              "name": "Plague spewer",
              "keywords": ["anti-infantry 2+", "ignores cover", "torrent"],
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
              "name": "Bubotic weapons",
              "keywords": ["lethal hits"],
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
              "name": "Heavy plague weapon",
              "keywords": ["lethal hits"],
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
              "name": "Plague knives",
              "keywords": ["lethal hits"],
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
        "Chaos",
        "Nurgle",
        "Grenades",
        "Battleline",
        "Plague Marines"
      ],
      "factions": ["Death Guard"],
      "leadBy": [
        "Biologus Putrifier",
        "Death Guard Chaos Lord",
        "Death Guard Icon Bearer",
        "Foul Blightspawn",
        "Malignant Plaguecaster",
        "Noxious Blightbringer",
        "Plague Surgeon",
        "Tallyman"
      ]
    },
    {
      "id": "3ccbc88a-f41b-56bc-a482-6accee485958",
      "name": "Plague Surgeon",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plague Marines You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Plague Surgeon"],
      "loadout": "This model is equipped with: plague bolt pistol; balesword.",
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tainted Narthecium",
            "description": "While this model is leading a unit, in your Command phase, you can return 1 destroyed Bodyguard model to that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Diseased Healing",
            "description": "At the end of your Movement phase, you can select one friendly Death Guard Infantry Character model within 3\" of this model. That model regains up to 3 lost wounds. Each model can only be selected for this ability once per turn.",
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
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Plague Surgeon",
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
              "name": "Plague bolt pistol",
              "keywords": ["lethal hits", "pistol"],
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
              "name": "Balesword",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Chaos",
        "Nurgle",
        "Plague Surgeon"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Plague Marines"],
        "extra": "You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "191a9eb3-9820-5145-b378-2fc699702fce",
      "name": "Plagueburst Crawler",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Plagueburst Crawler"],
      "loadout": "This model is equipped with: 2 entropy cannons; heavy slugger; Plagueburst mortar; armoured tracks.",
      "wargear": [
        "This model’s 2 entropy cannons can be replaced with 2 plaguespitters.",
        "This model’s heavy slugger can be replaced with 1 rothail volley gun."
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
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Spore-laced Shock Waves",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its Plagueburst mortar scored a hit against an enemy Infantry unit, that Infantry unit must take a Battle-shock test.",
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
          "ld": "6+",
          "oc": "4",
          "name": "Plagueburst Crawler",
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
              "name": "Entropy cannon",
              "keywords": ["lethal hits"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
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
              "name": "Heavy slugger",
              "keywords": [],
              "range": "36\"",
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
              "name": "Plagueburst mortar",
              "keywords": ["blast", "indirect fire", "lethal hits"],
              "range": "48\"",
              "attacks": "D6+3",
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
              "name": "Plaguespitter",
              "keywords": ["anti-infantry 2+", "ignores cover", "torrent"],
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
              "name": "Rothail volley gun",
              "keywords": ["lethal hits", "rapid fire 3"],
              "range": "24\"",
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
        "Chaos",
        "Nurgle",
        "Daemon",
        "Plagueburst Crawler"
      ],
      "factions": ["Death Guard"]
    },
    {
      "id": "1494009a-18dc-5ebb-9d53-263e2f975278",
      "name": "Poxwalkers",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["10-20 Poxwalkers"],
      "loadout": "Every model is equipped with: improvised weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "60",
          "active": true
        },
        {
          "models": "20",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Curse of the Walking Pox",
            "description": "Each time a model in this unit makes an attack that destroys an enemy model (excluding Monster and Vehicle models), you can return one destroyed Poxwalker model to this unit. While Typhus is leading this unit, enemy models destroyed as a result of Typhus’ The Eater Plague ability count as enemy models destroyed by an attack made by a model in this unit for the purposes of this ability.",
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
          "t": "4",
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "Poxwalkers",
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
              "name": "Improvised weapon",
              "keywords": ["lethal hits"],
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
      "keywords": ["Infantry", "Chaos", "Nurgle", "Poxwalkers"],
      "factions": ["Death Guard"],
      "leadBy": ["Typhus"]
    },
    {
      "id": "e364784e-08a1-55cc-bf39-18df5f3efca2",
      "name": "Tallyman",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plague Marines You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it (you cannot attach more than one of the same leader to the same unit). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Tallyman"],
      "loadout": "This model is equipped with: infected plasma pistol; close combat weapon.",
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
        "core": ["Leader"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Malicious Calculations",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Seven-fold Chant",
            "description": "In your Command phase, if this model is on the battlefield, roll 2D6: on a 7+, you gain 1CP.",
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
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Tallyman",
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
              "name": "Infected plasma pistol – standard",
              "keywords": ["pistol", "sustained hits d3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Infected plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol", "sustained hits d3"],
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
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Chaos", "Nurgle", "Tallyman"],
      "factions": ["Death Guard"],
      "leads": {
        "units": ["Plague Marines"],
        "extra": "You can attach this model to a Plague Marines unit, even if one other Leader unit has already been attached to it (you cannot attach more than one of the same leader to the same unit). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "0108df02-9869-5b94-9596-80f0fe42b689",
      "name": "Typhus",
      "source": "40k-10e",
      "faction_id": "DG",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blightlord Terminators ■ Deathshroud Terminators ■ Poxwalkers",
      "composition": ["1 Typhus – Epic Hero"],
      "loadout": "This model is equipped with: master-crafted manreaper.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Nurgle’s Gift (Aura)"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Destroyer Hive",
            "description": "While this model is leading a unit, each time a melee attack targets that unit, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Eater Plague (Psychic)",
            "description": "In your Shooting phase, you can select one enemy unit within 18\" of and visible to this Psyker and roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2-5, that enemy unit suffers D6 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.",
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
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Typhus",
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
              "name": "Master-crafted manreaper – strike",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Master-crafted manreaper – sweep",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "10",
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
        "Chaos",
        "Nurgle",
        "Psyker",
        "Terminator",
        "Typhus"
      ],
      "factions": ["Death Guard"],
      "leads": {
        "units": [
          "Blightlord Terminators",
          "Deathshroud Terminators",
          "Poxwalkers"
        ],
        "extra": ""
      }
    }
  ],
  "colours": {
    "banner": "#2c290c",
    "header": "#4d560e"
  }
}
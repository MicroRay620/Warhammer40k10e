window.data = window.data || {};
window.data.CHSW = {
  "id": "CHSW",
  "link": "https://game-datacards.eu",
  "name": "Space Wolves",
  "is_subfaction": true,
  "parent_id": "SM",
  "parent_keyword": "Adeptus Astartes",
  "allied_factions": ["AoI", "QI"],
  "stratagems": [
    {
      "name": "ARMOUR OF CONTEMPT",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Champions of Russ",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "The belligerency of the Adeptus Astartes,\ncombined with their transhuman\nphysiology, makes them unyielding foes\nto face.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Adeptus Astartes unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack targets your unit, worsen\nthe Armour Penetration characteristic of\nthat attack by 1.",
      "restrictions": "",
      "id": "fb6abd3d-eef4-5e85-823a-4f49dd7e9140"
    },
    {
      "name": "GO FOR THE THROAT",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Champions of Russ",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "With the scent of blood in the air and the\nrushing joy of battle surging through\nevery true warrior’s hearts, even the\ngreatest quarry can be brought down.",
      "when": "Fight phase.",
      "target": "One Adeptus Astartes unit from\nyour army that has not been selected to\nfight this phase.",
      "effect": "Until the end of the phase,\nimprove the Armour Penetration\ncharacteristic of melee weapons\nequipped by models in your unit by 1.\nIf the Saga of the Beastslayer has been\ncompleted by your army, until the end\nof the phase, such weapons have the\n[LANCE] ability as well.",
      "restrictions": "",
      "id": "dbd216b4-0956-5b83-ba4f-12a010a5ffbe"
    },
    {
      "name": "RUNIC WARDS",
      "cost": 1,
      "type": "Wargear",
      "detachment": "Champions of Russ",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "Imbued as they are with the cunning\npsychic might of the Rune Priests,\nshamanistic totems, tattoos and fetishes\nare a potent shield against baleful attacks\nand the foul sorcery of witches.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Adeptus Astartes unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase,\nmodels in your unit have the Feel No\nPain 5+ ability against mortal wounds\nand Psychic Attacks. If the Saga of the\nBear has been completed by your army,\nuntil the end of the phase, models in\nyour unit have the Feel No Pain 4+ ability\nagainst mortal wounds and Psychic\nAttacks instead.",
      "restrictions": "",
      "id": "013c6f3f-c2f7-563f-a1cd-f1426b6177a0"
    },
    {
      "name": "DEATH HOWL",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Champions of Russ",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "Having stalked their prey or run them\nto ground, all that remains is to go for\nthe enemy’s weakest points, to rip them\napart in a furious bloodletting. Onlookers\nare stricken with terror at the bloody\nspectacle, an instant before the sons of\nRuss pounce upon them.",
      "when": "Fight phase.",
      "target": "One Adeptus Astartes unit from\nyour army that destroyed one or more\nenemy units this phase.",
      "effect": "Until the end of the phase,\neach time a model in your unit makes\na Consolidation move, it can move up\nto 6\" instead of up to 3\", provided your\nunit ends that Consolidation move in\nUnit Coherency and within Engagement\nRange of one or more enemy units. In\naddition, if the Saga of Majesty has been\ncompleted by your army, each enemy\nunit within 6\" of your unit when it ends\nthat Consolidation move must take a\nBattle-shock test",
      "restrictions": "",
      "id": "ec13b742-35c2-5d93-a971-cc7dddd48602"
    },
    {
      "name": "WARRIOR PRIDE",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Champions of Russ",
      "turn": "your",
      "phase": ["command"],
      "fluff": "The greatest champions amongst the\nsons of Russ must take the fight to the\nenemy, leading by example to uphold the\nhonour of their Chapter.",
      "when": "Your Command phase.",
      "target": "One Adeptus Astartes\nCharacter model from your army.",
      "effect": "Select one Saga that has not\nyet been completed by your army.\nUntil the end of the turn, models in your\nCharacter’s unit have the benefit of the\nselected Saga as if it had been completed\nby your army.",
      "restrictions": "",
      "id": "77c2b080-17d2-5872-ac7d-544690c54f44"
    },
    {
      "name": "RELENTLESS ASSAULT",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Champions of Russ",
      "turn": "your",
      "phase": ["movement"],
      "fluff": "Once their blades and claws run red with\nthe enemy’s blood, nothing will hold the\nsavage sons of Russ back from new prey.",
      "when": "Your Movement phase, just after\nan Adeptus Astartes unit from your army\nmakes a Fall Back or Advance move.",
      "target": "That Adeptus Astartes unit.",
      "effect": "Until the end of the turn, your unit\nis eligible to shoot even though it Fell Back\nor Advanced this phase. If the Saga of the\nWarrior Born has been completed by your\narmy, until the end of the turn, your unit is\nalso eligible to declare a charge. ",
      "restrictions": "",
      "id": "1cadb73a-bbd0-5a5d-9d76-c36644ac74a5"
    }
  ],
  "enhancements": [
    {
      "name": "BLACK DEATH",
      "description": "Adeptus Astartes model only. The bearer’s melee weapons have the [ANTI-MONSTER 4+] and [ANTI-VEHICLE 4+] abilities.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "FROST WEAPON",
      "description": "Adeptus Astartes model only. The bearer’s melee weapons have the [PRECISION] ability, and the Strength and Armour Penetration characteristics of those weapons are improved by 1.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "THE PELT OF BALEWOLF",
      "description": "Adeptus Astartes model only. At the start of the Fight phase, each enemy unit within Engagement Range of the bearer must take a Battle-shock test.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "10"
    },
    {
      "name": "WOLF TAIL TALISMAN",
      "description": "Adeptus Astartes model only. Each time an attack is allocated to the bearer, subtract 1 from the Damage characteristic of that attack.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "20"
    }
  ],
  "datasheets": [
    {
      "id": "cede527d-411f-53f3-b0cd-f0770b1937c6",
      "name": "Arjac Rockfist",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad ■ Wolf Guard Terminators You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Arjac Rockfist – Epic Hero"],
      "loadout": "This model is equipped with: Foehammer.",
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
            "name": "Anvil of Endurance",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Champion of the Kingsguard",
            "description": "You can target this model with the Epic Challenge Stratagem for 0CP. In addition, each time this model makes a melee attack that targets a Character unit, you can re-roll the Hit roll and you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Arjac Rockfist",
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
              "name": "Foehammer",
              "keywords": ["anti-monster 2+", "assault"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
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
              "name": "Foehammer",
              "keywords": ["anti-monster 2+"],
              "range": "Melee",
              "attacks": "5",
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
        "Imperium",
        "Terminator",
        "Arjac Rockfist"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": [
          "Relic Terminator Squad",
          "Terminator Assault Squad",
          "Terminator Squad",
          "Wolf Guard Terminators"
        ],
        "extra": "You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "e2e577e1-3362-5054-a7dc-ec4a4e81b140",
      "name": "Bjorn The Fell-handed",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Bjorn the Fell-Handed– Epic Hero"],
      "loadout": "This model is equipped with: assault cannon; heavy flamer; Trueclaw.",
      "wargear": [
        "This model’s assault cannon can be replaced with one of the following: ◦ heavy plasma cannon ◦ helfrost cannon ◦ multi-melta ◦ twin lascannon"
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
        "core": ["Deadly Demise 1", "Feel No Pain 5+"],
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
            "name": "Legendary Tenacity",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Ancient Tactician",
            "description": "Once per battle, after your opponent uses a Stratagem, this model can use this ability. If it does, until the end of the battle, increase that Stratagem’s cost to your opponent by 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Bjorn The Fell-handed",
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
              "name": "Assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Heavy plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Heavy plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "2+",
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
              "name": "Helfrost cannon – dispersed",
              "keywords": ["torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Helfrost cannon – focused",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "-3",
              "damage": "5"
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
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Trueclaw",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "12",
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
        "Epic Hero",
        "Smoke",
        "Imperium",
        "Dreadnought",
        "Bjorn the Fell-Handed"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"]
    },
    {
      "id": "509a8a8a-43d8-5db1-98f2-823ea51919e9",
      "name": "Blood Claws",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Blood Claw Pack Leader", "9-14 Blood Claws"],
      "loadout": "Every model is equipped with: bolt pistol; Astartes chainsword.",
      "wargear": [
        "The Blood Claw Pack Leader’s bolt pistol can be replaced with 1 plasma pistol.",
        "The Blood Claw Pack Leader’s Astartes chainsword can be replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon",
        "Up to 2 Blood Claws can each have their Astartes chainsword replaced with one of the following: ◦ 1 flamer and 1 close combat weapon ◦ 1 grav-gun and 1 close combat weapon ◦ 1 meltagun and 1 close combat weapon ◦ 1 plasma gun and 1 close combat weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "140",
          "active": true
        },
        {
          "models": "15",
          "cost": "210",
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
            "name": "Berserk Charge",
            "description": "Each time this unit makes a Charge move, until the end of the turn, add 1 to the Attacks and Strength characteristics of melee weapons equipped by models in this unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to an Assault Squad, it can instead be attached to this unit.",
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
          "oc": "2",
          "name": "Blood Claws",
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
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Grenades",
        "Imperium",
        "Blood Claws"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leadBy": [
        "Iron Priest",
        "Krom Dragongaze",
        "Lukas The Trickster",
        "Ragnar Blackmane",
        "Ulrik The Slayer",
        "Wolf Guard Pack Leader",
        "Wolf Guard Pack Leader In Terminator Armour"
      ]
    },
    {
      "id": "62a5ca87-1dfb-5da3-9dc1-f276b3ff9ed7",
      "name": "Canis Wolfborn",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Fenrisian Wolves ■ Thunderwolf Cavalry",
      "composition": ["1 Canis Wolfborn – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; crushing teeth and jaws; Wolf claws.",
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
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Born of Wolves",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Alpha Predator",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy units suffers D3+3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Canis Wolfborn",
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
              "name": "Crushing teeth and claws",
              "keywords": ["extra attacks"],
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
              "name": "Wolf claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Epic Hero",
        "Imperium",
        "Canis Wolfborn"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Fenrisian Wolves", "Thunderwolf Cavalry"],
        "extra": ""
      }
    },
    {
      "id": "e0803be6-0ad7-53cb-bcea-d4acbb965234",
      "name": "Cyberwolf",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Fenrisian Wolves You must attach this model to the above unit, even if Canis Wolfborn has been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed. WOLFKIN This model cannot be your Warlord and cannot be given Enhancements.",
      "composition": ["1 Cyberwolf"],
      "loadout": "This model is equipped with: teeth and claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "20",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Alpha Hunter",
            "description": "While this model is leading a unit, models in that unit have the Scouts 6\" ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Close In for the Kill",
            "description": "Each time this model makes an attack that targets an enemy unit that is Below Half-strength, add 1 to the Hit roll and add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "WOLFKIN",
            "description": "This model cannot be your Warlord and cannot be given Enhancements.",
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
          "sv": "6+",
          "w": "2",
          "ld": "7+",
          "oc": "0",
          "name": "Cyberwolf",
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
              "name": "Teeth and claws",
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
      "keywords": ["Beast", "Character", "Imperium", "Cyberwolf"],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Fenrisian Wolves"],
        "extra": "You must attach this model to the above unit, even if Canis Wolfborn has been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed. WOLFKIN This model cannot be your Warlord and cannot be given Enhancements."
      }
    },
    {
      "id": "813450b5-2d22-5134-8274-91854c51eac2",
      "name": "Fenrisian Wolves",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Fenrisian Wolves"],
      "loadout": "Every model is equipped with: teeth and claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "30",
          "active": true
        },
        {
          "models": "10",
          "cost": "60",
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
            "name": "Swift Hunters",
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
          "m": "10\"",
          "t": "4",
          "sv": "6+",
          "w": "1",
          "ld": "8+",
          "oc": "0",
          "name": "Fenrisian Wolves",
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
              "name": "Teeth and claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Beasts", "Imperium", "Fenrisian Wolves"],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leadBy": ["Canis Wolfborn", "Cyberwolf"]
    },
    {
      "id": "4b6c3e90-12a2-5555-8d6a-8823a984108f",
      "name": "Grey Hunters",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Grey Hunter Pack Leader", "4-9 Grey Hunters"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "Any number of models can each be equipped with 1 Astartes chainsword.",
        "The Grey Hunter Pack Leader’s close combat weapon can be replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon",
        "Up to 2 Grey Hunters can each have their boltgun replaced with one of the following: ◦ 1 flamer ◦ 1 grav-gun ◦ 1 meltagun ◦ 1 plasma gun",
        "1 Grey Hunter’s bolt pistol can be replaced with 1 plasma pistol."
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
            "name": "Cunning Hunters",
            "description": "This unit is eligible to shoot in a turn in which it Fell Back or Advanced.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to a Tactical Squad, it can instead be attached to this unit.",
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
          "oc": "2",
          "name": "Grey Hunters",
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
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Grenades",
        "Imperium",
        "Grey Hunters"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leadBy": [
        "Iron Priest",
        "Krom Dragongaze",
        "Ragnar Blackmane",
        "Ulrik The Slayer",
        "Wolf Guard Pack Leader",
        "Wolf Guard Pack Leader In Terminator Armour"
      ]
    },
    {
      "id": "42290b24-960f-55cf-88e9-ebe336bb751e",
      "name": "Harald Deathwolf",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Thunderwolf Cavalry",
      "composition": ["1 Harald Deathwolf – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; crushing teeth and claws; Glacius.",
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
            "name": "Lord of the Wolfkin",
            "description": "While this model is leading a unit, each time that unit makes a Charge move, until the end of the turn, crushing teeth and claws equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mantle of the Troll King",
            "description": "Once per phase, when resolving an attack made against this model, after you make a saving throw for this model, you can change the Damage characteristic of that attack to 0.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "Harald Deathwolf",
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
              "name": "Crushing teeth and claws",
              "keywords": ["extra attacks"],
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
              "name": "Glacius",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Epic Hero",
        "Grenades",
        "Imperium",
        "Captain",
        "Harald Deathwolf"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Thunderwolf Cavalry"],
        "extra": ""
      }
    },
    {
      "id": "ca957215-0bd1-5727-a499-009f5e253530",
      "name": "Hounds Of Morkai",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hound of Morkai Pack Leader", "4-9 Hound of Morkai"],
      "loadout": "Every model is equipped with: Morkai bolt pistol; Morkai combat knife.",
      "wargear": ["None"],
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
        "wargear": [],
        "core": ["Scouts 6\""],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "*  This invulnerable save is improved to 4+ against Psychic Attacks.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Morkai’s Howl",
            "description": "In your Shooting phase, you can select one enemy unit within 12\" of this unit (if a Lieutenant in Reiver Armour is leading this unit, you can select one enemy unit within 18\" instead). That unit must take a Battle-shock test, subtracting 1 from the result if it is a Psyker unit. If that test is failed, in addition to being Battle-shocked, that unit is Stunned until the start of your next Shooting phase. While a unit is Stunned, each time a model in that unit makes a Psychic Attack, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to a Reiver Squad, it can instead be attached to this unit.",
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
          "name": "Hounds Of Morkai",
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
              "name": "Morkai bolt pistol",
              "keywords": [
                "anti-psyker 4+",
                "devastating wounds",
                "pistol",
                "precision"
              ],
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
              "name": "Morkai combat knife",
              "keywords": ["anti-psyker 4+", "devastating wounds", "precision"],
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
        "Grenades",
        "Smoke",
        "Imperium",
        "Phobos",
        "Hounds of Morkai"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"]
    },
    {
      "id": "36402ee1-25bb-540f-8ebd-b42ec847a408",
      "name": "Iron Priest",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Astartes Servitors ■ Blood Claws ■ Grey Hunters ■ Long Fangs",
      "composition": ["1 Iron Priest"],
      "loadout": "This model is equipped with: helfrost pistol; servo-arm; tempest hammer.",
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
            "name": "Iron Priest",
            "description": "While this model is within 3\" of one or more friendly Adeptus Astartes Vehicle units, this model has the Lone Operative ability",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Blessing of the Omnissiah",
            "description": "In your Command phase, you can select one friendly Adeptus Astartes Vehicle model within 3\" of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Vengeance of the Omnissiah",
            "description": "If a friendly Adeptus Astartes Vehicle model is destroyed within 12\" of this model, until the end of the battle, this model’s tempest hammer has an Attacks characteristic of 6.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Iron Priest",
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
              "name": "Helfrost pistol – dispersed",
              "keywords": ["pistol", "torrent"],
              "range": "12\"",
              "attacks": "D3",
              "skill": "N/A",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Helfrost pistol – focused",
              "keywords": ["pistol"],
              "range": "12\"",
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
              "name": "Servo-arm",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
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
              "name": "Tempest hammer",
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
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Imperium",
        "Techmarine",
        "Iron Priest"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": [
          "Astartes Servitors",
          "Blood Claws",
          "Grey Hunters",
          "Long Fangs"
        ],
        "extra": ""
      }
    },
    {
      "id": "4a2c9852-e20a-5463-a43a-bca78aeb302a",
      "name": "Iron Priest On Thunderwolf",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Thunderwolf Cavalry",
      "composition": ["1 Iron Priest on Thunderwolf"],
      "loadout": "This model is equipped with: boltgun; crushing teeth and claws; Iron Priest hammer; servo-arm.",
      "wargear": [
        "This model’s boltgun can be replaced with one of the following: ◦ 1 bolt pistol ◦ 1 helfrost pistol"
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
            "name": "Iron Priest",
            "description": "While this model is within 3\" of one or more friendly Adeptus Astartes Vehicle units, this model has the Lone Operative ability",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Blessing of the Omnissiah",
            "description": "In your Command phase, you can select one friendly Adeptus Astartes Vehicle model within 3\" of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Vengeance of the Omnissiah",
            "description": "If a friendly Adeptus Astartes Vehicle model is destroyed within 12\" of this model, until the end of the battle, this model’s Iron Priest hammer has an Attacks characteristic of 6.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Iron Priest On Thunderwolf",
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
              "name": "Helfrost pistol – dispersed",
              "keywords": ["pistol", "torrent"],
              "range": "12\"",
              "attacks": "D3",
              "skill": "N/A",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Helfrost pistol – focused",
              "keywords": ["pistol"],
              "range": "12\"",
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
              "name": "Crushing teeth and claws",
              "keywords": ["extra attacks"],
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
              "name": "Iron Priest hammer",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Servo arm",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Imperium",
        "Iron Priest"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Thunderwolf Cavalry"],
        "extra": ""
      }
    },
    {
      "id": "454dc0e4-a704-57b8-98ea-d953925c4783",
      "name": "Krom Dragongaze",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blood Claws ■ Grey Hunters ■ Wolf Guard",
      "composition": ["1 Krom Dragongaze"],
      "loadout": "This model is equipped with: bolt pistol; Wyrmclaw.",
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
            "name": "Refuse to Accept Defeat",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Fierce Eye",
            "description": "In your Shooting phase, you can select one enemy Infantry unit within 12\" of and visible to this model. That enemy unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Krom Dragongaze",
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
              "name": "Wyrmclaw",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "7",
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
        "Grenades",
        "Imperium",
        "Captain",
        "Krom Dragongaze"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Blood Claws", "Grey Hunters", "Wolf Guard"],
        "extra": ""
      }
    },
    {
      "id": "75374f5c-5b30-5b87-b2e4-1f8c176b21e6",
      "name": "Logan Grimnar",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad ■ Wolf Guard Terminators",
      "composition": ["Logan Grimnar – Epic Hero"],
      "loadout": "This model is equipped with: storm bolter; the Axe Morkai.",
      "wargear": ["None"],
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
            "name": "High King of Fenris",
            "description": "Once per battle, in your Charge phase, this model can use this ability. If it does, until the end of the turn, you can re-roll Charge rolls made for Adeptus Astartes units from your army and, until the end of the turn, each time an Adeptus Astartes model from your army makes a melee attack, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Great Wolf",
            "description": "Each time this model destroys an enemy unit, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "LOGAN GRIMNAR",
            "description": "Your army cannot contain both Logan Grimnar and Logan Grimnar on Stormrider.",
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
          "t": "5",
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Logan Grimnar",
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
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "The Axe Morkai – one-handed",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "The Axe Morkai – two-handed",
              "keywords": [],
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
        "Imperium",
        "Terminator",
        "Chapter Master",
        "Logan Grimnar"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": [
          "Relic Terminator Squad",
          "Terminator Assault Squad",
          "Terminator Squad",
          "Wolf Guard Terminators"
        ],
        "extra": ""
      }
    },
    {
      "id": "c3c8ad0e-e9f1-55d4-88e1-da119f3ceab1",
      "name": "Logan Grimnar On Stormrider",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Thunderwolf Cavalry",
      "composition": ["1 Logan Grimnar on Stormrider – Epic Hero"],
      "loadout": "This model is equipped with: storm bolter; the Axe of Morkai; flurry of teeth and claws.",
      "wargear": ["None"],
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
        "core": ["Deadly Demise D3", "Leader"],
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
            "name": "High King of Fenris",
            "description": "Once per battle, in your Charge phase, this model can use this ability. If it does, until the end of the turn, you can re-roll Charge rolls made for Adeptus Astartes units from your army and, until the end of the turn, each time an Adeptus Astartes model from your army makes a melee attack, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Great Wolf",
            "description": "Each time this model destroys an enemy unit, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "LOGAN GRIMNAR",
            "description": "Your army cannot contain both Logan Grimnar and Logan Grimnar on Stormrider.",
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
          "t": "6",
          "sv": "2+",
          "w": "12",
          "ld": "6+",
          "oc": "4",
          "name": "Logan Grimnar On Stormrider",
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
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "The Axe Morkai – one-handed",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "The Axe Morkai – two-handed",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Flurry of teeth and claws",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Epic Hero",
        "Imperium",
        "Chapter Master",
        "Logan Grimnar on Stormrider"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Thunderwolf Cavalry"],
        "extra": ""
      }
    },
    {
      "id": "6abb2df6-2bbf-50f1-96ea-ef2a7d778af5",
      "name": "Long Fangs",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Long Fang Pack Leader", "4-5 Long Fangs"],
      "loadout": "Every model is equipped with: boltgun; bolt pistol; close combat weapon.",
      "wargear": [
        "Any number of Long Fangs can each have their boltgun replaced with one of the following: ◦ 1 grav-cannon ◦ 1 heavy bolter ◦ 1 heavy flamer* ◦ 1 lascannon ◦ 1 missile launcher ◦ 1 multi-melta ◦ 1 plasma cannon",
        "The Long Fang Pack Leader’s close combat weapon can be replaced with one of the following: ◦ 1 Astartes chainsword ◦ 1 power fist ◦ 1 power weapon",
        "The Long Fang Pack Leader’s boltgun can be replace with one of the following:* ◦ 1 flamer ◦ 1 grav-gun ◦ 1 meltagun ◦ 1 plasma gun ◦ 1 plasma pistol *  The profiles for these weapons can be found on the Space Wolves Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "150",
          "active": true
        },
        {
          "models": "6",
          "cost": "180",
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
            "name": "Fire Discipline",
            "description": "Each time this unit Remains Stationary, if it includes a Long Fang Pack Leader, you can select one enemy unit that is visible to that model. Until the end of the turn, each time a model in this unit makes a ranged attack that targets that enemy unit, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Armorium Cherub",
            "description": "Once per battle, after making a Hit roll for a model in this unit, you can change that roll to an unmodified 6. Designer’s Note: Place an Armorium Cherub token next to the unit, removing it once this ability has been used. Before selecting targets for this weapon, select one of its profiles to make attacks with.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to a Devastator Squad, it can instead be attached to this unit.",
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
          "name": "Long Fangs",
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
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Long Fangs"],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leadBy": [
        "Iron Priest",
        "Ulrik The Slayer",
        "Wolf Guard Pack Leader",
        "Wolf Guard Pack Leader In Terminator Armour"
      ]
    },
    {
      "id": "80c6ce93-1e44-5849-94d2-4d2ff9b8eca4",
      "name": "Lukas The Trickster",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Blood Claws",
      "composition": ["1 Lukas the Trickster – Epic Hero"],
      "loadout": "This model is equipped with: plasma pistol; Claw of the Jackalwolf.",
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
            "name": "Pelt of the Doppegangrel",
            "description": "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Last Laugh",
            "description": "If this model is destroyed by a melee attack, after the attacking unit has finished making its attacks, roll one D6: on a 4+, the attacking unit suffers D6 mortal wounds and is Battle-shocked.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "MASTER OF MISCHIEF",
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
          "m": "6\"",
          "t": "4",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Lukas The Trickster",
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
              "name": "Claw of the Jackalwolf",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
        "Epic Hero",
        "Grenades",
        "Imperium",
        "Lukas the Trickster"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Blood Claws"],
        "extra": ""
      }
    },
    {
      "id": "cbc3fcf5-ecb4-5134-a733-a67e904e4698",
      "name": "Murderfang",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["Murderfang – Epic Hero"],
      "loadout": "This model is equipped with: heavy flamer; storm bolter; the Murderclaws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "190",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
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
            "name": "Murder-maker",
            "description": "Each time an enemy unit targets this model, after that unit has finished making its attacks, this model can either shoot as if it were your Shooting phase or fight as if it were the Fight phase.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "FORCE OF UNTAMED DESTRUCTION",
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
          "m": "8\"",
          "t": "9",
          "sv": "2+",
          "w": "8",
          "ld": "6+",
          "oc": "0",
          "name": "Murderfang",
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
              "name": "The Murderclaws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "14",
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
        "Epic Hero",
        "Imperium",
        "Dreadnought",
        "Murderfang"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"]
    },
    {
      "id": "4e1ce088-51f7-5366-90d0-bc8ad197383f",
      "name": "Njal Stormcaller",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad ■ Wolf Guard Terminators",
      "composition": ["1 Njal Stormcaller – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Living Lightning; Staff of the Stormcaller.",
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
            "name": "Stormcaller (Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Stealth ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Runic Armour",
            "description": "Each time a Psychic Attack targets this model’s unit, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Njal Stormcaller",
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
              "name": "Living Lightning – witchfire",
              "keywords": ["psychic", "sustained hits 2"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Living Lightning – focused witchfire",
              "keywords": ["hazardous", "psychic", "sustained hits 2"],
              "range": "24\"",
              "attacks": "2D6",
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
              "name": "Staff of the Stormcaller",
              "keywords": ["psychic", "sustained hits 2"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
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
        "Imperium",
        "Terminator",
        "Njal Stormcaller"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": [
          "Relic Terminator Squad",
          "Terminator Assault Squad",
          "Terminator Squad",
          "Wolf Guard Terminators"
        ],
        "extra": ""
      }
    },
    {
      "id": "f7c221df-be2f-5050-9b4d-1af14f9d6716",
      "name": "Ragnar Blackmane",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Wolf Guard ■ Blood Claws ■ Grey Hunters ■ Assault Intercessor Squad ■ Bladeguard Veteran Squad ■ Intercessor Squad",
      "composition": ["1 Ragnar Blackmane – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Frostfang.",
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
            "name": "War Howl",
            "description": "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Advanced.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Battle-lust",
            "description": "Each time this model ends a Charge move, until the end of the turn, add 2 to the Attacks and Strength characteristics of this model’s Frostfang.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Ragnar Blackmane",
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
              "name": "Frostfang",
              "keywords": ["sustained hits 1"],
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
        "Imperium",
        "Grenades",
        "Tacticus",
        "Captain",
        "Ragnar Blackmane"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": [
          "Wolf Guard",
          "Blood Claws",
          "Grey Hunters",
          "Assault Intercessor Squad",
          "Bladeguard Veteran Squad",
          "Intercessor Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "1776e9fd-926e-503e-a319-438429ed5650",
      "name": "Skyclaws",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Skyclaw Pack Leader", "4-14 Skyclaws"],
      "loadout": "Every model is equipped with: bolt pistol; Astartes chainsword.",
      "wargear": [
        "The Skyclaw Pack Leader’s bolt pistol can be replaced with 1 plasma pistol.",
        "The Skyclaw Pack Leader’s Astartes chainsword can be replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon",
        "Up to 2 Skyclaws can each have their bolt pistol and Astartes chainsword replaced with one of the following: ◦ 1 plasma pistol and 1 Astartes chainsword ◦ 1 flamer and 1 close combat weapon ◦ 1 grav-gun and 1 close combat weapon ◦ 1 meltagun and 1 close combat weapon ◦ 1 plasma gun and 1 close combat weapon"
      ],
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
        },
        {
          "models": "15",
          "cost": "285",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
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
            "name": "Headstrong",
            "description": "You can re-roll Charge rolls made for this unit. Each time this unit makes a Charge move, until the end of the turn, each time a model in this unit makes a melee attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to an Assault Squad with Jump Packs, it can instead be attached to this unit.",
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
          "name": "Skyclaws",
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
        }
      ],
      "keywords": [
        "Infantry",
        "Jump Pack",
        "Fly",
        "Grenades",
        "Imperium",
        "Skyclaws"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leadBy": ["Wolf Guard Pack Leader With Jump Pack"]
    },
    {
      "id": "14ab1913-93d6-5ccf-a3fe-1b0482fcbce8",
      "name": "Space Wolves Armoury",
      "source": "40k-10e",
      "faction_id": "CHSW",
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "18\"",
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
      "id": "438ff307-e29d-508c-9f00-2d1f9cc3c397",
      "name": "Space Wolves Venerable Dreadnought",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Space Wolves Venerable Dreadnought"],
      "loadout": "This model is equipped with: assault cannon; storm bolter; Dreadnought combat weapon.",
      "wargear": [
        "This model’s assault cannon can be replaced with one of the following: ◦ 1 helfrost cannon ◦ 1 multi-melta ◦ 1 plasma cannon ◦ 1 twin lascannon",
        "This model’s Dreadnought combat weapon and storm bolter can be replaced with one of the following: ◦  1 missile launcher and 1 close combat weapon ◦  1 Dreadnought combat weapon and 1 heavy flamer",
        "This model’s assault cannon, storm bolter and Dreadnought combat weapon can be replaced with one of the following: ◦  1 Fenrisian great axe, 1 blizzard shield and 1 storm bolter ◦  1 Fenrisian great axe, 1 blizzard shield and 1 heavy flamer"
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
            "name": "Blizzard Shield",
            "description": "The bearer has a 4+ invulnerable save. Before selecting targets for this weapon, select one of its profiles to make attacks with.",
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
            "name": "Wisdom of the Ancients (Aura)",
            "description": "While a friendly Adeptus Astartes Infantry unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Space Wolves Venerable Dreadnought",
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
              "name": "Assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
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
              "name": "Helfrost cannon – dispersed",
              "keywords": ["torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Helfrost cannon – focused",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "5"
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
              "damage": "D6"
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
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
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
              "name": "Dreadnought combat weapon",
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
              "name": "Fenrisian great axe – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6+1"
            },
            {
              "active": true,
              "name": "Fenrisian great axe – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
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
        "Dreadnought",
        "Venerable Dreadnought"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"]
    },
    {
      "id": "26c24538-81e7-5e6c-91b8-07c238217f01",
      "name": "Stormfang Gunship",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Stormfang Gunship"],
      "loadout": "This model is equipped with: helfrost destructor; 2 skyhammer missile launchers; twin stormstrike missile launcher; armoured hull.",
      "wargear": [
        "This model’s 2 skyhammer missile launchers can be replaced with one of the following: ◦ 2 twin multi-meltas ◦ 2 twin heavy bolters",
        "This model’s twin stormstrike missile launcher can be replaced with 1 twin lascannon."
      ],
      "transport": "This model has a transport capacity of 6 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "300",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Hover"],
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
            "name": "Frozen Prey",
            "description": "In your Shooting phase, after this model has shot, if an enemy Monster or Vehicle unit was hit by one or more of those attacks made with this model’s helfrost destructor, until the end of your opponent’s next turn, that enemy unit is Frozen. While a unit is Frozen, subtract 2 from that unit’s Move characteristic, and subtract 2 from Advance and Charge rolls made for that unit.",
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
          "ld": "6+",
          "oc": "0",
          "name": "Stormfang Gunship",
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
              "name": "Helfrost destructor – dispersed",
              "keywords": ["sustained hits d3"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "11",
              "ap": "-3",
              "damage": "7"
            },
            {
              "active": true,
              "name": "Helfrost destructor – focused",
              "keywords": ["torrent"],
              "range": "12\"",
              "attacks": "D6+6",
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
              "name": "Skyhammer missile launcher",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin stormstrike missile launcher",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
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
        "Aircraft",
        "Fly",
        "Transport",
        "Stormfang Gunship"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"]
    },
    {
      "id": "549b2934-8504-547e-9459-9995f8ec7b66",
      "name": "Stormwolf",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Stormwolf"],
      "loadout": "This model is equipped with: 2 skyhammer missile launchers; twin helfrost cannon; twin lascannon; armoured hull.",
      "wargear": [
        "This model’s 2 skyhammer missile launchers can replaced with one of the following: ◦ 2 twin heavy bolters ◦ 2 twin multi-meltas"
      ],
      "transport": "This model has a transport capacity of 16 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "250",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Hover"],
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
          "ld": "6+",
          "oc": "0",
          "name": "Stormwolf",
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
              "name": "Skyhammer missile launcher",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Twin helfrost cannon – dispersed",
              "keywords": ["torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Twin helfrost cannon – focused",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "5"
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
      "keywords": ["Vehicle", "Aircraft", "Fly", "Transport", "Stormwolf"],
      "factions": ["Adeptus Astartes", "Space Wolves"]
    },
    {
      "id": "5d78ad6a-0eaa-5cb9-877f-76b039ebac0a",
      "name": "Thunderwolf Cavalry",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Thunderwolf Cavalry Pack Leader",
        "2-5 Thunderwolf Cavalry"
      ],
      "loadout": "Every model is equipped with: bolt pistol; crushing teeth and claws; heirloom weapon.",
      "wargear": [
        "Any number of models can each have their bolt pistol replaced with one of the following: ◦ 1 boltgun ◦ 1 plasma pistol ◦ 1 storm shield"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "100",
          "active": true
        },
        {
          "models": "6",
          "cost": "200",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Ferocious Charge",
            "description": "Each time this unit makes a Charge move, until the end of the turn, add 1 to the Damage characteristic of melee weapons equipped by models in this unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "Thunderwolf Cavalry",
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
              "name": "Crushing teeth and claws",
              "keywords": ["extra attacks"],
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
              "name": "Heirloom weapon",
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
      "keywords": ["Mounted", "Grenades", "Imperium", "Thunderwolf Cavalry"],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leadBy": [
        "Canis Wolfborn",
        "Harald Deathwolf",
        "Iron Priest On Thunderwolf",
        "Logan Grimnar On Stormrider",
        "Wolf Guard Battle Leader On Thunderwolf",
        "Wolf Lord On Thunderwolf"
      ]
    },
    {
      "id": "feaacc7a-49e1-5c08-a1a7-12508b7a9d2e",
      "name": "Ulrik The Slayer",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blood Claws ■ Grey Hunters ■ Long Fangs ■ Wolf Guard",
      "composition": ["1 Ulrik the Slayer – Epic Hero"],
      "loadout": "This model is equipped with: plasma pistol; artificer crozius.",
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
        "core": ["Feel No Pain 6+", "Leader"],
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
            "name": "Slayer’s Oath",
            "description": "While this model is leading a unit, at the start of the Fight phase, select one enemy unit within Engagement Range of this model’s unit. Until the end of the phase, each time a model in this model’s unit makes a melee attack that targets that enemy unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1. If that enemy unit is a Character, Vehicle or Monster unit, until the end of the phase, each time a model in this model’s unit makes a melee attack that targets that enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Wolf Helm of Russ (Aura)",
            "description": "While a friendly Adeptus Astartes unit is within 6\" of this model, models in that unit have a Leadership characteristic of 5+.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Ulrik The Slayer",
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
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Grenades",
        "Imperium",
        "Ulrik the Slayer"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Blood Claws", "Grey Hunters", "Long Fangs", "Wolf Guard"],
        "extra": ""
      }
    },
    {
      "id": "bd10ec7d-6877-5c3f-a760-cd6d113feb14",
      "name": "Wolf Guard",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wolf Guard Pack Leader", "4-9 Wolf Guard"],
      "loadout": "Every model is equipped with: bolt pistol; heirloom weapon.",
      "wargear": [
        "Any number of models can have their bolt pistol replaced with one of the following: ◦ 1 boltgun ◦ 1 combi-weapon ◦ 1 plasma pistol ◦ 1 storm bolter ◦ 1 storm shield"
      ],
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
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Chosen Companions",
            "description": "While a Character model is leading this unit, each time a model in this unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to a Vanguard Veteran Squad, it can instead be attached to this unit.",
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
          "ld": "5+",
          "oc": "1",
          "name": "Wolf Guard",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heirloom weapon",
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
      "keywords": ["Infantry", "Grenades", "Imperium", "Wolf Guard"],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leadBy": ["Krom Dragongaze", "Ragnar Blackmane", "Ulrik The Slayer"]
    },
    {
      "id": "6792404e-8e12-58cd-b3d0-50377d1f645a",
      "name": "Wolf Guard Battle Leader In Terminator Armour",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad ■ Wolf Guard Terminators You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Wolf Guard Battle Leader in Terminator Armour"],
      "loadout": "This model is equipped with: storm bolter; power weapon.",
      "wargear": [
        "This model’s power weapon can be replaced with one of the following: ◦ 1 chainfist ◦ 1 power fist ◦ 1 relic shield and 1 close combat weapon ◦ 1 thunder hammer",
        "This model’s storm bolter can be replaced with one of the following: ◦ 1 chainfist ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer ◦ 1 combi-weapon",
        "This model’s storm bolter and power weapon can be replaced with 1 twin lightning claws."
      ],
      "transport": "",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Relic Shield",
            "description": "The bearer has a Wounds characteristic of 6.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Tactical Precision",
            "description": "While this model is leading a unit, weapons equipped by models in that unit with have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Huskarl to the Jarl",
            "description": "While this model is attached to a unit that contains another Character model, all Character models in that unit have the Feel No Pain 4+ ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Wolf Guard Battle Leader In Terminator Armour",
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
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power fist",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
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
        "Imperium",
        "Terminator",
        "Wolf Guard Battle Leader in Terminator Armour"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": [
          "Relic Terminator Squad",
          "Terminator Assault Squad",
          "Terminator Squad",
          "Wolf Guard Terminators"
        ],
        "extra": "You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "29f04894-8fed-5ddf-9d6f-4d2f45ad4add",
      "name": "Wolf Guard Battle Leader On Thunderwolf",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Thunderwolf Cavalry You can attach this model to the above unit even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Wolf Guard Battle Leader on Thunderworlf"],
      "loadout": "This model is equipped with: bolt pistol; crushing teeth and claws; relic weapon.",
      "wargear": [
        "This model’s relic weapon can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 power fist ◦ 1 thunder hammer ◦ 1 storm shield and 1 close combat weapon",
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 combi-weapon ◦ 1 master-crafted boltgun ◦ 1 plasma pistol ◦ 1 storm bolter ◦ 1 power fist ◦ 1 relic weapon ◦ 1 thunder hammer",
        "This model’s bolt pistol and relic weapon can be replaced with 1 twin lightning claws."
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
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Aggressive Hunter",
            "description": "Once per battle, in your opponent’s Shooting phase, after an enemy unit has finished making its attacks, if this model’s unit was targeted by one or more of those attacks, this model’s unit can make a Normal move of up to D6\", but must end that move as close as possible to the closest enemy unit. When doing so, models in this model’s unit can be moved within Engagement Range of that enemy unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "ld": "6+",
          "oc": "2",
          "name": "Wolf Guard Battle Leader On Thunderwolf",
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
              "name": "Master-crafted boltgun",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
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
              "name": "Crushing teeth and claws",
              "keywords": ["extra attacks"],
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
              "name": "Power fist",
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
              "name": "Relic weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
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
        "Character",
        "Grenades",
        "Imperium",
        "Wolf Guard Battle Leader on Thunderwolf"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Thunderwolf Cavalry"],
        "extra": "You can attach this model to the above unit even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "06183523-025f-5f5c-95c6-dd748b948f91",
      "name": "Wolf Guard Pack Leader",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blood Claws ■ Grey Hunters ■ Long Fangs You must attach this model to one of the above units, and can do so even if one or more Character units have already been attached to that unit, but a unit can never include more than one Pack Leader model. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed.",
      "composition": ["1 Wolf Guard Pack Leader"],
      "loadout": "This model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "This model’s bolt pistol and boltgun can be replaced with two different weapons from the following list:* ◦ 1 bolt pistol ◦ 1 boltgun ◦ 1 combi-weapon ◦ 1 plasma pistol ◦ 1 storm bolter ◦ 1 Astartes chainsword ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer ◦ 1 storm shield",
        "This model’s bolt pistol and boltgun can be replaced with 1 twin lightning claws. *  This model can only be equipped with two ranged weapons if one of them is a Pistol (and it can only have one Pistol)."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "30",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Inspiring Leader",
            "description": "While this model is leading a unit, once per battle, when a Battle-shock test is taken for that unit, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Pack Leader",
            "description": "This model cannot be your Warlord and cannot be given Enhancements.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Wolf Guard Pack Leader",
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
        "Grenades",
        "Imperium",
        "Pack Leader",
        "Wolf Guard Pack Leader"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Blood Claws", "Grey Hunters", "Long Fangs"],
        "extra": "You must attach this model to one of the above units, and can do so even if one or more Character units have already been attached to that unit, but a unit can never include more than one Pack Leader model. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed."
      }
    },
    {
      "id": "50037b61-971a-5f93-b972-b0e03a140bc5",
      "name": "Wolf Guard Pack Leader In Terminator Armour",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blood Claws ■ Grey Hunters ■ Long Fangs You must attach this model to one of the above units, and can do so even if one or more Character units have already been attached to that unit, but a unit can never include more than one Pack Leader model. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed.",
      "composition": ["1 Wolf Guard Pack Leader in Terminator Armour"],
      "loadout": "This model is equipped with: storm bolter; power weapon.",
      "wargear": [
        "This model’s storm bolter and power weapon can be replaced with two different options from the following list:* ◦ 1 assault cannon ◦ 1 heavy flamer ◦ 1 cyclone missile launcher and 1 storm bolter ◦ 1 storm bolter ◦ 1 chainfist ◦ 1 power fist ◦ 1 thunder hammer ◦ 1 storm shield",
        "This model’s storm bolter and power weapon can be replaced with 1 twin lightning claws.",
        "This model’s storm bolter can be replaced with 1 combi-weapon. *  This model can only be equipped with two ranged weapons if one of them is a cyclone missile launcher and the other is either a storm bolter or a combi-weapon."
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
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a Wounds characteristic of 4.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Inspiring Leader",
            "description": "While this model is leading a unit, once per battle, when a Battle-shock test is taken for that unit, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Pack Leader",
            "description": "This model cannot be your Warlord and cannot be given Enhancements.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Wolf Guard Pack Leader In Terminator Armour",
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
              "name": "Assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "ignores cover"
              ],
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
              "name": "Cyclone missile launcher – frag",
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
              "name": "Cyclone missile launcher – krak",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
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
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
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
        "Imperium",
        "Terminator",
        "Pack Leader",
        "Wolf Guard Pack Leader in Terminator Armour"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Blood Claws", "Grey Hunters", "Long Fangs"],
        "extra": "You must attach this model to one of the above units, and can do so even if one or more Character units have already been attached to that unit, but a unit can never include more than one Pack Leader model. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed."
      }
    },
    {
      "id": "266d7533-7fb8-5cbd-93cb-3a1a70cbf888",
      "name": "Wolf Guard Pack Leader With Jump Pack",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Skyclaws You must attach this model to the above unit, and can do so even if one or more Character units have already been attached to that unit, but a unit can never include more than one Pack Leader model. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed.",
      "composition": ["1 Wolf Guard Pack Leader with Jump Pack"],
      "loadout": "This model is equipped with: bolt pistol; Astartes chainsword.",
      "wargear": [
        "This model’s bolt pistol and Astartes chainsword can be replaced with two different weapons from the following list:* ◦ 1 bolt pistol ◦ 1 combi-weapon ◦ 1 plasma pistol ◦ 1 storm bolter ◦ 1 Astartes chainsword ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer ◦ 1 storm shield",
        "This model’s bolt pistol and Astartes chainsword can be replaced with 1 twin lightning claws. *  This model can only be equipped with two ranged weapons if one of them is a Pistol (and it can only have one Pistol)."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "40",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Inspiring Leader",
            "description": "While this model is leading a unit, once per battle, when a Battle-shock test is taken for that unit, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Pack Leader",
            "description": "This model cannot be your Warlord and cannot be given Enhancements.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Wolf Guard Pack Leader With Jump Pack",
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
        "Jump Pack",
        "Fly",
        "Grenades",
        "Imperium",
        "Pack Leader",
        "Wolf Guard Pack Leader with Jump Pack"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Skyclaws"],
        "extra": "You must attach this model to the above unit, and can do so even if one or more Character units have already been attached to that unit, but a unit can never include more than one Pack Leader model. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. If it is not possible to attach this model to a unit, it does not take part in the battle and counts as having been destroyed."
      }
    },
    {
      "id": "b2efd0c3-1e96-53b3-af25-531fda7b309b",
      "name": "Wolf Guard Terminators",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Wolf Guard Terminator Pack Leader",
        "4-9 Wolf Guard Terminators"
      ],
      "loadout": "The Wolf Guard Terminator Pack Leader is equipped with: storm bolter; power weapon. Every Wolf Guard Terminator is equipped with: storm bolter; power fist.",
      "wargear": [
        "Any number of models can each have their power fist and storm bolter or power weapon and storm bolter replaced with two of the following: ◦ 1 storm bolter* ◦ 1 combi-weapon* ◦ 1 chainfist ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer ◦ 1 storm shield*",
        "For every 5 models in this unit, one Wolf Guard Terminator can replace its storm bolter with one of the following: ◦ 1 assault cannon ◦ 1 heavy flamer ◦ 1 storm bolter and 1 cyclone missile launcher (this model’s storm bolter cannot be replaced)",
        "Any number of models can each have their power fist and storm bolter or power weapon and storm bolter replaced with 1 twin lightning claws. * Each model cannot have duplicates of these pieces of wargear and cannot have both a storm bolter and a combi-weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "200",
          "active": true
        },
        {
          "models": "10",
          "cost": "400",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a Wounds characteristic of 4.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
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
            "name": "Wolf Guard",
            "description": "Each time a model in this unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill or Weapon Skill characteristic and/or to the Hit roll. In addition, each time a model in this unit makes an attack that targets the enemy unit you selected for the Oath of Moment ability this turn, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to a Terminator Squad, it can instead be attached to this unit.",
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
          "t": "5",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Wolf Guard Terminators",
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
              "name": "Assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Cyclone missile launcher – frag",
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
              "name": "Cyclone missile launcher – krak",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
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
        "Grenades",
        "Imperium",
        "Terminator",
        "Wolf Guard Terminators"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leadBy": [
        "Arjac Rockfist",
        "Logan Grimnar",
        "Njal Stormcaller",
        "Wolf Guard Battle Leader In Terminator Armour"
      ]
    },
    {
      "id": "615bab5f-78b2-5309-aa42-0aacd32f395d",
      "name": "Wolf Lord On Thunderwolf",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Thunderwolf Cavalry",
      "composition": ["1 Wolf Lord on Thunderwolf"],
      "loadout": "This model is equipped with: bolt pistol; crushing teeth and claws; relic weapon.",
      "wargear": [
        "This model’s relic weapon can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 power fist ◦ 1 thunder hammer ◦ 1 relic shield and 1 close combat weapon",
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 combi-weapon ◦ 1 master-crafted boltgun ◦ 1 plasma pistol ◦ 1 storm bolter ◦ 1 power fist ◦ 1 relic weapon ◦ 1 thunder hammer",
        "This model’s bolt pistol and relic weapon can be replaced with 1 twin lightning claws."
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
            "name": "Relic Shield",
            "description": "The bearer has a Wounds characteristic of 7.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "description": "Once per battle round, one unit from your army with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Speed of the Hunter",
            "description": "Add 1 to Advance and Charge rolls made for this model’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Wolf Lord On Thunderwolf",
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
              "name": "Master-crafted boltgun",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Crushing teeth and claws",
              "keywords": ["extra attacks"],
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
              "name": "Power fist",
              "keywords": [],
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
              "name": "Relic weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Imperium",
        "Captain",
        "Wolf Lord on Thunderwolf"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"],
      "leads": {
        "units": ["Thunderwolf Cavalry"],
        "extra": ""
      }
    },
    {
      "id": "c086546e-a615-5212-be4a-d91d1f6a1b70",
      "name": "Wolf Scouts",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wolf Scout Pack Leader", "4-9 Wolf Scouts"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "Any number of models can each have their boltgun replaced with one of the following: ◦ 1 Astartes shotgun  ◦ 1 combat knife",
        "1 Wolf Scout’s boltgun can be replaced with one of the following: ◦ 1 flamer* ◦ 1 grav-gun* ◦ 1 heavy bolter ◦ 1 meltagun* ◦ 1 missile launcher ◦ 1 plasma gun*",
        "1 Wolf Scout’s boltgun and bolt pistol can be  replaced with one of the following:  ◦ 1 bolt pistol and 1 power weapon ◦ 1 plasma pistol and 1 boltgun",
        "The Wolf Scout Pack Leader’s bolt pistol and boltgun can be replaced with with 1 twin lightning claws, or two different weapons from the following list:** ◦ 1 bolt pistol  ◦ 1 boltgun  ◦ 1 combi-weapon* ◦ 1 grav-pistol* ◦ 1 hand flamer* ◦ 1 inferno pistol* ◦ 1 plasma pistol ◦ 1 storm bolter* ◦ 1 Astartes chainsword ◦ 1 power fist  ◦ 1 power weapon  ◦ 1 thunder hammer  *  The profiles for these weapons can be found on the Space Wolves Armoury card. **  This model can only be equipped with two ranged weapons if one of them is a Pistol (and it can only have one Pistol)."
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
        "core": ["Infiltrators", "Scouts 6\""],
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
            "name": "Guerrilla Tactics",
            "description": "At the end of your opponent’s turn, if this unit is more than 6\" away from all enemy models, you can remove this unit from the battlefield and place it into Strategic Reserves. Before selecting targets for this weapon, select one of its profiles to make attacks with.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "oc": "1",
          "name": "Wolf Scouts",
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
              "name": "Combat knife",
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
        "Grenades",
        "Smoke",
        "Imperium",
        "Scout Squad",
        "Wolf Scouts"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"]
    },
    {
      "id": "6f5e1517-b22e-544e-bf10-b3b3a2d66daf",
      "name": "Wulfen",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wulfen Pack Leader", "4-9 Wulfen"],
      "loadout": "Every model is equipped with: Wulfen claws and melee weapons.",
      "wargear": [
        "Any number of models can each be equipped with 1 stormfrag auto-launcher.",
        "Any number of models can each have their Wulfen claws and melee weapons replaced with 1 Wulfen hammer and 1 storm shield."
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
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Death Frenzy",
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
          "m": "8\"",
          "t": "5",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "0",
          "name": "Wulfen",
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
              "name": "Stormfrag auto-launcher",
              "keywords": ["assault", "blast"],
              "range": "12\"",
              "attacks": "D6",
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
              "name": "Wulfen claws and melee weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Wulfen hammer",
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
      "keywords": ["Infantry", "Imperium", "Wulfen"],
      "factions": ["Adeptus Astartes", "Space Wolves"]
    },
    {
      "id": "91b61de1-b739-56ea-9a66-5c2c3d1bf286",
      "name": "Wulfen Dreadnought",
      "source": "40k-10e",
      "faction_id": "CHSW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wulfen Dreadnought"],
      "loadout": "This model is equipped with: storm bolter; Fenrisian great axe; great wolf claw.",
      "wargear": [
        "This model’s Fenrisian great axe or great wolf claw and storm bolter can be replaced with 1 blizzard shield and 1 storm bolter.",
        "Any number of this model’s storm bolters can each be replaced with 1 heavy flamer."
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
        "wargear": [
          {
            "name": "Blizzard Shield",
            "description": "The bearer has a 4+ invulnerable save.",
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
            "name": "Bestial Rage",
            "description": "Each time this model is selected to fight, you can select one enemy unit within Engagement Range of it and roll one D6, adding 2 to the result if this model made a Charge move this turn: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers D3+3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "oc": "0",
          "name": "Wulfen Dreadnought",
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
              "name": "Fenrisian great axe – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6+1"
            },
            {
              "active": true,
              "name": "Fenrisian great axe – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
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
              "name": "Great wolf claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "10",
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
        "Wulfen Dreadnought"
      ],
      "factions": ["Adeptus Astartes", "Space Wolves"]
    }
  ],
  "colours": {
    "banner": "#283743",
    "header": "#435d63"
  }
}
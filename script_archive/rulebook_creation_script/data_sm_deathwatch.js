window.data = window.data || {};
window.data.CHDW = {
  "id": "CHDW",
  "link": "https://game-datacards.eu",
  "name": "Death Watch",
  "is_subfaction": true,
  "parent_id": "SM",
  "parent_keyword": "Adeptus Astartes",
  "allied_factions": ["AoI", "QI"],
  "stratagems": [
    {
      "name": "ARMOUR OF CONTEMPT",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Black Spear Task Force",
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
      "name": "TELEPORTARIUM",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Black Spear Task Force",
      "turn": "opponents",
      "phase": ["fight"],
      "fluff": "\nSite-to-site battlefield teleportation is a\nrare capability indeed, used only by the\nDeathwatch in extreme situations.",
      "when": "End of your opponent’s\nFight phase.",
      "target": "Up to two Kill Team units\nfrom your army, or one other Adeptus\nAstartes Infantry unit from your army.",
      "effect": "Remove those units from the\nbattlefield. In the Reinforcements step of\nyour next Movement phase, set each of\nthose units up anywhere on the battlefield\nthat is more than 9\" horizontally away\nfrom all enemy models.",
      "restrictions": "You cannot select any\nunits that are within Engagement Range of\none or more enemy units.",
      "id": "aaac23ee-bcc0-55e7-8466-89e17334fa0f"
    },
    {
      "name": "ADAPTIVE TACTICS",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Black Spear Task Force",
      "turn": "your",
      "phase": ["command"],
      "fluff": "Only a truly versatile approach to warfare\nallows the tactical genius of the Deathwatch\nto best the myriad xenos foes they face.",
      "when": "Your Command phase.",
      "target": "Up to two Kill Team units\nfrom your army, or one other Adeptus\nAstartes unit your army.",
      "effect": "For each unit targeted, select the\nFuror Tactics, Malleus Tactics or Purgatus\nTactics. Until the start of your next\nCommand phase, that Mission Tactic is\nactive for that unit instead of any Mission\nTactic that is active for your army.",
      "restrictions": "",
      "id": "b8f94350-f9a9-5159-bbb9-01b688b330ac"
    },
    {
      "name": "HELLFIRE ROUNDS",
      "cost": 1,
      "type": "Wargear",
      "detachment": "Black Spear Task Force",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "Hellfire rounds douse their targets in\nvoracious acids that are utterly lethal to\norganic life.",
      "when": "Your Shooting phase.",
      "target": "Up to two Kill Team units from\nyour army that have not been selected to\nshoot this phase, or one other Adeptus\nAstartes unit from your army (excluding\nVehicles) that has not been selected to\nshoot this phase.",
      "effect": "Until the end of the phase, ranged\nweapons (excluding Devastating Wounds\nweapons) equipped by models in your\nunit have the [ANTI-INFANTRY 2+] and\n[ANTI-MONSTER 5+] abilities.\nRESTRICTIONS: You cannot select any\nunits that have already been targeted with\neither the Kraken Rounds or Dragonfire\nRounds Stratagems this phase.",
      "restrictions": "",
      "id": "ef86115e-1a7d-58ff-a9cd-71cdf4c5394c"
    },
    {
      "name": "KRAKEN ROUNDS",
      "cost": 1,
      "type": "Wargear",
      "detachment": "Black Spear Task Force",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "Kraken rounds utilise adamantine cores\nand improved propellants to penetrate the\nthickest hide.",
      "when": "Your Shooting phase.",
      "target": "Up to two Kill Team units from\nyour army that have not been selected to\nshoot this phase, or one other Adeptus\nAstartes unit from your army (excluding\nVehicles) that has not been selected to\nshoot this phase.",
      "effect": "Until the end of the phase,\nimprove the Armour Penetration\ncharacteristic of ranged weapons\nequipped by models in your unit by 1 and\nimprove the range characteristic of those\nweapons by 6\".",
      "restrictions": "You cannot select any\nunits that have already been targeted with\neither the Dragonfire Rounds or Hellfire\nRounds Stratagems this phase.",
      "id": "5b5a771f-d931-516f-a029-e120534c50ec"
    },
    {
      "name": "DRAGONFIRE ROUNDS",
      "cost": 1,
      "type": "Wargear",
      "detachment": "Black Spear Task Force",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "Dragonfire rounds are designed to explode\njust before contact, saturating foes in cover\nwith searing gas and flames.",
      "when": "Your Shooting phase.",
      "target": "Up to two Kill Team units from\nyour army that have not been selected to\nshoot this phase, or one other Adeptus\nAstartes unit from your army (excluding\nVehicles) that has not been selected to\nshoot this phase.",
      "effect": "Until the end of the phase,\nranged weapons equipped by models\nin your unit have the [ASSAULT] and\n[IGNORES COVER] abilities.",
      "restrictions": "You cannot select any\nunits that have already been targeted\nwith either the Kraken Rounds or Hellfire\nRounds Stratagems this phase.",
      "id": "87b0c1e3-580a-50cf-9248-447300c9c9b9"
    }
  ],
  "enhancements": [
    {
      "name": "Thief of Secrets",
      "description": "Adeptus Astartes model only. Improve the Strength, Damage, and Armour Penetration characteristics of the bearer’s melee weapons by 1. If an enemy model is destroyed as the result of a melee attack made by the bearer, at the end of that phase, until the end of the battle, improve the Strength, Damage, and Armour Penetration characteristics of the bearer’s melee weapons by 2 instead.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Osseus Key",
      "description": "Watch Master or Techmarine model only. At the start of your opponent’s Shooting phase, select one enemy Vehicle unit (excluding Titanic units) within 12\" of and visible to the bearer. That model must take a Leadership test. If that test is passed, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll; if that test is failed, that unit is not eligible to shoot this phase.",
      "keywords": ["Watch Master", "Techmarine"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "Beacon Angelis",
      "description": "Adeptus Astartes model only. Models in the bearer’s unit have the Deep Strike ability. In addition, you can target the bearer’s unit with the Rapid Ingress Stratagem for 0CP.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "The Tome of Ectoclades",
      "description": "Watch Master or Captain model only. Once per battle, after you have selected an enemy unit using the Oath of Moment ability in your Command phase, the bearer can use this Enhancement if they are on the battlefield. When they do, select a second enemy unit – until the start of your next Command phase, each time an Adeptus Astartes model from your army makes an attack that targets either of those enemy units, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      "keywords": ["Watch Master", "Captain"],
      "excludes": [],
      "cost": "40"
    }
  ],
  "datasheets": [
    {
      "id": "a6d0dca5-9c60-57c5-9977-cb5ce5b0ea78",
      "name": "Corvus Blackstar",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Corvus Blackstar"],
      "loadout": "This model is equipped with: 2 Blackstar rocket launchers; twin assault cannon; armoured hull.",
      "wargear": [
        "This model’s twin assault cannon can be replaced with 1 twin lascannon.",
        "This model’s 2 Blackstar rocket launchers can be replaced with 2 stormstrike missile launchers.",
        "This model can be equipped with 1 hurricane bolter.",
        "This model can be equipped with one of the following: ◦ 1 auspex array ◦ 1 infernum halo-launcher"
      ],
      "transport": "This model has a transport capacity of 12 Adeptus Astartes Infantry models or one Kill Team unit. Each Jump Pack, Gravis or Terminator model takes up the space of 2 models and each Mounted model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Auspex Array",
            "description": "Ranged weapons equipped by the bearer have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Infernum Halo-launcher",
            "description": "The bearer has the Smoke keyword.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D6", "Hover", "Stealth"],
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
            "name": "Blackstar Cluster Launcher",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 5+, that unit suffers 1 mortal wound.",
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
          "name": "Corvus Blackstar",
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
              "name": "Blackstar rocket launcher",
              "keywords": ["blast"],
              "range": "30\"",
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
              "name": "Hurricane bolter",
              "keywords": ["rapid fire 6", "twin-linked"],
              "range": "24\"",
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
              "name": "Stormstrike missile launcher",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
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
        "Transport",
        "Corvus Blackstar"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"]
    },
    {
      "id": "96138442-e791-5d7e-ab61-40f7f1dccb23",
      "name": "Deathwatch Armoury",
      "source": "40k-10e",
      "faction_id": "CHDW",
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
              "name": "Infernus heavy bolter – heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Infernus heavy bolter – heavy flamer",
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
              "name": "Long Vigil ranged weapon",
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
        }
      ],
      "meleeWeapons": [],
      "keywords": [],
      "factions": [""]
    },
    {
      "id": "4f308a36-978b-5a6e-af9f-88b23662e882",
      "name": "Deathwatch Terminator Squad",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Deathwatch Terminator Sergeant",
        "4-9 Deathwatch Terminators"
      ],
      "loadout": "Every model is equipped with: power fist; storm bolter.",
      "wargear": [
        "Up to 3 Deathwatch Terminators can each have their storm bolter replaced with one of the following: ◦ 1 assault cannon ◦ 1 heavy flamer ◦ 1 plasma cannon ◦  1 cyclone missile launcher and 1 storm bolter (this model’s storm bolter cannot be replaced)",
        "Any number of models can each have their power fist and storm bolter replaced with one of the following: ◦ 1 storm bolter and 1 power weapon ◦ 1 storm bolter and 1 chainfist ◦ 1 twin lightning claws ◦ 1 thunder hammer and 1 storm shield"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "210",
          "active": true
        },
        {
          "models": "10",
          "cost": "420",
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
            "name": "Terminatus Assault",
            "description": "Each time this unit ends a Charge move, each enemy unit within Engagement Range of this unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Teleport Homer",
            "description": "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" of that token and not within 9\" of any enemy models. That token is then removed.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character from your army with the Leader ability can be attached to a Terminator Squad, it can be attached to this unit instead.",
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
          "name": "Deathwatch Terminator Squad",
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
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
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
        "Imperium",
        "Terminator",
        "Deathwatch Terminator Squad"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"]
    },
    {
      "id": "c48b1394-4b28-5f92-95c4-b78096646206",
      "name": "Deathwatch Veterans",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Watch Sergeant", "4-9 Deathwatch Veterans"],
      "loadout": "Every model is equipped with: boltgun; Long Vigil melee weapon.",
      "wargear": [
        "Any number of models can each have their boltgun and Long Vigil melee weapon replaced with one of the following:  ◦  1 Long Vigil ranged weapon and 1 close combat weapon ◦  1 Astartes shield, 1 boltgun and 1 close combat weapon ◦  1 Astartes shield and 1 Long Vigil melee weapon",
        "For every 5 models in this unit, up to 2 models can each have their boltgun and Long Vigil melee weapon replaced with 1 Deathwatch  thunder hammer.",
        "For every 5 models in this unit, up to 2 models can each have their boltgun and Long Vigil melee weapon replaced with one of the following:  ◦ 1 frag cannon and 1 close combat weapon ◦  1 infernus heavy bolter and 1 close combat weapon ◦  1 missile launcher and 1 close combat weapon",
        "The Watch Sergeant’s Long Vigil melee weapon can be replaced with 1 xenophase blade.",
        "The Watch Sergeant’s boltgun can be replaced  with 1 Long Vigil ranged weapon."
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
            "name": "Astartes Shield",
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
            "name": "Death to the Alien",
            "description": "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack does not have the Imperium or Chaos keywords, you can re-roll the Hit roll instead.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character from your army with the Leader ability can be attached to a Vanguard Veteran Squad, it can be attached to this unit instead.",
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
          "name": "Deathwatch Veterans",
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
              "name": "Frag cannon",
              "keywords": ["blast", "heavy", "rapid fire d3"],
              "range": "18\"",
              "attacks": "D3",
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
              "name": "Infernus heavy bolter – heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Infernus heavy bolter – heavy flamer",
              "keywords": []
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Long Vigil ranged weapon",
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
              "name": "Deathwatch thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Long Vigil melee weapon",
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
              "name": "Xenophase blade",
              "keywords": ["devastating wounds"],
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
        "Battleline",
        "Kill Team",
        "Grenades",
        "Imperium",
        "Deathwatch Veterans"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"],
      "leadBy": ["Watch Captain Artemis", "Watch Master"]
    },
    {
      "id": "6d6d7954-6b4c-5b5e-ab5f-b972bf64503e",
      "name": "Fortis Kill Team",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "5-10 Kill Team Intercessors",
        "0-4 Kill Team Intercessors with plasma incinerators",
        "0-4 Kill Team Intercessors with heavy bolt pistols",
        "0-2 Kill Team Outriders"
      ],
      "loadout": "Every Kill Team Intercessor is equipped with: bolt pistol; bolt rifle; close combat weapon. Every Kill Team Intercessor with plasma incinerator is equipped with: bolt pistol; plasma incinerator; close combat weapon. Every Kill Team Intercessor with heavy bolt pistol is equipped with: heavy bolt pistol; Astartes chainsword. Every Kill Team Outrider is equipped with: bolt pistol; twin bolt rifle; Astartes chainsword.",
      "wargear": [
        "1 Kill Team Intercessor’s bolt rifle can be replaced with one of the following: ◦ 1 hand flamer ◦ 1 plasma pistol ◦ 1 Astartes chainsword ◦ 1 Long Vigil melee weapon",
        "1 model equipped with a bolt rifle can replace its  close combat weapon with one of the following: ◦ 1 Astartes chainsword ◦ 1 Long Vigil melee weapon",
        "For every 5 models in this unit, 1 model’s bolt rifle can be replaced with 1 Long Vigil ranged weapon.",
        "Any number of Kill Team Intercessors with plasma incinerators can each have their bolt pistol replaced with 1 plasma pistol.* *  The profile for this weapon can be found on the Deathwatch Armoury card."
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
        "wargear": [],
        "core": [],
        "faction": ["Kill Team", "Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fortis Doctrines",
            "description": "Each time a model in this unit makes an attack that targets a unit that is Below Half-strength, add 1 to the Hit roll.",
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
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "INTERCESSOR",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "12\"",
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "OUTRIDER",
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
              "name": "Long Vigil ranged weapon",
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
              "name": "Plasma incinerator – standard",
              "keywords": ["assault", "heavy"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma incinerator – supercharge",
              "keywords": ["assault", "hazardous", "heavy"],
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
              "name": "Twin bolt rifle",
              "keywords": ["twin-linked"],
              "range": "24\"",
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
              "name": "Astartes chainsword",
              "keywords": [],
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
              "name": "Long Vigil melee weapon",
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
        "Kill Team",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Fortis Kill Team"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"]
    },
    {
      "id": "dbdca121-6845-5c9d-9f5f-87bf34e025aa",
      "name": "Indomitor Kill Team",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "5-10 Kill Team Heavy Intercessors",
        "0-2 Kill Team Heavy Intercessors with power fists",
        "0-2 Kill Team Heavy Intercessors with melta rifles",
        "0-2 Kill Team Heavy Intercessors with jump packs"
      ],
      "loadout": "Every Kill Team Heavy Intercessor is equipped with: bolt pistol*; heavy bolt rifle; close combat weapon. Every Kill Team Heavy Intercessor with power fists is equipped with: flamestorm gauntlets; power fists.",
      "wargear": [
        "For every 5 models in this unit, 1 model equipped with a heavy bolt rifle can have its heavy bolt rifle replaced with 1 heavy bolter.",
        "1 model equipped with a melta rifle can have its melta rifle replaced with 1 multi-melta.",
        "Any number of models equipped with flamestorm gauntlets can each have their flamestorm gauntlets replaced with 1 auto boltstorm gauntlets and 1 fragstorm grenade launcher.",
        "Any number of models equipped with assault bolters can each have their assault bolters replaced with 1 plasma exterminators."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "135",
          "active": true
        },
        {
          "models": "10",
          "cost": "270",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Jump Pack",
            "description": "The bearer has a Move characteristic of 10\" and can move over models and terrain features as if they were not there. Before selecting targets for this weapon, select one of its profiles to make attacks with.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Kill Team", "Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Indomitor Doctrines",
            "description": "Each time a model in this unit makes an attack, add 1 to the Hit roll if this unit is below its Starting Strength, and add 1 to the Wound roll as well if this unit is Below Half-strength.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "ld": "6+",
          "oc": "1",
          "name": "Indomitor Kill Team",
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
              "name": "Assault bolters",
              "keywords": [
                "assault",
                "pistol",
                "sustained hits 2",
                "twin-linked"
              ],
              "range": "18\"",
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
              "name": "Auto boltstorm gauntlets",
              "keywords": ["twin-linked"],
              "range": "18\"",
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
              "name": "Heavy bolt rifle",
              "keywords": ["assault", "heavy"],
              "range": "30\"",
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
              "name": "Heavy bolter",
              "keywords": ["assault", "heavy", "sustained hits 1"],
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
              "name": "Flamestorm gauntlets",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6+1",
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
              "name": "Melta rifle",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
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
              "name": "Plasma exterminators – standard",
              "keywords": ["assault", "pistol", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Plasma exterminators – supercharge",
              "keywords": ["assault", "hazardous", "pistol", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Power fists",
              "keywords": ["twin-linked"],
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
        "Kill Team",
        "Grenades",
        "Imperium",
        "Gravis",
        "Indomitor Kill Team"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"]
    },
    {
      "id": "cf4bb8fe-5a47-5f28-9a32-bd4896c708ac",
      "name": "Kill Team Cassius",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Chaplain Cassius – Epic Hero",
        "8 Kill Team Veterans: ◦ Vael Donatus ◦ Zameon Gydrael ◦ Rodricus Grytt ◦ Antor Delassio ◦ Edryc Setorax ◦ Jensus Natorian ◦ Drenn Redblade ◦ Ennox Sorrlock",
        "1 Kill Team Terminator (Garran Branatar)",
        "1 Kill Team Biker (Jetek Suberei)"
      ],
      "loadout": "",
      "wargear": [
        "Chaplain Cassius is equipped with: artificer crozius; bolt pistol.",
        "Vael Donatus is equipped with: boltgun; bolt pistol; close combat weapon.",
        "Zameon Gydrael is equipped with: Long Vigil ranged weapon; Long Vigil melee weapon.",
        "Rodricus Grytt is equipped with: frag cannon; bolt pistol; close combat weapon.",
        "Antor Delassio is equipped with: Long Vigil ranged weapon; Long Vigil melee weapon, jump pack.",
        "Edryc Setorax is equipped with: twin lightning claws, jump pack.",
        "Jensus Natorian is equipped with: psychic Cleanse; bolt pistol; force weapon; psychic hood.",
        "Drenn Redblade is equipped with: Long Vigil melee weapon; boltgun.",
        "Garran Branatar is equipped with: heavy flamer; Long Vigil ranged weapon; power fist.",
        "Ennox Sorrlock is equipped with: Long Vigil ranged weapon; close combat weapon.",
        "Jetek Suberei is equipped with: Deathwatch twin boltgun; Long Vigil melee weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "11",
          "cost": "255",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Jump Pack",
            "description": "The bearer has a Move characteristic of 12\" and can move over models and terrain as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Psychic Hood",
            "description": "Models in the bearer’s unit have the Feel No Pain 4+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Oath of Moment", "Kill Team"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "* Chaplain Cassius and Kill Team Terminator only.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Catechism of Death",
            "description": "While this unit contains Chaplain Cassius, melee weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Unflinching",
            "description": "Each time this unit takes a Battle-shock or Leadership test, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "CASSIUS",
            "description": "Your army cannot contain both Chaplain Cassius and Kill Team Cassius.",
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
          "ld": "5+",
          "oc": "2",
          "name": "CHAPLAIN CASSIUS",
          "active": true,
          "showName": true
        },
        {
          "m": "5\"",
          "t": "5",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "KILL TEAM TERMINATOR",
          "active": true,
          "showName": true
        },
        {
          "m": "6\"",
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "KILL TEAM VETERAN",
          "active": true,
          "showName": true
        },
        {
          "m": "12\"",
          "t": "5",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "KILL TEAM BIKER",
          "active": true,
          "showName": true
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
              "name": "Deathwatch twin boltgun",
              "keywords": [],
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
              "name": "Frag cannon",
              "keywords": ["blast", "heavy", "rapid fire d3"],
              "range": "18\"",
              "attacks": "D3",
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
              "name": "Long Vigil ranged weapon",
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
              "name": "Psychic Cleanse",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
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
              "name": "Artificer crozius",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Close combat weapon",
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-3",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Long Vigil melee weapon",
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
        "ALL MODELS:",
        "Infantry",
        "Kill Team",
        "Grenades",
        "Imperium",
        "Kill Team Cassius",
        "CHAPLAIN CASSIUS:",
        "Character",
        "Epic Hero"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"]
    },
    {
      "id": "3020380b-4b64-5445-8f1b-f2cdce3f76d5",
      "name": "Proteus Kill Team",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "5-10 Kill Team Veterans",
        "0-4 Kill Team Veterans with Jump Packs",
        "0-2 Kill Team Bikers",
        "0-4 Kill Team Terminators"
      ],
      "loadout": "Every Kill Team Veteran is equipped with: boltgun; Long Vigil melee weapon; close combat weapon. Every Kill Team Veteran with Jump Pack is equipped with: Long Vigil melee weapon; close combat weapon; jump pack. Every Kill Team Biker is equipped with: twin boltgun; close combat weapon. Every Kill Team Terminator is equipped with: storm bolter; power fist.",
      "wargear": [
        "Any number of Kill Team Veterans can replace their boltgun and Long Vigil melee weapon with: ◦  1 Long Vigil ranged weapon* ◦ 1 boltgun and 1 Astartes shield ◦  1 Long Vigil melee weapon and 1 Astartes shield",
        "For every 5 models in this unit, up to 2 models  can replace their boltgun and Long Vigil melee weapon with 1 Deathwatch thunder hammer.",
        "For every 5 models in the unit, up to 2 models  can replace their boltgun and Long Vigil melee weapon with one of the following: ◦ 1 frag cannon ◦  1 Infernus heavy bolter*",
        "Any number of Kill Team Biker models can be  equipped with one of the following:  ◦ 1 bolt pistol  ◦ 1 Long Vigil melee weapon",
        "Up to 3 models can each have their storm bolter replaced with one of the following: ◦ 1 assault cannon* ◦ 1 heavy flamer* ◦ 1 plasma cannon* ◦  1 cyclone missile launcher* and 1 storm bolter (this model’s storm bolter cannot be replaced)",
        "Any number of Kill Team Terminator models can replace their power fist and storm bolter with  one of the following:  ◦ 1 storm bolter and 1 power weapon ◦ 1 storm bolter and 1 chainfist ◦ 1 twin lightning claws ◦  1 Terminator thunder hammer and 1 storm  shield  *  The profile for this weapon can be found on the Deathwatch  Armoury card."
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
        "wargear": [
          {
            "name": "Astartes Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Jump Pack",
            "description": "The bearer has a Move characteristic of 12\" and can move over models and terrain features as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Storm Shield",
            "description": "The bearer has a Wounds characteristic of 4.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Kill Team", "Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "* Kill Team Terminator models only.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Proteus Doctrines",
            "description": "Each time a model in this unit makes an attack that targets a unit that is not Below Half-strength, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character from your army with the Leader ability can be attached to a Vanguard Veterans Squad, it can be attached to this unit instead.",
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
          "name": "KILL TEAM VETERANS",
          "active": true,
          "showName": true
        },
        {
          "m": "12\"",
          "t": "5",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "KILL TEAM BIKER",
          "active": true,
          "showName": true
        },
        {
          "m": "5\"",
          "t": "5",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "KILL TEAM TERMINATOR",
          "active": true,
          "showName": true
        }
      ],
      "rangedWeapons": [
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
              "name": "Frag cannon",
              "keywords": ["blast", "heavy", "rapid fire d3"],
              "range": "18\"",
              "attacks": "D3",
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
              "name": "Deathwatch thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Long Vigil melee weapon",
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
              "name": "Terminator thunder hammer",
              "keywords": ["devastating wounds"],
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
        "Kill Team",
        "Grenades",
        "Imperium",
        "Proteus Kill Team"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"],
      "leadBy": ["Watch Captain Artemis", "Watch Master"]
    },
    {
      "id": "55e4e25e-f3a5-5d16-919f-b82aa3e7a00f",
      "name": "Spectrus Kill Team",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "5-10 Kill Team Infiltrators",
        "0-2 Kill Team Infiltrators with bolt sniper rifles",
        "0-2 Kill Team Infiltrators with jump packs",
        "0-4 Kill Team Infiltrators with occulus bolt carbines",
        "0-4 Kill Team Infiltrators with combat knives"
      ],
      "loadout": "Every Kill Team Infiltrator is equipped with: bolt pistol; marksman bolt carbine; close combat weapon. Every Kill Team Infiltrator with bolt sniper rifle is equipped",
      "wargear": [
        "One model equipped with a marksman bolt carbine can be equipped with one of the following: ◦ 1 helix gauntlet ◦ 1 Infiltrator comms array",
        "One model can replace its bolt sniper rifle with 1 bolt carbine.",
        "Any number of models can each replace their bolt sniper rifle with 1 las fusil.",
        "Any number of models can each replace their combat knife with 1 bolt carbine and 1 close combat weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "110",
          "active": true
        },
        {
          "models": "10",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Helix Gauntlet",
            "description": "Models in the bearer’s unit have the Feel No Pain 6+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Infiltrator Comms Array",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Jump Pack",
            "description": "The bearer has a Move characteristic of 12\" and can move over models and terrain features as if they were not there.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Infiltrators", "Scouts 6\""],
        "faction": ["Kill Team", "Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Spectrus Doctrines",
            "description": "At the end of your opponent’s turn, if this unit is more than 6\" away from all enemy units, you can remove this unit from the battlefield and place it into Strategic Reserves. It will arrive back on the battlefield in the Reinforcements step of your next Movement phase.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Spectrus Kill Team",
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
              "name": "Accelerator autocannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "3",
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
              "name": "Bolt carbine",
              "keywords": ["precision"],
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
              "name": "Bolt sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "5",
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
              "name": "Las fusil",
              "keywords": ["heavy"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
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
              "name": "Marksman bolt carbine",
              "keywords": ["heavy"],
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
              "name": "Occulus bolt carbine",
              "keywords": ["assault", "ignores cover"],
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
              "name": "Special-issue bolt pistol",
              "keywords": ["pistol", "precision"],
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
              "name": "Combat knife",
              "keywords": ["precision"],
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
              "name": "Paired combat blades",
              "keywords": ["sustained hits 1"],
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
        "Kill Team",
        "Smoke",
        "Grenades",
        "Imperium",
        "Phobos",
        "Spectrus Kill Team"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"]
    },
    {
      "id": "3da0ea31-b8fb-5753-8780-0630cb41cce8",
      "name": "Veteran Bike Squad",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Veteran Biker Sergeant", "2-5 Veteran Bikers"],
      "loadout": "Every model is equipped with: bolt pistol; close combat weapon; twin boltgun.",
      "wargear": [
        "The Veteran Biker Sergeant can be equipped with one of the following: ◦ 1 Long Vigil ranged weapon ◦ 1 Long Vigil melee weapon ◦ 1 xenophase blade ◦ 1 Astartes shield",
        "Any number of Veteran Biker models can each be equipped with 1 Long Vigil melee weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "85",
          "active": true
        },
        {
          "models": "6",
          "cost": "170",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Astartes Shield",
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
            "name": "Turbo-boost",
            "description": "Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character from your army with the Leader ability can be attached to a Outrider Squad, it can be attached to this unit instead.",
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
          "t": "5",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Veteran Bike Squad",
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
              "name": "Long Vigil ranged weapon",
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
              "name": "Long Vigil melee weapon",
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
              "name": "Xenophase blade",
              "keywords": ["devastating wounds"],
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
      "keywords": ["Mounted", "Grenades", "Imperium", "Veteran Bike Squad"],
      "factions": ["Adeptus Astartes", "Deathwatch"]
    },
    {
      "id": "8939a3d9-e5c9-5552-96e6-689e5885c77b",
      "name": "Watch Captain Artemis",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Deathwatch Veterans ■ Proteus Kill Team",
      "composition": ["1 Watch Captain Artemis"],
      "loadout": "This model is equipped with: Hellfire Extremis; master-crafted power weapon.",
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
            "name": "Tactical Instinct",
            "description": "While this model is leading a unit, you can target that unit with a Stratagem even if that Stratagem has already been used on another unit from your army this phase. In addition, that unit can be targeted with a Stratagem even while it is Battle-shocked.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Unstoppable Champion",
            "description": "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 1 wound remaining.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Watch Captain Artemis",
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
              "name": "Hellfire Extremis",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "ignores cover",
                "torrent"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
        "Epic Hero",
        "Grenades",
        "Imperium",
        "Captain",
        "Watch Captain Artemis"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"],
      "leads": {
        "units": ["Deathwatch Veterans", "Proteus Kill Team"],
        "extra": ""
      }
    },
    {
      "id": "10af0717-f94a-5ae6-90f3-427da01cbe73",
      "name": "Watch Master",
      "source": "40k-10e",
      "faction_id": "CHDW",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Deathwatch Veterans ■ Proteus Kill Team",
      "composition": ["1 Watch Master"],
      "loadout": "This model is equipped with: vigil spear.",
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
            "name": "Strategic Knowledge",
            "description": "While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Watch Master",
            "description": "Once per battle, after your opponent uses a Stratagem, if this model is your Warlord and is on the battlefield, it can use this ability. If it does, until the end of the battle, increase the cost of that Stratagem to your opponent by 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
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
          "name": "Watch Master",
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
              "name": "Vigil spear",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Vigil spear",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Imperium",
        "Captain",
        "Watch Master"
      ],
      "factions": ["Adeptus Astartes", "Deathwatch"],
      "leads": {
        "units": ["Deathwatch Veterans", "Proteus Kill Team"],
        "extra": ""
      }
    }
  ],
  "colours": {
    "banner": "#232425",
    "header": "#3d3e41"
  }
}
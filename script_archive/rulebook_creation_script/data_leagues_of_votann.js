window.data = window.data || {};
window.data.LoV = {
  "id": "LoV",
  "link": "https://game-datacards.eu",
  "name": "Votann",
  "is_subfaction": false,
  "parent_id": "",
  "stratagems": [
    {
      "name": "WARRIOR PRIDE",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Oathband",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "The warriors of the Leagues of Votann\npride themselves on their martial skill\nand proficiency in combat, and when the\nAncestors are watching their actions they\ncan quickly overwhelm and pick apart\ntheir foes.",
      "when": "Fight phase.",
      "target": "One Leagues of Votann unit\nfrom your army, and one enemy unit\nthat has one or more Judgement tokens\nand is within Engagement Range of that\nLeagues of Votann unit.",
      "effect": "Until the end of the phase,\neach time a model in your unit makes\na melee attack that targets that enemy\nunit, improve the Armour Penetration\ncharacteristic of that attack by 1 for each\nJudgement token that enemy unit has.",
      "restrictions": "",
      "id": "77c2b080-17d2-5872-ac7d-544690c54f44"
    },
    {
      "name": "ORDERED RETREAT",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Oathband",
      "turn": "your",
      "phase": ["movement"],
      "fluff": "Not for the Kin the sudden panic of the\nrout. Instead, they fall back steadily\nand by squads, laying down furious\nsuppressing fire before launching\nfresh assaults.",
      "when": "Your Movement phase, just after a\nLeagues of Votann unit from your army\nFalls Back.",
      "target": "That Leagues of Votann unit.",
      "effect": "Until the end of the turn, your unit\nis eligible to shoot and declare a charge.",
      "restrictions": "",
      "id": "eb943acc-1f48-5f12-b50c-3202db5c0e9b"
    },
    {
      "name": "ANCESTRAL SENTENCE",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Oathband",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "Some foes are so loathed that the\nAncestors themselves are said to pass\nsentence upon them, marking them\nfor death.",
      "when": "Your Shooting phase.",
      "target": "One Leagues of Votann unit\nfrom your army.",
      "effect": "Until the end of the phase,\neach time a model in your unit makes\na ranged attack, that attack has the\n[SUSTAINED HITS 1] ability, and each time\na model in your unit makes a ranged\nattack that targets a unit that has one or\nmore Judgement tokens, that attack has\nthe [SUSTAINED HITS 2] ability instead.",
      "restrictions": "",
      "id": "22278abc-c945-5ba7-ab68-0328d4e3d446"
    },
    {
      "name": "REACTIVE REPRISAL",
      "cost": 2,
      "type": "Battle Tactic",
      "detachment": "Oathband",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "Once an enemy target has been marked out\nby the Eye of the Ancestors, the Kin focus their\nefforts upon its destruction, redoubling their\nfury should it attempt to engage.",
      "when": "Your opponent’s Shooting phase, just\nafter an enemy unit that has one or more\nJudgement tokens has resolved its attacks.",
      "target": "One Leagues of Votann unit from\nyour army that was selected as the target of\none or more of the attacking unit’s attacks.",
      "effect": "Your Leagues of Votann unit can\nshoot as if it were your Shooting phase, but it\nmust target the enemy unit that just attacked\nit, and can only do so if that enemy unit is an\neligible target.",
      "restrictions": "",
      "id": "5b800ce8-278c-58c9-afa2-4ed8b01e1c29"
    },
    {
      "name": "NEWFOUND NEMESIS",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Oathband",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "To strike down Kin is to earn the\nimmediate and murderous ire of all their\nwarrior comrades.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas resolved its attacks.",
      "target": "One Leagues of Votann\nInfantry or Leagues of Votann\nMounted unit from your army that was\nreduced to Below Half-strength as a result\nof the attacking unit’s attacks.",
      "effect": "The attacking unit gains 1\nJudgement token, or up to 2 Judgement\ntokens instead if that Leagues of Votann\nunit contained your Warlord when it was\ntargeted by those attacks.",
      "restrictions": "",
      "id": "ac1c1623-0340-5fc1-8828-692be82810d2"
    },
    {
      "name": "VOID ARMOUR",
      "cost": 1,
      "type": "Wargear",
      "detachment": "Oathband",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "Void armour comprises hardened,\njointed segments hooked into the\nvoid suit beneath. It is fashioned from\nmagnaferrite weave, and often reinforced\nwith adamantine and enhanced with\nmicrofield generators.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Leagues of Votann unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack targets your Leagues\nof Votann unit, worsen the Armour\nPenteration characteristic of that attack\nby 1.",
      "restrictions": "",
      "id": "23c70bfc-67cd-5f7d-9a92-916bc9dccf3a"
    }
  ],
  "enhancements": [
    {
      "name": "APPRAISING GLARE",
      "description": "Leagues of Votann model only. In your Command phase, you can select one objective marker your opponent controls. Until the end of the phase, while an enemy unit is within range of that objective marker, it counts as having one more Judgement token than it actually has (to a maximum of 2).",
      "keywords": ["Leagues of Votann"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "A LONG LIST",
      "description": "Leagues of Votann model only. Each time the bearer’s unit destroys an enemy unit, if that enemy unit has one or more Judgement tokens, you can select one other enemy unit that is visible to the bearer. That other unit gains one Judgement token.",
      "keywords": ["Leagues of Votann"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "GRIM DEMEANOUR",
      "description": "Leagues of Votann model only. You can re-roll Battle-shock tests taken for the bearer’s unit, and models in that unit can ignore any or all modifiers to their characteristics and/or to any rolls or tests made for them (excluding modifiers to saving throws).",
      "keywords": ["Leagues of Votann"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "WAYFARER’S GRACE",
      "description": "Leagues of Votann model only. The first time the bearer is destroyed, after placing a Judgement token next to the unit that destroyed it, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining.",
      "keywords": ["Leagues of Votann"],
      "excludes": [],
      "cost": "25"
    }
  ],
  "datasheets": [
    {
      "id": "8d066aa5-47e9-5d02-861b-bcd5abfe8b04",
      "name": "Brôkhyr Iron-master",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following units: ■ Hearthkyn Warriors ■ Brôkhyr Thunderkyn",
      "composition": [
        "1 Brôkhyr Iron-master",
        "1 Ironkin Assistant*",
        "3 E-COGs* *  If this unit’s Iron-master is ever destroyed, this unit’s Ironkyn Assistant and all remaining E-COGs are also destroyed."
      ],
      "loadout": "The Iron-master is equipped with: graviton rifle; graviton hammer. The Ironkin Assistant is equipped with: las-beam cutter; close combat weapon. One E-COG is equipped with: Autoch-pattern bolt pistol; close combat weapon. One other E-COG is equipped with: plasma torch. One other E-COG is equipped with: manipulator arms.",
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
        "core": ["Leader"],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Multispectral Visor",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Brôkhyr’s Guild",
            "description": "At the end of your Movement phase, this unit can repair one friendly Leagues of Votann Vehicle or Exo-frame model within 3\" of it. That model regains up to D3 lost wounds, or up to 3 lost wounds instead if this unit contains an Ironkyn Assistant. Each model can only be repaired once per turn.",
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
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "BRÔKHYR IRON-MASTER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "5\"",
          "t": "5",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "IRONKIN ASSISTANT",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "5\"",
          "t": "5",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "E-COG",
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
              "name": "Autoch-pattern bolt pistol",
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
              "name": "Graviton rifle",
              "keywords": ["anti-vehicle 2+"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Las-beam cutter",
              "keywords": [],
              "range": "6\"",
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
              "name": "Graviton hammer",
              "keywords": ["anti-vehicle 2+"],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Manipulator arms",
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
              "name": "Plasma torch",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Brôkhyr Iron-master",
        "BRÔKHYR IRON-MASTER MODEL:",
        "Character"
      ],
      "factions": ["Leagues of Votann"],
      "leads": {
        "units": ["Hearthkyn Warriors", "Brôkhyr Thunderkyn"],
        "extra": ""
      }
    },
    {
      "id": "6c6112d4-601f-5bc8-b253-5d211b7900e3",
      "name": "Brôkhyr Thunderkyn",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Brôkhyr Thunderkyn"],
      "loadout": "Every model is equipped with: bolt cannon; close combat weapon.",
      "wargear": [
        "All models in this unit can each have their bolt cannon replaced with 1 graviton blast cannon.",
        "All models in this unit can each have their bolt cannon replaced with 1 SP conversion beamer."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "95",
          "active": true
        },
        {
          "models": "6",
          "cost": "190",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Oathband Covering Fire",
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
          "name": "Brôkhyr Thunderkyn",
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
              "name": "Bolt cannon",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
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
              "name": "Graviton blast cannon",
              "keywords": ["anti-vehicle 2+", "blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "4+",
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
              "name": "SP conversion beamer",
              "keywords": ["conversion", "sustained hits d3"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
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
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Exo-frame", "Brôkhyr Thunderkyn"],
      "factions": ["Leagues of Votann"],
      "leadBy": ["Brôkhyr Iron-master"]
    },
    {
      "id": "e01321d0-cdcf-5427-85a0-656d03e62368",
      "name": "Cthonian Beserks",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Cthonian Beserks"],
      "loadout": "Every model is equipped with: heavy plasma axe.",
      "wargear": [
        "All models in this unit can each have their heavy plasma axe replaced with 1 concussion maul.",
        "For every 5 models in this unit, 1 model that is not equipped with a mole grenade launcher can have its heavy plasma axe or concussion maul replaced with 1 twin concussion gauntlet.",
        "For every 5 models in this unit, 1 model that is not equipped with a twin concussion gauntlet can be equipped with 1 mole grenade launcher. If a model is equipped with a mole grenade launcher, add 1 to its Wounds and Attacks characteristics.* *  Designer’s Note: If a Cthonian Beserk is equipped with a mole grenade launcher, it will be accompanied by an L-COG unit: both models should be placed on the same base and together they act as a single model for all rules purposes (albeit one with improved characteristics)."
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
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cyberstimms",
            "description": "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Subterranean Explosives",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit (excluding Monsters and Vehicles) that was hit by one or more of this unit’s mole grenade launchers this phase and roll one D6. On a 4+, until the end of your opponent’s next turn, that enemy unit is shaken. While a unit is shaken, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it. Designer’s Note: While a unit is shaken, place a Mole Grenade token next to that unit as a reminder.",
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
          "sv": "6+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Cthonian Beserks",
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
              "name": "Mole grenade launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Concussion maul",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Heavy plasma axe – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Heavy plasma axe – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Twin concussion gauntlet",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Cthonian Beserks"],
      "factions": ["Leagues of Votann"]
    },
    {
      "id": "4ac8c768-6d3b-544b-93d6-ce5ef82a7286",
      "name": "Einhyr Champion",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Einhyr Hearthguard",
      "composition": ["1 Einhyr Champion"],
      "loadout": "This model is equipped with: Autoch-pattern combi-bolter; mass hammer; weavefield crest.",
      "wargear": [
        "This model’s mass hammer can be replaced with 1 darkstar axe.",
        "This model’s weavefield crest can be replaced with 1 teleport crest."
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
        "wargear": [
          {
            "name": "Teleport Crest",
            "description": "While the bearer is leading a unit, models in that unit have the Deep Strike ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weavefield Crest",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Exemplar of the Einhyr",
            "description": "While this model is leading a unit, you can re-roll Charge rolls made for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mass Driver Accelerators",
            "description": "Each time this model ends a Charge move, you can select one enemy unit within Engagement Range of this unit and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.",
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
          "name": "Einhyr Champion",
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
              "name": "Autoch-pattern combi-bolter",
              "keywords": [],
              "range": "24\"",
              "attacks": "4",
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
              "name": "Darkstar axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Mass hammer",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Exo-armour", "Einhyr Champion"],
      "factions": ["Leagues of Votann"],
      "leads": {
        "units": ["Einhyr Hearthguard"],
        "extra": ""
      }
    },
    {
      "id": "cfd5032a-2dc7-507a-a400-a0fc45d1e82a",
      "name": "Einhyr Hearthguard",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hesyr", "4-9 Hearthguard"],
      "loadout": "Every model is equipped with: EtaCarn plasma gun; exo-armour grenade launcher; concussion gauntlet. The Hesyr is additionally equipped with: weavefield crest.",
      "wargear": [
        "All models in this unit can each have their EtaCarn plasma gun replaced with 1 volkanite disintegrator.",
        "All models in this unit can each have their concussion gauntlet replaced with 1 plasma blade gauntlet.",
        "The Hesyr’s concussion gauntlet or plasma blade gauntlet can be replaced with 1 concussion hammer.",
        "The Hesyr’s weavefield crest can be replaced with 1 teleport crest."
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
            "name": "Teleport Crest",
            "description": "Models in the bearer’s unit have the Deep Strike ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weavefield Crest",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Oathband Bodyguard",
            "description": "While a Character is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than this unit’s Toughness characteristic, subtract 1 from the Wound roll.",
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
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Einhyr Hearthguard",
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
              "name": "EtaCarn plasma gun",
              "keywords": [],
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
              "name": "Exo-armour grenade launcher",
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
              "name": "Volkanite disintegrator",
              "keywords": ["devastating wounds"],
              "range": "18\"",
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
              "name": "Concussion gauntlet",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Concussion hammer",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Plasma blade gauntlet",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Exo-armour", "Einhyr Hearthguard"],
      "factions": ["Leagues of Votann"],
      "leadBy": ["Einhyr Champion", "Kâhl", "Ûthar The Destined"]
    },
    {
      "id": "e2762237-0be3-570b-a1f2-f49c8e865a37",
      "name": "Grimnyr",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following unit: ■ Hearthkyn Warriors",
      "composition": [
        "1 Grimnyr",
        "2 CORVs* * If this unit’s Grimnyr model is ever destroyed, all of this unit’s remaining CORV models are also destroyed."
      ],
      "loadout": "The Grimnyr is equipped with: Ancestral Wrath; ancestral ward stave. Every CORV is equipped with: Autoch-pattern bolter; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "75",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fortify (Psychic)",
            "description": "While this model is leading a unit, improve the Toughness characteristic of models in that unit by 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Grimnyr’s Regard",
            "description": "Once per battle, after this model’s unit fails a Battle-shock test, this model can use this ability. If it does, that unit is no longer Battle-shocked.",
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
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "GRIMNYR",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "5\"",
          "t": "5",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "CORV",
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
              "name": "Autoch-pattern bolter",
              "keywords": [],
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
              "name": "Ancestral Wrath – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Ancestral Wrath – focused witchfire",
              "keywords": ["hazardous", "psychic"],
              "range": "24\"",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Ancestral ward stave",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
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
        "Grimnyr",
        "GRIMNYR MODEL:",
        "Character",
        "Psyker"
      ],
      "factions": ["Leagues of Votann"],
      "leads": {
        "units": ["Hearthkyn Warriors"],
        "extra": ""
      }
    },
    {
      "id": "0fd9319f-37fc-5325-8bbe-3bc58f5834f2",
      "name": "Hearthkyn Warriors",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Theyn", "9 Hearthkyn Warriors"],
      "loadout": "Every model is equipped with: Autoch-pattern bolt pistol; Autoch-pattern bolter; close combat weapon. The Theyn is additionally equipped with: weavefield crest.",
      "wargear": [
        "All models in this unit can each have their Autoch-pattern bolter replaced with 1 ion blaster.",
        "Up to 2 Hearthkyn Warriors can each have their  Autoch-pattern bolter or ion blaster replaced with one of the following:  ◦  1 HYLas auto rifle* ◦ 1 HYLas rotary cannon* ◦  1 L7 missile launcher*  ◦ 1 EtaCarn plasma beamer* ◦ 1 magna-rail rifle* ◦ 1 Kin melee weapon  * You can only select each of these options once per u",
        "Up to 3 different Hearthkyn Warriors equipped with either an Autoch-pattern bolter or an ion blaster can each be equipped with one of the  following (to a maximum of 1 of each per unit):  ◦ 1 medipack** ◦ 1 comms array**  ◦ 1 pan spectral scanner** **  This model’s Autoch-pattern bolter or ion blaster cannot be replaced.",
        "The Theyn’s Autoch-pattern bolt pistol can be replaced with one of the following: ◦ 1 ion pistol nit. ◦ 1 EtaCarn plasma pistol",
        "The Theyn’s Autoch-pattern bolter or ion blaster can be replaced with 1 Kin melee weapon."
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
            "name": "Pan Spectral Scanner",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Comms Array",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Medipack",
            "description": "Models in the bearer’s unit have the Feel No Pain 6+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Weavefield Crest",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Luck Has. Need Keeps. Toil Earns",
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
          "m": "5\"",
          "t": "5",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Hearthkyn Warriors",
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
              "name": "Autoch-pattern bolt pistol",
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
              "name": "Autoch-pattern bolter",
              "keywords": [],
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
              "name": "EtaCarn plasma beamer",
              "keywords": ["sustained hits d3"],
              "range": "18\"",
              "attacks": "1",
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
              "name": "EtaCarn plasma pistol",
              "keywords": ["pistol"],
              "range": "6\"",
              "attacks": "1",
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
              "name": "HYLas auto rifle",
              "keywords": ["assault", "rapid fire 3"],
              "range": "24\"",
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
              "name": "HYLas rotary cannon",
              "keywords": ["heavy", "sustained hits 1"],
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
              "name": "Ion blaster",
              "keywords": [],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Ion pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "L7 missile launcher – blast",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "L7 missile launcher – focused",
              "keywords": [],
              "range": "24\"",
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
              "name": "Magna-rail rifle",
              "keywords": ["devastating wounds", "heavy"],
              "range": "18\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "12",
              "ap": "-3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
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
              "name": "Kin melee weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Battleline", "Grenades", "Hearthkyn Warriors"],
      "factions": ["Leagues of Votann"],
      "leadBy": ["Brôkhyr Iron-master", "Grimnyr", "Kâhl", "Ûthar The Destined"]
    },
    {
      "id": "3b568802-2de2-5f29-8a5b-e2797105a2a2",
      "name": "Hekaton Land Fortress",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hekaton Land Fortress"],
      "loadout": "This model is equipped with: cyclic ion cannon; MATR autocannon; 2 twin bolt cannons; armoured wheels; pan spectral scanner.",
      "wargear": [
        "This model can do one of the following: ◦  Replace 1 twin bolt cannon with 1 twin ion beamer ◦  Replace 2 twin bolt cannons with 2 twin ion beamers",
        "This model’s cyclic ion cannon can be replaced with one of the following: ◦ 1 SP heavy conversion beamer ◦ 1 heavy magna-rail cannon",
        "This model’s pan spectral scanner can be replaced with 1 Hekaton warhead."
      ],
      "transport": "This model has a transport capacity of 12 Leagues of Votann Infantry models. Each Exo-armour model takes up the space of 2 models and each Exo-frame model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "245",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Pan spectral scanner",
            "description": "Ranged weapons equipped by the bearer have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D6"],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll.",
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
          "ld": "7+",
          "oc": "5",
          "name": "Hekaton Land Fortress",
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
              "name": "Cyclic ion cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
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
              "name": "Heavy magna-rail cannon",
              "keywords": ["devastating wounds", "heavy"],
              "range": "30\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "18",
              "ap": "-4",
              "damage": "D6+6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hekaton warhead",
              "keywords": ["blast", "indirect fire", "one shot"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "7",
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
              "name": "MATR autocannon",
              "keywords": [],
              "range": "24\"",
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
              "name": "SP heavy conversion beamer",
              "keywords": ["conversion", "sustained hits d3"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "4"
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
              "name": "Twin ion beamer",
              "keywords": ["sustained hits d3", "twin-linked"],
              "range": "18\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
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
              "name": "Armoured wheels",
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
      "keywords": ["Vehicle", "Transport", "Hekaton Land Fortress"],
      "factions": ["Leagues of Votann"]
    },
    {
      "id": "2465cf66-bef0-5d7d-b921-01ce915dff2f",
      "name": "Hernkyn Pioneers",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Hernkyn Pioneers"],
      "loadout": "Every model is equipped with: bolt revolver; bolt shotgun; magna-coil autocannon; plasma knife.",
      "wargear": [
        "For every 3 models in this unit, 1 model can be equipped with one of the following (if a model is equipped with any of these weapons, add 1 to its Wounds characteristic): ◦ 1 HYLas rotary cannon ◦ 1 ion beamer",
        "Up to 3 different models that are not equipped with either a HYLas rotary cannon or an ion beamer can each be equipped with 1 of the following (to a maximum of 1 of each per unit): ◦ 1 comms array* ◦ 1 pan spectral scanner* ◦ 1 rollbar searchlight* *  This model cannot be equipped with a HYLas rotary cannon or an ion beamer."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "105",
          "active": true
        },
        {
          "models": "6",
          "cost": "210",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Comms Array",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6: on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Pan Spectral Scanner",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Rollbar Searchlight",
            "description": "Each time a model in the bearer’s unit makes an attack that targets a unit that contains one or more models with the Stealth ability, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 9\""],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Outflanking Mag-Riders",
            "description": "At the end of your opponent’s turn, if this unit is within 6\" of any battlefield edge and is not within Engagement Range of any enemy units, you can remove this unit from the battlefield and place it into Strategic Reserves.",
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
          "name": "Hernkyn Pioneers",
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
              "name": "Bolt revolver",
              "keywords": ["pistol"],
              "range": "9\"",
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
              "name": "Bolt shotgun",
              "keywords": ["assault"],
              "range": "12\"",
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
              "name": "HYLas rotary cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Ion beamer",
              "keywords": ["sustained hits d3"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Magna-coil autocannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Plasma knife",
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
      "keywords": ["Mounted", "Grenades", "Fly", "Hernkyn Pioneers"],
      "factions": ["Leagues of Votann"]
    },
    {
      "id": "01690642-8d27-5bfc-a8f8-47cdc05539a3",
      "name": "Kâhl",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Einhyr Hearthguard ■ Hearthkyn Warriors",
      "composition": ["1 Kâhl"],
      "loadout": "This model is equipped with: Autoch-pattern combi-bolter; forgewrought plasma axe; rampart crest.",
      "wargear": [
        "This model’s Autoch-pattern combi-bolter can be replaced with 1 volkanite disintegrator.",
        "This model’s forgewrought plasma axe can be replaced with 1 mass gauntlet.",
        "This model’s rampart crest can be replaced with 1 teleport crest."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Rampart Crest",
            "description": "While this model is leading a unit, models in that unit have a 5+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Teleport Crest",
            "description": "While this model is leading a unit, models in that unit have the Deep Strike ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Kindred Hero",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Grim Efficiency",
            "description": "Once per battle round, in your Command phase, you can select one model from your army with this ability, then select one enemy unit that is visible to that model. That enemy unit gains 1 Judgement token.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Kâhl",
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
              "name": "Autoch-pattern combi-bolter",
              "keywords": [],
              "range": "24\"",
              "attacks": "4",
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
              "name": "Volkanite disintegrator",
              "keywords": ["devastating wounds"],
              "range": "18\"",
              "attacks": "3",
              "skill": "2+",
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
              "name": "Forgewrought plasma axe",
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
              "name": "Mass gauntlet",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Kâhl"],
      "factions": ["Leagues of Votann"],
      "leads": {
        "units": ["Einhyr Hearthguard", "Hearthkyn Warriors"],
        "extra": ""
      }
    },
    {
      "id": "6d880dd3-d9e1-5a41-a2fd-5354f8c988c4",
      "name": "Sagitaur",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sagitaur"],
      "loadout": "This model is equipped with: HYLas beam cannon; twin bolt cannon; armoured wheels.",
      "wargear": [
        "This model’s HYLas beam cannon can be replaced with one of the following: ◦  1 L7 missile launcher and 1 Sagitaur missile launcher ◦ 1 MATR autocannon"
      ],
      "transport": "This model has a transport capacity of 6 Leagues of Votann Infantry models. It cannot transport Exo-armour or Exo-frame models. At the start of the Declare Battle Formations step, you can select one Hearthkyn Warriors unit from your army and split it into two units, each containing 5 models (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this Transport; the other can start the battle embarked within another Transport, or it can be deployed as a separate unit.",
      "points": [
        {
          "models": "1",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Scouts 6\""],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blistering Advance",
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
          "t": "10",
          "sv": "3+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Sagitaur",
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
              "name": "HYLas beam cannon",
              "keywords": ["sustained hits d3"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "12",
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
              "name": "L7 missile launcher – blast",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "L7 missile launcher – focused",
              "keywords": [],
              "range": "24\"",
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
              "name": "MATR autocannon",
              "keywords": [],
              "range": "24\"",
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
              "name": "Sagitaur missile launcher",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
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
              "name": "Twin bolt cannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Armoured wheels",
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
      "keywords": ["Vehicle", "Transport", "Dedicated Transport", "Sagitaur"],
      "factions": ["Leagues of Votann"]
    },
    {
      "id": "ece83336-6b7b-552d-b5a4-620fa7226371",
      "name": "Ûthar The Destined",
      "source": "40k-10e",
      "faction_id": "LoV",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Einhyr Hearthguard ■ Hearthkyn Warriors",
      "composition": ["1 Ûthar the Destined – Epic Hero"],
      "loadout": "This model is equipped with: volkanite disintegrator; Blade of the Ancestors; rampart crest.",
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
        "wargear": [
          {
            "name": "Rampart Crest",
            "description": "While the bearer is leading a unit, models in that unit have a 5+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Eye of the Ancestors"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ancestral Fortune",
            "description": "Once per turn, you can change one Hit roll or one Wound roll made for this model to a 6.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Destined",
            "description": "Each time an attack is allocated to this model, change the Damage characteristic of that attack to 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Grim Efficiency",
            "description": "Once per battle round, in your Command phase, you can select one model from your army with this ability, then select one enemy unit that is visible to that model. That enemy unit gains 1 Judgement token.",
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
          "ld": "7+",
          "oc": "1",
          "name": "Ûthar The Destined",
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
              "name": "Volkanite disintegrator",
              "keywords": ["devastating wounds"],
              "range": "18\"",
              "attacks": "3",
              "skill": "2+",
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
              "name": "Blade of the Ancestors",
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
      "keywords": ["Infantry", "Character", "Epic Hero", "Ûthar the Destined"],
      "factions": ["Leagues of Votann"],
      "leads": {
        "units": ["Einhyr Hearthguard", "Hearthkyn Warriors"],
        "extra": ""
      }
    }
  ],
  "colours": {
    "banner": "#572d0a",
    "header": "#3c4b3f"
  }
}
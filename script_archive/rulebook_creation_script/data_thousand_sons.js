window.data = window.data || {};
window.data.TS = {
  "id": "TS",
  "link": "https://game-datacards.eu",
  "name": "Thousand Sons",
  "is_subfaction": false,
  "parent_id": "",
  "allied_factions": ["CD", "QT"],
  "stratagems": [
    {
      "name": "PSYCHIC DOMINION",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Cult of Magic",
      "turn": "either",
      "phase": ["any"],
      "fluff": "To pit one’s own psychic prowess against\nthe sorcerous might of the Thousand Sons\nis to be trapped, helpless and screaming,\nwithin one’s own mind.",
      "when": "Any phase, just after an enemy\nunit has selected its targets.",
      "target": "One Thousand Sons unit from\nyour army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, all\nattacks made against your unit with\nPsychic weapons have the [HAZARDOUS]\nability and all models in your unit have\nthe Feel No Pain 4+ ability against\nPsychic Attacks",
      "restrictions": "",
      "id": "0a071c1d-c99b-573e-b3ad-9310032fb22b"
    },
    {
      "name": "DESTINED BY FATE",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Cult of Magic",
      "turn": "either",
      "phase": ["any"],
      "fluff": "The Architect of Fate has great designs\nfor his pawns, which do not include their\nuntimely demise just yet…",
      "when": "Any phase, when a saving throw is\nfailed for a Thousand Sons Psyker model\nfrom your army.",
      "target": "That Psyker model.",
      "effect": "Change the Damage\ncharacteristic of that attack to 0.",
      "restrictions": "",
      "id": "26f5b6ea-9563-5641-a0c6-d7892c45dcfe"
    },
    {
      "name": "DEVASTATING SORCERY",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Cult of Magic",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "This warrior’s veins burn with raw\nsorcery. The sheer unstoppable might\nof their conjurations is such that, when\nunleashed with destructive intent, there\nis little that can prevent them from\ndevastating manifestation.",
      "when": "Your Shooting phase.",
      "target": "One Thousand Sons Psyker\nunit from your army that has not been\nselected to shoot this phase.",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes a Psychic\nAttack, you can re-roll the Hit roll and you\ncan re-roll the Wound roll.",
      "restrictions": "",
      "id": "b27432ff-3c90-5bc2-8b4e-12f25d600216"
    },
    {
      "name": "ENSORCELLED INFUSION",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Cult of Magic",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "Utilising the fell powers of the warp,\nThousand Sons Sorcerers infuse their\nminions’ bolter rounds with empyric\nenergies to render them even deadlier.",
      "when": "Your Shooting phase.",
      "target": "One Thousand Sons Psyker\nunit from your army that has not been\nselected to shoot this phase.",
      "effect": "Until the end of the phase, all\ninferno bolt pistols, inferno boltguns,\ninferno combi-bolters and inferno\ncombi-weapons equipped by models in\nyour unit have the [PSYCHIC] ability and a\nStrength characteristic of 5. ",
      "restrictions": "",
      "id": "9336b821-7890-5546-95ce-aad05c639d62"
    },
    {
      "name": "SORCEROUS MIGHT",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Cult of Magic",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "The most powerful sorcerers of the\nThousand Sons are battle-psykers who\ncan, if the need is dire enough, siphon a\nsliver of their corrupted souls into their\neldritch assaults to temporarily boost\ntheir potency.",
      "when": "Your Shooting phase.",
      "target": "One Thousand Sons Psyker\nunit from your army that has not been\nselected to shoot this phase.",
      "effect": "Until the end of the phase, add 9\"\nto the range of Psychic weapons equipped\nby your unit.",
      "restrictions": "",
      "id": "f2329c67-7006-5348-89d5-c5f8bbdc8bdc"
    },
    {
      "name": "WARP SIGHT",
      "cost": 2,
      "type": "Strategic Ploy",
      "detachment": "Cult of Magic",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "With their tainted souls melded as one in\nthe warp, what one champion of the cabal\nsees, all their fellows see also.",
      "when": "Your Shooting phase.",
      "target": "One Thousand Sons Psyker unit\nfrom your army and one enemy unit that\nis visible to that unit.",
      "effect": "Until the end of the phase, each\ntime a friendly Thousand Sons Psyker\nmodel makes an attack with a Psychic\nweapon that targets that enemy unit,\nthat attack has the [INDIRECT FIRE] and\n[IGNORES COVER] abilities. ",
      "restrictions": "",
      "id": "ffb361bd-e8c4-5a51-9464-771e79588903"
    }
  ],
  "enhancements": [
    {
      "name": "Arcane Vortex",
      "description": "Thousand Sons model only. Add 1 to the Strength and Damage characteristics of Psychic weapons equipped by the bearer.",
      "keywords": ["Thousand Sons"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Athenaean Scrolls",
      "description": "Thousand Sons Psyker model only. In your Command phase, if the bearer is on the battlefield and is not Battle-shocked, it generates you 1 additional Cabal point this phase.",
      "keywords": ["Thousand Sons", "Psyker"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "Lord of Forbidden Lore",
      "description": "Thousand Sons Psyker model only. The bearer can be selected to use a Ritual even if another Psyker from your army has already been selected to use that Ritual this phase.",
      "keywords": ["Thousand Sons", "Psyker"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "Umbralefic Crystal",
      "description": "Thousand Sons model only. Once per battle, in your Command phase, you can remove the bearer’s unit from the battlefield. If you do, in the Reinforcements step of your next Movement phase, set that unit back up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.",
      "keywords": ["Thousand Sons"],
      "excludes": [],
      "cost": "20"
    }
  ],
  "datasheets": [
    {
      "id": "76048a0a-8f11-512e-a836-34c97882259b",
      "name": "Ahriman",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Rubric Marines",
      "composition": ["1 Ahriman – Epic Hero"],
      "loadout": "This model is equipped with: inferno bolt pistol; Psychic Stalk; Black Staff of Ahriman.",
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
        "faction": ["Cabal of Sorcerers 3"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rubric Lord",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Arch-Sorcerer of Tzeentch (Psychic)",
            "description": "Once per battle, you can select this model to use a Ritual for 0 Cabal points (see Cabal of Sorcerers). If you do, all the other rules for using Rituals still apply.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "AHRIMAN",
            "description": "Your army cannot contain both Ahriman and Ahriman on Disc of Tzeentch.",
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Ahriman",
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
              "name": "Inferno bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Psychic Stalk",
              "keywords": ["precision", "psychic"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
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
              "name": "Black Staff of Ahriman",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "7",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Psyker",
        "Chaos",
        "Tzeentch",
        "Ahriman"
      ],
      "factions": ["Thousand Sons"],
      "leads": {
        "units": ["Rubric Marines"],
        "extra": ""
      }
    },
    {
      "id": "d5bd0573-49dc-5686-b2b9-a69411549958",
      "name": "Ahriman On Disc Of Tzeentch",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Rubric Marines",
      "composition": ["1 Ahriman – Epic Hero"],
      "loadout": "This model is equipped with: Psychic Stalk; inferno bolt pistol; Black Staff of Ahriman.",
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
        "faction": ["Cabal of Sorcerers 3"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rubric Lord",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Arch-Sorcerer of Tzeentch (Psychic)",
            "description": "Once per battle, you can select this model to use a Ritual for 0 Cabal points (see Cabal of Sorcerers). If you do, all the other rules for using Rituals still apply.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "AHRIMAN",
            "description": "Your army cannot contain both Ahriman and Ahriman on Disc of Tzeentch.",
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
          "name": "Ahriman On Disc Of Tzeentch",
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
              "name": "Inferno bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Psychic Stalk",
              "keywords": ["precision", "psychic"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
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
              "name": "Black Staff of Ahriman",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "7",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Psyker",
        "Fly",
        "Chaos",
        "Tzeentch",
        "Ahriman on Disc of Tzeentch"
      ],
      "factions": ["Thousand Sons"],
      "leads": {
        "units": ["Rubric Marines"],
        "extra": ""
      }
    },
    {
      "id": "b44de2c6-587b-51e3-86b0-7b1ca9d113e7",
      "name": "Exalted Sorcerer",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Rubric Marines",
      "composition": ["1 Exalted Sorcerer"],
      "loadout": "This model is equipped with: Astral Blast; inferno bolt pistol; force weapon.",
      "wargear": [
        "This model’s inferno bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 warpflame pistol",
        "This model can be equipped with 1 Prosperine khopesh."
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
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Cabal of Sorcerers 2"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Arcane Shield (Psychic)",
            "description": "While this model is leading a unit, models in that unit have a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Rebind Rubricae (Psychic)",
            "description": "In your Command phase, if this model is leading a unit, you can roll one D6: on a 1, that unit suffers D3 mortal wounds; on a 2-5, you can return 1 destroyed Bodyguard model to that unit; on a 6, you can return up to 2 destroyed Bodyguard models to that unit.",
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
          "name": "Exalted Sorcerer",
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
              "name": "Astral Blast",
              "keywords": ["blast", "devastating wounds", "psychic"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "2+",
              "strength": "6",
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
              "name": "Inferno bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Warpflame pistol",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
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
              "name": "Prosperine khopesh",
              "keywords": [],
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
        "Grenades",
        "Psyker",
        "Chaos",
        "Tzeentch",
        "Exalted Sorcerer"
      ],
      "factions": ["Thousand Sons"],
      "leads": {
        "units": ["Rubric Marines"],
        "extra": ""
      }
    },
    {
      "id": "30b886e4-88fd-5a6a-a85f-ccdc99ac2f28",
      "name": "Exalted Sorcerer On Disc Of Tzeentch",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Rubric Marines",
      "composition": ["1 Exalted Sorcerer"],
      "loadout": "This model is equipped with: Arcane Fire; inferno bolt pistol; force weapon.",
      "wargear": [
        "This model’s inferno bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 warpflame pistol",
        "This model can be equipped with 1 Prosperine khopesh."
      ],
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
        "faction": ["Cabal of Sorcerers 2"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Arcane Shield (Psychic)",
            "description": "While this model is leading a unit, models in that unit a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Binding Tendrils (Psychic)",
            "description": "At the end of your Movement phase, you can select one enemy unit within 18\" of and visible to this Psyker and roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2+, until the start of your next Movement phase, halve the Move characteristic of models in that unit and halve Advance and Charge rolls made for that unit.",
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
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Exalted Sorcerer On Disc Of Tzeentch",
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
              "name": "Arcane Fire",
              "keywords": ["ignores cover", "psychic", "torrent"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
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
              "name": "Inferno bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Warpflame pistol",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
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
              "name": "Prosperine khopesh",
              "keywords": [],
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
        "Fly",
        "Psyker",
        "Chaos",
        "Tzeentch",
        "Exalted Sorcerer"
      ],
      "factions": ["Thousand Sons"],
      "leads": {
        "units": ["Rubric Marines"],
        "extra": ""
      }
    },
    {
      "id": "fa38ccf7-a6fc-5328-9f65-d7631b1c7a12",
      "name": "Infernal Master",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Rubric Marines",
      "composition": ["1 Infernal Master"],
      "loadout": "This model is equipped with: inferno bolt pistol; Screamer Invocation; force weapon.",
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
        "faction": ["Cabal of Sorcerers 2"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Malefic Maelstrom (Psychic)",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Glimpse of Eternity (Psychic)",
            "description": "Once per turn, you can change the result of one Hit roll, one Wound roll, one Damage roll or one saving throw made for this model to an unmodified 6.",
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
          "name": "Infernal Master",
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
              "name": "Inferno bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Screamer Invocation – witchfire",
              "keywords": ["psychic", "torrent"],
              "range": "18\"",
              "attacks": "2D3",
              "skill": "N/A",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Screamer Invocation – focused witchfire",
              "keywords": ["hazardous", "psychic", "torrent"],
              "range": "18\"",
              "attacks": "2D6",
              "skill": "N/A",
              "strength": "6",
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
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Psyker",
        "Chaos",
        "Tzeentch",
        "Infernal Master"
      ],
      "factions": ["Thousand Sons"],
      "leads": {
        "units": ["Rubric Marines"],
        "extra": ""
      }
    },
    {
      "id": "4c38a598-03aa-5f90-9407-33bd484da21c",
      "name": "Magnus The Red",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Magnus the Red – Epic Hero"],
      "loadout": "This model is equipped with: Gaze of Magnus; Tzeentch’s Firestorm; Blade of Magnus.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "410",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["Cabal of Sorcerers 4"],
        "primarch": [
          {
            "name": "CRIMSON KING",
            "showAbility": true,
            "abilities": [
              {
                "name": "Impossible Form (Psychic)",
                "description": "Each time an attack is made against this Psyker (excluding Psychic Attacks), subtract 1 from that attack’s Damage characteristic.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Treason of Tzeentch (Psychic)",
                "description": "At the start of your opponent’s Shooting phase, you can select one enemy unit within 24\" of and visible to this Psyker. Until the end of the phase, ranged weapons equipped by models in that unit have the [HAZARDOUS] ability.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Time Flux (Aura, Psychic)",
                "description": "While a friendly Thousand Sons unit is within 6\" of this Psyker, add 2\" to the Move characteristic of models in that unit.",
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
            "name": "Unearthly Power",
            "description": "At the start of the battle round, select one of the abilities in the Crimson King section (see left). Until the start of the next battle round, this model has that ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Lord of the Planet of the Sorcerers (Aura)",
            "description": "While a friendly Thousand Sons Psyker unit is within 6\" of this model, each time a model in that unit makes a Psychic Attack, add 1 to the Hit roll and add 1 to the Wound roll.",
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
          "m": "14\"",
          "t": "11",
          "sv": "2+",
          "w": "16",
          "ld": "5+",
          "oc": "6",
          "name": "Magnus The Red",
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
              "name": "Gaze of Magnus",
              "keywords": ["devastating wounds", "psychic"],
              "range": "24\"",
              "attacks": "3D3",
              "skill": "2+",
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
              "name": "Tzeentch’s Firestorm",
              "keywords": ["blast", "psychic"],
              "range": "24\"",
              "attacks": "D6+3",
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
              "name": "Blade of Magnus – strike",
              "keywords": ["devastating wounds", "psychic"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "16",
              "ap": "-3",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Blade of Magnus – sweep",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "8",
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
        "Chaos",
        "Tzeentch",
        "Primarch",
        "Magnus the Red"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "450a9b48-7ec3-55b6-818a-42145ac02450",
      "name": "Mutalith Vortex Beast",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Mutalith Vortex Beast"],
      "loadout": "This model is equipped with: warp vortex; betentacled maw; Mutalith claws.",
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
        "core": ["Deadly Demise D6", "Feel No Pain 5+"],
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
            "name": "Mutating Vortex (Aura)",
            "description": "At the end of your Movement phase, roll one D6 for each enemy unit within 6\" of this model: on a 2-3, that unit suffers 1 mortal wound; on a 4-5, that unit suffers D3 mortal wounds; on a 6, that unit suffers D6 mortal wounds. Each enemy unit within range of this ability must then take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Immaterial Flare (Aura)",
            "description": "While a friendly Thousand Sons Psyker unit is within 6\" of this model, each time that unit uses a Ritual that specifies a range, you can double that range while resolving that Ritual.",
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
          "sv": "4+",
          "w": "13",
          "ld": "6+",
          "oc": "4",
          "name": "Mutalith Vortex Beast",
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
              "name": "Warp vortex – blast",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Warp vortex – beam",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "18",
              "ap": "-4",
              "damage": "D6+6"
            },
            {
              "active": true,
              "name": "Warp vortex – torrent",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "2D6",
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
              "name": "Betentacled maw",
              "keywords": [],
              "range": "Melee",
              "attacks": "15",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Mutalith claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "4"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Daemon",
        "Chaos",
        "Tzeentch",
        "Mutalith Vortex Beast"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "0887ff5d-6af0-5557-bc10-c984572b3c04",
      "name": "Rubric Marines",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Aspiring Sorcerer", "4-9 Rubric Marines"],
      "loadout": "The Aspiring Sorcerer is equipped with: inferno bolt pistol; Warpsmite; force weapon. Every Rubric Marine is equipped with: inferno boltgun; close combat weapon.",
      "wargear": [
        "The Aspiring Sorcerer’s inferno bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 warpflame pistol",
        "Any number of Rubric Marines can each have their inferno boltgun replaced with 1 warpflamer.",
        "1 Rubric Marine’s inferno boltgun can be replaced with 1 soulreaper cannon.",
        "1 Rubric Marine can be equipped with 1 icon of flame."
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
            "name": "Icon of Flame",
            "description": "Each time a model in the bearer’s unit makes a ranged attack, if a Critical Wound is scored, improve the Armour Penetration characteristic of that attack by 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Cabal of Sorcerers 1*"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bringers of Change",
            "description": "Each time a model in this unit makes a ranged attack, re-roll a Wound roll of 1. If the target of that attack is within range of an objective marker you do not control, you can re-roll the Wound roll instead.",
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
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Rubric Marines",
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
              "name": "Inferno bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
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
              "name": "Inferno boltgun",
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
              "name": "Soulreaper cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Warpsmite",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "pistol",
                "psychic"
              ],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Warpflame pistol",
              "keywords": ["pistol", "ignores cover", "torrent"],
              "range": "12\"",
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
              "name": "Warpflamer",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Battleline",
        "Chaos",
        "Tzeentch",
        "Rubric Marines",
        "ASPIRING SORCERER:",
        "Psyker"
      ],
      "factions": ["Thousand Sons"],
      "leadBy": [
        "Ahriman",
        "Ahriman On Disc Of Tzeentch",
        "Exalted Sorcerer",
        "Exalted Sorcerer On Disc Of Tzeentch",
        "Infernal Master",
        "Thousand Sons Sorcerer"
      ]
    },
    {
      "id": "b031d339-827f-524b-a5ee-7b0ffe55d27a",
      "name": "Scarab Occult Terminators",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Scarab Occult Sorcerer",
        "4-9 Scarab Occult Terminators"
      ],
      "loadout": "The Scarab Occult Sorcerer is equipped with: inferno combi-bolter; Warpsmite; force weapon. Every Scarab Occult Terminator is equipped with: inferno combi-bolter; Prosperine khopesh.",
      "wargear": [
        "The Scarab Occult Sorcerer’s inferno combi-bolter can be replaced with 1 Prosperine khopesh.",
        "For every 5 models in this unit, 1 Scarab Occult Terminator’s inferno combi-bolter can be replaced with one of the following: ◦ 1 heavy warpflamer ◦ 1 soulreaper cannon",
        "For every 5 models in this unit, 1 Scarab Occult Terminator can be equipped with 1 hellfyre missile rack."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "205",
          "active": true
        },
        {
          "models": "10",
          "cost": "410",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Cabal of Sorcerers 1*"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Implacable Guardians",
            "description": "While this unit contains one or more Psyker models, each time an attack is made against this unit, if the Strength characteristic of that attack is greater than this unit’s Toughness characteristic, subtract 1 from the Wound roll.",
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
          "name": "Scarab Occult Terminators",
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
              "name": "Heavy warpflamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Hellfyre missile rack",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
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
              "name": "Inferno combi-bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Soulreaper cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Warpsmite",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "pistol",
                "psychic"
              ],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
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
              "name": "Prosperine khopesh",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Terminator",
        "Chaos",
        "Tzeentch",
        "Scarab Occult Terminators",
        "SCARAB OCCULT SORCERER:",
        "Psyker"
      ],
      "factions": ["Thousand Sons"],
      "leadBy": ["Thousand Sons Sorcerer In Terminator Armour"]
    },
    {
      "id": "d45b410a-deec-598f-bf5e-0638da19c52a",
      "name": "Thousand Sons Chaos Spawn",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2 Chaos Spawn"],
      "loadout": "Every model is equipped with: hideous mutations.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "65",
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
          "name": "Thousand Sons Chaos Spawn",
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
      "keywords": ["Beast", "Chaos", "Tzeentch", "Spawn"],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "d847b289-1fff-5b5b-aa51-551200307307",
      "name": "Thousand Sons Cultists",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Thousand Sons Cultist Champion",
        "9-19 Thousand Sons Cultists"
      ],
      "loadout": "Every model is equipped with: Cultist firearm; brutal assault weapon.",
      "wargear": [
        "For every 10 models in this unit, 1 Thousand Sons Cultist’s Cultist firearm can be replaced with 1 flamer.",
        "For every 10 models in this unit, 1 Thousand Sons Cultist’s Cultist firearm can be replaced with 1 heavy stubber.",
        "For every 10 models in this unit, 1 Thousand Sons Cultist’s Cultist Firearm can be replaced with 1 grenade launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "65",
          "active": true
        },
        {
          "models": "20",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 6\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pawns of Fate",
            "description": "Each time this unit destroys an enemy unit, roll one D6: on a 2+, you gain 1CP. When this unit is destroyed, roll one D6: on a 2+, you gain 1CP.",
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
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Thousand Sons Cultists",
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
      "keywords": ["Infantry", "Chaos", "Tzeentch", "Cultists"],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "b381d363-e8ae-565a-8ce7-03ed5cfa8839",
      "name": "Thousand Sons Daemon Prince",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Daemon Prince"],
      "loadout": "This model is equipped with: infernal cannon; hellforged weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "210",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Cabal of Sorcerers 2"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Weave of Fate (Psychic)",
            "description": "Once per battle, at the start of any phase, you can select one friendly Rubric Marines or Scarab Occult Terminators unit within 6\" of this model. Until the end of the phase, weapons equipped by models in that unit have the [PRECISION] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Glamour of Tzeentch (Aura, Psychic)",
            "description": "While a friendly Thousand Sons unit is within 6\" of this model, models in that unit have the Stealth ability.",
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
          "t": "10",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Thousand Sons Daemon Prince",
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
              "name": "Infernal cannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Hellforged weapons – strike",
              "keywords": ["psychic"],
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
              "keywords": ["psychic"],
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
        "Daemon",
        "Psyker",
        "Chaos",
        "Tzeentch",
        "Daemon Prince"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "d15760a8-e0cc-5a34-9661-97ef9524a78f",
      "name": "Thousand Sons Daemon Prince With Wings",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Daemon Prince with Wings"],
      "loadout": "This model is equipped with: infernal cannon; hellforged weapons.",
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
        "core": ["Deadly Demise D3"],
        "faction": ["Cabal of Sorcerers 2"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sorcerous Fire (Psychic)",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over this phase and roll nine D6: for each 6, that unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Aetherstride (Psychic)",
            "description": "At the end of your opponent’s turn, if this model is not within Engagement Range of any enemy units, you can remove it from the battlefield and then, in the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models. If the battle ends and this model is not on the battlefield, it is destroyed.",
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
          "t": "9",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Thousand Sons Daemon Prince With Wings",
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
              "name": "Infernal cannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Hellforged weapons – strike",
              "keywords": ["psychic"],
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
              "keywords": ["psychic"],
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
        "Daemon",
        "Psyker",
        "Fly",
        "Chaos",
        "Tzeentch",
        "Daemon Prince"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "8d3c3611-78e1-553c-8e58-b310a756f88e",
      "name": "Thousand Sons Defiler",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Defiler"],
      "loadout": "This model is equipped with: Defiler cannon; reaper autocannon; twin heavy flamer; Defiler claws.",
      "wargear": [
        "This model’s twin heavy flamer can be replaced with one of the following: ◦ 1 Defiler scourge ◦ 1 havoc launcher",
        "This model’s reaper autocannon can be replaced with one of the following: ◦ 1 twin lascannon ◦ 1 twin inferno heavy bolter",
        "This model can be equipped with 1 inferno combi-weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "200",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
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
          "name": "Thousand Sons Defiler",
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
              "name": "Inferno combi-bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Inferno combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
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
              "keywords": []
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin inferno heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
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
        "Daemon",
        "Smoke",
        "Chaos",
        "Tzeentch",
        "Defiler"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "db29ab57-ac26-5b23-bb8c-3eddc889371c",
      "name": "Thousand Sons Forgefiend",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Forgefiend"],
      "loadout": "This model is equipped with: 2 Hades autocannons; 1 Forgefiend jaws.",
      "wargear": [
        "This model’s 2 Hades autocannons can be replaced with 2 ectoplasma cannons.",
        "This model’s Forgefiend jaws can be replaced with 1 ectoplasma cannon and 1 Forgefiend claws."
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
            "name": "Blazing Salvoes",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
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
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Thousand Sons Forgefiend",
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
              "name": "Ectoplasma cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "10",
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
              "name": "Hades autocannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Forgefiend claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Forgefiend jaws",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Daemon",
        "Chaos",
        "Tzeentch",
        "Forgefiend"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "517b09b0-362d-5389-941a-f779c1458605",
      "name": "Thousand Sons Helbrute",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Helbrute"],
      "loadout": "This model is equipped with: missile launcher; multi-melta; close combat weapon.",
      "wargear": [
        "This model’s multi-melta can be replaced with one of the following: ◦ 1 Helbrute plasma cannon ◦ 1 twin autocannon ◦ 1 twin inferno heavy bolter ◦ 1 twin lascannon ◦ 1 Helbrute fist",
        "This model’s missile launcher can be replaced with one of the following: ◦ 1 Helbrute fist ◦ 1 Helbrute hammer ◦ 1 power scourge",
        "For each Helbrute fist this model is equipped with, it can be equipped with one of the following: ◦ 1 inferno combi-bolter ◦ 1 heavy flamer"
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
            "name": "Arcane Knowledge Amidst Babbling Insanity (Aura)",
            "description": "Each time a friendly Thousand Sons Psyker model within 9\" of this model is selected to use a Ritual, you gain 1 Cabal point.",
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
          "name": "Thousand Sons Helbrute",
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
              "name": "Inferno combi-bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Twin inferno heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
      "keywords": ["Vehicle", "Walker", "Chaos", "Tzeentch", "Helbrute"],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "6183c016-0094-5967-bc81-f847e457d4cc",
      "name": "Thousand Sons Heldrake",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Heldrake"],
      "loadout": "This model is equipped with: Hades autocannon; Heldrake claws.",
      "wargear": [
        "This model’s Hades autocannon can be replaced with 1 baleflamer."
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
        "core": ["Deadly Demise D3", "Hover"],
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
            "name": "Flame-wreathed",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move. Until the end of the turn, models in that unit cannot have the Benefit of Cover.",
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
          "ld": "6+",
          "oc": "0",
          "name": "Thousand Sons Heldrake",
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
              "name": "Baleflamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
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
              "name": "Hades autocannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Heldrake claws",
              "keywords": ["anti-fly 2+", "devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Aircraft",
        "Fly",
        "Daemon",
        "Chaos",
        "Tzeentch",
        "Heldrake"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "81c68c2b-1d97-55b3-8b07-f715b083121b",
      "name": "Thousand Sons Land Raider",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Land Raider"],
      "loadout": "This model is equipped with: 2 soulshatter lascannons; twin inferno heavy bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 inferno combi-bolter ◦ 1 inferno combi-weapon",
        "This model can be equipped with 1 havoc launcher."
      ],
      "transport": "This model has a transport capacity of 12 Thousand Sons Infantry models (excluding Cultist and Tzaangor models). Each Terminator model takes up the space of 2 models.",
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
            "name": "Assault Ramp",
            "description": "Each time a unit disembarks from this Transport after it has made a Normal move, that unit is still eligible to declare a charge this turn.",
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
          "name": "Thousand Sons Land Raider",
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
              "name": "Inferno combi-bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Inferno combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Twin inferno heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
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
        "Transport",
        "Smoke",
        "Chaos",
        "Tzeentch",
        "Land Raider"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "4c972846-787c-574f-a79b-fc3f05280468",
      "name": "Thousand Sons Maulerfiend",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Maulerfiend"],
      "loadout": "This model is equipped with: lasher tendrils; Maulerfiend fists.",
      "wargear": [
        "This model’s lasher tendrils can be replaced with 2 magma cutters."
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
            "name": "Prophetic Hunters",
            "description": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase.",
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
          "name": "Thousand Sons Maulerfiend",
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
              "name": "Magma cutter",
              "keywords": ["melta 2"],
              "range": "6\"",
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
              "name": "Lasher tendrils",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Maulerfiend fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Daemon",
        "Chaos",
        "Tzeentch",
        "Maulerfiend"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "ac4e5ad8-3467-557e-b0d5-9031b0a3cf1f",
      "name": "Thousand Sons Predator Annihilator",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Predator Annihilator"],
      "loadout": "This model is equipped with: Predator twin lascannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 lascannons ◦ 2 inferno heavy bolters",
        "This model can be equipped with one of the following: ◦ 1 inferno combi-bolter ◦ 1 inferno combi-weapon",
        "This model can be equipped with 1 havoc launcher."
      ],
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
        "core": ["Deadly Demise D3"],
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
          "name": "Thousand Sons Predator Annihilator",
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
              "name": "Inferno combi-bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Inferno combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Inferno heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Predator twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
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
        "Smoke",
        "Chaos",
        "Tzeentch",
        "Predator Annihilator"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "60c487e7-5ca9-5398-9951-6e0836d4c03e",
      "name": "Thousand Sons Predator Destructor",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Predator Destructor"],
      "loadout": "This model is equipped with: Predator autocannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 lascannons ◦ 2 inferno heavy bolters",
        "This model can be equipped with one of the following: ◦ 1 inferno combi-bolter ◦ 1 inferno combi-weapon",
        "This model can be equipped with 1 havoc launcher."
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
          "name": "Thousand Sons Predator Destructor",
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
              "name": "Inferno combi-bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Inferno combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Inferno heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
        "Smoke",
        "Chaos",
        "Tzeentch",
        "Predator Destructor"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "8cdb60fc-c16c-55c2-b441-e445c0e7f26b",
      "name": "Thousand Sons Rhino",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Rhino"],
      "loadout": "This model is equipped with: inferno combi-bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 additional inferno combi-bolter ◦ 1 inferno combi-weapon",
        "This model can be equipped with 1 havoc launcher."
      ],
      "transport": "This model has a transport capacity of 12 Thousand Sons Infantry models (excluding Cultist, Tzaangor and Terminator models).",
      "points": [
        {
          "models": "1",
          "cost": "75",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 2"],
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
          "name": "Thousand Sons Rhino",
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
              "name": "Inferno combi-bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Inferno combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
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
        "Transport",
        "Dedicated Transport",
        "Smoke",
        "Chaos",
        "Tzeentch",
        "Rhino"
      ],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "d8b758bf-642e-5d09-a15b-d4c565538d29",
      "name": "Thousand Sons Sorcerer",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Rubric Marines",
      "composition": ["1 Thousand Sons Sorcerer"],
      "loadout": "This model is equipped with: Fires of the Abyss; inferno bolt pistol; force weapon.",
      "wargear": [
        "This model’s inferno bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 warpflame pistol"
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
        "faction": ["Cabal of Sorcerers 1"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Empyric Guidance (Psychic)",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Illusions of Tzeentch (Psychic)",
            "description": "While this model is leading a unit, that unit can only be selected as the target of a ranged attack if the attacking model is within 18\".",
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
          "name": "Thousand Sons Sorcerer",
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
              "name": "Fires of the Abyss",
              "keywords": ["pistol", "psychic", "sustained hits 3"],
              "range": "12\"",
              "attacks": "2D6",
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
              "name": "Inferno bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Warpflame pistol",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
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
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Psyker",
        "Grenades",
        "Chaos",
        "Tzeentch",
        "Sorcerer"
      ],
      "factions": ["Thousand Sons"],
      "leads": {
        "units": ["Rubric Marines"],
        "extra": ""
      }
    },
    {
      "id": "143c0245-2ac6-54a7-8bc9-334c793a115a",
      "name": "Thousand Sons Sorcerer In Terminator Armour",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Scarab Occult Terminators",
      "composition": ["1 Thousand Sons Sorcerer in Terminator Armour"],
      "loadout": "This model is equipped with: Coruscating Flames; inferno combi-bolter; force weapon.",
      "wargear": [
        "This model’s inferno combi-bolter can be replaced with one of the following: ◦ 1 inferno combi-weapon ◦ 1 Prosperine khopesh"
      ],
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
        "faction": ["Cabal of Sorcerers 2"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Empyric Guidance (Psychic)",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Marked by Fate (Psychic)",
            "description": "In your Shooting phase, you can select one enemy unit within 18\" of and visible to this model. Until the end of the turn, each time a friendly Thousand Sons model makes an attack that targets that unit, re-roll a Hit roll of 1.",
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
          "name": "Thousand Sons Sorcerer In Terminator Armour",
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
              "name": "Coruscating Flames",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+",
                "devastating wounds",
                "psychic"
              ],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
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
              "name": "Inferno combi-bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Inferno combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Prosperine khopesh",
              "keywords": [],
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
        "Psyker",
        "Terminator",
        "Chaos",
        "Tzeentch",
        "Sorcerer"
      ],
      "factions": ["Thousand Sons"],
      "leads": {
        "units": ["Scarab Occult Terminators"],
        "extra": ""
      }
    },
    {
      "id": "4f69fa1f-800d-5963-bfa9-68ea87a4c8da",
      "name": "Thousand Sons Vindicator",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thousand Sons Vindicator"],
      "loadout": "This model is equipped with: demolisher cannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 inferno combi-bolter ◦ 1 inferno combi-weapon",
        "This model can be equipped with 1 havoc launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "200",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
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
            "name": "Siege Shield",
            "description": "When making ranged attacks with its demolisher cannon, this model can target enemy units within Engagement Range of it (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, when making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units.",
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
          "t": "11",
          "sv": "2+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Thousand Sons Vindicator",
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
              "name": "Demolisher cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
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
              "name": "Inferno combi-bolter",
              "keywords": ["rapid fire 2"],
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
              "name": "Inferno combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
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
      "keywords": ["Vehicle", "Smoke", "Chaos", "Tzeentch", "Vindicator"],
      "factions": ["Thousand Sons"]
    },
    {
      "id": "9262f9fe-d276-5924-8816-9e200656a466",
      "name": "Tzaangor Enlightened",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Aviarch", "2-5 Enlightened"],
      "loadout": "Every model is equipped with: divining spear.",
      "wargear": [
        "Any number of models can each have their divining spear replaced with one of the following: ◦ 1 autopistol and 1 chainsword ◦  1 fatecaster greatbow and 1 close combat weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "45",
          "active": true
        },
        {
          "models": "6",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Malign Trickery",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of any enemy units, it can make a Normal move of up to D6\" as if it were your Movement phase.",
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
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Tzaangor Enlightened",
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
              "name": "Autopistol",
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
              "name": "Fatecaster greatbow",
              "keywords": ["lethal hits", "precision"],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Divining spear",
              "keywords": ["lance", "precision"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Fly",
        "Chaos",
        "Tzeentch",
        "Tzaangor Enlightened"
      ],
      "factions": ["Thousand Sons"],
      "leadBy": ["Tzaangor Shaman"]
    },
    {
      "id": "867d4f01-a499-5f02-ae56-be3461285c68",
      "name": "Tzaangor Shaman",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Tzaangor Enlightened ■ Tzaangors",
      "composition": ["1 Tzaangor Shaman"],
      "loadout": "This model is equipped with: mutating orbs; Shaman’s stave.",
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
        "faction": ["Cabal of Sorcerers 1"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dark Blessing (Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Bestial Prophet",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
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
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Tzaangor Shaman",
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
              "name": "Mutating orbs",
              "keywords": ["blast", "devastating wounds", "psychic"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "9",
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
              "name": "Shaman’s stave",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Fly",
        "Psyker",
        "Chaos",
        "Tzeentch",
        "Tzaangor Shaman"
      ],
      "factions": ["Thousand Sons"],
      "leads": {
        "units": ["Tzaangor Enlightened", "Tzaangors"],
        "extra": ""
      }
    },
    {
      "id": "e6a01d5b-aafa-5195-9052-45eae4dadbbe",
      "name": "Tzaangors",
      "source": "40k-10e",
      "faction_id": "TS",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Twistbray", "9-19 Tzaangors"],
      "loadout": "Every model is equipped with: Tzaangor blades.",
      "wargear": [
        "Any number of models can each have their Tzaangor blades replaced with: ◦ 1 autopistol and 1 chainsword",
        "1 Tzaangor not equipped with a herd banner can be equipped with 1 brayhorn.",
        "1 Tzaangor not equipped with a brayhorn can be equipped with 1 herd banner."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "65",
          "active": true
        },
        {
          "models": "20",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Herd Banner",
            "description": "You can re-roll Battle-shock tests taken for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Brayhorn",
            "description": "You can re-roll Advance and Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Relic Hunters",
            "description": "At the end of your Command phase, roll one D6 for each objective marker you control that has one or more units from your army with this ability within range of it: for each 4+, you gain 1 Cabal point.",
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
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Tzaangors",
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
              "name": "Autopistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Chainsword",
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
              "name": "Tzaangor blades",
              "keywords": [],
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
      "keywords": ["Infantry", "Battleline", "Chaos", "Tzeentch", "Tzaangors"],
      "factions": ["Thousand Sons"],
      "leadBy": ["Tzaangor Shaman"]
    }
  ],
  "colours": {
    "banner": "#0b3645",
    "header": "#185862"
  }
}
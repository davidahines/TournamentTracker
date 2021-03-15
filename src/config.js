const match_states =[
    {
        "_id": "STATE_0",
        "name": "Win"
    },
    {
        "_id": "STATE_1",
        "name": "Loss"
    },
    {
        "_id": "STATE_2",
        "name": "Draw"
    }
]

const RULE_LEVEL_REGULAR = 0;
const RULE_LEVEL_COMPETITIVE = 1;
const RULE_LEVEL_PROFESSIONAL = 2;

const rules_enforcement_levels = [
    {
        "_id": "RULE_LEVEL_REGULAR",
        name: "Regular"
    },
    {
        "_id": "RULE_LEVEL_COMPETITIVE",
        name: "Competitive"
    },
    {
        "_id": "RULE_LEVEL_PROFESSIONAL",
        name: "Professional"
    }
]

const event_types = [
    {
        "_id": "EVENT_0",
        "name": "Eternal Weekend",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_COMPETITIVE]
    },
    {
        "_id": "EVENT_1",
        "name": "Friday Night Magic",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_REGULAR]
    },
    {
        "_id": "EVENT_2",
        "name": "Grand Prix Day 1",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_COMPETITIVE]
    },
    {
        "_id": "EVENT_3",
        "name": "Grand Prix Day 2",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_COMPETITIVE]
    },
    {
        "_id": "EVENT_4",
        "name": "Grand Prix Trials",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_COMPETITIVE]
    },
    {
        "_id": "EVENT_5",
        "name": "Draft Weekend",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_REGULAR]
    },
    {
        "_id": "EVENT_6",
        "name": "Prerelease",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_REGULAR]
    },
    {
        "_id": "EVENT_7",
        "name": "Players Tour",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_PROFESSIONAL]
    },
    {
        "_id": "EVENT_8",
        "name": "Players Tour Finals",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_PROFESSIONAL]
    },
    {
        "_id": "EVENT_9",
        "name": "Players Tour Qualifiers",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_COMPETITIVE]
    },
    {
        "_id": "EVENT_10",
        "name": "Magic Premier Series",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_COMPETITIVE]
    },
    {
        "_id": "EVENT_11",
        "name": "WPN Qualifiers",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_COMPETITIVE]
    },
    {
        "_id": "EVENT_12",
        "name": "WPN Preliminary Events",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_COMPETITIVE]
    },
    {
        "_id": "EVENT_13",
        "name": "World Championship",
        "rules_level": rules_enforcement_levels[RULE_LEVEL_PROFESSIONAL]
    },
]

const FORMAT_TYPE_CONSTRUCTED = 0;
const FORMAT_TYPE_LIMITED = 1;
const FORMAT_TYPE_SANCTIONED_MULTIPLAYER = 2;

const official_formats = [
    {
        id: "FORMAT_"+FORMAT_TYPE_CONSTRUCTED,
        type: "Constructed",
        formats: [
            "Standard",
            "Modern",
            "Pioneer",
            "Historic",
            "Legacy",
            "Vintage",
            "Pauper"
        ]
    },
    {
        id: "FORMAT_"+FORMAT_TYPE_LIMITED,
        type: "Limited",
        formats: [
            "Sealed Deck",
            "Booster Draft",
            "Rochester Draft",
        ]
    },
    {
        id: "FORMAT_"+FORMAT_TYPE_SANCTIONED_MULTIPLAYER,
        type: "Sanctioned Multiplayer",
        formats: [
            "Two-Headed Giant"
        ]
    }
];

const casual_formats = [
    {
        type: "Casual Constructed",
        formats: [
            "Peasant",
            "Frontier",
            "Singleton",
            "Tribal Wars",
        ]
    },
    {
        type: "Casual Limited",
        formats: [
            "Cube Draft",
            "Back Draft",
            "Reject Rare Draft",
            "Type 4",
        ]
    },
    {
        type: "Casual Multiplayer",
        formats: [
            "Free-For-All",
            "Assassin",
            "Emperor",
        ]
    },
    {
        type: "Variant",
        formats: [
            "Vanguard",
            "Planar Magic",
            "Archenemy",
            "Commander",
            "Brawl"
        ]
    },
    {
        type: "Other",
        formats: [
            "Other"
        ]
    }
]
const config = {
    "match_states": match_states,
    "event_types": event_types,
    "rules_enforcement_levels": rules_enforcement_levels,
    "official_formats": official_formats,
    "casual_formats": casual_formats
}

export default config;
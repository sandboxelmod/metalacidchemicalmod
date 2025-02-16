elements.hydrochloric_acid = {
    color: "#ffcc00",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1040,
    reactions: {
        "zinc": { "elem1": "zinc_chloride", "elem2": "hydrogen", "temp1": 0, "temp2": 0 },
        "magnesium": { "elem1": "magnesium_chloride", "elem2": "hydrogen", "temp1": 0, "temp2": 0 }
    }
};

elements.sulfuric_acid = {
    color: "#ff9900",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1830,
    reactions: {
        "zinc": { "elem1": "zinc_sulfate", "elem2": "hydrogen", "temp1": 0, "temp2": 0 },
        "magnesium": { "elem1": "magnesium_sulfate", "elem2": "hydrogen", "temp1": 0, "temp2": 0 }
    }
};

elements.zinc = {
    color: "#c0c0c0",
    behavior: behaviors.SOLID,
    category: "solids",
    density: 7135
};

elements.magnesium = {
    color: "#b0b0b0",
    behavior: behaviors.SOLID,
    category: "solids",
    density: 1738,
    reactions: {
        "oxygen": { "elem1": "magnesium_oxide", "temp1": 0 },
        "hydrochloric_acid": { "elem1": "magnesium_chloride", "elem2": "hydrogen", "temp1": 0, "temp2": 0 }
    }
};

elements.zinc_chloride = {
    color: "#e0e0e0",
    behavior: behaviors.SOLID,
    category: "compounds",
    density: 2830
};

elements.magnesium_chloride = {
    color: "#d0d0d0",
    behavior: behaviors.SOLID,
    category: "compounds",
    density: 2320
};

elements.zinc_sulfate = {
    color: "#e5e5e5",
    behavior: behaviors.SOLID,
    category: "compounds",
    density: 3120
};

elements.magnesium_sulfate = {
    color: "#dddddd",
    behavior: behaviors.SOLID,
    category: "compounds",
    density: 2660
};

elements.hydrogen = {
    color: "#ffff99",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 0.08988
};

elements.oxygen = {
    color: "#99ccff",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 1.429
};

elements.magnesium_oxide = {
    color: "#ffffff",
    behavior: behaviors.SOLID,
    category: "compounds",
    density: 3580
};

if (!elements) var elements = {};

elements.hydrochloric_acid = {
    color: "#99ccff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1040,
    reactions: {
        "zinc": { "elem1": "zinc_chloride", "elem2": "hydrogen" },
        "magnesium": { "elem1": "magnesium_chloride", "elem2": "hydrogen" }
    }
};

elements.sulfuric_acid = {
    color: "#ff9900",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1830,
    reactions: {
        "zinc": { "elem1": "zinc_sulfate", "elem2": "hydrogen" },
        "magnesium": { "elem1": "magnesium_sulfate", "elem2": "hydrogen" },
        "sodium_chloride": { "elem1": "hydrochloric_acid", "elem2": "sodium_bisulfate" }
    }
};

elements.zinc_chloride = {
    color: "#ccccff",
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 1360
};

elements.magnesium_chloride = {
    color: "#99bbff",
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 2150
};

elements.zinc_sulfate = {
    color: "#eeeeff",
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 1980
};

elements.magnesium_sulfate = {
    color: "#ddddff",
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 2660
};

elements.hydrogen = {
    color: "#ffff99",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 0.0899
};

elements.sodium_bisulfate = {
    color: "#ffcccc",
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 1200
};


import React from "react";

export const Improvements = {
	house: {
		costs: { lumber: 5, grain: 5, water: 5, sheep: 1, people: 0 },
		benefits: { people: 5 },
	},
	field: {
		costs: { lumber: 0, grain: 0, water: 2, sheep: 0, people: 1 },
		benefits: { grain: 10 },
	},
	pasture: {
		costs: { lumber: 0, grain: 2, water: 2, sheep: 0, people: 1 },
		benefits: { sheep: 5 },
	},
	lumberMill: {
		costs: { lumber: 0, grain: 0, water: 0, sheep: 0, people: 0 },
		benefits: { lumber: 10 },
	},
	well: {
		costs: { lumber: 2, grain: 0, water: 0, sheep: 0, people: 1 },
		benefits: { water: 10 },
	},
};


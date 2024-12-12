import React from "react";

export const Improvements = {
	house: {
		costs: { lumber: 5, grain: 5, water: 5, sheep: 1, people: 0 },
		benefits: { lumber: 0, grain: 0, water: 0, sheep: 0, people: 5 },
		icon: "./house.png"
	},
	field: {
		costs: { lumber: 0, grain: 0, water: 2, sheep: 0, people: 1 },
		benefits: { lumber: 0, grain: 10, water: 0, sheep: 0, people: 0 },
		icon: "./field.png"
	},
	pasture: {
		costs: { lumber: 0, grain: 2, water: 2, sheep: 0, people: 1 },
		benefits: { lumber: 0, grain: 0, water: 0, sheep: 5, people: 0 },
		icon: "./pasture.png",
	},
	lumberMill: {
		costs: { lumber: 0, grain: 0, water: 0, sheep: 0, people: 1 },
		benefits: { lumber: 10, grain: 0, water: 0, sheep: 0, people: 0 },
		icon: "./lumbermill.png"
	},
	well: {
		costs: { lumber: 2, grain: 0, water: 0, sheep: 0, people: 1 },
		benefits: { lumber: 0, grain: 0, water: 10, sheep: 0, people: 0 },
		icon: "./well.png"
	},
};


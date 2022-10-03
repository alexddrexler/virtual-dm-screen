export interface Monster {
  name: string,
  description: string,
  size: string,
  type: string,
  alignment: string,
  ability_scores: AbilityScores,
  armor_class: number,
  hit_points: number,
  hit_points_dice?: string,
  vulnerabilities: string[],
  resistances: string[],
  immunities: string[],
}

// export enum Size {
//   Null,
//   Tiny,
//   Small,
//   Medium,
//   Large,
//   Huge,
//   Gargantuan,
// }

// export enum Type {
//   Null,
//   Aberration,
//   Beast,
//   Celestial,
//   Construct,
//   Dragon,
//   Elemental,
//   Fey,
//   Fiend,
//   Giant,
//   Humanoid,
//   Monstrosity,
//   Ooze,
//   Plant,
//   Undead,
// }

// export enum Alignment {
//   Unaligned,
//   LawfulGood,
//   NeutralGood,
//   ChaoticGood,
//   LawfulNeutral,
//   Neutral,
//   ChaoticNeutral,
//   LawfulEvil,
//   NeutralEvil,
//   ChaoticEvil,
// }

// export enum DamageType {
//   Acid,
//   Bludgeoning,
//   Cold,
//   Fire,
//   Force,
//   Lightning,
//   Necrotic,
//   Piercing,
//   Poison,
//   Psychic,
//   Radiant,
//   Slashing,
//   Thunder,
// }

interface AbilityScores {
  str: number,
  dex: number,
  con: number,
  int: number,
  wis: number,
  cha: number,
}

export const SIZES = [
	'Tiny',
	'Small',
	'Medium',
	'Large',
	'Huge',
	'Gargantuan',
]

export const TYPES = [
	'Aberration',
	'Beast',
	'Celestial',
	'Construct',
	'Dragon',
	'Elemental',
	'Fey',
	'Fiend',
	'Giant',
	'Humanoid',
	'Monstrosity',
	'Ooze',
	'Plant',
	'Undead',
]

export const ALIGNMENTS = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil',
]

export const DEFAULT_DAMAGE_TYPES = [
	'acid',
	'bludgeoning',
	'cold',
	'fire',
	'force',
	'lightning',
	'necrotic',
	'piercing',
	'poison',
	'psychic',
	'radiant',
	'slashing',
	'thunder',
]

export interface OldMonster {
	name: string,
	description: string,
	short_description: ShortDescription,
	basic_details: BasicDetails,
	stats: Stats,
	additional_details: AdditionalDetails,
	traits: Trait[],
	actions: Action[],
}

interface ShortDescription {
	size: string,
	type: string,
	alignment: string,	
}

interface BasicDetails {
	armor_class: number,
	armor_class_detail?: string,
	hit_points: number,
	hit_points_detail: string,
	speed: string,	
}

interface Stats {
	str: number,
	dex: number,
	con: number,
	int: number,
	wis: number,
	cha: number,
}

interface AdditionalDetails {
	saving_throws?: string,
	skills?: string,
  damage_resistances?: string,
  damage_immunities?: string,
  damage_vulnerabilities?: string,
  condition_immunities?: string,
	senses?: string,
	languages?: string,
	challenge: string,
  xp: number
}

interface Trait {
	name: string,
	description: string
}

interface Action {
	name: string,
	description?: string,
	attack_type?: string,
	attack_details?: string,
	attack_hit?: number,
	attack_hit_details?: string,
}
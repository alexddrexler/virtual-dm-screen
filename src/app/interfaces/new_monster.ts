export interface Monster {
  name: string,
  size: Size,
  type: Type,
  alignment: Alignment,
  ability_scores: AbilityScores,
}

enum Size {
  Tiny = "TINY",
  Small = "SMALL",
  Medium = "MEDIUM",
  Large = "LARGE",
  Huge = "HUGE",
  Gargantuan = "GARGANTUAN",
}

enum Type {
  Aberration = "ABERRATION",
  Beast = "BEAST",
  Celestial = "CELESTIAL",
  Construct = "CONSTRUCT",
  Dragon = "DRAGON",
  Elemental = "ELEMENTAL",
  Fey = "FEY",
  Fiend = "FIEND",
  Giant = "GIANT",
  Humanoid = "HUMANOID",
  Monstrosity = "MONSTROSITY",
  Ooze = "OOZE",
  Plant = "PLANT",
  Undead = "UNDEAD",
}

enum Alignment {
  Unaligned = "UNALIGNED",
  LawfulGood = "LAWFUL GOOD",
  NeutralGood = "NEUTRAL GOOD",
  ChaoticGood = "CHAOTIC GOOD",
  LawfulNeutral = "LAWFUL NEUTRAL",
  Neutral = "NEUTRAL",
  ChaoticNeutral = "CHAOTIC NEUTRAL",
  LawfulEvil = "LAWFUL EVIL",
  NeutralEvil = "NEUTRAL EVIL",
  ChaoticEvil = "CHAOTIC EVIL",
}

interface AbilityScores {
  str: number,
  dex: number,
  con: number,
  int: number,
  wis: number,
  cha: number,
}

interface BasicStats {
  challenge_rating: string,  // String bc fractions. Should always be eval'd.
  prof_bonus: number,
  armor_class: number,
  hit_points: number,
  attack_bonus: number,

}
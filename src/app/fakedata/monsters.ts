import { Monster } from '../../interfaces/monster';

// export const MONSTERS: Monster[] = [
//   {
//     name: 'Banshee',
//     description: 'A banshee is the hateful spirit of a once-beautiful female elf. It appears as ' +
//                  'a luminous, wispy form that vaguely recalls its mortal features. A banshee\'s ' +
//                  'face is wreathed in a wild tangle of hair, and its body is clad in wispy rags ' +
//                  'that flutter and stream around it.\n' +
//                  'A banshee is forever bound to the place of its demise. If abhors mirrors, for ' +
//                  'it can\'t bear to see the horror of its undead existence.',
//     short_description: {
//       size: 'Medium',
//       type: 'undead',
//       alignment: 'chaotic evil',
//     },
//     basic_details: {
//       armor_class: 12,
//       hit_points: 58,
//       hit_points_detail: '(13d8)',
//       speed: '0 ft., fly 40 ft. (hover)',
//     },
//     stats: {
//       str: 1,
//       dex: 14,
//       con: 10,
//       int: 12,
//       wis: 11,
//       cha: 17,
//     },
//     additional_details: {
//       saving_throws: 'Wis +2, Cha +5',
//       damage_resistances: 'acid, fire, lightning, thunder; bludgeoning, piercing, and slashing ' +
//                           'from nonmagical attacks',
//       damage_immunities: 'cold, necrotic, poison',
//       condition_immunities: 'charmed, exhaustion, frightened, grappled, paralyzed, petrified, ' +
//                             'poisoned, prone, restrained',
//       senses: 'darkvision 60ft., passive Perception 10',
//       languages: 'Common, Elvish',
//       challenge: '4',
//       xp: 1100,
//     },
//     traits: [
//       {
//         name: 'Detect Life',
//         description: 'The banshee can magically snese the presence of creatures up to 5 miles ' +
//                      'away that aren\'t undead or constructs. She knows the direction they\'re ' +
//                      'in but not their exact locations.',
//       },
//       {
//         name: 'Incorporeal Movement',
//         description: 'The banshee can move through other creatures and objects as if they were ' +
//                      'difficult terrain. She takes 5 (1d10) force damage if she ends her turn ' +
//                      'inside an object.',
//       },
//     ],
//     actions: [
//       {
//         name: 'Corrupting Touch',
//         attack_type: 'Melee Spell Attack',
//         attack_details: '+4 to hit, reach 5 ft., one target.',
//         attack_hit: 12,
//         attack_hit_details: '(3d6 + 2) necrotic damage.',
//       },
//       {
//         name: 'Horrifying Visage',
//         description: 'Each non-undead creature within 60 feet of the banshee that can see her ' +
//                      'must succeed on a DC 13 Wisdom saving throw or be frightened for 1 ' +
//                      'minute. A frightened target can repeat the saving throw at the end of ' +
//                      'each of its turns, with disadvantage if the banshee is within line of ' +
//                      'sight, ending the effect on itself on a success. If a target\'s saving ' +
//                      'throw is successful or the effect ends for it, the target is immune to ' +
//                      'the banshee\'s Horrifying Visage for the next 24 hours.'
//       },
//       {
//         name: 'Wail (1/Day)',
//         description: 'The banshee releases a mournful wail, provided that she isn\'t in ' +
//                      'sunlight. This wail has no effect on constructs and undead. All other ' +
//                      'creatures within 30 feet of her that can hear her must make a DC 13 ' +
//                      'Constitution saving throw. On a failure, a creature drops to 0 hit ' +
//                      'points. On a success, a creature takes 10 (3d6) psychic damage.',
//       },
//     ],
//   },
//   {
//     name: 'Giant Rat',
//     description: 'Giant rats roam in packs through sewers, caves, and other dank places. They ' +
//                  'are often found in the company of wererats.',
//     short_description: {
//       size: 'Small',
//       type: 'beast',
//       alignment: 'unaligned',
//     },
//     basic_details: {
//       armor_class: 12,
//       hit_points: 7,
//       hit_points_detail: '(2d6)',
//       speed: '30 ft.',
//     },
//     stats: {
//       str: 7,
//       dex: 15,
//       con: 11,
//       int: 2,
//       wis: 10,
//       cha: 4,
//     },
//     additional_details: {
//       senses: 'darkvision 60ft., passive Perception 10',
//       challenge: '1/8',
//       xp: 25
//     },
//     traits: [
//       {
//         name: 'Keen Smell',
//         description: 'The rat has advantage on Wisdom (Perception) checks that rely on smell.',
//       },
//       {
//         name: 'Pack Tactics',
//         description: 'The rat has advantage on an attack roll against a creature if at least ' +
//                      'one of the rat\'s allies is within 5 feet of the creater and the ally ' +
//                      'isn\'t incapacitated.',
//       },
//     ],
//     actions: [
//       {
//         name: 'Bite',
//         attack_type: 'Melee Weapon Attack',
//         attack_details: '+4 to hit, reach 5 ft., one target.',
//         attack_hit: 4,
//         attack_hit_details: '(1d4+2) piercing damage.',
//       },
//     ],
//   },
// ];

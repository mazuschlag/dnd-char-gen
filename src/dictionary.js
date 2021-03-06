export default {
    charQuestions: {
        WELCOME: "Welcome to DnD Character Generator!",
        RACE: "What is the race of your character?",
        CLASS: "What is the class of your character?",
        ABILITY: "What are the ability scores of your character?",
        //BACKGROUND: "What is the background of your character?",
        NAME: "What is the name of your character?",
        END: "Congratulations! Here is your character:"
    },
    charOptions : {
        WELCOME: [],
        RACE: [
            {name: "Dwarf", 
            sub: "Dwarf Subtitle",
            info: "This is the info for a Dwarf" }, 
            {name: "Elf",
            sub: "Elf Subtitle",
            info: "This is the info for an Elf"}, 
            {name: "Halfling",
            sub: "Halfling Subtitle",
            info: "This is the info for a Halfling"}, 
            {name: "Human", 
            sub: "Human Subtitle",
            info: "This is the info for a Human"}, 
            /*{name: "Dragonborn",
            info: "This is the info for a Dragonborn"}, 
            {name: "Gnome",
            info: "This is the info for a Gnome"}, 
            {name: "Half-Elf",
            info: "This is the info for a Half-Elf"}, 
            {name: "Half-Orc",
            info: "This is the info for a Half-Orc"}, 
            {name: "Tiefling",
            info: "This is the info for a Tiefling"}*/],
        CLASS: [
            /*{name: "Barbarian",
            info: "This is the info for a Barbarian"}, 
            {name: "Bard",
            info: "This is the info for a Bard"},*/
            {name: "Cleric",
            sub: "Cleric Subtitle",
            info: "This is the info for a Cleric"}, 
            /*{name: "Druid", 
            info: "This is the info for a Druid"},*/ 
            {name: "Fighter",
            sub: "Fighter Subtitle",
            info: "This is the info for a Fighter"}, 
            /*{name: "Monk", 
            info: "This is the info for a Monk"},*/
            /*{name: "Paladin",
            info: "This is the info for a Paladin"}, 
            {name: "Ranger", 
            info: "This is the info for a Ranger"},*/
            {name: "Rogue",
            sub: "Rogue Subtitle",
            info: "This is the info for a Rogue"}, 
            /*{name: "Sorcerer",
            info: "This is the info for a Sorcerer"}, 
            {name: "Warlock",
            info: "This is the info for a Warlock"},*/ 
            {name: "Wizard", 
            sub: "Wizard Subtitle",
            info: "This is the info for a Wizard"}],
        BACKGROUND: [
            {name: "Acolyte",
            sub: "Acolyte Subtitle",
            info: "This is the info for an Acolyte"}, 
            /*{name: "Charlatan",
            info: "This is the info for a Charlatan"},*/
            {name: "Criminal",
            sub: "Criminal Subtitle",
            info: "This is the info for a Criminal"}, 
            /*{name: "Entertainer",
            info: "This is the info for an Entertainer"},*/
            {name: "Folk Hero",
            sub: "Folk Hero Subtitle",
            info: "This is the info for a Folk Hero"}, 
            /*{name: "Guild Artisan",
            info: "This is the info for a Guild Artisan"}, 
            {name: "Hermit",
            info: "This is the info for a Hermit"},*/ 
            {name: "Noble",
            sub: "Noble Subtitle",
            info: "This is the info for a Noble"}, 
            /*{name: "Outlander",
            info: "This is the info for an Outlander"},*/
            {name: "Sage",
            sub: "Sage Subtitle",
            info: "This is the info for a Sage"}, 
            /*{name: "Sailor", 
            info: "This is the info for a Sailor"},*/
            {name: "Soldier",
            sub: "Soldier Subtitle",
            info: "This is the info for a Soldier"}, 
            /*{name: "Urchin",
            info: "This is the info for an Urchin"}*/],
        ABILITY: [],
        NAME: [],
        END: []
    },
    nextComponent:{
        WELCOME: {step: 'RACE', type: 'PICK'},
        RACE: {step: 'CLASS', type: 'PICK'},
        CLASS: {step: 'ABILITY', type: 'ABILITY'},
        ABILITY: {step: 'BACKGROUND', type: 'PICK'},
        BACKGROUND: {step: 'NAME', type: 'TEXT'},
        NAME: {step: 'END', type: 'END'},
        END: {step: 'WELCOME', type: 'WELCOME'}
    }
};

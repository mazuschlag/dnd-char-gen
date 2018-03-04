export default {
    charQuestions: {
        WELCOME: "Welcome to DnD Character Generator!",
        RACE: "What is the race of your character?",
        CLASS: "What is the class of your character?",
        BACKGROUND: "What is the background of your character?",
        NAME: "What is the name of your character?",
        END: "Congratulations! Here is your character:"
    },
    charOptions : {
        WELCOME: [],
        RACE: ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"],
        CLASS: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
        BACKGROUND: ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin"],
        NAME: [],
        END: []
    },
    nextComponent:{
        WELCOME: {step: 'RACE', type: 'PICK'},
        RACE: {step: 'CLASS', type: 'PICK'},
        CLASS: {step: 'BACKGROUND', type: 'PICK'},
        BACKGROUND: {step: 'NAME', type: 'TEXT'},
        NAME: {step: 'END', type: 'END'},
        END: {step: 'WELCOME', type: 'WELCOME'}
    }
};

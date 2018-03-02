export default {
    charQuestions: {
        WELCOME: "Welcome to DnD Character Generator!",
        RACE: "What is the race of your character?",
        CLASS: "What is the class of your character?",
        NAME: "What is the name of your character?",
        END: "Congratulations! Here is your character:"
    },
    charOptions : {
        WELCOME: [],
        RACE: ["Human", "Elf"],
        CLASS: ["Barbarian", "Wizard"],
        NAME: [],
        END: []
    },
    nextComponent:{
        WELCOME: {step: 'RACE', type: 'PICK'},
        RACE: {step: 'CLASS', type: 'PICK'},
        CLASS: {step: 'NAME', type: 'TEXT'},
        NAME: {step: 'END', type: 'END'},
        END: {step: 'WELCOME', type: 'WELCOME'}
    }
};

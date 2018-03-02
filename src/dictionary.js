export default {
    charQuestions: {
        RACE: "What is the race of your character?",
        CLASS: "What is the class of your character?",
        NAME: "What is the name of your character?"
    },
    charOptions : {
        RACE: ["Human", "Elf"],
        CLASS: ["Barbarian", "Wizard"],
        NAME: []
    },
    nextComponent:{
        RACE: {step: 'CLASS', type: 'PICK'},
        CLASS: {step: 'NAME', type: 'TEXT'},
        NAME: {step: 'NONE', type: 'NONE'}
    }
};

import Assignments from "./Assignments.js"

export default {

    components: {
        Assignments
    },

    template: `
    <Assignments :assignments="assignments"/>
    `,

    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish project', complete: false},
                {id: 2, name: 'Turn in homework', complete: false},
                {id:3, name: 'Read chapter 4', complete: false}
            ]
        };
    },

}

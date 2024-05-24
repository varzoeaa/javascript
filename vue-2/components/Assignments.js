import AssignmentList from "./AssignmentList.js"

export default {
    components : {AssignmentList},

    template: `

    <assignment-list 
            :assignments="inProgressAssignments"
            title="In Progress">
    </assignment-list>

    <assignment-list 
            :assignments="completedAssignments"
            title="Completed">
    </assignment-list>
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

    methods: {
        toggle() {
            assignments.complete = !assignments.complete;
        }
    },

    computed: {

        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        },

        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        }
    }
}
import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components : {
        AssignmentList,
        AssignmentCreate
    },

    template: `

    <section class="flex gap-8">    <!-- space-y-6 is a tailwind class -->

    <assignment-list 
            :assignments="filters.inProgress"
            title="In Progress">
            <assignment-create @add="add"></assignment-create>
    </assignment-list>

    <div v-show="showCompleted">
        <assignment-list 
                :assignments="filters.completed"
                title="Completed"
                can-toggle
                @toggle="showCompleted = !showCompleted">
        </assignment-list>
    </div>


    </section>
    `,

    data() {
        return {
            assignments: [],
            showCompleted: true
        };
    },

    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },  

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            };
        },
    },

    methods: 
    {
        add(name) {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false
            });
        }

    },
}
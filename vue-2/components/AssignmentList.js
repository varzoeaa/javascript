import AssignmentListItem from './AssignmentListItem.js'
import AssignmentTags from './AssignmentTags.js'

export default {
    components: {
        AssignmentListItem,
        AssignmentTags
    },

    template: `
    <section v-show="assignments.length" class="w-60">

    <div class="flex justify-between items-start">
        <h2 class="font-bold mb-2">
        {{ title }}

        <span>({{ assignments.length }})</span>

        </h2>         <!-- so its dynamic -->
    
        <button 
            v-show="canToggle"
            @click="$emit('toggle')">&times;</button>

    </div>

       <assignment-tags 
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(assignments => assignments.tag)" >
        </assignment-tags>


        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <assignment-list-item
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment = "assignment"
            </assignment-list-item>
        </ul>

        <slot></slot>

   </section>
   `,

   props: {
    assignments: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    canToggle: {
        type: Boolean,
        default: false
    }

   },

   data() {
        return {
            currentTag: 'all'
        }
   },

   computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(assignment => assignment.tag === this.currentTag);
            }
        }
   }

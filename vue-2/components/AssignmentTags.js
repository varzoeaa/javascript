export default {
    template: `
    <div class="flex gap-2">

        <button @click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                :key="tag" 
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500' : tag === currentTag,
                }">

                {{ tag }}
        </button>

    </div>
    `,

    props: {
        initialTags: {
            type: Array,
            required: true
        },
        currentTag: {       // default prop name for v-model
            type: String,
            required: true
        }
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    },
    }

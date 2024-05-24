export default {

    mounted() {
        alert('hello')
    },
    
    data() {
        return {
            
        }
    },
    
    template:  `
        <button 
                :class="{
                    'rounded border px-5 py-2 disabled:cursor-not-allowed' : true,
                    'bg-gray-200 hover:bg-gray-400' : type === 'muted',
                    'bg-blue-200 hover:bg-blue-400' : type === 'primary',
                    'bg-purple-200 hover:bg-purple-400' : type === 'secondary',
                    'is-loading' : processing
                }" 
                :disbaled = "processing"> 
            <slot />
        </button>
    `,
    
    props : {
        type : {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    }
}


// js module for exporting the component
export default {
    template: `
    <div class="border border-gray-500 bg-slate-900 p-4 rounded-lg max-w-xs mx-auto"> <!--container for the calculator-->


        <div class="bg-gray-900 mb-4"> <!--display-->
            <input type="text" 
                    v-model="current" 
                    class="w-full h-15 text-4xl text-right bg-black text-white p-2" readonly>
        </div>


        <div class="flex justify-between mb-2"> <!-- first row-->
            <button @click="clear" class="w-2/3 h-10 bg-gray-700 text-white mr-2">DELETE</button>
            <button @click="setOperation('/')" class="w-1/3 h-10 bg-gray-700 text-white">/</button>
        </div>


        <div class="flex justify-between mb-2"> <!-- second row-->
            <button @click="addNumber(7)" class="w-1/4 h-10 bg-gray-700 text-white mr-2">7</button>
            <button @click="addNumber(8)" class="w-1/4 h-10 bg-gray-700 text-white mr-2">8</button>
            <button @click="addNumber(9)" class="w-1/4 h-10 bg-gray-700 text-white mr-2">9</button>
            <button @click="setOperation('*')" class="w-1/4 h-10 bg-gray-700 text-white">*</button>
        </div>


        <div class="flex justify-between mb-2"> <!-- third row-->
            <button @click="addNumber(4)" class="w-1/4 h-10 bg-gray-700 text-white mr-2">4</button>
            <button @click="addNumber(5)" class="w-1/4 h-10 bg-gray-700 text-white mr-2">5</button>
            <button @click="addNumber(6)" class="w-1/4 h-10 bg-gray-700 text-white mr-2">6</button>
            <button @click="setOperation('+')" class="w-1/4 h-10 bg-gray-700 text-white">+</button>
        </div>


        <div class="flex justify-between mb-2"> <!-- fourth row-->
            <button @click="addNumber(1)" class="w-1/4 h-10 bg-gray-700 text-white mr-2">1</button>
            <button @click="addNumber(2)" class="w-1/4 h-10 bg-gray-700 text-white mr-2">2</button>
            <button @click="addNumber(3)" class="w-1/4 h-10 bg-gray-700 text-white mr-2">3</button>
            <button @click="setOperation('-')" class="w-1/4 h-10 bg-gray-700 text-white">-</button>
        </div>


        <div class="flex justify-between mb-2"> <!-- fifth row-->
            <button @click="addNumber(0)" class="w-2/4 h-10 bg-gray-700 text-white mr-2">0</button>
            <button @click="calculate" class="w-2/4 h-10 bg-gray-700 text-white">=</button>
        </div>

    </div>
    `,

    data() {
        return {
            result: 0,
            current: '',
            operation: null
        }
    },

    methods: {
        addNumber(number) {
            this.current = this.current.toString() + number.toString();
        },

        setOperation(operation) {
            if (this.current === '') return;
            this.result = parseFloat(this.current);
            this.current = '';
            this.operation = operation;
        },

        calculate() {
            if (this.operation && this.current !== '') {
                if (this.operation === '+') {
                    this.result += parseFloat(this.current);
                } else if (this.operation === '-') {
                    this.result -= parseFloat(this.current);
                } else if (this.operation === '*') {
                    this.result *= parseFloat(this.current);
                } else if (this.operation === '/') {
                    this.result /= parseFloat(this.current);
                }
                this.current = this.result.toString();
                this.operation = null;
            }
        },

        clear() {
            this.current = '';
            this.result = 0;
            this.operation = null;
        }
    }
}

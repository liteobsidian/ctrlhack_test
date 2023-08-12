export const example = {
	data: () => ({
		price: 0,
		qty: 0,
		amount: 0,
		nonce: 0,
		base: '', // Имя первого изменённого параметра. Он становится опорным для вычислений
		timer: null,
		time: null,
		isLoading: false
	}),
	methods: {
		debounce(timeout, funcName, args) {
			this[`${funcName}args`] = args
			const current = Date.now()
			if (this.time && current - this.time < timeout) {
				clearTimeout(this.timer)
			} else this.time = Date.now()
			this.timer = setTimeout(() => this[funcName](...this[`${funcName}args`]), timeout)
		},
		input(name, evt) {
			const {value} = evt.target
			// this.addLog({type: `Input ${name}`, value})
			/**
			 * Чтобы не забивать список, отключил логгирование нажатий.
			 * Если это необходимо, можно раскомментировать строчку выше
			 */
			this.debounce(300, 'changeValue', [name, value])
		},
		changeValue(name, value) {
			this[name] = +value
			this.computeValues(name)
			this.addLog({type: `Change ${name}`, value})
		},
		computeValues(name) {
			const opposite = {
				price: 'qty',
				qty: 'price'
			}
			if (!this.base) this.base = name
			if (this.base === name) return
			if (this.base === 'amount') {
				this.amount = this.price * this.qty
				return
			}
			if (!this[opposite[this.base]]) {
				alert(`You can't divide by zero. Please enter ${this.base}`)
				return
			}
			this[this.base] = this.amount / this[opposite[this.base]]
		},
		async send() {
			this.isLoading = true
			this.nonce++
			this.addLog({
				type: 'Send',
				value: `Request: { nonce: ${this.nonce}, price: ${this.price} qty: ${this.qty} amount: ${this.amount} },
          Current state: ${JSON.stringify(await this.getLocalStorageState())}`
			})
			const result = await this.apiSave({nonce: this.nonce, price: this.price, qty: this.qty, amount: this.amount})
			this.addLog({type: 'Response', value: `${JSON.stringify(result)} Current state: ${JSON.stringify(await this.getLocalStorageState())}`})
			this.isLoading = false
		},
		async setDefaults() {
			const result = await this.getLocalStorageState()
			this.nonce = result.nonce
			this.price = result.price
			this.qty = result.qty
			this.amount = result.amount
		}
	},
	mounted() {
		this.setDefaults()
	}
}
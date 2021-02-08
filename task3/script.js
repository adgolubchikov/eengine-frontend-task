const Timer = {
	_sec: 0,
	secContainer: document.getElementById('sec'),
	sendContainer: document.getElementById('send'),
	formContainer: document.getElementById('form'),
	get sec() {
		return this._sec;
	},
	set sec(input) {
		if ((parseInt(input) == input) && (parseInt(input) >= 0)) {
			this._sec = parseInt(input);
		} else {
			this._sec = 5;
			return 5;
		}
		if (!this.editing) this.secContainer.value = this._sec;
		if (this._sec == 0) {
			clearInterval(this.interval);
			this.secContainer.setAttribute('disabled', 'disabled');
			this.formContainer.onsubmit = function () {
				return false;
			}
			this.sendContainer.value = 'Submit';
			this.formContainer.submit();
		} else {
			this.sendContainer.value = this._sec + ' sec';
		}
		return this._sec;
	},
	editing: false,
	interval: null,
	init: function () {
		const self = this;
		const initialSec = location.search.split('sec=');
		if ((initialSec.length == 2) && (initialSec[1] == parseInt(initialSec[1])) && (parseInt(initialSec[1]) > 0)) {
			this.sec = parseInt(initialSec[1]);
		} else {
			this.sec = 5;
		}
		this.interval = setInterval(() => self.sec--, 1000);

		this.secContainer.onkeyup = function () {
			if ((parseInt(self.secContainer.value) == self.secContainer.value) && (parseInt(self.secContainer.value) > 0)) {
				self.sec = self.secContainer.value;
			} else {
				alert('Is not positive integer');
				self.secContainer.focus();
			}
		};
		this.secContainer.onfocus = function () {
			self.editing = true;
		};
		this.secContainer.onblur = function () {
			self.editing = false;
		};
	},
	submit: function () {
		document.getElementById('sec').setAttribute('disabled', 'disabled');
		this.formContainer.setAttribute('onsubmit', 'return false;');
		this.sendContainer.value = 'Submit';
		this.formContainer.submit();
	}
};


Timer.init();

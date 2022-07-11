(function(window) {
	function GetAbsoluteLocationEx(element) {
		if (arguments.length != 1 || element == null) {
			return null;
		}
		var elmt = element;
		var offsetTop = elmt.offsetTop;
		var offsetLeft = elmt.offsetLeft;

		while (elmt = elmt.offsetParent) {
			// add this judge   
			if (elmt.style.position == 'absolute' || elmt.style.position == 'relative' || (elmt.style.overflow !=
					'visible' && elmt.style.overflow != '')) {
				break;
			}
			offsetTop += elmt.offsetTop;
			offsetLeft += elmt.offsetLeft;
		}
		return {
			Y: offsetTop,
			X: offsetLeft
		};
	}

	function enter(index, direction) {
		var cubes = document.querySelectorAll('.cube');
		var cube = cubes[index];
		var front = cube.querySelector('.cube__side--front');
		var cube_xy = GetAbsoluteLocationEx(cube);
		var w = cube.clientWidth;
		var h = cube.clientHeight;
		var center_x = cube_xy.X + w / 2;
		var center_y = cube_xy.Y + h / 2;
		var client_x = center_x;
		var client_y = center_y;

		if (typeof(direction) == 'undefined') {
			direction = Math.floor(Math.random() * 4);
		}

		switch (direction) {
			case 'top':
			case 0:
				client_y = cube_xy.Y;
				break;
			case 'bottom':
			case 1:
				client_y = cube_xy.Y + h;
				break;
			case 'left':
			case 2:
				client_x = cube_xy.X;
				break;
			case 'right':
			case 3:
				clinet_x = cube_xy.X + w;
				break;
		}
		e = document.createEvent('MouseEvents');
		e.initMouseEvent('mouseenter', true, true, window, 0, client_x, client_y, client_x, client_y, false,
			false, false, false, null, null);
		front.dispatchEvent(e);
		return e
	}

	function leave(index, e0) {
		var cubes = document.querySelectorAll('.cube');
		var cube = cubes[index];
		var front = cube.querySelector('.cube__side--front');
		e = document.createEvent('MouseEvents');
		if (typeof(e0) == 'undefined') {
			e0 = {
				pageX: 0,
				pageY: 0,
				clinetX: 0,
				clinetY: 0
			}
		}
		e.initMouseEvent('mouseleave', true, true, window, 0, e0.clinetX, e0.clientY, e0.pageX, e0.pageY, false,
			false, false, false, null, null);
		front.dispatchEvent(e);
	}

	function CalendarManager(audio) {
		this.audio = audio;
		this.cur = null;
		this.last = this.cur
		this.cur_event = null;
		var that = this;
		this.ontimeupdateFn = function() {
			var audio = that.audio;
			var curTime = audio.currentTime;
		}
		this.audio.addEventListener('timeupdate', this.ontimeupdateFn)
	}

	CalendarManager.prototype.clear() {
		if (this.cur != null) {
			leave(this.cur, this.cur_event)
		}
		this.cur = null
		this.cur_event = null
	}

	CalendarManager.prototype.out(day) {
		var index = day - 1
		if (this.cur == index) {
			return;
		}
		this.clear()
		this.cur_event = enter(index)
		this.last = this.cur = index
	}

	CalendarManager.prototype.__
})(window);

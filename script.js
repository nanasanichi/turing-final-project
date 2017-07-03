(function($){
	$(document).ready(function(){
		var navigator = new Navigator({
			carousel: '#carousel',
			nextButton: '.arrow.next',
			prevButton: '.arrow.prev',
			shuffle: true
		});
		navigator.init();
	});
	function Navigator(config) {

		this.carousel = $(config.carousel);
		this.nextButton = $(config.nextButton);
		this.prevButton = $(config.prevButton);
		this.chunkSize = config.chunkSize || 4;
		this.shuffle = config.shuffle || false;

		this._items = $(config.carousel + ' li');
		this._chunks = [];
		this._visibleChunkIndex = 0;


		this.init = function () {
			if (this.shuffle) {
				this._items.removeClass('visible');
				this._items.sort(function() { return 0.5 - Math.random() });
				this._items.slice(0, this.chunkSize).addClass('visible');
			}

			//split array of items into chunks
			this._chunks = this._splitItems(this._items, this.chunkSize);

			var self = this;

			//Set up the event handlers for previous and next button click
			self.nextButton.on('click', function(e) {
				self.handleNextClick(e);
			}).show();

			self.prevButton.on('click', function(e) {
				self.handlePrevClick(e);
			});

			// Showing the carousel on load
			self.carousel.addClass('active');
		}

		//handle all code when previous button is clicked
	  this.handlePrevClick = function (e) {

			e.preventDefault();

			//as long as there are some items before the current visible ones, show the previous ones
			if (this._chunks[this._visibleChunkIndex - 1] !== undefined) {
				this.showPrevItems();
			}
		};

		//handle all code when next button is clicked
		this.handleNextClick = function(e) {

			e.preventDefault();

			//as long as there are some items after the current visible ones, show the next ones
			if (this._chunks[this._visibleChunkIndex + 1] !== undefined) {
				this.showNextItems();
			}
		};

		//show the next 3 items
		this.showNextItems = function() {

			//remove visible class from current visible chunk
			$(this._chunks[this._visibleChunkIndex]).removeClass('visible');

			//add visible class to the next chunk
			$(this._chunks[this._visibleChunkIndex + 1]).addClass('visible');

			//update the current visible chunk
			this._visibleChunkIndex++;

			//see if the end of the list has been reached.
			this._checkForEnd();

		};

		//show the previous 3 items
		this.showPrevItems = function() {

			//remove visible class from current visible chunk
			$(this._chunks[this._visibleChunkIndex]).removeClass('visible');

			//add visible class to the previous chunk
			$(this._chunks[this._visibleChunkIndex - 1]).addClass('visible');

			//update the current visible chunk
			this._visibleChunkIndex--;

			//see if the beginning of the carousel has been reached.
			this._checkForBeginning();

		};


		//Determine if the previous button should be shown or not.
		this._checkForBeginning = function() {
			this.nextButton.show(); //the prev button was clicked, so the next button can show.

			if (this._chunks[this._visibleChunkIndex - 1] === undefined) {
				this.prevButton.hide();
			}
			else {
				this.prevButton.show();
			}
		};

		//Determine if the next button should be shown or not.
		this._checkForEnd = function() {
			this.prevButton.show(); //the next button was clicked, so the previous button can show.

			if (this._chunks[this._visibleChunkIndex + 1] === undefined) {
				this.nextButton.hide();
			}
			else {
				this.nextButton.show();
			}
		};


		//This function takes an array "items" and splits it into subArrays each with a maximum length of "chunk".
		this._splitItems = function(items, chunk) {

			var splitItems = [],
			i = 0;

			while (items.length > 0) {
				splitItems[i] = items.splice(0, chunk);
				i++;
			}

			return splitItems;

		};

	}

})(jQuery);

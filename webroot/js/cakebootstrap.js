/*
* Twitter Bootstrappifier for CakePHP 
*
* Author: Mutlu Tevfik Kocak
*
* CakePHP Twitter Bootstrappifier
*
* Selects all con twitter Bootstrap incompatible form and buttons,
* and converts them into pretty Twitter Bootstrap style.
*
*/

var Bootstrappifier = {
	straps		: {
		cake	: function() {
			//All submit forms wrapped to div.action
			$('input[type="submit"][class!="btn btn-primary"]').wrap('<div class="actions" />');
			//All submit forms converted to primary button
			$('input[type="submit"]').addClass('btn btn-primary');
			//All index actions converted into pretty buttons
			$('td[class="actions"] > a[class!="btn"]').addClass('btn');

			//All (div.inputs) with default FormHelper style (div.input > label ~ input)
			//converted into Twitter Bootstrap Style (div.clearfix > label ~ div.input)

			$('div[class!="input added"].input').removeClass().addClass('clearfix');
			$('div.clearfix > label ~ input').wrap('<div class="input added" />');
			$('div.clearfix > label ~ select').wrap('<div class="input added" />');
			$('div.clearfix > label ~ textarea').wrap('<div class="input added" />');
		},
		error	: function() {
			$('.message').addClass('alert alert-info');
			$('.flash_success').addClass('alert alert-success');
			$('.flash_warning').addClass('alert');
			$('.error-message').addClass('alert alert-error');
			//$('div.error-message').append($('div.error-message').replaceWith('<span class="help-inline">'+$('div.error-message').text()+'</span'));
			$('.form-error').addClass('error');
			$('.form-error').closest('.clearfix').addClass('error');
		}
	},
	getStraps	: function() {
		var strapsList = new Array();
		$.each(this.straps, function(key, name) {
			strapsList.push(key);
		});
		strapsList = strapsList.join(',');
		return typeof(strapsList == 'array') ? strapsList : new Array();
	},
	load		: function(straps) {
		straps = typeof(straps !== 'string') ? this.getStraps() : straps;
		return $.each(straps.split(','), function(key, value) {
			if(typeof(Bootstrappifier.straps[value] === 'function')) {
				var strapFunction = Bootstrappifier.straps[value];
				strapFunction();
			}
		}) ? true : false;
	},
}
//Styling start when document loads
$(document).ready(function(){
	Bootstrappifier.load();
});
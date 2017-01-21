/*!
*
* ColorPick jQuery plugin
* https://github.com/philzet/ColorPick.js
*
* Copyright (c) 2017 Phil Zet (a.k.a. Philipp Zakharchenko)
* Licensed under the MIT License
*
*/

(function( $ ) {
 
    $.fn.colorPick = function(config) {
 
        return this.each(function() {
            new $.colorPick(this, config || {});
        });
 
    };
    
    $.colorPick = function (element, options) {
        options = options || {};
        this.options = $.extend({}, $.fn.colorPick.defaults, options);
        if(options.str) {
            this.options.str = $.extend({}, $.fn.colorpickr.defaults.str, options.str);
        }
        this.color   = this.options.initialColor;
        this.element = $(element);
        return this.element.hasClass(this.options.pickrclass) ? this : this.init();
    };
    
    $.fn.colorPick.defaults = {
        'initialColor': '#3498db',
        'allowRecent': true,
        'recentMax': 5,
        'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1", "#bdc3c7", "#95a5a6", "#7f8c8d"],
        'onColorSelected': function() {
            this.element.css({'backgroundColor': this.color, 'color': this.color});
        }
    };
    
    $.colorPick.prototype = {
        
        init : function(){
            var self = this;
            var o = this.options;
            
            $.proxy($.fn.colorPick.defaults.onColorSelected, this)();
            
            this.element.click(function(event) {
                event.preventDefault();
                self.show(event.pageX, event.pageY);
                
                $('.colorPickButton').click(function(event) {
					self.color = $(event.target).attr('hexValue');
					self.appendToStorage($(event.target).attr('hexValue'));
					self.hide();
					$.proxy(self.options.onColorSelected, self)();
					return false;
            	});
                
                return false;
            }).blur(function() {
                self.element.val(self.color);
                $.proxy(self.options.onColorSelected, self)();
                self.hide();
                return false;
            });
            
            $(document).click(function(event) {
                self.hide();
                return true;
            });
            
            return this;
        },
        
        appendToStorage: function(color) {
	        if ($.fn.colorPick.defaults.allowRecent === true) {
	        	var storedColors = JSON.parse(localStorage.getItem("colorPickRecentItems"));
				if (storedColors == null) {
		     	    storedColors = [];
	        	}
				if ($.inArray(color, storedColors) == -1) {
		    	    storedColors.unshift(color);
					storedColors = storedColors.slice(0, $.fn.colorPick.defaults.recentMax)
					localStorage.setItem("colorPickRecentItems", JSON.stringify(storedColors));
	        	}
	        }
        },
        
        show: function(left, top) {
	        $("body").append('<div id="colorPick" style="display:none;top:' + top + 'px;left:' + left + 'px"><span>Default palette:</span></div>');
	        jQuery.each($.fn.colorPick.defaults.palette, (index, item) => {
		        $("#colorPick").append('<div class="colorPickButton" hexValue="' + item + '" style="background:' + item + '"></div>');
			});
			if ($.fn.colorPick.defaults.allowRecent === true) {
				$("#colorPick").append('<span style="margin-top:5px">Recent:</span>');
				if (JSON.parse(localStorage.getItem("colorPickRecentItems")) == null || JSON.parse(localStorage.getItem("colorPickRecentItems")) == []) {
					$("#colorPick").append('<div class="colorPickButton colorPickDummy"></div>');
				} else {
					jQuery.each(JSON.parse(localStorage.getItem("colorPickRecentItems")), (index, item) => {
		        		$("#colorPick").append('<div class="colorPickButton" hexValue="' + item + '" style="background:' + item + '"></div>');
					});
				}
			}
	        $("#colorPick").fadeIn(200);
	    },
	    
	    hide: function() {
		    $( "#colorPick" ).fadeOut(200, function() {
			    $("#colorPick").remove();
			    return this;
			});
        },
        
    };
 
}( jQuery ));
 
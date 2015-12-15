define (['backbone'], function (Backbone) {
	var AppRouter =  Backbone.Router.extend({
		
		routes: {
			':site/'				: 'listView',
			':site/jigar'			: 'classDedicated'
		},
			
		initialize : function () {
			this.handleHREF();
		},

		listView : function () {
			indexViewPath = 'views/landing_page';
			this.startIndexView(indexViewPath);
		},

		classDedicated: function () {
			this.startIndexView('views/class_dedicated_page');
		},

		handleHREF: function () {
			var self = this;
			$(document).on('click', 'a[href^="/"]', function(e) {
				var href, url;
				href = $(e.currentTarget).attr('href');
				url = href.replace(/^\//, '').replace('\#\!\/', '');
				self.navigate(url, {
					trigger: true
				});
				return false;
			});
		},

		startIndexView: function(path, options, callback) {
			var self = this;
			if (options == null) {
			  options = {};
			}
			require([path], function(IndexView) {
				self.prevView = self.currentView;
				self.currentView = new IndexView(options);
			});
		}
	});
	return AppRouter
});
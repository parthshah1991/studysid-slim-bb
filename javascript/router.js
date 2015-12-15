define (['backbone'], function (Backbone) {
	var AppRouter =  Backbone.Router.extend({
		
		routes: {
			''					: 'indexView',
			':site/jigar'		: 'jigarLanding'
		},
			
		initialize : function () {
			this.handleHREF();
			this.startIndexView('views/landing_page');
		},

		indexView : function () {
			indexViewPath = 'views/home/homePage';
			this.startIndexView(indexViewPath);
		},

		jigarLanding: function () {
			this.startIndexView('views/jigar_landing_page');
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
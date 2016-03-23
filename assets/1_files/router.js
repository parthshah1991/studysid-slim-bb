define (['backbone',
	'models/class_model'
	], function (Backbone, ClassCollection) {
	var AppRouter =  Backbone.Router.extend({
		
		routes: {
			':site/'							: 'listView',
			':site/:id'							: 'classDedicated'
		},
			
		initialize : function () {
			this.classes = new ClassCollection([{featured: true, id:1}, {featured: false, id:2}]);
			this.handleHREF();
		},

		listView : function () {
			indexViewPath = 'views/landing_page';
			this.startIndexView(indexViewPath, {classes : this.classes});
		},

		classDedicated: function (site, id) {
			this.startIndexView('views/class_dedicated_page', {model : this.classes.findWhere({id : +id})});
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
				if (self.prevView) {
					self.prevView.destroy();

				}
				self.currentView = new IndexView(options);
			});
		}
	});
	return AppRouter
});
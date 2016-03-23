define(['backbone', 'views/header', 'views/list_container_view'], function(Backbone, HeaderView, BodyView) {
	var MainView = Backbone.View.extend({

		initialize: function(options) {
			this.options = options;
			this.render();
		},

		render: function () {
			this.headerView = new HeaderView()
			this.BodyView = new BodyView({classes : this.options.classes})
		},
		destroy: function () {
			this.headerView.destroy();
			this.BodyView.destroy();
			this.remove();
		}
  	});
  	return MainView;
});
define(['backbone', 'views/header', 'views/main_body_view'], function(Backbone, HeaderView, BodyView) {
	var MainView = Backbone.View.extend({

		initialize: function() {
			this.render();
		},

		render: function () {
			this.headerView = new HeaderView()
			this.BodyView = new BodyView()
		}
  	});
  	return MainView;
});
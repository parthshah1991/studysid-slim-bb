define(['backbone', 
	'views/header',
	'text!templates/class_dedicated.html'
	], function(Backbone, HeaderView, tpl) {
	var ClassDedicated = Backbone.View.extend({

		template: tpl,

		initialize: function(options) {
			this.options = options;
			this.render();
		},

		render: function () {
			this.headerView = new HeaderView()
			$('.body').append(_.template(this.template)(this.model.toJSON()));
			this.setElement('#main-container');
		}
	});
	return ClassDedicated;
});
define(['backbone', 'text!templates/header_template.html'], function(Backbone, tpl) {
	var HeaderView = Backbone.View.extend({
	
		template : tpl,

		initialize: function() {
			this.render();
		},

		render: function () {
			$('.body').append(this.template);
			this.setElement('#header')
		}
  	});
  	return HeaderView;
});
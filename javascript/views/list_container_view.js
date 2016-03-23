define([
	'backbone',
	'views/class_list_item',
	'text!templates/main_content.html'
	], function(Backbone, ClassListItem, tpl) {
	var MainView = Backbone.View.extend({
	
		template : tpl,

		childViews: null,

		initialize: function(options) {
			window.q = this;
			this.classes = options.classes;
			this.childViews = [];
			this.render();
		},

		render: function () {
			$('.body').append(_.template(this.template)({count: this.classes.length}));
			this.setElement('#main-container');
			this.renderChildren();
		},

		renderChildren: function () {
			var listContainer = this.$('.class-list-container');
			for (var index=0; index<this.classes.length; index++) {
				var view = new ClassListItem({model : this.classes.at(index)});
				listContainer.append(view.render());
				this.childViews.push(view);
			}
		},
		
		destroy: function () {
			for(var i=0; i<this.childViews.length; i++) {
				this.childViews[i].destroy();
			}
			this.remove();
		}
	});
	return MainView;
});
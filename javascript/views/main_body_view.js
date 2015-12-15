define([
	'backbone',
	'models/class_model',
	'views/class_list_item',
	'text!templates/main_content.html'
	], function(Backbone, ClassCollection, ClassListItem, tpl) {
	var MainView = Backbone.View.extend({
	
		template : tpl,

		childViews: null,

		initialize: function() {
			window.q = this;
			this.childViews = [];
			this.classes = new ClassCollection([{featured: true}, {featured: false}])
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
		}
	});
	return MainView;
});
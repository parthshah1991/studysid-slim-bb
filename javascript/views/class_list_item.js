define([
	'backbone',
	'index',
	'text!templates/class_item.html'
	], function(Backbone, Index, tpl) {
	var ClassItem = Backbone.View.extend({
	
		template : tpl,

		events: {
			'click .likes-icon'		:   'incrementLike',
			'click'					: 	'gotoDedicatedPage'
		},

		className: 'class-container',

		initialize: function() {
			
		},

		render: function () {
			this.$el.append(_.template(this.template)(this.model.toJSON()));
			return this.$el;
		},

		incrementLike: function (e) {
			var currentLikes = this.model.get('likes') + 1;
			this.model.set('likes', currentLikes);
			this.$('.likes-value').text(currentLikes);
			e.preventDefault();
			e.stopPropogation();
		},

		gotoDedicatedPage: function () {
			id = this.model.get("id")
			Index.getRouter().navigate('studysid/1' ,{trigger:true, replace:false});
		},

		destroy: function () {
			this.remove();
		}
	});
	return ClassItem;
});
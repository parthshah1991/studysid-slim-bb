define([
	'backbone',
	'index',
	'text!templates/class_item.html'
	], function(Backbone, Index, tpl) {
	var ClassItem = Backbone.View.extend({
	
		template : tpl,

		events: {
			'click .likes-icon'		:   'incrementLike'
		},

		className: 'class-container',

		initialize: function() {
			
		},

		render: function () {
			this.$el.append(_.template(this.template)(this.model.toJSON()));
			return this.$el;
		},

		incrementLike: function () {
			var currentLikes = this.model.get('likes') + 1;
			this.model.set('likes', currentLikes);
			this.$('.likes-value').text(currentLikes);
			Index.getRouter().navigate('studysid/jigar',{trigger:true, replace:false});
		}
	});
	return ClassItem;
});
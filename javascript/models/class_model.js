define(['backbone'], function(Backbone) {
	var ClassModel = Backbone.Model.extend({

		defaults: function () {
			var url = 'assets/class_imgs/kumar_classes.jpg'
			return {
				name: 'Kumar Classes',
				pic_url: url,
				fees: 'Rs. 3000',
				subjects: [
					'Science',
					'Maths',
					'Physics',
					'Chemistry'
				],
				likes: 20,
				address: 'Grant road',
				featured: true,
				disc_text: 'Rs 100 off',
				phone_number: '9920065087'
			}
		},

		initialize: function() {
			
		}
	});

	var ClassCollection = Backbone.Collection.extend({

		model: ClassModel,

		initialize: function() {
			
		}
	});

	return ClassCollection;
});
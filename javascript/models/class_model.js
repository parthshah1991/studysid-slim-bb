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
				locality: 'Grant road',
				address: '102, Grant road, Sharti Building, Under the flyover, mumbai 400007',
				featured: true,
				disc_text: 'Rs 100 off',
				phone_number: '9920065087',
				
				location: {
					latitude: 73,
					longitude: 18
				},
				carousel_images: [url, url, url],
				subjectDetails: {
					'Science' 	: {
						'timings' 	: ['1pm - 3pm', '8pm - 10pm'],
						'fees'		: 3000	
					},
					'Maths'		: {
						'timings' 	: ['3pm - 5pm', '9pm - 11pm'],
						'fees'		: 5000	
					},
					'Physics'	: {
						'timings' 	: ['5pm - 7pm', '9pm - 11pm'],
						'fees'		: 2000	
					},
					'Chemistry'	: {
						'timings' 	: ['5pm - 7pm', '9pm - 11pm'],
						'fees'		: 3000	
					}
				},
				additional_details: [
					{
						label : 'Personal tuitions',
						text: 'Yes'
					},
					{
						label: 'Home Tuitions',
						text: 'No'
					},
					{
						label: 'Batch Strength',
						text: 30
					},
					{
						label: 'Group Discounts',
						text: 'negotiate'
					},
					{
						label: 'Days',
						text: 'Weekends and Weekdays'
					},
					{
						label: 'Total Students',
						text: 350
					},
					{
						label: 'Demo Lectures',
						text: 'Yes'
					},
					{
						label: 'Cover Up Lecture',
						text: 'Yes'
					},
					{
						label: 'Test Series',
						text: 'Yes'
					},
					{
						label: 'Payment Mechanism',
						text: 'Cheque and Cash'
					},
					{
						label: 'Video Lectures',
						text: 'No'
					},
					{
						label: 'Test Series',
						text: 'No'
					}
				],
				established_in: '1987',
				ratings: 3.5,
				phone_number: '9920065087',
				reviews: [
					{
						author: 'Ps',
						text: 'Awesome tuts'
					},
					{
						author: 'Pj',
						text: 'Love the method of teaching'
					}
				],
				updates: [
					{
						text: 'Hello, tomorrow class at 4pm'
					},
					{
						text: 'Test will be held dayafter'
					}
				]
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
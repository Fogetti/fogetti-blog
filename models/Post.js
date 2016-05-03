var keystone = require('keystone');
var moment = require('moment');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Post.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: {
		type: Types.LocalFile,
		dest: keystone.get('post image upload path'),
		prefix: '../../images/post/',
		allowedTypes: 'image/jpeg,image/svg+xml,image/png' ,
		filename: function(item, file){
			return moment().format('x') + '-' + item.id + '.' + file.extension
		}
	},
	content: {
		brief: {
			type: Types.Markdown,
			markedOptions: {
				gfm: true,
				highlight: highlighter()
			},
			wysiwyg: true,
			height: 150
		},
		extended: {
			type: Types.Markdown,
			markedOptions: {
				gfm: true,
				highlight: highlighter()
			},
			wysiwyg: true,
			height: 400
		}
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true }
});

Post.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();

function highlighter() {
	var hljs = require('highlight.js');
	return function(code, lang) {
		return hljs.highlightAuto(code).value;
	};
};
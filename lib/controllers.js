'use strict';

const Controllers = module.exports;

Controllers.renderAdminPage = function (req, res/* , next */) {
	res.render('admin/plugins/image-mentions', {
		title: 'Image Mentions',
	});
};

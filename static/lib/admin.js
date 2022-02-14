'use strict';

/* globals $, app, define */

define('admin/plugins/image-mentions', ['settings'], function (settings) {
	const PLUGIN_HASH = 'image-mentions';

	var ACP = {};
	let $mentionListCon;
	let $pair;
	let $pairInputs;

	ACP.init = function () {
		settings.load(PLUGIN_HASH, $('.image-mentions-settings'));
		$('#save').on('click', saveSettings);

		$mentionListCon = $('[data-sorted-list="mention-list"]');
		$pair = $('.quick-form .form-group');
		$pairInputs = $pair.find('input');
		$('#add-pair').on('click', addPair);
	};

	function addPair() {
		const pairInputs = $pairInputs.toArray().reverse();
		if (!pairInputs.every(el => el.checkValidity())) {
			return pairInputs.forEach(el => el.reportValidity());
		}
		settings.plugins['sorted-list'].addItem($pair.clone(), $mentionListCon);
		$pairInputs.val('');
	}

	function saveSettings() {
		settings.save(PLUGIN_HASH, $('.image-mentions-settings'), function () {
			app.alert({
				type: 'success',
				alert_id: 'image-mentions-saved',
				title: 'Settings Saved',
				timeout: 5000,
			});
		});
	}

	return ACP;
});

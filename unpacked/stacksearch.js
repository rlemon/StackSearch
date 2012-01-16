var se_site_list = [];

function genericOnClick(info) {
	window.open( se_site_list[ info.menuItemId - 1 ][1] + '/search?q=' + encodeURIComponent( info.selectionText ) );
}
function updateMenus() {
	for( var i = 0, l = se_site_list.length; i < l; i++ ) {
		var menu_child = chrome.contextMenus.create( {
			"title": se_site_list[i][2],
			"contexts": ["selection"],
			"onclick": genericOnClick
		} );
	}
}

updateMenus();

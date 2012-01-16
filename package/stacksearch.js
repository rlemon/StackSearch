
function json_to_array(str) {
	try {
		return JSON.parse( str );
	} catch( e ) {
		return [];
	}
}

function genericOnClick(info) {
	window.open( se_site_list[ info.menuItemId - 1 ][1] + '/search?q=' + encodeURIComponent( info.selectionText ) );
}

function updateMenus() {
	chrome.contextMenus.removeAll(function() {
		se_site_list = json_to_array(localStorage["ss_site_list"]);
		for( var i = 0, l = se_site_list.length; i < l; i++ ) {
			var menu_child = chrome.contextMenus.create( {
				"title": se_site_list[i][2],
				"contexts": ["selection"],
				"onclick": genericOnClick
			} );
		}
	});
}

var se_site_list;
updateMenus();

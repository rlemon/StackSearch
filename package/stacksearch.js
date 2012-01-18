
function json_to_array(str) {
	try {
		return JSON.parse( str );
	} catch( e ) {
		return [];
	}
}

function genericOnClick(info) {
	window.open( ss_site_list[ info.menuItemId - 1 ][0] + '/search?q=' + encodeURIComponent( info.selectionText ) );
}

function updateMenus() {
	chrome.contextMenus.removeAll(function() {
		ss_site_list = json_to_array(localStorage['ss_site_list']);
		for( var i = 0, l = ss_site_list.length; i < l; i++ ) {
			var menu_child = chrome.contextMenus.create( {
				'title': se_site_list[i][1],
				'contexts': ['selection'],
				'onclick': genericOnClick
			} );
		}
	});
}

function run(json) {
	alert(json.items.length);
}

var se_site_list, ss_site_list;

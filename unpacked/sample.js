/* Site list
 * add and remove sites you wish to search from this list
 * format: 
 * 		["SITE_URL",	"SITE DISPLAY NAME"]
 * */
var se_site_list = [
	["http://stackoverflow.com","StackOverflow"],
	["http://serverfault.com","Server Fault"],
	["http://superuser.com","Super User"],
	["http://programmers.stackexchange.com","Programmers"],
	["http://meta.stackoverflow.com","Meta StackOverflow"],
	["http://math.stackexchange.com","Mathematics"],
	["http://askubuntu.com","Ask Ubuntu"],
	["http://english.stackexchange.com","English Language and Usage"],
	["http://gaming.stackexchange.com","StackOverflow"],
	["http://tex.stackexchange.com","TeX - LaTeX"],
	["http://apple.stackexchange.com","Apple"],
	["http://wordpress.stackexchange.com","WordPress"],
	["http://unix.stackexchange.com","Unix and Linux"]
	
];

function genericOnClick(info) {
	window.open( se_site_list[ info.menuItemId - 1 ][0] + '/search?q=' + encodeURIComponent( info.selectionText ) );
}

for( var i = 0, l = se_site_list.length; i < l; i++ ) {
	var menu_child = chrome.contextMenus.create( {
		"title": se_site_list[i][1],
		"contexts": ["selection"],
		"onclick": genericOnClick
	} );
}

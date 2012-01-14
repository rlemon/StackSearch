/* Site list
 * add and remove sites you wish to search from this list
 * format: 
 * 		["SITE_URL",	"SITE DISPLAY NAME"]
 * */
 // this list needs attention..
var se_site_list = [
	["http://english.stackexchange.com","English Language and Usage"],
	["http://apple.stackexchange.com","Apple"],
	["http://wordpress.stackexchange.com","WordPress"],
	["http://unix.stackexchange.com","Unix and Linux"],
	["http://askubuntu.com","Ask Ubuntu"],
	["http://meta.askubuntu.com","Ask Ubuntu Meta"],
	["http://stackoverflow.com","Stack Overflow"],
	["http://serverfault.com","Server Fault"],
	["http://superuser.com","Super User"],
	["http://meta.stackoverflow.com","Meta Stack Overflow"],
	["http://webapps.stackexchange.com","Web Applications"],
	["http://meta.webapps.stackexchange.com","Web Applications Meta"],
	["http://gaming.stackexchange.com","Gaming"],
	["http://meta.gaming.stackexchange.com","Gaming Meta"],
	["http://webmasters.stackexchange.com","Webmasters"],
	["http://meta.webmasters.stackexchange.com","Webmasters Meta"],
	["http://cooking.stackexchange.com","Cooking"],
	["http://meta.cooking.stackexchange.com","Cooking Meta"],
	["http://gamedev.stackexchange.com","Game Development"],
	["http://meta.gamedev.stackexchange.com","Game Development Meta"],
	["http://photo.stackexchange.com","Photography"],
	["http://meta.photo.stackexchange.com","Photography Meta"],
	["http://stats.stackexchange.com","Statistical Analysis"],
	["http://meta.stats.stackexchange.com","Statistical Analysis Meta"],
	["http://math.stackexchange.com","Mathematics"],
	["http://meta.math.stackexchange.com","Mathematics Meta"],
	["http://diy.stackexchange.com","Home Improvement"],
	["http://meta.diy.stackexchange.com","Home Improvement Meta"],
	["http://meta.superuser.com","Meta Super User"],
	["http://meta.serverfault.com","Meta Server Fault"],
	["http://gis.stackexchange.com","GIS"],
	["http://meta.gis.stackexchange.com","GIS Meta"],
	["http://tex.stackexchange.com","TeX - LaTeX"],
	["http://meta.tex.stackexchange.com","TeX - LaTeX Meta"]
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

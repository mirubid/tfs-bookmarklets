if (location.hash != '#_a=team') {
	location = '#_a=team';
}
setTimeout(function () {
	var me;
	$('tr:visible .minimize').click();
	me=localStorage['tfs-tweaker.me'];
	if(!me){
		me = localStorage['tfs-tweaker.me'] = prompt('Enter name (partial match)');
	}
	$('.witTitle:not(.clickableTitle):contains(' + me + ')').closest('tr.taskboard-row').find('.maximize').click();
}, 100);

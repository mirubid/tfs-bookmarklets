if (location.hash != '#_a=team') {
	location = '#_a=team';
}
setTimeout(function () {
	var me;
	$('tr:visible .minimize').click();
	me=$('.user-menu>li[command=user] span').text();//localStorage['tfs-tweaker.me'];
	$('.witTitle:not(.clickableTitle):contains(' + me + ')').closest('tr.taskboard-row').find('.maximize').click();
}, 100);

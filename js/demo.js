document.getElementsByClassName('icon-category2')[0].style.color = '#900b09';
document.getElementsByClassName('icon-category2')[0].style.backgroundColor = 'orange';
var menu_button = document.getElementsByClassName('menu_button');
[...menu_button].forEach(button=>{
	button.onclick = function(e){
		if( e.target.className === 'icon-font icon-category1 menu_button' ){
			document.getElementById('content-menu').style.display='none';
			document.getElementsByClassName('icon-category2')[0].style.color = '';
			document.getElementsByClassName('icon-category2')[0].style.backgroundColor = '';
			e.target.style.backgroundColor= 'orange';
			e.target.style.color= '#900b09';
		}else if( e.target.className === 'icon-font icon-category2 menu_button' ){
			document.getElementById('content-menu').style.display='block';
			document.getElementsByClassName('icon-category1')[0].style.color = '';
			document.getElementsByClassName('icon-category1')[0].style.backgroundColor = '';
			e.target.style.backgroundColor= 'orange';
			e.target.style.color= '#900b09';
		}
	}
})
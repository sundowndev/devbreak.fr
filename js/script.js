/*var collapseButtons = document.querySelectorAll('.panel-header-right a');

collapseButtons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        
        var panel = btn.parentElement.parentElement.parentElement;
        var icon = btn.childNodes[0];
        
        if(panel.className == 'panel collapse'){
            panel.classList.remove('collapse');
        }else{
            panel.classList.add('collapse');
        }
    });
});*/

var panels = document.querySelectorAll('.panel-header');

panels.forEach(function(panel){
    panel.addEventListener('click', function(e){
        e.preventDefault();
        
        var panelParent = panel.parentElement;
        var icon = panel.childNodes[0].childNodes[0];
        
        if(panelParent.className == 'panel collapse'){
            panelParent.classList.remove('collapse');
        }else{
            panelParent.classList.add('collapse');
        }
    });
});
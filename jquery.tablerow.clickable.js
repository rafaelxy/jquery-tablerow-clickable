/**
 * Table row clickable plugin
 * 
 * This works properly only on chrome.
 * Simulating ctrl+click is not very accepted in other browsers
 * 
 * usage: $(table).tr_click(link_selector);
 */
(function ( $ ) {
    $.fn.tr_click = function(anchor_selector) {
        var tr_selector = this.selector + " tr";
        $(tr_selector).css('cursor', 'pointer');
        
        $(tr_selector).click(function(e){
            e.stopPropagation();
            var url = $(e.target).parents('tr').find(anchor_selector).attr('href');
            if(e.ctrlKey || e.metaKey || e.button == 1) {
                window.open(url, '_blank').blur();
                window.focus();
            } else {
                window.location = url;
            }
        });
        return this;
    };
}(jQuery));

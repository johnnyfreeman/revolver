;(function($){

    var simpleTabs = function(container)
    {
        this.tabs = $('.tab', container);
        this.content = $('.content', container);

        this.content.not(':first').hide();

        this.tabs.click($.proxy(function(e){ this.switchTabs(e); }, this));
    }

    simpleTabs.prototype.switchTabs = function(e)
    {
        var target, tab;
        e.preventDefault();

        this.tabs.removeClass('active');
        tab = $(e.target);
        tab.addClass('active');

        this.content.hide();
        target = tab.attr('href');
        $(target).show();
    }

    $.fn.simpleTabs = function()
    {
        return this.each(function()
        {
            return new simpleTabs(this);
        });
    }

})(jQuery);
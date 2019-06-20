(function($){
    function Lyricant(selector)
    {
        $(selector).each(function()
        {
            var 
                $this = $(this),
                $lyricant_button = $('<p><button class="lyricant"><b>⛶</b>Fullscreen</button></p>')
            ;

            $this.prepend($lyricant_button);

            $lyricant_button.on('click', function()
            {
                //get data from div
                var data = $(this).parent().html();

                //remove \n and \t
                data = $.trim(data.replace(/[\t\n]+/g,''))
                
                //remove me, the first p
                var p = data.split('</p><p>')
                p.shift();

                for (var i in p)
                {
                    //replace <br> with \n
                    p[i] = p[i].split('<br>').join('\n')
                }

                //replace </p><p> with 2x \n
                data = p.join('\n\n')
                
                //remove the last drop of </p>
                data = data.substr(0, data.length-4);
                
                //compress/encode
                var compressed = LZString144.compressToEncodedURIComponent(data)

                //see ya
                window.location = `/lyricant/##${compressed}`;
            })
        })
    }
    $(function()
    {
        Lyricant('.su-tabs .su-tabs-panes .su-tabs-pane')
    })
})(jQuery)
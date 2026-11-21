/* games loader: includes class files (one per file) synchronously so the global API remains unchanged */
(function(){
    var base = 'js/';
    var files = [
        'games-class.js',
        'players-class.js'
    ];
    files.forEach(function(f){
        // Use document.write to ensure scripts are loaded and executed synchronously
        document.write('<scr' + 'ipt type="text/javascript" src="' + base + f + '"></scr' + 'ipt>');
    });
})();
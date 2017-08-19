(function () {
    var deployer = require('web-nexus-deployer');

    module.exports = function (gulp, projectConfigurations, config) {

        gulp.task('deploy-nexus', function (cb) {    
            info = config.nexus;
            info.version = '0.0.3';
            info.artifact = 'dist/example.zip';
    
            deployer.deploy(info, function (err) {
                if (err) {
                    console.log(err)
                }
                cb();
            })
    
        });
    };

})();
#!/usr/bin/env node

var fis = require('../index.js');

fis.cli.run(process.argv.slice(2));


/*
var Liftoff = require('liftoff');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var cli = new Liftoff({
    name: 'fisa',
    processTitle: 'fis',
    moduleName: 'fisa',
    configName: 'fis-conf',
    extensions: {
        '.js': null
    }
});

cli.launch({
    cwd: argv.r || argv.root,
    configPath: argv.f || argv.file
}, function(env) {
    var fis = require(!env.modulePath ? '../index.js', env.modulePath);
    
    process.title = this.name + ' ' + process.argv.slice(2).join(' ') + ' [ ' + env.cwd + ' ]';
    /**
     * 配置插件查找路径，优先查找本地项目里面的 node_modules，然后
     * 才是全局环境下面安装的 fis3 目录里面的 node_modules
     */
    
    /*
    fis.require.paths.unshift(path.join(env.cwd, 'node_modules'));
    fis.require.paths.push(path.join(path.dirname(__dirname), 'node_modules'));
    fis.cli.name = this.name;
    fis.cli.run(argv, env);
});

*/
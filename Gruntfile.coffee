module.exports = (grunt) ->
    grunt.initConfig(
        pkg: grunt.file.readJSON 'package.json'
        assets: 'src/'
        build: 'build/'
        ng: 'src/js/ng/'
        less:
            development:
                src: '<%= assets %>less/entry.less'
                dest: '<%= build %>css/app.css'
            production:
                options:
                    compress: true
                src: '<%= assets %>less/entry.less'
                dest: '<%= build %>css/app.min.css'
            every:
                files: [
                    expand: true
                    cwd: '<%=assets%>less'
                    src: ['**/*.less']
                    dest: '<%=build%>css'
                    ext: '.css'
                    ]
        coffee:
            compile:
                expand: true
                cwd: '<%= assets %>/coffee'
                src: ['**/*.coffee']
                dest: '<%= assets %>/js'
                ext: '.js'

        requirejs:
            development:
                options:
                    baseUrl: "<%= assets %>/js"
                    name: "entry"
                    optimize: "none"
                    mainConfigFile: "<%= assets %>/js/requirejs-config.js"
                    out: "<%= build %>/js/app.js"
            production:
                options:
                    baseUrl: "<%= assets%>/js"
                    name: "entry"
                    optimize: "uglify2"
                    mainConfigFile: "<%= assets%>/js/requirejs-config.js"
                    out: "<%= build %>/js/app.min.js"
        uglify:
            production:
                options:
                    compress: true
                    beautify: false
                    mangle: false
                files: [
                    expand: true
                    cwd: '<%= ng %>'
                    src: ['**/*.js']
                    dest: '<%=build%>/js'
                    ]
        parseunicode: 
            dist:
                src: ['<%= build %>js/test.js']
                options: 
                    charset: 'utf8'
                    type: 'js'
        concat:
            dist: 
                src: ['<%=ng%>lib/angular.min.js', '<%=ng%>lib/jquery-1.10.2.min.js', '<%=ng%>lib/ui-bootstrap-tpls-0.7.0.min', '<%=ng%>page/a_register.js', '<%=ng%>page/customMenu.js']
                dest: '<%=build%>/js/ng-app.js'
        watch:
            css:
                options:
                    livereload: true
                files: ['<%= assets %>/less/**/*.less']
                tasks: ['less:development']
            html:
                options:
                    livereload: true
                    port: 35728
                files: ['**/*.html']
            js:
               options:
                    livereload: true
               files: ['<%= assets %>js/**/*.js']
    )
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-less'
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-requirejs'
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-parseunicode'
    grunt.loadNpmTasks 'grunt-contrib-concat'
    grunt.registerTask 'default', ['less:development', 'requirejs:development']    
    grunt.registerTask 'production', ['less:production','requirejs:production']

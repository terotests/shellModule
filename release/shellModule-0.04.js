// The code template begins here
'use strict';

(function () {

  var __amdDefs__ = {};

  // The class definition is here...
  var shellModule_prototype = function shellModule_prototype() {
    // Then create the traits and subclasses for this class here...

    // trait comes here...

    (function (_myTrait_) {

      // Initialize static variables here...

      /**
       * @param float t
       */
      _myTrait_.guid = function (t) {

        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      };

      /**
       * @param float t
       */
      _myTrait_.isArray = function (t) {

        if (typeof t == 'undefined') return this.__isA;

        return Object.prototype.toString.call(t) === '[object Array]';
      };

      /**
       * @param float fn
       */
      _myTrait_.isFunction = function (fn) {
        return Object.prototype.toString.call(fn) == '[object Function]';
      };

      /**
       * @param float t
       */
      _myTrait_.isObject = function (t) {

        if (typeof t == 'undefined') return this.__isO;

        return t === Object(t);
      };
    })(this);

    // the subclass definition comes around here then

    // The class definition is here...
    var itemShell_prototype = function itemShell_prototype() {
      // Then create the traits and subclasses for this class here...

      // trait comes here...

      (function (_myTrait_) {

        // Initialize static variables here...

        /**
         * @param float t
         */
        _myTrait_.guid = function (t) {

          return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        };

        /**
         * @param float t
         */
        _myTrait_.isArray = function (t) {

          if (typeof t == 'undefined') return this.__isA;

          return Object.prototype.toString.call(t) === '[object Array]';
        };

        /**
         * @param float fn
         */
        _myTrait_.isFunction = function (fn) {
          return Object.prototype.toString.call(fn) == '[object Function]';
        };

        /**
         * @param float t
         */
        _myTrait_.isObject = function (t) {

          if (typeof t == 'undefined') return this.__isO;

          return t === Object(t);
        };
      })(this);

      (function (_myTrait_) {
        var _cmds;
        var _shellCmds;

        // Initialize static variables here...

        /**
         * @param float name
         * @param float value
         * @param float pipe
         */
        _myTrait_._execShellCmd = function (name, value, pipe) {

          if (_shellCmds[name]) {
            console.log('CALLING ', name);
            var prom = _promise(),
                me = this;
            _shellCmds[name].apply(this, [value, pipe, prom]);
            prom.then(function (r) {
              console.log(name, 'resolved with, sending to output  ', r);
              me.output(r);
            }).fail(function (r) {
              me.output(r, 'error');
            });
            return prom;
          }
        };

        /**
         * @param float str
         */
        _myTrait_._getCmdFromStr = function (str) {

          if (str) {
            str = str.trim();
            var parts = str.split(' ');
            return _cmds[parts[0]];
          }
        };

        /**
         * @param float str
         */
        _myTrait_._getCmdStr = function (str) {
          if (str) {
            str = str.trim();
            var parts = str.split(' ');
            return parts[0];
          }
        };

        /**
         * @param float str
         */
        _myTrait_._getParamsFromStr = function (str) {
          if (str) {
            str = str.trim();
            var parts = str.split(' ');
            parts.shift();
            return parts.join(' ');
          }
        };

        /**
         * @param float t
         */
        _myTrait_._initShellCmds = function (t) {

          // should send the commands using "output" and end the streaming here...

          if (!_shellCmds) {
            _shellCmds = {};
            // this._vars

            // Commands should return using returnFn

            _shellCmds['mkarr'] = function (params, pipe, returnPromise) {

              var curr = this.getCurrent();
              if (params) {

                curr.set(params, []);
                returnPromise.resolve('Created ' + params);
              } else {
                returnPromise.resolve('could not create');
              }
            };

            _shellCmds['mkdir'] = function (params, pipe, returnPromise) {

              var curr = this.getCurrent();
              if (params) {

                curr.set(params, {});
                returnPromise.resolve(r);
              } else {
                returnPromise.resolve('could not create');
              }
            };

            _shellCmds['var'] = function (params, pipe, returnPromise) {
              if (pipe && params) {
                console.log('Setting ', params, 'to value ', pipe);
                this.setVar(params, pipe);
                returnPromise.resolve();
              }
            };

            _shellCmds['find'] = function (params, pipe, returnPromise) {

              var fileName = params.trim(),
                  results = [],
                  me = this;

              var finder = function finder(d, txt, pathSoFar) {
                console.log('Finding items for ', d);
                if (me.isObject(d) && d.keys) {
                  d.keys(function (name, value, obj) {
                    console.log(name);
                    if (name.match(txt)) {
                      results.push([name, value, pathSoFar]);
                    }
                    if (me.isObject(value)) {
                      finder(_data(value), txt, pathSoFar + (pathSoFar ? '/' : '') + name);
                    }
                  });
                } else {}
              };
              finder(this.getCurrent(), fileName, '');
              // me.output("Found "+results.length+" matches ");
              results.forEach(function (line) {
                me.output(line[2] + '/' + line[0]);
              });

              returnPromise.resolve(true);
            };

            /*
            if(cmdLine.substring(0,4)=="find") {
                 var fileName = cmdLine.substring(5),
            results = [];
               var finder = function(d,txt, pathSoFar) {
            console.log("Finding items for ", d);
            if(me.isObject(d) && d.keys) {
                d.keys( function(name, value, obj) {
                    console.log(name);
                    if(name.match(txt)) {
                        results.push([name, value, pathSoFar]);
                    } 
                    if(me.isObject(value)) {
                        finder( _data( value ), txt, pathSoFar+(pathSoFar? "/" :"")+name );
                    }
                    
                });
            } else {
                
            }
            }   
            finder( this._currentDir, fileName, "");
            me.output("Found "+results.length+" matches ");
            results.forEach( function(line) {
            me.output( line[2]+"/"+line[0] );
            })
            }    
            */

            // itemShell( this );

            _shellCmds['exec'] = function (params, pipe, returnPromise) {

              var fd;
              params = params.trim();
              fd = this._pathToObject(params);
              console.log('exec param ', params);
              if (fd) {
                var o = fd[0],
                    n = fd[1];
                var me = this;
                if (this.isFunction(o[n])) {
                  var fileData = o[n]();
                  console.log('The param = ' + n);
                  var cmds = fileData.split('\n');
                  console.log('Commands ', fileData);
                  cmds.forEach(function (c) {
                    var sh = itemShell(me);
                    console.log('Should run  ', c);
                    if (c) sh.exec(c, me.getCurrent(), '');
                  });
                }
              }
              returnPromise.resolve('');
            };

            _shellCmds['delay'] = function (params, pipe, returnPromise) {

              if (params) {
                setTimeout(function () {
                  returnPromise.resolve('Waited ' + params + ' ms');
                }, params);
                return;
              }
              returnPromise.resolve('Set the delay');
            };

            _shellCmds['show'] = function (params, pipe, returnPromise) {
              if (!params) {
                returnPromise.resolve(JSON.stringify(this._vars), null, 2);
                return;
              }
              console.log('Asking ', params);
              returnPromise.resolve(this.getVar(params));
              //         this.output(this._vars[params] || "");
            };

            _shellCmds['cp'] = function (params, pipe, returnPromise) {
              console.log(params);
              var parts = params.split(' ');
              if (parts.length < 2) {
                returnPromise.resolve('Can not copy');
                return;
              }

              var fd1 = this._pathToObject(parts[0]);
              var fd2 = this._pathToObject(parts[1]),
                  me = this;
              console.log(fd1);
              if (fd1) {
                var o1 = fd1[0]; // o2 = fd2[0];
                var n1 = fd1[1]; // n2 = fd2[1];

                var o2, n2;
                if (fd2) {
                  o2 = fd2[0];
                  n2 = fd2[1];
                } else {
                  o2 = o1;
                  n2 = parts[1];
                }

                if (o1[n1]) o2.set(n2, o1[n1]());
                returnPromise.resolve('Copied ' + parts[0] + ' to ' + parts[1]);
              } else {
                returnPromise.resolve('Could not copy ' + parts[0] + ' to ' + parts[1]);
              }
            };

            _shellCmds['rm'] = function (params, pipe, returnPromise) {

              var o = this.getCurrent();
              if (o && o.isArray()) {

                var item = o.at(params),
                    me = this;
                if (item) {
                  item.remove();
                  returnPromise.resolve('* Removed Object *');
                } else {
                  returnPromise.resolve('* invalid index *');
                }
              } else {
                if (o[params]) {
                  // returnPromise.resolve("Removing properties not working");
                  //returnPromise.resolve("Trying to remove "+params);
                  o.unset(params);
                } else {
                  returnPromise.resolve('No such file or property');
                }
              }
            };

            _shellCmds['push'] = function (params, pipe, returnPromise) {

              var o = this.getCurrent();
              if (o && o.isArray()) {

                var fileData = JSON.parse(params || pipe),
                    me = this;
                if (fileData) {
                  console.log('About to push data');
                  o.push(fileData);
                  returnPromise.resolve('Created array');
                } else {
                  returnPromise.resolve('Invalid JSON');
                }
              } else {
                returnPromise.resolve('Not an array');
              }
            };

            _shellCmds['filter'] = function (params, pipe, returnPromise) {
              console.log('Filter with ', params, pipe);
              var fd;
              if (params && pipe) {
                fd = this._pathToObject(pipe);
                if (fd) {
                  var o = fd[0],
                      n = fd[1];
                  if (this.isFunction(o[n])) {
                    var fileData = o[n]();
                    if (fileData.match(params)) {
                      // this.output(pipe);
                      console.log('Filter got ', pipe);
                      returnPromise.resolve(pipe);
                      return;
                    }
                  }
                }
              } else {
                console.log('Filter did not have params');
              }
              console.log('Exiting the filter function');
              returnPromise.resolve('novalue');
            };

            _shellCmds['collect'] = function (params, pipe, returnPromise) {

              var o = this.getCurrent();

              if (o && o.serialize) {
                returnPromise.resolve(JSON.stringify(o.serialize(), null, 2));
                return;
              }
              returnPromise.resolve('');
            };

            _shellCmds['cat'] = function (params, pipe, returnPromise) {

              var fd;

              console.log('Cat Current dir ', this.getCurrent());
              console.log(pipe, params);

              params = params || '';
              pipe = pipe || '';

              if (params) params = params.trim();
              if (pipe) pipe = pipe.trim();
              if (pipe) {
                fd = this._pathToObject(pipe);
              } else {
                fd = this._pathToObject(params);
              }
              console.log('Cat with ', fd);

              if (fd) {
                var o = fd[0],
                    n = fd[1];
                if (this.isFunction(o[n])) {
                  // this.output( params || pipe, "cmdInfo");
                  console.log('cat resolved with ', o[n]());
                  returnPromise.resolve(o[n]());
                  return;
                }
              }
              returnPromise.resolve('');
              return;
            }
            /*
            if(cmdLine.substring(0,3)=="cat") {
            var fileName = cmdLine.substring(4);
            var value;
            if(value = this._currentDir[fileName]) {
            if(this.isFunction( value )) {
            this.output( this._currentDir[fileName]()  );
            } 
            
            }    
            }
            */

            ;
          }
        };

        /**
         * @param float what
         * @param float useClass
         * @param float options
         */
        _myTrait_._outputRaw = function (what, useClass, options) {

          if (this._parentShell) {
            this._parentShell._outputRaw(what, useClass, options);
            return;
          }

          var newLine = this._shellCmdOutput.div(useClass);

          if (typeof what == 'string') {
            newLine.pre().text(what);
          } else {
            newLine.add(what);
          }

          // this._shellCmdOutput
          this._shellCmdOutput._dom.scrollTop = this._shellCmdOutput._dom.scrollHeight;

          if (options) {

            if (options.onClick) {
              newLine.on('click', function () {
                options.onClick();
              });
            }
          }
        };

        /**
         * @param float strPath
         * @param float ctx
         */
        _myTrait_._pathToObject = function (strPath, ctx) {

          if (!ctx) ctx = this.getCurrent();

          console.log('path to obj ', strPath);

          strPath = strPath.trim();
          if (strPath[0] == '/') {
            console.log('--- taking root');
            ctx = this.getRoot();
          }

          var parts = strPath.split('/'),
              o = ctx,
              obj,
              prop;

          console.log('--- _pathToObject', parts);

          while (parts.length) {

            var pStr = parts.shift();
            if (pStr) {
              pStr = pStr.trim();
              if (pStr) {
                if (o[pStr] && !this.isFunction(o[pStr])) {
                  o = o[pStr];
                  obj = o;
                  prop = pStr;
                } else {
                  if (o[pStr]) {
                    obj = o;
                    prop = pStr;
                  } else {
                    return null;
                  }
                }
              }
            }
          }
          return [o, prop];
        };

        /**
         * @param float name
         * @param float method
         */
        _myTrait_.addPipedCmd = function (name, method) {

          _cmds[name] = method;
        };

        /**
         * @param float obj
         */
        _myTrait_.addToHistory = function (obj) {
          if (this._historyLog) {

            if (!this.isObject(obj)) {
              obj = {
                cmd: obj,
                time: new Date().getTime()
              };
            }
            this._historyLog.push(obj);
          }
        };

        /**
         * @param float t
         */
        _myTrait_.clearScreen = function (t) {
          this._shellCmdOutput.clear();
        };

        /**
         * @param float name
         */
        _myTrait_.clearVar = function (name) {
          if (this._parentShell) {
            this._parentShell.clearVar(name, value);
            return;
          }
          this._vars[name] = [];
          console.log(this._vars);
        };

        /**
         * @param float cmdLine
         * @param float context
         * @param float pipedData
         */
        _myTrait_.exec = function (cmdLine, context, pipedData) {

          // return this.exec2(cmdLine, context,pipedData);

          var pipes = cmdLine.split('|'),
              bDidSet = false,
              me = this;

          var ctx = streamProcessor();
          ctx.set('currentDir', this.getCurrent());
          ctx.set('shell', this);
          var stream = simpleStream(ctx);
          var firstParams;

          pipes.forEach(function (cmdLine) {
            var cmd = me._getCmdStr(cmdLine);
            if (me._cmds[cmd]) {
              bDidSet = true;
              var obs = me._cmds[cmd];
              var params = me._getParamsFromStr(cmdLine);
              if (typeof firstParams == 'undefined') firstParams = params;

              // Should we set here the context for the observer instance based on the params??
              // var ctx = streamProcessor();
              // ctx.set("params", params);
              var closure = streamProcessor(null, true);

              console.log('Setting closure to ', closure);

              closure.set('params', params);

              stream.addObserver(obs, closure);
            }
          });

          if (bDidSet) {
            this.addToHistory(cmdLine);
            stream.forEach(function (value) {
              console.log('Got ', value);
              me.output(value + '');
            });
            stream.pushValue(firstParams); // maybe not right way to do it...   
            return;
          }
          return this.exec2(cmdLine, context, pipedData);
        };

        /**
         * @param float cmdLine
         * @param float context
         * @param float pipedData
         */
        _myTrait_.exec2 = function (cmdLine, context, pipedData) {

          try {

            // delete this._pipe;

            var myProm = _promise();

            var me = this;
            // very simple shell so far...

            // should it do this???
            if (context) {
              this._currentDir = context;
            }

            if (cmdLine.trim) cmdLine = cmdLine.trim();

            var pipes = cmdLine.split('|'),
                bHadPipe = false;

            if (pipes.length > 1) {

              var leftPipe = pipes[0];
              bHadPipe = true;
              console.log('Left pipe ', leftPipe);
              cmdLine = leftPipe.trim();

              this._pipe = [];

              this._pipedShell = itemShell(this);

              pipes.shift();
              this._rightPipe = pipes.join(' | ');

              this._pipeToCmd = pipes[1];
              this._pipeCmd = this._getCmdFromStr(this._pipeToCmd);
              this._pipeCmdParams = this._getParamsFromStr(this._pipeToCmd);

              console.log('Should pipe to ', this._pipeToCmd);
              console.log('Command now ', cmdLine);
            }

            if (pipedData) {

              var cmd = this._getCmdStr(cmdLine),
                  params = this._getParamsFromStr(cmdLine);
              console.log('Cmd ', cmd);
              console.log('params', params);
              console.log('Getting piped data ', pipedData);

              if (cmd == 'grep') {
                if (pipedData.match(params)) {
                  me.output(pipedData);
                }
              }

              var returnPromise;
              if (returnPromise = this._execShellCmd(cmd, params, pipedData)) {
                returnPromise.then(function () {
                  console.log('Should delete the piping');
                  delete me._pipe;
                  myProm.resolve();
                });

                return myProm;
              }

              delete this._pipe;

              return myProm;
            }

            var pn = this.parsePathName();
            // me.output(pn + "> " + cmdLine, "cmdline");

            var cmdName = this._getCmdStr(cmdLine);
            var cmdParams = this._getParamsFromStr(cmdLine);

            console.log('** test ', cmdName, cmdParams);

            // THE COMMAND SHOULD
            var returnPromise;
            if (returnPromise = this._execShellCmd(cmdName, cmdParams)) {

              returnPromise.then(function () {
                console.log('Should delete the piping');
                console.log(me);
                delete me._pipe;
              });
              return;
            }

            console.log('**** NON STANDARD COMMAND *****');

            if (cmdLine.substring(0, 4) == 'find') {

              var fileName = cmdLine.substring(5),
                  results = [];

              var finder = function finder(d, txt, pathSoFar) {
                console.log('Finding items for ', d);
                if (me.isObject(d) && d.keys) {
                  d.keys(function (name, value, obj) {
                    console.log(name);
                    if (name.match(txt)) {
                      results.push([name, value, pathSoFar]);
                    }
                    if (me.isObject(value)) {
                      finder(_data(value), txt, pathSoFar + (pathSoFar ? '/' : '') + name);
                    }
                  });
                } else {}
              };
              finder(this._currentDir, fileName, '');
              me.output('Found ' + results.length + ' matches ');
              results.forEach(function (line) {
                me.output(line[2] + '/' + line[0]);
              });
            }

            // _pathToObject
            if (cmdLine.substring(0, 4) == 'info') {

              var fileName = cmdLine.substring(5);
              console.log(this._pathToObject(fileName));
            }

            if (cmdLine == 'pwd') {

              var getName = function getName(o) {

                var str = '',
                    parent = o.parent();
                if (!parent) return '';
                parent.keys(function (name, value) {
                  console.log(' key ');
                  console.log(name);
                  console.log(value);
                  console.log(o);
                  if (_data(value) == o) str = name;
                });
                console.log(str);
                return str;
              };

              var dd = this._currentDir,
                  pathStr = '';

              while (dd) {
                pathStr = getName(dd) + '/' + pathStr;
                dd = dd.parent();
              }
              me.output(pathStr);
            }
            if (cmdLine && cmdLine == 'ls') {

              me.output('..', 'dir', {
                onClick: function onClick() {
                  me.exec('cd ..');
                  me.exec('ls');
                }
              });

              this._currentDir.keys(function (name, value) {
                var ctx = me._currentDir;
                if (me.isObject(value)) {
                  me.output(name, 'dir', {
                    onClick: function onClick() {
                      me.exec('cd ' + name, ctx);
                      me.exec('ls');
                    }
                  });
                } else {
                  if (name.match('.svgpath')) {
                    var tbl = _e('table');
                    var svg = _e('svg').width(20).height(20);
                    svg.g().path({
                      'd': value,
                      'fill': 'white'
                    });
                    tbl.addRow(svg, name);
                    me.output(tbl, 'file', {
                      onClick: function onClick() {
                        me.output('Don\'t know how to open file SVG', 'warning');
                      }
                    });
                    return;
                  }
                  if (name.match('.svg')) {
                    console.log('SVG edit');
                    me.output(name, 'file', {
                      onClick: function onClick() {
                        me.output('Don\'t know how to open file SVG', 'warning');
                      }
                    });
                  } else {
                    me.output(name, 'file', {
                      onClick: function onClick() {
                        me.exec('edit ' + name, ctx);
                      }
                    });
                  }
                }
              });
            }

            if (cmdLine.substring(0, 4) == 'edit') {

              var fileName = cmdLine.substring(5);
              var value;

              if (value = this._currentDir[fileName]) {

                if (this.isFunction(value)) {

                  var newC = _e();
                  this.getOutputArea().pushView(newC);

                  this.startProcess('edit', newC, this._currentDir, fileName);
                }
              } else {
                var me = this;
                this._currentDir.set(fileName, '').then(function () {

                  var newC = _e();
                  me.getOutputArea().pushView(newC);

                  me.startProcess('edit', newC, this._currentDir, fileName);
                });
              }

              // startProcess  
            }

            /*
            if(cmdLine.substring(0,3)=="cat") {
            var fileName = cmdLine.substring(4);
            var value;
            if(value = this._currentDir[fileName]) {
                 if(this.isFunction( value )) {
                this.output( this._currentDir[fileName]()  );
            } 
                
            }    
            }
            */

            if (cmdLine.substring(0, 2) == 'cd') {

              var newDir = cmdLine.substring(3);
              var bDirSet = false;

              if (newDir == '/') {
                this._currentDir = this._doc;
                bDirSet = true;
              }

              var parts = newDir.split('/'),
                  bHasSub = false;
              if (parts.length > 1) {
                bHasSub = true;
                newDir = parts.shift();
              }

              if (newDir == '..') {
                var p = this._currentDir.parent();
                if (p) this._currentDir = p;
                bDirSet = true;
              }

              if (!bDirSet) {
                if (this._currentDir.isArray()) {
                  if (this._currentDir.at(newDir)) {
                    this._currentDir = this._currentDir.at(newDir);
                  } else {
                    this.output(newDir + ' is a invalid value ');
                  }
                } else {

                  if (this._currentDir[newDir]) {
                    console.log(this._currentDir[newDir]);
                    if (!this.isFunction(this._currentDir[newDir])) {
                      this._currentDir = this._currentDir[newDir];
                    } else {
                      this.output(newDir + ' is a invalid value ');
                    }
                  }
                }
              }
              if (bHasSub) me.exec('cd ' + parts.join('/'));
            }
            delete me._pipe;
          } catch (e) {
            me.output(e.message, 'warning');
          }
        };

        /**
         * @param float t
         */
        _myTrait_.getCurrent = function (t) {
          if (this._parentShell) {
            return this._parentShell.getCurrent();
          }
          return this._currentDir;
        };

        /**
         * @param float t
         */
        _myTrait_.getInitData = function (t) {
          return this._initData;
        };

        /**
         * @param float t
         */
        _myTrait_.getInputField = function (t) {

          if (this._shellCmdInput) return this._shellCmdInput;

          var ta = _e('textarea'),
              me = this;
          ta.addClass('shellCmdInput');

          ta.on('value', function (o, v) {
            var val = ta.val();
            console.log(val);
            if (!val) return;
            var cmds = val.split('\n');
            if (cmds.length > 1) {

              var pn = me.parsePathName();
              me.output(pn + '> ' + cmds[0], 'cmdline');
              me.exec(cmds[0]);
              ta.val('');
            }
          });

          this._shellCmdInput = ta;

          return ta;
        };

        /**
         * @param float t
         */
        _myTrait_.getMainWindow = function (t) {
          return this._mainWindow;
        };

        /**
         * @param float t
         */
        _myTrait_.getOutputArea = function (t) {
          if (this._shellCmdOutput) return this._shellCmdOutput;

          var ta = _e('div');
          ta.addClass('shellCmdOutput');

          this._shellCmdOutput = ta;

          return ta;
        };

        /**
         * @param float t
         */
        _myTrait_.getRoot = function (t) {
          if (this._parentShell) {
            return this._parentShell.getRoot();
          }
          return this._doc;
        };

        /**
         * @param float name
         */
        _myTrait_.getVar = function (name) {
          if (this._parentShell) {
            return this._parentShell.getVar(name);
          }
          return this._vars[name];
        };

        if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
        if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
        _myTrait_.__traitInit.push(function (rootDocument, h, mainDom, usePath) {

          this._vars = {};
          this._cmds = {};

          if (!_cmds) {
            _cmds = {};
            this._initShellCmds();
          }

          // When the shell is ready, just continue stuff...
          this._doc = rootDocument;

          this._currentDir = this._doc;

          this._doc.then(function () {
            console.log('Shell is ready');
          });
        });

        /**
         * @param float obj
         * @param float parentShell
         */
        _myTrait_.initializeShell = function (obj, parentShell) {

          if (!obj) obj = this._initData;

          var me = this;

          if (obj) {
            obj.then(function () {
              me._initData = obj;

              if (parentShell) {
                var pData = parentShell.getInitData();
                if (pData && pData.bin) {
                  pData.bin.keys(function (name, value) {
                    if (value && value.data && value.data.body) {
                      me._cmds[name] = new Function('m', value.data.body);
                    }
                  });
                }
              }

              if (obj.bin) {
                obj.bin.keys(function (name, value) {
                  if (value && value.data && value.data.body) {
                    me._cmds[name] = new Function('m', value.data.body);
                  }
                });
              }

              if (obj['var'] && obj['var']['history']) {
                var h = obj['var']['history'];
                if (h.log) {
                  me._historyLog = h.log;
                }
              }
            });
          }
        };

        /**
         * @param float name
         */
        _myTrait_.isValidCommand = function (name) {

          name = this._getCmdStr(name);

          return _shellCmds[name];
        };

        /**
         * @param float cmdLine
         * @param float parentCtx
         */
        _myTrait_.lineToStream = function (cmdLine, parentCtx) {
          var pipes = cmdLine.split('|'),
              bDidSet = false,
              me = this;

          var ctx = streamProcessor(parentCtx);
          ctx.set('currentDir', this.getCurrent());
          ctx.set('shell', this);
          var stream = simpleStream(ctx);
          var firstParams;

          pipes.forEach(function (cmdLine) {
            var cmd = me._getCmdStr(cmdLine);
            if (me._cmds[cmd]) {
              bDidSet = true;
              var obs = me._cmds[cmd];
              var params = me._getParamsFromStr(cmdLine);
              if (typeof firstParams == 'undefined') firstParams = params;

              // Should we set here the context for the observer instance based on the params??
              // var ctx = streamProcessor();
              // ctx.set("params", params);
              var closure = streamProcessor(null, true);

              console.log('Setting closure to ', closure);

              closure.set('params', params);

              stream.addObserver(obs, closure);
            }
          });

          if (bDidSet) {
            return stream;
            /*
            this.addToHistory(cmdLine);
            stream.forEach( function(value) {
            console.log("Got ", value);
            me.output(value+"");
            });
            stream.pushValue(firstParams); // maybe not right way to do it...    
            return;
            */
          }
        };

        /**
         * @param float main
         */
        _myTrait_.mainWindow = function (main) {
          this._mainWindow = main;
        };

        /**
         * @param float what
         * @param float useClass
         * @param float options
         */
        _myTrait_.output = function (what, useClass, options) {

          if (this._pipe) {

            /*
            this._pipe = [];
            this._pipedShell = itemShell( this );
            pipes.shift();
            this._rightPipe = pipes.join(" | ");
            this._pipeToCmd = pipes[1];
            this._pipeCmd = this._getCmdFromStr( this._pipeToCmd  );
            this._pipeCmdParams = this._getParamsFromStr( this._pipeToCmd  );
            console.log("Should pipe to ", this._pipeToCmd);
            console.log("Command now ", cmdLine);
            */
            // exec( cmd, )
            this._pipedShell.exec(this._rightPipe, this.getCurrent(), what);

            /*
            var fn = this._pipeCmd,
            me = this;
            if(fn) {
            fn( what, this._pipeCmdParams, function(res) {
            if(res) {
                me._outputRaw( res );
            }
            });
            }
            */

            // this._pipe.push( what );
            // should do then the piping to the other side...

            return;
          } else {}

          this._outputRaw(what, useClass, options);
        };

        /**
         * @param float
         */
        _myTrait_.parsePathName = function () {
          var getName = function getName(o) {

            var str = '',
                parent = o.parent();
            if (!parent) return '';
            parent.keys(function (name, value) {
              if (_data(value) == o) str = name;
            });
            return str;
          };

          var dd = this._currentDir,
              pathStr = '';

          while (dd) {
            pathStr = getName(dd) + '/' + pathStr;
            dd = dd.parent();
          }

          return pathStr;
        };

        /**
         * @param float name
         * @param float value
         */
        _myTrait_.saveVar = function (name, value) {

          if (this._parentShell) {
            this._parentShell.saveVar(name, value);
            return;
          }
          this._vars[name] = value;
        };

        /**
         * @param float t
         */
        _myTrait_.scrollBottom = function (t) {
          this._shellCmdOutput._dom.scrollTop = this._shellCmdOutput._dom.scrollHeight;
        };

        /**
         * @param float name
         * @param float value
         */
        _myTrait_.setVar = function (name, value) {
          if (this._parentShell) {
            this._parentShell.setVar(name, value);
            return;
          }
          if (!this._vars[name]) this._vars[name] = [];
          this._vars[name].push(value);
          console.log(this._vars);
        };

        /**
         * @param float cmd
         * @param float main
         * @param float item
         * @param float propName
         */
        _myTrait_.startProcess = function (cmd, main, item, propName) {
          // starts a process which can be used...
          if (cmd == 'edit') {

            var me = this;
            // var jsonTplData = comp.compile( "<div>{{"+propName+":aceJS}}</div>");

            main.div().button().text('EXIT').on('click', function () {
              main.parent().popView();
              setTimeout(function () {
                me.scrollBottom();
              }, 500);
            });

            item.then(function () {

              if (!item[propName]) {
                item.set(propName, '').then(function () {
                  main.div().aceEditor({
                    varName: propName,
                    width: 400,
                    height: 400
                  }, item);
                });
                return;
              }
              main.div().aceEditor({
                varName: propName,
                width: 400,
                height: 400
              }, item);
            });
          }
        };
      })(this);
    };

    var itemShell = function itemShell(a, b, c, d, e, f, g, h) {
      var m = this,
          res;
      if (m instanceof itemShell) {
        var args = [a, b, c, d, e, f, g, h];
        if (m.__factoryClass) {
          m.__factoryClass.forEach(function (initF) {
            res = initF.apply(m, args);
          });
          if (typeof res == 'function') {
            if (res._classInfo.name != itemShell._classInfo.name) return new res(a, b, c, d, e, f, g, h);
          } else {
            if (res) return res;
          }
        }
        if (m.__traitInit) {
          m.__traitInit.forEach(function (initF) {
            initF.apply(m, args);
          });
        } else {
          if (typeof m.init == 'function') m.init.apply(m, args);
        }
      } else return new itemShell(a, b, c, d, e, f, g, h);
    };
    // inheritance is here

    itemShell._classInfo = {
      name: 'itemShell'
    };
    itemShell.prototype = new itemShell_prototype();

    (function () {
      if (typeof define !== 'undefined' && define !== null && define.amd != null) {
        __amdDefs__['itemShell'] = itemShell;
        this.itemShell = itemShell;
      } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
        module.exports['itemShell'] = itemShell;
      } else {
        this.itemShell = itemShell;
      }
    }).call(new Function('return this')());

    // the subclass definition comes around here then

    // The class definition is here...
    var simpleStream_prototype = function simpleStream_prototype() {
      // Then create the traits and subclasses for this class here...

      // trait comes here...

      (function (_myTrait_) {

        // Initialize static variables here...

        /**
         * @param float t
         */
        _myTrait_.guid = function (t) {

          return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        };

        /**
         * @param float t
         */
        _myTrait_.isArray = function (t) {

          if (typeof t == 'undefined') return this.__isA;

          return Object.prototype.toString.call(t) === '[object Array]';
        };

        /**
         * @param float fn
         */
        _myTrait_.isFunction = function (fn) {
          return Object.prototype.toString.call(fn) == '[object Function]';
        };

        /**
         * @param float t
         */
        _myTrait_.isObject = function (t) {

          if (typeof t == 'undefined') return this.__isO;

          return t === Object(t);
        };
      })(this);

      // the subclass definition comes around here then

      // The class definition is here...
      var _promise_prototype = function _promise_prototype() {
        // Then create the traits and subclasses for this class here...

        // trait comes here...

        (function (_myTrait_) {

          // Initialize static variables here...

          /**
           * @param float someVar
           */
          _myTrait_.isArray = function (someVar) {
            return Object.prototype.toString.call(someVar) === '[object Array]';
          };

          /**
           * @param Function fn
           */
          _myTrait_.isFunction = function (fn) {
            return Object.prototype.toString.call(fn) == '[object Function]';
          };

          /**
           * @param Object obj
           */
          _myTrait_.isObject = function (obj) {
            return obj === Object(obj);
          };
        })(this);

        // the subclass definition comes around here then

        // The class definition is here...
        var later_prototype = function later_prototype() {
          // Then create the traits and subclasses for this class here...

          (function (_myTrait_) {
            var _initDone;
            var _callers;
            var _oneTimers;
            var _everies;
            var _framers;
            var _localCnt;
            var _easings;
            var _easeFns;

            // Initialize static variables here...

            /**
             * @param float t
             */
            _myTrait_._easeFns = function (t) {
              _easings = {
                bounceOut: function bounceOut(t) {
                  if (t < 1 / 2.75) {
                    return 7.5625 * t * t;
                  } else if (t < 2 / 2.75) {
                    return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
                  } else if (t < 2.5 / 2.75) {
                    return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
                  } else {
                    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                  }
                },
                easeIn: function easeIn(t) {
                  return t * t;
                },
                easeOut: function easeOut(t) {
                  return -1 * t * (t - 2);
                },
                easeInOut: function easeInOut(t) {
                  if (t < 0.5) return t * t;
                  return -1 * t * (t - 2);
                },
                easeInCirc: function easeInCirc(t) {
                  return -1 * (Math.sqrt(1 - t * t) - 1);
                },
                easeInCubic: function easeInCubic(t) {
                  return t * t * t;
                },
                easeOutCubic: function easeOutCubic(t) {
                  return (1 - t) * (1 - t) * (1 - t) + 1;
                },
                pow: function pow(t) {
                  return Math.pow(t, parseFloat(1.5 - t));
                },
                linear: function linear(t) {
                  return t;
                }
              };
            };

            /**
             * @param function fn
             * @param float thisObj
             * @param float args
             */
            _myTrait_.add = function (fn, thisObj, args) {
              if (thisObj || args) {
                var tArgs;
                if (Object.prototype.toString.call(args) === '[object Array]') {
                  tArgs = args;
                } else {
                  tArgs = Array.prototype.slice.call(arguments, 2);
                  if (!tArgs) tArgs = [];
                }
                _callers.push([thisObj, fn, tArgs]);
              } else {
                _callers.push(fn);
              }
            };

            /**
             * @param float name
             * @param float fn
             */
            _myTrait_.addEasingFn = function (name, fn) {
              _easings[name] = fn;
            };

            /**
             * @param float seconds
             * @param float fn
             * @param float name
             */
            _myTrait_.after = function (seconds, fn, name) {

              if (!name) {
                name = 'aft7491_' + _localCnt++;
              }

              _everies[name] = {
                step: Math.floor(seconds * 1000),
                fn: fn,
                nextTime: 0,
                remove: true
              };
            };

            /**
             * @param function fn
             */
            _myTrait_.asap = function (fn) {
              this.add(fn);
            };

            /**
             * @param String name  - Name of the easing to use
             * @param int delay  - Delay of the transformation in ms
             * @param function callback  - Callback to set the values
             * @param function over  - When animation is over
             */
            _myTrait_.ease = function (name, delay, callback, over) {

              var fn = _easings[name];
              if (!fn) fn = _easings.pow;
              var id_name = 'e_' + _localCnt++;
              _easeFns[id_name] = {
                easeFn: fn,
                duration: delay,
                cb: callback,
                over: over
              };
            };

            /**
             * @param float seconds
             * @param float fn
             * @param float name
             */
            _myTrait_.every = function (seconds, fn, name) {

              if (!name) {
                name = 't7491_' + _localCnt++;
              }

              _everies[name] = {
                step: Math.floor(seconds * 1000),
                fn: fn,
                nextTime: 0
              };
            };

            if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
            if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
            _myTrait_.__traitInit.push(function (interval, fn) {
              if (!_initDone) {
                this._easeFns();
                _localCnt = 1;
                this.polyfill();

                var frame, cancelFrame;
                if (typeof window != 'undefined') {
                  var frame = window['requestAnimationFrame'],
                      cancelFrame = window['cancelRequestAnimationFrame'];
                  ['', 'ms', 'moz', 'webkit', 'o'].forEach(function (x) {
                    if (!frame) {
                      frame = window[x + 'RequestAnimationFrame'];
                      cancelFrame = window[x + 'CancelAnimationFrame'] || window[x + 'CancelRequestAnimationFrame'];
                    }
                  });
                }

                var is_node_js = new Function('try { return this == global; } catch(e) { return false; }')();

                if (is_node_js) {
                  frame = function (cb) {
                    return setImmediate(cb); // (cb,1);
                  };
                } else {
                  if (!frame) {
                    frame = function (cb) {
                      return setTimeout(cb, 16);
                    };
                  }
                }

                if (!cancelFrame) cancelFrame = function (id) {
                  clearTimeout(id);
                };

                _callers = [];
                _oneTimers = {};
                _everies = {};
                _framers = [];
                _easeFns = {};
                var lastMs = 0;

                var _callQueQue = function _callQueQue() {
                  var ms = new Date().getTime(),
                      elapsed = lastMs - ms;

                  if (lastMs == 0) elapsed = 0;
                  var fn;
                  while (fn = _callers.shift()) {
                    if (Object.prototype.toString.call(fn) === '[object Array]') {
                      fn[1].apply(fn[0], fn[2]);
                    } else {
                      fn();
                    }
                  }

                  for (var i = 0; i < _framers.length; i++) {
                    var fFn = _framers[i];
                    fFn();
                  }
                  /*
                  _easeFns.push({
                  easeFn : fn,
                  duration : delay,
                  cb : callback
                  });
                  */
                  for (var n in _easeFns) {
                    if (_easeFns.hasOwnProperty(n)) {
                      var v = _easeFns[n];
                      if (!v.start) v.start = ms;
                      var delta = ms - v.start,
                          dt = delta / v.duration;
                      if (dt >= 1) {
                        dt = 1;
                        delete _easeFns[n];
                      }
                      v.cb(v.easeFn(dt));
                      if (dt == 1 && v.over) v.over();
                    }
                  }

                  for (var n in _oneTimers) {
                    if (_oneTimers.hasOwnProperty(n)) {
                      var v = _oneTimers[n];
                      v[0](v[1]);
                      delete _oneTimers[n];
                    }
                  }

                  for (var n in _everies) {
                    if (_everies.hasOwnProperty(n)) {
                      var v = _everies[n];
                      if (v.nextTime < ms) {
                        if (v.remove) {
                          if (v.nextTime > 0) {
                            v.fn();
                            delete _everies[n];
                          } else {
                            v.nextTime = ms + v.step;
                          }
                        } else {
                          v.fn();
                          v.nextTime = ms + v.step;
                        }
                      }
                      if (v.until) {
                        if (v.until < ms) {
                          delete _everies[n];
                        }
                      }
                    }
                  }

                  frame(_callQueQue);
                  lastMs = ms;
                };
                _callQueQue();
                _initDone = true;
              }
            });

            /**
             * @param  key
             * @param float fn
             * @param float value
             */
            _myTrait_.once = function (key, fn, value) {
              // _oneTimers

              _oneTimers[key] = [fn, value];
            };

            /**
             * @param function fn
             */
            _myTrait_.onFrame = function (fn) {

              _framers.push(fn);
            };

            /**
             * @param float t
             */
            _myTrait_.polyfill = function (t) {};

            /**
             * @param float fn
             */
            _myTrait_.removeFrameFn = function (fn) {

              var i = _framers.indexOf(fn);
              if (i >= 0) {
                if (fn._onRemove) {
                  fn._onRemove();
                }
                _framers.splice(i, 1);
                return true;
              } else {
                return false;
              }
            };
          })(this);
        };

        var later = function later(a, b, c, d, e, f, g, h) {
          var m = this,
              res;
          if (m instanceof later) {
            var args = [a, b, c, d, e, f, g, h];
            if (m.__factoryClass) {
              m.__factoryClass.forEach(function (initF) {
                res = initF.apply(m, args);
              });
              if (typeof res == 'function') {
                if (res._classInfo.name != later._classInfo.name) return new res(a, b, c, d, e, f, g, h);
              } else {
                if (res) return res;
              }
            }
            if (m.__traitInit) {
              m.__traitInit.forEach(function (initF) {
                initF.apply(m, args);
              });
            } else {
              if (typeof m.init == 'function') m.init.apply(m, args);
            }
          } else return new later(a, b, c, d, e, f, g, h);
        };
        // inheritance is here

        later._classInfo = {
          name: 'later'
        };
        later.prototype = new later_prototype();

        (function () {
          if (typeof define !== 'undefined' && define !== null && define.amd != null) {
            __amdDefs__['later'] = later;
            this.later = later;
          } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
            module.exports['later'] = later;
          } else {
            this.later = later;
          }
        }).call(new Function('return this')());

        (function (_myTrait_) {

          // Initialize static variables here...

          /**
           * @param Array firstArg
           */
          _myTrait_.all = function (firstArg) {

            var args;
            if (this.isArray(firstArg)) {
              args = firstArg;
            } else {
              args = Array.prototype.slice.call(arguments, 0);
            }
            // console.log(args);
            var targetLen = args.length,
                rCnt = 0,
                myPromises = [],
                myResults = new Array(targetLen);

            return this.then(function () {

              var allPromise = _promise();
              if (args.length == 0) {
                allPromise.resolve([]);
              }
              args.forEach(function (b, index) {
                if (b.then) {
                  // console.log("All, looking for ", b, " state = ", b._state);
                  myPromises.push(b);

                  b.then(function (v) {
                    myResults[index] = v;
                    // console.log("Got a promise...",b, " cnt = ", rCnt);
                    rCnt++;
                    if (rCnt == targetLen) {
                      allPromise.resolve(myResults);
                    }
                  }, function (v) {
                    allPromise.reject(v);
                  });
                } else {
                  allPromise.reject('Not list of promises');
                }
              });

              return allPromise;
            });
          };

          /**
           * @param function collectFn
           * @param array promiseList
           * @param Object results
           */
          _myTrait_.collect = function (collectFn, promiseList, results) {

            var args;
            if (this.isArray(promiseList)) {
              args = promiseList;
            } else {
              args = [promiseList];
            }

            // console.log(args);
            var targetLen = args.length,
                isReady = false,
                noMore = false,
                rCnt = 0,
                myPromises = [],
                myResults = results || {};

            return this.then(function () {

              var allPromise = _promise();
              args.forEach(function (b, index) {
                if (b.then) {
                  // console.log("All, looking for ", b, " state = ", b._state);
                  myPromises.push(b);

                  b.then(function (v) {
                    rCnt++;
                    isReady = collectFn(v, myResults);
                    if (isReady && !noMore || noMore == false && targetLen == rCnt) {
                      allPromise.resolve(myResults);
                      noMore = true;
                    }
                  }, function (v) {
                    allPromise.reject(v);
                  });
                } else {
                  allPromise.reject('Not list of promises');
                }
              });

              return allPromise;
            });
          };

          /**
           * @param function fn
           */
          _myTrait_.fail = function (fn) {
            return this.then(null, fn);
          };

          /**
           * @param float withValue
           */
          _myTrait_.fulfill = function (withValue) {
            // if(this._fulfilled || this._rejected) return;

            if (this._rejected) return;
            if (this._fulfilled && withValue != this._stateValue) {
              return;
            }

            var me = this;
            this._fulfilled = true;
            this._stateValue = withValue;

            var chCnt = this._childPromises.length;

            while (chCnt--) {
              var p = this._childPromises.shift();
              if (p._onFulfill) {
                try {
                  var x = p._onFulfill(withValue);
                  // console.log("Returned ",x);
                  if (typeof x != 'undefined') {
                    p.resolve(x);
                  } else {
                    p.fulfill(withValue);
                  }
                } catch (e) {
                  // console.error(e);
                  /*
                  If either onFulfilled or onRejected throws an exception e, promise2 
                  must be rejected with e as the reason.            
                  */
                  p.reject(e);
                }
              } else {
                /*
                If onFulfilled is not a function and promise1 is fulfilled, promise2 must be 
                fulfilled with the same value as promise1        
                */
                p.fulfill(withValue);
              }
            };
            // this._childPromises.length = 0;
            this._state = 1;
            this.triggerStateChange();
          };

          /**
           * @param float fname
           * @param float fn
           */
          _myTrait_.genPlugin = function (fname, fn) {
            var me = this;
            this.plugin(fname, function () {
              var args = Array.prototype.slice.call(arguments, 0);
              console.log('Plugin args', args);
              var myPromise = _promise();
              this.then(function (v) {
                var args2 = Array.prototype.slice.call(arguments, 0);
                var z = args.concat(args2);
                var res = fn.apply(this, z);
                myPromise.resolve(res);
              }, function (r) {
                myPromise.reject(r);
              });
              return myPromise;
            });
          };

          if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
          if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
          _myTrait_.__traitInit.push(function (onFulfilled, onRejected) {
            // 0 = pending
            // 1 = fullfilled
            // 2 = error

            this._state = 0;
            this._stateValue = null;
            this._isAPromise = true;
            this._childPromises = [];

            if (this.isFunction(onFulfilled)) this._onFulfill = onFulfilled;
            if (this.isFunction(onRejected)) this._onReject = onRejected;

            if (!onRejected && this.isFunction(onFulfilled)) {
              var me = this;
              later().asap(function () {
                onFulfilled(function (v) {
                  me.resolve(v);
                }, function (v) {
                  me.resolve(v);
                });
              });
            }
          });

          /**
           * @param float t
           */
          _myTrait_.isFulfilled = function (t) {
            return this._state == 1;
          };

          /**
           * @param float t
           */
          _myTrait_.isPending = function (t) {
            return this._state == 0;
          };

          /**
           * @param bool v
           */
          _myTrait_.isRejected = function (v) {
            return this._state == 2;
          };

          /**
           * @param float fname
           * @param float fn
           */
          _myTrait_.nodeStyle = function (fname, fn) {
            var me = this;
            this.plugin(fname, function () {
              var args = Array.prototype.slice.call(arguments, 0);
              var last,
                  userCb,
                  cbIndex = 0;
              if (args.length >= 0) {
                last = args[args.length - 1];
                if (Object.prototype.toString.call(last) == '[object Function]') {
                  userCb = last;
                  cbIndex = args.length - 1;
                }
              }

              var mainPromise = wishes().pending();
              this.then(function () {
                var nodePromise = wishes().pending();
                var args2 = Array.prototype.slice.call(arguments, 0);
                console.log('Orig args', args);
                console.log('Then args', args2);
                var z;
                if (args.length == 0) z = args2;
                if (args2.length == 0) z = args;
                if (!z) z = args2.concat(args);
                cbIndex = z.length; // 0,fn... 2
                if (userCb) cbIndex--;
                z[cbIndex] = function (err) {
                  if (err) {
                    console.log('Got error ', err);
                    nodePromise.reject(err);
                    mainPromise.reject(err);
                    return;
                  }
                  if (userCb) {
                    var args = Array.prototype.slice.call(arguments);
                    var res = userCb.apply(this, args);
                    mainPromise.resolve(res);
                  } else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    mainPromise.resolve.apply(mainPromise, args);
                  }
                };
                nodePromise.then(function (v) {
                  mainPromise.resolve(v);
                });

                console.log('nodeStyle after concat', z);
                var res = fn.apply(this, z);
                // myPromise.resolve(res);
                // return nodePromise;
                return nodePromise;
              }, function (v) {
                mainPromise.reject(v);
              });
              return mainPromise;
              /*
              log("..... now waiting "+ms);
              var p = waitFor(ms);
              p.then( function(v) {
              myPromise.resolve(v);
              });
              */
            });
          };

          /**
           * @param function fn
           */
          _myTrait_.onStateChange = function (fn) {

            if (!this._listeners) this._listeners = [];

            this._listeners.push(fn);
          };

          /**
           * @param float n
           * @param float fn
           */
          _myTrait_.plugin = function (n, fn) {

            _myTrait_[n] = fn;

            return this;
          };

          /**
           * @param Object obj
           */
          _myTrait_.props = function (obj) {
            var args = [];

            for (var n in obj) {
              if (obj.hasOwnProperty(n)) {
                args.push({
                  name: n,
                  promise: obj[n]
                });
              }
            }

            // console.log(args);
            var targetLen = args.length,
                rCnt = 0,
                myPromises = [],
                myResults = {};

            return this.then(function () {

              var allPromise = wishes().pending();
              args.forEach(function (def) {
                var b = def.promise,
                    name = def.name;
                if (b.then) {
                  // console.log("All, looking for ", b, " state = ", b._state);
                  myPromises.push(b);

                  b.then(function (v) {
                    myResults[name] = v;
                    rCnt++;
                    if (rCnt == targetLen) {
                      allPromise.resolve(myResults);
                    }
                  }, function (v) {
                    allPromise.reject(v);
                  });
                } else {
                  allPromise.reject('Not list of promises');
                }
              });

              return allPromise;
            });
          };

          /**
           * @param Object withReason
           */
          _myTrait_.reject = function (withReason) {

            // if(this._rejected || this._fulfilled) return;

            // conso

            if (this._fulfilled) return;
            if (this._rejected && withReason != this._rejectReason) return;

            this._state = 2;
            this._rejected = true;
            this._rejectReason = withReason;
            var me = this;

            var chCnt = this._childPromises.length;
            while (chCnt--) {
              var p = this._childPromises.shift();

              if (p._onReject) {
                try {
                  p._onReject(withReason);
                  p.reject(withReason);
                } catch (e) {
                  /*
                  If either onFulfilled or onRejected throws an exception e, promise2 
                  must be rejected with e as the reason.            
                  */
                  p.reject(e);
                }
              } else {
                /*
                If onFulfilled is not a function and promise1 is fulfilled, promise2 must be 
                fulfilled with the same value as promise1        
                */
                p.reject(withReason);
              }
            };

            // this._childPromises.length = 0;
            this.triggerStateChange();
          };

          /**
           * @param Object reason
           */
          _myTrait_.rejectReason = function (reason) {
            if (reason) {
              this._rejectReason = reason;
              return;
            }
            return this._rejectReason;
          };

          /**
           * @param Object x
           */
          _myTrait_.resolve = function (x) {

            // console.log("Resolving ", x);

            // can not do this many times...
            if (this._state > 0) return;

            if (x == this) {
              // error
              this._rejectReason = 'TypeError';
              this.reject(this._rejectReason);
              return;
            }

            if (this.isObject(x) && x._isAPromise) {

              //
              this._state = x._state;
              this._stateValue = x._stateValue;
              this._rejectReason = x._rejectReason;
              // ...
              if (this._state === 0) {
                var me = this;
                x.onStateChange(function () {
                  if (x._state == 1) {
                    // console.log("State change");
                    me.resolve(x.value());
                  }
                  if (x._state == 2) {
                    me.reject(x.rejectReason());
                  }
                });
              }
              if (this._state == 1) {
                // console.log("Resolved to be Promise was fulfilled ", x._stateValue);
                this.fulfill(this._stateValue);
              }
              if (this._state == 2) {
                // console.log("Relved to be Promise was rejected ", x._rejectReason);
                this.reject(this._rejectReason);
              }
              return;
            }
            if (this.isObject(x) && x.then && this.isFunction(x.then)) {
              // console.log("Thenable ", x);
              var didCall = false;
              try {
                // Call the x.then
                var me = this;
                x.then.call(x, function (y) {
                  if (didCall) return;
                  // we have now value for the promise...
                  // console.log("Got value from Thenable ", y);
                  me.resolve(y);
                  didCall = true;
                }, function (r) {
                  if (didCall) return;
                  // console.log("Got reject from Thenable ", r);
                  me.reject(r);
                  didCall = true;
                });
              } catch (e) {
                if (!didCall) this.reject(e);
              }
              return;
            }
            this._state = 1;
            this._stateValue = x;

            // fulfill the promise...
            this.fulfill(x);
          };

          /**
           * @param float newState
           */
          _myTrait_.state = function (newState) {
            if (typeof newState != 'undefined') {
              this._state = newState;
            }
            return this._state;
          };

          /**
           * @param function onFulfilled
           * @param function onRejected
           */
          _myTrait_.then = function (onFulfilled, onRejected) {

            if (!onRejected) onRejected = function () {};

            var p = new _promise(onFulfilled, onRejected);
            var me = this;

            if (this._state == 1) {
              later().asap(function () {
                me.fulfill(me.value());
              });
            }
            if (this._state == 2) {
              ater().asap(function () {
                me.reject(me.rejectReason());
              });
            }
            this._childPromises.push(p);
            return p;
          };

          /**
           * @param float t
           */
          _myTrait_.triggerStateChange = function (t) {
            var me = this;
            if (!this._listeners) return;
            this._listeners.forEach(function (fn) {
              fn(me);
            });
            // one-timer
            this._listeners.length = 0;
          };

          /**
           * @param float v
           */
          _myTrait_.value = function (v) {
            if (typeof v != 'undefined') {
              this._stateValue = v;
              return this;
            }
            return this._stateValue;
          };
        })(this);
      };

      var _promise = function _promise(a, b, c, d, e, f, g, h) {
        var m = this,
            res;
        if (m instanceof _promise) {
          var args = [a, b, c, d, e, f, g, h];
          if (m.__factoryClass) {
            m.__factoryClass.forEach(function (initF) {
              res = initF.apply(m, args);
            });
            if (typeof res == 'function') {
              if (res._classInfo.name != _promise._classInfo.name) return new res(a, b, c, d, e, f, g, h);
            } else {
              if (res) return res;
            }
          }
          if (m.__traitInit) {
            m.__traitInit.forEach(function (initF) {
              initF.apply(m, args);
            });
          } else {
            if (typeof m.init == 'function') m.init.apply(m, args);
          }
        } else return new _promise(a, b, c, d, e, f, g, h);
      };
      // inheritance is here

      _promise._classInfo = {
        name: '_promise'
      };
      _promise.prototype = new _promise_prototype();

      (function () {
        if (typeof define !== 'undefined' && define !== null && define.amd != null) {
          __amdDefs__['_promise'] = _promise;
          this._promise = _promise;
        } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
          module.exports['_promise'] = _promise;
        } else {
          this._promise = _promise;
        }
      }).call(new Function('return this')());

      // the subclass definition comes around here then

      // The class definition is here...
      var later_prototype = function later_prototype() {
        // Then create the traits and subclasses for this class here...

        (function (_myTrait_) {
          var _initDone;
          var _callers;
          var _oneTimers;
          var _everies;
          var _framers;
          var _localCnt;
          var _easings;
          var _easeFns;

          // Initialize static variables here...

          /**
           * @param float t
           */
          _myTrait_._easeFns = function (t) {
            _easings = {
              bounceOut: function bounceOut(t) {
                if (t < 1 / 2.75) {
                  return 7.5625 * t * t;
                } else if (t < 2 / 2.75) {
                  return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
                } else if (t < 2.5 / 2.75) {
                  return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
                } else {
                  return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                }
              },
              easeIn: function easeIn(t) {
                return t * t;
              },
              easeOut: function easeOut(t) {
                return -1 * t * (t - 2);
              },
              easeInOut: function easeInOut(t) {
                if (t < 0.5) return t * t;
                return -1 * t * (t - 2);
              },
              easeInCirc: function easeInCirc(t) {
                return -1 * (Math.sqrt(1 - t * t) - 1);
              },
              easeInCubic: function easeInCubic(t) {
                return t * t * t;
              },
              easeOutCubic: function easeOutCubic(t) {
                return (1 - t) * (1 - t) * (1 - t) + 1;
              },
              pow: function pow(t) {
                return Math.pow(t, parseFloat(1.5 - t));
              },
              linear: function linear(t) {
                return t;
              }
            };
          };

          /**
           * @param function fn
           * @param float thisObj
           * @param float args
           */
          _myTrait_.add = function (fn, thisObj, args) {
            if (thisObj || args) {
              var tArgs;
              if (Object.prototype.toString.call(args) === '[object Array]') {
                tArgs = args;
              } else {
                tArgs = Array.prototype.slice.call(arguments, 2);
                if (!tArgs) tArgs = [];
              }
              _callers.push([thisObj, fn, tArgs]);
            } else {
              _callers.push(fn);
            }
          };

          /**
           * @param float name
           * @param float fn
           */
          _myTrait_.addEasingFn = function (name, fn) {
            _easings[name] = fn;
          };

          /**
           * @param float seconds
           * @param float fn
           * @param float name
           */
          _myTrait_.after = function (seconds, fn, name) {

            if (!name) {
              name = 'aft7491_' + _localCnt++;
            }

            _everies[name] = {
              step: Math.floor(seconds * 1000),
              fn: fn,
              nextTime: 0,
              remove: true
            };
          };

          /**
           * @param function fn
           */
          _myTrait_.asap = function (fn) {
            this.add(fn);
          };

          /**
           * @param String name  - Name of the easing to use
           * @param int delay  - Delay of the transformation in ms
           * @param function callback  - Callback to set the values
           * @param function over  - When animation is over
           */
          _myTrait_.ease = function (name, delay, callback, over) {

            var fn = _easings[name];
            if (!fn) fn = _easings.pow;
            var id_name = 'e_' + _localCnt++;
            _easeFns[id_name] = {
              easeFn: fn,
              duration: delay,
              cb: callback,
              over: over
            };
          };

          /**
           * @param float seconds
           * @param float fn
           * @param float name
           */
          _myTrait_.every = function (seconds, fn, name) {

            if (!name) {
              name = 't7491_' + _localCnt++;
            }

            _everies[name] = {
              step: Math.floor(seconds * 1000),
              fn: fn,
              nextTime: 0
            };
          };

          if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
          if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
          _myTrait_.__traitInit.push(function (interval, fn) {
            if (!_initDone) {
              this._easeFns();
              _localCnt = 1;
              this.polyfill();

              var frame, cancelFrame;
              if (typeof window != 'undefined') {
                var frame = window['requestAnimationFrame'],
                    cancelFrame = window['cancelRequestAnimationFrame'];
                ['', 'ms', 'moz', 'webkit', 'o'].forEach(function (x) {
                  if (!frame) {
                    frame = window[x + 'RequestAnimationFrame'];
                    cancelFrame = window[x + 'CancelAnimationFrame'] || window[x + 'CancelRequestAnimationFrame'];
                  }
                });
              }

              var is_node_js = new Function('try { return this == global; } catch(e) { return false; }')();

              if (is_node_js) {
                frame = function (cb) {
                  return setImmediate(cb); // (cb,1);
                };
              } else {
                if (!frame) {
                  frame = function (cb) {
                    return setTimeout(cb, 16);
                  };
                }
              }

              if (!cancelFrame) cancelFrame = function (id) {
                clearTimeout(id);
              };

              _callers = [];
              _oneTimers = {};
              _everies = {};
              _framers = [];
              _easeFns = {};
              var lastMs = 0;

              var _callQueQue = function _callQueQue() {
                var ms = new Date().getTime(),
                    elapsed = lastMs - ms;

                if (lastMs == 0) elapsed = 0;
                var fn;
                while (fn = _callers.shift()) {
                  if (Object.prototype.toString.call(fn) === '[object Array]') {
                    fn[1].apply(fn[0], fn[2]);
                  } else {
                    fn();
                  }
                }

                for (var i = 0; i < _framers.length; i++) {
                  var fFn = _framers[i];
                  fFn();
                }
                /*
                _easeFns.push({
                easeFn : fn,
                duration : delay,
                cb : callback
                });
                */
                for (var n in _easeFns) {
                  if (_easeFns.hasOwnProperty(n)) {
                    var v = _easeFns[n];
                    if (!v.start) v.start = ms;
                    var delta = ms - v.start,
                        dt = delta / v.duration;
                    if (dt >= 1) {
                      dt = 1;
                      delete _easeFns[n];
                    }
                    v.cb(v.easeFn(dt));
                    if (dt == 1 && v.over) v.over();
                  }
                }

                for (var n in _oneTimers) {
                  if (_oneTimers.hasOwnProperty(n)) {
                    var v = _oneTimers[n];
                    v[0](v[1]);
                    delete _oneTimers[n];
                  }
                }

                for (var n in _everies) {
                  if (_everies.hasOwnProperty(n)) {
                    var v = _everies[n];
                    if (v.nextTime < ms) {
                      if (v.remove) {
                        if (v.nextTime > 0) {
                          v.fn();
                          delete _everies[n];
                        } else {
                          v.nextTime = ms + v.step;
                        }
                      } else {
                        v.fn();
                        v.nextTime = ms + v.step;
                      }
                    }
                    if (v.until) {
                      if (v.until < ms) {
                        delete _everies[n];
                      }
                    }
                  }
                }

                frame(_callQueQue);
                lastMs = ms;
              };
              _callQueQue();
              _initDone = true;
            }
          });

          /**
           * @param  key
           * @param float fn
           * @param float value
           */
          _myTrait_.once = function (key, fn, value) {
            // _oneTimers

            _oneTimers[key] = [fn, value];
          };

          /**
           * @param function fn
           */
          _myTrait_.onFrame = function (fn) {

            _framers.push(fn);
          };

          /**
           * @param float t
           */
          _myTrait_.polyfill = function (t) {};

          /**
           * @param float fn
           */
          _myTrait_.removeFrameFn = function (fn) {

            var i = _framers.indexOf(fn);
            if (i >= 0) {
              if (fn._onRemove) {
                fn._onRemove();
              }
              _framers.splice(i, 1);
              return true;
            } else {
              return false;
            }
          };
        })(this);
      };

      var later = function later(a, b, c, d, e, f, g, h) {
        var m = this,
            res;
        if (m instanceof later) {
          var args = [a, b, c, d, e, f, g, h];
          if (m.__factoryClass) {
            m.__factoryClass.forEach(function (initF) {
              res = initF.apply(m, args);
            });
            if (typeof res == 'function') {
              if (res._classInfo.name != later._classInfo.name) return new res(a, b, c, d, e, f, g, h);
            } else {
              if (res) return res;
            }
          }
          if (m.__traitInit) {
            m.__traitInit.forEach(function (initF) {
              initF.apply(m, args);
            });
          } else {
            if (typeof m.init == 'function') m.init.apply(m, args);
          }
        } else return new later(a, b, c, d, e, f, g, h);
      };
      // inheritance is here

      later._classInfo = {
        name: 'later'
      };
      later.prototype = new later_prototype();

      (function () {
        if (typeof define !== 'undefined' && define !== null && define.amd != null) {
          __amdDefs__['later'] = later;
          this.later = later;
        } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
          module.exports['later'] = later;
        } else {
          this.later = later;
        }
      }).call(new Function('return this')());

      // the subclass definition comes around here then

      // The class definition is here...
      var sequenceStepper_prototype = function sequenceStepper_prototype() {
        // Then create the traits and subclasses for this class here...

        // trait comes here...

        (function (_myTrait_) {
          var _eventOn;
          var _commands;

          // Initialize static variables here...

          /**
           * @param float t
           */
          _myTrait_.guid = function (t) {

            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

            //return Math.random();
            // return Math.random().toString(36);

            /*    
            return Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
            */
            /*        
            function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();*/
          };

          /**
           * @param float t
           */
          _myTrait_.isArray = function (t) {

            if (typeof t == 'undefined') return this.__isA;

            return Object.prototype.toString.call(t) === '[object Array]';
          };

          /**
           * @param float fn
           */
          _myTrait_.isFunction = function (fn) {
            return Object.prototype.toString.call(fn) == '[object Function]';
          };

          /**
           * @param float t
           */
          _myTrait_.isObject = function (t) {

            if (typeof t == 'undefined') return this.__isO;

            return t === Object(t);
          };
        })(this);

        (function (_myTrait_) {
          var _instances;

          // Initialize static variables here...

          if (!_myTrait_.hasOwnProperty('__factoryClass')) _myTrait_.__factoryClass = [];
          _myTrait_.__factoryClass.push(function (id, manual) {

            if (id === false && manual) return;

            if (!_instances) {
              _instances = {};
            }

            if (_instances[id]) {
              return _instances[id];
            } else {
              _instances[id] = this;
            }
          });

          /**
           * @param float cmdFunction
           * @param float failure
           */
          _myTrait_.addCommands = function (cmdFunction, failure) {

            if (this.isArray(cmdFunction)) {
              var me = this;
              cmdFunction.forEach(function (c) {
                me.addCommands(c);
              });
              return this;
            }

            this._commands.push({
              fnCmd: cmdFunction,
              fnFail: failure,
              async: true
            });
          };

          if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
          if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
          _myTrait_.__traitInit.push(function (myId, manual) {

            if (!this._commands) {
              this._commands = [];
              this.waitingList = [];
              this._index = 0;
            }

            var me = this;
            if (!manual) {
              later().every(1 / 30, function () {
                me.step();
              });
            }
          });

          /**
           * @param float t
           */
          _myTrait_.step = function (t) {
            var i = this._index,
                len = this._commands.length;

            if (i == len) return;

            var first = _promise(),
                currentProm = first,
                myPromise = _promise(),
                me = this;

            while (i < len) {
              var fn = this._commands[i];
              (function (fn) {
                currentProm = currentProm.then(function () {

                  var p = _promise();

                  // if(fn.async) {

                  fn.fnCmd(function (res) {
                    p.resolve(true);
                  }, function (failReason) {
                    p.resolve(true);
                    if (fn.fnFail) fn.fnFail(failReason);
                  });

                  return p;
                }).fail(function (reason) {
                  if (fn.fnFail) fn.fnFail(reason);
                });
              })(fn);
              this._index++;
              i++;
            }

            currentProm.then(function () {
              me.waitingList.shift(); // remvoe this promise from the queque
              myPromise.resolve(true);
              if (me.waitingList.length) {
                var newP = me.waitingList[0];
                newP.resolve(true);
              }
            }).fail(function (m) {});

            this.waitingList.push(first);
            if (this.waitingList.length == 1) {
              first.resolve(true);
            }
            return myPromise;
          };
        })(this);
      };

      var sequenceStepper = function sequenceStepper(a, b, c, d, e, f, g, h) {
        var m = this,
            res;
        if (m instanceof sequenceStepper) {
          var args = [a, b, c, d, e, f, g, h];
          if (m.__factoryClass) {
            m.__factoryClass.forEach(function (initF) {
              res = initF.apply(m, args);
            });
            if (typeof res == 'function') {
              if (res._classInfo.name != sequenceStepper._classInfo.name) return new res(a, b, c, d, e, f, g, h);
            } else {
              if (res) return res;
            }
          }
          if (m.__traitInit) {
            m.__traitInit.forEach(function (initF) {
              initF.apply(m, args);
            });
          } else {
            if (typeof m.init == 'function') m.init.apply(m, args);
          }
        } else return new sequenceStepper(a, b, c, d, e, f, g, h);
      };
      // inheritance is here

      sequenceStepper._classInfo = {
        name: 'sequenceStepper'
      };
      sequenceStepper.prototype = new sequenceStepper_prototype();

      // the subclass definition comes around here then

      // The class definition is here...
      var streamProcessor_prototype = function streamProcessor_prototype() {
        // Then create the traits and subclasses for this class here...

        // trait comes here...

        (function (_myTrait_) {

          // Initialize static variables here...

          /**
           * @param float t
           */
          _myTrait_.guid = function (t) {

            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          };

          /**
           * @param float t
           */
          _myTrait_.isArray = function (t) {

            if (typeof t == 'undefined') return this.__isA;

            return Object.prototype.toString.call(t) === '[object Array]';
          };

          /**
           * @param float fn
           */
          _myTrait_.isFunction = function (fn) {
            return Object.prototype.toString.call(fn) == '[object Function]';
          };

          /**
           * @param float t
           */
          _myTrait_.isObject = function (t) {

            if (typeof t == 'undefined') return this.__isO;

            return t === Object(t);
          };
        })(this);

        (function (_myTrait_) {

          // Initialize static variables here...

          /**
           * @param float withValue
           */
          _myTrait_.cont = function (withValue) {

            if (this.isArray(withValue)) {

              var me = this;
              var newList = this._list.slice(this._index + 1);

              if (newList.length == 0) {
                this.step();
                return;
              }

              var all = [];
              withValue.forEach(function (v) {
                var newList = me._list.slice(me._index + 1);
                var stream = simpleStream(me);
                me._subStreams.push(stream);
                stream.addObserver(newList);
                all.push(stream.pushValue(v));
              });

              var wait = _promise();
              wait.all(all).then(function () {
                var r = [];
                me._subStreams.length = 0;
                all.forEach(function (p) {
                  r.push(p.value());
                });
                me.resolve(r);
              });
              wait.resolve(true);
            } else {

              if (typeof withValue != 'undefined') {
                this._context.value = withValue;
              }

              this.step();
            }
          };

          /**
           * @param float name
           * @param float value
           */
          _myTrait_.ctxVar = function (name, value) {

            if (typeof value == 'undefined') {
              var v = this._contextVars[name];
              if (typeof v == 'undefined') {
                if (this._parent) {
                  return this._parent.ctxVar(name);
                }
              }
              return v;
            }

            this._contextVars[name] = value;
          };

          /**
           * @param float name
           */
          _myTrait_.get = function (name) {

            if (this._closure) {
              var v = this._contextVars[name];
              if (typeof v == 'undefined') {
                return this._parent.get(name);
              }
              return v;
            }

            var v = this._contextVars[name];
            if (typeof v == 'undefined') {
              if (this._parent) {
                return this._parent.get(name);
              }
            }
            return v;
          };

          /**
           * @param float t
           */
          _myTrait_.getRest = function (t) {};

          /**
           * @param float t
           */
          _myTrait_.getState = function (t) {

            return this._stopState;
          };

          /**
           * @param float t
           */
          _myTrait_.getValue = function (t) {

            // simple value processor

            if (!this._context && this._parent) {
              return this._parent.getValue();
            }

            if (this._context && !this._context.value && !this._context.initWith && this._parent) {
              return this._parent.getValue();
            }

            return this._context.value || this._context.initWith;
          };

          if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
          if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
          _myTrait_.__traitInit.push(function (parentProcessor, isClosure) {

            // The context of the processor
            this._context = {};
            this._contextVars = {};

            // should we kill all the substreams too...?
            this._subStreams = [];

            this._stopState = 0;

            if (parentProcessor) {
              this._parent = parentProcessor;
            }

            if (isClosure) this._closure = true;
          });

          /**
           * @param float t
           */
          _myTrait_.killAll = function (t) {

            if (this._subStreams) {
              this._subStreams.forEach(function (s) {
                s.killAll();
              });
            }
          };

          /**
           * @param float withValue
           */
          _myTrait_.run = function (withValue) {

            if (this._closure) {
              if (this._parent) {
                this._parent.run(withValue);
                return;
              } else {
                console.error('No parent for closure');
                //console.trace();
              }
            }
            this._stopState = 1;
            this.cont(withValue);
            return;
          };

          /**
           * @param float name
           * @param float value
           */
          _myTrait_.set = function (name, value) {
            if (typeof value != 'undefined') {

              if (this._closure) {
                if (typeof this._contextVars[name] != 'undefined') {
                  this._contextVars[name] = value;
                } else {
                  if (this._parent) {
                    this._parent.set(name, value);
                    return this;
                  }
                }
              }

              if (typeof this._contextVars[name] == 'undefined') {
                if (this._parent) {
                  this._parent.set(name, value);
                  return this;
                }
              }

              this._contextVars[name] = value;
              return this;
            }
          };

          /**
           * @param float ctx
           */
          _myTrait_.setContext = function (ctx) {
            this._context = ctx;
          };

          /**
           * @param float newParent
           */
          _myTrait_.setParent = function (newParent) {
            this._parent = newParent;
          };

          /**
           * @param float list
           */
          _myTrait_.start = function (list) {

            this._list = list;
            this._index = -1;

            this.step();
          };

          /**
           * @param float t
           */
          _myTrait_.step = function (t) {

            this._index++;
            var i = this._index,
                me = this;

            if (this._list[i]) {

              var obs = this._list[i];
              // Call the observer

              if (this.isObject(obs) && !this.isFunction(obs)) {

                if (obs.closure) {
                  obs.closure.setParent(this);
                  obs.fn.apply(obs.closure, [obs.closure]);
                } else {
                  // var ctx = streamProcessor()
                  obs.fn.apply(this, [this]);
                }
              } else {
                obs.apply(this, [this]);
              }
            } else {
              if (typeof this._context.value == 'undefined') {
                this._context.value = this._context.initWith;
              }
              if (this._stopState < 2) {
                this._stopState = 7;
              }
              this.resolve(this._context.value);
            }
          };

          /**
           * @param float t
           */
          _myTrait_.stopStream = function (t) {
            if (!this._context.value) {
              this._context.value = this._context.initWith;
            }
            this._stopState = 3;
            this.resolve(this._context.value);
          };
        })(this);
      };

      var streamProcessor = function streamProcessor(a, b, c, d, e, f, g, h) {
        var m = this,
            res;
        if (m instanceof streamProcessor) {
          var args = [a, b, c, d, e, f, g, h];
          if (m.__factoryClass) {
            m.__factoryClass.forEach(function (initF) {
              res = initF.apply(m, args);
            });
            if (typeof res == 'function') {
              if (res._classInfo.name != streamProcessor._classInfo.name) return new res(a, b, c, d, e, f, g, h);
            } else {
              if (res) return res;
            }
          }
          if (m.__traitInit) {
            m.__traitInit.forEach(function (initF) {
              initF.apply(m, args);
            });
          } else {
            if (typeof m.init == 'function') m.init.apply(m, args);
          }
        } else return new streamProcessor(a, b, c, d, e, f, g, h);
      };
      // inheritance is here _promise

      streamProcessor_prototype.prototype = _promise.prototype;

      streamProcessor._classInfo = {
        name: 'streamProcessor'
      };
      streamProcessor.prototype = new streamProcessor_prototype();

      (function () {
        if (typeof define !== 'undefined' && define !== null && define.amd != null) {
          __amdDefs__['streamProcessor'] = streamProcessor;
          this.streamProcessor = streamProcessor;
        } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
          module.exports['streamProcessor'] = streamProcessor;
        } else {
          this.streamProcessor = streamProcessor;
        }
      }).call(new Function('return this')());

      (function (_myTrait_) {
        var _streams;

        // Initialize static variables here...

        /**
         * @param float obs
         * @param float closure
         */
        _myTrait_.addObserver = function (obs, closure) {

          if (this.isArray(obs)) {
            var m = this;
            obs.forEach(function (o) {
              m.addObserver(o, closure);
            });
            return;
          }

          if (this.isObject(obs) && !this.isFunction(obs)) {
            this._observers.push(obs);
            return;
          }

          // marching through the stream...
          // this._observers.push(obs);

          this._observers.push({
            fn: obs,
            closure: closure
          });

          return this;
        };

        /**
         * @param float fn
         * @param float ms
         */
        _myTrait_.branch = function (fn, ms) {

          var me = this;
          var lastMs = new Date().getTime();

          me._lastBranch = lastMs;

          this.addObserver(function (m) {
            var nowTime = new Date().getTime(),
                value = m.getValue();
            setTimeout(function () {

              var currTime = new Date().getTime();
              if (currTime - lastMs < ms) return;

              var cnt = 0;
              if (cnt = me.isActiveRunning()) {
                return;
              }

              m = me.getLastProcess();
              if (m.getState() == 3) {
                me._lastBranch = currTime;
                lastMs = currTime;
                fn(value);
              }
            }, ms);
            m.run();
          });

          return this;
        };

        /**
         * @param float fn
         * @param float ms
         */
        _myTrait_.branchIfOk = function (fn, ms) {

          var me = this;
          var lastMs = new Date().getTime();

          me._lastBranch = lastMs;

          this.addObserver(function (m) {
            var nowTime = new Date().getTime(),
                value = m.getValue();
            setTimeout(function () {
              var currTime = new Date().getTime();
              if (currTime - lastMs < ms) return;
              var cnt = 0;
              if (cnt = me.isActiveRunning()) {
                return;
              }
              m = me.getLastProcess();
              if (m.getState() == 7) {
                me._lastBranch = currTime;
                lastMs = currTime;
                fn(value);
              }
            }, ms);
            m.run();
          });
          return this;
        };

        /**
         * @param float ms
         */
        _myTrait_.collectValuesFor = function (ms) {
          var me = this;
          var lastMs = new Date().getTime();

          me._lastBranch = lastMs;

          this.addObserver(function (m) {
            var nowTime = new Date().getTime(),
                value = m.getValue();

            setTimeout(function () {
              var currTime = new Date().getTime();

              if (currTime - lastMs < ms) return;

              var cnt = me.isActiveRunning();
              var lastProcess = me.getLastProcess();
              // stop if there is something in there...
              if (cnt > 1 && m != lastProcess) {
                m.stopStream(m.getValue()); // don't allow to go any further...
                return;
              }
              lastProcess.run(); // continue the process...
            }, ms);
            // m.run();
          });
          return this;
        };

        /**
         * @param float streams
         * @param float fn
         */
        _myTrait_.combineLatest = function (streams, fn) {
          var me = this;

          var myRes = [],
              cnt = streams.length;

          var allHasValue = function allHasValue() {
            var b = true;
            for (var i = 0; i < cnt; i++) {
              if (typeof myRes[i] == 'undefined') b = false;
            }
            return b;
          };

          streams.forEach(function (s, index) {
            s.addObserver(function (myProcess) {
              myRes[index] = myProcess.getValue();
              if (allHasValue()) {
                me.pushValue(myRes);
              }
              myProcess.run();
            });
          });

          return this;
        };

        /**
         * @param float fn
         */
        _myTrait_.filter = function (fn) {

          var me = this;

          this.addObserver(function (m) {
            var arr = m.getValue();
            var res = [];

            if (me.isArray(arr)) {
              arr.forEach(function (v) {
                if (fn(v)) res.push(v);
              });
            } else {
              if (fn(arr)) {
                m.run(arr);
                return;
              } else {
                m.stopStream();
              }
              return;
            }

            if (res.length) {
              m.run(res);
            } else {
              m.stopStream();
            }
          });

          return this;
        };

        /**
         * @param float fn
         */
        _myTrait_.forContext = function (fn) {
          var me = this;
          me.addObserver(function (m) {
            var arr = m.getValue();
            var res = [];

            if (me.isArray(arr)) {
              arr.forEach(function (v, i) {
                res.push(fn(v, i, m));
              });
            } else {
              res.push(fn(arr, 0, m));
            }
            m.run(arr);
          });
        };

        /**
         * @param float fn
         */
        _myTrait_.forEach = function (fn) {
          var me = this;
          me.addObserver(function (m) {
            var arr = m.getValue();
            var res = [];

            if (me.isArray(arr)) {
              arr.forEach(function (v) {
                res.push(fn(v));
              });
            } else {
              res.push(fn(arr));
            }
            m.run(arr);
          });
          return this;
        };

        /**
         * @param float t
         */
        _myTrait_.getLastProcess = function (t) {

          var i = this._active.length;
          if (i > 0) return this._active[i - 1];

          return this._lastProcess;
        };

        if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
        if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
        _myTrait_.__traitInit.push(function (parentProcessor) {
          this._childIndex = 0;
          this._childStreams = [];
          this._values = [];
          this._active = [];

          this._lastProcess;

          // start these observers when a value arrives...
          this._observers = [];

          this._id = this.guid();
          if (!_streams) {
            _streams = {};
          }

          _streams[this._id] = this;

          if (parentProcessor) {
            this._parentProcessor = parentProcessor;
          }
        });

        /**
         * @param float t
         */
        _myTrait_.isActiveRunning = function (t) {
          return this._active.length;
        };

        /**
         * @param float t
         */
        _myTrait_.killAll = function (t) {

          this._active.forEach(function (p) {
            p.killAll();
            p.stopStream();
          });
        };

        /**
         * @param float fn
         */
        _myTrait_.map = function (fn) {
          var me = this;
          me.addObserver(function (m) {
            var arr = m.getValue();
            var res = [];

            if (me.isArray(arr)) {
              arr.forEach(function (v) {
                res.push(fn(v));
              });
            } else {
              res.push(fn(arr));
            }
            m.run(res);
          });
          return this;
        };

        /**
         * @param float val
         */
        _myTrait_.pushValue = function (val) {

          var myProm = _promise();
          this.startProcess({
            initWith: val
          }, myProm);
          return myProm;
        };

        /**
         * @param float fn
         * @param float initWith
         */
        _myTrait_.reduce = function (fn, initWith) {
          var me = this;
          me.addObserver(function (m) {
            var arr = m.getValue();
            var res = [];

            if (me.isArray(arr)) {
              res = arr.reduce(fn, initWith);
            } else {
              res = [arr].reduce(fn, initWith);
            }
            m.run(res);
          });
          return this;
        };

        /**
         * @param float context
         * @param float myProm
         */
        _myTrait_.startProcess = function (context, myProm) {

          // create copy of the observers...
          var list = this._observers.slice();

          var process = streamProcessor(this._parentProcessor);
          process.setContext(context);
          process.start(list);

          process._streamPromise = myProm;

          this._active.push(process);

          var me = this;
          // The process exits, all done...
          process.then(function (v) {
            // Should remove the process   
            var i = me._active.indexOf(process);
            me._active.splice(i, 1);
            myProm.resolve(v);
            me._lastProcess = process;
          });
        };

        /**
         * @param float t
         */
        _myTrait_.step = function (t) {};
      })(this);
    };

    var simpleStream = function simpleStream(a, b, c, d, e, f, g, h) {
      var m = this,
          res;
      if (m instanceof simpleStream) {
        var args = [a, b, c, d, e, f, g, h];
        if (m.__factoryClass) {
          m.__factoryClass.forEach(function (initF) {
            res = initF.apply(m, args);
          });
          if (typeof res == 'function') {
            if (res._classInfo.name != simpleStream._classInfo.name) return new res(a, b, c, d, e, f, g, h);
          } else {
            if (res) return res;
          }
        }
        if (m.__traitInit) {
          m.__traitInit.forEach(function (initF) {
            initF.apply(m, args);
          });
        } else {
          if (typeof m.init == 'function') m.init.apply(m, args);
        }
      } else return new simpleStream(a, b, c, d, e, f, g, h);
    };
    // inheritance is here

    simpleStream._classInfo = {
      name: 'simpleStream'
    };
    simpleStream.prototype = new simpleStream_prototype();

    // the subclass definition comes around here then

    // The class definition is here...
    var shellWindow_prototype = function shellWindow_prototype() {
      // Then create the traits and subclasses for this class here...

      // trait comes here...

      (function (_myTrait_) {

        // Initialize static variables here...

        /**
         * @param float t
         */
        _myTrait_.guid = function (t) {

          return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        };

        /**
         * @param float t
         */
        _myTrait_.isArray = function (t) {

          if (typeof t == 'undefined') return this.__isA;

          return Object.prototype.toString.call(t) === '[object Array]';
        };

        /**
         * @param float fn
         */
        _myTrait_.isFunction = function (fn) {
          return Object.prototype.toString.call(fn) == '[object Function]';
        };

        /**
         * @param float t
         */
        _myTrait_.isObject = function (t) {

          if (typeof t == 'undefined') return this.__isO;

          return t === Object(t);
        };
      })(this);

      (function (_myTrait_) {

        // Initialize static variables here...

        if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
        if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
        _myTrait_.__traitInit.push(function (mainDiv, fileSystemData, parentShell) {
          /*var demo = _data(url, {
          createWith : {
          tmp : {},
          bin : {}
          }
          });
          */

          css().bind('.mainWindow', {
            width: '600px',
            height: 'auto',
            overflow: 'hidden',
            border: 'none',
            'box-shadow': '-1px -1px 18px 0px rgba(50, 50, 50, 0.9);'
          });
          css().bind('.mainTools', {
            width: '600px',
            height: '20px',
            overflow: 'hidden',
            cursor: 'pointer',
            border: '1px solid gray;',
            'background-color': '#333'
          });

          var x = 100,
              y = 100,
              sx,
              sy;

          var mainCont = mainDiv.div();
          mainCont.addClass('mainWindow');
          mainCont.absolute();
          mainCont.x(x).y(y);

          mainCont.addClass('animClassName');

          var mainTools = mainCont.div('mainTools');
          mainTools.draggable(function (o, dv) {
            sx = x;
            sy = y;
          }, function (o, dv) {
            mainCont.x(dv.dx + sx);
            mainCont.y(dv.dy + sy);
            x = dv.dx + sx;
            y = dv.dy + sy;
          }, function (o, dv) {});

          var main = mainCont.div();

          this._mainWindow = main;

          fileSystemData.then(function () {

            css().bind('.aceHTML', {
              width: '1200px',
              height: '350px'
            });
            var shell = itemShell(fileSystemData);

            shell.initializeShell(fileSystemData, parentShell);
            shell.mainWindow(mainDiv);

            // clearScreen
            mainTools.button().text('dir').on('click', function () {
              shell.exec('dir');
            });
            mainTools.button().text('cls').on('click', function () {
              shell.clearScreen();
            });;

            mainTools.button().text('close').on('click', function () {
              mainCont.addClass('animZoomOut');
            });

            shell.addPipedCmd('grep', function (data, params, fn) {
              if (params) {
                params = params.trim();
                if (data && data.match(params)) {
                  return fn(data);
                } else {
                  fn(null);
                }
                return;
              }
              fn();
            });

            main.div().add(shell.getOutputArea());
            main.add(shell.getInputField());

            var ta = shell.getInputField();
            var stream = simpleStream();
            var outDiv = main.div();
            stream.branch(function (v) {
              outDiv.clear();
            }, 600);
            stream.filter(function (v) {
              if (v && v.length > 0) return shell.isValidCommand(v);
            });
            stream.collectValuesFor(100);
            stream.forEach(function (v) {
              outDiv.text(v + ' command entered');
            });

            ta.on('value', function () {
              stream.pushValue(ta.val());
            });
            /*
            $(ta._dom).on("keyup", function() {
            stream.pushValue(ta.val());
            });
            */

            setTimeout(function () {
              shell.exec('ls');
            }, 100);
          });
        });
      })(this);
    };

    var shellWindow = function shellWindow(a, b, c, d, e, f, g, h) {
      var m = this,
          res;
      if (m instanceof shellWindow) {
        var args = [a, b, c, d, e, f, g, h];
        if (m.__factoryClass) {
          m.__factoryClass.forEach(function (initF) {
            res = initF.apply(m, args);
          });
          if (typeof res == 'function') {
            if (res._classInfo.name != shellWindow._classInfo.name) return new res(a, b, c, d, e, f, g, h);
          } else {
            if (res) return res;
          }
        }
        if (m.__traitInit) {
          m.__traitInit.forEach(function (initF) {
            initF.apply(m, args);
          });
        } else {
          if (typeof m.init == 'function') m.init.apply(m, args);
        }
      } else return new shellWindow(a, b, c, d, e, f, g, h);
    };
    // inheritance is here

    shellWindow._classInfo = {
      name: 'shellWindow'
    };
    shellWindow.prototype = new shellWindow_prototype();

    (function () {
      if (typeof define !== 'undefined' && define !== null && define.amd != null) {
        __amdDefs__['shellWindow'] = shellWindow;
        this.shellWindow = shellWindow;
      } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
        module.exports['shellWindow'] = shellWindow;
      } else {
        this.shellWindow = shellWindow;
      }
    }).call(new Function('return this')());

    (function (_myTrait_) {
      var head;
      var styleTag;
      var bexp;
      var bexp2;
      var _conversions;

      // Initialize static variables here...

      /**
       * @param float main
       * @param float data
       */
      _myTrait_.createWindow = function (main, data) {

        var myWindow = shellWindow(main, data);

        var darkBody = {
          'background-color': '#777',
          'color': 'white'
        },
            black = {
          'background-color': '#000',
          'opacity': 0.98
        };

        css().bind('.cmdInfo', {
          color: 'cyan'
        });
        css().bind('pre', {
          margin: '1px'
        });
        css().bind('.shellCmdOutput', darkBody, black, {
          height: '400px',
          'overflow': 'auto'
        });
        css().bind('.shellCmdInput', darkBody, black, {
          width: '100%',
          height: '50px'
        });
        css().bind('.cmdline', {
          'color': '#0f0'
        });
        css().bind('.dir', {
          'color': '#05f',
          'cursor': 'pointer'
        });
        css().bind('.link', {
          'color': '#9af',
          'cursor': 'pointer',
          'text-decoration': 'underline'
        });
        css().bind('.warning', {
          'color': 'yellow'
        });
        css().bind('.error', {
          'color': 'red'
        });
      };

      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty('__traitInit')) _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = [];
      _myTrait_.__traitInit.push(function (main) {

        css().animation('animClassName1', {
          duration: '2s',
          'iteration-count': 1,
          'timing-function': 'ease-in'
        }, {
          rotate: -100
        }, 0.5, {
          rotate: 100
        }, {
          rotate: 0
        });

        css().animation('animZoomOut', {
          duration: '2s',
          'iteration-count': 1,
          'timing-function': 'ease-in'
        }, {
          'transform': 'scale(1,1)'
        }, {
          'transform': 'translate(50px,100px) scale(0,0)'
        });
      });
    })(this);
  };

  var shellModule = function shellModule(a, b, c, d, e, f, g, h) {
    var m = this,
        res;
    if (m instanceof shellModule) {
      var args = [a, b, c, d, e, f, g, h];
      if (m.__factoryClass) {
        m.__factoryClass.forEach(function (initF) {
          res = initF.apply(m, args);
        });
        if (typeof res == 'function') {
          if (res._classInfo.name != shellModule._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (m.__traitInit) {
        m.__traitInit.forEach(function (initF) {
          initF.apply(m, args);
        });
      } else {
        if (typeof m.init == 'function') m.init.apply(m, args);
      }
    } else return new shellModule(a, b, c, d, e, f, g, h);
  };
  // inheritance is here

  shellModule._classInfo = {
    name: 'shellModule'
  };
  shellModule.prototype = new shellModule_prototype();

  (function () {
    if (typeof define !== 'undefined' && define !== null && define.amd != null) {
      __amdDefs__['shellModule'] = shellModule;
      this.shellModule = shellModule;
    } else if (typeof module !== 'undefined' && module !== null && module.exports != null) {
      module.exports['shellModule'] = shellModule;
    } else {
      this.shellModule = shellModule;
    }
  }).call(new Function('return this')());

  if (typeof define !== 'undefined' && define !== null && define.amd != null) {
    define(__amdDefs__);
  }
}).call(new Function('return this')());

// --- let's not ---

// --- let's not ---
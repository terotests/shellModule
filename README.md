Simple usage 
------------

Simple usage of the class

```
  var cs = css();
  cs.animation("animClassName", {
        duration : "2s",
        "iteration-count" : 1,
        "timing-function" : "ease-in"
    },  { rotate : -100 }, 0.5, { rotate : 100 }, { rotate : 0 }); 
```

[Demo at jsFiddle] (http://jsfiddle.net/az2daat0/)
















   

 


   
#### Class shellModule


- [createWindow](README.md#shellModule_createWindow)



   
    
##### trait _dataTrait

- [guid](README.md#_dataTrait_guid)
- [isArray](README.md#_dataTrait_isArray)
- [isFunction](README.md#_dataTrait_isFunction)
- [isObject](README.md#_dataTrait_isObject)


    
    
    
    
    
    
    
    


   
      
    
      
            
#### Class itemShell


- [_execShellCmd](README.md#itemShell__execShellCmd)
- [_getCmdFromStr](README.md#itemShell__getCmdFromStr)
- [_getCmdStr](README.md#itemShell__getCmdStr)
- [_getParamsFromStr](README.md#itemShell__getParamsFromStr)
- [_initShellCmds](README.md#itemShell__initShellCmds)
- [_outputRaw](README.md#itemShell__outputRaw)
- [_pathToObject](README.md#itemShell__pathToObject)
- [addPipedCmd](README.md#itemShell_addPipedCmd)
- [addToHistory](README.md#itemShell_addToHistory)
- [clearScreen](README.md#itemShell_clearScreen)
- [clearVar](README.md#itemShell_clearVar)
- [exec](README.md#itemShell_exec)
- [exec2](README.md#itemShell_exec2)
- [getCurrent](README.md#itemShell_getCurrent)
- [getInitData](README.md#itemShell_getInitData)
- [getInputField](README.md#itemShell_getInputField)
- [getMainWindow](README.md#itemShell_getMainWindow)
- [getOutputArea](README.md#itemShell_getOutputArea)
- [getRoot](README.md#itemShell_getRoot)
- [getVar](README.md#itemShell_getVar)
- [initializeShell](README.md#itemShell_initializeShell)
- [isValidCommand](README.md#itemShell_isValidCommand)
- [lineToStream](README.md#itemShell_lineToStream)
- [mainWindow](README.md#itemShell_mainWindow)
- [output](README.md#itemShell_output)
- [parsePathName](README.md#itemShell_parsePathName)
- [saveVar](README.md#itemShell_saveVar)
- [scrollBottom](README.md#itemShell_scrollBottom)
- [setVar](README.md#itemShell_setVar)
- [startProcess](README.md#itemShell_startProcess)



   
    
##### trait _dataTrait

- [guid](README.md#_dataTrait_guid)
- [isArray](README.md#_dataTrait_isArray)
- [isFunction](README.md#_dataTrait_isFunction)
- [isObject](README.md#_dataTrait_isObject)


    
    


   
      
    



      
    
      
            
#### Class simpleStream


- [addObserver](README.md#simpleStream_addObserver)
- [branch](README.md#simpleStream_branch)
- [branchIfOk](README.md#simpleStream_branchIfOk)
- [collectValuesFor](README.md#simpleStream_collectValuesFor)
- [combineLatest](README.md#simpleStream_combineLatest)
- [filter](README.md#simpleStream_filter)
- [forContext](README.md#simpleStream_forContext)
- [forEach](README.md#simpleStream_forEach)
- [getLastProcess](README.md#simpleStream_getLastProcess)
- [isActiveRunning](README.md#simpleStream_isActiveRunning)
- [killAll](README.md#simpleStream_killAll)
- [map](README.md#simpleStream_map)
- [pushValue](README.md#simpleStream_pushValue)
- [reduce](README.md#simpleStream_reduce)
- [startProcess](README.md#simpleStream_startProcess)
- [step](README.md#simpleStream_step)



   
    
    
    
##### trait _dataTrait

- [guid](README.md#_dataTrait_guid)
- [isArray](README.md#_dataTrait_isArray)
- [isFunction](README.md#_dataTrait_isFunction)
- [isObject](README.md#_dataTrait_isObject)


    
    
    
    
    
    
    
    


   
      
            
#### Class _promise


- [all](README.md#_promise_all)
- [collect](README.md#_promise_collect)
- [fail](README.md#_promise_fail)
- [fulfill](README.md#_promise_fulfill)
- [genPlugin](README.md#_promise_genPlugin)
- [isFulfilled](README.md#_promise_isFulfilled)
- [isPending](README.md#_promise_isPending)
- [isRejected](README.md#_promise_isRejected)
- [nodeStyle](README.md#_promise_nodeStyle)
- [onStateChange](README.md#_promise_onStateChange)
- [plugin](README.md#_promise_plugin)
- [props](README.md#_promise_props)
- [reject](README.md#_promise_reject)
- [rejectReason](README.md#_promise_rejectReason)
- [resolve](README.md#_promise_resolve)
- [state](README.md#_promise_state)
- [then](README.md#_promise_then)
- [triggerStateChange](README.md#_promise_triggerStateChange)
- [value](README.md#_promise_value)



   
    
##### trait util_fns

- [isArray](README.md#util_fns_isArray)
- [isFunction](README.md#util_fns_isFunction)
- [isObject](README.md#util_fns_isObject)


    
    
    
    


   
      
    
      
            
#### Class later


- [_easeFns](README.md#later__easeFns)
- [add](README.md#later_add)
- [addEasingFn](README.md#later_addEasingFn)
- [after](README.md#later_after)
- [asap](README.md#later_asap)
- [ease](README.md#later_ease)
- [every](README.md#later_every)
- [once](README.md#later_once)
- [onFrame](README.md#later_onFrame)
- [polyfill](README.md#later_polyfill)
- [removeFrameFn](README.md#later_removeFrameFn)



   


   



      
    



      
    
      
    
      
            
#### Class later


- [_easeFns](README.md#later__easeFns)
- [add](README.md#later_add)
- [addEasingFn](README.md#later_addEasingFn)
- [after](README.md#later_after)
- [asap](README.md#later_asap)
- [ease](README.md#later_ease)
- [every](README.md#later_every)
- [once](README.md#later_once)
- [onFrame](README.md#later_onFrame)
- [polyfill](README.md#later_polyfill)
- [removeFrameFn](README.md#later_removeFrameFn)



   


   



      
    
      
            
#### Class sequenceStepper


- [_classFactory](README.md#sequenceStepper__classFactory)
- [addCommands](README.md#sequenceStepper_addCommands)
- [step](README.md#sequenceStepper_step)



   
    
##### trait _dataTrait

- [guid](README.md#_dataTrait_guid)
- [isArray](README.md#_dataTrait_isArray)
- [isFunction](README.md#_dataTrait_isFunction)
- [isObject](README.md#_dataTrait_isObject)


    
    


   
      
    



      
    
      
            
#### Class streamProcessor


- [cont](README.md#streamProcessor_cont)
- [ctxVar](README.md#streamProcessor_ctxVar)
- [get](README.md#streamProcessor_get)
- [getRest](README.md#streamProcessor_getRest)
- [getState](README.md#streamProcessor_getState)
- [getValue](README.md#streamProcessor_getValue)
- [killAll](README.md#streamProcessor_killAll)
- [run](README.md#streamProcessor_run)
- [set](README.md#streamProcessor_set)
- [setContext](README.md#streamProcessor_setContext)
- [setParent](README.md#streamProcessor_setParent)
- [start](README.md#streamProcessor_start)
- [step](README.md#streamProcessor_step)
- [stopStream](README.md#streamProcessor_stopStream)



   
    
##### trait _dataTrait

- [guid](README.md#_dataTrait_guid)
- [isArray](README.md#_dataTrait_isArray)
- [isFunction](README.md#_dataTrait_isFunction)
- [isObject](README.md#_dataTrait_isObject)


    
    


   
      
    



      
    



      
    
      
            
#### Class shellWindow





   
    
##### trait _dataTrait

- [guid](README.md#_dataTrait_guid)
- [isArray](README.md#_dataTrait_isArray)
- [isFunction](README.md#_dataTrait_isFunction)
- [isObject](README.md#_dataTrait_isObject)


    
    


   
      
    



      
    





   
# Class shellModule


The class has following internal singleton variables:
        
* head
        
* styleTag
        
* bexp
        
* bexp2
        
* _conversions
        
        
### <a name="shellModule_createWindow"></a>shellModule::createWindow(main, data)


*The source code for the function*:
```javascript

var myWindow = shellWindow(main, data);

var darkBody = { "background-color" :"#777", "color" : "white" },
    black = { "background-color" :"#000", "opacity": 0.98};

css().bind(".cmdInfo", { color:"cyan"} );
css().bind("pre", {margin:"1px"});
css().bind(".shellCmdOutput", darkBody, black, { height : "400px", "overflow": "auto"});
css().bind(".shellCmdInput", darkBody, black, { width : "100%", height : "50px"});
css().bind(".cmdline", {"color": "#0f0"});
css().bind(".dir", {"color": "#05f","cursor":"pointer"});
css().bind(".link", {"color": "#9af","cursor":"pointer", "text-decoration":"underline"});
css().bind(".warning", {"color": "yellow"});
css().bind(".error", {"color": "red"});

```

### shellModule::constructor( main )

```javascript


css().animation("animClassName1", {
    duration : "2s",
    "iteration-count" : 1,
    "timing-function" : "ease-in"
},  { rotate : -100 }, 0.5, { rotate : 100 }, { rotate : 0 }); 

css().animation("animZoomOut", {
    duration : "2s",
    "iteration-count" : 1,
    "timing-function" : "ease-in"
},  { "transform":"scale(1,1)" },
    { "transform":"translate(50px,100px) scale(0,0)" }); 
```
        


   
    
## trait _dataTrait

The class has following internal singleton variables:
        
        
### <a name="_dataTrait_guid"></a>_dataTrait::guid(t)


*The source code for the function*:
```javascript

return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

```

### <a name="_dataTrait_isArray"></a>_dataTrait::isArray(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isA;

return Object.prototype.toString.call( t ) === '[object Array]';
```

### <a name="_dataTrait_isFunction"></a>_dataTrait::isFunction(fn)


*The source code for the function*:
```javascript
return Object.prototype.toString.call(fn) == '[object Function]';
```

### <a name="_dataTrait_isObject"></a>_dataTrait::isObject(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isO;

return t === Object(t);
```


    
    
    
    
    
    
    
    


   
      
    
      
            
# Class itemShell


The class has following internal singleton variables:
        
* _cmds
        
* _shellCmds
        
        
### <a name="itemShell__execShellCmd"></a>itemShell::_execShellCmd(name, value, pipe)


*The source code for the function*:
```javascript

if(_shellCmds[name]) {
    console.log("CALLING ", name);
    var prom = _promise(),
        me = this;
    _shellCmds[name].apply(this, [value, pipe,prom]);
    prom.then( function(r) {
        console.log(name, "resolved with, sending to output  ", r);
        me.output(r);
    }).fail( function(r) {
        me.output(r, "error");
    });
    return prom;
}
```

### <a name="itemShell__getCmdFromStr"></a>itemShell::_getCmdFromStr(str)


*The source code for the function*:
```javascript


if(str) {
    str = str.trim();
    var parts = str.split(" ");
    return _cmds[parts[0]];
    
}
```

### <a name="itemShell__getCmdStr"></a>itemShell::_getCmdStr(str)


*The source code for the function*:
```javascript
if(str) {
    str = str.trim();
    var parts = str.split(" ");
    return parts[0];
    
}
```

### <a name="itemShell__getParamsFromStr"></a>itemShell::_getParamsFromStr(str)


*The source code for the function*:
```javascript
if(str) {
    str = str.trim();
    var parts = str.split(" ");
    parts.shift();
    return parts.join(" ");
    
}
```

### <a name="itemShell__initShellCmds"></a>itemShell::_initShellCmds(t)


*The source code for the function*:
```javascript

// should send the commands using "output" and end the streaming here...

if(!_shellCmds) {
    _shellCmds = {};
    // this._vars
    
    // Commands should return using returnFn
    
    _shellCmds["mkarr"] = function(params, pipe, returnPromise ) {
        
        var curr = this.getCurrent();
        if(params) {
            
            curr.set(params, [] );
            returnPromise.resolve("Created "+params);
            
        } else {
            returnPromise.resolve("could not create");
        }
    }    

    _shellCmds["mkdir"] = function(params, pipe, returnPromise ) {
        
        var curr = this.getCurrent();
        if(params) {
            
            curr.set(params, {} );
            returnPromise.resolve("Directory "+params+" created");
            
        } else {
            returnPromise.resolve("could not create");
        }
    }

    _shellCmds["var"] = function(params, pipe, returnPromise ) {
        if(pipe && params) {
            console.log("Setting ", params, "to value ", pipe);
            this.setVar(params, pipe);
            returnPromise.resolve();
        }
    }
    
    _shellCmds["find"] = function(params, pipe, returnPromise ) {
        
        var fileName = params.trim(),
            results = [],
            me = this;
      
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
        finder( this.getCurrent(), fileName, "");
        // me.output("Found "+results.length+" matches ");
        results.forEach( function(line) {
            me.output( line[2]+"/"+line[0] );
        })
        
        returnPromise.resolve(true);
    }    
    
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
    
    _shellCmds["exec"] = function(params, pipe, returnPromise ) {
        
        var fd;
        params = params.trim();
        fd = this._pathToObject(params);
        console.log("exec param ", params);
        if(fd) {
           var o = fd[0], n = fd[1];
           var me = this;
           if(this.isFunction( o[n] )) {
                var fileData = o[n]();
                console.log("The param = "+n);
                var cmds = fileData.split("\n");
                console.log("Commands ", fileData);
                cmds.forEach( function(c) {
                    var sh = itemShell( null, me );
                    console.log("Should run  ", c);
                    if(c) sh.exec( c, me.getCurrent(), "" );
                });
           }            
        }
        returnPromise.resolve("");
    }        
    
    _shellCmds["delay"] = function(params, pipe, returnPromise ) {
        
        if(params) {
            setTimeout( function() {
                returnPromise.resolve("Waited "+params+" ms");
            }, params);
            return;
        }
        returnPromise.resolve("Set the delay");
    }     
    
    _shellCmds["show"] = function(params, pipe, returnPromise ) {
        if(!params) {
            returnPromise.resolve(JSON.stringify(this._vars),null,2);
            return;
        }
        console.log("Asking ", params);
        returnPromise.resolve(this.getVar(params));
//         this.output(this._vars[params] || "");
    }     
    
    _shellCmds["cp"] = function(params, pipe, returnPromise  ) {
        console.log(params);
        var parts = params.split(" ");
        if(parts.length < 2 ) {
            returnPromise.resolve("Can not copy");
            return;
        }
        
        var fd1 = this._pathToObject(parts[0]);
        var fd2 = this._pathToObject(parts[1]),
            me = this;
        console.log(fd1);
        if(fd1) {
           var o1 = fd1[0];// o2 = fd2[0];
           var n1 = fd1[1];// n2 = fd2[1];
           
           var o2,n2;
           if(fd2) {
               o2 = fd2[0];
               n2 = fd2[1];
           } else {
               o2 = o1;
               n2 = parts[1];
           }

           if(o1[n1])  o2.set(n2, o1[n1]());
           returnPromise.resolve("Copied "+parts[0]+" to "+parts[1]); 
           
        } else {
            returnPromise.resolve("Could not copy "+parts[0]+" to "+parts[1]); 
        }
    } 
    
    _shellCmds["rm"] = function(params, pipe, returnPromise  ) {
       
       var fd1  = this._pathToObject(params);
       var obj  = fd1[0];// o2 = fd2[0];
       var name = fd1[1];// n2 = fd2[1];
       
       if(obj[name] && obj[name].getID) {
               
               var item = obj[name];
                    me = this;
               if(item) {
                   item.remove();
                   returnPromise.resolve("* Removed Object *");
               } else {
                   returnPromise.resolve("* invalid index *");
               }
        } else {
            if(obj[name]) {
                // returnPromise.resolve("Removing properties not working");
                //returnPromise.resolve("Trying to remove "+params);
                obj.unset(name);
                returnPromise.resolve("Should have removed "+name);
            } else {
                returnPromise.resolve("No such file or property");
            }
            
        }
    } 
    
    _shellCmds["push"] = function(params, pipe, returnPromise  ) {
       
       var o = this.getCurrent();
       if(o && o.isArray() ) {
              
               var fileData = JSON.parse(params || pipe),
                    me = this;
               if(fileData) {
                   console.log("About to push data");
                   o.push(fileData);
                   returnPromise.resolve("Created array");
               } else {
                   returnPromise.resolve("Invalid JSON");
               }
        } else {
            returnPromise.resolve("Not an array");
        }
    } 
    
    _shellCmds["filter"] = function(params, pipe, returnPromise  ) {
        console.log("Filter with ", params,pipe);
        var fd;
        if(params && pipe) {
            fd = this._pathToObject(pipe);
             if(fd) {
               var o = fd[0], n = fd[1];
               if(this.isFunction( o[n] )) {
                   var fileData = o[n]();
                   if(fileData.match(params)) {
                       // this.output(pipe);
                       console.log("Filter got ", pipe);
                       returnPromise.resolve(pipe);
                       return;
                   }
               }            
            }           
        } else {
            console.log("Filter did not have params");
        }
        console.log("Exiting the filter function");
        returnPromise.resolve("novalue");
        
    } 
    
    _shellCmds["collect"] = function(params, pipe, returnPromise  ) {
        
        var o = this.getCurrent();
        
        if(o && o.serialize) {
            returnPromise.resolve( JSON.stringify(o.serialize(), null, 2 ) );
            return;
        }
        returnPromise.resolve("");
        
    }       
    
    _shellCmds["cat"] = function(params, pipe, returnPromise  ) {
        
        var fd;
        
        console.log("Cat Current dir ", this.getCurrent());
        console.log(pipe, params);
        
        params = params || "";
        pipe = pipe || "";
        
        if(params) params = params.trim();
        if(pipe) pipe = pipe.trim();
        if(pipe) {
            fd = this._pathToObject(pipe);
        } else {
            fd = this._pathToObject(params);
        }
        console.log("Cat with ", fd);
        
        
        if(fd) {
           var o = fd[0], n = fd[1];
           if(this.isFunction( o[n] )) {
                // this.output( params || pipe, "cmdInfo");
                console.log("cat resolved with ",  o[n]() );
                returnPromise.resolve( o[n]() );
                return;
           }            
        }
        returnPromise.resolve("");
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
    
}
```

### <a name="itemShell__outputRaw"></a>itemShell::_outputRaw(what, useClass, options)


*The source code for the function*:
```javascript

if(this._parentShell) {
    this._parentShell._outputRaw(what, useClass, options);
    return;
}

var newLine = this._shellCmdOutput.div(useClass);

if(typeof(what)=="string") {
  newLine.pre().text(what);
} else {
  newLine.add(what);
}

// this._shellCmdOutput
this._shellCmdOutput._dom.scrollTop = this._shellCmdOutput._dom.scrollHeight;

if(options) {

    if(options.onClick) {
        newLine.on("click", function() {
            options.onClick();
        });
    }    
}

```

### <a name="itemShell__pathToObject"></a>itemShell::_pathToObject(strPath, ctx)


*The source code for the function*:
```javascript

if(!ctx) ctx = this.getCurrent();

console.log("path to obj ", strPath);

strPath = strPath.trim();
if(strPath[0]=="/") {
    console.log("--- taking root");
    ctx = this.getRoot();
}

var parts = strPath.split("/"),
    o = ctx,
    obj, prop;

console.log("--- _pathToObject", parts);

while(parts.length) {
    
    var pStr = parts.shift();
    if(pStr) {
        pStr = pStr.trim();
        if(pStr) {
            if(o[pStr] && !this.isFunction(o[pStr])) {
                o = o[pStr];
                obj = o;
                prop = pStr;
            } else {
                if(o[pStr]) {
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


```

### <a name="itemShell_addPipedCmd"></a>itemShell::addPipedCmd(name, method)


*The source code for the function*:
```javascript


_cmds[name] = method;
```

### <a name="itemShell_addToHistory"></a>itemShell::addToHistory(obj)


*The source code for the function*:
```javascript
if(this._historyLog) {
    
    if(!this.isObject(obj)) {
        obj = { cmd : obj, time : (new Date()).getTime() };
    }
    this._historyLog.push(obj);
}
```

### <a name="itemShell_clearScreen"></a>itemShell::clearScreen(t)


*The source code for the function*:
```javascript
this._shellCmdOutput.clear();
```

### <a name="itemShell_clearVar"></a>itemShell::clearVar(name)


*The source code for the function*:
```javascript
if(this._parentShell) {
    this._parentShell.clearVar(name,value);
    return;
}
this._vars[name] = [];
console.log(this._vars);
```

### <a name="itemShell_exec"></a>itemShell::exec(cmdLine, context, pipedData)


*The source code for the function*:
```javascript

// return this.exec2(cmdLine, context,pipedData);

var pipes = cmdLine.split("|"),
    bDidSet = false,
    me = this;
    
        
var ctx = streamProcessor();
ctx.set("currentDir", this.getCurrent());
ctx.set("shell", this);
var stream = simpleStream(ctx);    
var firstParams;

pipes.forEach( function(cmdLine) {
    var cmd = me._getCmdStr(cmdLine);
    if(me._cmds[cmd]) {
        bDidSet = true;
        var obs = me._cmds[cmd];
        var params = me._getParamsFromStr(cmdLine);
        if(typeof(firstParams) =="undefined") firstParams = params;
        
        // Should we set here the context for the observer instance based on the params??
        // var ctx = streamProcessor();
        // ctx.set("params", params);
        var closure = streamProcessor(null, true);
        
        console.log("Setting closure to ", closure);
        
        closure.set("params", params);
        
        stream.addObserver(obs, closure);
    }
});

if(bDidSet) {
    this.addToHistory(cmdLine);
    stream.forEach( function(value) {
        console.log("Got ", value);
        me.output(value+"");
    });
    stream.pushValue(firstParams); // maybe not right way to do it...    
    return;
}
return this.exec2(cmdLine, context,pipedData);

```

### <a name="itemShell_exec2"></a>itemShell::exec2(cmdLine, context, pipedData)


*The source code for the function*:
```javascript

try {
        
    // delete this._pipe;
    
    var myProm = _promise();
    
    var me = this;
    // very simple shell so far...
    
    // should it do this???
    if(context) {
        this._currentDir = context;
    }
    
    if(cmdLine.trim) cmdLine = cmdLine.trim();
    
    var pipes = cmdLine.split("|"),
        bHadPipe = false;
    
    
    if(pipes.length>1) {
        
        var leftPipe = pipes[0];
        bHadPipe = true;
        console.log("Left pipe ", leftPipe);
        cmdLine = leftPipe.trim();
    
        this._pipe = [];
        
        this._pipedShell = itemShell( this );
        
        pipes.shift();
        this._rightPipe = pipes.join(" | ");
        
        this._pipeToCmd = pipes[1];
        this._pipeCmd = this._getCmdFromStr( this._pipeToCmd  );
        this._pipeCmdParams = this._getParamsFromStr( this._pipeToCmd  );
        
        console.log("Should pipe to ", this._pipeToCmd);
        console.log("Command now ", cmdLine);
    }
    
    if(pipedData) {
        
        var cmd =  this._getCmdStr( cmdLine  ),
            params = this._getParamsFromStr( cmdLine  );
        console.log("Cmd ", cmd);
        console.log("params", params);
        console.log("Getting piped data ", pipedData);  
        
        if(cmd=="grep") {
            if(pipedData.match(params)) {
                me.output(pipedData);
            }
        }
        
        var returnPromise;
        if(returnPromise = this._execShellCmd(cmd, params, pipedData)) {
            returnPromise.then( function() {
                console.log("Should delete the piping");
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
    
    var cmdName = this._getCmdStr( cmdLine  );
    var cmdParams = this._getParamsFromStr( cmdLine  );
    
    console.log("** test ", cmdName, cmdParams);
    
    // THE COMMAND SHOULD 
    var returnPromise;
    if(returnPromise = this._execShellCmd(cmdName, cmdParams)) {
        
        returnPromise.then( function() {
            console.log("Should delete the piping");
            console.log(me);
            delete me._pipe;            
        })
        return;
    }
    
    console.log("**** NON STANDARD COMMAND *****");
    
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
    
    
    // _pathToObject
    if(cmdLine.substring(0,4)=="info") {
        
        var fileName = cmdLine.substring(5);
        console.log( this._pathToObject(fileName) );
    }
    
    if(cmdLine == "pwd") {
    
        var getName = function(o) {
            
            var str = "",
                parent = o.parent();
            if(!parent) return "";
            parent.keys( function(name, value) {
                console.log(" key ");
                console.log(name);
                console.log(value);
                console.log(o);
                if(_data(value)==o) str = name;
            })
            console.log(str);
            return str;
        }
        
        var dd = this._currentDir,
            pathStr = "";
        
        while(dd) {
            pathStr = getName( dd ) + "/"+pathStr;
            dd = dd.parent();
        }
        me.output(pathStr);
    }
    if(cmdLine && cmdLine == "ls") {
     
        me.output("..", "dir", {
            onClick : function() {
                me.exec("cd ..");
                me.exec("ls");
            }
        }); 
        
        this._currentDir.keys( function(name, value) {
            var ctx = me._currentDir;
            if(me.isObject(value)) {
                me.output(name, "dir", {
                    onClick : function() {
                        me.exec("cd "+name, ctx);
                        me.exec("ls");
                    }
                });  
            } else {
                if(name.match(".svgpath")) {
                    var tbl = _e("table");
                    var svg = _e("svg").width(20).height(20);
                    svg.g().path({"d" : value, "fill": "white"});
                    tbl.addRow( svg, name);
                    me.output(tbl, "file", {
                        onClick : function() {
                            me.output("Don't know how to open file SVG", "warning");
                        }
                    });
                    return;
                }
                if(name.match(".svg")) {
                    console.log("SVG edit");
                    me.output(name, "file", {
                        onClick : function() {
                            me.output("Don't know how to open file SVG", "warning");
                        }
                    });                 
                } else {
                    me.output(name, "file", {
                        onClick : function() {
                            me.exec("edit "+name,ctx);
                        }
                    });                 
                }
     
            }
        });
    }
    
    if(cmdLine.substring(0,4)=="edit") {
        
        var fileName = cmdLine.substring(5).trim();
        var value;
        
        if(this._currentDir) {
            value = this._currentDir[fileName];
            //if(!this.isObject( value )) {
                
                var newC = _e();
                this.getOutputArea().pushView( newC );
                
                this.startProcess( "edit", newC, this._currentDir, fileName  );
                
            // } 
                
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
    
    if(cmdLine.substring(0,2)=="cd") {
        
        var newDir = cmdLine.substring(3);
        var bDirSet = false;
        
        if(newDir == "/") {
            this._currentDir = this._doc;
            bDirSet = true;
        }
        
        var parts = newDir.split("/"),
            bHasSub = false;
        if(parts.length>1) {
            bHasSub = true;
            newDir = parts.shift();
        }
     
        if(newDir == "..") {
            var p = this._currentDir.parent(); 
            if( p ) this._currentDir = p;
            bDirSet = true;
        }   
        
        if(!bDirSet) {
            if(this._currentDir.isArray()) {
                if(this._currentDir.at(newDir) ) {
                    this._currentDir = this._currentDir.at(newDir);
                } else {
                    this.output(newDir+" is a invalid value ");
                }        
            } else {
            
                if(this._currentDir[newDir]) {
                    console.log(this._currentDir[newDir]);
                    if(!this.isFunction( this._currentDir[newDir] )) {
                        this._currentDir = this._currentDir[newDir];
                    } else {
                        this.output(newDir+" is a invalid value ");
                    }
                }
            }
        }
        if(bHasSub) me.exec("cd "+parts.join("/"));
    }
    delete me._pipe; 
} catch(e) {
    me.output(e.message, "warning");
}
```

### <a name="itemShell_getCurrent"></a>itemShell::getCurrent(t)


*The source code for the function*:
```javascript
if(this._parentShell) {
    return this._parentShell.getCurrent();
}
return this._currentDir;
```

### <a name="itemShell_getInitData"></a>itemShell::getInitData(t)


*The source code for the function*:
```javascript
return this._initData;
```

### <a name="itemShell_getInputField"></a>itemShell::getInputField(t)


*The source code for the function*:
```javascript

if(this._shellCmdInput) return this._shellCmdInput;

var ta = _e("textarea"),
    me = this;
ta.addClass("shellCmdInput");

ta.on("value", function(o,v) {
    var val = ta.val();
    console.log(val);
    if(!val) return;
    var cmds = val.split("\n");
    if(cmds.length>1) {
        
        var pn = me.parsePathName();
        me.output(pn + "> " + cmds[0], "cmdline");        
        me.exec( cmds[0] );
        ta.val("");
    }
    
});

this._shellCmdInput = ta;

return ta;
```

### <a name="itemShell_getMainWindow"></a>itemShell::getMainWindow(t)


*The source code for the function*:
```javascript
return this._mainWindow ;
```

### <a name="itemShell_getOutputArea"></a>itemShell::getOutputArea(t)


*The source code for the function*:
```javascript
if(this._shellCmdOutput) return this._shellCmdOutput;

var ta = _e("div");
ta.addClass("shellCmdOutput");

this._shellCmdOutput = ta;

return ta;
```

### <a name="itemShell_getRoot"></a>itemShell::getRoot(t)


*The source code for the function*:
```javascript
if(this._parentShell) {
    return this._parentShell.getRoot();
}
return this._doc;
```

### <a name="itemShell_getVar"></a>itemShell::getVar(name)


*The source code for the function*:
```javascript
if(this._parentShell) {
    return this._parentShell.getVar(name);
    
}
return this._vars[name];
```

### itemShell::constructor( rootDocument, parentShell, mainDom, usePath )

```javascript

this._vars = {};
this._cmds = {};

if(this.isObject(parentShell)) {
    this._parentShell = parentShell;
    return;
}
if(!_cmds) {
    _cmds = {};
    this._initShellCmds();
}

// When the shell is ready, just continue stuff...
this._doc = rootDocument;

this._currentDir = this._doc;

this._doc.then( function() {
    console.log("Shell is ready");
});
```
        
### <a name="itemShell_initializeShell"></a>itemShell::initializeShell(obj, parentShell)


*The source code for the function*:
```javascript

if(!obj) obj = this._initData;

var me = this;

if(obj) {
    obj.then( function() {
        me._initData = obj;

        if(parentShell) {
            var pData = parentShell.getInitData();
            if(pData && pData.bin) {
                pData.bin.keys(function(name, value) {
                    if(value && value.data && value.data.body) {
                        me._cmds[name] = new Function("m", value.data.body);
                    }
                });
            }
        }        
        
        if(obj.bin) {
            obj.bin.keys(function(name, value) {
                if(value && value.data && value.data.body) {
                    me._cmds[name] = new Function("m", value.data.body);
                }
            });
        }
        
        if(obj["var"] && obj["var"]["history"]) {
            var h = obj["var"]["history"];
            if(h.log) {
                me._historyLog = h.log;
            }
        }
        
    });
}
```

### <a name="itemShell_isValidCommand"></a>itemShell::isValidCommand(name)


*The source code for the function*:
```javascript

name = this._getCmdStr( name );

return _shellCmds[name];
```

### <a name="itemShell_lineToStream"></a>itemShell::lineToStream(cmdLine, parentCtx)


*The source code for the function*:
```javascript
var pipes = cmdLine.split("|"),
    bDidSet = false,
    me = this;
        
var ctx = streamProcessor(parentCtx);
ctx.set("currentDir", this.getCurrent());
ctx.set("shell", this);
var stream = simpleStream(ctx);    
var firstParams;

pipes.forEach( function(cmdLine) {
    var cmd = me._getCmdStr(cmdLine);
    if(me._cmds[cmd]) {
        bDidSet = true;
        var obs = me._cmds[cmd];
        var params = me._getParamsFromStr(cmdLine);
        if(typeof(firstParams) =="undefined") firstParams = params;
        
        // Should we set here the context for the observer instance based on the params??
        // var ctx = streamProcessor();
        // ctx.set("params", params);
        var closure = streamProcessor(null, true);
        
        console.log("Setting closure to ", closure);
        
        closure.set("params", params);
        
        stream.addObserver(obs, closure);
    }
});

if(bDidSet) {
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
```

### <a name="itemShell_mainWindow"></a>itemShell::mainWindow(main)


*The source code for the function*:
```javascript
this._mainWindow = main;
```

### <a name="itemShell_output"></a>itemShell::output(what, useClass, options)


*The source code for the function*:
```javascript

if(this._pipe) {
    

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
    this._pipedShell.exec( this._rightPipe, this.getCurrent(), what );

    
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
} else {

}

this._outputRaw( what, useClass, options );





```

### <a name="itemShell_parsePathName"></a>itemShell::parsePathName()


*The source code for the function*:
```javascript
var getName = function(o) {
    
    var str = "",
        parent = o.parent();
    if(!parent) return "";
    parent.keys( function(name, value) {
        if(_data(value)==o) str = name;
    })
    return str;
}

var dd = this._currentDir,
    pathStr = "";

while(dd) {
    pathStr = getName( dd ) + "/"+pathStr;
    dd = dd.parent();
}

return pathStr;
```

### <a name="itemShell_saveVar"></a>itemShell::saveVar(name, value)


*The source code for the function*:
```javascript

if(this._parentShell) {
    this._parentShell.saveVar(name,value);
    return;
}
this._vars[name] = value;
```

### <a name="itemShell_scrollBottom"></a>itemShell::scrollBottom(t)


*The source code for the function*:
```javascript
this._shellCmdOutput._dom.scrollTop = this._shellCmdOutput._dom.scrollHeight;
```

### <a name="itemShell_setVar"></a>itemShell::setVar(name, value)


*The source code for the function*:
```javascript
if(this._parentShell) {
    this._parentShell.setVar(name,value);
    return;
}
if(!this._vars[name]) this._vars[name] = [];
this._vars[name].push(value);
console.log(this._vars);
```

### <a name="itemShell_startProcess"></a>itemShell::startProcess(cmd, main, item, propName)


*The source code for the function*:
```javascript
// starts a process which can be used...
if(cmd=="edit") {


    var me = this;
    // var jsonTplData = comp.compile( "<div>{{"+propName+":aceJS}}</div>");
 
    main.div().button().text("EXIT").on("click", function() {
        main.parent().popView();
        setTimeout( function() {
            me.scrollBottom();
        },500);
    });    
    
    item.then(
        function() {
            
            if(!item.hasOwn( propName) ) {
                item.set(propName, " ");
                main.div().aceEditor(  { varName : propName, width : 400, height:400} , item );
                return;
            }            
            main.div().aceEditor(  { varName : propName, width : 400, height:400} , item );

        });
  
}
```



   
    
## trait _dataTrait

The class has following internal singleton variables:
        
        
### <a name="_dataTrait_guid"></a>_dataTrait::guid(t)


*The source code for the function*:
```javascript

return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

```

### <a name="_dataTrait_isArray"></a>_dataTrait::isArray(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isA;

return Object.prototype.toString.call( t ) === '[object Array]';
```

### <a name="_dataTrait_isFunction"></a>_dataTrait::isFunction(fn)


*The source code for the function*:
```javascript
return Object.prototype.toString.call(fn) == '[object Function]';
```

### <a name="_dataTrait_isObject"></a>_dataTrait::isObject(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isO;

return t === Object(t);
```


    
    


   
      
    



      
    
      
            
# Class simpleStream


The class has following internal singleton variables:
        
* _streams
        
        
### <a name="simpleStream_addObserver"></a>simpleStream::addObserver(obs, closure)


*The source code for the function*:
```javascript

if(this.isArray(obs)) {
    var m = this;
    obs.forEach( function(o) {
        m.addObserver(o, closure);
    })
    return;
}

if(this.isObject(obs) && !this.isFunction(obs)) {
    this._observers.push(obs);
    return;
}

// marching through the stream...
// this._observers.push(obs);

this._observers.push({
    fn : obs,
    closure : closure
});

return this;
```

### <a name="simpleStream_branch"></a>simpleStream::branch(fn, ms)


*The source code for the function*:
```javascript

var me = this;
var lastMs = (new Date()).getTime();

me._lastBranch = lastMs;

this.addObserver(function(m) {
    var nowTime = (new Date()).getTime(),
        value = m.getValue();
    setTimeout( function() {

        var currTime = (new Date()).getTime();
        if(currTime - lastMs < ms) return;
        
        var cnt=0;
        if(cnt = me.isActiveRunning() ) {
            return;
        }
        
        m = me.getLastProcess();
        if(m.getState()==3) {
            me._lastBranch = currTime;
            lastMs = currTime;
            fn(value);
        }
    },ms);
    m.run();
});

return this;
```

### <a name="simpleStream_branchIfOk"></a>simpleStream::branchIfOk(fn, ms)


*The source code for the function*:
```javascript

var me = this;
var lastMs = (new Date()).getTime();

me._lastBranch = lastMs;

this.addObserver(function(m) {
    var nowTime = (new Date()).getTime(),
        value = m.getValue();
    setTimeout( function() {
        var currTime = (new Date()).getTime();
        if(currTime - lastMs < ms) return;
        var cnt=0;
        if(cnt = me.isActiveRunning() ) {
            return;
        }
        m = me.getLastProcess();
        if(m.getState()==7) {
            me._lastBranch = currTime;
            lastMs = currTime;
            fn(value);
        }
    },ms);
    m.run();
});
return this;

```

### <a name="simpleStream_collectValuesFor"></a>simpleStream::collectValuesFor(ms)


*The source code for the function*:
```javascript
var me = this;
var lastMs = (new Date()).getTime();

me._lastBranch = lastMs;

this.addObserver(function(m) {
    var nowTime = (new Date()).getTime(),
        value = m.getValue();
        
    setTimeout( function() {
        var currTime = (new Date()).getTime();

        if(currTime - lastMs < ms) return;
        
        var cnt = me.isActiveRunning();
        var lastProcess  = me.getLastProcess();
        // stop if there is something in there...
        if(cnt > 1 && m != lastProcess ) {
            m.stopStream(m.getValue()); // don't allow to go any further...
            return;
        }
        lastProcess.run(); // continue the process...
    },ms);
    // m.run();
});
return this;
```

### <a name="simpleStream_combineLatest"></a>simpleStream::combineLatest(streams, fn)


*The source code for the function*:
```javascript
var me = this;

var myRes = [],
    cnt = streams.length;
    
var allHasValue = function() {
    var b = true;
    for(var i=0; i<cnt; i++) {
        if(typeof(myRes[i])=="undefined") b = false;
    }
    return b;
}

streams.forEach( function(s,index) {
    s.addObserver(function(myProcess) { 
        myRes[index] = myProcess.getValue();
        if(allHasValue()) {
            me.pushValue(myRes);
        }
        myProcess.run();
    }); 
});

return this;

```

### <a name="simpleStream_filter"></a>simpleStream::filter(fn)


*The source code for the function*:
```javascript

var me = this;

this.addObserver(function(m) {
    var arr = m.getValue();
    var res = [];
    
    if(me.isArray(arr)) {
        arr.forEach(function(v) {
            if(fn(v)) res.push( v );
        });
    } else {
        if(fn(arr)) {
            m.run(arr);
            return;
        } else {
            m.stopStream();
        }
        return;
    }
    
    if(res.length) {
        m.run(res);
    } else {
        m.stopStream();
    }
});  

return this;
```

### <a name="simpleStream_forContext"></a>simpleStream::forContext(fn)


*The source code for the function*:
```javascript
var me = this;
me.addObserver(function(m) {
    var arr = m.getValue();
    var res = [];
    
    if(me.isArray(arr)) {
        arr.forEach(function(v, i) {
            res.push( fn(v, i, m) );
        });
    } else {
        res.push( fn(arr, 0, m) );
    }
     m.run(arr);
});
```

### <a name="simpleStream_forEach"></a>simpleStream::forEach(fn)


*The source code for the function*:
```javascript
var me = this;
me.addObserver(function(m) {
    var arr = m.getValue();
    var res = [];
    
    if(me.isArray(arr)) {
        arr.forEach(function(v) {
            res.push( fn(v) );
        });
    } else {
        res.push( fn(arr) );
    }
     m.run(arr);
});
return this;
```

### <a name="simpleStream_getLastProcess"></a>simpleStream::getLastProcess(t)


*The source code for the function*:
```javascript

var i = this._active.length;
if(i>0) return this._active[i-1];

return this._lastProcess;
```

### simpleStream::constructor( parentProcessor )

```javascript
this._childIndex = 0;
this._childStreams = [];
this._values = [];
this._active = [];

this._lastProcess;

// start these observers when a value arrives...
this._observers = [];

this._id = this.guid();
if(!_streams) {
    _streams = {};
}

_streams[this._id] = this;

if(parentProcessor) {
    this._parentProcessor = parentProcessor;
}

```
        
### <a name="simpleStream_isActiveRunning"></a>simpleStream::isActiveRunning(t)


*The source code for the function*:
```javascript
return this._active.length;
```

### <a name="simpleStream_killAll"></a>simpleStream::killAll(t)


*The source code for the function*:
```javascript

this._active.forEach( function(p) {
    p.killAll();
    p.stopStream(); 
});
```

### <a name="simpleStream_map"></a>simpleStream::map(fn)


*The source code for the function*:
```javascript
var me = this;
me.addObserver(function(m) {
    var arr = m.getValue();
    var res = [];
    
    if(me.isArray(arr)) {
        arr.forEach(function(v) {
            res.push( fn(v) );
        });
    } else {
        res.push( fn(arr) );
    }
     m.run(res);
});
return this;
```

### <a name="simpleStream_pushValue"></a>simpleStream::pushValue(val)


*The source code for the function*:
```javascript


var myProm = _promise();
this.startProcess({
    initWith : val 
},myProm);
return myProm;
```

### <a name="simpleStream_reduce"></a>simpleStream::reduce(fn, initWith)


*The source code for the function*:
```javascript
var me = this;
me.addObserver(function(m) {
    var arr = m.getValue();
    var res = [];
    
    if(me.isArray(arr)) {
        res = arr.reduce(fn,initWith);
    } else {
        res = [arr].reduce(fn,initWith);
    }
     m.run(res);
});
return this;
```

### <a name="simpleStream_startProcess"></a>simpleStream::startProcess(context, myProm)


*The source code for the function*:
```javascript


// create copy of the observers...
var list = this._observers.slice();

var process = streamProcessor(this._parentProcessor);
process.setContext(context);
process.start( list );

process._streamPromise = myProm;

this._active.push(process);

var me = this;
// The process exits, all done...
process.then( function(v) {
    // Should remove the process    
    var i = me._active.indexOf(process);
    me._active.splice(i,1);
    myProm.resolve( v );
    me._lastProcess = process;
});



```

### <a name="simpleStream_step"></a>simpleStream::step(t)


*The source code for the function*:
```javascript

```



   
    
    
    
## trait _dataTrait

The class has following internal singleton variables:
        
        
### <a name="_dataTrait_guid"></a>_dataTrait::guid(t)


*The source code for the function*:
```javascript

return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

```

### <a name="_dataTrait_isArray"></a>_dataTrait::isArray(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isA;

return Object.prototype.toString.call( t ) === '[object Array]';
```

### <a name="_dataTrait_isFunction"></a>_dataTrait::isFunction(fn)


*The source code for the function*:
```javascript
return Object.prototype.toString.call(fn) == '[object Function]';
```

### <a name="_dataTrait_isObject"></a>_dataTrait::isObject(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isO;

return t === Object(t);
```


    
    
    
    
    
    
    
    


   
      
            
# Class _promise


The class has following internal singleton variables:
        
        
### <a name="_promise_all"></a>_promise::all(firstArg)


*The source code for the function*:
```javascript

var args;
if(this.isArray(firstArg)) {
  args = firstArg;
} else {
  args = Array.prototype.slice.call(arguments, 0);
}
// console.log(args);
var targetLen = args.length,
    rCnt = 0,
    myPromises = [],
    myResults = new Array(targetLen);
    
return this.then(
    function() {
 
        var allPromise = _promise();
        if(args.length==0) {
            allPromise.resolve([]);
        }
        args.forEach( function(b, index) {
            if(b.then) {
                // console.log("All, looking for ", b, " state = ", b._state);
                myPromises.push(b);
                
                b.then(function(v) {
                    myResults[index] = v;
                    // console.log("Got a promise...",b, " cnt = ", rCnt);
                    rCnt++;
                    if(rCnt==targetLen) {
                        allPromise.resolve(myResults);
                    }
                }, function(v) {
                    allPromise.reject(v);
                });
                
            } else {
                allPromise.reject("Not list of promises");
            }
        })
        
        return allPromise;
        
    });



    

```

### <a name="_promise_collect"></a>_promise::collect(collectFn, promiseList, results)


*The source code for the function*:
```javascript

var args;
if(this.isArray(promiseList)) {
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
    
return this.then(
    function() {
 
        var allPromise = _promise();
        args.forEach( function(b, index) {
            if(b.then) {
                // console.log("All, looking for ", b, " state = ", b._state);
                myPromises.push(b);
                
                b.then(function(v) {
                    rCnt++;
                    isReady = collectFn(v, myResults);
                    if( (isReady && !noMore) || (noMore==false && targetLen == rCnt) ) {
                        allPromise.resolve(myResults);
                        noMore = true;
                    }
                }, function(v) {
                    allPromise.reject(v);
                });
                
            } else {
                allPromise.reject("Not list of promises");
            }
        })
        
        return allPromise;
        
    });

```

### <a name="_promise_fail"></a>_promise::fail(fn)


*The source code for the function*:
```javascript
return this.then(null, fn);
```

### <a name="_promise_fulfill"></a>_promise::fulfill(withValue)


*The source code for the function*:
```javascript
// if(this._fulfilled || this._rejected) return;

if(this._rejected) return;
if(this._fulfilled && withValue != this._stateValue) {
    return;
}

var me = this;
this._fulfilled = true;
this._stateValue = withValue;

var chCnt = this._childPromises.length;

while(chCnt--) {
    var p = this._childPromises.shift();
    if(p._onFulfill) {
        try {
            var x = p._onFulfill(withValue);
            // console.log("Returned ",x);
            if(typeof(x)!="undefined") {
                p.resolve(x);
            } else {
                p.fulfill(withValue);
            }
        } catch(e) {
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

```

### <a name="_promise_genPlugin"></a>_promise::genPlugin(fname, fn)


*The source code for the function*:
```javascript
var me = this;
this.plugin(fname,
    function() {
        var args = Array.prototype.slice.call(arguments,0);
        console.log("Plugin args", args);
        var myPromise = _promise();
        this.then(function(v) {
            var args2 = Array.prototype.slice.call(arguments,0);
            var z = args.concat(args2);
            var res = fn.apply(this,z); 
            myPromise.resolve(res);
        }, function(r) {
            myPromise.reject(r);
        });
        return myPromise;

    }
);
```

### _promise::constructor( onFulfilled, onRejected )

```javascript
// 0 = pending
// 1 = fullfilled
// 2 = error

this._state = 0;
this._stateValue = null;
this._isAPromise = true;
this._childPromises = [];

if(this.isFunction(onFulfilled))
    this._onFulfill = onFulfilled;
if(this.isFunction(onRejected))
    this._onReject = onRejected;
    
if(!onRejected && this.isFunction(onFulfilled) ) {
    var me = this;
    later().asap(
        function() {
            onFulfilled( function(v) {
                me.resolve(v)
            }, function(v) {
                me.resolve(v);
            });           
        });
 
}
```
        
### <a name="_promise_isFulfilled"></a>_promise::isFulfilled(t)


*The source code for the function*:
```javascript
return this._state == 1;
```

### <a name="_promise_isPending"></a>_promise::isPending(t)


*The source code for the function*:
```javascript
return this._state == 0;
```

### <a name="_promise_isRejected"></a>_promise::isRejected(v)


*The source code for the function*:
```javascript
return this._state == 2;
```

### <a name="_promise_nodeStyle"></a>_promise::nodeStyle(fname, fn)


*The source code for the function*:
```javascript
var me = this;
this.plugin(fname,
    function() {
        var args = Array.prototype.slice.call(arguments,0);
        var last, userCb, cbIndex=0;
        if(args.length>=0) {
            last = args[args.length-1];
            if(Object.prototype.toString.call(last) == '[object Function]') {
                userCb = last;
                cbIndex = args.length-1;
            }
        }

        var mainPromise = wishes().pending();
        this.then(function() {
            var nodePromise = wishes().pending();
            var args2 = Array.prototype.slice.call(arguments,0);
            console.log("Orig args", args);
            console.log("Then args", args2);
            var z;
            if(args.length==0) 
                z = args2;
            if(args2.length==0)
                z = args;
            if(!z) z = args2.concat(args);
            cbIndex = z.length; // 0,fn... 2
            if(userCb) cbIndex--;
            z[cbIndex] = function(err) {
                if(err) {
                    console.log("Got error ",err);
                    nodePromise.reject(err);
                    mainPromise.reject(err);
                    return;
                }
                if(userCb) {
                    var args = Array.prototype.slice.call(arguments);
                    var res = userCb.apply(this, args);
                    mainPromise.resolve(res);
                } else {
                    var args = Array.prototype.slice.call(arguments,1);
                    mainPromise.resolve.apply(mainPromise,args);
                }
            }
            nodePromise.then( function(v) {
                mainPromise.resolve(v);
            });
            
            console.log("nodeStyle after concat", z);
            var res = fn.apply(this,z); 
            // myPromise.resolve(res);
            // return nodePromise;
            return nodePromise;
        }, function(v) {
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
    }
);
```

### <a name="_promise_onStateChange"></a>_promise::onStateChange(fn)


*The source code for the function*:
```javascript

if(!this._listeners)
    this._listeners = [];

this._listeners.push(fn);
```

### <a name="_promise_plugin"></a>_promise::plugin(n, fn)


*The source code for the function*:
```javascript

_myTrait_[n] = fn;

return this;
```

### <a name="_promise_props"></a>_promise::props(obj)


*The source code for the function*:
```javascript
var args = [];

for(var n in obj) {
    if(obj.hasOwnProperty(n)) {
        args.push({
           name : n,
           promise : obj[n]
        });
    }
}


// console.log(args);
var targetLen = args.length,
    rCnt = 0,
    myPromises = [],
    myResults = {};
    
return this.then(
    function() {
 
        var allPromise = wishes().pending();
        args.forEach( function(def) {
            var b = def.promise,
                name = def.name;
            if(b.then) {
                // console.log("All, looking for ", b, " state = ", b._state);
                myPromises.push(b);
                
                b.then(function(v) {
                    myResults[name] = v;
                    rCnt++;
                    if(rCnt==targetLen) {
                        allPromise.resolve(myResults);
                    }
                }, function(v) {
                    allPromise.reject(v);
                });
                
            } else {
                allPromise.reject("Not list of promises");
            }
        })
        
        return allPromise;
        
    });

```

### <a name="_promise_reject"></a>_promise::reject(withReason)


*The source code for the function*:
```javascript

// if(this._rejected || this._fulfilled) return;

// conso

if(this._fulfilled) return;
if(this._rejected && withReason != this._rejectReason) return;


this._state = 2;
this._rejected = true;
this._rejectReason = withReason;
var me = this;

var chCnt = this._childPromises.length;
while(chCnt--) {
    var p = this._childPromises.shift();

    if(p._onReject) {
        try {
            p._onReject(withReason);
            p.reject(withReason);
        } catch(e) {
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

```

### <a name="_promise_rejectReason"></a>_promise::rejectReason(reason)


*The source code for the function*:
```javascript
if(reason) {
    this._rejectReason = reason;
    return;
}
return this._rejectReason;
```

### <a name="_promise_resolve"></a>_promise::resolve(x)


*The source code for the function*:
```javascript

// console.log("Resolving ", x);

// can not do this many times...
if(this._state>0) return;

if(x==this) {
    // error
    this._rejectReason = "TypeError";
    this.reject(this._rejectReason);
    return;
}

if(this.isObject(x) && x._isAPromise) {
    
    // 
    this._state = x._state;
    this._stateValue = x._stateValue;
    this._rejectReason = x._rejectReason;
    // ... 
    if(this._state===0) {
        var me = this;
        x.onStateChange( function() {
            if(x._state==1) {
                // console.log("State change");
                me.resolve(x.value());
            } 
            if(x._state==2) {
                me.reject(x.rejectReason());                
            }
        });
    }
    if(this._state==1) {
        // console.log("Resolved to be Promise was fulfilled ", x._stateValue);
        this.fulfill(this._stateValue);    
    }
    if(this._state==2) {
        // console.log("Relved to be Promise was rejected ", x._rejectReason);
        this.reject(this._rejectReason);
    }
    return;
}
if(this.isObject(x) && x.then && this.isFunction(x.then)) {
    // console.log("Thenable ", x);
    var didCall = false;
    try {
        // Call the x.then
        var  me = this;
        x.then.call(x, 
            function(y) {
                if(didCall) return;
                // we have now value for the promise...
                // console.log("Got value from Thenable ", y);
                me.resolve(y);
                didCall = true;
            },
            function(r) {
                if(didCall) return;
                // console.log("Got reject from Thenable ", r);
                me.reject(r);
                didCall = true;
            });
    } catch(e) {
        if(!didCall) this.reject(e);
    }
    return;    
}
this._state = 1;
this._stateValue = x;

// fulfill the promise...
this.fulfill(x);

```

### <a name="_promise_state"></a>_promise::state(newState)


*The source code for the function*:
```javascript
if(typeof(newState)!="undefined") {
    this._state = newState;
}
return this._state;
```

### <a name="_promise_then"></a>_promise::then(onFulfilled, onRejected)


*The source code for the function*:
```javascript

if(!onRejected) onRejected = function() {};

var p = new _promise(onFulfilled, onRejected);
var me = this;

if(this._state==1) {
    later().asap( function() {
        me.fulfill(me.value());
    });
}
if(this._state==2) {
    ater().asap( function() {
        me.reject(me.rejectReason());
    });
}
this._childPromises.push(p);
return p;



```

### <a name="_promise_triggerStateChange"></a>_promise::triggerStateChange(t)


*The source code for the function*:
```javascript
var me = this;
if(!this._listeners) return;
this._listeners.forEach( function(fn) {
    fn(me); 
});
// one-timer
this._listeners.length = 0;
```

### <a name="_promise_value"></a>_promise::value(v)


*The source code for the function*:
```javascript
if(typeof(v)!="undefined") {
    this._stateValue = v;
    return this;
}
return this._stateValue;
```



   
    
## trait util_fns

The class has following internal singleton variables:
        
        
### <a name="util_fns_isArray"></a>util_fns::isArray(someVar)


*The source code for the function*:
```javascript
return Object.prototype.toString.call( someVar ) === '[object Array]';
```

### <a name="util_fns_isFunction"></a>util_fns::isFunction(fn)


*The source code for the function*:
```javascript
return Object.prototype.toString.call(fn) == '[object Function]';
```

### <a name="util_fns_isObject"></a>util_fns::isObject(obj)


*The source code for the function*:
```javascript
return obj === Object(obj);
```


    
    
    
    


   
      
    
      
            
# Class later


The class has following internal singleton variables:
        
* _initDone
        
* _callers
        
* _oneTimers
        
* _everies
        
* _framers
        
* _localCnt
        
* _easings
        
* _easeFns
        
        
### <a name="later__easeFns"></a>later::_easeFns(t)


*The source code for the function*:
```javascript
_easings = { 
    bounceOut : function(t){
        if (t < 1/2.75) {
            return (7.5625*t*t);
        } else if (t < 2/2.75) {
            return (7.5625*(t-=1.5/2.75)*t+0.75);
        } else if (t < 2.5/2.75) {
            return (7.5625*(t-=2.25/2.75)*t+0.9375);
        } else {
            return (7.5625*(t-=2.625/2.75)*t +0.984375);
        }
    },
    easeIn : function(t) {
        return t*t;
    },
    easeOut : function(t) {
        return -1*t*(t-2);
    },   
    easeInOut : function(t) {
        if(t < 0.5) return t*t;
        return -1*t*(t-2);
    },
    easeInCirc : function(t) {
        return -1*(Math.sqrt(1 -t*t) - 1);
    },
    easeInCubic : function(t) {
        return t*t*t;
    },
    easeOutCubic : function(t) {
        return (1-t)*(1-t)*(1-t) + 1;
    },    
    pow : function(t) {
        return Math.pow(t,parseFloat(1.5-t));
    },
    linear : function(t) {
        return t;
    }
}

```

### <a name="later_add"></a>later::add(fn, thisObj, args)


*The source code for the function*:
```javascript
if(thisObj || args) {
   var tArgs;
   if( Object.prototype.toString.call( args ) === '[object Array]' ) {
       tArgs = args;
   } else {
       tArgs = Array.prototype.slice.call(arguments, 2);
       if(!tArgs) tArgs = [];
   }
   _callers.push([thisObj, fn, tArgs]);   
} else {
    _callers.push(fn);
}
```

### <a name="later_addEasingFn"></a>later::addEasingFn(name, fn)


*The source code for the function*:
```javascript
_easings[name] = fn;
```

### <a name="later_after"></a>later::after(seconds, fn, name)


*The source code for the function*:
```javascript

if(!name) {
    name = "aft7491_"+(_localCnt++);
}

_everies[name] = {
    step : Math.floor(seconds * 1000),
    fn : fn,
    nextTime : 0,
    remove : true
};
```

### <a name="later_asap"></a>later::asap(fn)


*The source code for the function*:
```javascript
this.add(fn);

```

### <a name="later_ease"></a>later::ease(name, delay, callback, over)
`name` Name of the easing to use
 
`delay` Delay of the transformation in ms
 
`callback` Callback to set the values
 
`over` When animation is over
 


*The source code for the function*:
```javascript

var fn = _easings[name];
if(!fn) fn = _easings.pow;
var id_name = "e_"+(_localCnt++);
_easeFns[id_name] = {
    easeFn : fn,
    duration : delay,
    cb : callback,
    over : over
};



```

### <a name="later_every"></a>later::every(seconds, fn, name)


*The source code for the function*:
```javascript

if(!name) {
    name = "t7491_"+(_localCnt++);
}

_everies[name] = {
    step : Math.floor(seconds * 1000),
    fn : fn,
    nextTime : 0
};
```

### later::constructor( interval, fn )

```javascript
if(!_initDone) {
   this._easeFns();
   _localCnt=1;
   this.polyfill();
 
   var frame, cancelFrame;
   if(typeof(window) != "undefined") {
       var frame = window['requestAnimationFrame'], 
           cancelFrame= window['cancelRequestAnimationFrame'];
       ['', 'ms', 'moz', 'webkit', 'o'].forEach( function(x) { 
           if(!frame) {
            frame = window[x+'RequestAnimationFrame'];
            cancelFrame = window[x+'CancelAnimationFrame'] 
                                       || window[x+'CancelRequestAnimationFrame'];
           }
        });
   }
 
   var is_node_js = (new Function("try { return this == global; } catch(e) { return false; }"))();
   
   if(is_node_js) {
       frame= function(cb) {
            return setImmediate(cb);// (cb,1);
       }; 
   } else {
        if (!frame) {
            frame= function(cb) {
                return setTimeout(cb, 16);
            };       
        }
   }
 
    if (!cancelFrame)
        cancelFrame = function(id) {
            clearTimeout(id);
        };    
        
    _callers = [];
    _oneTimers = {};
    _everies = {};
    _framers = [];
    _easeFns = {};
    var lastMs = 0;
    
    var _callQueQue = function() {
       var ms = (new Date()).getTime(),
           elapsed = lastMs - ms;
       
       if(lastMs==0) elapsed = 0;
       var fn;
       while(fn=_callers.shift()) {
          if(Object.prototype.toString.call( fn ) === '[object Array]' ) {
              fn[1].apply(fn[0], fn[2]);
          } else {
              fn();
          }
           
       }
       
       for(var i=0; i<_framers.length;i++) {
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
       for(var n in _easeFns) {
           if(_easeFns.hasOwnProperty(n)) {
               var v = _easeFns[n];
               if(!v.start) v.start = ms;
               var delta = ms - v.start,
                   dt = delta / v.duration;
               if(dt>=1) {
                   dt = 1;
                   delete _easeFns[n];
               }
               v.cb(v.easeFn(dt));
               if((dt == 1) && v.over) v.over();
           }
       }   

       for(var n in _oneTimers) {
           if(_oneTimers.hasOwnProperty(n)) {
               var v = _oneTimers[n];
               v[0](v[1]);
               delete _oneTimers[n];
           }
       }
       
       for(var n in _everies) {
           if(_everies.hasOwnProperty(n)) {
               var v = _everies[n];
               if(v.nextTime < ms) {
                   if(v.remove) {
                       if(v.nextTime > 0) {
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
               if(v.until) {
                   if(v.until < ms) {
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
```
        
### <a name="later_once"></a>later::once(key, fn, value)


*The source code for the function*:
```javascript
// _oneTimers

_oneTimers[key] = [fn,value];
```

### <a name="later_onFrame"></a>later::onFrame(fn)


*The source code for the function*:
```javascript

_framers.push(fn);
```

### <a name="later_polyfill"></a>later::polyfill(t)


*The source code for the function*:
```javascript
// --- let's not ---
```

### <a name="later_removeFrameFn"></a>later::removeFrameFn(fn)


*The source code for the function*:
```javascript

var i = _framers.indexOf(fn);
if(i>=0) {
    if(fn._onRemove) {
        fn._onRemove();
    }
    _framers.splice(i,1);
    return true;
} else {
    return false;
}
```



   


   



      
    



      
    
      
    
      
            
# Class later


The class has following internal singleton variables:
        
* _initDone
        
* _callers
        
* _oneTimers
        
* _everies
        
* _framers
        
* _localCnt
        
* _easings
        
* _easeFns
        
        
### <a name="later__easeFns"></a>later::_easeFns(t)


*The source code for the function*:
```javascript
_easings = { 
    bounceOut : function(t){
        if (t < 1/2.75) {
            return (7.5625*t*t);
        } else if (t < 2/2.75) {
            return (7.5625*(t-=1.5/2.75)*t+0.75);
        } else if (t < 2.5/2.75) {
            return (7.5625*(t-=2.25/2.75)*t+0.9375);
        } else {
            return (7.5625*(t-=2.625/2.75)*t +0.984375);
        }
    },
    easeIn : function(t) {
        return t*t;
    },
    easeOut : function(t) {
        return -1*t*(t-2);
    },   
    easeInOut : function(t) {
        if(t < 0.5) return t*t;
        return -1*t*(t-2);
    },
    easeInCirc : function(t) {
        return -1*(Math.sqrt(1 -t*t) - 1);
    },
    easeInCubic : function(t) {
        return t*t*t;
    },
    easeOutCubic : function(t) {
        return (1-t)*(1-t)*(1-t) + 1;
    },    
    pow : function(t) {
        return Math.pow(t,parseFloat(1.5-t));
    },
    linear : function(t) {
        return t;
    }
}

```

### <a name="later_add"></a>later::add(fn, thisObj, args)


*The source code for the function*:
```javascript
if(thisObj || args) {
   var tArgs;
   if( Object.prototype.toString.call( args ) === '[object Array]' ) {
       tArgs = args;
   } else {
       tArgs = Array.prototype.slice.call(arguments, 2);
       if(!tArgs) tArgs = [];
   }
   _callers.push([thisObj, fn, tArgs]);   
} else {
    _callers.push(fn);
}
```

### <a name="later_addEasingFn"></a>later::addEasingFn(name, fn)


*The source code for the function*:
```javascript
_easings[name] = fn;
```

### <a name="later_after"></a>later::after(seconds, fn, name)


*The source code for the function*:
```javascript

if(!name) {
    name = "aft7491_"+(_localCnt++);
}

_everies[name] = {
    step : Math.floor(seconds * 1000),
    fn : fn,
    nextTime : 0,
    remove : true
};
```

### <a name="later_asap"></a>later::asap(fn)


*The source code for the function*:
```javascript
this.add(fn);

```

### <a name="later_ease"></a>later::ease(name, delay, callback, over)
`name` Name of the easing to use
 
`delay` Delay of the transformation in ms
 
`callback` Callback to set the values
 
`over` When animation is over
 


*The source code for the function*:
```javascript

var fn = _easings[name];
if(!fn) fn = _easings.pow;
var id_name = "e_"+(_localCnt++);
_easeFns[id_name] = {
    easeFn : fn,
    duration : delay,
    cb : callback,
    over : over
};



```

### <a name="later_every"></a>later::every(seconds, fn, name)


*The source code for the function*:
```javascript

if(!name) {
    name = "t7491_"+(_localCnt++);
}

_everies[name] = {
    step : Math.floor(seconds * 1000),
    fn : fn,
    nextTime : 0
};
```

### later::constructor( interval, fn )

```javascript
if(!_initDone) {
   this._easeFns();
   _localCnt=1;
   this.polyfill();
 
   var frame, cancelFrame;
   if(typeof(window) != "undefined") {
       var frame = window['requestAnimationFrame'], 
           cancelFrame= window['cancelRequestAnimationFrame'];
       ['', 'ms', 'moz', 'webkit', 'o'].forEach( function(x) { 
           if(!frame) {
            frame = window[x+'RequestAnimationFrame'];
            cancelFrame = window[x+'CancelAnimationFrame'] 
                                       || window[x+'CancelRequestAnimationFrame'];
           }
        });
   }
 
   var is_node_js = (new Function("try { return this == global; } catch(e) { return false; }"))();
   
   if(is_node_js) {
       frame= function(cb) {
            return setImmediate(cb);// (cb,1);
       }; 
   } else {
        if (!frame) {
            frame= function(cb) {
                return setTimeout(cb, 16);
            };       
        }
   }
 
    if (!cancelFrame)
        cancelFrame = function(id) {
            clearTimeout(id);
        };    
        
    _callers = [];
    _oneTimers = {};
    _everies = {};
    _framers = [];
    _easeFns = {};
    var lastMs = 0;
    
    var _callQueQue = function() {
       var ms = (new Date()).getTime(),
           elapsed = lastMs - ms;
       
       if(lastMs==0) elapsed = 0;
       var fn;
       while(fn=_callers.shift()) {
          if(Object.prototype.toString.call( fn ) === '[object Array]' ) {
              fn[1].apply(fn[0], fn[2]);
          } else {
              fn();
          }
           
       }
       
       for(var i=0; i<_framers.length;i++) {
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
       for(var n in _easeFns) {
           if(_easeFns.hasOwnProperty(n)) {
               var v = _easeFns[n];
               if(!v.start) v.start = ms;
               var delta = ms - v.start,
                   dt = delta / v.duration;
               if(dt>=1) {
                   dt = 1;
                   delete _easeFns[n];
               }
               v.cb(v.easeFn(dt));
               if((dt == 1) && v.over) v.over();
           }
       }   

       for(var n in _oneTimers) {
           if(_oneTimers.hasOwnProperty(n)) {
               var v = _oneTimers[n];
               v[0](v[1]);
               delete _oneTimers[n];
           }
       }
       
       for(var n in _everies) {
           if(_everies.hasOwnProperty(n)) {
               var v = _everies[n];
               if(v.nextTime < ms) {
                   if(v.remove) {
                       if(v.nextTime > 0) {
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
               if(v.until) {
                   if(v.until < ms) {
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
```
        
### <a name="later_once"></a>later::once(key, fn, value)


*The source code for the function*:
```javascript
// _oneTimers

_oneTimers[key] = [fn,value];
```

### <a name="later_onFrame"></a>later::onFrame(fn)


*The source code for the function*:
```javascript

_framers.push(fn);
```

### <a name="later_polyfill"></a>later::polyfill(t)


*The source code for the function*:
```javascript
// --- let's not ---
```

### <a name="later_removeFrameFn"></a>later::removeFrameFn(fn)


*The source code for the function*:
```javascript

var i = _framers.indexOf(fn);
if(i>=0) {
    if(fn._onRemove) {
        fn._onRemove();
    }
    _framers.splice(i,1);
    return true;
} else {
    return false;
}
```



   


   



      
    
      
            
# Class sequenceStepper


The class has following internal singleton variables:
        
* _instances
        
        
### <a name="sequenceStepper__classFactory"></a>sequenceStepper::_classFactory(id, manual)


*The source code for the function*:
```javascript

if(id===false && manual) return;

if(!_instances) {
    _instances = {};
}

if(_instances[id]) {
    return _instances[id];
} else {
    _instances[id] = this;
}
```

### <a name="sequenceStepper_addCommands"></a>sequenceStepper::addCommands(cmdFunction, failure)


*The source code for the function*:
```javascript

if(this.isArray(cmdFunction)) {
    var me = this;
    cmdFunction.forEach( function(c) {
        me.addCommands( c );
    });
    return this;
}

this._commands.push( { 
                        fnCmd : cmdFunction, 
                        fnFail: failure, 
                        async : true }  );
```

### sequenceStepper::constructor( myId, manual )

```javascript

if(!this._commands) {
    this._commands = [];
    this.waitingList = [];
    this._index = 0;
}

var me = this;
if(!manual) {
    later().every(1/30, function() {
        me.step();
    });
}

```
        
### <a name="sequenceStepper_step"></a>sequenceStepper::step(t)


*The source code for the function*:
```javascript
var i = this._index,
    len = this._commands.length;
    
if(i==len) return;

var first = _promise(),
    currentProm = first,
    myPromise = _promise(),
    me = this;

while(i<len) {
    var fn = this._commands[i];
    (function(fn) {
        currentProm = currentProm.then( function() {
            
            var p = _promise();
            
            // if(fn.async) {

            fn.fnCmd( function(res) {
                p.resolve(true); 
            }, function(failReason) {
                p.resolve(true);
                if(fn.fnFail) fn.fnFail( failReason );
            });                   

            return p; 
        }).fail( function(reason) {
            if(fn.fnFail) fn.fnFail( reason );
        });
    }(fn));
    this._index++;
    i++;
}

currentProm.then( function() {
   me.waitingList.shift(); // remvoe this promise from the queque
   myPromise.resolve(true);
   if(me.waitingList.length) {
       var newP = me.waitingList[0];
       newP.resolve(true);
   } 
}).fail( function(m) {
    
});


this.waitingList.push(first);
if(this.waitingList.length==1) {
    first.resolve(true);
} 
return myPromise;

```



   
    
## trait _dataTrait

The class has following internal singleton variables:
        
* _eventOn
        
* _commands
        
        
### <a name="_dataTrait_guid"></a>_dataTrait::guid(t)


*The source code for the function*:
```javascript

return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
        
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
```

### <a name="_dataTrait_isArray"></a>_dataTrait::isArray(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isA;

return Object.prototype.toString.call( t ) === '[object Array]';
```

### <a name="_dataTrait_isFunction"></a>_dataTrait::isFunction(fn)


*The source code for the function*:
```javascript
return Object.prototype.toString.call(fn) == '[object Function]';
```

### <a name="_dataTrait_isObject"></a>_dataTrait::isObject(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isO;

return t === Object(t);
```


    
    


   
      
    



      
    
      
            
# Class streamProcessor


The class has following internal singleton variables:
        
        
### <a name="streamProcessor_cont"></a>streamProcessor::cont(withValue)


*The source code for the function*:
```javascript

if(this.isArray(withValue)) {
    
    var me = this;
    var newList = this._list.slice( this._index + 1);
    
    if(newList.length==0) {
        this.step();
        return;
    }
    
    var all = [];
    withValue.forEach(
        function(v) {
            var newList = me._list.slice( me._index + 1);
            var stream = simpleStream(me);
            me._subStreams.push(stream);
            stream.addObserver( newList );
            all.push( stream.pushValue( v ) );
        });
    
    var wait = _promise();
    wait.all(all).then( function() {
        var r = [];
        me._subStreams.length = 0;
        all.forEach( function(p) {
            r.push(p.value()); 
        });
        me.resolve(r);
    });
    wait.resolve(true);

    
} else {
    
    if(typeof(withValue) !="undefined") {
        this._context.value = withValue;
    }
    
    this.step();
    
}

```

### <a name="streamProcessor_ctxVar"></a>streamProcessor::ctxVar(name, value)


*The source code for the function*:
```javascript

if(typeof(value)=="undefined") {
    var v = this._contextVars[name];
    if(typeof(v)=="undefined") {
        if(this._parent) {
           return this._parent.ctxVar(name); 
        }
    }
    return v;
}

this._contextVars[name] = value;


```

### <a name="streamProcessor_get"></a>streamProcessor::get(name)


*The source code for the function*:
```javascript

if(this._closure) {    
    var v = this._contextVars[name];
    if(typeof(v)=="undefined") {
        return this._parent.get(name); 
    }
    return v;
}

var v = this._contextVars[name];
if(typeof(v)=="undefined") {
    if(this._parent) {
       return this._parent.get(name); 
    }
}
return v;
```

### <a name="streamProcessor_getRest"></a>streamProcessor::getRest(t)


*The source code for the function*:
```javascript

```

### <a name="streamProcessor_getState"></a>streamProcessor::getState(t)


*The source code for the function*:
```javascript


return this._stopState;
```

### <a name="streamProcessor_getValue"></a>streamProcessor::getValue(t)


*The source code for the function*:
```javascript

// simple value processor

if(!this._context && this._parent) {
    return this._parent.getValue();
}

if(this._context && !this._context.value && !this._context.initWith && this._parent) {
    return this._parent.getValue();
}

return this._context.value || this._context.initWith;
```

### streamProcessor::constructor( parentProcessor, isClosure )

```javascript

// The context of the processor
this._context = {};
this._contextVars = {};

// should we kill all the substreams too...?
this._subStreams = [];

this._stopState = 0;

if(parentProcessor) {
    this._parent = parentProcessor;
}

if(isClosure) this._closure = true;



```
        
### <a name="streamProcessor_killAll"></a>streamProcessor::killAll(t)


*The source code for the function*:
```javascript

if(this._subStreams) {
    this._subStreams.forEach( function(s) {
        s.killAll();
    });
}
```

### <a name="streamProcessor_run"></a>streamProcessor::run(withValue)


*The source code for the function*:
```javascript

if(this._closure) {
    if(this._parent) {
        this._parent.run(withValue);
        return;
    } else {
        console.error("No parent for closure");
        //console.trace();
    }
}
this._stopState = 1;
this.cont(withValue);
return;

```

### <a name="streamProcessor_set"></a>streamProcessor::set(name, value)


*The source code for the function*:
```javascript
if(typeof(value)!="undefined") {
    
    if(this._closure) {
        if(typeof(this._contextVars[name]) !="undefined") {
            this._contextVars[name] = value;
        } else {
            if(this._parent) {
                this._parent.set(name, value);
                return this;
            }
        }
    }
    
    if(typeof(this._contextVars[name]) =="undefined") {
        if(this._parent) {
            this._parent.set(name, value);
            return this;
        }        
    }
    
    this._contextVars[name] = value;
    return this;
}

```

### <a name="streamProcessor_setContext"></a>streamProcessor::setContext(ctx)


*The source code for the function*:
```javascript
this._context = ctx;
```

### <a name="streamProcessor_setParent"></a>streamProcessor::setParent(newParent)


*The source code for the function*:
```javascript
this._parent = newParent;
```

### <a name="streamProcessor_start"></a>streamProcessor::start(list)


*The source code for the function*:
```javascript

this._list = list;
this._index = -1;

this.step();

```

### <a name="streamProcessor_step"></a>streamProcessor::step(t)


*The source code for the function*:
```javascript

this._index++;
var i = this._index,
    me = this;
    
if(this._list[i]) {
    
    var obs = this._list[i];
    // Call the observer
    
    if(this.isObject(obs) && !this.isFunction(obs)) {

        if(obs.closure) {
            obs.closure.setParent( this );
            obs.fn.apply( obs.closure, [obs.closure] );
        } else {
            // var ctx = streamProcessor()
            obs.fn.apply( this, [this] );
        }
    } else {
        obs.apply( this, [this] );
    }
    
} else {
    if(typeof(this._context.value)=="undefined") {
        this._context.value = this._context.initWith;
    }
    if(this._stopState < 2) {
        this._stopState = 7;
    }
    this.resolve(this._context.value);
}


```

### <a name="streamProcessor_stopStream"></a>streamProcessor::stopStream(t)


*The source code for the function*:
```javascript
if(!this._context.value) {
    this._context.value = this._context.initWith;
}
this._stopState = 3;
this.resolve(this._context.value);
```



   
    
## trait _dataTrait

The class has following internal singleton variables:
        
        
### <a name="_dataTrait_guid"></a>_dataTrait::guid(t)


*The source code for the function*:
```javascript

return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

```

### <a name="_dataTrait_isArray"></a>_dataTrait::isArray(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isA;

return Object.prototype.toString.call( t ) === '[object Array]';
```

### <a name="_dataTrait_isFunction"></a>_dataTrait::isFunction(fn)


*The source code for the function*:
```javascript
return Object.prototype.toString.call(fn) == '[object Function]';
```

### <a name="_dataTrait_isObject"></a>_dataTrait::isObject(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isO;

return t === Object(t);
```


    
    


   
      
    



      
    



      
    
      
            
# Class shellWindow


The class has following internal singleton variables:
        
        
### shellWindow::constructor( mainDiv, fileSystemData, parentShell )

```javascript
/*var demo = _data(url, {
   createWith : {
       tmp : {},
       bin : {}
   }
});
*/

css().bind( ".mainWindow", { width : "600px", height:"auto", overflow:"hidden", border : "none",
"box-shadow" : "-1px -1px 18px 0px rgba(50, 50, 50, 0.9);" 
});
css().bind( ".mainTools", { width : "600px", height:"20px", overflow:"hidden", 
                cursor : "pointer",
                border : "1px solid gray;", "background-color":"#333"});

var x = 100, y=100, sx,sy;

var mainCont = mainDiv.div();
mainCont.addClass("mainWindow");
mainCont.absolute();
mainCont.x(x).y(y);

mainCont.addClass("animClassName");

var mainTools = mainCont.div("mainTools");
mainTools.draggable( function(o,dv) {
    sx = x;
    sy = y;
}, function(o,dv) {
    mainCont.x( dv.dx + sx);
    mainCont.y( dv.dy + sy);
    x = dv.dx + sx;
    y = dv.dy + sy;
}, function(o,dv) {

});

var main = mainCont.div();

this._mainWindow = main;

fileSystemData.then( function() {

    css().bind(".aceHTML", { width:  "1200px", height: "350px" });
    var shell = itemShell(fileSystemData);
    
    shell.initializeShell( fileSystemData, parentShell );
    shell.mainWindow(mainDiv);
    
    // clearScreen
    mainTools.button().text("dir").on("click", function() {
       shell.exec("ls"); 
    })
    mainTools.button().text("cls").on("click", function() {
       shell.clearScreen(); 
    });;
    
    mainTools.button().text("close").on("click", function() {
       mainCont.addClass("animZoomOut"); 
    });
    
    shell.addPipedCmd( "grep", function(data, params, fn) {
        if(params) {
            params = params.trim();
            if(data && data.match(params)) {
                return fn( data );
            } else {
                fn( null );
            }
            return;
        }
        fn();
    });
    
    main.div().add( shell.getOutputArea() );
    main.add( shell.getInputField() );
    
    var ta = shell.getInputField();
    var stream = simpleStream();
    var outDiv = main.div();
    stream.branch( function(v) {
        outDiv.clear();
    },600);
    stream.filter( function(v) {
        if(v && v.length>0) return shell.isValidCommand( v );
    });
    stream.collectValuesFor( 100 );
    stream.forEach( function(v) {
        outDiv.text( v + " command entered");
    });

    ta.on("value", function() {
        stream.pushValue(ta.val());
    });
    /*
    $(ta._dom).on("keyup", function() {
        stream.pushValue(ta.val());
    });
    */
    
    setTimeout( function() {
        shell.exec("ls");
    },100);
    

        
});
```
        


   
    
## trait _dataTrait

The class has following internal singleton variables:
        
        
### <a name="_dataTrait_guid"></a>_dataTrait::guid(t)


*The source code for the function*:
```javascript

return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

```

### <a name="_dataTrait_isArray"></a>_dataTrait::isArray(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isA;

return Object.prototype.toString.call( t ) === '[object Array]';
```

### <a name="_dataTrait_isFunction"></a>_dataTrait::isFunction(fn)


*The source code for the function*:
```javascript
return Object.prototype.toString.call(fn) == '[object Function]';
```

### <a name="_dataTrait_isObject"></a>_dataTrait::isObject(t)


*The source code for the function*:
```javascript

if(typeof(t)=="undefined") return this.__isO;

return t === Object(t);
```


    
    


   
      
    



      
    





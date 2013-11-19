# pm2-interface (for pm2 version >= 0.6.0)

pm2-interface permits you to interact with [PM2](https://github.com/Unitech/pm2) the process manager for NodeJS.

You can **control all exposed methods** by the pm2 deamon [God](https://github.com/Unitech/pm2/blob/master/lib/God.js) and also **receive real time notifications** for example for a process who got an unexpectedException, who's starting/stopping.



## RPC methods



- [`ipm2.rpc.prepare(json, fn)`](#prepare)
- [`ipm2.rpc.getMonitorData({}, fn)`](#getMonitorData)
- [`ipm2.rpc.startProcessId(integer, fn)`](#startProcessId)
- [`ipm2.rpc.stopProcessId(integer, fn)`](#stopProcessId)
- [`ipm2.rpc.stopProcessName(string, fn)`](#stopProcessName)
- [`ipm2.rpc.restartProcessId(integer, fn)`](#restartProcessId)
- [`ipm2.rpc.restartProcessName(string, fn)`](#restartProcessName)
- [`ipm2.rpc.stopAll({}, fn)`](#stopAll)
- [`ipm2.rpc.reload(data, fn)`](#reload)
- [`ipm2.rpc.killMe(data, fn)`](#killMe)
- [`ipm2.rpc.findByScript(string, fn)`](#findByScript)
- [`ipm2.rpc.findProcessById(integer, fn)`](#findProcessById)
- [`ipm2.rpc.findByPort(integer, fn)`](#findByPort)
- [`ipm2.rpc.findByFullPath(string, fn)`](#findByFullPath)
- [`ipm2.rpc.deleteProcessId(integer, fn)`](#deleteProcessId)
- [`ipm2.rpc.deleteProcessName(string, fn)`](#deleteProcessName)
- [`ipm2.rpc.deleteAll(data, fn)`](#deleteAll)
- [`ipm2.rpc.getProcesses((), fn)`](#getProcesses)
- [`ipm2.rpc.getFormatedProcesses((), fn)`](#getFormatedProcesses)
- [`ipm2.rpc.checkProcess((), fn)`](#checkProcess)



**<a name="prepare">ipm2.rpc.prepare</a>**

- **Description:** send a JSON configuration to start app(s)
- **Notification:** 
- **Response:**

```javascript
ipm2.rpc.prepare
```

**<a name="stopAll">ipm2.rpc.stopAll</a>**

- **Description:** stop all process
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.stopAll
```

**<a name="reload">ipm2.rpc.reload</a>**

- **Description:** reload all apps (only for networked apps)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.reload
```

**<a name="getProcesses">ipm2.rpc.getProcesses</a>**

- **Description:** Send some info about the pm2 procesess
- **Notification:** 
- **Response:** `JSON`


```javascript
ipm2.rpc.getProcesses
```

**<a name="getFormatedProcesses">ipm2.rpc.getFormatedProcesses</a>**

- **Description:** Send some formated info about the pm2 procesess
- **Notification:** 
- **Response:** `JSON`


```javascript
ipm2.rpc.getFormatedProcesses
```


**<a name="getMonitorData">ipm2.rpc.getMonitorData</a>**

- **Description:** receive all related informations about supervised process (cpu/ram/pid...)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.getMonitorData
```



**<a name="findProcessById">ipm2.rpc.findProcessById</a>**

- **Description:** send you back the informations about a specific process (by pm2 id)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.findProcessById
```

**<a name="findByScript">ipm2.rpc.findByScript</a>**

- **Description:** send you back the informations about a specific process (by script name)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.findByScript
```

**<a name="findByPort">ipm2.rpc.findByPort</a>**

- **Description:** send you back the informations about a specific process (by port number)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.findByPort
```

**<a name="findByFullPath">ipm2.rpc.findByFullPath</a>**

- **Description:** send you back the informations about a specific process  (by full path)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.findByFullPath
```

**<a name="checkProcess">ipm2.rpc.checkProcess</a>**

- **Description:** Check if a process is alive in system processes (by system process id?)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.checkProcess
```

**<a name="startProcessId">ipm2.rpc.startProcessId</a>**

- **Description:** start a process by id (pm_id) who his state is stopped
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.startProcessId
```

**<a name="stopProcessId">ipm2.rpc.stopProcessId</a>**

- **Description:** stop a process by id (pm_id)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.stopProcessId
```

**<a name="deleteProcessId">ipm2.rpc.deleteProcessId</a>**

- **Description:** stop and delete a process from the pm2 database by id (pm_id)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.deleteProcessId
```

**<a name="restartProcessId">ipm2.rpc.restartProcessId</a>**

- **Description:** restart a process by id (pm_id)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.restartProcessId
```

**<a name="restartProcessName">ipm2.rpc.restartProcessName</a>**

- **Description:** restart all processes who have the given name (ex. more than 1 instance)
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.restartProcessName
```

**<a name="stopProcessName">ipm2.rpc.stopProcessName</a>**

> - **Description:** stop all processes who have the given name (ex. more than 1 instance)
> - **Notification:** 
> - **Response:**


```javascript
ipm2.rpc.stopProcessName
```

**<a name="deleteProcessId">ipm2.rpc.deleteProcessId</a>**

> - **Description:** stop and delete all processes who have the given name
> - **Notification:** 
> - **Response:**


```javascript
ipm2.rpc.deleteProcessId
```
**<a name="deleteProcessName">ipm2.rpc.deleteProcessName</a>**

> - **Description:** stop and delete all processes who have the given name
> - **Notification:** 
> - **Response:**


```javascript
ipm2.rpc.deleteProcessName
```

**<a name="deleteAll">ipm2.rpc.deleteAll</a>**

- **Description:** stop and delete all processes 
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.deleteAll
```

**<a name="killMe">ipm2.rpc.killMe</a>**

- **Description:** kill pm2 daemon
- **Notification:** 
- **Response:**


```javascript
ipm2.rpc.killMe
```

## Notifications

- `process:online` when a process is started/restarted
- `process:exit` when a process is exited
- `process:exception` When a process has received an uncaughtException

**Advanced feature** : You can use `process.emit({ type : 'my:message', data : {}})` in your Node apps. When you emit a message, they will be redirected to pm2 ans send back to the pm2-interface bus.

## Example

```javascript
var ipm2 = require('pm2-interface')();

ipm2.on('ready', function() {
  console.log('Connected to pm2');

  ipm2.bus.on('*', function(event, data){    
    console.log(event, data.pm2_env.name);
  });

  setTimeout(function() {
    ipm2.rpc.restartProcessId(0, function(err, dt) {
      console.log(dt);
    });
  }, 2000);

  
  ipm2.rpc.getMonitorData({}, function(err, dt) {
    console.log(dt);
  });
});
```

## Ideas

- Catching exceptions and fowarding them by mail
- A web interface to control PM2

## Apache v2 License

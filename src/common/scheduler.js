var scheduler = new (function () {
  var schedules = {};

  this.create = function (id, time, callback, options) {
    options = options || {};
    var sch = schedules[id];
    if (sch) { sch.cancel(); }

    sch = new Schedule(id, time, function () {
      callback(sch);
    }, function () { delete schedules[id]; }, options);
    schedules[id] = sch;
    return sch;
  };

  //this.clear = function () { }

  function Schedule(id, time, callback, cancelled, options) {
    //this.id = id;
    //this.time = time;
    var waitTime = null;
    if (time instanceof Date) {
      waitTime = time.getTime() - (new Date()).getTime();
    }
    else if (typeof time === "number") {
      waitTime = time * 60 * 1000;
    }
    var obj = {};
    if (waitTime >= 0) {
      if (options.recursive) {
        obj.cTokken = setInterval(callback, waitTime);
      }
      else {
        obj.cTokken = setTimeout(function () { cancelled(); callback(this); }, waitTime);
      }
    }

    this.cancel = function () {
      if (obj && obj.cTokken) {
        if (options.recursive) {
          clearInterval(obj.cTokken);
        }
        else {
          clearTimeout(obj.cTokken);
        }
        delete obj;
        cancelled();
      }
    }
  }
})();

function loadScript(src, scriptId, isLoaded, done, retryCount) {
  if (retryCount == null) {
    retryCount = 10;
  }
  console.log("Loading script:- " + src);

  var scriptGAPI = document.createElement("script");
  scriptGAPI.id = scriptId;
  scriptGAPI.src = src;
  scriptGAPI.async = true;
  scriptGAPI.defer = true;
  //var scriptGAPI = $("head").append('<script id="' + scriptId + '" async defer src="' + src + '"></script>').get(0);
  var lSch = scheduler.create("scriptLoader" + retryCount, 0.2, completeCallback);

  scriptGAPI.onload = function () {
    this.onload = function () { };
    completeCallback(lSch);
  }
  scriptGAPI.onerror = function (err) { }
  scriptGAPI.onreadystatechange = function () { if (this.readyState === 'complete') { this.onload(); } };

  $('head').append(scriptGAPI);

  function completeCallback(sch) {
    sch.cancel();
    if (!isLoaded()) {
      console.error("Script not loaded:- " + src);
      scheduler.create("scriptLoadCaller" + retryCount, 10, function () {
        $('#' + scriptId).remove();
        loadScript(src, scriptId, isLoaded, done, --retryCount);
      });
    }
    else {
      done();
    }
  }
}
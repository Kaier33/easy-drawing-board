(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.array.concat'), require('core-js/modules/es.array.map'), require('core-js/modules/es.array.slice'), require('core-js/modules/es.object.to-string'), require('core-js/modules/es.promise'), require('core-js/modules/es.regexp.exec'), require('core-js/modules/es.string.replace'), require('core-js/modules/es.string.split'), require('core-js/modules/es.array.fill'), require('core-js/modules/es.number.constructor'), require('core-js/modules/es.object.keys')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat', 'core-js/modules/es.array.map', 'core-js/modules/es.array.slice', 'core-js/modules/es.object.to-string', 'core-js/modules/es.promise', 'core-js/modules/es.regexp.exec', 'core-js/modules/es.string.replace', 'core-js/modules/es.string.split', 'core-js/modules/es.array.fill', 'core-js/modules/es.number.constructor', 'core-js/modules/es.object.keys'], factory) :
  (global = global || self, global.EasyDrawingBoard = factory());
}(this, (function () { 'use strict';

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".__edb-textarea-box {\n  position: absolute;\n  z-index: 101;\n  width: auto;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  word-wrap: break-word;\n  word-break: break-all;\n  color: #aaa;\n  border: 1px dashed gray;\n}\n.__edb-textarea-box .__edb-textarea {\n  resize: none;\n  background: transparent;\n  border: none;\n  padding: 1px;\n  outline: none;\n  font-family: \"PingFang SC\", \"Microsoft YaHei\", \"微软雅黑\";\n  overflow: hidden;\n}\n.__edb-text-pre {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: -9999px;\n  min-width: 100px;\n  display: inline-block;\n  padding: 1px;\n  border: 1px solid red;\n  font-family: \"PingFang SC\", \"Microsoft YaHei\", \"微软雅黑\";\n}\n.__edb-eraser-hover {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEm0lEQVRYR62XbUxbVRjH/7cUxlrWQW9fBmNsDGROwG1B6C1my5ahERcTTSRMcXIH6NwSv6gxmckMaPywxCXGQTdfMpuMwdiLbI5Fs7HhNCIGlNCOwTbGW3kr76hbJkKPuRdb29tyewDvlyb3Pvf8fs9znnN6LoP/6So0a7QEYdVKKJZNE5fV2jB6nGZohiYoWEzxdii7H7J/b9QYZiKUYcrG8T4ApMTaMF4c7N0lC7yeFqOaDv3rfpYxEVmGBJFnnxrCqd4WKoklCfCbIyMRHjLhDRcEbFNDqBAFhEu+EosW2JNpNIS4ZpxZxgRkGRI9lW6ZHESlw4YDuaniPUuVXVZiUQJ5Jm1sKMM4pPDmyQFUOewiPD3ZKAo0tjplJRYsUJSxMn5GoeyUwn+bGMCZPl+4uyxyEgsSKHhSt8E1S9qlc9400Y9zfTd9Mpd2v5dEsbVhvMT9nFqAN0elgihs0syFJXe+v1UWLlcJKoF8ky6NYUiTNPNfxh2o7r9FBRckmlqHYTljAyH/rY6gArxJy4FhfpZm3jDmwIUBevivbcNiMyavMGK9OgoXB9pACLNPViA/U7+NcbluSOH1Y734ZqCNOvPm9hERvjHCgLy4TeKM1A53oM7Z1TKvQAHHZrmAq1L4T6M9uDTYTg1vuT0qwjeo9R64W+C6szOwAG/SPwvGdVkK/3G0G5cHb1PDbXfHYDltQ5LKH17rvBd4CvgM9nkoUC2F3xjpwrdDd6jhNzsEuB2Jy3V+mQtwgIjL0WcKeE63HSB1Uvj3I134bgHwW53jKKu0IyGclcDvodbZ4bM1BxW4PtyJK8671Jm3d02grNKG+GXB4UIv+Ajk5CAkamTNpemHD7KFKjBgcNXZQQ2/0zOJsgob1oZpZcvuvUt6BPJMWo06XHUhNjElzZS9W1P58dtinPcfi9zhoqN3EqUVdsSFRs1Xdp8t2GcrfiVNFx2uDvs6em1SSmHJlxFh4SrY669AkOAeX4V9L6bIHmw6+6ZEeGxIJHXmHoFCsz4RIcpz+tXrHuEPHVNptAYPzC2xdUsMCl54LKBEV//vKK2wYbVCCvdvuEADMEXbYuojdas27zl4dPnFzz6E6ZndSM182k9iR3osXn3uUZ8xegb/QOkpG6KZlfNlHvRcyOw1a98nhCnZmbtfHPxa1TG89M6RgBJPmePwcnaSGOcY+lOEG6FZNNyzCniOfQ/AR3MSDK5VWeaV2LV1HcybVuFouR0GsiLoOpdtHu9lmM+x7zLAYe9KFH1wAutT0v2mI0avBju9dLjfPsBz2rcA5oi7EvHJT/gICC+4G3NLZAxy18wdPGuH6RouYBNKb/Ic+yaAT3fmHoAg8sWhAvE3UCUy2TiolKH4d28P2nBUAkLQXo7dTwCLICFc0kqc/eQgaf6hxmsXpfsKohYQAnlO9xpAPndXwv1ytaWYNNaeZ0AUu6CYVYMgmeYTbL5mlD0R8RzLA/jKLVFz4rCrvqZcAQUyrPVjjcE6nOZ50DNhPqfLY0DKd+S84ao7e1wBzMZbGya7aQaniQkqMNcT2lwC5vTsA2XESZvzPs3AtDH/ANJxaF2ajW5TAAAAAElFTkSuQmCC\") 0 32, auto;\n}\n";
  styleInject(css_248z);

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {});

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Dom = /*#__PURE__*/function () {
    function Dom() {
      _classCallCheck(this, Dom);
    }

    _createClass(Dom, null, [{
      key: "createEl",
      value: function createEl() {
        var elName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';

        var _ref = arguments.length > 1 ? arguments[1] : undefined,
            _ref$styles = _ref.styles,
            styles = _ref$styles === void 0 ? {} : _ref$styles,
            _ref$attrs = _ref.attrs,
            attrs = _ref$attrs === void 0 ? {} : _ref$attrs,
            _ref$props = _ref.props,
            props = _ref$props === void 0 ? {} : _ref$props;

        var el = document.createElement(elName);
        Object.keys(styles).map(function (keys) {
          el.style[keys] = styles[keys];
        });
        Object.keys(attrs).map(function (keys) {
          el.setAttribute(keys, attrs[keys]);
        });
        Object.keys(props).map(function (keys) {
          el[keys] = props[keys];
        });
        return el;
      }
    }, {
      key: "hasClass",
      value: function hasClass(el, className) {
        return el.classList.contains(className);
      }
    }, {
      key: "addClass",
      value: function addClass(el, className) {
        el.classList.add(className);
      }
    }, {
      key: "removeClass",
      value: function removeClass(el, className) {
        el.classList.remove(className);
      }
    }, {
      key: "setAttr",
      value: function setAttr(el, attr, attrVal) {
        el.setAttribute(attr, attrVal);
      }
    }, {
      key: "delAttr",
      value: function delAttr(el, attr) {
        el.removeAttribute(attr);
      }
    }, {
      key: "appendChild",
      value: function appendChild(parentEl, childEl) {
        parentEl.appendChild(childEl);
      }
    }, {
      key: "removeChild",
      value: function removeChild(parentEl, childEl) {
        parentEl.removeChild(childEl);
      }
    }]);

    return Dom;
  }();

  function getArrowPoint(beginPoint, endPoint, par) {
    var slopyAngle = Math.atan2(endPoint.y - beginPoint.y, endPoint.x - beginPoint.x);
    var angle = 0.6;
    var innerAngle = 0.3;
    var innerPar = par / 3 * 2;
    var point1 = {
      x: endPoint.x - Math.round(par * Math.cos(slopyAngle + angle)),
      y: endPoint.y - Math.round(par * Math.sin(slopyAngle + angle))
    };
    var point2 = {
      x: endPoint.x - Math.round(par * Math.cos(slopyAngle - angle)),
      y: endPoint.y - Math.round(par * Math.sin(slopyAngle - angle))
    };
    var point3 = {
      x: endPoint.x - Math.round(innerPar * Math.cos(slopyAngle + innerAngle)),
      y: endPoint.y - Math.round(innerPar * Math.sin(slopyAngle + innerAngle))
    };
    var point4 = {
      x: endPoint.x - Math.round(innerPar * Math.cos(slopyAngle - innerAngle)),
      y: endPoint.y - Math.round(innerPar * Math.sin(slopyAngle - innerAngle))
    };
    return [beginPoint, point4, point2, endPoint, point1, point3];
  }
  function drawArrow(ctx, options) {
    var canvasWidth = options.canvasWidth;
    var canvasHeight = options.canvasHeight;
    var arrowSize = options.arrowSize;
    ctx.save(); // ctx.globalCompositeOperation = 'source-over';

    ctx.beginPath();
    ctx.moveTo(options.points[0].x * canvasWidth, options.points[0].y * canvasHeight);

    var paintArrar = function paintArrar(ctx, polygonVertex) {
      ctx.beginPath();
      ctx.moveTo(polygonVertex[0].x, polygonVertex[0].y);

      for (var i = 1; i < polygonVertex.length; i++) {
        ctx.lineTo(polygonVertex[i].x, polygonVertex[i].y);
      }

      ctx.closePath();
      ctx.fill();
    };

    var drawArrow = function drawArrow(ctx, stopPoint, beginPoint, arrowSize) {
      var polygonVertex = getArrowPoint(beginPoint, stopPoint, arrowSize);
      paintArrar(ctx, polygonVertex);
    };

    for (var i = 1; i < options.points.length; i++) {
      drawArrow(ctx, {
        x: options.points[i].x * canvasWidth,
        y: options.points[i].y * canvasHeight
      }, {
        x: options.points[i - 1].x * canvasWidth,
        y: options.points[i - 1].y * canvasHeight
      }, arrowSize);
    }

    ctx.restore();
  }
  function loadImg(_x) {
    return _loadImg.apply(this, arguments);
  } // 对于有背景图的, 先画背景图, 再覆盖上 笔迹. 不然生成的数据只有笔迹, toDataURL生成的数据不包含背景图

  function _loadImg() {
    _loadImg = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(src) {
      return regeneratorRuntime.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                var img = new Image();
                img.setAttribute("crossOrigin", "anonymous");
                img.onerror = reject;

                img.onload = function () {
                  return resolve(img);
                };

                img.src = src;
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2);
    }));
    return _loadImg.apply(this, arguments);
  }

  function getBase64Data(canvas, bgImg, type) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
        var painting, _canvasEl, _context, bgImgEl, paintEl;

        return regeneratorRuntime.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                painting = canvas.toDataURL("image/".concat(type));
                _canvasEl = Dom.createEl("canvas", {
                  styles: {
                    width: "".concat(canvas.width, "px"),
                    height: "".concat(canvas.height, "px")
                  },
                  attrs: {
                    width: canvas.width,
                    height: canvas.height
                  }
                });
                _context = _canvasEl.getContext("2d");
                _context2.next = 5;
                return loadImg(bgImg);

              case 5:
                bgImgEl = _context2.sent;
                !bgImgEl && reject();

                _context.drawImage(bgImgEl, 0, 0, canvas.width, canvas.height);

                _context2.next = 10;
                return loadImg(painting);

              case 10:
                paintEl = _context2.sent;
                !paintEl && reject();

                _context.drawImage(paintEl, 0, 0, canvas.width, canvas.height);

                resolve(_canvasEl.toDataURL("image/".concat(type)));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));

      return function (_x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  //   const bbox = canvas.getBoundingClientRect();
  //   const style = window.getComputedStyle(canvas);
  //   return {
  //       x: (x - bbox.left - parseInt(style.paddingLeft) - parseInt(style.borderLeft))
  //           * (canvas.width / parseInt(style.width)),
  //       y: (y - bbox.top - parseInt(style.paddingTop) - parseInt(style.borderTop))
  //           * (canvas.height / parseInt(style.height))
  //   };
  // }

  function windowToCanvas(canvas, canvas_styles, x, y) {
    var cbox = canvas.getBoundingClientRect();
    return {
      x: (x - cbox.left - parseInt(canvas_styles.paddingLeft) - parseInt(canvas_styles.borderLeft)) * (canvas.width / parseInt(canvas_styles.width)),
      y: (y - cbox.top - parseInt(canvas_styles.paddingTop) - parseInt(canvas_styles.borderTop)) * (canvas.height / parseInt(canvas_styles.height))
    };
  }

  var Draw = /*#__PURE__*/function () {
    function Draw(options) {
      _classCallCheck(this, Draw);

      var container = options.container,
          _options$bgImg = options.bgImg,
          bgImg = _options$bgImg === void 0 ? "" : _options$bgImg,
          _options$lineColor = options.lineColor,
          lineColor = _options$lineColor === void 0 ? "#f00" : _options$lineColor,
          _options$lineWidth = options.lineWidth,
          lineWidth = _options$lineWidth === void 0 ? "1" : _options$lineWidth,
          _options$arrowSize = options.arrowSize,
          arrowSize = _options$arrowSize === void 0 ? 15 : _options$arrowSize,
          _options$eraserSize = options.eraserSize,
          eraserSize = _options$eraserSize === void 0 ? 10 : _options$eraserSize,
          _options$canvasBgColo = options.canvasBgColor,
          canvasBgColor = _options$canvasBgColo === void 0 ? "#fff" : _options$canvasBgColo,
          _options$textFontSize = options.textFontSize,
          textFontSize = _options$textFontSize === void 0 ? 16 : _options$textFontSize,
          _options$textLineHeig = options.textLineHeight,
          textLineHeight = _options$textLineHeig === void 0 ? 20 : _options$textLineHeig,
          _options$textColor = options.textColor,
          textColor = _options$textColor === void 0 ? "#f00" : _options$textColor;
      if (!container) throw Error("No container element were found...");
      this.container = container;
      this.canvas = this.createCanvasEl(container);
      this.context = this.canvas.getContext("2d");
      this.mode = "pencil";
      this.canvasWidth = this.canvas.width;
      this.canvasHeight = this.canvas.height;
      this.c_offsetLeft = 0;
      this.c_offsetTop = 0;
      this.originX = null;
      this.originY = null;
      this.configuration = {
        lineColor: lineColor,
        lineWidth: lineWidth,
        arrowSize: arrowSize,
        eraserSize: eraserSize,
        canvasBgColor: canvasBgColor,
        textFontSize: textFontSize,
        textLineHeight: textLineHeight,
        textColor: textColor,
        bgImg: bgImg
      };
      this.arrowPoints = [];
      this.isDrawing = false;
      this.image = new Image(); // this.bgImg = bgImg;

      this.textareaEl = null;
      this.measureEl = null; // cache

      this.historyImage = new Image(); // 撤销时用到

      this.historyUrls = []; // 存放每一步的base64 url（只取最新的十条）

      this.currentHistoryIndex = -1; // 当前历史记录的索引

      this.init();
    }

    _createClass(Draw, [{
      key: "createCanvasEl",
      value: function createCanvasEl(container) {
        var canvasEl = Dom.createEl("canvas", {
          styles: {
            height: "".concat(container.clientHeight, "px"),
            width: "".concat(container.clientWidth, "px")
          },
          attrs: {
            width: container.clientHeight,
            height: container.clientWidth
          }
        });
        Dom.appendChild(container, canvasEl);
        return canvasEl;
      }
    }, {
      key: "init",
      value: function init() {
        var _this = this;

        var _this$canvas$getBound = this.canvas.getBoundingClientRect(),
            x = _this$canvas$getBound.x,
            y = _this$canvas$getBound.y;

        this.canvas_style = window.getComputedStyle(this.canvas);
        this.c_offsetLeft = x;
        this.c_offsetTop = y;
        this.context.lineCap = 'round';
        this.clear();
        this.setBackground();
        this.createTextMeasure();
        this.canvas.addEventListener("mousedown", this.mouseDown.bind(this));
        this.canvas.addEventListener("mousemove", this.mouseMove.bind(this));
        this.canvas.addEventListener("mouseup", function () {
          return _this.endOfDrawing();
        });
        this.canvas.addEventListener("mouseleave", function () {
          return _this.endOfDrawing();
        });
      }
    }, {
      key: "mouseDown",
      value: function mouseDown(event) {
        this.isDrawing = true;
        this.image.src = this.canvas.toDataURL("image/png");
        var clientX = event.clientX,
            clientY = event.clientY; // 鼠标按下时, canvas的初始坐标 (会随着move而变)
        // this.originX = clientX - this.c_offsetLeft;
        // this.originY = clientY - this.c_offsetTop;

        var _windowToCanvas = windowToCanvas(this.canvas, this.canvas_style, clientX, clientY),
            x = _windowToCanvas.x,
            y = _windowToCanvas.y;

        this.originX = x;
        this.originY = y; // 记录初始按下的坐标

        this.ft_originX = this.originX;
        this.ft_originY = this.originY;
        this.context.moveTo(this.originX, this.originY);
        this.context.lineWidth = this.configuration.lineWidth;
        this.context.strokeStyle = this.configuration.lineColor;
        this.context.fillStyle = this.configuration.lineColor;
        this.context.beginPath();
        this.mode === "arrow" && this.saveArrowPoint({
          x: this.originX,
          y: this.originY
        });
        this.mode === "text" && this.createTextArea({
          x: this.ft_originX,
          y: this.ft_originY
        });
      }
    }, {
      key: "mouseMove",
      value: function mouseMove(event) {
        if (this.isDrawing) {
          var clientX = event.clientX,
              clientY = event.clientY; // 鼠标移动时, canvas中的实时坐标
          // const x = clientX - this.c_offsetLeft;
          // const y = clientY - this.c_offsetTop;

          var _windowToCanvas2 = windowToCanvas(this.canvas, this.canvas_style, clientX, clientY),
              x = _windowToCanvas2.x,
              y = _windowToCanvas2.y; // 默认是鼠标刚按下的坐标.


          var newOriginX = this.originX,
              newOriginY = this.originY; // 计算 横/纵 坐标到初始点的距离

          var distanceX = Math.abs(x - this.originX);
          var distanceY = Math.abs(y - this.originY); // 让形状左上角的坐标永远大于右下角的坐标, 保证图形能正确绘制

          if (x < this.originX) newOriginX = x;
          if (y < this.originY) newOriginY = y; // (x, y) 为画布中的实时坐标. (originX / Y) 是鼠标点击时在画布上的坐标
          // (newOriginX / Y) 绘制形状(比如矩形)时, 左上角的坐标

          var mousePosition = {
            x: x,
            y: y,
            originX: this.originY,
            originY: this.originY,
            newOriginX: newOriginX,
            newOriginY: newOriginY,
            distanceX: distanceX,
            distanceY: distanceY,
            ft_originX: this.ft_originX,
            ft_originY: this.ft_originY
          };
          var mousemoveEvent = this.handleMousemove();
          var currMousemoveEvent = mousemoveEvent[this.mode];
          currMousemoveEvent && currMousemoveEvent(mousePosition);
        }
      } // 在绘制形状的过程中需要重新绘制，否则会画出移动过程中的图像

    }, {
      key: "reDraw",
      value: function reDraw() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.drawImage(this.image, 0, 0);
        this.context.beginPath();
      }
    }, {
      key: "endOfDrawing",
      value: function endOfDrawing() {
        if (this.isDrawing) {
          this.context.closePath();
          this.isDrawing = false;
          this.addHistory();
        }
      }
    }, {
      key: "addHistory",
      value: function addHistory() {
        var data = this.canvas.toDataURL("image/png");
        this.historyUrls.push(data);
        var len = this.historyUrls.length;

        if (len > 10) {
          this.historyUrls = this.historyUrls.slice(-10, len);
        }

        this.currentHistoryIndex = this.historyUrls.length - 1;
      }
    }, {
      key: "setBackground",
      value: function setBackground() {
        if (this.configuration.bgImg) {
          this.context.globalCompositeOperation = "destination-out";
          this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
          this.canvas.style.background = "url(".concat(this.configuration.bgImg, ")");
          this.canvas.style.backgroundSize = "100% 100%";
          this.canvas.style.backgroundPosition = "center";
          this.canvas.style.backgroundRepeat = "no-repeat";
          this.context.globalCompositeOperation = "source-over";
        }
      }
    }, {
      key: "handleMousemove",
      value: function handleMousemove() {
        var _this2 = this;

        return {
          pencil: function pencil(mousePosition) {
            var x = mousePosition.x,
                y = mousePosition.y;

            _this2.context.lineTo(x, y);

            _this2.context.stroke();
          },
          straightLine: function straightLine(mousePosition) {
            var x = mousePosition.x,
                y = mousePosition.y,
                ft_originX = mousePosition.ft_originX,
                ft_originY = mousePosition.ft_originY;

            _this2.reDraw();

            _this2.context.moveTo(ft_originX, ft_originY);

            _this2.context.lineTo(x, y);

            _this2.context.stroke();
          },
          rect: function rect(mousePosition) {
            var newOriginX = mousePosition.newOriginX,
                newOriginY = mousePosition.newOriginY,
                distanceX = mousePosition.distanceX,
                distanceY = mousePosition.distanceY;

            _this2.reDraw();

            _this2.context.rect(newOriginX, newOriginY, distanceX, distanceY);

            _this2.context.stroke();

            _this2.context.closePath();
          },
          circle: function circle(mousePosition) {
            var newOriginX = mousePosition.newOriginX,
                newOriginY = mousePosition.newOriginY,
                distanceX = mousePosition.distanceX,
                distanceY = mousePosition.distanceY;

            _this2.reDraw(); // 根据狗股定理算出半径


            var r = Math.sqrt(distanceX * distanceX + distanceY * distanceY); // 确保鼠标在圆心位置(虽然只能保证左边)

            _this2.context.arc(newOriginX + distanceX, newOriginY + distanceY, r, 0, 2 * Math.PI);

            _this2.context.stroke();
          },
          arrow: function arrow(mousePosition) {
            var x = mousePosition.x,
                y = mousePosition.y;

            _this2.reDraw();

            _this2.arrowPoints[1] = {
              x: x / _this2.canvasWidth,
              y: y / _this2.canvasHeight
            };
            drawArrow(_this2.context, {
              points: _this2.arrowPoints,
              arrowSize: _this2.configuration.arrowSize,
              canvasWidth: _this2.canvasWidth,
              canvasHeight: _this2.canvasHeight
            });
          },
          eraser: function eraser(mousePosition) {
            var x = mousePosition.x,
                y = mousePosition.y;
            _this2.configuration.bgImg ? _this2.context.globalCompositeOperation = "destination-out" : null;
            _this2.context.strokeStyle = _this2.configuration.canvasBgColor;
            _this2.context.fillStyle = _this2.configuration.canvasBgColor;
            _this2.context.lineWidth = _this2.configuration.eraserSize;

            _this2.context.lineTo(x, y);

            _this2.context.stroke();
          },
          clear: function clear() {
            return _this2.clear();
          }
        };
      }
    }, {
      key: "saveArrowPoint",
      value: function saveArrowPoint(position) {
        this.arrowPoints = [];
        this.arrowPoints.push({
          x: position.x / this.canvasWidth,
          y: position.y / this.canvasHeight
        });
      }
    }, {
      key: "createTextMeasure",
      value: function createTextMeasure() {
        if (this.measureEl) {
          Dom.removeChild(this.container, this.measureEl);
          this.measureEl = null;
        }

        this.measureEl = Dom.createEl("pre", {
          styles: {
            fontSize: "".concat(this.configuration.textFontSize, "px"),
            lineHeight: "".concat(this.configuration.textLineHeight, "px"),
            color: this.configuration.textColor
          }
        });
        Dom.addClass(this.measureEl, "__edb-text-pre");
        Dom.appendChild(this.container, this.measureEl);
      }
    }, {
      key: "drawText",
      value: function drawText(ctx, options) {
        var _this3 = this;

        options.font = options.font || '"PingFang SC","Microsoft YaHei","微软雅黑"';
        var string = options.text;
        ctx.save();
        ctx.textBaseline = "middle";
        ctx.font = "".concat(this.configuration.textFontSize, "px/").concat(this.configuration.textLineHeight, "px ").concat(options.font);
        ctx.fillStyle = this.configuration.textColor;
        ctx.globalCompositeOperation = "source-over";
        string.replace(/<br>/g, "\n").split(/\n/).map(function (value, index) {
          ctx.fillText(value, options.position.x + 2, options.position.y + index * _this3.configuration.textLineHeight + _this3.configuration.textLineHeight / 2 + 2);
        });
        ctx.restore();
      }
    }, {
      key: "createTextArea",
      value: function createTextArea(position) {
        var _this4 = this;

        this.mode = null;
        this.boxDom = Dom.createEl("div", {
          styles: {
            left: "".concat(position.x, "px"),
            top: "".concat(position.y, "px"),
            lineHeight: "".concat(this.configuration.textLineHeight, "px"),
            fontSize: "".concat(this.configuration.textFontSize, "px")
          }
        });
        Dom.addClass(this.boxDom, "__edb-textarea-box");
        this.textareaEl = Dom.createEl("textarea", {
          styles: {
            lineHeight: "".concat(this.configuration.textLineHeight, "px"),
            color: this.configuration.textColor,
            fontSize: "".concat(this.configuration.textFontSize, "px")
          },
          props: {
            placeholder: "请点击输入",
            autofocus: true
          }
        });
        Dom.addClass(this.textareaEl, "__edb-textarea");
        Dom.appendChild(this.boxDom, this.textareaEl);
        Dom.appendChild(this.container, this.boxDom);

        this.textareaEl.onblur = function () {
          _this4.mode = null;
          Dom.delAttr(_this4.textareaEl, "autofocus");

          _this4.drawText(_this4.context, {
            text: _this4.textareaEl.value,
            position: position
          });

          Dom.removeChild(_this4.container, _this4.boxDom);
        };

        this.textareaEl.addEventListener("input", function (e) {
          _this4.measureEl.innerHTML = e.target.value + " ";
          _this4.textareaEl.style.width = _this4.measureEl.clientWidth + "px";
          _this4.textareaEl.style.height = _this4.measureEl.clientHeight + "px";
        });
      }
    }, {
      key: "resetBgImg",
      value: function resetBgImg() {
        this.historyUrls = [];
        this.currentHistoryIndex = -1;
        this.clear();
        this.setBackground();
      } // api
      // Change the default setting

    }, {
      key: "config",
      value: function config(type, value) {
        this.configuration[type] = value;
        type === "canvasBgColor" && this.clear();
        type === 'bgImg' && this.resetBgImg();
        (type === "textFontSize" || type === "textColor" || type === "textLineHeight") && this.createTextMeasure();
      }
    }, {
      key: "setMode",
      value: function setMode(mode) {
        this.context.globalCompositeOperation = "source-over";
        this.context.strokeStyle = this.configuration.lineColor;
        this.context.fillStyle = this.configuration.lineColor;
        this.context.lineWidth = this.configuration.lineWidth;
        mode === "eraser" ? Dom.addClass(this.container, "__edb-eraser-hover") : Dom.removeClass(this.container, "__edb-eraser-hover");
        this.mode = mode;
      }
    }, {
      key: "undo",
      value: function undo() {
        var _this5 = this;

        var currentIndex = this.currentHistoryIndex;

        if (currentIndex < 0) {
          this.currentHistoryIndex = -1;
          return;
        } else if (currentIndex === 0) {
          // 画了一笔, 要还原回去
          this.clear();
          this.historyUrls = [];
          this.currentHistoryIndex = -1;
          return;
        }

        this.currentHistoryIndex -= 1;
        this.historyImage.src = this.historyUrls[this.currentHistoryIndex];
        this.historyUrls.pop();

        this.historyImage.onload = function () {
          _this5.clear();

          _this5.context.drawImage(_this5.historyImage, 0, 0);
        };
      }
    }, {
      key: "generateBase64",
      value: function generateBase64() {
        var _this6 = this;

        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "png";
        return new Promise( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!_this6.configuration.bgImg) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 3;
                    return getBase64Data(_this6.canvas, _this6.configuration.bgImg, type);

                  case 3:
                    data = _context.sent;
                    resolve(data);
                    _context.next = 8;
                    break;

                  case 7:
                    resolve(_this6.canvas.toDataURL("image/".concat(type)));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    }, {
      key: "saveImg",
      value: function () {
        var _saveImg = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var options,
              imgData,
              aEl,
              _args2 = arguments;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {
                    type: "png",
                    fileName: "canvas_image"
                  };
                  imgData = null;

                  if (!this.configuration.bgImg) {
                    _context2.next = 8;
                    break;
                  }

                  _context2.next = 5;
                  return getBase64Data(this.canvas, this.configuration.bgImg, options.type);

                case 5:
                  imgData = _context2.sent;
                  _context2.next = 9;
                  break;

                case 8:
                  imgData = this.canvas.toDataURL("image/".concat(options.type));

                case 9:
                  aEl = Dom.createEl("a", {
                    attrs: {
                      href: imgData,
                      download: "".concat(options.fileName, ".").concat(options.type)
                    }
                  });
                  aEl.click();

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function saveImg() {
          return _saveImg.apply(this, arguments);
        }

        return saveImg;
      }()
    }, {
      key: "clear",
      value: function clear() {
        this.context.fillStyle = this.configuration.canvasBgColor;
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

        if (this.configuration.bgImg) {
          this.context.globalCompositeOperation = "destination-out";
          this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
          this.context.globalCompositeOperation = "source-over";
        }
      }
    }]);

    return Draw;
  }();
  // 事件抽象.
  // ts重构.

  return Draw;

})));

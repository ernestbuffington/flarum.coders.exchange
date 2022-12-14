/*
 * Copyright 2008 The Closure Compiler Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This file was auto-generated.
// See https://github.com/google/closure-compiler for the original source.
// See https://github.com/s9e/TextFormatter/blob/master/scripts/generateExterns.php for details.

/**
* @const
*/
var punycode = {};
/**
* @param {string} domain
* @return {string}
*/
punycode.toASCII;
/** @constructor */
function XSLTProcessor() {}
/**
* @type {number}
* @const
*/
var Infinity;
/**
* @type {undefined}
* @const
*/
var undefined;
/**
* @constructor
* @param {*=} opt_description
* @return {symbol}
* @nosideeffects
*/
function Symbol(opt_description) {}
/**
* @param {string} uri
* @return {string}
* @throws {URIError} when used wrongly.
*/
function decodeURIComponent(uri) {}
/**
* @param {string} uri
* @return {string}
* @throws {URIError} if one attempts to encode a surrogate which is not part of
*/
function encodeURIComponent(uri) {}
/**
* @param {string} str
* @return {string}
* @nosideeffects
*/
function escape(str) {}
/**
* @param {*} num
* @return {boolean}
* @nosideeffects
*/
function isNaN(num) {}
/**
* @param {*} num
* @param {number|undefined} base
* @return {number}
* @nosideeffects
*/
function parseInt(num, base) {}
/**
* @constructor
* @implements {IArrayLike<T>}
* @implements {Iterable<T>}
* @implements {ReadonlyArray<T>}
* @param {...*} var_args
* @return {!Array}
* @nosideeffects
* @template T
*/
function Array(var_args) {}
/**
* @param {?function(this:S, T, number, !Array<T>): ?} callback
* @param {S=} opt_thisobj
* @return {undefined}
* @this {IArrayLike<T>|string}
* @template T,S
* @override
*/
Array.prototype.forEach = function(callback, opt_thisobj) {};
/**
* @param {T} obj
* @param {number=} opt_fromIndex
* @return {number}
* @this {IArrayLike<T>|string}
* @nosideeffects
* @template T
* @override
*/
Array.prototype.indexOf = function(obj, opt_fromIndex) {};
/**
* @param {*=} opt_separator Specifies a string to separate each element of the
* @return {string}
* @this {IArrayLike<?>|string}
* @nosideeffects
* @override
*/
Array.prototype.join = function(opt_separator) {};
/**
* @type {number}
*/
Array.prototype.length;
/**
* @return {T}
* @this {IArrayLike<T>}
* @modifies {this}
* @template T
*/
Array.prototype.pop = function() {};
/**
* @param {...(T|undefined)} var_args
* @return {number} The new length of the array.
* @this {IArrayLike<T>}
* @template T
* @modifies {this}
*/
Array.prototype.push = function(var_args) {};
/**
* @return {THIS} A reference to the original modified array.
* @this {THIS}
* @template THIS
* @modifies {this}
*/
Array.prototype.reverse = function() {};
/**
* @this {IArrayLike<T>}
* @modifies {this}
* @return {T}
* @template T
*/
Array.prototype.shift = function() {};
/**
* @param {?number=} begin Zero-based index at which to begin extraction.
* @param {?number=} end Zero-based index at which to end extraction.  slice
* @return {!Array<T>}
* @this {IArrayLike<T>|string}
* @template T
* @nosideeffects
* @override
*/
Array.prototype.slice = function(begin, end) {};
/**
* @param {function(T,T):number=} opt_compareFn Specifies a function that
* @this {IArrayLike<T>}
* @template T
* @modifies {this}
* @return {!Array<T>}
*/
Array.prototype.sort = function(opt_compareFn) {};
/**
* @param {?number=} index Index at which to start changing the array. If
* @param {?number=} howMany An integer indicating the number of old array
* @param {...T} var_args
* @return {!Array<T>}
* @this {IArrayLike<T>}
* @modifies {this}
* @template T
*/
Array.prototype.splice = function(index, howMany, var_args) {};
/**
* @param {...*} var_args
* @return {number} The new length of the array
* @this {IArrayLike<?>}
* @modifies {this}
*/
Array.prototype.unshift = function(var_args) {};
/**
* @param {?=} opt_yr_num
* @param {?=} opt_mo_num
* @param {?=} opt_day_num
* @param {?=} opt_hr_num
* @param {?=} opt_min_num
* @param {?=} opt_sec_num
* @param {?=} opt_ms_num
* @constructor
* @return {string}
* @nosideeffects
*/
function Date(opt_yr_num, opt_mo_num, opt_day_num, opt_hr_num, opt_min_num, opt_sec_num, opt_ms_num) {}
/**
* @param {*} date
* @return {number}
* @nosideeffects
*/
Date.parse = function(date) {};
/**
* @constructor
* @param {...*} var_args
* @throws {Error}
*/
function Function(var_args) {}
/**
* @const
*/
var Math = {};
/**
* @param {?} x
* @return {number}
* @nosideeffects
*/
Math.floor = function(x) {};
/**
* @param {...?} var_args
* @return {number}
* @nosideeffects
*/
Math.max = function(var_args) {};
/**
* @param {...?} var_args
* @return {number}
* @nosideeffects
*/
Math.min = function(var_args) {};
/**
* @return {number}
* @nosideeffects
*/
Math.random = function() {};
/**
* @constructor
* @param {*=} opt_value
* @return {number}
* @nosideeffects
*/
function Number(opt_value) {}
/**
* @this {Number|number}
* @param {(number|Number)=} opt_radix An optional radix.
* @return {string}
* @nosideeffects
* @override
*/
Number.prototype.toString = function(opt_radix) {};
/**
* @constructor
* @param {*=} opt_value
* @return {!Object}
* @nosideeffects
*/
function Object(opt_value) {}
/**
* @this {*}
* @return {string}
* @nosideeffects
*/
Object.prototype.toString = function() {};
/**
* @constructor
* @param {*=} opt_pattern
* @param {*=} opt_flags
* @return {!RegExp}
* @throws {SyntaxError} if opt_pattern is an invalid pattern.
*/
function RegExp(opt_pattern, opt_flags) {}
/**
* @param {*} str The string to search.
* @return {?RegExpResult}
*/
RegExp.prototype.exec = function(str) {};
/**
* @type {number}
*/
RegExp.prototype.lastIndex;
/**
* @param {*} str The string to search.
* @return {boolean} Whether the string was matched.
*/
RegExp.prototype.test = function(str) {};
/**
* @constructor
* @extends {Array<string>}
*/
var RegExpResult = function() {};
/** @type {number} */
RegExpResult.prototype.index;
/**
* @constructor
* @implements {Iterable<string>}
* @param {*=} opt_str
* @return {string}
* @nosideeffects
*/
function String(opt_str) {}
/**
* @param {...number} var_args
* @return {string}
* @nosideeffects
*/
String.fromCharCode = function(var_args) {};
/**
* @this {String|string}
* @param {number} index
* @return {string}
* @nosideeffects
*/
String.prototype.charAt = function(index) {};
/**
* @this {String|string}
* @param {number=} opt_index
* @return {number}
* @nosideeffects
*/
String.prototype.charCodeAt = function(opt_index) {};
/**
* @this {String|string}
* @param {string|null} searchValue
* @param {(number|null)=} opt_fromIndex
* @return {number}
* @nosideeffects
*/
String.prototype.indexOf = function(searchValue, opt_fromIndex) {};
/**
* @type {number}
*/
String.prototype.length;
/**
* @this {String|string}
* @param {RegExp|string} pattern
* @param {?string|function(string, ...?):*} replacement
* @return {string}
*/
String.prototype.replace = function(pattern, replacement) {};
/**
* @this {String|string}
* @param {*=} opt_separator
* @param {number=} opt_limit
* @return {!Array<string>}
* @nosideeffects
*/
String.prototype.split = function(opt_separator, opt_limit) {};
/**
* @this {String|string}
* @param {number} start
* @param {number=} opt_length
* @return {string} The specified substring.
* @nosideeffects
*/
String.prototype.substr = function(start, opt_length) {};
/**
* @this {String|string}
* @return {string}
* @nosideeffects
*/
String.prototype.toLowerCase = function() {};
/**
* @this {String|string}
* @return {string}
* @nosideeffects
*/
String.prototype.toUpperCase = function() {};
/**
* @constructor
*/
function DOMParser() {}
/**
* @param {!TrustedHTML|string} src The UTF16 string to be parsed.
* @param {string} type The content type of the string.
* @return {!Document}
*/
DOMParser.prototype.parseFromString = function(src, type) {};
/**
* @type {Window}
*/
HTMLIFrameElement.prototype.contentWindow;
/**
* @constructor
*/
function MessageChannel() {}
/**
* @type {!MessagePort}
*/
MessageChannel.prototype.port1;
/**
* @type {!MessagePort}
*/
MessageChannel.prototype.port2;
/**
* @constructor
* @implements {EventTarget}
* @implements {Transferable}
*/
function MessagePort() {}
/**
* @type {?function(!MessageEvent<?>): void}
*/
MessagePort.prototype.onmessage;
/**
* @param {*} message
* @param {Array<!Transferable>=} opt_transfer
* @return {undefined}
*/
MessagePort.prototype.postMessage = function(message, opt_transfer) {};
/**
* @constructor
* @extends {Event}
* @param {string} type
* @param {MessageEventInit<T>=} opt_eventInitDict
* @template T
*/
function MessageEvent(type, opt_eventInitDict) {}
/**
* @type {T}
*/
MessageEvent.prototype.data;
/**
* @type {string}
*/
MessageEvent.prototype.origin;
/**
* @type {!Array<MessagePort>}
*/
MessageEvent.prototype.ports;
/**
* @type {Window}
*/
MessageEvent.prototype.source;
/**
* @record
* @extends {EventInit}
* @template T
*/
function MessageEventInit() {}
/**
* @record
*/
function StructuredSerializeOptions() {}
/**
* @param {*} message
* @param {(string|!WindowPostMessageOptions)=} targetOriginOrOptions
* @param {(!Array<!Transferable>)=} transfer
* @return {void}
*/
Window.prototype.postMessage = function(message, targetOriginOrOptions, transfer) {};
/**
* @record
* @extends {StructuredSerializeOptions}
*/
function WindowPostMessageOptions() {}
/**
* @constructor
* @extends {CSSProperties}
* @implements {IObject<(string|number), string>}
* @implements {IArrayLike<string>}
* @implements {Iterable<string>}
*/
function CSSStyleDeclaration() {}
/**
* @constructor
*/
function CSSProperties() {}
/**
* @constructor
* @extends {Node}
*/
function Document() {}
/**
* @return {!DocumentFragment}
* @nosideeffects
*/
Document.prototype.createDocumentFragment = function() {};
/**
* @param {string} tagName
* @param {({is: string}|string)=} opt_typeExtension
* @return {!Element}
* @nosideeffects
*/
Document.prototype.createElement = function(tagName, opt_typeExtension) {};
/**
* @constructor
* @extends {Node}
*/
function DocumentFragment() {}
/**
* @param {string} name
* @param {?number=} flags
* @return {string}
* @nosideeffects
*/
Element.prototype.getAttribute = function(name, flags) {};
/**
* @constructor
* @implements {IObject<(string|number), T>}
* @implements {IArrayLike<T>}
* @implements {Iterable<T>}
* @template T
*/
function NamedNodeMap() {}
/**
* @param {number} index
* @return {Node}
* @nosideeffects
*/
NamedNodeMap.prototype.item = function(index) {};
/**
* @type {number}
*/
NamedNodeMap.prototype.length;
/**
* @constructor
* @implements {EventTarget}
*/
function Node() {}
/**
* @param {Node} newChild
* @return {!Node}
*/
Node.prototype.appendChild = function(newChild) {};
/**
* @type {!NodeList<!Node>}
*/
Node.prototype.childNodes;
/**
* @param {boolean} deep
* @return {THIS}
* @this {THIS}
* @template THIS
* @nosideeffects
*/
Node.prototype.cloneNode = function(deep) {};
/**
* @type {Node}
*/
Node.prototype.firstChild;
/**
* @param {Node} newChild
* @param {Node} refChild
* @return {!Node}
*/
Node.prototype.insertBefore = function(newChild, refChild) {};
/**
* @type {string}
*/
Node.prototype.nodeName;
/**
* @type {number}
*/
Node.prototype.nodeType;
/**
* @type {string}
*/
Node.prototype.nodeValue;
/**
* @type {Document}
*/
Node.prototype.ownerDocument;
/**
* @type {Node}
*/
Node.prototype.parentNode;
/**
* @param {Node} oldChild
* @return {!Node}
*/
Node.prototype.removeChild = function(oldChild) {};
/**
* @param {Node} newChild
* @param {Node} oldChild
* @return {!Node}
*/
Node.prototype.replaceChild = function(newChild, oldChild) {};
/**
* @constructor
* @implements {IArrayLike<T>}
* @implements {Iterable<T>}
* @template T
*/
function NodeList() {}
/**
* @param {?function(this:S, T, number, !NodeList<T>): ?} callback
* @param {S=} opt_thisobj
* @template S
* @return {undefined}
*/
NodeList.prototype.forEach = function(callback, opt_thisobj) {};
/**
* @type {number}
*/
NodeList.prototype.length;
/**
* @constructor
* @extends {Node}
*/
function Element() {}
/**
* @constructor
* @implements {EventTarget}
*/
function Window() {}
/**
* @param {!Node} externalNode
* @param {boolean=} deep
* @return {!Node}
*/
Document.prototype.importNode = function(externalNode, deep) {};
/**
* @type {string}
* @implicitCast
*/
Element.prototype.innerHTML;
/**
* @type {string}
* @implicitCast
*/
Element.prototype.outerHTML;
/**
* @constructor
* @extends {Document}
*/
function HTMLDocument() {}
/**
* @constructor
* @extends {Element}
*/
function HTMLElement() {}
/**
* @type {!CSSStyleDeclaration}
*/
HTMLElement.prototype.style;
/**
* @constructor
* @extends {HTMLElement}
*/
function HTMLIFrameElement() {}
/**
* @constructor
* @extends {HTMLElement}
*/
function HTMLScriptElement() {}
/**
* @param {?string} namespaceURI
* @param {string} localName
* @return {string}
* @nosideeffects
*/
Element.prototype.getAttributeNS = function(namespaceURI, localName) {};
/**
* @param {?string} namespaceURI
* @param {string} localName
* @return {boolean}
* @nosideeffects
*/
Element.prototype.hasAttributeNS = function(namespaceURI, localName) {};
/**
* @param {?string} namespaceURI
* @param {string} localName
* @return {undefined}
*/
Element.prototype.removeAttributeNS = function(namespaceURI, localName) {};
/**
* @param {?string} namespaceURI
* @param {string} qualifiedName
* @param {string|number|boolean} value Values are converted to strings with
* @return {undefined}
*/
Element.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value) {};
/**
* @param {Node} arg
* @return {boolean}
* @nosideeffects
*/
Node.prototype.isEqualNode = function(arg) {};
/**
* @param {string} query
* @return {!NodeList<!Element>}
* @nosideeffects
*/
Node.prototype.querySelectorAll = function(query) {};
/**
* @type {string}
*/
Node.prototype.namespaceURI;
/**
* @type {string}
* @implicitCast
*/
Node.prototype.textContent;
/**
* @record
* @extends {EventListenerOptions}
*/
var AddEventListenerOptions = function() {};
/**
* @constructor
* @param {string} type
* @param {EventInit=} opt_eventInitDict
*/
function Event(type, opt_eventInitDict) {}
/**
* @record
*/
function EventInit() {}
/**
* @interface
*/
function EventListener() {}
/**
* @record
*/
var EventListenerOptions = function() {};
/**
* @interface
*/
function EventTarget() {}
/**
* @param {string} type
* @param {EventListener|function(this:THIS, !Event):*} listener
* @param {(boolean|!AddEventListenerOptions)=} opt_options
* @return {undefined}
* @this {THIS}
* @template THIS
*/
EventTarget.prototype.addEventListener = function(type, listener, opt_options) {};
/** @constructor */
function TrustedHTML() {}
/**
* @const {!HTMLDocument}
*/
var document;
/**
* @type {!Window}
*/
var window;

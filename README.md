pathificate
===========

returns an array of all paths in an object

example
-------

```javascript
var pathificate = require("pathificate");

/**
 * returns [
 *   "strValue", 
 *   "subObject.num", 
 *   "subObject.subSubObject.val", 
 *   "arr"
 * ]
 */
pathificate({
  strValue: "value", 
  subObject: {
    num: 23,
    subSubObject: {
      val: "hey"
    }
  },
  subObjectWithNoValues: {}
  arr: ["val", 2, {obj: "value"}]
});


/**
 * if you want object paths included, pass includeObjects: true in the options
 * returns [
 *   "strValue", 
 *   "subObject", 
 *   "subObject.num", 
 *   "subObject.subSubObject", 
 *   "subObject.subSubObject.val", 
 *   "subObjectWithNoValues", 
 *   "arr"
 * ]
 */
pathificate({
  strValue: "value", 
  subObject: {
    num: 23,
    subSubObject: {
      val: "hey"
    }
  },
  subObjectWithNoValues: {}
  arr: ["val", 2, {obj: "value"}]
}, {includeObjects: true});
```

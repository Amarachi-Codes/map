
Map-1 -- mapBully
Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.

Examples

Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.

mapBully({'a': 'candy', 'b': 'dirt'}) → {'a': '', 'b': 'candy'}
mapBully({'a': 'candy'}) → {'a': '', 'b': 'candy'}
mapBully({'a': 'candy', 'b': 'carrot', 'c': 'meh'}) → {'a': '', 'b': 'candy', 'c': 'meh'}


function mapBully(map) {
    // Check if key "a" exists in the map and has a value
    if ('a' in map && map['a'] !== '') {
      // Set key "b" to have the value of key "a"
      map['b'] = map['a'];
      // Set key "a" to have an empty string
      map['a'] = '';
    }
    return map;
  }
  
  // Examples
  console.log(mapBully({'a': 'candy', 'b': 'dirt'})); // Output: {'a': '', 'b': 'candy'}
  console.log(mapBully({'a': 'candy'})); // Output: {'a': '', 'b': 'candy'}
  console.log(mapBully({'a': 'candy', 'b': 'carrot', 'c': 'meh'})); // Output: {'a': '', 'b': 'candy', 'c': 'meh'}

  
  let myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(key + ': ' + myObject[key]);
    }
  }

  let myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  Object.keys(myObject).forEach(function(key) {
    console.log(key + ': ' + myObject[key]);
  });

  
  let myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  Object.entries(myObject).forEach(function([key, value]) {
    console.log(key + ': ' + value);
  });
  
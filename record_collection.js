// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop!='tracks' && value.length!=0)
  {
    records[id][prop]=value;
  }
  else if(prop=='tracks' && records[id][prop]==undefined)
  {
    let arr=[];
    arr.push(value);
    records[id][prop]=arr;
  }
  else if(prop=='tracks' && value.length!=0)
  {
    records[id][prop].push(value);
  }
  else
  {
    delete records[id][prop];
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
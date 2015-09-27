Astrocoders.Zipcodes.get = function(query){
  Astrocoders._connection.subscribe('zipcodes', query);

  return Zipcodes.findOne(query);
}
var jsonDates = {
    dtrx2: /\d{4}-\d{2}-\d{2}/,
    parse: function(obj){
        var parsedObj = JSON.parse(obj);
        return this.parseDates(parsedObj);
    },
    parseDates: function(obj){
      // iterate properties
      for(pName in obj){
        
        // make sure the property is 'truthy'
        if (obj[pName]){
          var value = obj[pName];
          // determine if the property is an array
          if (Array.isArray(value)){
            for(var ii = 0; ii < value.length; ii++){
              this.parseDates(value[ii]);
            }
          }
          // determine if the property is an object
          else if (typeof(value) == "object"){
            this.parseDates(value);
          }
          // determine if the property is a string containing a date
          else if (typeof(value) == "string" && this.dtrx2.test(value)){
            // parse and replace
            obj[pName] = new Date(obj[pName]);
          }
        }
      }
  
      return obj;
    }
  };
var jsonDates = {
    dtrx2: /\d{4}-\d{2}-\d{2}/,
    parse: function(obj){
        var parsedObj = JSON.parse(obj);
        return this.parseDates(parsedObj);
    }
  };

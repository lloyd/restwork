// a GET api that reverses the input 

exports.arguments = {
  word: 'string'
};

exports.handler = function(req, res) {
  var reversed = "";
  for (var i = req.params.word.length -1;
       i >= 0;
       i--)
  {
    reversed.append(req.params.word[i]);
  }
  res.send(reversed);
};

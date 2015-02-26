// var http = require('http');

// http.get("http://app.rainlocal.com:8080/v1/rain/about", function(res) {
//   res.on("data", function(chunk) {
//     chunk = JSON.parse(chunk);
//     defaultResponse = chunk.response.about;
//     // console.log(defaultResponse);
    
//   });
// });

// console.log(defaultResponse);

function renderBox(article_data) {
  var box = $('<div>', {'class' : 'col-1-2'});
  var image = $('<div>', {'class' : 'image'});
  image.css('background-image', "url('" + article_data.url + "')");

  var title = $('<h2>', 
    {
      html: article_data.title
    });

  var author = $('<span>', 
    {
      html: 'by ' + article_data.author
    });

  var timestamp = moment(article_data.created, 'X').fromNow();
  console.log(article_data.created);
  var created = $('<span>', 
    {
      html: timestamp  //TODO: use moment.js
    });

  var score = $('<span>', 
    {
      html: article_data.score + ' views'
    });

  var description = $('<p>', 
    {
      html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam natus sed, possimus libero.'
    });

  box.append(image, title, author, created, score, description);
  return box;
}

function renderData(data) {
    $('.grid').empty();

    var board = data.data.children;
    var currRow = $('<div>', {'class' : 'row'});

    board.forEach(function(curr, index) {
      var collect = {
        url : curr.data.url,
        title : curr.data.title,
        author : curr.data.author,
        created : curr.data.created,
        score : curr.data.score
       };

      if (index % 2 === 0) {
        var newRow = $('<div>', {'class' : 'row'});
        currRow = newRow;
        currRow.append(renderBox(collect));

        //handle case of odd number of board objects
        if (index === board.length) {
          $('.grid').append(currRow);
        }
      } else {
        currRow.append(renderBox(collect));
        $('.grid').append(currRow);
      }
    });

  }

$('#my_boards').on('click', function(event) {
  event.preventDefault();
  $.get("/api/my_boards.json", renderData);
});

$('#random').on('click', function(event) {
  event.preventDefault();
  $.get("/api/random.json", renderData);
});

$('#get_the_app').on('click', function(event) {
  event.preventDefault();
  $.get("/api/get_the_app.json", renderData);
});

$(function() {
  $('#my_boards').trigger('click');
});
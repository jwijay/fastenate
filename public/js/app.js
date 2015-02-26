function createMoment(unixTime) {
  return moment.unix(unixTime).fromNow();
}

function renderBox(article_data) {
  var box = $('<div>', {'class' : 'box'});
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

  var created = $('<span>', 
    {
      html: createMoment(article_data.created)
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
$(document).ready(function(){  
    requestHealthArticles();
});

function requestHealthArticles() {
    var queryUrl = 'https://newsapi.org/v2/top-headlines?q=health&apiKey=41d4ef890e554be3b094b8763989e327&limit4'
    $.ajax({
        url : queryUrl,
        method: 'GET'
    }).then(populatePage);
}

function populatePage(data) {
    // Create Jumbotron
    createJumbotron(data.articles[data.articles.length - 1]);
    // Create Article List
    data.articles.forEach(createArticleCard);
}
function createJumbotron(article) {
    var jumbotron = $('<div>').addClass('jumbotron').addClass('jumbo')
    var image = $('<img>')
        .addClass('jumbo-img')
        .attr('alt', article.title)
        .attr('src', article.urlToImage)
        .appendTo(jumbotron);

    $('#jumbo').append(jumbotron);
    var newsArticle = $('<div>')
        .append(
            $('<h2>')
                .html(article.title)
        )
    $(jumbotron).append(newsArticle)

}

function createArticleCard(article) {
    console.log(article);
    var card = $('<div>').addClass('card');
    $('<img>')
        .addClass('card-img-top')
        .attr('alt', article.title)
        .attr('src', article.urlToImage)
        .appendTo(card);
    $('<div>')
        .addClass('card-body')
        .append(
            $('<h5>')
                .addClass('card-title')
                .html(article.title)
        )
        .append(
            $('<p>')
                .addClass('card-text')
                .html(article.description)
        )
        .append(
            $('<a>')
                .addClass('btn btn-primary')
                .attr('href', article.url)
                .html('View Article')
        )
        .appendTo(card);
    $('#article-list').append(card);
}

displayNews(1);

function NewsReader() {

}

function displayNews(old_index) {
    console.log(old_index +' '+ news_data.length);
    var html = '';
    // Most recent news
    var myDate = formatDate(news_data[0].date);
    var regexp = /(.*)\<!--more-->/;
    var text = news_data[0].contents.match(regexp);


    var el = document.getElementById('top_news');
    html += '<div id="mycarousel" class="carousel slide" data-ride="carousel">';
    html += '<div class="carousel-inner"><div class="item active">';
    html += '<img src="img/news/'+news_data[0].image+'.jpg" alt="" class="img-responsive">';
    html += '<div class="carousel-caption">';
    html += '<h5>'+news_data[0].title+'</h5>';
    html += '</div></div></div>';
    html += '<div class="media-body">';
    html += '<h4 class="media-heading"><i class="fa fa-calendar"></i> '+ myDate +'</h4>';
    html += text[1];
    html += '</div> <!-- media-body -->';
    html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal(0)" class="btn btn-primary btn-sm">Read more</a></div>';

    el.innerHTML = html;
    
    // Four next news
    var max_news = Math.min(old_index + 4,news_data.length);
    var el = document.getElementById('news_old');
    html = '';
    for (var i=old_index; i < max_news; i++) {
        html += '<!-- NEWS #'+i+'-->';
        html += '<div class="media">';
        html += '<div class="media-left">';
        html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal('+i+')">';
        html += '<img class="media-object hidden-xs" src="img/news/'+news_data[i].image+'_thumb.jpg'+'" alt="newsIcon"></a>';
        html += '</div>'; // div media-left
        html += '<div class="media-body">';
        html += '<h4 class="media-heading"><i class="fa fa-calendar"></i> '+ formatDate(news_data[i].date) +' </h4>';
        html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal('+i+')">';
        html += '<h5>'+news_data[i].title+'</h5></a>';
        html += '</div>';
        html += '</div>';
    }        
   
    // Older news
    if (max_news <= news_data.length) {
        html += '<!-- NEWS #'+i+'-->';
        html += '<div class="media">';
        html += '<div class="media-left">';
        html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal('+i+')">';
        html += '<img class="media-object hidden-xs" src="img/news/misc_archive_thumb.jpg'+'" alt="newsIcon"></a>';
        html += '</div>'; // div media-left
        html += '<div class="media-body">';
        html += '<h4 class="media-heading"><i class="fa fa-calendar"></i> Archive News</h4>';
        if (old_index != 1) {
            html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNews('+(old_index - 4)+')">';
            html += '<h5>Newer Posts</h5></a>';    
        }
        if (old_index + 4 < news_data.length ) {
            html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNews('+(old_index + 4)+')">';
            html += '<h5>Older Posts</h5></a>';
        }

        html += '</div>';
        html += '</div>';   
    }
          
   el.innerHTML = html;
}

function displayNewsModal(news_index) {
    var news = news_data[news_index];
    
    var el = document.getElementById('newsModal');
    var html = '';
    html += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+news.title+'</h4>';
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p><img class="img-responsive" src="img/news/'+news.image+'.jpg" alt=""></p>';
    html += '<h4><i class="fa fa-calendar"></i> '+ formatDate(news.date) +' </h4>';
    html += '<p>'+news.contents+'</p>';
    html += '</div>';
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog
    html += '</div>'; // modal

   el.innerHTML = html;
   console.log(el);
   
   // el.modal('show');
   $('#newsModal').modal('show');
}

function formatDate(yyyymmdd) {
    var months    = ['None','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var words = yyyymmdd.split('-');
    return months[parseInt(words[1]) ] + ' ' + words[2]+ ', ' + words[0];
}

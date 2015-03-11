// List of all site carousels.
var carousels = [{
    id: 'carousel-components-spacer',
    picSize: '480px 480px',
    pics: [
        '/images/COMPONENTS/eclipse.png',
        '/images/COMPONENTS/space_black.png',
        '/images/COMPONENTS/red_art.png',
        '/images/COMPONENTS/space_red.png',
        '/images/COMPONENTS/blue_art.png',
        '/images/COMPONENTS/space_blue.png',
        '/images/COMPONENTS/gold_art.png',
        '/images/COMPONENTS/space_gold.png',
        '/images/COMPONENTS/gray_art.png',
        '/images/COMPONENTS/space_gray.png'
    ]
}, {
    id: 'carousel-components-clamp',
    picSize: '480px 480px',
    pics: [
        '/images/COMPONENTS/armira_34_31.png',
        '/images/COMPONENTS/armira1.png',
        '/images/COMPONENTS/armira3.png',
        '/images/COMPONENTS/armira2.png',
        '/images/COMPONENTS/armira_red1.png',
        '/images/COMPONENTS/armira_red2.png',
        '/images/COMPONENTS/armira_blue.png',
        '/images/COMPONENTS/armira_gold1.png',
        '/images/COMPONENTS/armira_gold2.png',
        '/images/COMPONENTS/armira_gray.png'
    ]
}, {
    id: 'carousel-components-dhclamp',
    picSize: '480px 480px',
    pics: [
        '/images/COMPONENTS/seatclamp1.png',
        '/images/COMPONENTS/blue.png',
        '/images/COMPONENTS/black.png',
        '/images/COMPONENTS/red.png'
    ]
}, {
    id: 'carousel-components-stem',
    picSize: '480px 480px',
    pics: [
        '/images/COMPONENTS/stemS1.png',
        '/images/COMPONENTS/stemS2.png',
        '/images/COMPONENTS/stemS3.png',
        '/images/COMPONENTS/stemS4.png',
        '/images/COMPONENTS/stem_blue.png',
        '/images/COMPONENTS/stem_red.png',
        '/images/COMPONENTS/stem_red_blue.png',
        '/images/COMPONENTS/stem_blue_gray.png',
        '/images/COMPONENTS/stem_black_gray.png',
    ]
}, {
    id: 'carousel-components-stem35',
    picSize: '480px 480px',
    pics: [
        '/images/COMPONENTS/stem.png',
        '/images/COMPONENTS/angle.png',
        '/images/COMPONENTS/right.png',
        '/images/COMPONENTS/top.png'
    ]
}, {
    id: 'carousel-aboutus-header',
    picSize: '640px 320px',
    pics: [
        '/images/aboutus/slide_pictures/1.jpg',
        '/images/aboutus/slide_pictures/2.jpg',
        '/images/aboutus/slide_pictures/3.jpg',
        '/images/aboutus/slide_pictures/4.jpg',
        '/images/aboutus/slide_pictures/5.jpg'
    ]
}];

function Carousel(config) {
    var inner, thumbnails,
        index, pics, picSize, carousel;

    var createItems = function() {
        var active, items = [];

        for (var i = 0, l = pics.length; i < l; i++) {
            active = i === index ? ' active' : '';
            items.push('<div class="item'+active+'" style="'+picStyleHelper(pics[i])+'"></div>');
        }

        inner.append(items.join(''));
    };

    var createThumbnails = function() {
        var active, items = [], timgSize = '160px 160px';

        if (index === 0) {
            items.push('<div action="prev" class="col-md-4" style="'+picStyleHelper(pics[pics.length-1], timgSize)+'"></div>');
            items.push('<div class="col-md-4 active" style="'+picStyleHelper(pics[index], timgSize)+'"></div>');
            items.push('<div action="next" class="col-md-4" style="'+picStyleHelper(pics[index+1], timgSize)+'"></div>');
        } else if (index === pics.length - 1) {
            items.push('<div action="prev" class="col-md-4" style="'+picStyleHelper(pics[index-1], timgSize)+'"></div>');
            items.push('<div class="col-md-4 active" style="'+picStyleHelper(pics[index], timgSize)+'"></div>');
            items.push('<div action="next" class="col-md-4" style="'+picStyleHelper(pics[0], timgSize)+'"></div>');
        } else {
            items.push('<div action="prev" class="col-md-4" style="'+picStyleHelper(pics[index-1], timgSize)+'"></div>');
            items.push('<div class="col-md-4 active" style="'+picStyleHelper(pics[index], timgSize)+'"></div>');
            items.push('<div action="next" class="col-md-4" style="'+picStyleHelper(pics[index+1], timgSize)+'"></div>');
        }

        thumbnails.empty();
        thumbnails.append(items.join(''));

        $('.col-md-4', thumbnails).click(function(e) {
            var el = $(e.currentTarget);
            action = el.attr('action');
            // createThumbnails();
            carousel.carousel(action);
        });
    };

    var regexMatch = /\.[\w\?=]+$/;
    function suffixReplace (match) {
        return '@2x' + match;
    }
    var picStyleHelper = function(picUrl, picSizeOpt) {
        if (window.devicePixelRatio > 1 && (picSize || picSizeOpt)) {
            return 'background-image:url('+picUrl.replace(regexMatch, suffixReplace)+'); background-size: ' + (picSizeOpt || picSize);
        } else {
            return 'background-image:url('+picUrl+')';
        }
    };

    carousel = $('#' + config.id);

    if (carousel.length) {
        index = 0;
        pics = config.pics;
        picSize = config.picSize;
        inner = $('.carousel-inner', carousel);
        thumbnails = carousel.siblings('.thumbnails');

        createItems();
        createThumbnails();

        carousel.on('slid.bs.carousel', function () {
            var data = $(this).data('bs.carousel');

            index = data.getItemIndex(data.$element.find('.item.active'));
            createThumbnails();
        })
    }
}

// Create carousels when page is "ready".
$(document).ready(function() {
    for (var i = 0, l = carousels.length; i < l; i++) {
        new Carousel(carousels[i]);
    }
});

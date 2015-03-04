// List of all site carousels.
var carousels = [{
    id: 'carousel-components-1',
    pics: [
        '/images/COMPONENTS/spacer1.png',
        '/images/COMPONENTS/eclipse.png',
        '/images/COMPONENTS/space_red.png'
    ]
}, {
    id: 'carousel-components-2',
    pics: [
        '/images/COMPONENTS/armira1.png',
        '/images/COMPONENTS/armira2.png',
        '/images/COMPONENTS/armira3.png'
    ]
}, {
    id: 'carousel-components-3',
    pics: [
        '/images/COMPONENTS/seatclamp1.png',
        '/images/COMPONENTS/blue.png',
        '/images/COMPONENTS/black.png',
        '/images/COMPONENTS/red.png'
    ]
}, {
    id: 'carousel-components-4',
    pics: [
        '/images/COMPONENTS/stem.png',
        '/images/COMPONENTS/angle.png',
        '/images/COMPONENTS/right.png',
        '/images/COMPONENTS/top.png'
    ]
}, {
    id: 'carousel-aboutus-1',
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
        index, pics, carousel;

    var createItems = function() {
        var active, items = [];

        for (var i = 0, l = pics.length; i < l; i++) {
            active = i === index ? ' active' : '';
            items.push('<div class="item'+active+'" style="background-image:url('+pics[i]+')"></div>');
        }

        inner.append(items.join(''));
    };

    var createThumbnails = function() {
        var active, items = [];

        if (index === 0) {
            items.push('<div action="prev" class="col-md-4" style="background-image:url('+pics[pics.length-1]+')"></div>');
            items.push('<div class="col-md-4 active" style="background-image:url('+pics[index]+')"></div>');
            items.push('<div action="next" class="col-md-4" style="background-image:url('+pics[index+1]+')"></div>');
        } else if (index === pics.length - 1) {
            items.push('<div action="prev" class="col-md-4" style="background-image:url('+pics[index-1]+')"></div>');
            items.push('<div class="col-md-4 active" style="background-image:url('+pics[index]+')"></div>');
            items.push('<div action="next" class="col-md-4" style="background-image:url('+pics[0]+')"></div>');
        } else {
            items.push('<div action="prev" class="col-md-4" style="background-image:url('+pics[index-1]+')"></div>');
            items.push('<div class="col-md-4 active" style="background-image:url('+pics[index]+')"></div>');
            items.push('<div action="next" class="col-md-4" style="background-image:url('+pics[index+1]+')"></div>');
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

    carousel = $('#' + config.id);

    if (carousel.length) {
        index = 0;
        pics = config.pics;
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

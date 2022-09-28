/* =====================================================================
 * Lightbox.js
 * Version: 0.0.6
 * Author: Victor Diego <victordieggo@gmail.com>
 * License: MIT
 * ================================================================== */

(function () {

    'use strict';

    var animation, body, btnClose, btnNav, currentItem, container, content, wrapper, trigger, currentTrigger;

    body = document.body;

    trigger = body.querySelectorAll('[data-lightbox]');

    animation = {
        fadeIn: 'fadeIn .3s',
        fadeOut: 'fadeOut .3s',
        scaleIn: 'createBox .3s',
        scaleOut: 'deleteBox .3s'
    };

    function toggleScroll() {
      body.classList.toggle('remove-scroll');
    }

    function sortContent(content) {
        var image, video, href = content.getAttribute('href');

        if (href.match(/\.(jpeg|jpg|gif|png)/)) {
            image = document.createElement('img');
            image.className = 'lightbox-image';
            image.src = href;
            image.alt = content.getAttribute('data-image-alt');
            return image;
        }

        if (href.match(/(youtube|vimeo)/)) {
            video = [];
            if (href.match('youtube')) {
                video.id = href.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
                video.url = 'www.youtube.com/embed/';
                video.options = '?autoplay=1&rel=0';
            }
            if (href.match('vimeo')) {
                video.id = href.split(/video\/|https:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
                video.url = 'player.vimeo.com/video/';
                video.options = '?autoplay=1title=0&byline=0&portrait=0';
            }
            video.player = document.createElement('iframe');
            video.player.setAttribute('allowfullscreen', '');
            video.player.className = 'lightbox-video-player';
            video.player.src = 'https://' + video.url + video.id + video.options;
            video.wrapper = document.createElement('div');
            video.wrapper.className = 'lightbox-video-wrapper';
            video.wrapper.appendChild(video.player);
            return video.wrapper;
        }

        return body.querySelector(href).children[0].cloneNode(true);
    }

    function galleryItens(element) {
        var itens = {
                next: element.parentElement.nextElementSibling,
                previous: element.parentElement.previousElementSibling
            },
            key;
        for (key in itens) {
            if (itens[key] !== null) {
                itens[key] = itens[key].querySelector('[data-lightbox]');
            }
        }
        return itens;
    }

    function buildLightbox(element) {
        element.blur();
        currentItem = element;
        element.classList.add('current-lightbox-item');

        btnClose = document.createElement('button');
        btnClose.className = 'lightbox-btn lightbox-btn-close';

        content = document.createElement('div');
        content.className = 'lightbox-content';
        content.appendChild(sortContent(element));

        wrapper = content.cloneNode(false);
        wrapper.className = 'lightbox-wrapper';
        wrapper.style.animation = [animation.scaleIn, animation.fadeIn];
        wrapper.appendChild(content);
        wrapper.appendChild(btnClose);

        container = content.cloneNode(false);
        container.className = 'lightbox-container';
        container.style.animation = animation.fadeIn;
        container.onclick = function() {};
        container.appendChild(wrapper);

        if (element.getAttribute('data-lightbox') === 'gallery') {
            container.classList.add('lightbox-gallery');
            var key;
            btnNav = {next: '', previous: ''};
            for (key in btnNav) {
                if (btnNav.hasOwnProperty(key)) {
                    btnNav[key] = btnClose.cloneNode(false);
                    btnNav[key].className = 'lightbox-btn lightbox-btn-' + key;
                    btnNav[key].disabled = galleryItens(element)[key] === null ? true : false;
                    wrapper.appendChild(btnNav[key]);
                }
            }
        }

        body.appendChild(container);
        toggleScroll();
    }

    function galleryNavigation(position) {
        wrapper.removeAttribute('style');
        var item = galleryItens(currentItem)[position],
            key;
        if (item !== null) {
            content.style.animation = animation.fadeOut;
            setTimeout(function () {
                content.replaceChild(sortContent(item), content.children[0]);
                content.style.animation = animation.fadeIn;
            }, 200);
            currentItem.classList.remove('current-lightbox-item');
            item.classList.add('current-lightbox-item');
            currentItem = item;
            for (key in btnNav) {
                if (btnNav.hasOwnProperty(key)) {
                    btnNav[key].disabled = galleryItens(item)[key] === null ? true : false;
                }
            }
        }
    }

    function closeLightbox() {
        container.style.animation = animation.fadeOut;
        wrapper.style.animation = [animation.scaleOut, animation.fadeOut];
        setTimeout(function () {
            if (body.contains(container)) {
                body.removeChild(container);
                currentTrigger.focus();
                currentItem.classList.remove('current-lightbox-item');
                toggleScroll();
            }
        }, 200);
    }

    Array.prototype.forEach.call(trigger, function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            buildLightbox(element);
            currentTrigger = element;
        });
    });

    ['click', 'keyup'].forEach( function (eventType) {
        body.addEventListener(eventType, function (event) {
            if (body.contains(container)) {
                var target = event.target,
                    key = event.keyCode,
                    type = event.type;
                if ([container, btnClose].indexOf(target) !== -1 || key === 27) {
                    closeLightbox();
                }
                if (container.classList.contains('lightbox-gallery')) {
                    if ((target === btnNav.next && type === 'click') || key === 39) {
                        galleryNavigation('next');
                    }
                    if ((target === btnNav.previous && type === 'click') || key === 37) {
                        galleryNavigation('previous');
                    }
                }
            }
        });
    });

}());

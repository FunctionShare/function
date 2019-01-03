$.smartScroll = function (container, selectorScrollable) {
    // ���û�й�������ѡ�����������Ѿ����˹���ʱ�䣬����
    if (!selectorScrollable || container.data('isBindScroll')) { return; }

    var isSBBrowser;

    var data = {
        posY: 0,
        maxscroll: 0
    };

    // �¼�����
    container.on({
        touchstart: function (event) {

            var events = event.originalEvent.touches[0] || event;

            // ������ǲ��ǹ���Ԫ�ػ��߹���Ԫ�ص���Ԫ��
            var elTarget = $(event.target);

            if (!elTarget.length) { return; }

            var elScroll;

            // ��ȡ��ǵĹ���Ԫ�أ��������Ԫ�ؽԿ�
            if (elTarget.is(selectorScrollable)) {
                elScroll = elTarget;
            } else if ((elScroll = elTarget.parents(selectorScrollable)).length == 0) {
                elScroll = null;
            }

            if (!elScroll) { return; }

            // ��ǰ����Ԫ�ر��
            data.elScroll = elScroll;

            // ��ֱλ�ñ��
            data.posY = events.pageY;
            data.scrollY = elScroll.scrollTop();
            // �Ƿ���Թ���
            data.maxscroll = elScroll[0].scrollHeight - elScroll[0].clientHeight;
        },
        touchmove: function (event) {
            // ��������ڹ��������ֹ������������Ԫ�صĹ���
            if (data.maxscroll <= 0 || isSBBrowser) {
                // ��ֹ����
                event.preventDefault();
            }
            // ����Ԫ��
            var elScroll = data.elScroll;
            // ��ǰ�Ĺ����߶�
            var scrollTop = elScroll.scrollTop();

            // �����ƶ��Ĵ�ֱλ�ã������ж��������ƶ���������
            var events = event.originalEvent.touches[0] || event;
            // �ƶ�����
            var distanceY = events.pageY - data.posY;

            if (isSBBrowser) {
                elScroll.scrollTop(data.scrollY - distanceY);
                elScroll.trigger('scroll');
                return;
            }

            // ���±�Ե���
            if (distanceY > 0 && scrollTop == 0) {
                // ���ϻ������ҵ�ͷ
                // ��ֹ������Ĭ����Ϊ
                event.preventDefault();
                return;
            }

            // �±�Ե���
            if (distanceY < 0 && (scrollTop + 1 >= data.maxscroll)) {
                // ���»������ҵ�ͷ
                // ��ֹ������Ĭ����Ϊ
                event.preventDefault();
                return;
            }
        },
        touchend: function () {
            data.maxscroll = 0;
        }
    });

    // ��ֹ����ظ���
    container.data('isBindScroll', true);
};

// ����: $.smartScroll(container, selectorScrollable)
    // container�Ǹ������� ��ʽ: $('.container')
    // selectorScrollable���Ӽ����� ��ʽ: '.box'
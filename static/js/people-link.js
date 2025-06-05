document.addEventListener('DOMContentLoaded', function() {
    // 定义每个用户的姓名和对应的外部链接
    const userLinks = {
        'Yanwei Yu': 'https://yuyanwei.github.io/index.html',
        'Jianpeng Qi': 'https://qijianpeng.github.io/',
        'Dongliang Chen': 'https://cdl1102.github.io/cdl.github.io/',
        'Bosen Lin': 'https://catchacat083.github.io/',
        'Xiang Li': 'https://lx970414.github.io/',
        'Xingyu Zhao': 'https://lion1a.github.io/',
        'Kunyu Ni': 'https://kunyuni.github.io/',
        'Chenlong Song': 'https://songchenlong.github.io/',
        // 可根据需要添加更多用户信息
    };

    // 选择所有头像和姓名的 <a> 标签
    const personLinks = document.querySelectorAll('.people-person a');

    personLinks.forEach(function(linkElement) {
        const personName = linkElement.textContent.trim();
        const externalLink = userLinks[personName];

        if (externalLink) {
            // 如果有外部链接，阻止默认跳转，跳转到外部链接
            linkElement.addEventListener('click', function(event) {
                event.preventDefault();
                window.open(externalLink, '_blank');
            });
            linkElement.style.cursor = 'pointer'; // 鼠标悬停时显示指针样式
        }
        // 如果没有外部链接，保持默认的跳转行为
    });
});
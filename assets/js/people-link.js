document.addEventListener('DOMContentLoaded', function() {
    console.log('People link script loaded successfully!');
    
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
        'Yuchen Liu': 'https://lyyccccccc.github.io/'
    };
    
    console.log('Configured user links:', userLinks);

    // 选择所有头像和姓名的 <a> 标签
    const personLinks = document.querySelectorAll('.people-person a');
    console.log(`Found ${personLinks.length} person links on the page.`);

    personLinks.forEach(function(linkElement, index) {
        const linkText = linkElement.textContent.trim();
        const personName = linkText;
        const externalLink = userLinks[personName];
        
        console.log(`[Link ${index + 1}] Text: "${linkText}", Name: "${personName}", External link found: ${!!externalLink}`);

        if (externalLink) {
            console.log(`[Link ${index + 1}] Binding external link: ${externalLink}`);
            
            // 如果有外部链接，阻止默认跳转，跳转到外部链接
            linkElement.addEventListener('click', function(event) {
                console.log(`[Click Event] Preventing default action for "${personName}"`);
                event.preventDefault();
                window.open(externalLink, '_blank');
            });
            
            // 为调试添加视觉指示器
            linkElement.style.border = '2px solid red';
            linkElement.title = `External link: ${externalLink}`;
        }
    });
    
    console.log('People link script execution completed.');
});
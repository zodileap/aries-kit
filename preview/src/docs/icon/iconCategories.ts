import { iconNames } from './iconNames';

// 图标分类函数，根据图标名称规则自动归类
const categorizeIcons = () => {
    // 初始化分类
    const categories = [
        { key: 'action', label: '动作图标', icons: [] },
        { key: 'navigation', label: '导航图标', icons: [] },
        { key: 'device', label: '设备与硬件', icons: [] },
        { key: 'communication', label: '通讯社交', icons: [] },
        { key: 'media', label: '媒体控制', icons: [] },
        { key: 'file', label: '文件管理', icons: [] },
        { key: 'editor', label: '编辑排版', icons: [] },
        { key: 'home', label: '家居智能', icons: [] },
        { key: 'maps', label: '地图位置', icons: [] },
        { key: 'transport', label: '交通出行', icons: [] },
        { key: 'business', label: '商业金融', icons: [] },
        { key: 'people', label: '人物用户', icons: [] },
        { key: 'health', label: '健康医疗', icons: [] },
        { key: 'weather', label: '天气环境', icons: [] },
        { key: 'alert', label: '提示警告', icons: [] },
        { key: 'shapes', label: '形状符号', icons: [] },
        { key: 'tech', label: '科技网络', icons: [] },
        { key: 'food', label: '食品餐饮', icons: [] },
        { key: 'misc', label: '其他图标', icons: [] },
    ];

    // 关键词映射到分类的映射表
    const keywordToCategory = {
        // 动作图标
        'add': 'action', 'remove': 'action', 'delete': 'action', 'edit': 'action',
        'search': 'action', 'refresh': 'action', 'update': 'action', 'done': 'action',
        'check': 'action', 'close': 'action', 'cancel': 'action', 'clear': 'action',
        'save': 'action', 'create': 'action', 'copy': 'action', 'paste': 'action',
        'cut': 'action', 'undo': 'action', 'redo': 'action', 'select': 'action',
        'move': 'action', 'drag': 'action', 'drop': 'action', 'gesture': 'action',
        'touch': 'action', 'click': 'action', 'swipe': 'action', 'scroll': 'action',

        // 导航图标
        'arrow': 'navigation', 'menu': 'navigation', 'more': 'navigation',
        'expand': 'navigation', 'collapse': 'navigation', 'back': 'navigation',
        'forward': 'navigation', 'up': 'navigation', 'down': 'navigation',
        'left': 'navigation', 'right': 'navigation', 'chevron': 'navigation',
        'navigate': 'navigation', 'next': 'navigation', 'previous': 'navigation',
        'first': 'navigation', 'last': 'navigation', 'top': 'navigation',
        'bottom': 'navigation', 'exit': 'navigation', 'enter': 'navigation',
        'fullscreen': 'navigation', 'unfold': 'navigation', 'subdirectory': 'navigation',

        // 设备与硬件
        'phone': 'device', 'smartphone': 'device', 'tablet': 'device', 'laptop': 'device',
        'computer': 'device', 'desktop': 'device', 'tv': 'device', 'watch': 'device',
        'keyboard': 'device', 'mouse': 'device', 'speaker': 'device',
        'headset': 'device', 'printer': 'device', 'scanner': 'device', 'bluetooth': 'device',
        'wifi': 'device', 'signal': 'device', 'battery': 'device',
        'usb': 'device', 'sd': 'device', 'sim': 'device', 'memory': 'device',
        'storage': 'device', 'screen': 'device', 'hardware': 'device',

        // 通讯社交
        'mail': 'communication', 'email': 'communication', 'message': 'communication',
        'chat': 'communication', 'call': 'communication', 'contacts': 'communication',
        'share': 'communication', 'forum': 'communication', 'comment': 'communication',
        'feedback': 'communication', 'post': 'communication', 'notifications': 'communication',
        'social': 'communication', 'connect': 'communication',
        'community': 'communication',

        // 媒体控制
        'play': 'media', 'pause': 'media', 'stop': 'media', 'skip': 'media',
        'volume': 'media', 'audio': 'media', 'video': 'media', 'music': 'media',
        'movie': 'media', 'photo': 'media', 'image': 'media', 'picture': 'media',
        'camera': 'media', 'record': 'media', 'mic': 'media', 'cast': 'media',
        'library': 'media', 'playlist': 'media', 'queue': 'media', 'album': 'media',

        // 文件管理
        'file': 'file', 'folder': 'file', 'document': 'file', 'attachment': 'file',
        'download': 'file', 'upload': 'file', 'cloud': 'file', 'drive': 'file',
        'backup': 'file', 'restore': 'file', 'archive': 'file', 'compress': 'file',
        'extract': 'file', 'zip': 'file', 'pdf': 'file',
        'note': 'file', 'snippet': 'file', 'description': 'file',

        // 编辑排版
        'format': 'editor', 'text': 'editor', 'font': 'editor', 'paragraph': 'editor',
        'style': 'editor', 'color': 'editor', 'bold': 'editor', 'italic': 'editor',
        'underline': 'editor', 'strikethrough': 'editor', 'align': 'editor', 'indent': 'editor',
        'list': 'editor', 'bullet': 'editor', 'numbered': 'editor', 'table': 'editor',
        'grid': 'editor', 'border': 'editor', 'height': 'editor', 'width': 'editor',
        'size': 'editor', 'space': 'editor', 'margin': 'editor', 'padding': 'editor',

        // 家居智能
        'home': 'home', 'house': 'home', 'apartment': 'home', 'door': 'home',
        'window': 'home', 'room': 'home', 'living': 'home', 'bedroom': 'home',
        'bathroom': 'home', 'kitchen': 'home', 'light': 'home', 'ac': 'home',
        'heat': 'home', 'thermostat': 'home', 'security': 'home', 'lock': 'home',
        'sensor': 'home', 'garage': 'home', 'yard': 'home', 'curtain': 'home',
        'blind': 'home', 'furniture': 'home', 'chair': 'home',
        'bed': 'home', 'sofa': 'home', 'lamp': 'home', 'shower': 'home',
        'bath': 'home', 'toilet': 'home', 'faucet': 'home', 'sink': 'home',
        'appliance': 'home', 'washer': 'home', 'dryer': 'home', 'dishwasher': 'home',
        'oven': 'home', 'microwave': 'home', 'fridge': 'home', 'stove': 'home',

        // 地图位置
        'map': 'maps', 'location': 'maps', 'place': 'maps', 'pin': 'maps',
        'gps': 'maps', 'directions': 'maps', 'destination': 'maps', 'route': 'maps',
        'distance': 'maps', 'local': 'maps', 'compass': 'maps',
        'explore': 'maps', 'terrain': 'maps', 'layers': 'maps',

        // 交通出行
        'car': 'transport', 'bus': 'transport', 'train': 'transport', 'subway': 'transport',
        'bike': 'transport', 'walk': 'transport', 'flight': 'transport', 'plane': 'transport',
        'airport': 'transport', 'taxi': 'transport', 'ride': 'transport', 'tram': 'transport',
        'railway': 'transport', 'ship': 'transport', 'boat': 'transport', 'ferry': 'transport',
        'motorcycle': 'transport', 'scooter': 'transport', 'truck': 'transport', 'delivery': 'transport',
        'parking': 'transport', 'traffic': 'transport', 'commute': 'transport', 'travel': 'transport',
        'trip': 'transport', 'luggage': 'transport', 'baggage': 'transport',

        // 商业金融
        'business': 'business', 'work': 'business', 'job': 'business', 'office': 'business',
        'meeting': 'business', 'presentation': 'business', 'chart': 'business', 'graph': 'business',
        'analytics': 'business', 'statistics': 'business', 'data': 'business', 'report': 'business',
        'money': 'business', 'currency': 'business', 'payment': 'business', 'credit': 'business',
        'card': 'business', 'cash': 'business', 'coin': 'business', 'dollar': 'business',
        'euro': 'business', 'pound': 'business', 'yen': 'business', 'bank': 'business',
        'finance': 'business', 'wallet': 'business', 'receipt': 'business',
        'invoice': 'business', 'shopping': 'business', 'store': 'business', 'shop': 'business',
        'cart': 'business', 'basket': 'business', 'bag': 'business', 'price': 'business',
        'discount': 'business', 'sale': 'business', 'merchant': 'business',

        // 人物用户
        'person': 'people', 'user': 'people', 'profile': 'people', 'account': 'people',
        'avatar': 'people', 'face': 'people', 'people': 'people',
        'team': 'people', 'family': 'people', 'man': 'people', 'woman': 'people',
        'child': 'people', 'baby': 'people', 'accessible': 'people',

        // 健康医疗
        'health': 'health', 'medical': 'health', 'hospital': 'health', 'doctor': 'health',
        'patient': 'health', 'nurse': 'health', 'medication': 'health', 'pill': 'health',
        'drug': 'health', 'pharmacy': 'health', 'fitness': 'health', 'exercise': 'health',
        'sport': 'health', 'activity': 'health', 'heart': 'health', 'pulse': 'health',
        'blood': 'health', 'pressure': 'health', 'weight': 'health',
        'sleep': 'health', 'wellness': 'health', 'diet': 'health', 'nutrition': 'health',
        'hygiene': 'health', 'mask': 'health',
        'virus': 'health', 'disease': 'health', 'symptom': 'health',

        // 天气环境
        'weather': 'weather', 'climate': 'weather', 'sun': 'weather',
        'rain': 'weather', 'snow': 'weather', 'wind': 'weather', 'storm': 'weather',
        'thunder': 'weather', 'lightning': 'weather', 'temperature': 'weather', 'hot': 'weather',
        'cold': 'weather', 'warm': 'weather', 'cool': 'weather', 'humidity': 'weather',
        'air': 'weather', 'pollution': 'weather', 'environment': 'weather',
        'eco': 'weather', 'green': 'weather', 'recycling': 'weather', 'energy': 'weather',
        'power': 'weather', 'solar': 'weather', 'water': 'weather', 'earth': 'weather',
        'planet': 'weather', 'nature': 'weather', 'tree': 'weather', 'plant': 'weather',
        'flower': 'weather', 'forest': 'weather', 'garden': 'weather', 'park': 'weather',

        // 提示警告
        'error': 'alert', 'warning': 'alert', 'info': 'alert', 'help': 'alert',
        'alert': 'alert', 'notification': 'alert', 'announce': 'alert', 'attention': 'alert',
        'danger': 'alert', 'success': 'alert', 'question': 'alert', 'flag': 'alert',
        'important': 'alert', 'priority': 'alert', 'alarm': 'alert', 'timer': 'alert',
        'clock': 'alert', 'time': 'alert', 'date': 'alert', 'calendar': 'alert',
        'schedule': 'alert', 'event': 'alert', 'reminder': 'alert',

        // 形状符号
        'circle': 'shapes', 'square': 'shapes', 'rectangle': 'shapes', 'triangle': 'shapes',
        'diamond': 'shapes', 'pentagon': 'shapes', 'hexagon': 'shapes', 'star': 'shapes',
        'line': 'shapes', 'curve': 'shapes',
        'dot': 'shapes', 'point': 'shapes', 'pattern': 'shapes',
        'symbol': 'shapes', 'icon': 'shapes', 'logo': 'shapes', 'badge': 'shapes',

        // 科技网络
        'web': 'tech', 'internet': 'tech', 'network': 'tech', 'server': 'tech',
        'database': 'tech', 'code': 'tech',
        'program': 'tech', 'develop': 'tech', 'app': 'tech', 'android': 'tech',
        'ios': 'tech', 'mobile': 'tech', 'password': 'tech',
        'encryption': 'tech', 'api': 'tech', 'sdk': 'tech', 'lan': 'tech',
        'router': 'tech', 'vpn': 'tech', 'proxy': 'tech', 'dns': 'tech',
        'http': 'tech', 'https': 'tech', 'ssl': 'tech', 'config': 'tech',
        'settings': 'tech', 'system': 'tech', 'upgrade': 'tech',
        'install': 'tech', 'sync': 'tech',

        // 食品餐饮
        'food': 'food', 'drink': 'food', 'meal': 'food', 'breakfast': 'food',
        'lunch': 'food', 'dinner': 'food', 'restaurant': 'food', 'cafe': 'food',
        'bar': 'food', 'coffee': 'food', 'tea': 'food', 'wine': 'food',
        'beer': 'food', 'cocktail': 'food', 'bakery': 'food', 'meat': 'food',
        'vegetable': 'food', 'fruit': 'food', 'dessert': 'food', 'cake': 'food',
        'ice': 'food', 'cream': 'food', 'fast': 'food', 
        'recipe': 'food', 'cook': 'food', 'dining': 'food',

        // 其他图标会默认分到'misc'类别
    };

    // 根据图标名称进行分类
    iconNames.forEach(name => {
        // 根据关键字匹配分类
        let matched = false;
        for (const keyword in keywordToCategory) {
            if (name.toLowerCase().includes(keyword.toLowerCase())) {
                const categoryKey = keywordToCategory[keyword];
                const category = categories.find(cat => cat.key === categoryKey);
                if (category) {
                    category.icons.push(name);
                    matched = true;
                    break;
                }
            }
        }

        // 如果没有匹配到任何类别，放入"其他"
        if (!matched) {
            const miscCategory = categories.find(cat => cat.key === 'misc');
            if (miscCategory) {
                miscCategory.icons.push(name);
            }
        }
    });

    // 过滤掉没有图标的分类，并确保每个图标只出现在一个分类中
    // 为避免图标重复，用Set来去重
    const processedIcons = new Set();

    return categories.map(category => {
        // 过滤出未处理过的图标
        const uniqueIcons = category.icons.filter(icon => !processedIcons.has(icon));

        // 将处理过的图标添加到Set中
        uniqueIcons.forEach(icon => processedIcons.add(icon));

        return {
            ...category,
            icons: uniqueIcons
        };
    }).filter(category => category.icons.length > 0); // 过滤掉空分类
};

export const iconCategories = categorizeIcons();

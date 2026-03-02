const LINK_MAP = {
  releases: 'https://github.com/nn2048/pokedemo-website/releases',
  source: 'https://github.com/nn2048/pokedemo-website',
  modrinth: 'https://modrinth.com/plugin/pokedemo',
  issues: 'https://github.com/nn2048/pokedemo-website/issues',
  spawnTxt: './assets/data/spawn.txt',
  apricornTxt: './assets/data/apricorn_leaf_drop_table.txt'
};

const APRICORN_ROWS = [
  {
    code: 'OAK_LEAVES',
    name: { zh: '橡木树叶', en: 'Oak Leaves' },
    primary: { zh: '红球果 red (6)', en: 'Red Apricorn (6)' },
    secondary: { zh: '黄球果 yellow (4)', en: 'Yellow Apricorn (4)' },
    rare: { zh: '绿球果 green (1)', en: 'Green Apricorn (1)' }
  },
  {
    code: 'BIRCH_LEAVES',
    name: { zh: '白桦树叶', en: 'Birch Leaves' },
    primary: { zh: '黄球果 yellow (6)', en: 'Yellow Apricorn (6)' },
    secondary: { zh: '白球果 white (3)', en: 'White Apricorn (3)' },
    rare: { zh: '红球果 red (1)', en: 'Red Apricorn (1)' }
  },
  {
    code: 'SPRUCE_LEAVES',
    name: { zh: '云杉树叶', en: 'Spruce Leaves' },
    primary: { zh: '蓝球果 blue (6)', en: 'Blue Apricorn (6)' },
    secondary: { zh: '黑球果 black (3)', en: 'Black Apricorn (3)' },
    rare: { zh: '白球果 white (1)', en: 'White Apricorn (1)' }
  },
  {
    code: 'JUNGLE_LEAVES',
    name: { zh: '丛林树叶', en: 'Jungle Leaves' },
    primary: { zh: '绿球果 green (6)', en: 'Green Apricorn (6)' },
    secondary: { zh: '粉球果 pink (3)', en: 'Pink Apricorn (3)' },
    rare: { zh: '黄球果 yellow (1)', en: 'Yellow Apricorn (1)' }
  },
  {
    code: 'ACACIA_LEAVES',
    name: { zh: '金合欢树叶', en: 'Acacia Leaves' },
    primary: { zh: '红球果 red (5)', en: 'Red Apricorn (5)' },
    secondary: { zh: '黄球果 yellow (5)', en: 'Yellow Apricorn (5)' },
    rare: { zh: '粉球果 pink (1)', en: 'Pink Apricorn (1)' }
  },
  {
    code: 'DARK_OAK_LEAVES',
    name: { zh: '深色橡木树叶', en: 'Dark Oak Leaves' },
    primary: { zh: '黑球果 black (5)', en: 'Black Apricorn (5)' },
    secondary: { zh: '白球果 white (4)', en: 'White Apricorn (4)' },
    rare: { zh: '蓝球果 blue (1)', en: 'Blue Apricorn (1)' }
  }
];

const I18N = {
  zh: {
    pageTitle: 'PokeDemo 插件官网',
    brandTagline: '官方站点 · 免费开源',
    sidebarFoot: '项目持续开发中，欢迎反馈与贡献。',
    languageLabel: 'Language',
    nav: {
      gettingStarted: '如何开始',
      machines: '机械',
      breeding: '繁育',
      legends: '传说',
      refresh: '刷新',
      community: '社区'
    },
    heroTopline: 'PokeDemo Plugin',
    heroTitle: '下载、教程与数据入口',
    heroSubtitle: '从这里快速获取版本下载、玩法教程、刷新规则和社区链接。',
    warningTitle: '重要声明',
    warningList: [
      '精灵材质源于 Cobblemon 开源社区，本插件也将坚持免费开源。',
      '禁止擅自魔改后出售或进行任何二次收费分发。',
      '如发现付费倒卖版本，请通过社区渠道反馈。'
    ],
    devNoticeTitle: '开发进度说明',
    devNoticeText: '插件所需开发内容量巨大，且仅由作者一人编写，故部分内容和大部分精灵无法一次性实现',
    translationNoticeTitle: '多语言说明',
    translationNoticeText: '项目早期内容以中文为主，部分翻译可能仍需打磨，欢迎在社区提交修正建议。',
    downloadsTitle: '下载与资源',
    downloads: {
      releases: { title: '最新版构建', desc: 'GitHub Releases（JAR）' },
      source: { title: '源码仓库', desc: '查看源代码与提交记录' },
      modrinth: { title: 'Modrinth 页面', desc: '版本发布与分发' },
      issues: { title: '问题反馈', desc: '提交 Bug 与建议' },
      spawnTxt: { title: '资源包下载', desc: '下载资源包文件' },
      apricornTxt: { title: '数据包（可选）下载', desc: '下载数据包文件（可选）' }
    },
    sections: {
      gettingStarted: {
        title: '如何开始',
        list: [
          '使用 /recipes 获取教程书。',
          '破坏树叶获得球果。',
          '挖掘矿石获得滚石。',
          '钓鱼获得薄荷和胶囊。',
          '繁殖宝可梦获得更强个体（繁殖与薄荷等获取概率可在配置文件调整）。',
          '收集图鉴，成为真正的 Poke 大师。'
        ]
      },
      machines: {
        title: '机械',
        list: [
          '在 /recipes 或精灵手机界面的设备页查看合成配方。',
          '挖掘砂砾石发现的可疑石头，也许清洗后会露出真容。',
          '注入红石作为能源，尝试复活远古世界的霸主。',
          '神秘精灵身上似乎能找到全部宝可梦的基因，你决定开展研究。',
          '研究结果可能诞生形态奇异的宝可梦，它们似乎继承了变化基因。',
          '将它们放入牧场后会发生什么？',
          '每一位宝可梦似乎都对环境有自己的执念。',
          '尝试与朋友交换这些宝可梦，也许会出现意想不到的变化。'
        ]
      },
      breeding: {
        title: '繁育',
        list: [
          '在 PokeDemo 世界中，精灵们对生活环境有很高要求。',
          '给它们携带喜欢的红绳与护腕，可能提高繁育效率。',
          '你还需要开启阳光传感器，持续提供温暖能源以抵抗寒夜。',
          '收获的小小宝可梦蛋需要随身携带并耐心孵化。'
        ]
      },
      legends: {
        title: '传说',
        intro: [
          '在 PokeDemo 世界中流传着这样的故事：',
          '在炽热下界或萨瓦纳草原、极寒冰刺之地、巍峨高山之地摆放神圣祭坛，并用元素石注入能量，也许会有缘目睹传说中的身姿。'
        ],
        altarTitle: '祭坛结构',
        altar: '第一层:\nRxR\nxdx\nRxR\n\n第二层:\nY.Y\n...\nY.Y\n\nR = 下界合金块\nx = 岩浆块 / 浮冰 / 铁块 / 铜块\nY = 荧石',
        outro: '另外，在丛林深处据说存在一种神奇小精灵，拥有变化成其他精灵的能力。听起来不真实，但你可以亲自尝试。'
      },
      refresh: {
        title: '刷新',
        intro: '本节展示服务器刷新规则与球果掉落数据，并附带摘要统计和原始文本。',
        spawnStatTitle: '刷新表统计',
        spawnSpeciesLabel: '个物种（按“【】”条目统计）',
        spawnEntryLabel: '条生成规则（按 [common]/[rare] 等条目统计）',
        apricornStatTitle: '球果掉落规则摘要',
        apricornStatText: '仅天然树叶会掉落；剪刀与精准采集无效；默认单次掉落概率 2%。',
        apricornTableTitle: '树叶 -> 球果掉落权重',
        thLeaf: '树叶',
        thPrimary: '主要掉落',
        thSecondary: '次要掉落',
        thRare: '稀有掉落',
        spawnRawTitle: '查看完整 spawn.txt',
        apricornRawTitle: '查看完整 apricorn_leaf_drop_table.txt'
      },
      community: {
        title: '社区',
        intro: '加入社区获取更新、提交反馈并交流玩法。',
        links: [
          { label: 'QQ群', url: 'https://qm.qq.com/' },
          { label: 'Discord', url: 'https://discord.gg/' },
          { label: 'GitHub', url: LINK_MAP.source },
          { label: 'Modrinth', url: LINK_MAP.modrinth }
        ],
        supportWorldsTitle: '支持我们插件的世界（中文版）',
        supportWorlds: [
          '世界服 A（可替换为真实名称）',
          '世界服 B（可替换为真实名称）',
          '世界服 C（可替换为真实名称）'
        ]
      }
    }
  },
  en: {
    pageTitle: 'PokeDemo Plugin',
    brandTagline: 'Official Site · Free & Open Source',
    sidebarFoot: 'Project updates are ongoing. Feedback and contributions are welcome.',
    languageLabel: 'Language',
    nav: {
      gettingStarted: 'Getting Started',
      machines: 'Machines',
      breeding: 'Breeding',
      legends: 'Legends',
      refresh: 'Spawn & Drops',
      community: 'Community'
    },
    heroTopline: 'PokeDemo Plugin',
    heroTitle: 'Downloads, Guides and Data',
    heroSubtitle: 'Find all key links in one place: releases, gameplay guides, spawn rules and community channels.',
    warningTitle: 'Important Notice',
    warningList: [
      'Pokemon textures and materials are from the Cobblemon open-source community, and this plugin will also remain free and open-source.',
      'Selling modified builds or charging for redistribution is prohibited.',
      'If you find paid resale, please report it through community channels.'
    ],
    devNoticeTitle: 'Development Status',
    devNoticeText: 'This is a large project maintained mainly by one developer, so some Pokemon and features are added in phases.',
    translationNoticeTitle: 'Translation Note',
    translationNoticeText: 'Early development was Chinese-first. Some localized wording may still need refinement; correction suggestions are welcome.',
    downloadsTitle: 'Downloads & Resources',
    downloads: {
      releases: { title: 'Latest Build', desc: 'GitHub Releases (JAR)' },
      source: { title: 'Source Repository', desc: 'Code and commit history' },
      modrinth: { title: 'Modrinth Page', desc: 'Version distribution' },
      issues: { title: 'Issue Tracker', desc: 'Report bugs and suggestions' },
      spawnTxt: { title: 'Resource Pack Download', desc: 'Download resource pack file' },
      apricornTxt: { title: 'Datapack (Optional) Download', desc: 'Download optional datapack file' }
    },
    sections: {
      gettingStarted: {
        title: 'Getting Started',
        list: [
          'Use /recipes to get the guide book.',
          'Break leaves to obtain Apricorns.',
          'Mine ores to obtain Tumblestone.',
          'Fish to obtain mints and capsules.',
          'Breed Pokemon for stronger individuals (rates are configurable).',
          'Complete the Pokedex and become a Poke master.'
        ]
      },
      machines: {
        title: 'Machines',
        list: [
          'Open the devices page in /recipes or Poke Phone to view crafting formulas.',
          'Suspicious stones found in gravel may reveal their true form after cleaning.',
          'Inject redstone as energy and attempt to revive ancient rulers.',
          'A mysterious Pokemon seems to contain genes from all species. You decide to research it.',
          'That research may create unusual forms inheriting transformation genes.',
          'What will happen if they are placed into the pasture?',
          'Every Pokemon appears to have strict environment preferences.',
          'Try trading these Pokemon with friends for unexpected outcomes.'
        ]
      },
      breeding: {
        title: 'Breeding',
        list: [
          'In PokeDemo, Pokemon care a lot about their living environment.',
          'Giving preferred red strings and bands may improve breeding efficiency.',
          'You also need an active daylight sensor to provide warm energy at night.',
          'Pokemon eggs require carrying and careful hatching.'
        ]
      },
      legends: {
        title: 'Legends',
        intro: [
          'There are stories in the world of PokeDemo:',
          'Build sacred altars in hot Nether or savanna regions, freezing ice-spike lands, and high mountains. Inject elemental energy, and you may witness legendary forms.'
        ],
        altarTitle: 'Altar Structure',
        altar: 'Layer 1:\nRxR\nxdx\nRxR\n\nLayer 2:\nY.Y\n...\nY.Y\n\nR = Netherite Block\nx = Magma Block / Packed Ice / Iron Block / Copper Block\nY = Glowstone',
        outro: 'Deep in the jungle, people report a mysterious creature able to transform into other Pokemon. Sounds unreal, but worth trying.'
      },
      refresh: {
        title: 'Spawn & Drops',
        intro: 'This section shows current spawn and apricorn drop data, with quick stats and full raw text.',
        spawnStatTitle: 'Spawn Table Stats',
        spawnSpeciesLabel: 'species (counted by 【...】 entries)',
        spawnEntryLabel: 'spawn rules (counted by [common]/[rare] entries)',
        apricornStatTitle: 'Apricorn Rule Summary',
        apricornStatText: 'Only natural leaves can drop apricorns; shears/silk touch do not trigger drops; default chance is 2% per leaf.',
        apricornTableTitle: 'Leaf -> Apricorn Weight Table',
        thLeaf: 'Leaf Type',
        thPrimary: 'Primary Drop',
        thSecondary: 'Secondary Drop',
        thRare: 'Rare Drop',
        spawnRawTitle: 'View full spawn.txt',
        apricornRawTitle: 'View full apricorn_leaf_drop_table.txt'
      },
      community: {
        title: 'Community',
        intro: 'Join our channels for updates, support and discussion.',
        links: [
          { label: 'QQ Group', url: 'https://qm.qq.com/' },
          { label: 'Discord', url: 'https://discord.gg/' },
          { label: 'GitHub', url: LINK_MAP.source },
          { label: 'Modrinth', url: LINK_MAP.modrinth }
        ],
        supportWorldsTitle: '',
        supportWorlds: []
      }
    }
  }
};

const DOWNLOAD_KEYS = ['releases', 'source', 'modrinth', 'issues', 'spawnTxt', 'apricornTxt'];

const langButtons = document.querySelectorAll('.lang-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');

function renderList(targetId, items) {
  const target = document.getElementById(targetId);
  target.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    target.appendChild(li);
  });
}

function setLanguage(lang) {
  const t = I18N[lang] || I18N.zh;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = t.pageTitle;

  document.getElementById('brandTagline').textContent = t.brandTagline;
  document.getElementById('sidebarFoot').textContent = t.sidebarFoot;
  document.getElementById('languageLabel').textContent = t.languageLabel;

  document.getElementById('heroTopline').textContent = t.heroTopline;
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('heroSubtitle').textContent = t.heroSubtitle;

  document.getElementById('warningTitle').textContent = t.warningTitle;
  const warningList = document.getElementById('warningList');
  warningList.innerHTML = '';
  t.warningList.forEach((w) => {
    const li = document.createElement('li');
    li.textContent = w;
    warningList.appendChild(li);
  });

  document.getElementById('devNoticeTitle').textContent = t.devNoticeTitle;
  document.getElementById('devNoticeText').textContent = t.devNoticeText;
  document.getElementById('translationNoticeTitle').textContent = t.translationNoticeTitle;
  document.getElementById('translationNoticeText').textContent = t.translationNoticeText;

  document.getElementById('downloadsTitle').textContent = t.downloadsTitle;

  const navLinks = document.querySelectorAll('.sidebar nav a');
  navLinks.forEach((link) => {
    const key = link.dataset.nav;
    link.textContent = t.nav[key];
  });

  document.querySelectorAll('[data-title]').forEach((el) => {
    const key = el.dataset.title;
    el.textContent = t.sections[key].title;
  });

  renderList('gettingStartedList', t.sections.gettingStarted.list);
  renderList('machinesList', t.sections.machines.list);
  renderList('breedingList', t.sections.breeding.list);

  const legends = t.sections.legends;
  const legendsContent = document.getElementById('legendsContent');
  legendsContent.innerHTML = '';
  legends.intro.forEach((p) => {
    const node = document.createElement('p');
    node.textContent = p;
    legendsContent.appendChild(node);
  });
  const altarTitle = document.createElement('p');
  altarTitle.innerHTML = `<strong>${legends.altarTitle}</strong>`;
  legendsContent.appendChild(altarTitle);
  const altar = document.createElement('pre');
  altar.className = 'altar-box';
  altar.textContent = legends.altar;
  legendsContent.appendChild(altar);
  const outro = document.createElement('p');
  outro.textContent = legends.outro;
  legendsContent.appendChild(outro);

  const refresh = t.sections.refresh;
  document.getElementById('refreshIntro').textContent = refresh.intro;
  document.getElementById('spawnStatTitle').textContent = refresh.spawnStatTitle;
  document.getElementById('spawnSpeciesLabel').textContent = refresh.spawnSpeciesLabel;
  document.getElementById('spawnEntryLabel').textContent = refresh.spawnEntryLabel;
  document.getElementById('apricornStatTitle').textContent = refresh.apricornStatTitle;
  document.getElementById('apricornStatText').textContent = refresh.apricornStatText;
  document.getElementById('apricornTableTitle').textContent = refresh.apricornTableTitle;
  document.getElementById('thLeaf').textContent = refresh.thLeaf;
  document.getElementById('thPrimary').textContent = refresh.thPrimary;
  document.getElementById('thSecondary').textContent = refresh.thSecondary;
  document.getElementById('thRare').textContent = refresh.thRare;
  document.getElementById('spawnRawTitle').textContent = refresh.spawnRawTitle;
  document.getElementById('apricornRawTitle').textContent = refresh.apricornRawTitle;

  const community = t.sections.community;
  const communityContent = document.getElementById('communityContent');
  communityContent.innerHTML = '';

  const intro = document.createElement('p');
  intro.textContent = community.intro;
  communityContent.appendChild(intro);

  const links = document.createElement('div');
  links.className = 'community-links';
  community.links.forEach((entry) => {
    const a = document.createElement('a');
    a.href = entry.url;
    a.target = entry.url.startsWith('http') ? '_blank' : '_self';
    a.rel = 'noopener noreferrer';
    a.textContent = entry.label;
    links.appendChild(a);
  });
  communityContent.appendChild(links);

  if (community.supportWorlds && community.supportWorlds.length > 0) {
    const worlds = document.createElement('div');
    worlds.className = 'support-worlds';

    const title = document.createElement('h4');
    title.textContent = community.supportWorldsTitle;
    worlds.appendChild(title);

    const ul = document.createElement('ul');
    community.supportWorlds.forEach((w) => {
      const li = document.createElement('li');
      li.textContent = w;
      ul.appendChild(li);
    });
    worlds.appendChild(ul);
    communityContent.appendChild(worlds);
  }

  const downloadGrid = document.getElementById('downloadGrid');
  downloadGrid.innerHTML = '';
  DOWNLOAD_KEYS.forEach((key) => {
    const cfg = t.downloads[key];
    if (!cfg) return;

    const a = document.createElement('a');
    a.className = 'download-card';
    a.href = LINK_MAP[key] || '#';
    a.target = a.href.startsWith('http') ? '_blank' : '_self';
    a.rel = 'noopener noreferrer';

    const h4 = document.createElement('h4');
    h4.textContent = cfg.title;
    const p = document.createElement('p');
    p.textContent = cfg.desc;

    a.appendChild(h4);
    a.appendChild(p);
    downloadGrid.appendChild(a);
  });

  const tbody = document.getElementById('apricornTbody');
  tbody.innerHTML = '';
  APRICORN_ROWS.forEach((row) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${row.code}</strong><br>${row.name[lang]}</td>
      <td>${row.primary[lang]}</td>
      <td>${row.secondary[lang]}</td>
      <td>${row.rare[lang]}</td>
    `;
    tbody.appendChild(tr);
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('pokedemo-lang', lang);
}

function parseSpawnStats(text) {
  const species = (text.match(/^【/gm) || []).length;
  const entries = (text.match(/^\s*-\s\[/gm) || []).length;
  document.getElementById('spawnSpeciesCount').textContent = species || 0;
  document.getElementById('spawnEntryCount').textContent = entries || 0;
}

async function loadRawData() {
  const embedded = window.POKEDEMO_EMBEDDED_DATA || {};
  let spawnText = '';
  let apricornText = '';

  try {
    const spawnResp = await fetch('./assets/data/spawn.txt');
    if (!spawnResp.ok) throw new Error(`HTTP ${spawnResp.status}`);
    spawnText = await spawnResp.text();
  } catch (err) {
    spawnText = embedded.spawnTxt || '';
  }

  try {
    const apricornResp = await fetch('./assets/data/apricorn_leaf_drop_table.txt');
    if (!apricornResp.ok) throw new Error(`HTTP ${apricornResp.status}`);
    apricornText = await apricornResp.text();
  } catch (err) {
    apricornText = embedded.apricornTxt || '';
  }

  if (spawnText) {
    document.getElementById('spawnRaw').textContent = spawnText.trim();
    parseSpawnStats(spawnText);
  } else {
    document.getElementById('spawnRaw').textContent = 'Failed to load spawn.txt';
  }

  if (apricornText) {
    document.getElementById('apricornRaw').textContent = apricornText.trim();
  } else {
    document.getElementById('apricornRaw').textContent = 'Failed to load apricorn_leaf_drop_table.txt';
  }
}

function setupSidebar() {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('show');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });

  document.querySelectorAll('.sidebar nav a').forEach((a) => {
    a.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  });
}

function initLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const saved = localStorage.getItem('pokedemo-lang');
  const lang = urlLang === 'en' || urlLang === 'zh' ? urlLang : saved || 'zh';
  setLanguage(lang);

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

setupSidebar();
initLanguage();
loadRawData();

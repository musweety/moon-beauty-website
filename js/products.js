const products = [
  {
    id: 'mfy-01',
    name: 'MFY-01 美容椅',
    category: 'beauty',
    price: '420-470',
    desc: '大气包裹型设计，方正宽厚扶手搭配饱满靠背',
    longDesc: '大气包裹型设计：方正宽厚扶手搭配饱满靠背，给顾客沉浸式舒适体验，适配剪发、护肤等多种美容场景。\n轻奢质感：甄选耐磨皮革，触感细腻亲肤，搭配亮面金属支架，简约高级适配各类装修风格。\n稳固耐用：加大圆形底盘搭配加粗液压杆，承重力强，旋转升降流畅无噪音。',
    specs: { '尺寸': '参考尺寸图', '净重': '28kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/beauty/mfy-01.jpg'
  },
  {
    id: 'mfy-02',
    name: 'MFY-02 美容椅',
    category: 'beauty',
    price: '490-550',
    desc: '轻奢米白+拉丝金配色，颜值与质感双在线',
    longDesc: '轻奢米白 + 拉丝金配色：高级感拉满，适配美容院、美甲店、SPA会所等多种高端场景，瞬间提升空间格调。\n细腻皮质 + 精致缝线：选用亲肤耐磨的仿真皮/真皮材质，触感柔软，搭配立体分区缝线设计，既美观又耐用，易清洁不藏污。\n舒适体验升级：高弹填充 + 人体工学造型，座垫与靠背采用高密度海绵填充，分区承托腰、背、臀，久坐不累。\n圆润扶手设计：饱满的弧形扶手贴合手臂曲线，为顾客提供舒适支撑。',
    specs: { '尺寸': '参考尺寸图', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/beauty/mfy-02.jpg'
  },
  {
    id: 'mfy-04',
    name: 'MFY-04 美容椅',
    category: 'beauty',
    price: '410-480',
    desc: '高质感耐磨皮质，精致缝线工艺',
    longDesc: '高质感耐磨皮质：选用加厚耐刮 PU 皮/仿真皮材质，触感柔软亲肤，防水防污易清洁，长期使用不易开裂、褪色，耐用性拉满。\n精致缝线工艺：座垫与靠背采用立体缝线设计，既加固结构，又增添精致细节，视觉更显高端。\n高弹海绵填充：座垫与靠背内置高密度回弹海绵，坐感柔软且支撑力强，不易塌陷变形，长期使用依旧舒适。',
    specs: { '尺寸': '参考尺寸图', '净重': '26kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/beauty/mfy-04.jpg'
  },
  {
    id: 'mfy-06',
    name: '分手指06',
    category: 'beauty',
    price: '460-520',
    desc: '包裹式承托设计，极简流线造型',
    longDesc: '包裹式承托设计：弧形靠背 + 一体化扶手，贴合肩颈与腰背曲线，久坐也能分散身体压力。\n高弹软包材质：坐垫/靠背采用高密度软包 + 细腻皮革，触感柔软且回弹性好，坐感不塌陷、不生硬。\n360° 旋转底座：顺滑旋转 + 稳固底盘，不用起身就能灵活转向。\n极简流线造型：一体化弧形外观 + 无多余装饰，线条流畅利落，兼具现代感与轻奢气质。\n质感材质组合：皮革软包 + 金属/亮面底座，柔润触感与冷调质感碰撞。',
    specs: { '尺寸': '63×60×58cm', '净重': '28kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/beauty/mfy-06.png'
  },
  {
    id: 'mfy-08',
    name: '分手指08',
    category: 'beauty',
    price: '590-650',
    desc: '双层垫设计，核心舒适感升级',
    longDesc: '核心舒适感：双层垫设计，坐垫采用双层填充结构，软硬度适配人体工学——表层贴合身体曲线，底层承托力足，长时间坐也不累。\n质感与适配性：浅棕皮质面料自带柔和高级感，适配轻奢风、简约风的门店装修。\n耐用 & 实用性：底座标配304材质，防锈 + 承重力强；搭配旋转功能，技师操作更灵活。\n差异化亮点：双层垫是普通单垫椅没有的"舒适buff"，能作为门店"重视顾客体验"的招牌卖点。',
    specs: { '尺寸': '62×64×68cm', '净重': '28kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆/上座' },
    image: 'images/beauty/mfy-08.jpg'
  },
  {
    id: 'mfy-09',
    name: 'MFY-09 美容椅',
    category: 'beauty',
    price: '480-540',
    desc: '极简工业风设计，硬朗金属框架',
    longDesc: '极简工业风设计：利落的几何线条 + 全黑哑光配色，自带高级冷感，适配现代美发沙龙、网红美容店。\n高质感耐磨皮质：选用加厚防水 PU 皮/仿真皮，触感柔软亲肤，耐刮防污易清洁。\n硬朗金属框架：V型几何支架 + 哑光黑金属结构，视觉上利落干练，与柔软皮质形成刚柔对比。',
    specs: { '尺寸': '参考尺寸图', '净重': '28kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/beauty/mfy-09.jpg'
  },
  {
    id: 'mfy-10',
    name: '分手指10',
    category: 'beauty',
    price: '590-640',
    desc: '"云朵级"舒适体验，超高颜值百搭',
    longDesc: '"云朵级"舒适体验：超饱满软包扶手 + 靠背，长时间躺靠也不累肩、不累腰；宽体坐垫 + 亲肤面料，贴合身体曲线。\n高颜值适配多场景：浅灰 + 白边的柔和配色，既高级又百搭，能融入ins风、极简风等各类美容店装修。\n实用耐用双在线：304不锈钢加重底盘，360°旋转稳固不晃；防污耐磨面料，日常清洁只需一擦。',
    specs: { '尺寸': '65×66×56cm', '净重': '30kg', '颜色': '可定制', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/上座加脚踏' },
    image: 'images/beauty/mfy-10.jpg'
  },
  {
    id: 'mfy-11',
    name: 'MFY-11 美容椅',
    category: 'beauty',
    price: '430-500',
    desc: '简约奶油风配色，精致分段式靠背',
    longDesc: '简约奶油风配色：柔和米白皮质搭配亮面不锈钢框架，清新高级，适配网红美容院、美甲美睫店、轻奢沙龙。\n高质感耐磨皮质：选用加厚防水 PU 皮/仿真皮，触感柔软亲肤，耐刮防污易清洁。\n精致分段式靠背：双层靠背设计，既强化腰部支撑，又让整体造型更具层次感。',
    specs: { '尺寸': '参考尺寸图', '净重': '28kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/beauty/mfy-11.jpg'
  },
  {
    id: 'mfy-12',
    name: '分手指12',
    category: 'beauty',
    price: '430-480',
    desc: '优质皮质，经典黑色百搭款',
    longDesc: '优质皮质：光滑有质感，耐磨易清洁，触感舒适。\n人体工学设计：弧形靠背与扶手贴合身形，提供良好支撑，久坐不累。\n灵活旋转：黑色圆形底座带旋转结构，360度自由转动，满足多方向活动需求。\n简约百搭：整体设计简约大气，黑色调适配多种室内风格，提升空间格调。\n稳固耐用：底座结构稳固，承重性好，使用寿命长。',
    specs: { '尺寸': '62×64×68cm T型箱', '净重': '30kg', '颜色': '银/黑/金', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆/加大加粗/上座' },
    image: 'images/beauty/mfy-12.jpg'
  },
  {
    id: 'mfy-12-pleat',
    name: '分手指12 褶皱款',
    category: 'beauty',
    price: '430-480',
    desc: '褶皱工艺设计，经典黑色百搭款',
    longDesc: '优质皮质：光滑有质感，耐磨易清洁，触感舒适。\n人体工学设计：弧形靠背与扶手贴合身形，提供良好支撑，久坐不累。\n灵活旋转：黑色圆形底座带旋转结构，360度自由转动，满足多方向活动需求。\n简约百搭：整体设计简约大气，黑色调适配多种室内风格，提升空间格调。\n稳固耐用：底座结构稳固，承重性好，使用寿命长。',
    specs: { '尺寸': '62×64×68cm T型箱', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆/加大加粗/上座' },
    image: 'images/beauty/mfy-12-pleat.jpg'
  },
  {
    id: 'mfy-13',
    name: '分手指13',
    category: 'beauty',
    price: '390-430',
    desc: '极简一体流线设计，哑光黑金属框架',
    longDesc: '极简一体流线设计：流畅弧形靠背与扶手无缝衔接，线条利落高级。\n高质感耐磨皮质：选用加厚防水 PU 皮/仿真皮，触感柔软亲肤，耐刮防污易清洁。\n哑光黑金属框架：全黑哑光金属支架与底盘，低调沉稳。\n人体工学包裹承托：弧形靠背贴合腰背曲线，饱满座垫深度承托臀部。\n顺滑液压升降系统：配备重型液压升降杆，轻松调节座椅高度。\n360° 自由旋转：圆形大底盘支持全向旋转。\n贴心侧边脚踏：侧边金属脚踏提供舒适放脚位置。',
    specs: { '尺寸': '62×48×98cm', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆/加大加粗/上座' },
    image: 'images/beauty/mfy-13.jpg'
  },
  {
    id: 'mfy-13-plus',
    name: '分手指13+',
    category: 'beauty',
    price: '410-480',
    desc: '升级款一体流线设计，哑光黑金属框架',
    longDesc: '极简一体流线设计：流畅弧形靠背与扶手无缝衔接，线条利落高级。\n高质感耐磨皮质：选用加厚防水 PU 皮/仿真皮，触感柔软亲肤，耐刮防污易清洁。\n哑光黑金属框架：全黑哑光金属支架与底盘，低调沉稳。\n人体工学包裹承托：弧形靠背贴合腰背曲线，饱满座垫深度承托臀部。\n顺滑液压升降系统：配备重型液压升降杆，轻松调节座椅高度。\n360° 自由旋转：圆形大底盘支持全向旋转。',
    specs: { '尺寸': '62×48×98cm', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆/加大加粗/上座' },
    image: 'images/beauty/mfy-13-plus.jpg'
  },
  {
    id: 'mfy-14',
    name: 'MFY-14 美容椅',
    category: 'beauty',
    price: '415-465',
    desc: '极简方正设计，亮面镀铬金属框架',
    longDesc: '极简方正设计：利落的直角线条与饱满包裹式扶手，呈现现代轻奢感，适配各类高端美发沙龙、美容会所。\n高质感耐磨皮质：选用加厚防水 PU 皮/仿真皮，触感柔软亲肤，耐刮防污易清洁。\n亮面镀铬金属框架：镜面抛光的不锈钢支架与底盘，光泽感十足，与黑色皮质形成经典对比。',
    specs: { '尺寸': '44×44×96cm', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆/加大加粗/上座' },
    image: 'images/beauty/mfy-14.jpg'
  },
  {
    id: 'mfy-15',
    name: 'MFY-15 美容椅',
    category: 'beauty',
    price: '590-660',
    desc: '流线型艺术造型，经典黑银配色',
    longDesc: '流线型艺术造型：采用怀抱式弧形扶手设计，线条流畅灵动，打破传统方正感，自带轻奢艺术气息。\n经典撞色质感：黑色/深色皮质搭配亮面镀铬金属支架，经典的"黑 + 银"配色，光泽感强，耐脏易打理。\n高质感耐磨皮质：选用加厚防水 PU 皮/仿真皮，触感柔软亲肤，耐刮防污易清洁。',
    specs: { '尺寸': '60×50×95cm', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆/加大加粗/上座' },
    image: 'images/beauty/mfy-15.jpg'
  },
  {
    id: 'mfy-25',
    name: 'MFY-25 理发椅',
    category: 'beauty',
    price: '550-580',
    desc: '灵活升降调节，人体工学空间布局',
    longDesc: '灵活升降调节：支持泵升操作，最高可达 102cm、最低 89cm，能适配不同身高发型师操作习惯。\n人体工学空间布局：靠背区域宽 44cm、深 42cm，贴合背部曲线；座宽 57cm、座深 47cm，腿部空间充足。\n皮质选择：采用黑色优质皮革，质感高级且易清洁，污渍、碎发可快速擦拭。\n工艺细节：缝线工整、边缘处理细腻，彰显品质感。',
    specs: { '靠背': '宽44cm 深42cm', '座面': '宽57cm 深47cm', '整体宽': '82cm', '净重': '35kg', '颜色': '银/黑/金', '材质': '皮革/电镀/不锈钢' },
    image: 'images/beauty/mfy-25.jpg'
  },
  {
    id: 'mfy-39',
    name: 'MFY-39 倒头椅',
    category: 'beauty',
    price: '420-490',
    desc: '多功能倒头设计，360°旋转灵活操作',
    longDesc: '360° 旋转 + 稳固底盘，操作更灵活：电镀圆盘底盘承重强，静音旋转无卡顿。\n耐磨皮革 + 金属框架，耐用又高级：防水防污的 PU 皮革易清洁，不锈钢扶手与脚踏框架质感升级。\n带轮脚踏设计，收纳更省心：可折叠金属脚踏带万向轮，闲置时轻松推入桌下。',
    specs: { '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/beauty/mfy-39.png'
  },
  {
    id: 'mfy-39-recline',
    name: 'MFY-39 放倒头椅',
    category: 'beauty',
    price: '520-590',
    desc: '多角度放倒设计，适配全场景需求',
    longDesc: '多角度放倒设计：支持平躺/半躺/直立多档位调节，无论是面部护理、美睫纹绣还是修面刮胡，都能精准匹配。\n加高头枕 + 加厚填充，承托更护颈：独立加高头枕贴合颈部曲线，搭配高密度海绵填充。\n360° 旋转 + 稳固底盘：电镀圆盘底盘承重强，静音旋转无卡顿。\n耐磨皮革 + 金属框架：防水防污 PU 皮革易清洁，不锈钢扶手与脚踏框架质感升级。',
    specs: { '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/beauty/mfy-39-recline.png'
  },
  {
    id: 'mfy-41',
    name: 'MFY-41 美容椅',
    category: 'beauty',
    price: '490-555',
    desc: '奢华菱格纹设计，高端轻奢之选',
    longDesc: '奢华菱格纹设计：采用精致菱形缝线工艺，黑色皮革质感高级，为美发空间增添轻奢格调。\n一体化造型：靠背、扶手与座垫的流线型设计浑然一体，简约大气。\n人体工学靠背：贴合颈部与背部曲线，支撑性强。\n加宽扶手与脚踏：扶手设计符合人体自然坐姿，脚踏稳固且空间充足。\n稳固底盘设计：大尺寸黑色圆形底盘，搭配加厚金属立柱，承重性强。',
    specs: { '靠枕区域': '42×16cm', '靠背': '宽52cm 长22cm', '座面': '宽55cm 长50cm', '座垫厚': '13cm', '净重': '35kg', '颜色': '银/黑/金' },
    image: 'images/beauty/mfy-41.png'
  },
  {
    id: 'mfy-44',
    name: 'MFY-44 美容椅',
    category: 'beauty',
    price: '460-510',
    desc: '明亮黄色设计，支持放倒平躺',
    longDesc: '功能实用：支持放倒平躺，既能满足美发店洗头、造型的躺卧需求，也能作为休闲椅放松休憩。\n颜值吸睛：明亮黄色 + 圆润包裹式设计，造型时尚有质感。\n舒适体验：饱满填充的靠背、坐垫 + 弧形扶手，贴合身体曲线。\n质感耐用：皮质面料好清洁、抗磨损，搭配金属底盘，稳固性强。',
    specs: { '尺寸': '62×64×68cm T型箱', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '可放倒/加大加粗' },
    image: 'images/beauty/mfy-44.jpg'
  },
  {
    id: 'mfy-48',
    name: 'MFY-48 扶手椅',
    category: 'beauty',
    price: '1400-1600',
    desc: '简约实用设计，经典百搭款',
    longDesc: '经典实用设计：简约大气的造型，适合美容院、理发店等多种商业场景。\n优质材料：选用高品质皮革和金属材料，兼具美观与实用性。\n舒适体验：合理的人体工学设计，提供舒适的坐感体验。\n稳固耐用：结构稳固，承重性好，使用寿命长。',
    specs: { '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '可定制' },
    image: 'images/beauty/mfy-48.png'
  },
  {
    id: 'mfy-50',
    name: 'MFY-50 美容椅',
    category: 'beauty',
    price: '520-590',
    desc: '经济实用款，入门级美容椅',
    longDesc: '经济实用：性价比高的入门级美容椅，适合新开业门店。\n基本功能齐全：支持升降旋转，满足日常美容理发需求。\n简约设计：经典造型，适应多种店铺风格。\n品质保证：基础款同样注重品质，耐用可靠。',
    specs: { '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '可定制' },
    image: 'images/beauty/mfy-50.png'
  },
  {
    id: 'mfy-56',
    name: 'MFY-56 复古理发椅',
    category: 'beauty',
    price: '1150',
    desc: '美式复古工业风，豪华舒适体验',
    longDesc: '复古美学与现代工艺融合：完美复刻20世纪中期经典男士理发椅造型，黑色仿皮材质与亮面镀铬金属搭配。\n豪华舒适体验：加厚软垫设计，靠背和坐垫采用高密度海绵填充，搭配垂直凹槽压纹的黑色仿皮面料。\n耐用性与品质保证：椅身采用加厚钢管框架结构，搭配高弹性耐磨仿皮面料。\n专业级功能配置：多角度调节，配备侧面调节杆，可轻松调整靠背倾斜角度。\n防滑脚踏：带有平行防滑条纹的镀铬脚踏，提供稳固支撑。',
    specs: { '颜色': '可定做', '材质': '仿皮/镀铬金属', '功能': '多角度调节/可拆卸头枕', '风格': '美式复古工业风' },
    image: 'images/beauty/mfy-56.png'
  },
  {
    id: 'mfy-57',
    name: 'MFY-57 美容椅',
    category: 'beauty',
    price: '950-1000',
    desc: '简约设计，实用百搭款',
    longDesc: '简约实用设计：干净的线条，简洁大气的外观。\n舒适坐感：优质填充材料，提供舒适的坐感体验。\n坚固耐用：扎实的做工和材料，确保长久使用。',
    specs: { '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '可定制' },
    image: 'images/beauty/mfy-57.png'
  },
  {
    id: 'mfy-58',
    name: 'MFY-58 理发椅',
    category: 'beauty',
    price: '455-495',
    desc: '棕黄色高品质皮革，360°旋转升降',
    longDesc: '采用高品质皮革面料，触感细腻且耐磨抗污，日常清洁打理便捷。\n金属框架选用不锈钢材质，兼具强度与光泽感，防锈耐腐蚀。\n支持360° 旋转与高度调节，通过底部液压杆和操控踏板灵活适配。\n靠背与坐垫的人体工学设计，能有效分散人体压力。\n简约现代的设计风格，棕色皮革与金属元素的搭配，既显专业质感。',
    specs: { '尺寸': '65×66×56cm (2号箱)', '净重': '30kg', '颜色': '棕黄色', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆' },
    image: 'images/beauty/mfy-58.jpg'
  },
  {
    id: 'mfy-61',
    name: 'MFY-61 美容护理椅',
    category: 'beauty',
    price: '490-530',
    desc: '高包裹性皮质，多段角度调节',
    longDesc: '顶级舒适体验：高包裹性皮质靠背 + 头枕凹槽设计，贴合人体曲线；加厚软包坐垫 + 可调节脚踏。\n专业功能配置：多段角度调节（靠背/坐垫/脚踏均可灵活调整），满足美容、护理、按摩等多种场景需求。\n高端质感与耐用性：进口耐磨皮革 + 金属镀铬支架，抗污易清洁。\n大尺寸加重底盘，稳定性强，承重性优秀。\n黑 + 金属银的极简轻奢风，适配现代美容/SPA门店。',
    specs: { '颜色': '可定做', '材质': '皮革/镀铬金属', '功能': '多段角度调节', '风格': '极简轻奢' },
    image: 'images/beauty/mfy-61.jpg'
  },
  {
    id: 'mfy-62',
    name: 'MFY-62 高端理发椅',
    category: 'beauty',
    price: '470-510',
    desc: '高端黑红配色，专业理发店之选',
    longDesc: '高端黑红配色：经典黑色与红色的搭配，时尚大气，彰显专业气质。\n精湛工艺：每一个细节都经过精心打磨，从缝线到金属件都体现高品质。\n舒适体验：人体工学设计，提供舒适的理发体验。\n坚固耐用：优质材料和扎实做工，确保长期稳定使用。',
    specs: { '颜色': '黑红色', '材质': '皮革/电镀/不锈钢', '风格': '高端专业' },
    image: 'images/beauty/mfy-62.jpg'
  },
  {
    id: 'mfy-64',
    name: 'MFY-64 美容椅',
    category: 'beauty',
    price: '460-500',
    desc: '轻巧实用款，适合小型美容空间',
    longDesc: '轻巧设计：体积小巧，适合空间有限的美容院或家庭工作室。\n功能齐全：支持基本升降和旋转功能。\n舒适体验：合理的填充设计，提供舒适的坐感。\n经济实惠：高性价比之选。',
    specs: { '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '可定制' },
    image: 'images/beauty/mfy-64.jpg'
  },
  {
    id: 'unknown',
    name: '未知型号 美容椅',
    category: 'beauty',
    price: '450-500',
    desc: '简约实用款，多功能美容椅',
    longDesc: '经典实用设计：简约大气的造型，适用于多种美容美发场景。\n优质选材：选用高品质材料，确保产品的耐用性和舒适性。\n基本功能：支持升降旋转，满足日常使用需求。',
    specs: { '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '可定制' },
    image: 'images/beauty/unknown.jpg'
  },
  {
    id: 'yueya',
    name: '月牙扶手椅',
    category: 'beauty',
    price: '410-480',
    desc: '月牙造型扶手，轻奢INS风格',
    longDesc: '轻奢颜色适配高端场景：浅色值适配高端场景（奶白色皮质 + 金色金属装饰），风格优雅精致，能提升美容/美发店的装修档次，契合轻奢、ins风等主流店铺风格。\n舒适体验拉满：高靠背 + 贴合式头枕设计，包裹感强，躺靠时肩部、背部能自然放松；柔软皮质坐垫 + 加宽扶手，久坐不累，适合长时间美容护理、造型设计等场景。\n实用功能适配门店需求：360° 旋转底盘（带金色加重底座），稳定性好，方便技师多角度操作。\n耐用易维护：防污皮质面料，日常清洁只需湿巾擦拭；金属部件采用电镀工艺，防锈耐磨。',
    specs: { '尺寸': '65×66×56cm (2号箱)', '净重': '28kg', '颜色': '可定制', '材质': '皮革/电镀/不锈钢', '可订做': '上座加脚踏/加大加粗/高边银圆' },
    image: 'images/beauty/yueya.jpg'
  },
  {
    id: 'mianbao',
    name: '面包椅',
    category: 'beauty',
    price: '425-475',
    desc: '经典面包造型，圆润可爱设计',
    longDesc: '经典面包造型：圆润饱满的外观设计，可爱又不失格调，是美容院、理发店的经典选择。\n舒适坐感：高弹海绵填充，坐感柔软舒适，长时间使用也不易塌陷。\n结实耐用：优质材料打造，结构稳固，使用寿命长。',
    specs: { '尺寸': '参考尺寸图', '净重': '26kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '可定制' },
    image: 'images/beauty/mianbao.jpg'
  },
  {
    id: 't-type',
    name: 'T型理发椅',
    category: 'beauty',
    price: '410-460',
    desc: '经典T型设计，复古理发店风格',
    longDesc: '经典T型设计：传承经典理发椅造型，T型靠背设计复古大气，适合传统与现代美发沙龙。\n优质皮质：选用高品质皮革，耐用好打理，触感舒适。\n稳固结构：重型底座设计，承重力强，使用安全可靠。\n多功能调节：支持升降旋转，满足不同服务需求。',
    specs: { '尺寸': '参考尺寸图', '净重': '30kg', '颜色': '黑色/可定制', '材质': '皮革/电镀/不锈钢', '可订做': '可定制' },
    image: 'images/beauty/t-type.jpg'
  },
  {
    id: 'xuankong',
    name: '玄空日式款',
    category: 'beauty',
    price: '460-510',
    desc: '日式极简美学，轻量设计自由摆放',
    longDesc: '轻量设计，空间自在：日式极简美学与轻量化科技的融合，一人即可轻松挪动。\n云端坐感，久坐不累：高密度记忆棉坐垫贴合人体曲线，弧形靠背承托肩颈。\n颜值即正义：米白皮质与哑光金属支架碰撞出侘寂风高级感，既是美容工具，更是空间艺术品。\n细节见匠心：防水防污皮质易清洁，静音升降系统不打扰疗愈氛围。',
    specs: { '尺寸': '63×60×58cm (3号箱)', '净重': '26kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '圆盘/上座加脚踏' },
    image: 'images/beauty/xuankong.jpg'
  },
  {
    id: 'round-25',
    name: '25圆扶手椅',
    category: 'home',
    price: '440-510',
    desc: '圆润设计，撞色细节，极简家居风',
    longDesc: '包裹式承托设计：弧形靠背 + 一体化扶手，贴合肩颈与腰背曲线。\n高弹软包材质：坐垫/靠背采用高密度软包 + 细腻皮革，触感柔软且回弹性好。\n360° 旋转底座：顺滑旋转 + 稳固底盘，灵活转向。\n极简流线造型：一体化弧形外观，线条流畅利落。\n撞色细节点睛：扶手处的黑白撞色设计，打破纯色单调感。',
    specs: { '尺寸': '63×60×58cm', '净重': '28kg', '颜色': '可订做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/home/25-round.png'
  },
  {
    id: 'round-28',
    name: '28圆悬空椅',
    category: 'home',
    price: '410-480',
    desc: '悬空设计，简约大气，家用百搭',
    longDesc: '外观质感：黑色皮质面料 + 金属框架，简约大气还显档次，适配家居、美容等多种场景。\n功能实用：带升降 + 旋转功能，配合可调节靠背，能适配不同身高。\n耐用性：皮质面料好清洁，金属框架承重力强，属于"用得久、维护省"的类型。\n定位精准：主打高档标签，提升家居空间的专业形象。',
    specs: { '尺寸': '63×60×58cm (3号箱)', '净重': '28kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '上座(加脚踏)' },
    image: 'images/home/28-round.jpg'
  },
  {
    id: 'mfy-17',
    name: 'MFY-17 美容椅',
    category: 'beauty',
    price: '430-500',
    desc: '圆润复古造型，亮面镀铬金属框架',
    longDesc: '圆润复古造型：饱满弧形靠背 + 简约扶手，线条柔和优雅，兼具复古感与现代轻奢风，适配各类沙龙、美容会所。\n高质感耐磨皮质：选用加厚防水 PU 皮/仿真皮，触感柔软亲肤，耐刮防污易清洁。\n亮面镀铬金属框架：镜面抛光不锈钢支架与底盘，光泽感十足。',
    specs: { '尺寸': '50×49×95cm', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆/加大加粗/上座' },
    image: 'images/beauty/mfy-17.jpg'
  },
  {
    id: 'mfy-18',
    name: 'MFY-18 美容椅',
    category: 'beauty',
    price: '480-550',
    desc: '复古方正造型，金属包边设计',
    longDesc: '复古方正造型：利落的直角线条 + 金属包边设计，自带复古工业风质感，适配美式沙龙、复古理发店。\n高质感耐磨皮质：选用加厚防水 PU 皮/仿真皮，触感柔软亲肤，耐刮防污易清洁。\n亮面镀铬金属框架：镜面抛光不锈钢支架与底盘，与皮质形成经典对比。',
    specs: { '尺寸': '52×52×100cm', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆/加大加粗/上座' },
    image: 'images/beauty/mfy-18.jpg'
  },
  {
    id: 'mfy-19',
    name: 'MFY-19 美容椅',
    category: 'beauty',
    price: '410-460',
    desc: '优雅包裹式设计，高端轻奢之选',
    longDesc: '优雅包裹式设计：流畅弧形靠背与扶手一体成型，线条柔和饱满，自带轻奢高级感，适配高端沙龙、美容会所。\n高质感耐磨皮质：选用加厚防水 PU 皮/仿真皮，触感柔软亲肤，耐刮防污易清洁。\n亮面镀铬金属框架：镜面抛光不锈钢支架与底盘，光泽感十足。',
    specs: { '尺寸': '54×45×95cm', '净重': '30kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '电镀/不锈钢/高边银圆/加大加粗/上座' },
    image: 'images/beauty/mfy-19.jpg'
  },
  {
    id: 'new-t-type',
    name: '新T型扶手椅',
    category: 'home',
    price: '400-440',
    desc: '升级T型设计，棕皮银架时尚款',
    longDesc: '升级T型设计：在经典T型基础上优化线条，更符合现代家居审美。\n棕皮银架配色：棕色皮质搭配银色金属支架，时尚大气。\n优质材料：高品质皮革和金属材料，稳固耐用。\n多种场景：适合家庭、会所、美容院等多种空间。',
    specs: { '尺寸': '参考尺寸图', '净重': '28kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '可定制' },
    image: 'images/home/t2-type.jpg'
  },
  {
    id: 't2-type',
    name: 'T型2 扶手椅',
    category: 'home',
    price: '410-460',
    desc: '经典T型升级版，黑皮银架时尚款',
    longDesc: '轻奢质感：高光泽镀铬金属支架搭配细腻亲肤皮革，流畅弧线勾勒优雅造型。\n工学设计：贴合人体背部曲线的靠背，预留通透坐感空间，躺卧体验舒适无压。\n灵活升降：液压升降搭配稳固圆盘底座，旋转顺滑不晃动。\n适配多种场景：适合家居、会所、美容院等多种空间。',
    specs: { '尺寸': '参考尺寸图', '净重': '28kg', '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '加大加粗/高边银圆' },
    image: 'images/home/t2-black.jpg'
  },
  {
    id: 'daishangjia',
    name: '待上架 新款沙发椅',
    category: 'home',
    price: '450-520',
    desc: '新款到货，时尚家居百搭款',
    longDesc: '新款到货：最新设计款式，时尚大气。\n优质材料：精选皮革和金属材料，品质保证。\n舒适坐感：人体工学设计，提供舒适的坐感体验。\n多种场景：适合客厅、书房、卧室等多种家居空间。',
    specs: { '颜色': '可定做', '材质': '皮革/电镀/不锈钢', '可订做': '可定制' },
    image: 'images/home/daishangjia.jpg'
  }
];

function renderProducts(containerId, filter = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  container.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="location.href='product-detail.html?id=${p.id}'">
      <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.src='https://via.placeholder.com/300x220?text=${encodeURIComponent(p.name)}'">
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-price">¥${p.price} <span>/ 起</span></div>
      </div>
    </div>
  `).join('');
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts('productGrid', btn.dataset.filter);
    });
  });
}

let galleryIndex = 0;
let galleryImages = [];

function loadProductDetail() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const product = products.find(p => p.id === id);
  if (!product) {
    document.querySelector('.detail-wrap').innerHTML = '<p style="text-align:center;padding:40px;font-size:16px">未找到该商品</p>';
    return;
  }

  document.getElementById('productName').textContent = product.name;
  document.getElementById('breadcrumbName').textContent = product.name;
  document.getElementById('productPrice').textContent = `¥${product.price}`;
  document.getElementById('productDesc').textContent = product.desc;
  document.getElementById('productLongDesc').textContent = product.longDesc;

  const meta = document.getElementById('productMeta');
  if (product.specs) {
    meta.innerHTML = Object.entries(product.specs).map(([k, v]) =>
      `<div class="meta-item"><span class="meta-label">${k}</span><span class="meta-value">${v}</span></div>`
    ).join('');
  }

  document.getElementById('buyNow').href = `payment.html?id=${product.id}`;
  document.getElementById('contactAbout').href = `contact.html?product=${encodeURIComponent(product.name)}`;

  loadGallery(product);
}

function loadGallery(product) {
  galleryImages = [product.image];

  const galleryPath = 'images/gallery/' + product.id;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', galleryPath, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const parser = new DOMParser();
      const html = parser.parseFromString(xhr.responseText, 'text/html');
      const links = html.querySelectorAll('a');
      const imgs = [];
      links.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href && (href.endsWith('.jpg') || href.endsWith('.png'))) {
          imgs.push(galleryPath + '/' + href);
        }
      });
      if (imgs.length > 0) {
        galleryImages = imgs;
      }
    }
    renderGallery();
  };
  xhr.onerror = function() {
    renderGallery();
  };
  xhr.send();
}

function renderGallery() {
  const main = document.getElementById('productImage');
  const thumbs = document.getElementById('galleryThumbs');
  galleryIndex = 0;

  if (galleryImages.length === 0) {
    main.src = 'https://via.placeholder.com/600x400?text=' + encodeURIComponent(product.name);
    return;
  }

  main.src = galleryImages[0];
  main.onerror = function() {
    this.src = 'https://via.placeholder.com/600x400?text=' + encodeURIComponent(product.name);
  };

  if (galleryImages.length <= 1) {
    document.querySelector('.gallery-nav.prev').style.display = 'none';
    document.querySelector('.gallery-nav.next').style.display = 'none';
    return;
  }

  thumbs.innerHTML = galleryImages.map((img, i) =>
    '<img src="' + img + '" class="' + (i === 0 ? 'active' : '') + '" onclick="galleryGoTo(' + i + ')" onerror="this.style.display=\'none\'">'
  ).join('');
}

function galleryGoTo(index) {
  galleryIndex = index;
  document.getElementById('productImage').src = galleryImages[index];
  document.querySelectorAll('.gallery-thumbs img').forEach(function(img, i) {
    img.classList.toggle('active', i === index);
  });
}

function galleryPrev() {
  const i = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  galleryGoTo(i);
}

function galleryNext() {
  const i = (galleryIndex + 1) % galleryImages.length;
  galleryGoTo(i);
}

function loadPayment() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const product = products.find(p => p.id === id);
  if (product) {
    document.getElementById('orderItems').innerHTML = `
      <div class="order-item">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/70?text=${encodeURIComponent(product.name)}'">
        <div class="order-item-info">
          <h4>${product.name}</h4>
          <p>¥${product.price}</p>
        </div>
      </div>
    `;
    document.getElementById('orderTotal').innerHTML = `¥${product.price.split('-')[0]}`;
    document.getElementById('productId').value = product.id;
    document.getElementById('productNameInput').value = product.name;
  }
}

function initContactForm() {
  const params = new URLSearchParams(location.search);
  const product = params.get('product');
  if (product) {
    document.getElementById('contactMessage').value = `您好，我想咨询"${product}"的详细信息。`;
  }
}

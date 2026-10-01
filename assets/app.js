// ---------------------------------------------------------------------------
// V.M.P.S homepage — bilingual (English / Arabic) runtime.
// Plain classic script (no build step required). Works with Live Server,
// a static file open, or any static host.
// Keys match the data-i18n / data-i18n-placeholder attributes in index.html.
// ---------------------------------------------------------------------------
(function () {
  'use strict'

  var translations = {
    en: {
      'doc.title': 'V.M.P.S — Vortex Multi Petroleum Services',
      'devnote': 'MOCKUP REFERENCE FOR DEVELOPMENT — COPY DRAFT, CONTACT DETAILS ARE PLACEHOLDERS',
      'lang.toggle': 'عربي',

      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.why': 'Why Us',
      'nav.distributors': 'Distributors',
      'nav.locations': 'Locations',
      'nav.contact': 'Contact',
      'header.cta': 'Request a Service',

      'hero.eyebrow': 'UK Head Office · Tripoli · Benghazi',
      'hero.title': "Keeping Libya's oil operations running.",
      'hero.lead': 'V.M.P.S supplies parts and tools, and delivers after-sales support and maintenance to oil companies across Libya — backed by UK standards and teams on the ground.',
      'hero.cta1': 'Request a Service',
      'hero.cta2': 'View Our Services',

      'stat1.label': 'Years registered and working in Libya',
      'stat2.label': 'Offices — UK HQ, Tripoli & Benghazi',
      'stat3.label': 'Core services, end to end',
      'stat4.label': 'Focused on oil & gas',

      'about.eyebrow': 'About V.M.P.S',
      'about.title': "A UK company, built for Libya's oil sector",
      'about.p1': 'Vortex Multi Petroleum Services Ltd (V.M.P.S) is a UK-based company operating across Libya, dedicated to supporting the oil and gas industry with reliable, high-quality service.',
      'about.p2': 'We work directly with oil companies throughout the country, supplying the parts and tools their operations depend on, and standing behind every delivery with responsive after-sales support and ongoing maintenance.',
      'about.p3': "Our model pairs UK and European sourcing standards and quality control with a genuine local presence — teams based in Libya who understand the pace and demands of field operations. That combination lets us respond quickly, communicate clearly, and keep our clients' equipment running with minimal disruption.",
      'about.p4': 'In Libya, our operations are carried out through our sister company, Al-Moobda Al-Masi Company for Importing Industrial and Marine Equipment, which manages local registration, import, and on-the-ground activity on our behalf.',
      'about.sister.tag': 'Sister Company',
      'about.sister.name': 'Al-Moobda Al-Masi Company',
      'about.sister.desc': 'Importing Industrial & Marine Equipment — our Libya-based sister company handling local operations.',
      'about.sister.cta': 'Visit Al-Moobda Al-Masi →',
      'about.tag1.k': 'Standard',
      'about.tag1.v': 'UK & European sourcing, quality control',
      'about.tag2.k': 'Presence',
      'about.tag2.v': 'Local teams in Tripoli & Benghazi',
      'about.tag3.k': 'Focus',
      'about.tag3.v': 'Exclusively oil & gas clients',
      'about.tag4.k': 'Coverage',
      'about.tag4.v': 'Support across Libya',

      'services.eyebrow': 'What We Do',
      'services.title': 'Services',
      'services.lead': 'Four core services, delivered as one continuous line of support — from first supply to ongoing maintenance.',
      'svc1.title': 'Parts Supply',
      'svc1.desc': "Sourcing and supplying industrial parts and components for oil and gas operations, matched to each client's equipment and specifications.",
      'svc2.title': 'Tools Supply',
      'svc2.desc': 'Providing the operational and maintenance tools field teams need for day-to-day work at oil facilities and job sites.',
      'svc3.title': 'After-Sales Support',
      'svc3.desc': "Ongoing support once parts and tools are in the field — consultation, troubleshooting, and replacement when it's needed.",
      'svc4.title': 'Maintenance',
      'svc4.desc': 'Scheduled and emergency maintenance for equipment and machinery, aimed at reducing downtime and keeping operations on track.',

      'why.eyebrow': 'Why Choose Us',
      'why.title': 'UK standards. Libyan ground presence.',
      'why.lead': "Two things clients tell us matter most: consistency, and speed of response. Here's how we hold both.",
      'why1.t': 'UK Standards',
      'why1.d': 'Quality control and sourcing discipline built on UK business standards, with parts and tools sourced from across the UK and Europe.',
      'why2.t': 'Local Presence',
      'why2.d': 'Two offices inside Libya mean faster response and teams who know the ground.',
      'why3.t': 'Industry Focus',
      'why3.d': "We work exclusively within oil and gas — our attention isn't divided.",
      'why4.t': 'End-to-End Support',
      'why4.d': 'From initial supply through after-sales and maintenance, one team carries it through.',

      'dist.eyebrow': 'Authorized Distributors',
      'dist.title': 'Our sister company holds the following distributorships',
      'dist.lead': 'Alongside our import and sourcing services, our Libya-based sister company, Al-Moobda Al-Masi, holds official dealership status for the products of the manufacturers below — giving clients across Libya direct access to genuine equipment and materials backed by manufacturer authorization.',
      'dist.dealer': 'Authorized Dealer',
      'dealer1.name': 'Şahinler Metal Makina Endüstri A.Ş.',
      'dealer1.loc': 'Bursa, Turkey',
      'dealer1.desc': 'Authorised dealer for the full range of machines manufactured by Şahinler — including 4-roll plate bending machines, tube/pipe bending machines, hydraulic ironworkers, hydraulic presses, and more.',
      'dealer2.name': 'Platin Polymer Chemistry',
      'dealer2.loc': 'Turkey',
      'dealer2.desc': 'Authorised dealer for the sale and application of floor coating chemicals manufactured by Platin Polymer Chemistry.',

      'clients.eyebrow': 'Our Clients',
      'clients.title': "Registered and working with Libya's leading companies for over 10 years",
      'clients.intro': 'We are proud to have been registered and working with the following companies for over a decade, among <strong>many other Libyan companies</strong> we are also registered with:',
      'client.label': 'Client',
      'client1': 'Brega Oil Marketing Company',
      'client2': 'Arabian Gulf Oil Company (AGOCO)',
      'client3': 'The Great Man-Made River Project',
      'clients.note': 'These are three of our main clients. We are also registered with many other Libyan companies across various industries.',

      'loc.eyebrow': 'Where We Operate',
      'loc.title': 'Two offices in Libya, one UK standard',
      'loc.lead': 'V.M.P.S is headquartered in the UK and operates two offices in Libya, positioned to support oil companies across the country.',
      'route.hq': 'HQ',
      'route.hq.place': 'United Kingdom',
      'route.branch': 'Branch',
      'route.tripoli': 'Tripoli, Libya',
      'route.benghazi': 'Benghazi, Libya',
      'loc1.k': 'Head Office',
      'loc1.title': 'United Kingdom',
      'loc1.desc': 'Company headquarters, overseeing UK and European sourcing, quality control, and international coordination.',
      'loc2.k': 'Branch Offices',
      'loc2.title': 'Tripoli & Benghazi, Libya',
      'loc2.desc1': 'Two branch offices supporting oil companies operating across Libya with parts, tools, and maintenance response.',
      'loc2.desc2': 'Already registered with major Libyan operators, including Brega Oil Marketing Company, Arabian Gulf Oil Company (AGOCO), and The Great Man-Made River Project — among many others.',

      'contact.eyebrow': 'Get In Touch',
      'contact.title': 'Talk to our team',
      'contact.lead': 'Send a message and let us know which office is closest to your operation.',
      'contact.email.k': 'Email',
      'contact.phuk.k': 'Phone — UK',
      'contact.phly.k': 'Phone — Libya',
      'contact.offices.k': 'Offices',
      'contact.offices.v': 'United Kingdom (HQ) · Tripoli · Benghazi',
      'placeholder.tag': 'PLACEHOLDER',
      'form.name': 'Full Name',
      'form.name.ph': 'Your name',
      'form.company': 'Company',
      'form.company.ph': 'Company name',
      'form.email': 'Email',
      'form.office': 'Office of Interest',
      'form.office.uk': 'UK',
      'form.office.libya': 'Libya',
      'form.message': 'Message',
      'form.message.ph': 'Tell us what you need...',
      'form.submit': 'Send Message',

      'footer.navigate': 'Navigate',
      'footer.offices': 'Offices',
      'footer.contact': 'Contact',
      'footer.uk': 'United Kingdom (HQ)',
      'footer.tripoli': 'Tripoli, Libya',
      'footer.benghazi': 'Benghazi, Libya',
      'footer.reqservice': 'Request a Service',
      'footer.copy': '© 2026 Vortex Multi Petroleum Services Ltd. All rights reserved.',
      'footer.sitemap': 'Site map mockup — for development reference',
    },

    ar: {
      'doc.title': 'V.M.P.S — فورتكس لخدمات النفط المتعددة',
      'devnote': 'نموذج أولي مرجعي لأغراض التطوير — المحتوى مبدئي وبيانات الاتصال مؤقتة',
      'lang.toggle': 'EN',

      'nav.about': 'من نحن',
      'nav.services': 'خدماتنا',
      'nav.why': 'لماذا نحن',
      'nav.distributors': 'الوكالات',
      'nav.locations': 'مواقعنا',
      'nav.contact': 'اتصل بنا',
      'header.cta': 'اطلب خدمة',

      'hero.eyebrow': 'المقر الرئيسي بالمملكة المتحدة · طرابلس · بنغازي',
      'hero.title': 'نُبقي عمليات النفط في ليبيا مستمرّة.',
      'hero.lead': 'تورّد V.M.P.S قطع الغيار والأدوات، وتقدّم خدمات ما بعد البيع والصيانة لشركات النفط في جميع أنحاء ليبيا — مدعومةً بمعايير بريطانية وفرق عمل على الأرض.',
      'hero.cta1': 'اطلب خدمة',
      'hero.cta2': 'تصفّح خدماتنا',

      'stat1.label': 'سنوات من التسجيل والعمل في ليبيا',
      'stat2.label': 'مكاتب — المقر بالمملكة المتحدة وطرابلس وبنغازي',
      'stat3.label': 'خدمات أساسية، من البداية إلى النهاية',
      'stat4.label': 'تركيز كامل على النفط والغاز',

      'about.eyebrow': 'عن V.M.P.S',
      'about.title': 'شركة بريطانية، مبنيّة لقطاع النفط الليبي',
      'about.p1': 'شركة Vortex Multi Petroleum Services Ltd ‏(V.M.P.S) شركة مقرّها المملكة المتحدة وتعمل في جميع أنحاء ليبيا، متخصّصة في دعم صناعة النفط والغاز بخدمات موثوقة وعالية الجودة.',
      'about.p2': 'نعمل مباشرةً مع شركات النفط في مختلف أنحاء البلاد، فنورّد قطع الغيار والأدوات التي تعتمد عليها عملياتها، وندعم كل عملية توريد بخدمات ما بعد البيع السريعة والصيانة المستمرة.',
      'about.p3': 'يجمع نموذجنا بين معايير التوريد ومراقبة الجودة البريطانية والأوروبية وبين حضور محلي حقيقي — فرق مقرّها ليبيا تدرك إيقاع العمليات الميدانية ومتطلباتها. وهذا المزيج يتيح لنا الاستجابة السريعة والتواصل الواضح والحفاظ على تشغيل معدات عملائنا بأقل قدر من التوقف.',
      'about.p4': 'في ليبيا، تُنفَّذ عملياتنا عبر شركتنا الشقيقة، شركة المبدع الماسي لاستيراد المعدات الصناعية والبحرية، التي تتولّى التسجيل المحلي والاستيراد والأنشطة الميدانية نيابةً عنّا.',
      'about.sister.tag': 'الشركة الشقيقة',
      'about.sister.name': 'شركة المبدع الماسي',
      'about.sister.desc': 'لاستيراد المعدات الصناعية والبحرية — شركتنا الشقيقة في ليبيا التي تدير العمليات المحلية.',
      'about.sister.cta': '← زيارة المبدع الماسي',
      'about.tag1.k': 'المعيار',
      'about.tag1.v': 'توريد بريطاني وأوروبي ومراقبة جودة',
      'about.tag2.k': 'الحضور',
      'about.tag2.v': 'فرق محلية في طرابلس وبنغازي',
      'about.tag3.k': 'التركيز',
      'about.tag3.v': 'عملاء النفط والغاز حصراً',
      'about.tag4.k': 'التغطية',
      'about.tag4.v': 'دعم في جميع أنحاء ليبيا',

      'services.eyebrow': 'ماذا نقدّم',
      'services.title': 'خدماتنا',
      'services.lead': 'أربع خدمات أساسية تُقدَّم كخطّ دعم متواصل — من التوريد الأول إلى الصيانة المستمرة.',
      'svc1.title': 'توريد قطع الغيار',
      'svc1.desc': 'توريد قطع الغيار والمكوّنات الصناعية لعمليات النفط والغاز، بما يتوافق مع معدّات ومواصفات كل عميل.',
      'svc2.title': 'توريد الأدوات',
      'svc2.desc': 'توفير أدوات التشغيل والصيانة التي تحتاجها الفرق الميدانية في منشآت النفط ومواقع العمل اليومية.',
      'svc3.title': 'دعم ما بعد البيع',
      'svc3.desc': 'دعم مستمر بعد وصول القطع والأدوات إلى الميدان — استشارات وحلّ للمشكلات واستبدال عند الحاجة.',
      'svc4.title': 'الصيانة',
      'svc4.desc': 'صيانة دورية وطارئة للمعدات والآلات، بهدف تقليل التوقف والحفاظ على سير العمليات.',

      'why.eyebrow': 'لماذا تختارنا',
      'why.title': 'معايير بريطانية. وحضور ميداني ليبي.',
      'why.lead': 'أمران يؤكّد عملاؤنا أنهما الأهم: الثبات، وسرعة الاستجابة. وإليك كيف نحقّق كليهما.',
      'why1.t': 'معايير بريطانية',
      'why1.d': 'مراقبة جودة وانضباط في التوريد مبنيّان على معايير الأعمال البريطانية، مع توريد القطع والأدوات من مختلف أنحاء المملكة المتحدة وأوروبا.',
      'why2.t': 'حضور محلي',
      'why2.d': 'مكتبان داخل ليبيا يعنيان استجابة أسرع وفرقاً تعرف الميدان جيداً.',
      'why3.t': 'تخصّص في القطاع',
      'why3.d': 'نعمل حصراً في مجال النفط والغاز — فاهتمامنا غير مُشتّت.',
      'why4.t': 'دعم متكامل',
      'why4.d': 'من التوريد الأول وحتى ما بعد البيع والصيانة، فريق واحد يتابع العمل حتى النهاية.',

      'dist.eyebrow': 'وكالات معتمدة',
      'dist.title': 'تمتلك شركتنا الشقيقة الوكالات التالية',
      'dist.lead': 'إلى جانب خدمات الاستيراد والتوريد، تمتلك شركتنا الشقيقة في ليبيا، المبدع الماسي، صفة الوكيل الرسمي لمنتجات الشركات المصنّعة أدناه — مما يمنح العملاء في جميع أنحاء ليبيا وصولاً مباشراً إلى معدات ومواد أصلية مدعومة بتفويض من المصنّع.',
      'dist.dealer': 'وكيل معتمد',
      'dealer1.name': 'Şahinler Metal Makina Endüstri A.Ş.',
      'dealer1.loc': 'بورصة، تركيا',
      'dealer1.desc': 'وكيل معتمد لكامل تشكيلة الآلات التي تصنّعها شركة Şahinler — بما في ذلك آلات ثني الصفائح رباعية الأسطوانات، وآلات ثني الأنابيب، والمقصّات الهيدروليكية، والمكابس الهيدروليكية، وغيرها.',
      'dealer2.name': 'Platin Polymer Chemistry',
      'dealer2.loc': 'تركيا',
      'dealer2.desc': 'وكيل معتمد لبيع وتطبيق كيماويات طلاء الأرضيات التي تنتجها شركة Platin Polymer Chemistry.',

      'clients.eyebrow': 'عملاؤنا',
      'clients.title': 'مسجّلون ونعمل مع كبرى الشركات الليبية منذ أكثر من 10 سنوات',
      'clients.intro': 'نفخر بأننا مسجّلون ونعمل مع الشركات التالية منذ أكثر من عقد، إلى جانب <strong>العديد من الشركات الليبية الأخرى</strong> المسجّلين لديها أيضاً:',
      'client.label': 'عميل',
      'client1': 'شركة البريقة لتسويق النفط',
      'client2': 'شركة الخليج العربي للنفط (أجوكو)',
      'client3': 'مشروع النهر الصناعي العظيم',
      'clients.note': 'هؤلاء ثلاثة من عملائنا الرئيسيين. ونحن مسجّلون أيضاً لدى العديد من الشركات الليبية في قطاعات مختلفة.',

      'loc.eyebrow': 'أين نعمل',
      'loc.title': 'مكتبان في ليبيا، ومعيار بريطاني واحد',
      'loc.lead': 'يقع المقر الرئيسي لـ V.M.P.S في المملكة المتحدة، وتدير مكتبين في ليبيا موزّعَين لدعم شركات النفط في جميع أنحاء البلاد.',
      'route.hq': 'المقر',
      'route.hq.place': 'المملكة المتحدة',
      'route.branch': 'فرع',
      'route.tripoli': 'طرابلس، ليبيا',
      'route.benghazi': 'بنغازي، ليبيا',
      'loc1.k': 'المقر الرئيسي',
      'loc1.title': 'المملكة المتحدة',
      'loc1.desc': 'المقر الرئيسي للشركة، ويشرف على التوريد البريطاني والأوروبي ومراقبة الجودة والتنسيق الدولي.',
      'loc2.k': 'المكاتب الفرعية',
      'loc2.title': 'طرابلس وبنغازي، ليبيا',
      'loc2.desc1': 'مكتبان فرعيان يدعمان شركات النفط العاملة في جميع أنحاء ليبيا بالقطع والأدوات والاستجابة للصيانة.',
      'loc2.desc2': 'مسجّلون بالفعل لدى كبار المشغّلين الليبيين، بما في ذلك شركة البريقة لتسويق النفط، وشركة الخليج العربي للنفط (أجوكو)، ومشروع النهر الصناعي العظيم — إلى جانب العديد غيرهم.',

      'contact.eyebrow': 'تواصل معنا',
      'contact.title': 'تحدّث مع فريقنا',
      'contact.lead': 'أرسل رسالة وأخبرنا بأقرب مكتب إلى موقع عملك.',
      'contact.email.k': 'البريد الإلكتروني',
      'contact.phuk.k': 'الهاتف — المملكة المتحدة',
      'contact.phly.k': 'الهاتف — ليبيا',
      'contact.offices.k': 'المكاتب',
      'contact.offices.v': 'المملكة المتحدة (المقر) · طرابلس · بنغازي',
      'placeholder.tag': 'مؤقّت',
      'form.name': 'الاسم الكامل',
      'form.name.ph': 'اسمك',
      'form.company': 'الشركة',
      'form.company.ph': 'اسم الشركة',
      'form.email': 'البريد الإلكتروني',
      'form.office': 'المكتب المعني',
      'form.office.uk': 'المملكة المتحدة',
      'form.office.libya': 'ليبيا',
      'form.message': 'الرسالة',
      'form.message.ph': 'أخبرنا بما تحتاجه...',
      'form.submit': 'إرسال الرسالة',

      'footer.navigate': 'تصفّح',
      'footer.offices': 'المكاتب',
      'footer.contact': 'اتصل',
      'footer.uk': 'المملكة المتحدة (المقر)',
      'footer.tripoli': 'طرابلس، ليبيا',
      'footer.benghazi': 'بنغازي، ليبيا',
      'footer.reqservice': 'اطلب خدمة',
      'footer.copy': '© 2026 شركة Vortex Multi Petroleum Services Ltd. جميع الحقوق محفوظة.',
      'footer.sitemap': 'خريطة الموقع (نموذج) — لأغراض التطوير',
    },
  }

  var STORAGE_KEY = 'vmps-lang'

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.en
    var html = document.documentElement
    html.setAttribute('lang', lang)
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')

    var nodes = document.querySelectorAll('[data-i18n]')
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i]
      var key = el.getAttribute('data-i18n')
      var value = dict[key]
      if (value == null) continue
      if (key === 'doc.title') {
        document.title = value
        continue
      }
      if (value.indexOf('<') !== -1) {
        el.innerHTML = value
      } else {
        el.textContent = value
      }
    }

    var phNodes = document.querySelectorAll('[data-i18n-placeholder]')
    for (var j = 0; j < phNodes.length; j++) {
      var pel = phNodes[j]
      var pkey = pel.getAttribute('data-i18n-placeholder')
      var pval = dict[pkey]
      if (pval != null) pel.setAttribute('placeholder', pval)
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }

  function initI18n() {
    var saved = 'en'
    try {
      saved = localStorage.getItem(STORAGE_KEY) || 'en'
    } catch (e) {
      /* ignore */
    }
    // Allow deep-linking a language via ?lang=ar / ?lang=en
    var urlLang = new URLSearchParams(window.location.search).get('lang')
    if (urlLang === 'ar' || urlLang === 'en') saved = urlLang
    applyLanguage(saved)

    var toggle = document.getElementById('lang-toggle')
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en'
        applyLanguage(current === 'ar' ? 'en' : 'ar')
      })
    }
  }

  // -------------------------------------------------------------------------
  // Motion: scroll-reveal + stat count-up (both respect prefers-reduced-motion)
  // -------------------------------------------------------------------------
  var prefersReduced = false
  try {
    prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch (e) {
    /* ignore */
  }

  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0
    var suffix = el.getAttribute('data-suffix') || ''
    if (prefersReduced) {
      el.textContent = target + suffix
      return
    }
    var duration = 1100
    var start = null
    function frame(ts) {
      if (start === null) start = ts
      var p = Math.min((ts - start) / duration, 1)
      var eased = 1 - Math.pow(1 - p, 3) // ease-out cubic
      el.textContent = Math.round(target * eased) + (p === 1 ? suffix : '')
      if (p < 1) requestAnimationFrame(frame)
      else if (suffix) el.innerHTML = target + '<span class="suffix">' + suffix + '</span>'
    }
    requestAnimationFrame(frame)
  }

  function initMotion() {
    var revealEls = document.querySelectorAll(
      '.section-head, .about-tags, .about-body, .service-card, .why-item, ' +
        '.dealer-card, .client-card, .trusted-note, .route-diagram, .loc-card, ' +
        '.contact-info-item, form, .stat'
    )

    if (prefersReduced || !('IntersectionObserver' in window)) {
      for (var i = 0; i < revealEls.length; i++) revealEls[i].classList.add('in')
      var nums = document.querySelectorAll('.stat .num[data-count]')
      for (var n = 0; n < nums.length; n++) countUp(nums[n])
      return
    }

    for (var k = 0; k < revealEls.length; k++) revealEls[k].classList.add('reveal')

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return
          var el = entry.target
          el.classList.add('in')
          var num = el.classList.contains('stat') ? el.querySelector('.num[data-count]') : null
          if (num) countUp(num)
          observer.unobserve(el)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )

    for (var m = 0; m < revealEls.length; m++) observer.observe(revealEls[m])
  }

  function initNav() {
    var header = document.querySelector('header')
    var toggle = document.getElementById('nav-toggle')
    var nav = document.getElementById('primary-nav')
    if (!header || !toggle || !nav) return

    function close() {
      header.classList.remove('nav-open')
      toggle.setAttribute('aria-expanded', 'false')
    }

    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open')
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    })

    // Close the menu after choosing a destination
    var links = nav.querySelectorAll('a')
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', close)
    }

    // Close on Escape and when resizing back to desktop
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close()
    })
    window.addEventListener('resize', function () {
      if (window.innerWidth > 980) close()
    })
  }

  function init() {
    initI18n()
    initNav()
    initMotion()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()

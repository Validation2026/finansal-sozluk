const sourceInspiredTerms = [
  "Açık Bankacılık",
  "Açık Bankacılık Ekosistemi",
  "Açık Bankacılık Platformu",
  "Anlık Ödeme Hizmetleri",
  "API",
  "API Anahtarı",
  "API Analitiği",
  "API Bankacılığı",
  "API Dokümantasyonu",
  "API Entegrasyon Modelleri",
  "API Güvenliği",
  "API Yetkilendirme",
  "Banka API Entegrasyonu",
  "Banka Bilgi Güvenliği",
  "Banka Hesabı Takibi",
  "Banka Veri Paylaşımı",
  "Blockchain Teknolojisi",
  "Çift Faktörlü Kimlik Doğrulama",
  "Çoklu Bankacılık",
  "Dijital Bankacılık",
  "Dijital Cüzdanlar",
  "Dijital Finans",
  "Dijital Kimlik Doğrulama",
  "Dijital Ödeme Sistemleri",
  "E-Ödeme",
  "E-Para Kuruluşu",
  "ERP Entegrasyonu",
  "Fatura Ödeme Hizmetleri",
  "Finansal Eğitim Uygulamaları",
  "Finansal Entegrasyon",
  "Finansal Teknoloji",
  "Hesap Bilgisi Paylaşımı",
  "İşlem API'ları",
  "İzin Yönetimi",
  "Katılım Bankacılığı",
  "Kimlik Doğrulama",
  "Kişisel Finans Yönetimi",
  "Mali Veri Entegrasyonu",
  "Mobil Bankacılık",
  "Müşteri Bilgi Paylaşımı",
  "Müşteri Kimlik Doğrulama",
  "Ödeme Hizmet Sağlayıcıları",
  "Online Banka Entegrasyonu",
  "PSD2",
  "Risk Yönetimi",
  "Sanal Bankacılık",
  "Sanal Kartlar",
  "Şifreleme",
  "Sınırlı Veri Erişimi",
  "Şube Dışı Hizmetler",
  "Üçüncü Taraf Hizmet Sağlayıcıları",
  "Veri Analitiği",
  "Veri Entegrasyonu",
  "Veri Gizliliği",
  "Veri Güvenliği",
  "Veri Paylaşımı",
  "Veri Sahipliği",
  "Veri Şifreleme",
  "Web Servisleri",
  "Yetkilendirme",
];

const categories = [
  "Açık Bankacılık ve FinTech",
  "Bankacılık Ürünleri",
  "Kredi Riski",
  "Piyasa Riski",
  "Likidite Riski",
  "Operasyonel Risk",
  "Sermaye ve Basel",
  "Muhasebe ve Raporlama",
  "Finansal Piyasalar",
  "Ödeme Sistemleri",
  "Regülasyon ve Uyum",
  "Kurumsal Finans",
];

const curatedTerms = [
  ["Beklenen Kredi Zararı", "Kredi Riski", "Bir kredi portföyünde temerrüt olasılığı, temerrüt anındaki bakiye ve kayıp oranı birlikte dikkate alınarak hesaplanan tahmini zarar tutarıdır."],
  ["PD", "Kredi Riski", "Probability of Default ifadesinin kısaltmasıdır; borçlunun belirli bir zaman ufkunda temerrüde düşme olasılığını gösterir."],
  ["LGD", "Kredi Riski", "Loss Given Default ifadesinin kısaltmasıdır; temerrüt gerçekleştiğinde tahsil edilemeyen kısmın oransal karşılığını anlatır."],
  ["EAD", "Kredi Riski", "Exposure at Default ifadesinin kısaltmasıdır; borçlunun temerrüde düştüğü andaki beklenen risk bakiyesini ifade eder."],
  ["Stage 1", "Muhasebe ve Raporlama", "IFRS 9 kapsamında kredi riskinde önemli artış görülmeyen finansal varlıkların izlendiği aşamadır."],
  ["Stage 2", "Muhasebe ve Raporlama", "Kredi riskinde önemli artış bulunan fakat temerrüt oluşmamış finansal varlıkların izlendiği aşamadır."],
  ["Stage 3", "Muhasebe ve Raporlama", "Temerrüt veya değer düşüklüğü göstergesi bulunan finansal varlıkların izlendiği aşamadır."],
  ["Tahsili Gecikmiş Alacak", "Kredi Riski", "Vadesinde ödenmeyen ve belirli gecikme gün sayılarına göre izlenen kredi veya alacak bakiyesidir."],
  ["Takipteki Alacak", "Kredi Riski", "Mevzuat veya kurum politikaları gereği yasal takip ya da yakın izleme sürecine alınmış alacakları ifade eder."],
  ["Risk Ağırlıklı Varlık", "Sermaye ve Basel", "Bir varlığın risk seviyesine göre ağırlıklandırılmış tutarıdır ve sermaye yeterliliği hesaplamalarında kullanılır."],
  ["Sermaye Yeterlilik Oranı", "Sermaye ve Basel", "Bankanın özkaynaklarının risk ağırlıklı varlıklarına oranını gösteren temel dayanıklılık göstergesidir."],
  ["Likidite Karşılama Oranı", "Likidite Riski", "Yüksek kaliteli likit varlıkların otuz günlük net nakit çıkışlarını karşılama gücünü ölçen orandır."],
  ["Net İstikrarlı Fonlama Oranı", "Likidite Riski", "Bankanın uzun vadeli varlıklarını istikrarlı fonlama kaynaklarıyla karşılama düzeyini gösterir."],
  ["VaR", "Piyasa Riski", "Value at Risk kısaltmasıdır; belirli güven düzeyinde ve zaman aralığında beklenen azami piyasa kaybını tahmin eder."],
  ["Stres Testi", "Risk Yönetimi", "Olağan dışı ama makul senaryolar altında portföy, bilanço veya sermaye üzerindeki etkileri ölçen analizdir."],
  ["Duyarlılık Analizi", "Risk Yönetimi", "Tek bir varsayım veya risk faktörü değiştiğinde finansal sonuçların nasıl etkilendiğini gösteren analizdir."],
  ["Kur Riski", "Piyasa Riski", "Döviz kurlarındaki değişim nedeniyle bilanço, gelir veya sermaye üzerinde zarar oluşması riskidir."],
  ["Faiz Oranı Riski", "Piyasa Riski", "Faiz oranlarındaki değişimlerin gelir, ekonomik değer veya portföy değeri üzerinde oluşturduğu risktir."],
  ["Operasyonel Kayıp", "Operasyonel Risk", "Süreç, insan, sistem veya dış olay kaynaklı hatalar nedeniyle oluşan finansal kaybı ifade eder."],
  ["KYC", "Regülasyon ve Uyum", "Müşterini tanı prensibidir; müşteri kimliği, faaliyet alanı ve risk profilinin doğrulanmasını kapsar."],
  ["AML", "Regülasyon ve Uyum", "Kara para aklamanın önlenmesine yönelik politika, kontrol ve izleme süreçlerinin genel adıdır."],
  ["Menkul Kıymet", "Finansal Piyasalar", "Tahvil, bono, hisse senedi gibi alınıp satılabilir finansal varlıkları ifade eder."],
  ["Tahvil", "Finansal Piyasalar", "İhraççısına borçlanma imkanı sağlayan, yatırımcıya vade sonunda anapara ve dönemsel getiri sunabilen menkul kıymettir."],
  ["Hisse Senedi", "Finansal Piyasalar", "Bir şirkete ortaklık hakkı veren ve sahibine kâr payı ile oy hakkı gibi haklar sağlayabilen sermaye piyasası aracıdır."],
  ["Nakit Akımı", "Kurumsal Finans", "Bir işletmenin belirli dönemdeki nakit giriş ve çıkışlarını gösteren finansal akıştır."],
  ["EBITDA", "Kurumsal Finans", "Faiz, vergi, amortisman ve itfa payı öncesi kârı ifade eder; faaliyet performansını izlemek için kullanılır."],
  ["Cari Oran", "Muhasebe ve Raporlama", "Dönen varlıkların kısa vadeli yükümlülüklere oranıdır ve kısa vadeli ödeme gücünü gösterir."],
  ["Kaldıraç Oranı", "Kurumsal Finans", "Borçluluğun özkaynak veya varlık büyüklüğüne göre seviyesini ölçen finansal göstergedir."],
  ["Teminat", "Bankacılık Ürünleri", "Kredi riskini azaltmak amacıyla borçlu veya üçüncü taraf tarafından verilen güvence unsurudur."],
  ["Limit Kullanım Oranı", "Bankacılık Ürünleri", "Kullanılmış kredi veya kart limitinin toplam tanımlı limite oranını gösterir."],
];

const domainGroups = {
  "Kredi Riski": [
    "Bireysel Kredi",
    "Konut Kredisi",
    "Taşıt Kredisi",
    "İhtiyaç Kredisi",
    "KOBİ Kredisi",
    "Kurumsal Kredi",
    "Ticari Kredi",
    "Tarım Kredisi",
    "Kredi Kartı",
    "Rotatif Kredi",
    "Spot Kredi",
    "İhracat Kredisi",
    "Proje Finansmanı",
    "Gayrinakdi Kredi",
    "Teminat Mektubu",
    "Kredi Portföyü",
  ],
  "Piyasa Riski": [
    "Döviz Pozisyonu",
    "Faiz Pozisyonu",
    "Hisse Senedi Portföyü",
    "Tahvil Portföyü",
    "Türev Ürün Portföyü",
    "Emtia Pozisyonu",
    "Swap İşlemi",
    "Forward İşlemi",
    "Opsiyon İşlemi",
    "Alım Satım Portföyü",
    "Bankacılık Hesapları",
    "Menkul Kıymet Portföyü",
  ],
  "Likidite Riski": [
    "Vadesiz Mevduat",
    "Vadeli Mevduat",
    "Repo Fonlaması",
    "Sendikasyon Kredisi",
    "Nakit Çıkışı",
    "Nakit Girişi",
    "Likidite Tamponu",
    "Likit Varlık",
    "Fonlama Açığı",
    "Mevduat Yoğunlaşması",
    "Toptan Fonlama",
    "Merkez Bankası Fonlaması",
  ],
  "Operasyonel Risk": [
    "Süreç Hatası",
    "Sistem Kesintisi",
    "Siber Olay",
    "İç Suistimal",
    "Dış Suistimal",
    "Uyum İhlali",
    "Model Hatası",
    "Veri Kalitesi",
    "İş Sürekliliği",
    "Üçüncü Taraf Hizmeti",
    "Yetki Matrisi",
    "Mutabakat Süreci",
  ],
  "Sermaye ve Basel": [
    "Kredi Riski Sermayesi",
    "Piyasa Riski Sermayesi",
    "Operasyonel Risk Sermayesi",
    "Ana Sermaye",
    "Katkı Sermaye",
    "Kaldıraç Riski",
    "İçsel Sermaye",
    "Yasal Sermaye",
    "Sermaye Planı",
    "Tampon Sermaye",
    "Risk Ağırlığı",
    "Standart Yaklaşım",
  ],
  "Muhasebe ve Raporlama": [
    "Bilanço",
    "Gelir Tablosu",
    "Karşılık Gideri",
    "Reeskont",
    "Gerçeğe Uygun Değer",
    "İtfa Edilmiş Maliyet",
    "Finansal Varlık",
    "Finansal Borç",
    "Nakit Akım Tablosu",
    "Dipnot",
    "Konsolide Rapor",
    "Değer Düşüklüğü",
  ],
  "Finansal Piyasalar": [
    "Devlet Tahvili",
    "Hazine Bonosu",
    "Eurobond",
    "Pay Senedi",
    "Yatırım Fonu",
    "Borsa Yatırım Fonu",
    "VİOP Kontratı",
    "Mevduat Sertifikası",
    "Kira Sertifikası",
    "Özel Sektör Tahvili",
    "Para Piyasası",
    "Sermaye Piyasası",
  ],
  "Ödeme Sistemleri": [
    "FAST Ödemesi",
    "EFT",
    "Havale",
    "SWIFT",
    "POS İşlemi",
    "Sanal POS",
    "QR Ödeme",
    "Dijital Cüzdan",
    "Ön Ödemeli Kart",
    "Kart Saklama",
    "Mutabakat Dosyası",
    "Ters İbraz",
  ],
  "Regülasyon ve Uyum": [
    "Müşteri Tanıma",
    "Şüpheli İşlem",
    "Yaptırım Taraması",
    "Veri Saklama",
    "Açık Rıza",
    "Kişisel Veri",
    "Uyum Kontrolü",
    "İç Kontrol",
    "Denetim Bulgusu",
    "Politika Dokümanı",
    "Limit Aşımı",
    "Raporlama Yükümlülüğü",
  ],
  "Kurumsal Finans": [
    "Net İşletme Sermayesi",
    "Serbest Nakit Akımı",
    "Firma Değeri",
    "Özkaynak Değeri",
    "Borçluluk",
    "Kârlılık",
    "Yatırım Harcaması",
    "Temettü",
    "Birleşme ve Satın Alma",
    "Değerleme",
    "Finansman Maliyeti",
    "Sermaye Yapısı",
  ],
};

const metricTemplates = [
  ["Oranı", "ilgili başlığın toplam büyüklük içindeki payını veya gerçekleşme düzeyini gösteren karşılaştırılabilir bir göstergedir"],
  ["Tutarı", "ilgili başlık kapsamında ölçülen parasal büyüklüğü ifade eder ve dönemsel izleme için kullanılır"],
  ["Bakiyesi", "raporlama tarihi itibarıyla kalan stok büyüklüğü gösterir"],
  ["Riski", "ilgili alanda zarar, sapma veya uyumsuzluk doğurma ihtimalini anlatır"],
  ["Analizi", "ilgili başlığın nedenlerini, etkilerini ve eğilimini değerlendiren çalışmadır"],
  ["Yönetimi", "ilgili risk veya finansal büyüklüğün politika, limit ve kontrollerle izlenmesini kapsar"],
  ["Stres Testi", "olumsuz senaryolar altında ilgili kalemin dayanıklılığını ölçen çalışmadır"],
  ["Duyarlılık Analizi", "tek bir varsayım değiştiğinde ilgili finansal sonucun nasıl değiştiğini gösterir"],
  ["Erken Uyarı Göstergesi", "bozulma veya olağan dışı hareketleri gerçekleşmeden önce yakalamaya çalışan izleme sinyalidir"],
];

const marketConcepts = [
  "Açığa Satış",
  "Aktif Pasif Yönetimi",
  "Alacak Devir Hızı",
  "Altman Z-Skoru",
  "Ana Para",
  "Arbitraj",
  "Aylık Getiri",
  "Baz Puan",
  "Bileşik Faiz",
  "Birincil Piyasa",
  "BIST 100",
  "Bono",
  "Brüt Kâr Marjı",
  "Cari Denge",
  "CDS Primi",
  "Çapraz Kur",
  "Defter Değeri",
  "Dezenflasyon",
  "Döviz Kuru",
  "Efektif Faiz",
  "Enflasyon",
  "Eurobond Getirisi",
  "Faiz Koridoru",
  "Fiyat Kazanç Oranı",
  "Forward Kur",
  "Getiri Eğrisi",
  "Gösterge Tahvil",
  "Halka Arz",
  "İkincil Piyasa",
  "İskonto Oranı",
  "İşlem Hacmi",
  "Kambiyo",
  "Kar Payı",
  "Kur Sepeti",
  "Makro İhtiyati Politika",
  "Marj Çağrısı",
  "Menkul Kıymetleştirme",
  "Merkez Bankası Rezervi",
  "Net Faiz Marjı",
  "Nominal Faiz",
  "Opsiyon Primi",
  "Özkaynak Karlılığı",
  "Para Politikası",
  "Portföy Çeşitlendirmesi",
  "Reel Faiz",
  "Repo",
  "Risk Primi",
  "Sermaye Maliyeti",
  "Swap Faizi",
  "Tahakkuk",
  "Temerrüt",
  "Ters Repo",
  "Tüketici Fiyat Endeksi",
  "Volatilite",
  "Vade",
  "Yabancı Para Pozisyonu",
];

const normalise = (value) =>
  value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const firstLetter = (term) => term.trim().charAt(0).toLocaleUpperCase("tr-TR");

function sentenceForSourceTerm(term) {
  return `${term}, dijital finans ve bankacılık süreçlerinde veri paylaşımı, güvenli işlem, müşteri deneyimi veya sistem entegrasyonu tarafında kullanılan temel bir kavramdır. Operasyon, uyum ve ürün ekipleri bu başlığı hizmet kalitesi, erişim güvenliği ve süreç verimliliği açısından izler.`;
}

function buildGlossary() {
  const items = [];

  sourceInspiredTerms.forEach((term) => {
    items.push({
      term,
      category: "Açık Bankacılık ve FinTech",
      description: sentenceForSourceTerm(term),
      source: "Finstant kapsamından esinlenildi",
    });
  });

  curatedTerms.forEach(([term, category, description]) => {
    items.push({ term, category, description, source: "Editoryal" });
  });

  Object.entries(domainGroups).forEach(([category, domains]) => {
    domains.forEach((domain) => {
      metricTemplates.forEach(([suffix, text]) => {
        const term = `${domain} ${suffix}`;
        items.push({
          term,
          category,
          description: `${term}, ${domain.toLocaleLowerCase("tr-TR")} kapsamında ${text}. Karar alma, limit yönetimi, performans takibi ve düzenli raporlama süreçlerinde kullanılır.`,
          source: "Profesyonel sözlük seti",
        });
      });
    });
  });

  marketConcepts.forEach((term) => {
    const category = term.includes("Faiz") || term.includes("Kur") || term.includes("Volatilite")
      ? "Piyasa Riski"
      : "Finansal Piyasalar";
    items.push({
      term,
      category,
      description: `${term}, finansal piyasalarda fiyatlama, getiri, risk veya bilanço etkisini anlamak için kullanılan temel kavramlardan biridir. Yatırım, hazine, risk yönetimi ve raporlama çalışmalarında bağlama göre yorumlanır.`,
      source: "Editoryal",
    });
  });

  const seen = new Set();
  return items
    .filter((item) => {
      const key = normalise(item.term);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.term.localeCompare(b.term, "tr"));
}

const glossary = buildGlossary();
const state = {
  query: "",
  category: "Tümü",
  letter: "Tümü",
  sort: "az",
  visible: 36,
};

const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const sortFilter = document.querySelector("#sortFilter");
const clearButton = document.querySelector("#clearButton");
const alphabetFilter = document.querySelector("#alphabetFilter");
const termsGrid = document.querySelector("#termsGrid");
const resultCount = document.querySelector("#resultCount");
const loadMoreButton = document.querySelector("#loadMoreButton");
const randomTermButton = document.querySelector("#randomTermButton");
const featuredTerm = document.querySelector("#featuredTerm");
const totalTerms = document.querySelector("#totalTerms");
const totalCategories = document.querySelector("#totalCategories");
const categoryGrid = document.querySelector("#categoryGrid");

function renderSelects() {
  const categoryOptions = ["Tümü", ...categories];
  categoryFilter.innerHTML = categoryOptions
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");

  const letters = ["Tümü", ..."ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split("")];
  alphabetFilter.innerHTML = letters
    .map(
      (letter) =>
        `<button type="button" data-letter="${letter}" class="${letter === state.letter ? "active" : ""}">${letter}</button>`,
    )
    .join("");
}

function getFilteredTerms() {
  const query = normalise(state.query.trim());
  let filtered = glossary.filter((item) => {
    const text = normalise(`${item.term} ${item.category} ${item.description}`);
    const matchesQuery = !query || text.includes(query);
    const matchesCategory = state.category === "Tümü" || item.category === state.category;
    const matchesLetter = state.letter === "Tümü" || firstLetter(item.term) === state.letter;
    return matchesQuery && matchesCategory && matchesLetter;
  });

  filtered = filtered.sort((a, b) => {
    if (state.sort === "za") return b.term.localeCompare(a.term, "tr");
    if (state.sort === "short") return a.description.length - b.description.length;
    if (state.sort === "long") return b.description.length - a.description.length;
    return a.term.localeCompare(b.term, "tr");
  });

  return filtered;
}

function renderTerms() {
  const filtered = getFilteredTerms();
  const visibleTerms = filtered.slice(0, state.visible);

  termsGrid.innerHTML = visibleTerms
    .map(
      (item) => `
        <article class="term-card">
          <h3>${item.term}</h3>
          <p>${item.description}</p>
          <div class="term-footer">
            <span class="term-category">${item.category}</span>
            <span class="term-letter">${firstLetter(item.term)}</span>
          </div>
        </article>
      `,
    )
    .join("");

  resultCount.textContent = `${filtered.length.toLocaleString("tr-TR")} sonuç bulundu`;
  loadMoreButton.hidden = visibleTerms.length >= filtered.length;

  if (!visibleTerms.length) {
    termsGrid.innerHTML = `
      <article class="term-card">
        <h3>Sonuç bulunamadı</h3>
        <p>Aramayı biraz kısaltmayı veya kategori filtresini temizlemeyi deneyebilirsin.</p>
        <div class="term-footer">
          <span class="term-category">Arama</span>
          <span class="term-letter">?</span>
        </div>
      </article>
    `;
  }
}

function renderCategoryCards() {
  const counts = categories.map((category) => ({
    category,
    count: glossary.filter((item) => item.category === category).length,
  }));

  categoryGrid.innerHTML = counts
    .map(
      ({ category, count }) => `
        <article class="category-card">
          <strong>${category}</strong>
          <span>${count.toLocaleString("tr-TR")} terim</span>
        </article>
      `,
    )
    .join("");
}

function showFeaturedTerm(item = glossary[0]) {
  featuredTerm.innerHTML = `
    <span class="eyebrow">Öne çıkan terim</span>
    <h3>${item.term}</h3>
    <p>${item.description}</p>
  `;
}

function resetVisible() {
  state.visible = 36;
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  resetVisible();
  renderTerms();
});

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  resetVisible();
  renderTerms();
});

sortFilter.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderTerms();
});

clearButton.addEventListener("click", () => {
  state.query = "";
  state.category = "Tümü";
  state.letter = "Tümü";
  state.sort = "az";
  searchInput.value = "";
  categoryFilter.value = "Tümü";
  sortFilter.value = "az";
  resetVisible();
  renderSelects();
  renderTerms();
});

alphabetFilter.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-letter]");
  if (!button) return;
  state.letter = button.dataset.letter;
  resetVisible();
  renderSelects();
  renderTerms();
});

loadMoreButton.addEventListener("click", () => {
  state.visible += 36;
  renderTerms();
});

randomTermButton.addEventListener("click", () => {
  const random = glossary[Math.floor(Math.random() * glossary.length)];
  showFeaturedTerm(random);
  state.query = random.term;
  searchInput.value = random.term;
  resetVisible();
  renderTerms();
  document.querySelector("#sozluk").scrollIntoView({ behavior: "smooth", block: "start" });
});

totalTerms.textContent = glossary.length.toLocaleString("tr-TR");
totalCategories.textContent = categories.length.toLocaleString("tr-TR");
renderSelects();
renderCategoryCards();
showFeaturedTerm(glossary.find((item) => item.term === "Beklenen Kredi Zararı"));
renderTerms();

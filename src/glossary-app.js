const referenceSources = {
  ifrs9: {
    label: "IFRS 9 — Financial Instruments",
    url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/",
  },
  baselCredit: {
    label: "Basel Framework — Credit risk",
    url: "https://www.bis.org/basel_framework/chapter/CRE/20.htm",
  },
  baselCapital: {
    label: "Basel Framework — Capital ratios",
    url: "https://www.bis.org/basel_framework/chapter/CAP/10.htm",
  },
  baselLiquidity: {
    label: "Basel Framework — Liquidity Coverage Ratio",
    url: "https://www.bis.org/basel_framework/chapter/LCR/10.htm",
  },
  baselFunding: {
    label: "Basel Framework — Net Stable Funding Ratio",
    url: "https://www.bis.org/basel_framework/chapter/NSF/10.htm",
  },
  baselMarket: {
    label: "Basel Framework — Market risk",
    url: "https://www.bis.org/basel_framework/chapter/MAR/10.htm",
  },
  baselOperational: {
    label: "Basel Framework — Operational risk",
    url: "https://www.bis.org/basel_framework/chapter/OPE/10.htm",
  },
  baselStress: {
    label: "Basel Committee — Principles for stress testing",
    url: "https://www.bis.org/publ/bcbs155.htm",
  },
  fatfCdd: {
    label: "FATF Recommendation 10 — Customer due diligence",
    url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html",
  },
  fatfAml: {
    label: "FATF Recommendations — AML/CFT standard",
    url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html",
  },
  spkGlossary: {
    label: "SPK — Sermaye piyasası sözlüğü",
    url: "https://spk.gov.tr/sayfa/alt-sayfa/sermaye-piyasasi-araclari",
  },
  ifrsCashFlow: {
    label: "IAS 7 — Statement of Cash Flows",
    url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/",
  },
};

const glossary = [
  ["Beklenen Kredi Zararı", "Muhasebe ve Raporlama", "IFRS 9 kapsamında, temerrüt olasılığı, temerrüt halinde kayıp ve temerrüt anındaki risk tutarı dikkate alınarak ölçülen değer düşüklüğü tutarıdır.", "ifrs9"],
  ["PD", "Kredi Riski", "Probability of Default'ın kısaltmasıdır; borçlunun belirli bir zaman ufkunda temerrüde düşme olasılığını ifade eder.", "baselCredit"],
  ["LGD", "Kredi Riski", "Loss Given Default'ın kısaltmasıdır; temerrüt gerçekleştiğinde ekonomik kayba dönüşmesi beklenen oransal kısmı ifade eder.", "baselCredit"],
  ["EAD", "Kredi Riski", "Exposure at Default'ın kısaltmasıdır; borçlu temerrüde düştüğünde beklenen risk tutarını ifade eder.", "baselCredit"],
  ["Aşama 1", "Muhasebe ve Raporlama", "IFRS 9 değer düşüklüğü modelinde, ilk muhasebeleştirmeden beri kredi riskinde önemli artış olmayan finansal varlıkların bulunduğu aşamadır.", "ifrs9"],
  ["Aşama 2", "Muhasebe ve Raporlama", "IFRS 9 değer düşüklüğü modelinde, ilk muhasebeleştirmeden beri kredi riskinde önemli artış bulunan ancak kredi-değer-düşüklüğüne uğramamış varlıkların bulunduğu aşamadır.", "ifrs9"],
  ["Aşama 3", "Muhasebe ve Raporlama", "IFRS 9 değer düşüklüğü modelinde kredi-değer-düşüklüğüne uğramış finansal varlıkların bulunduğu aşamadır.", "ifrs9"],
  ["Risk Ağırlıklı Varlık", "Sermaye ve Basel", "Sermaye yeterliliği hesaplamasında, maruz kalınan risklere göre ağırlıklandırılan varlık ve bilanço dışı kalem tutarıdır.", "baselCapital"],
  ["Sermaye Yeterlilik Oranı", "Sermaye ve Basel", "Düzenleyici sermayenin toplam risk ağırlıklı varlıklara oranını gösteren Basel sermaye oranıdır.", "baselCapital"],
  ["Likidite Karşılama Oranı", "Likidite Riski", "Yüksek kaliteli likit varlık stokunun 30 günlük net nakit çıkışlarına oranını gösteren Basel likidite standardıdır.", "baselLiquidity"],
  ["Net İstikrarlı Fonlama Oranı", "Likidite Riski", "Kullanılabilir istikrarlı fonlamanın, gerekli istikrarlı fonlamaya oranını gösteren bir yıllık yapısal likidite standardıdır.", "baselFunding"],
  ["Riske Maruz Değer (VaR)", "Piyasa Riski", "Belirli bir güven düzeyi ve elde tutma süresi için piyasa hareketlerinden kaynaklanabilecek tahmini zarar eşiğini ifade eden risk ölçüsüdür.", "baselMarket"],
  ["Stres Testi", "Risk Yönetimi", "Olağan dışı ancak makul senaryolarda portföy, bilanço veya sermaye üzerindeki etkiyi değerlendiren ileriye dönük risk analizidir.", "baselStress"],
  ["Kur Riski", "Piyasa Riski", "Döviz kurlarındaki değişimlerin pozisyonların değeri veya geliri üzerinde zarar doğurması riskidir.", "baselMarket"],
  ["Operasyonel Kayıp", "Operasyonel Risk", "Yetersiz veya başarısız iç süreçler, insanlar, sistemler ya da dış olaylar nedeniyle ortaya çıkan zarar tutarıdır.", "baselOperational"],
  ["Müşterini Tanı (KYC)", "Regülasyon ve Uyum", "Müşteri kabulü ve ilişki süresince kimliğin doğrulanması ile müşteri ve işlem riskinin anlaşılmasına yönelik müşteri durum tespiti sürecidir.", "fatfCdd"],
  ["Kara Para Aklamanın Önlenmesi (AML)", "Regülasyon ve Uyum", "Suç gelirlerinin finansal sisteme sokulmasını, gizlenmesini veya kullanılmasını önlemeye yönelik kontrol ve uyum çerçevesidir.", "fatfAml"],
  ["Menkul Kıymet", "Finansal Piyasalar", "Sermaye piyasası araçları içinde yer alan ve yatırımcıya ihraççıya karşı mali hak sağlayan kıymetli evraktır.", "spkGlossary"],
  ["Tahvil", "Finansal Piyasalar", "İhraççının borçlanmasını temsil eden ve sahibine anapara ile varsa faiz ödemesi talep etme hakkı veren borçlanma aracıdır.", "spkGlossary"],
  ["Pay Senedi", "Finansal Piyasalar", "Anonim ortaklık sermayesine katılımı ve pay sahipliğinden doğan hakları temsil eden sermaye piyasası aracıdır.", "spkGlossary"],
  ["Nakit Akış Tablosu", "Muhasebe ve Raporlama", "İşletmenin faaliyet, yatırım ve finansman faaliyetlerinden kaynaklanan nakit giriş ve çıkışlarını raporlayan finansal tablodur.", "ifrsCashFlow"],
  ["Teminat", "Kredi Riski", "Kredi riskini azaltmak için alacaklının lehine tesis edilen ve Basel kredi riski azaltım tekniklerinde dikkate alınabilen güvence unsurudur.", "baselCredit"],
].map(([term, category, description, sourceKey]) => ({ term, category, description, source: referenceSources[sourceKey] }))
  .sort((a, b) => a.term.localeCompare(b.term, "tr"));

const categories = [...new Set(glossary.map((item) => item.category))];
const normalise = (value) => value.toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const firstLetter = (term) => term.trim().charAt(0).toLocaleUpperCase("tr-TR");

const state = { query: "", category: "Tümü", letter: "Tümü", sort: "az", visible: 36 };
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
  categoryFilter.innerHTML = ["Tümü", ...categories].map((category) => `<option value="${category}">${category}</option>`).join("");
  const letters = ["Tümü", ...[...new Set(glossary.map((item) => firstLetter(item.term)))].sort((a, b) => a.localeCompare(b, "tr"))];
  alphabetFilter.innerHTML = letters.map((letter) => `<button type="button" data-letter="${letter}" class="${letter === state.letter ? "active" : ""}">${letter}</button>`).join("");
}

function getFilteredTerms() {
  const query = normalise(state.query.trim());
  return glossary.filter((item) => !query || normalise(`${item.term} ${item.category} ${item.description} ${item.source.label}`).includes(query))
    .filter((item) => state.category === "Tümü" || item.category === state.category)
    .filter((item) => state.letter === "Tümü" || firstLetter(item.term) === state.letter)
    .sort((a, b) => state.sort === "za" ? b.term.localeCompare(a.term, "tr") : state.sort === "short" ? a.description.length - b.description.length : state.sort === "long" ? b.description.length - a.description.length : a.term.localeCompare(b.term, "tr"));
}

function renderTerms() {
  const filtered = getFilteredTerms();
  const visibleTerms = filtered.slice(0, state.visible);
  termsGrid.innerHTML = visibleTerms.map((item) => `<article class="term-card"><h3>${item.term}</h3><p>${item.description}</p><div class="term-footer"><span class="term-meta"><span class="term-category">${item.category}</span><a class="term-source" href="${item.source.url}" target="_blank" rel="noopener noreferrer">Kaynak: ${item.source.label}</a></span><span class="term-letter">${firstLetter(item.term)}</span></div></article>`).join("");
  resultCount.textContent = `${filtered.length.toLocaleString("tr-TR")} sonuç bulundu`;
  loadMoreButton.hidden = visibleTerms.length >= filtered.length;
  if (!visibleTerms.length) termsGrid.innerHTML = '<article class="term-card"><h3>Sonuç bulunamadı</h3><p>Aramayı kısaltmayı veya kategori filtresini temizlemeyi deneyebilirsin.</p></article>';
}

function renderCategoryCards() {
  categoryGrid.innerHTML = categories.map((category) => `<article class="category-card"><strong>${category}</strong><span>${glossary.filter((item) => item.category === category).length.toLocaleString("tr-TR")} terim</span></article>`).join("");
}
function showFeaturedTerm(item = glossary[0]) { featuredTerm.innerHTML = `<span class="eyebrow">Öne çıkan terim</span><h3>${item.term}</h3><p>${item.description}</p><a class="featured-source" href="${item.source.url}" target="_blank" rel="noopener noreferrer">Kaynak: ${item.source.label}</a>`; }
function resetVisible() { state.visible = 36; }
searchInput.addEventListener("input", (event) => { state.query = event.target.value; resetVisible(); renderTerms(); });
categoryFilter.addEventListener("change", (event) => { state.category = event.target.value; resetVisible(); renderTerms(); });
sortFilter.addEventListener("change", (event) => { state.sort = event.target.value; renderTerms(); });
clearButton.addEventListener("click", () => { state.query = ""; state.category = "Tümü"; state.letter = "Tümü"; state.sort = "az"; searchInput.value = ""; categoryFilter.value = "Tümü"; sortFilter.value = "az"; resetVisible(); renderSelects(); renderTerms(); });
alphabetFilter.addEventListener("click", (event) => { const button = event.target.closest("button[data-letter]"); if (!button) return; state.letter = button.dataset.letter; resetVisible(); renderSelects(); renderTerms(); });
loadMoreButton.addEventListener("click", () => { state.visible += 36; renderTerms(); });
randomTermButton.addEventListener("click", () => { showFeaturedTerm(glossary[Math.floor(Math.random() * glossary.length)]); });
totalTerms.textContent = glossary.length.toLocaleString("tr-TR");
totalCategories.textContent = categories.length.toLocaleString("tr-TR");
renderSelects();
renderTerms();
renderCategoryCards();
showFeaturedTerm();

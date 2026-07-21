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
  "Risk Yönetimi",
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

const referenceSources = {
  basel: {
    label: "Basel Framework",
    url: "https://www.bis.org/basel_framework/",
  },
  bddk: {
    label: "BDDK Mevzuat",
    url: "https://www.bddk.gov.tr/Mevzuat/Liste/132",
  },
  ecb: {
    label: "ECB PSD2",
    url: "https://www.ecb.europa.eu/press/intro/mip-online/2018/html/1803_revisedpsd.en.html",
  },
  fatf: {
    label: "FATF Recommendations",
    url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html",
  },
  finstant: {
    label: "Finstant Finansal Sözlük",
    url: "https://www.finstant.com.tr/finansal-sozluk",
  },
  ifrs: {
    label: "IFRS Foundation",
    url: "https://www.ifrs.org/",
  },
  tcmb: {
    label: "TCMB Terimler Sözlüğü",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb%2Btr/main%2Bmenu/banka%2Bhakkinda/egitim-akademik/terimler%2Bsozlugu/",
  },
};

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
  "Bankacılık Ürünleri": [
    "Mevduat Hesabı",
    "Kredi Kartı",
    "Ticari Kredi",
    "Bireysel Kredi",
    "Konut Kredisi",
    "Taşıt Kredisi",
    "Teminat Mektubu",
    "POS Ürünü",
    "Dijital Bankacılık",
    "Yatırım Hesabı",
  ],
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
  "Risk Yönetimi": [
    "Risk İştahı",
    "Limit Yapısı",
    "Stres Testi",
    "Senaryo Analizi",
    "Duyarlılık Analizi",
    "Erken Uyarı",
    "Model Validasyonu",
    "Portföy İzleme",
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
    "Uyum Bulgusu",
    "Uyum Programı",
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

const categoryMetricTemplates = {
  "Bankacılık Ürünleri": [
    ["Tanımı", "müşteri ihtiyacını karşılayan bankacılık ürününün kapsamını ve temel kullanım amacını açıklar"],
    ["Gelir Etkisi", "ürünün faiz, ücret, komisyon veya hacim üzerinden finansal sonuca katkısını gösterir"],
    ["Risk Profili", "ürünün kredi, piyasa, likidite veya operasyonel risk boyutunu değerlendirir"],
    ["Müşteri Segmenti", "ürünün hangi müşteri grubu için uygun olduğunu tanımlar"],
    ["Limit Yapısı", "ürün özelinde tanımlanan kullanım veya tahsis sınırlarını gösterir"],
    ["Uyum Kontrolü", "ürünün mevzuat ve kurum politikalarına uygunluğunu izler"],
    ["Performans Göstergesi", "ürünün hacim, kârlılık veya kullanım başarısını takip eden metriktir"],
  ],
  "Kredi Riski": [
    ["Bakiyesi", "raporlama tarihinde canlı veya izlenen kredi stoğunu gösterir"],
    ["Limit Kullanım Oranı", "tanımlı limitin ne kadarının kullanıldığını ölçer"],
    ["PD", "ilgili segmentin belirli vadede temerrüde düşme olasılığını ifade eder"],
    ["LGD", "temerrüt halinde tahsil edilemeyebilecek kısmı oransal olarak gösterir"],
    ["EAD", "temerrüt anında beklenen risk bakiyesini anlatır"],
    ["ECL", "PD, LGD ve EAD bileşenleriyle beklenen kredi zararını hesaplar"],
    ["NPL Oranı", "takipteki alacakların ilgili kredi portföyüne oranını verir"],
    ["Gecikme Gün Sayısı", "vadesi geçen ödeme için geçen gün sayısını gösterir"],
    ["Teminat Karşılama Oranı", "teminat değerinin risk tutarını ne ölçüde karşıladığını izler"],
    ["Erken Uyarı Sinyali", "ödeme gücü veya davranış bozulmasını önceden yakalamaya çalışır"],
    ["Stres Testi", "olumsuz makro veya portföy senaryosunda kredi kaybı etkisini ölçer"],
    ["Validasyonu", "model, veri ve hesaplama sonuçlarının tutarlılığını bağımsız biçimde kontrol eder"],
  ],
  "Risk Yönetimi": [
    ["Çerçevesi", "riskin tanımlanması, ölçülmesi, izlenmesi ve raporlanması için kullanılan genel yapıyı ifade eder"],
    ["Limit Kontrolü", "belirlenen eşiklere göre risk kullanımını ve aşım durumunu izler"],
    ["Raporlaması", "risk göstergelerinin yönetim ve ilgili komitelere düzenli sunumunu sağlar"],
    ["Aksiyon Planı", "tespit edilen risk veya bulgu için alınacak düzeltici adımları tanımlar"],
    ["Stres Testi", "ağır fakat makul senaryolarda finansal dayanıklılığı ölçer"],
    ["Duyarlılık Analizi", "varsayım değişikliklerinin sonuçlar üzerindeki etkisini değerlendirir"],
    ["Validasyonu", "model, yöntem veya raporlama çıktısının bağımsız kontrolünü ifade eder"],
  ],
  "Piyasa Riski": [
    ["Pozisyonu", "ilgili risk faktörüne açık net veya brüt finansal büyüklüğü gösterir"],
    ["VaR", "belirli güven düzeyi ve elde tutma süresi için beklenen azami kaybı tahmin eder"],
    ["Stres Kaybı", "olağan dışı fiyat, faiz veya kur hareketinde oluşabilecek zararı gösterir"],
    ["Duyarlılığı", "risk faktöründeki küçük değişimin portföy değerine etkisini ölçer"],
    ["Limit Kullanımı", "tanımlı piyasa riski limitinin ne kadar kullanıldığını izler"],
    ["Volatilitesi", "fiyat veya getiri oynaklığının seviyesini gösterir"],
    ["Getiri Etkisi", "ilgili pozisyonun dönemsel kâr-zarar üzerindeki katkısını anlatır"],
    ["Risk Primi", "belirsizlik veya kredi kalitesi için talep edilen ek getiriyi ifade eder"],
    ["Hedge Etkinliği", "korunma işleminin risk azaltma başarısını değerlendirir"],
    ["Senaryo Analizi", "alternatif piyasa koşullarında portföy sonucunu karşılaştırır"],
    ["Backtest Sonucu", "model tahmini ile gerçekleşen kayıp arasındaki uyumu kontrol eder"],
  ],
  "Likidite Riski": [
    ["Vade Profili", "nakit giriş ve çıkışların vadeye göre dağılımını gösterir"],
    ["Nakit Akımı", "belirli dönemde beklenen giriş ve çıkışları takip eder"],
    ["Karşılama Oranı", "likit kaynakların beklenen nakit ihtiyacını ne ölçüde karşıladığını ölçer"],
    ["Stres Çıkışı", "stres koşullarında gerçekleşebilecek ilave nakit çıkışını tahmin eder"],
    ["Tamponu", "beklenmeyen likidite ihtiyacı için tutulan kullanılabilir kaynağı ifade eder"],
    ["Yoğunlaşma Riski", "fonlama kaynağının az sayıda karşı tarafa veya vadeye bağımlı olmasını anlatır"],
    ["Erken Uyarı Göstergesi", "fonlama baskısı veya mevduat çıkışı riskini önceden izler"],
    ["Limit Kullanımı", "likidite limitlerinin güncel kullanım seviyesini gösterir"],
    ["Senaryo Analizi", "farklı çekilme ve piyasa kapanma varsayımlarını karşılaştırır"],
    ["Raporlaması", "nakit pozisyonu ve likidite riskinin karar alıcıya düzenli sunumudur"],
  ],
  "Operasyonel Risk": [
    ["Olayı", "süreç, insan, sistem veya dış kaynaklı hata sonucunda oluşan kayıtlı vakayı ifade eder"],
    ["Kayıp Tutarı", "operasyonel olay nedeniyle gerçekleşen finansal zararı gösterir"],
    ["Kök Neden Analizi", "olayın temel sebebini ve tekrarını önleyecek kontrol ihtiyacını araştırır"],
    ["Kontrolü", "riski azaltmak için uygulanan prosedür, onay veya sistemsel kuralı ifade eder"],
    ["KRI", "anahtar risk göstergesi olarak izlenen erken uyarı metriğidir"],
    ["Aksiyon Planı", "bulgu veya olay sonrası alınacak düzeltici adımları tanımlar"],
    ["Raporlaması", "olay, kayıp ve aksiyonların izlenebilir şekilde sunulmasını sağlar"],
    ["Senaryo Analizi", "düşük olasılıklı ama yüksek etkili operasyonel olayları değerlendirir"],
    ["İş Sürekliliği Testi", "kritik süreçlerin kesinti anında çalışabilirliğini sınar"],
    ["Validasyonu", "kontrol tasarımının ve uygulama etkinliğinin bağımsız değerlendirmesidir"],
  ],
  "Sermaye ve Basel": [
    ["Risk Ağırlığı", "maruz kalınan riskin sermaye hesabına yansıtılan ağırlığını gösterir"],
    ["RWA", "sermaye yeterliliği hesabında kullanılan risk ağırlıklı varlık tutarını ifade eder"],
    ["Sermaye Gereksinimi", "ilgili risk için tutulması gereken asgari düzenleyici sermayeyi anlatır"],
    ["Sermaye Tamponu", "asgari gereksinimin üzerinde tutulan ilave dayanıklılık payıdır"],
    ["Kaldıraç Etkisi", "varlık büyüklüğü ile sermaye arasındaki ilişkiyi takip eder"],
    ["Standart Yaklaşımı", "düzenleyici risk ağırlıklarıyla sermaye hesabı yapılan yöntemi ifade eder"],
    ["İçsel Model Yaklaşımı", "kurumun onaylı model girdileriyle sermaye hesabı yaptığı çerçevedir"],
    ["Stres Testi", "sermaye oranının ağır senaryolarda nasıl değişeceğini ölçer"],
    ["Raporlaması", "sermaye göstergelerinin düzenli ve karşılaştırılabilir sunumunu sağlar"],
    ["Validasyonu", "sermaye hesabında kullanılan veri, model ve varsayımları kontrol eder"],
  ],
  "Muhasebe ve Raporlama": [
    ["Kaydı", "ilgili finansal olayın muhasebe sistemine alınmasını ifade eder"],
    ["Sınıflandırması", "finansal varlık veya borcun ölçüm ve raporlama kategorisini belirler"],
    ["Ölçümü", "kalemin hangi değerleme yöntemiyle finansal tablolara yansıtılacağını anlatır"],
    ["Mutabakatı", "farklı sistem veya raporlar arasındaki tutar uyumunun kontrolüdür"],
    ["Dipnot Açıklaması", "finansal tablo kullanıcısına ek bilgi sağlayan açıklama alanıdır"],
    ["Karşılık Etkisi", "değer düşüklüğü veya beklenen zarar nedeniyle gider yazılan tutarı gösterir"],
    ["Dönemsel Değişimi", "raporlama dönemleri arasındaki artış veya azalışı analiz eder"],
    ["Kontrolü", "raporlama verisinin doğruluğunu ve tamamlığını test eder"],
    ["Raporlaması", "finansal bilginin yönetim, denetim veya düzenleyici otoriteye sunumudur"],
  ],
  "Finansal Piyasalar": [
    ["Getirisi", "ilgili aracın yatırımcıya sağladığı dönemsel kazanç veya kaybı gösterir"],
    ["Fiyatlaması", "nakit akımı, faiz, risk primi ve piyasa beklentileriyle değer belirleme sürecidir"],
    ["Likiditesi", "aracın değer kaybetmeden hızlı alınıp satılabilme kabiliyetini ifade eder"],
    ["Volatilitesi", "fiyat veya getiri oynaklığının büyüklüğünü gösterir"],
    ["Spread'i", "alış-satış, kredi veya getiri farkını ifade eder"],
    ["Vadesi", "anapara veya sözleşme yükümlülüğünün sona ereceği tarihi gösterir"],
    ["İhraç Süreci", "finansal aracın piyasaya sunulması için yürütülen işlemleri anlatır"],
    ["İşlem Hacmi", "belirli dönemde alınıp satılan toplam miktarı gösterir"],
    ["Piyasa Riski", "fiyat, faiz, kur veya spread değişiminden kaynaklanan zarar ihtimalini anlatır"],
  ],
  "Ödeme Sistemleri": [
    ["İşlemi", "para transferi veya ödeme talimatının gerçekleşen tekil kaydını ifade eder"],
    ["Mutabakatı", "ödeme kayıtlarının banka, üye işyeri veya sistem kayıtlarıyla eşleştirilmesidir"],
    ["İşlem Hacmi", "belirli dönemde gerçekleşen ödeme adedi veya tutarını gösterir"],
    ["Başarı Oranı", "başarılı tamamlanan işlemlerin toplam denemelere oranını verir"],
    ["Geri Ödeme Süreci", "iptal, iade veya düzeltme işlemlerinin yürütülmesini anlatır"],
    ["Ters İbraz Riski", "kartlı işlemde itiraz nedeniyle tutarın geri alınması ihtimalidir"],
    ["Fraud Kontrolü", "yetkisiz veya şüpheli ödeme davranışlarını tespit etmeye çalışır"],
    ["Güvenlik Standardı", "işlemlerde kimlik doğrulama ve veri koruma gerekliliklerini ifade eder"],
    ["Raporlaması", "ödeme performansı, hata ve mutabakat sonuçlarının düzenli sunumudur"],
  ],
  "Regülasyon ve Uyum": [
    ["Kontrolü", "uyum gerekliliğinin uygulanıp uygulanmadığını test eden adımdır"],
    ["Riski", "mevzuat, yaptırım veya kurum içi kurallara aykırılık nedeniyle doğabilecek risktir"],
    ["İzleme Süreci", "işlem, müşteri veya veri davranışlarının düzenli takip edilmesini sağlar"],
    ["Prosedürü", "ilgili uyum gerekliliğinin kurum içinde nasıl uygulanacağını tanımlar"],
    ["Raporlaması", "uyum bulguları ve göstergelerinin ilgili taraflara sunumudur"],
  ],
  "Kurumsal Finans": [
    ["Analizi", "şirketin finansal performansını ve değer yaratma kapasitesini değerlendirir"],
    ["Marjı", "gelirden maliyet veya gider sonrası kalan kârlılık payını gösterir"],
    ["Çarpanı", "değerleme veya karşılaştırma için kullanılan piyasa oranını ifade eder"],
    ["Nakit Akımı", "şirketin faaliyet, yatırım veya finansman kaynaklı nakit hareketini gösterir"],
    ["Borçluluk Oranı", "finansman yapısında borcun ağırlığını ölçer"],
    ["Değerlemesi", "şirket veya varlığın ekonomik değerini tahmin etme çalışmasıdır"],
    ["Finansman Maliyeti", "borç veya özkaynak kullanımının şirkete olan maliyetini anlatır"],
    ["Duyarlılık Analizi", "varsayım değişikliklerinin değer veya kârlılık üzerindeki etkisini ölçer"],
    ["Raporlaması", "finansal performansın yönetim kararları için sunulmasını sağlar"],
  ],
};

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

function sourceForItem(item) {
  const term = item.term.toLocaleUpperCase("tr-TR");

  if (sourceInspiredTerms.includes(item.term)) return referenceSources.finstant;
  if (["AML", "KYC"].includes(term) || item.category === "Regülasyon ve Uyum") return referenceSources.fatf;
  if (item.category === "Muhasebe ve Raporlama" || ["PD", "LGD", "EAD"].includes(term) || item.term.includes("ECL")) {
    return referenceSources.ifrs;
  }
  if (item.category === "Açık Bankacılık ve FinTech" || item.category === "Ödeme Sistemleri") return referenceSources.ecb;
  if (item.category === "Bankacılık Ürünleri") return referenceSources.bddk;
  if (item.category === "Finansal Piyasalar" || item.category === "Kurumsal Finans") return referenceSources.tcmb;
  return referenceSources.basel;
}

function sentenceForSourceTerm(term) {
  if (term.includes("API")) {
    return `${term}, finansal kurumlar ile yetkili uygulamalar arasında kontrollü veri alışverişi veya işlem başlatma için kullanılan arayüz, dokümantasyon ya da güvenlik bileşenidir. Açık bankacılıkta erişim yetkisi, kimlik doğrulama, izleme ve teknik standartlarla birlikte değerlendirilir.`;
  }
  if (term.includes("Kimlik") || term.includes("KYC") || term.includes("Yetkilendirme") || term.includes("Şifreleme")) {
    return `${term}, dijital finansal hizmetlerde müşterinin veya sistemin güvenli biçimde tanınması, erişim hakkının sınırlandırılması ve hassas verinin korunması için kullanılan güvenlik kavramıdır. Uyum, bilgi güvenliği ve operasyon ekipleri açısından kritik kontrol alanıdır.`;
  }
  if (term.includes("Ödeme") || term.includes("POS") || term.includes("Kart") || term.includes("Cüzdan")) {
    return `${term}, para transferi, kartlı işlem, dijital cüzdan veya ödeme kabul süreçlerinde kullanılan ürün ya da altyapı kavramıdır. İşlem güvenliği, mutabakat, müşteri deneyimi ve düzenleyici uyum boyutlarıyla birlikte izlenir.`;
  }
  if (term.includes("Veri") || term.includes("Gizlilik") || term.includes("İzin")) {
    return `${term}, müşteri veya işlem verisinin hangi kapsamda toplandığını, işlendiğini, saklandığını ya da paylaşıldığını anlatan veri yönetişimi kavramıdır. Finansal hizmetlerde açık rıza, erişim kontrolü ve mevzuata uyumla birlikte ele alınır.`;
  }
  if (term.includes("Bankacılık") || term.includes("Finans") || term.includes("FinTech") || term.includes("PSD2")) {
    return `${term}, finansal hizmetlerin dijital kanallar, açık veri paylaşımı ve teknoloji tabanlı ürünlerle sunulmasını anlatan temel kavramdır. Rekabet, inovasyon, güvenli ödeme ve müşteri verisi koruması bu başlığın ana bileşenleridir.`;
  }
  return `${term}, dijital finans ve bankacılık süreçlerinde veri paylaşımı, güvenli işlem, müşteri deneyimi veya sistem entegrasyonu tarafında kullanılan temel bir kavramdır. Operasyon, uyum ve ürün ekipleri bu başlığı hizmet kalitesi, erişim güvenliği ve süreç verimliliği açısından izler.`;
}

function buildGlossary() {
  const items = [];

  sourceInspiredTerms.forEach((term) => {
    items.push({
      term,
      category: "Açık Bankacılık ve FinTech",
      description: sentenceForSourceTerm(term),
    });
  });

  curatedTerms.forEach(([term, category, description]) => {
    items.push({ term, category, description });
  });

  Object.entries(domainGroups).forEach(([category, domains]) => {
    const templates = categoryMetricTemplates[category] ?? [];
    domains.forEach((domain) => {
      templates.forEach(([suffix, text]) => {
        const term = domain.endsWith(suffix) ? domain : `${domain} ${suffix}`;
        items.push({
          term,
          category,
          description: `${term}, ${domain.toLocaleLowerCase("tr-TR")} kapsamında ${text}. Bu kavram yönetim raporlaması, limit takibi, kontrol çalışmaları veya karar destek analizlerinde bağlama göre kullanılır.`,
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
    .map((item) => ({ ...item, source: sourceForItem(item) }))
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
    const text = normalise(`${item.term} ${item.category} ${item.description} ${item.source.label}`);
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
            <span class="term-meta">
              <span class="term-category">${item.category}</span>
              <a class="term-source" href="${item.source.url}" target="_blank" rel="noreferrer">
                Kaynak: ${item.source.label}
              </a>
            </span>
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
    <a class="featured-source" href="${item.source.url}" target="_blank" rel="noreferrer">
      Kaynak: ${item.source.label}
    </a>
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

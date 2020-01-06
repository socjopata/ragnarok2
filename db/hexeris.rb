puts "creating hexeris..."

hexeri = Hexeri.create(
  name: "Dotyk Eir",
  internal_name: "touch_of_eir",
  kind: "Seidr",
  sophistication: "basic",
  mana_cost: 4,
  range: "Dotyk",
  casting_difficulty: 12,
  description: "# Działanie: dotknięta, żywa istota leczona jest z k20+E ran. Podbicie: czar uspokaja dotkniętą osobę (opis i dokładny efekt ustala MG)."
)

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Gwiezdna Konwergencja",
  internal_name: "convergence_of_stars",
  kind: "Seidr",
  sophistication: "basic",
  mana_cost: 3,
  range: "Tylko rzucający",
  casting_difficulty: 11,
  description: "rzucający otrzymuje +3pkt do Gwiezdnego Pilotażu. Efekt utrzymuje się przez godzinę.
Podbicie:  jw. a moc zwiększa również Trafienie Weterana z dział pokładowych statku.
Potężne Podbicie: Weteran może swobodnie poruszać się w przestrzeni kosmicznej stając się odporny na warunki w niej panujące.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Męstwo Midgard'u",
  internal_name: "bravery_of_midgard",
  kind: "Seidr",
  sophistication: "basic",
  mana_cost: 2,
  range: "50 metrów",
  casting_difficulty: 10,
  description: "wybrana, żywa istota zostaje wyzwolona spod działania Strachu. Zaklęcie działa natychmiast jeżeli cel poddany jest ww efektowi lub utrzymuje się do zachodu słońca dopóki najbliższe takie działanie nie wpłynie na chronioną postać.
Podbicie: jw. z tym, że postać ta chroniona jest zarówno przed Strachem i Grozę.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Natchnienie Eir",
  internal_name: "eir_inspiration",
  kind: "Seidr",
  sophistication: "basic",
  mana_cost: 4,
  range: "Dotyk",
  casting_difficulty: 10,
  description: "Działanie: dotknięta, żywa istota przestaje być głodna i spragniona, traktowana jest jakby zjadła solidny posiłek.
Podbicie: jw. a dotknięty Weteran zostaje wybawiony z: Ogłuszenia i/lub Otumanienia.
Potężne Podbicie: jw. ponadto uzdrawiana jest z k10pkt Ran.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Klątwa Wiedźmy",
  internal_name: "witch_curse",
  kind: "Seidr",
  sophistication: "basic",
  mana_cost: 4,
  range: "Dotyk",
  casting_difficulty: 10,
  description: "Działanie: dotknięta, żywa istota przestaje być głodna i spragniona, traktowana jest jakby zjadła solidny posiłek.
Podbicie: jw. a dotknięty Weteran zostaje wybawiony z: Ogłuszenia i/lub Otumanienia.
Potężne Podbicie: jw. ponadto uzdrawiana jest z k10pkt Ran.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Potęga Midgard'u",
  internal_name: "power_of_midgard",
  kind: "Seidr",
  sophistication: "advanced",
  mana_cost: 3,
  range: "15 metrów",
  casting_difficulty: 13,
  description: "wybrana istota otrzymuje +2pkt do Trafienia, Obrony i zadawanych Obrażeń (zarówno w broni dystansowej jak i w walce w zwarciu). Zaklęcie utrzymuje się przez 3rundy za każdy punkt E rzucającego.
Podbicie: jw, a czar działa na dodatkową osobę lub przez najbliższą godzinę.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Detoks",
  internal_name: "detox",
  kind: "Seidr",
  sophistication: "advanced",
  mana_cost: 3,
  range: "Dotyk",
  casting_difficulty: 11,
  description: "rzucający wyczuwa wszystkie toksyny i stymulanty działające na dotkniętą  postać.
Podbicie: jw, dodatkowo Weteran likwiduje działanie jednej, wybranej toksyny lub stymulantu w organizmie dotkniętej istoty.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Oddech Nicości",
  internal_name: "breath_of_nothingness",
  kind: "Seidr",
  sophistication: "advanced",
  mana_cost: 3,
  range: "15 metrów",
  casting_difficulty: 16,
  description: "czar przywołuje promień nicości o średnicy 1m. Wszystko w prostej linii od rzucającego dotknięte przez moc zaklęcia otrzymuje 3k10ran.
Podbicie: jw, a strumień nicości ma średnicę 3metrów.
Potężne Podbicie: jw, a strumień nicości ma średnicę 5metrów i leci na odległość 50 metrów.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Wola Eir",
  internal_name: "will_of_eir",
  kind: "Seidr",
  sophistication: "advanced",
  mana_cost: 5,
  range: "10 metrów",
  casting_difficulty: 18,
  description: "rzucający leczy wybranej, żywej istocie 3k10+E ran.
Podbicie: jw, a zasięg zwiększony jest do 50 metrów.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Dar Eir",
  internal_name: "gift_of_eir",
  kind: "Seidr",
  sophistication: "master",
  mana_cost: 15,
  range: "5 metrów",
  casting_difficulty: 20,
  description: "zaklęcie leczy, wybraną, żywą istotę z wszystkich ran.
Podbicie: Koszt i PT +10, magia Eir przywraca do życia człowieka, który zmarł nie później niż rundę temu.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "8")

hexeri = Hexeri.create(
  name: "Dar Eir",
  internal_name: "gift_of_eir",
  kind: "Seidr",
  sophistication: "master",
  mana_cost: 15,
  range: "5 metrów",
  casting_difficulty: 20,
  description: "zaklęcie leczy, wybraną, żywą istotę z wszystkich ran.
Podbicie: Koszt i PT +10, magia Eir przywraca do życia człowieka, który zmarł nie później niż rundę temu.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "8")

hexeri = Hexeri.create(
  name: "Emanacja Hekseri",
  internal_name: "hexeri_emanation",
  kind: "Seidr",
  sophistication: "master",
  mana_cost: 5,
  range: "Dotyk",
  casting_difficulty: 17,
  description: "Weteran wyczuwa wszystkie efekty magiczne działające na dotkniętą postać. Zaklęcie nie działa na rzucającego.
Podbicie: jw, ponadto Weteran likwiduje działanie jednego, wybranego zaklęcia, które dotyczy dotkniętej istoty.
Potężne Podbicie: jw. oraz niweluje działanie wszystkich toksyn  oraz zaklęć działających na wybraną postać.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "7")

hexeri = Hexeri.create(
  name: "Emanacja Hekseri",
  internal_name: "hexeri_emanation",
  kind: "Seidr",
  sophistication: "master",
  mana_cost: 5,
  range: "Dotyk",
  casting_difficulty: 17,
  description: "Weteran wyczuwa wszystkie efekty magiczne działające na dotkniętą postać. Zaklęcie nie działa na rzucającego.
Podbicie: jw, ponadto Weteran likwiduje działanie jednego, wybranego zaklęcia, które dotyczy dotkniętej istoty.
Potężne Podbicie: jw. oraz niweluje działanie wszystkich toksyn  oraz zaklęć działających na wybraną postać.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "7")

hexeri = Hexeri.create(
  name: "Uwiąd Nicości",
  internal_name: "nothingness_decay",
  kind: "Seidr",
  sophistication: "master",
  mana_cost: 4,
  range: "35metrów",
  casting_difficulty: 15,
  description: "wybrana, żywa istota traci k20+E Witalności. Przed tak zadanymi Obrażeniami nie chroni żadna umiejętności/zbroja/zasada. Dotyczy to również zasad redukujących ilość otrzymanych ran.
Podbicie: Koszt zwiększany jest o +2pkt, dzięki czemu ofiara traci k20+2xE punktów Witalności.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "As",
  internal_name: "as",
  kind: "Asgard",
  sophistication: "basic",
  mana_cost: 2,
  range: "10metrów",
  casting_difficulty: 7,
  description: "postać chroniona tym zaklęciem może skorzystać z jego mocy aby otrzymać premię do dowolnego testu nie związanego z trafieniem w walce w wysokości +2pkt. Czar utrzymuje się do najbliższego zachodu słońca lub do pierwszego użycia.
Podbicie: jw. z tym, że zapewnia premię +4pkt.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Głosy",
  internal_name: "voices",
  kind: "Asgard",
  sophistication: "basic",
  mana_cost: 2,
  range: "20metrów",
  casting_difficulty: 9,
  description: "ofiara Hekseri zostaje Otumaniona do końca następnej rundy.
Podbicie: jw. z tym, że jego moc może zostać skierowana na dodatkową istotę.
Potężne Podbicie: Hekseri działa przez 1rundę za każdy pkt E rzucającego.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Kontrola Przeznaczenia",
  internal_name: "voices",
  kind: "Asgard",
  sophistication: "basic",
  mana_cost: 2,
  range: "Dotyk",
  casting_difficulty: 15,
  description: "aktywując moc zaklęcia Weteran może Przesunąć wynik na dowolnej kości jaką rzucił o +/-2pkt. Efekt czaru jest jednorazowy i utrzymuje się do zmierzchu.
Podbicie: jw. a zaklęcie działa na dowolną osobę.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Power Off",
  internal_name: "power_off",
  kind: "Asgard",
  sophistication: "basic",
  mana_cost: 3,
  range: "15metrów",
  casting_difficulty: 9,
  description: "wybrany cel traci wszystkie premie wynikające z wszczepów. Przed tym efektem nie ma rzutu obronnego.
Podbicie: jw. ponadto jeżeli cel Hekseri ma mniej niż połowę podstawowej Neurostabilności (np.: duża ilość wszczepów) musi wykonać udany Bardzo Trudny test Wytrzymałości lub zostaje Ogłuszony do końca następnej rundy.
Potężne Podbicie: efekt zaklęcia działa na obszarze o promieniu 5metrów.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Osłona Niebios",
  internal_name: "power_off",
  kind: "Asgard",
  sophistication: "basic",
  mana_cost: 4,
  range: "tylko Rzucający",
  casting_difficulty: 10,
  description: "wybrany cel traci wszystkie premie wynikające z wszczepów. Przed tym efektem nie ma rzutu obronnego.
Podbicie: jw. ponadto jeżeli cel Hekseri ma mniej niż połowę podstawowej Neurostabilności (np.: duża ilość wszczepów) musi wykonać udany Bardzo Trudny test Wytrzymałości lub zostaje Ogłuszony do końca następnej rundy.
Potężne Podbicie: efekt zaklęcia działa na obszarze o promieniu 5metrów.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Oszukać Grawitację",
  internal_name: "power_off",
  kind: "Asgard",
  sophistication: "advanced",
  mana_cost: 4,
  range: "5metrów",
  casting_difficulty: 19,
  description: "rzucający wykonuje natychmiastowy, darmowy lot, którego zasięg nie może przekroczyć 20metrów.
Podbicie: jw a zaklęcie działa na wybraną sojuszniczą postać.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "Piorun Asgardu",
  internal_name: "asgard_thunder",
  kind: "Asgard",
  sophistication: "advanced",
  mana_cost: 2,
  range: "25metrów",
  casting_difficulty: 15,
  description: "cel zaklęcia otrzymuje 3k10pkt Obrażeń. Jeżeli ofiara nosi pancerz wspomagany lub jest mokra (np.: stoi w wodzie, pada deszcz, itp.) otrzymuje dodatkowe 2k10pkt ran. Przed obrażeniami tak powstałymi chroni tylko i wyłącznie magiczna zbroja.
Podbicie: istoty cybernetyczne tj.: roboty, cele w pancerzach wspomaganych, maszyny, istoty z Neurostabilnością poniżej połowy, itp. otrzymują dodatkowe 2pkt ran za każdy punkt E rzucającego.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Rozmowy z Mimirem",
  internal_name: "conversations_with_mimir",
  kind: "Asgard",
  sophistication: "advanced",
  mana_cost: 4,
  range: "Dotyk",
  casting_difficulty: 20,
  description: "rzucający może zadać jedno pytanie dotykanemu zmarłemu rasy ludzkiej. Wymogiem jest posiadanie przez truposza całej głowy. Martwy nie musi odpowiadać, jeżeli tego nie chce lub nie leży to w jego interesie.
Podbicie: jw. z tym, że zaklęcie działa również na Elfy, Karły i Olbrzymy.
Potężne Podbicie: truposz wykonuje Trudny test Siły Woli aby oprzeć się mocy zaklęcia, jeżeli mu się nie powiedzie musi odpowiedzieć na zadane pytanie i to zgodnie z prawdą. Rzucający może prowadzić rozmowę na zasadach ustalonych powyżej tak długo jak tylko będzie tego potrzebował.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Wyłączenie",
  internal_name: "disable",
  kind: "Asgard",
  sophistication: "advanced",
  mana_cost: 5,
  range: "Promień 10metrów",
  casting_difficulty: 15,
  description: "w zasięgu Hekseri Weteran wyczuwa wszystkie elektroniczne urządzenia i może wyłączyć jedno z nich.
Podbicie: jw. natomiast promień działania zwiększony jest do 15m i rzucający może wyłączyć  dowolne z nich.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "7")

hexeri = Hexeri.create(
  name: "Burza Mózgów",
  internal_name: "brainstorm",
  kind: "Asgard",
  sophistication: "master",
  mana_cost: 3,
  range: "5metrów",
  casting_difficulty: 17,
  description: "cel Hekseri oraz rzucający wykonują test INT+E. Przegrana istota otrzymuje 3k10obrażeń zwiększonych o różnicę pomiędzy wynikami. Czar działa tylko i wyłącznie na żywe człekokształtne istoty.
Podbicie: jw. z tym, że w przypadku kiedy rzucający przegra test nie otrzymuje żadnych ran.
Potężne Podbicie: koszt rzucenia zwiększa się o +3pkt, a jeżeli ofiara zaklęcia przegra test otrzymuje dwukrotnie więcej obrażeń.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "9")

hexeri = Hexeri.create(
  name: "Piorun Łańcuchowy",
  internal_name: "chain_lightning",
  kind: "Asgard",
  sophistication: "master",
  mana_cost: 5,
  range: "20metrów",
  casting_difficulty: 25,
  description: "zaklęcie działa w identyczny sposób jak czar Piorun Asgardu zadając ofierze 4k10Obrażeń, przy czym dodatkowo można zadać za jego pomoc 2k10ran istocie znajdującej się najbliżej od celu zaklęcia i nie dalej niż 5metrów od niego.
Podbicie: jw, a wszystkie istoty znajdujące się nie dalej niż 5metrów od ofiary otrzymują 3k10ran. ")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "8")

hexeri = Hexeri.create(
  name: "Zbroja Odyna",
  internal_name: "odins_armor",
  kind: "Asgard",
  sophistication: "master",
  mana_cost: 5,
  range: "Dotyk",
  casting_difficulty: 20,
  description: "w momencie pierwszego ciosu, który trafia rzucającego jego pancerz zostaje zwiększony o wartość E. Hekseri utrzymuje się do najbliższego wschodu, a po aktywacji chroni do końca następnej rundy.
Podbicie: jw. a aura po aktywacji działa przez ilość rund równą jego E.
Potężne Podbicie: jw. a Hekseri działa na wybraną istotę.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "8")

hexeri = Hexeri.create(
  name: "Oblicza Niflheimu",
  internal_name: "nilfheim_visages",
  kind: "Nilfheim",
  sophistication: "basic",
  mana_cost: 2,
  range: "15 metrów",
  casting_difficulty: 10,
  description: "wybrana, żywa istota zostaje poddana działaniu Strachu.
Podbicie: jw. a rzucający może skierować moc Hekseri na dodatkowy cel.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Osnowa Przeklętych",
  internal_name: "warp_of_the_cursed",
  kind: "Nilfheim",
  sophistication: "basic",
  mana_cost: 6,
  range: "tylko rzucający",
  casting_difficulty: 11,
  description: "pierwsza istota, która zadeklaruje agresywną akcję względem rzucającego musi wykonać Trudny test Siły Woli lub zostaje Otumaniona na okres 2k10rund. Moc osnowy utrzymuje się do najbliższego wschodu słońca lub pierwszej aktywacji.
Podbicie: jw. z tym, że działa na pierwszą istotę oraz wszystkie pozostałe, które zaatakują rzucającego w rundzie aktywowania Hekseri.
Potężne Podbicie: jw. a postacie zostają Ogłuszone a nie Otumanione.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Smycz",
  internal_name: "leash",
  kind: "Nilfheim",
  sophistication: "basic",
  mana_cost: 3,
  range: "15 metrów",
  casting_difficulty: 12,
  description: "wybrana istota zostaje przyciągnięta w kierunku rzucającego na odległość 1-5metrów od niego. Decyzja o punkcie podejmowana jest przez splatającego Hekseri jednak lot ofiary odbywa się w linii prostej. Jeżeli postać natrafi na przeszkodę otrzymuje k10pkt ran bez możliwości skorzystania z pancerza. MG określa czy ruch jest kontynuowany czy zapora całkowicie uniemożliwi dalsze przemieszczenie.
Podbicie: wybrana istota zostaje przesunięta o odległość nie większą niż k10+2m/E w dowolnym kierunku na zasadach opisanych powyżej.
Potężne Podbicie: jw. efekt działa na dodatkową istotę.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Szwindel",
  internal_name: "swindle",
  kind: "Nilfheim",
  sophistication: "basic",
  mana_cost: 3,
  range: "tylko rzucający",
  casting_difficulty: 12,
  description: "wszystkie akcje związane z Trikiem i Fortelem otrzymują premię +2pkt. Bonus ten przyznawany jest również przy testach Charyzmy i Prezencji związanych z oszustwem (decyzja MG). Hekseri utrzymuje się przez godzinę.
Podbicie: jw. a premia wynosi +4pkt.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "To tylko Ja",
  internal_name: "just_me",
  kind: "Nilfheim",
  sophistication: "basic",
  mana_cost: 4,
  range: "tylko rzucający",
  casting_difficulty: 14,
  description: "rzucający zostaje otoczony iluzją, dzięki której każda istota, która go zobaczy jest przekonana, iż jest to jej znajomy (ktoś kogo pamięta z dawnych czasów, itp.). Ofiara/ofiary mają prawo do wykonania Bardzo Trudnego Testu Wyczulonych Zmysłów aby sprawdzić czy uda im się dostrzec prawdę. Hekseri utrzymuje się przez Godzinę.
Podbicie: jw, a ofiary muszą zdać Ekstremalny Test Wyczulonych Zmysłów.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Choroby",
  internal_name: "diseases",
  kind: "Nilfheim",
  sophistication: "advanced",
  mana_cost: 3,
  range: "5 metrów",
  casting_difficulty: 16,
  description: "ofiara Hekseri zapada na tajemniczą chorobę, która osłabia jej organizm, co w praktyce oznacza, że otrzymuje karę -5pkt do wszystkich testów. Efekt działa tylko na żywe humanoidy i rozpoczyna swe działanie po k20godzinach. Choroba ustaje po k10dniach.
Podbicie: jw. z tym, że kara nałożona na zatrutą postać wynosi aż -10pkt, a jej działanie utrzymuje się dwukrotnie dłużej.
Potężne Podbicie: Hekseri działa na ilość celów równą E rzucającego.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "0")

hexeri = Hexeri.create(
  name: "Jady",
  internal_name: "poisons",
  kind: "Nilfheim",
  sophistication: "advanced",
  mana_cost: 4,
  range: "20 metrów",
  casting_difficulty: 15,
  description: "ofiara Hekseri otrzymuje na końcu każdej rundy k10pkt ran. Efekt utrzymuje się przez ilość rund równą E rzucającego. Wszczepy i medykamenty zwalczające toksyny mogą powstrzymać Jady zgodnie ze swoimi działaniami.
Podbicie: jw. przy czym ran tak zadanych nie można zredukować za pomocą żadnego pancerza ani wszczepu. Działanie trucizny wydłużone jest dwukrotnie.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "Prorocze Podszepty",
  internal_name: "prophety_whispers",
  kind: "Nilfheim",
  sophistication: "advanced",
  mana_cost: 4,
  range: "tylko rzucający",
  casting_difficulty: 17,
  description: "pierwszy trafiony atak w Walce w Zwarciu, mający na celu rzucającego jest anulowany. Efekt jest jednorazowy, a moc czaru utrzymuje się do najbliższego świtu. Czar nie może być łączony z Osnową Przeklętych.
Podbicie: Hekseri utrzymuje się do końca rundy, w której zostało aktywowane, automatycznie kasując każdy atak w zwarciu wymierzony przeciw rzucającemu.
Potężne Podbicie: czar może zostać rzucony na dowolną istotę za pomocą dotyku.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Ścieżki Upadłych",
  internal_name: "paths_of_the_fallen",
  kind: "Nilfheim",
  sophistication: "advanced",
  mana_cost: 7,
  range: "tylko rzucający",
  casting_difficulty: 20,
  description: "postać przemieszcza się z cienia do innego widocznego miejsca, w którym panuje ciemność. Ruch nie może przekroczyć E rzucającego wyrażonej w metrach i jest natychmiastowy.
Podbicie: jw. a ruch prowadzi do innego widocznego miejsca, w którym panuje ciemność. ")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "Ognie Piekieł",
  internal_name: "hell_flames",
  kind: "Nilfheim",
  sophistication: "master",
  mana_cost: 4,
  range: "25 metrów",
  casting_difficulty: 24,
  description: "ofiara celu otrzymuje k10obrażeń za każdy punkt E rzucającego. Przed mocą Hekseri nie chroni żaden test Siły Woli jednak pancerze zmniejszają zadane Obrażenia w standardowy sposób (wybierając wyższy parametr ochronny).
Podbicie: przed czarem chronią tylko zbroje magiczne lub wspomagane.
Potężne Podbicie: zaklęcie zwiększa swoją moc i wybucha ogniem w promieniu 5metrów.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "7")

hexeri = Hexeri.create(
  name: "Twarze Zdrady",
  internal_name: "faces_of_betrayal",
  kind: "Nilfheim",
  sophistication: "master",
  mana_cost: 4,
  range: "promień 10 metrów",
  casting_difficulty: 22,
  description: "Weteran mąci w  umysłach wrogów, którzy znajdują się w promieniu 10 metrów od niego, powodując, że oblicza walczących zmieniają się ciągle w ich oczach. Wprawia ich to w oszołomienie i uniemożliwia skuteczną walkę przez liczbę rund równą połowie Entropii rzucającego. Mogą jedynie bronić się, bez możliwości ataku.
Podbicie: zwiększenie czasu trwania do wartości pełnej Entropii.
Potężne Podbicie: kara -5 do Obrony dla będących pod efektem czaru.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "8")

hexeri = Hexeri.create(
  name: "Wola Moja",
  internal_name: "the_will_of_mine",
  kind: "Nilfheim",
  sophistication: "master",
  mana_cost: 10,
  range: "10 metrów",
  casting_difficulty: 20,
  description: "postać zmusza ofiarę do wykonania jednej czynności – prostego zadania, które nie jest sprzeczne z jej naturą (decyzja MG). Hekseri działa tylko na żywych humanoidów. Po zakończeniu zadania istocie wraca kontrola oraz pamięć o swych czynach. W chwili kiedy  ofiara oddali się od rzucającego na odległość większą niż 100metrów efekt Hekseri natychmiast się kończy. Dopóki Hekseri jest aktywne nie można rzucić go ponownie.
Podbicie: jw. jednak ofiara nie pamięta co się wydarzyło.
Potężne Podbicie: jw. a ofiara musi wykonać jedno zadanie/polecenie, które może być sprzeczne z jego charakterem bądź naturą.
Epickie Podbicie: jw. a ofiara jest pod wpływem rzucającego aż do jej lub jego śmierci, a kontrola zwiększona jest do jednego kilometra. ")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "10")

hexeri = Hexeri.create(
  name: "Mróz",
  internal_name: "frost",
  kind: "Jotunheim",
  sophistication: "basic",
  mana_cost: 1,
  range: "10metrów",
  casting_difficulty: 14,
  description: "żywa istota zostaje częściowo sparaliżowana. Do końca następnej rundy – nie może skorzystać z ruchu i otrzymuje karę do Obrony -5pkt. Mieszkańcy Jotunheimu są wyjątkowo odporni na działanie mrozu, w wyniku czego otrzymują premię do rzutu obronnego na Siłę Woli +10pkt.
Podbicie: rzucający może objąć działaniem zaklęcia obszar o promieniu 1m za każdy pkt E. W takim przypadku każdy cel musi zostać pokonany osobno.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Gniew",
  internal_name: "anger",
  kind: "Jotunheim",
  sophistication: "basic",
  mana_cost: 2,
  range: "Dotyk",
  casting_difficulty: 13,
  description: "zaklęcie utrzymuje się przez okres godziny za każdy punkt E i zwiększa Trafienie i zadawane przez rzucającego Obrażenia w zwarciu o +2pkt.
Podbicie: wszystkie ataki w zwarciu wyprowadzone przez Weterana traktowane są jako magiczne.
Potężne Podbicie: moc działa na dowolną istotę.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Wigor",
  internal_name: "vigor",
  kind: "Jotunheim",
  sophistication: "basic",
  mana_cost: 5,
  range: "tylko rzucający",
  casting_difficulty: 14,
  description: "za każdym razem kiedy Weteran zabije w Walce w Zwarciu przeciwnika otrzymuje do końca następnej rundy +3pkt do Trafienia i Obrony. Hekseri działa do końca następnej rundy
Podbicie: jw. dodatkowo lecząc rzucającemu 3PŻ i zwiększając zadawane przez niego Obrażenia o +3pkt.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Potęga",
  internal_name: "might",
  kind: "Jotunheim",
  sophistication: "basic",
  mana_cost: 4,
  range: "5 metrów",
  casting_difficulty: 15,
  description: "rzucający zyskuje jeden, darmowy atak w zwarciu (nie wlicza się do limitu ciosów). Moc zaklęcia utrzymuje się przez 1rundę.
Podbicie: jw a Hekseri trwa do końca następnej rundy")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Twardziel",
  internal_name: "tough_guy",
  kind: "Jotunheim",
  sophistication: "basic",
  mana_cost: 3,
  range: "Dotyk",
  casting_difficulty: 9,
  description: "Bohater nie może zostać Ogłuszony, Otumaniony ani Powalony standardowym efektem z broni lub czaru, ponadto zyskuje +5pkt do Wytrzymałości i Siły Woli. Hekseri utrzymuje się przez 24godziny.
Podbicie: jw, a za każdym razem kiedy stanie się celem wrogiego Hekseri i przeżyje jego efekt zadaje twórcy tego zaklęcia k20+E Obrażeń.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Lód",
  internal_name: "ice",
  kind: "Jotunheim",
  sophistication: "advanced",
  mana_cost: 4,
  range: "10metrów",
  casting_difficulty: 18,
  description: "istota zostaje zamrożona do początku następnej rundy. Każdy cios w walce w zwarciu trafia ją automatycznie i zadaje podwójne Obrażenia.
Podbicie: jw. a Hekseri działa na dodatkowy cel.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "Szał",
  internal_name: "frenzy",
  kind: "Jotunheim",
  sophistication: "advanced",
  mana_cost: 6,
  range: "tylko Rzucający",
  casting_difficulty: 16,
  description: "za każdym razem kiedy postać zostanie Trafiona w walce w Zwarciu zwiększa swoje Trafienie w Zwarciu o +3pkt. Premia ta przyznawana jest do następnego ataku, który wykona. Bonus ten może się kumulować, np.: jeżeli Weteran otrzyma dwa ciosy, premia wzrasta do +6pkt. Zaklęcie utrzymuje się do końca starcia/sceny.
Podbicie: jw. z tym, że premia zwiększa również zadawane Obrażenia.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Osnowa Jotunów",
  internal_name: "jotuns_warp",
  kind: "Jotunheim",
  sophistication: "advanced",
  mana_cost: 3,
  range: "Promień 5metrów",
  casting_difficulty: 18,
  description: "rzucający roztacza wokół siebie ochronne pole, dzięki któremu wszystkie czynniki zewnętrzne nie mają na niego negatywnego wpływu (ogień, deszcz, pustka, brak tlenu, itp). Efekt utrzymuje się przez godzinę czasu i obejmuje swym działaniem wszystkie istoty znajdujące się wewnątrz aury.
Podbicie: jw. a promień osłony zwiększony jest do 15metrów.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Zew",
  internal_name: "the_call",
  kind: "Jotunheim",
  sophistication: "advanced",
  mana_cost: 5,
  range: "tylko rzucający",
  casting_difficulty: 20,
  description: "rzucający przywołuje potężne moce, które transformują go w jednego z mieszkańców pustkowi Jotunheimu. Będąc w nowej postaci Weteran nie może korzystać z Hekseri ani mowy. Zachowuje swoją INT, E, umiejętności, zalety i atuty. Resztę cech należy zaczerpnąć z konkretnej istoty z Bestiariusza. Przemiana zajmuje 2k10 minut i utrzymuje się do najbliższego świtu. Rany otrzymane będąc w innej formie przenoszone są na rzucającego dopiero kiedy spadną poniżej jego oryginalnej Witalności.
Weteran przemienia się w Warga.
Podbicie: jw. a Weteran staje się Wargiem Przywódcą Stada.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "Uścisk Zimy",
  internal_name: "winters_grip",
  kind: "Jotunheim",
  sophistication: "master",
  mana_cost: 5,
  range: "15metrów",
  casting_difficulty: 20,
  description: "cel ataku musi wykonać udany Trudny test Wytrzymałości lub traci przytomność na ilość rund równą E rzucającego. Dodatkowo na końcu każdej rundy, w której ofiara jest nieprzytomna traci 2k10obrażeń. Pancerze jak i inne formy protekcji, nawet te magiczne, zapewniają tylko połowiczną ochronę.
Podbicie: jw. a Hekseri działa na dodatkową istotę")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "7")

hexeri = Hexeri.create(
  name: "Lodowa Burza",
  internal_name: "hailstorm",
  kind: "Jotunheim",
  sophistication: "master",
  mana_cost: 10,
  range: "-",
  casting_difficulty: 19,
  description: "rzucający rozpętuje burzę lodową, która obejmuje obszar w promieniu równemu E wyrażonemu w metrach. Wszystkie istoty otrzymują karę, bez prawa do rzutu obronnego, w wysokości -5pkt do Trafienia i Obrony. Rzucający oraz istoty z Jotunheim są odporne na poniższe działanie. Hekseri utrzymuje się przez ilość rund równą E rzucającego.
Podbicie: jw. ponadto zasięg i czas trwania Hekseri zostaje zwiększony dwukrotnie.
Potężne Podbicie: jw. a istoty będące na końcu każdej rundy wewnątrz burzy tracą 2pkt Witalności.
Epickie Podbicie: jw. a wszystkie negatywne efekty nie działają na wybranych sojuszników rzucającego.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "7")

hexeri = Hexeri.create(
  name: "Imię me Jotun",
  internal_name: "my_name_is_jotun",
  kind: "Jotunheim",
  sophistication: "master",
  mana_cost: 15,
  range: "tylko rzucający",
  casting_difficulty: 25,
  description: "rzucający przywołuje potężne moce, które transformują go w jednego z mieszkańców pustkowi Jotunheimu. Będąc w nowej postaci Weteran ma podwyższony PT wszystkich Hekseri o 10pkt. Zachowuje swoją INT, E, umiejętności, zalety i atuty. Resztę cech należy zaczerpnąć z konkretnej istoty z Bestiariusza. Przemiana zajmuje 2k20 minut i utrzymuje się do najbliższego świtu. Rany otrzymane będąc w innej formie przenoszone są na rzucającego dopiero, kiedy spadną poniżej jego oryginalnej Witalności.
Weteran staje się Gigantem Lodowym.
Podbicie: jw. a Weteran staje się Olbrzymem Lodowym.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "9")

hexeri = Hexeri.create(
  name: "Dehydracja",
  internal_name: "dehydration",
  kind: "Vanaheim",
  sophistication: "basic",
  mana_cost: 3,
  range: "5metrów",
  casting_difficulty: 12,
  description: "ofiara zostaje pozbawiona sporej ilości wody z organizmu co powoduje Efekt Otumanienia.
Podbicie: jw. z tym, że istota traci przytomność i jeżeli w przeciągu najbliższej godziny nie uzupełni płynów umrze.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Mistrzostwo Njorda",
  internal_name: "njord_mastery",
  kind: "Vanaheim",
  sophistication: "basic",
  mana_cost: 2,
  range: "Dotyk",
  casting_difficulty: 8,
  description: "postać chroniona tym Hekseri nie może utonąć, a woda opiekuje się wybrańcem zapewniając mu spokój i wypoczynek. Ponadto Weteran może nurkować bez ograniczeń swobodnie oddychając pod wodą. Hekseri utrzymuje się przez 24godziny.
Podbicie: jw, zwiększając pancerz bohatera oraz jego Obronę o +1pkt.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Pokój Wszystkim",
  internal_name: "peace_to_everyone",
  kind: "Vanaheim",
  sophistication: "basic",
  mana_cost: 2,
  range: "10metrów",
  casting_difficulty: 8,
  description: "wybrana istota odnosi automatyczną porażkę w następnym ataku jaki wykona.
Podbicie: jw. a Hekseri działa na dodatkowy cel.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "3")

hexeri = Hexeri.create(
  name: "Wiedza",
  internal_name: "knowledge",
  kind: "Vanaheim",
  sophistication: "basic",
  mana_cost: 4,
  range: "Dotyk",
  casting_difficulty: 10,
  description: "wszystkie testy Wiedzy jakie wykona postać chroniona tym Hekseri otrzymują premię +5pkt do rzutu. Czar utrzymuje się przez godzinę za każdy punkt E rzucającego
Podbicie: jw. dodatkowo postać może wykonać jeden przerzut ww. testu.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Wola Vanów",
  internal_name: "the_will_of_vans",
  kind: "Vanaheim",
  sophistication: "basic",
  mana_cost: 3,
  range: "1 kilometr",
  casting_difficulty: 13,
  description: "postać potrafi kontrolować pogodę w promieniu jednego kilometra. Zmiany zachodzą w przeciągu kilkunastu minut, jednak im większe mają być tym szybciej zaklęcie będzie miało swój kres – określa MG. Standardowo utrzymuje się przez godzinę za każdy punkt E.
Podbicie: jw. a zasięg zwiększany jest do dwóch kilometrów.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Dar Freya",
  internal_name: "freys_gift",
  kind: "Vanaheim",
  sophistication: "advanced",
  mana_cost: 3,
  range: "Dotyk",
  casting_difficulty: 15,
  description: "Prezencja dotkniętej osoby zostaje zwiększona o +5pkt. Ponadto w przypadku mężczyzn zwiększają oni zdecydowanie swoje możliwości intymne. Zaklęcie działa przez godzinę za każdy punkt E rzucającego.
Podbicie: postać może przerzucić pierwszy nie udany test Prezencji jaki wykona.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Cisza",
  internal_name: "silence",
  kind: "Vanaheim",
  sophistication: "advanced",
  mana_cost: 2,
  range: "promień 5metrów",
  casting_difficulty: 15,
  description: "Hekseri działa w promieniu 5m i wygłusza wszystkie dźwięki tam powstałe. Efekt utrzymuje się do końca starcia/sceny.
Podbicie: jw. a promień zaklęcia zwiększony jest do 10metrów.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "Obecność Frei",
  internal_name: "freya_presence",
  kind: "Vanaheim",
  sophistication: "advanced",
  mana_cost: 3,
  range: "Dotyk",
  casting_difficulty: 14,
  description: "rzucający zwiększa swoją Charyzmę o +5pkt. Zaklęcie utrzymuje się przez godzinę.
Podbicie: Hekseri utrzymuje się do najbliższego świtu.
Potężne Podbicie: efekt działa na dotkniętą osobę.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Potęga Aegira",
  internal_name: "aegirs_might",
  kind: "Vanaheim",
  sophistication: "advanced",
  mana_cost: 3,
  range: "5metrów",
  casting_difficulty: 17,
  description: "cel zaklęcia otrzymuje 2pkt Obrażeń za każdy punkt, który zabrakło mu aby obronić się przed Hekseri.
Podbicie: jw. a cel zaklęcia otrzymuje 3pkt za każdy punkt, o który przegrał w teście obronnym.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "7")

hexeri = Hexeri.create(
  name: "Ręka Boga",
  internal_name: "hand_of_god",
  kind: "Vanaheim",
  sophistication: "master",
  mana_cost: 8,
  range: "10 metrów",
  casting_difficulty: 20,
  description: "wybrana postać zwiększa Obrażenia w broniach dystansowych o +5pkt. Dodatkowo każdy trafiony przez nią strzał rozpatrywany jest jako Trafienie Krytyczne. Efekt utrzymuje się przez godzinę.
Podbicie: jw. a efekt przenosi się również na bronie będące na wyposażeniu pojazdów jakimi steruje wybraniec. Efekt utrzymuje się przez godzinę za każdy punkt INT.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "8")

hexeri = Hexeri.create(
  name: "Oczy Yggdrasila",
  internal_name: "eyes_of_yggdrasil",
  kind: "Vanaheim",
  sophistication: "master",
  mana_cost: 4,
  range: "tylko rzucający",
  casting_difficulty: 21,
  description: "Weteran otrzymuje premię +3pkt do wszystkich testów Hackowania oraz staje się prawie niewykrywalny dla systemów obronnych Ygddrasila. Postać otrzymuje jedynie połowę obrażeń podczas przebywania w Sieci. Hekseri utrzymuje się do najbliższego wschodu słońca.
")
hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "7")

hexeri = Hexeri.create(
  name: "Oblicze Odmętów",
  internal_name: "face_of_depths",
  kind: "Vanaheim",
  sophistication: "master",
  mana_cost: 5,
  range: "tylko rzucający",
  casting_difficulty: 19,
  description: "Weteran transformuje swoje ciało w wodę, utrzymując sylwetkę i wagę. W tej formie może poruszać się dwukrotnie szybciej niż normalnie, a wszystkie niemagiczne ataki nie mogą go zranić. Wszystkie efekty bazujące na ogniu zadają dwukrotnie większe obrażenia. Efekt utrzymuje się przez rundę za każdy punkt E.
Podbicie: jw. a efekt utrzymuje się przez minutę za każdy punkt E.
Potężne Podbicie: jw. a efekt utrzymuje się przez godzinę za każdy punkt E.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "8")

hexeri = Hexeri.create(
  name: "Wzrok Svartów",
  internal_name: "eyesight_of_svarts",
  kind: "Svartalfheim",
  sophistication: "basic",
  mana_cost: 2,
  range: "tylko rzucający",
  casting_difficulty: 11,
  description: "Weteran widzi wszystko to co jest niewidzialne, korzysta z kamuflażu, itp. sztuczek oraz w ciemnościach. Efekt utrzymuje się przez godzinę.
Podbicie: jw. a efekt utrzymuje się do najbliższego wschodu słońca.
Potężne Podbicie: jw. a Hekseri może być rzucone na wybranego sojusznika.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Negacja",
  internal_name: "negation",
  kind: "Svartalfheim",
  sophistication: "basic",
  mana_cost: 2,
  range: "100 metrów",
  casting_difficulty: 12,
  description: "wybrany przeciwnik do końca następnej rundy nie może wykonywać żadnych agresywnych akcji wobec rzucającego (jednakże nadal może się bronić, itp.).
Podbicie: jw. a wybrany wróg nie może zadeklarować złowrogich akcji wobec Weterana ani jego sojuszników.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Sztuczka",
  internal_name: "trick",
  kind: "Svartalfheim",
  sophistication: "basic",
  mana_cost: 3,
  range: "Dotyk",
  casting_difficulty: 10,
  description: "po rzuceniu na dowolny wybrany zamek (skobel, zapadkę, w tym elektroniczne, itp. zamknięcia) zaklęcie blokuje jego mechanizm powodując, iż nie można go otworzyć w żaden niemagiczny sposób. Jedynym wyjściem jest użycie siły (wyważenie drzwi, itp.) lub rozproszenie hekseri. Zaklęcie utrzymuje się przez godzinę za każdy punkt INT rzucającego.
Podbicie: czar umożliwia otwarcie dowolnego, niemagicznie zamkniętego zamka, skobla, itp. zapory.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Czarny Oręż",
  internal_name: "black_blade",
  kind: "Svartalfheim",
  sophistication: "basic",
  mana_cost: 3,
  range: "5 metrów",
  casting_difficulty: 9,
  description: "wybrana przez rzucającego broń do walki w zwarciu zostaje nasycona mroczną esencją i każdy zraniony przeciwnik traci dodatkowe k10pkt Witalności. Efekt utrzymuje się do końca rundy a ataki traktowane są jako magiczne.
Podbicie: jw. działa również na broń dystansową.
Potężne Podbicie: jw. a moc Hekseri utrzymuje się przez dodatkową rundę.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Mrok Svartów",
  internal_name: "svart_darkness",
  kind: "Svartalfheim",
  sophistication: "basic",
  mana_cost: 7,
  range: "Promień 2 metry wokół rzucającego.",
  casting_difficulty: 15,
  description: "czar osnuwa się wokół twórcy tworząc półmrok, utrudnia on wyprowadzenie celnego ciosu w walce wręcz oraz skutecznego strzału z broni dystansowej dając przeciwnikom karę -3pkt do Trafienia. Ciemność utrzymuje się przez 10Rund lub do pierwszego kontaktu ze światłem słonecznym (promienie słoneczne i magiczne automatycznie ją niszczą). Czar nie działa na nieumarłych i demony, a każdy Svart widzi w i poprzez Ciemność (inne postacie poruszają się wewnątrz na ślepo). Hekseri porusza się wraz z twórcą.
Podbicie: czar nabiera mocy tworząc wokół rzucającego nieprzeniknioną dla ludzkiego oka barierę. Ciemność jest tak gęsta, iż celowanie do jej wnętrza, w niej lub jakakolwiek próba ataku wewnątrz skazana jest na ślepy los. Oczywiście można strzelać lub atakować wewnątrz, ale sukces uzyskiwany jest wyłącznie przy trafieniu Krytycznym wylosowanie „Jedynki” równoznaczne jest z trafieniem jednego ze swoich (oczywiście jeżeli ktoś poza czarnoksiężnikiem tam się jeszcze znajduje). Bronie i czary obszarowe działają w normalny sposób. Zasięg zwiększony jest do promienia 5metrów. Kontakt ze światłem słonecznym częściowo ją wyłącza tworząc półmrok.
Potężne Podbicie: czar tworzy nieprzeniknioną Ciemność niezależnie od tego w jakich warunkach został rzucony. Ponadto wszystkie wrogie, żywe istoty znajdujące się w jej wnętrzu muszą wykonać udany trudny test Siły Woli lub zaczynają się dusić. Efekt ten wcześniej czy później wywoła u nich chęć natychmiastowej, panicznej ucieczki na oślep. Zasięg Ciemności zwiększony jest do  promienia 10metrów i może być dowolnie formowany.
")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "4")

hexeri = Hexeri.create(
  name: "Serce Gap-Ganinga",
  internal_name: "gap_ganig_heart",
  kind: "Svartalfheim",
  sophistication: "advanced",
  mana_cost: 6,
  range: "tylko rzucający",
  casting_difficulty: 17,
  description: "Weteran znika w czarnej otchłani, która pochłania go niczym smakowity przysmak. Postać może tam przebywać nawet kilka dni, po czym wraca w tym samym miejscu, w którym zniknęła. Czas w Gap-Ganinga płynie w odmienny sposób a postać nie ma pojęcia o wydarzeniach w realnym świecie.
Podbicie: jw. a postać ma świadomość wydarzeń mających miejsce w prawdziwym świecie. Ponadto może pojawić się w odległości do 50metrów od punktu zniknięcia.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "Cień",
  internal_name: "shadow",
  kind: "Svartalfheim",
  sophistication: "advanced",
  mana_cost: 5,
  range: "tylko rzucający",
  casting_difficulty: 14,
  description: "ciało postaci transformuje się w żywy cień. Będąc w tej formie wszystkie przeciwstawne testy w jakich bierze udział dotyczące skradania się, chowania, itp. aspektów Infiltracji otrzymują premię równą E rzucającego. Ponadto każdy cios pochodzący z niemagicznego źródła jest osłabiony. Przeciwnik rzuca dodatkową kością i odrzuca najwyższy wynik. Wystawienie się na działanie promieni słonecznych niszczy Hekseri i zadaje rzucającemu k20pkt Obrażeń bez pancerza. Efekt utrzymuje się przez minutę za każdy punkt E.
Podbicie: jw. dodatkowo w półmroku lub ciemnościach rzucający może dosłownie zniknąć. Każda osoba, która chce go dostrzec musi wykonać udany Bardzo Trudny test Wyczulonych Zmysłów. Istoty, które raz go dostrzegły nie muszą więcej wykonywać ww testu, chyba że do analogicznej sytuacji doszło podczas kolejnego starcia, w innej lokacji, itp.
")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "Kontakt z Umarłym",
  internal_name: "connection_with_dead",
  kind: "Svartalfheim",
  sophistication: "advanced",
  mana_cost: 2,
  range: "Dotyk",
  casting_difficulty: 14,
  description: "rzucający zadaje jedno pytanie martwemu osobnikowi pochodzącemu z tej samej rasy. Umarli  mogą odpowiedzieć na pytanie jeżeli taka będzie ich wola. Jedyny wymóg to posiadanie nieuszkodzona czaszki przepytywanego umarlaka.
Podbicie: jw. a ofiara Weterana, która nie obroniła przez mocą Hekseri musi odpowiedzieć na jedno pytanie. Istoty, które oparły się mocy rzucającego nie mogą być powtórnie przepytane dopóki Weteran nie zwiększy swojej Entropii.
Potężne Podbicie: zamiast powyższych efektów Weteran splata plugawą wersję zaklęcia zamieniając dotkniętego zmarłego w Draurga. Splecenie Hekseri i przemiana zajmują k10minut. Efekt jest stały a martwy znajduje się pod całkowitą kontrolą rzucającego. Utrzymanie go w takim stanie kosztuje postać 5PM dziennie. Ta wersja działa tylko na ludzi, jednak nie ma wpływu na szlachetnie zmarłych – decyzja MG.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "5")

hexeri = Hexeri.create(
  name: "Schowek",
  internal_name: "stash",
  kind: "Svartalfheim",
  sophistication: "advanced",
  mana_cost: 3,
  range: "specjalny",
  casting_difficulty: 19,
  description: "przy rzuceniu tego Hekseri Weteran wybiera jeden przedmiot, który nie jest większy niż metr sześcienny i cięższy niż 100kg. Cel zostaje ukryty w innym wymiarze, z którego właściciel może go przywołać wydając 1PM. Przedmiot pojawia się w rękach rzucającego. Weteran może posiadać tylko jeden Schowek w tym samym czasie.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

hexeri = Hexeri.create(
  name: "Jad",
  internal_name: "venom",
  kind: "Svartalfheim",
  sophistication: "master",
  mana_cost: 7,
  range: "5m",
  casting_difficulty: 19,
  description: "wybrana przez rzucającego broń zostaje nasycona przerażającą esencją a każdy zraniony nią przeciwnik musi wykonać Ekstremalny test Wytrzymałości lub zostaje Zatruty: Na końcu każdej rundy traci k20pkt Witalności wypluwając z siebie czarną posokę. Efekt utrzymuje się do końca następnej rundy a ataki traktowane są jako magiczne. Hekseri nie może być łączone z Czarnym Orężem.
Podbicie: jw. przy czym rzucający może wybrać na cel Jadu dowolne jedzenie lub picie w zasięgu mocy. Tak zatruty posiłek nie zmienia smaku, i wystarczy tylko kilka kęsów lub łyków aby ofiara musiała sprawdzić swą odporność.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "9")

hexeri = Hexeri.create(
  name: "Zamiana",
  internal_name: "exchange",
  kind: "Svartalfheim",
  sophistication: "master",
  mana_cost: 15,
  range: "specjalny",
  casting_difficulty: 22,
  description: "rzucający zamienia się wyglądem z wybraną ofiarą, której skradł kosmyk włosów. Splecenie Hekseri zajmuje 2k20minut. Efekt utrzymuje się przez godzinę.
Podbicie: jw. ponadto Hekseri kradnie również głos postaci. Efekt utrzymuje się przez godzinę za każdy punkt E rzucającego.
Potężne Podbicie: jw. natomiast rzucający nie zamienia się tylko kopiuje wygląd i głos ofiary.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "8")

hexeri = Hexeri.create(
  name: "Mesmeryzm",
  internal_name: "mesmerism",
  kind: "Svartalfheim",
  sophistication: "master",
  mana_cost: 2,
  range: "tylko rzucający",
  casting_difficulty: 18,
  description: "pierwszy wrogi efekt, który przyniósł realną szkodę rzucającemu (fizyczną lub psychiczną) należy zastosować w identyczny sposób na istocie za nią odpowiedzialnej. Efekt ten działa przez 24godziny i przestaje działać po pierwszej aktywacji. Ponadto Weteran otrzymuje premię do Wyczulonych Zmysłów +5pkt.
Podbicie: jw. a moc Hekseri utrzymuje się do końca rundy, w której była aktywowana.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "7")

puts "...done!"

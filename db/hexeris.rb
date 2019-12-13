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
  name: "Uwiąd Nicości ",
  internal_name: "nothingness_decay",
  kind: "Seidr",
  sophistication: "master",
  mana_cost: 4,
  range: "35metrów",
  casting_difficulty: 15,
  description: "wybrana, żywa istota traci k20+E Witalności. Przed tak zadanymi Obrażeniami nie chroni żadna umiejętności/zbroja/zasada. Dotyczy to również zasad redukujących ilość otrzymanych ran.
Podbicie: Koszt zwiększany jest o +2pkt, dzięki czemu ofiara traci k20+2xE punktów Witalności.")

hexeri.requirements.create(check_applies_to: "MainParameter", name: "entropy", value: "6")

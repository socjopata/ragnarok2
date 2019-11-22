puts "creating implants and requirements..."

Implant.create(
  kind: "Midgard",
  internal_name: "anti_toxic",
  name: "Anti-Toxic",
  description: "Raz na 24 godziny automatycznie neguje działanie toksyny. Ponadto można go użyć aby pozbyć się wszystkich negatywnych efektów wynikających ze spożywania alkoholu lub słabych narkotyków.",
  neurostability_cost: 1,
  money_cost: 500,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Midgard",
  internal_name: "tyr_brawery",
  name: "Męstwo Tyra",
  description: "raz na 12godzin postać automatycznie przezwycięża Strach. Dotyczy również efektów wywołanych za pomocą Hekseri.",
  neurostability_cost: 1,
  money_cost: 150,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Midgard",
  internal_name: "odins_eye",
  name: "Oko Odyna",
  description: "Postać zyskuje jedną, cybernetyczną gałkę oczną. Wszczep umożliwia wprowadzenie następujących opcji: Kamera, Noktowizor, H.U.D, Przesłona, Termowizja",
  neurostability_cost: 1,
  money_cost: 500,
  construction: "Technika / Hekseri"
)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "camera",
  name: "Kamera",
  description: "Heros posiada kamerę cyfrową w oku, która posiada zoom oraz możliwość nagrywania.",
  neurostability_cost: 3,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "odins_eye")

implant = Implant.create(
  kind: "Midgard",
  internal_name: "nightvision",
  name: "Noktowizor",
  description: "postać widzi w ciemnościach jak w świetle dziennym.",
  neurostability_cost: 1,
  money_cost: 150,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "odins_eye")

implant = Implant.create(
  kind: "Midgard",
  internal_name: "h_u_d",
  name: "H.U.D",
  description: "system informacyjny, podaje datę, czas, pogodę, odległość do celu, kompas, itp.",
  neurostability_cost: 2,
  money_cost: 150,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "odins_eye")

implant = Implant.create(
  kind: "Midgard",
  internal_name: "shutter",
  name: "Przesłona",
  description: "postać staje się odporna na oślepienie.",
  neurostability_cost: 1,
  money_cost: 100,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "odins_eye")

implant = Implant.create(
  kind: "Midgard",
  internal_name: "termovision",
  name: "Termowizja",
  description: "postać widzi w rozkład temperatur dzięki czemu omija większość kamuflaży i niewidzialności. Walcząc w tym trybie postać otrzymuje karę -2pkt do Trafienia. Ponadto ciężko jest jej używać podczas dnia.",
  neurostability_cost: 1,
  money_cost: 150,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "odins_eye")

implant = Implant.create(
  kind: "Midgard",
  internal_name: "puncher",
  name: "Pięściarz",
  description: "za każdym razem kiedy Heros wyrzuci Dublet podczas testu Trafienia zadaje dodatkowe 5pkt Obrażeń. Trafienie w Walce Wręcz, Obrona w Zwarciu jak i Obrażenia podnoszone są o +1pkt. Wszczep dotyczy tylko i wyłącznie ataków wyprowadzonych za pomocą Walki Wręcz. ",
  neurostability_cost: 5,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)

implant.auxiliary_parameters.create(name: "martial_arts", bonus_type: "damage", value: 1)
implant.auxiliary_parameters.create(name: "martial_arts", bonus_type: "accuracy", value: 1)
implant.auxiliary_parameters.create(name: "close_combat_defense", bonus_type: "close_combat_defense", value: 1)

Implant.create(
  kind: "Midgard",
  internal_name: "cyber_hand",
  name: "Cyber-Ręka",
  description: "postać zyskuje jedną, cybernetyczną kończynę. Wszczep może posiadać następujące ulepszenia: Pieszczocha, Ukryte Ostrze, Wędkarz, Cyberłącze, 'Podręcznik' Lokiego",
  neurostability_cost: 2,
  money_cost: 500,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Midgard",
  internal_name: "cyber_hand_2",
  name: "Cyber-Ręka (druga)",
  description: "postać zyskuje jedną, cybernetyczną kończynę. Wszczep może posiadać następujące ulepszenia: Pieszczocha, Ukryte Ostrze, Wędkarz, Cyberłącze, 'Podręcznik' Lokiego",
  neurostability_cost: 2,
  money_cost: 500,
  construction: "Technika / Hekseri"
)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "spike_band",
  name: "Pieszczocha",
  description: "Obrażenia w walce wręcz zwiększane są o +2pkt.",
  neurostability_cost: 1,
  money_cost: 200,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "cyber_hand")
implant.auxiliary_parameters.create(name: "martial_arts", bonus_type: "damage", value: 2)

#TODO this will be like omg. Whenever user buys a knife or a dagger, we add a spike_band instance to the selectable implants collection
# implant = Implant.create(
#   kind: "Midgard",
#   internal_name: "spike_band",
#   name: "Ukryte Ostrze",
#   description: "Obrażenia w walce wręcz zwiększane są o +2pkt.",
#   neurostability_cost: 1,
#   money_cost: 200,
#   construction: "Technika / Hekseri"
# )
#

implant = Implant.create(
  kind: "Midgard",
  internal_name: "fisherman",
  name: "Wędkarz",
  description: "Postać posiada ukrytą w przedramieniu wyrzutnie harpuna. Dzięki czemu może wystrzelić jeden pocisk, który zadaje 2k10+5pkt Obrażeń. Trafienie sprawdzane jest testem Broni Krótkiej i jeżeli pocisk zrani ofiarę, wbija się w nią. Heros musi wykonać Przeciwstawny test BC. Zwycięstwo oznacza Powalenie przeciwnika, a porażka przerwanie liny. Ponadto można korzystać ze wszczepu również jako z liny z kotwiczką. Harpun ma zasięg 10metrów, na życzenie posiadacza lina zostaje automatycznie przerwana.",
  neurostability_cost: 2,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "cyber_hand")

#TODO an orange plus button to apply a bonus to a chosen weapon
implant = Implant.create(
  kind: "Midgard",
  internal_name: "cyberlink",
  name: "Cyberłącze",
  description: "Heros podłącza wybraną broń dystansową dzięki czemu zwiększa jej Celność o +1pkt.",
  neurostability_cost: 2,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "cyber_hand")

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cyberlink", #TODO _2 ?
  name: "Cyberłącze (drugie)",
  description: "Heros podłącza wybraną broń dystansową dzięki czemu zwiększa jej Celność o +1pkt.",
  neurostability_cost: 2,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "cyber_hand_2")

implant = Implant.create(
  kind: "Midgard",
  internal_name: "lokis_manual",
  name: "'Podręcznik' Lokiego",
  description: "Postać posiada zestaw elektronicznych wytrychów i narzędzi, które zapewniają jej +2pkt przy testach Techniki, Hakowaniu, itp.",
  neurostability_cost: 1,
  money_cost: 250,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "cyber_hand")

Implant.create(
  kind: "Midgard",
  internal_name: "cyber_leg",
  name: "Cyber-Noga",
  description: "postać zyskuje jedną, cybernetyczną kończynę. Wszczep można rozwinąć o następujące ulepszenia: Biegacz, Schowek, Skoczek",
  neurostability_cost: 2,
  money_cost: 500,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Midgard",
  internal_name: "cyber_leg_2",
  name: "Cyber-Noga (druga)",
  description: "postać zyskuje jedną, cybernetyczną kończynę. Wszczep można rozwinąć o następujące ulepszenia: Biegacz, Schowek, Skoczek",
  neurostability_cost: 2,
  money_cost: 500,
  construction: "Technika / Hekseri"
)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "runner",
  name: "Biegacz",
  description: "Postać zwiększa parametr Ruch o +5pkt. Ta modyfikacja wymaga posiadania obu cybernóg.",
  neurostability_cost: 3,
  money_cost: 300,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "cyber_leg")
implant.requirements.create(check_applies_to: "Implant", name: "cyber_leg_2")
implant.virtual_parameters.create(name: "movement_speed", value: 5)

Implant.create(
  kind: "Midgard",
  internal_name: "hidden_stash",
  name: "Schowek",
  description: "Postać posiada ukrytą przestrzeń, w której może nosić np. nóż, broń krótką, granat lub inne małe przedmioty. Skorzystanie ze schowka nie jest możliwe kiedy postać nosi pełny pancerz. Otwarcie schowka rozdziera normalne ubranie.",
  neurostability_cost: 0,
  money_cost: 300,
  construction: "Technika / Hekseri"
)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "jumper",
  name: "Skoczek",
  description: "Postać może wykonać skok na dwukrotnie większą odległość lub wysokość. Ta modyfikacja wymaga posiadania obu cybernóg.",
  neurostability_cost: 1,
  money_cost: 300,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "cyber_leg")
implant.requirements.create(check_applies_to: "Implant", name: "cyber_leg_2")

Implant.create(
  kind: "Midgard",
  internal_name: "extended_lungs",
  name: "Rozszerzone Płuca",
  description: "Postać może wstrzymać oddech przez godzinę. Ponadto raz na dobę może wykonać oczyszczenie organizmu z gazów, dzięki czemu natychmiast przerywa działanie takich toksyn.",
  neurostability_cost: 2,
  money_cost: 700,
  construction: "Technika / Hekseri"
)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__physique",
  name: "Cybernetyczne Udoskonalenie (Budowa Ciała)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.main_parameters.create(name: "physique", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__dexterity",
  name: "Cybernetyczne Udoskonalenie (Zręczność)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.main_parameters.create(name: "dexterity", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__perception",
  name: "Cybernetyczne Udoskonalenie (Percepcja)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.main_parameters.create(name: "perception", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__inteligence",
  name: "Cybernetyczne Udoskonalenie (Inteligencja)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.main_parameters.create(name: "inteligence", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__self_control",
  name: "Cybernetyczne Udoskonalenie (Opanowanie)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.main_parameters.create(name: "self_control", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__entropy",
  name: "Cybernetyczne Udoskonalenie (Entropia)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.main_parameters.create(name: "entropy", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__entropy",
  name: "Cybernetyczne Udoskonalenie (Entropia)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.main_parameters.create(name: "entropy", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__fencing",
  name: "Cybernetyczna Perfekcja (Broń Biała)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "fencing", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__martial_arts",
  name: "Cybernetyczna Perfekcja (Walka Wręcz)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "martial_arts", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__endurance",
  name: "Cybernetyczna Perfekcja (Wytrzymałość)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "endurance", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__pistols",
  name: "Cybernetyczna Perfekcja (Broń Krótka)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "pistols", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__vehicle_handling",
  name: "Cybernetyczna Perfekcja (Obsługa Pojazdów)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "vehicle_handling", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__reflex",
  name: "Cybernetyczna Perfekcja (Refleks)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "reflex", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__rifles",
  name: "Cybernetyczna Perfekcja (Broń Długa)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "rifles", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__spaceships_handling",
  name: "Cybernetyczna Perfekcja (Gwiezdny Pilotaż)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "spaceships_handling", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__senses",
  name: "Cybernetyczna Perfekcja (Wyczulone Zmysły)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "senses", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__connections",
  name: "Cybernetyczna Perfekcja (Koneksje)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "connections", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__technology",
  name: "Cybernetyczna Perfekcja (Technika)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "technology", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__knowledge",
  name: "Cybernetyczna Perfekcja (Wiedza)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "knowledge", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__hacking",
  name: "Cybernetyczna Perfekcja (Hackowanie)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "hacking", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__infiltration",
  name: "Cybernetyczna Perfekcja (Infiltracja)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "infiltration", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__trick_and_subterfuge",
  name: "Cybernetyczna Perfekcja (Trik i Fortel)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "trick_and_subterfuge", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__charisma",
  name: "Cybernetyczna Perfekcja (Charyzma)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "charisma", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__hexeri",
  name: "Cybernetyczna Perfekcja (Hekseri)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "hexeri", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_perfection__willpower",
  name: "Cybernetyczna Perfekcja (Siła Woli)",
  description: "Wszczep zwiększa dowolną Umiejętność o +1pkt.  Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innej Umiejętności.",
  neurostability_cost: 3,
  money_cost: 1500,
  construction: "Technika / Hekseri"
)
implant.secondary_parameters.create(name: "willpower", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "gere_perception",
  name: "Percepcja Gere",
  description: "Heros zwiększa swoją Obronę w Zwarciu o +1pkt.",
  neurostability_cost: 2,
  money_cost: 500,
  construction: "Technika / Hekseri"
)
implant.auxiliary_parameters.create(name: "close_combat_defense", bonus_type: "close_combat_defense", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "freke_perception",
  name: "Percepcja Freke",
  description: "Heros zwiększa swoją Obronę Dystansową o +1pkt.",
  neurostability_cost: 2,
  money_cost: 500,
  construction: "Technika / Hekseri"
)
implant.auxiliary_parameters.create(name: "ranged_defense", bonus_type: "ranged_defense", value: 1)

Implant.create(
  kind: "Midgard",
  internal_name: "medic_pouch",
  name: "Kieszeń Medyczna",
  description: "Heros posiada specjalnie zaprojektowaną „kieszeń”, która może być ukryta jednak cena wzrasta do 100S, przestrzeń wewnątrz swego organizmu, w której może trzymać do pięciu „ampułek-ładunków” leków lub innych wybranych środków. Całość podłączona jest do organizmu postaci dzięki czemu może dowolnie aktywować ich aplikację.",
  neurostability_cost: 1,
  money_cost: 100,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Midgard",
  internal_name: "cyberskin",
  name: "Cyberskóra",
  description: "postać zyskuje możliwość zmiany koloru skóry/karnacji. Wykonując testy Tricku i Fortelu związane ze zmianą tożsamości lub podszywaniem się pod kogoś Heros zyskuje +3pkt.",
  neurostability_cost: 3,
  money_cost: 700,
  construction: "Technika / Hekseri"
)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "only_a_scratch",
  name: "To tylko Draśnięcie",
  description: "raz na 12godzin postać może zredukować ilość otrzymanych w walce w zwarciu ran o połowę (po odliczeniu wartości ochronnej pancerza). Witalność Herosa zwiększana jest o +5pkt. ",
  neurostability_cost: 3,
  money_cost: 750,
  construction: "Technika / Hekseri"
)
implant.virtual_parameters.create(name: "hit_points", value: 5)

Implant.create(
  kind: "Midgard",
  internal_name: "1000_faces",
  name: "1.000 Twarzy",
  description: "postać zyskuje możliwość zmiany rysów twarzy, dzięki czemu może zwiększyć lub zmniejszyć swoją Prezencję o +/-5pkt. Wykonując testy Tricku i Fortelu związane ze zmianą tożsamości lub podszywaniem się pod kogoś Heros otrzymuje premię +3pkt.",
  neurostability_cost: 3,
  money_cost: 1250,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Midgard",
  internal_name: "last_word",
  name: "Ostatnie Słowo",
  description: "na końcu rundy, w której umarł Heros, ładunek zespolony z wszczepem eksploduje zadając wszystkim istotom w zasięgu 5metrów 3k20obrażeń. Wszczep może zostać zainstalowany również w innym celu np.: kiedy nosząca go postać opuści określony teren dochodzi do wybuchu lub kiedy właściciel sam aktywuje jego moc, itp.",
  neurostability_cost: 1,
  money_cost: 500,
  construction: "Technika / Hekseri"
)


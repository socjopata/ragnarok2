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

Implant.create(
  kind: "Midgard",
  internal_name: "odins_eye_2",
  name: "Oko Odyna (drugie)",
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

Implant.create(
  kind: "Alfheim",
  internal_name: "flash",
  name: "Błysk",
  description: "Heros wykonując test Refleksu zawsze rzuca dodatkową kością Odyna i wybiera dowolną kombinację z nich.",
  neurostability_cost: 2,
  money_cost: 500,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Alfheim",
  internal_name: "pride_of_the_past",
  name: "Duma Przeszłości",
  description: "na początku sesji gracz rzuca tyloma k20 ile wynosi jego ZR i zapisuje wyniki. W dowolnym momencie sesji przed rzutem testującym Umiejętność może użyć jednego z tych wyników zamiast wykonywać standardowy rzut kostką. Po użyciu wartość ta przepada.",
  neurostability_cost: 3,
  money_cost: 5000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Alfheim",
  internal_name: "lethargy",
  name: "Letarg",
  description: "Weteran może wprowadzić swój organizm w Letarg, dzięki czemu odzyskuje jeden punkt Przerzutu lub Przesunięcia za każdą godzinę skupienia.",
  neurostability_cost: 2,
  money_cost: 750,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Alfheim",
  internal_name: "uber_awerness",
  name: "Nadświadomość",
  description: "na początku rundy, raz na godzinę, jeżeli Weteran jest szybszy od wszystkich przeciwników, może aktywować wszczep, w wyniku czego zastępuje wszystkie swoje działania w tej rundzie poniższą zasadą:
- postać może wykonać ruch do wartości swojego Sprintu, następnie wyprowadza maksymalnie jeden atak w wybrany cel. Jeżeli trafi, może powtórzyć całą akcję, ale nie więcej razy niż wartość jego ZR. Podczas tych ruchów przeciwnicy nie mogą korzystać z Ataków Okazjonalnych.",
  neurostability_cost: 4,
  money_cost: 5000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Alfheim",
  internal_name: "annaris_elusiveness",
  name: "Nieuchwytność Annarisa",
  description: "raz na godzinę, na początku rundy (przed rozpatrzeniem kolejności działań) Weteran może aktywować wszczep dzięki czemu wszyscy przeciwnicy, którzy posiadają niższy Refleks od niego Trafiają go tylko na Krytyku. Efekt utrzymuje się do końca tej rundy.",
  neurostability_cost: 3,
  money_cost: 3000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Asgard",
  internal_name: "hands_of_god",
  name: "Ręce Boga",
  description: "Heros przeszczepia dwie cybernetyczne ręce, które posiadają dwa profile. Pierwszy dotyczy Walki Wręcz patrz tabela z bronią do walki w zwarciu. (Atak 4, Obrona 1, BC+k10, J). Po trafieniu zadaje dodatkowe k10pkt Obrażeń od Elektryczności ignorując pancerz. Drugi profil do walki dystansowej (patrz strona „X”). Zasięg Średni bez kar, Celność +3, Ataki 1-3, Broń Krótka, Obrażenia k20 bez pancerza (za wyjątkiem magicznych). Obrażenia Elektryczne.",
  neurostability_cost: 6,
  money_cost: 5000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Asgard",
  internal_name: "shield_of_aesirs",
  name: "Tarcza Aesirów",
  description: "raz na godzinę, na początku rundy Weteran może  aktywować osłonę. Wokół niego tworzy się półprzezroczysty bąbel przeszywany wyładowaniami elektrycznymi, który powstrzymuje wszystkie ataki dystansowe oraz magiczne  wymierzone w właściciela. Sfera utrzymuje się przez 10rund albo do chwili kiedy Weteran zdecyduje się wykonać Sprint. Pocisk, którego siła rażenia przewyższy 50pkt przebija i niszczy osłonę.",
  neurostability_cost: 3,
  money_cost: 6500,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Asgard",
  internal_name: "shield_of_aesirs",
  name: "Tarcza Aesirów",
  description: "raz na godzinę, na początku rundy Weteran może  aktywować osłonę. Wokół niego tworzy się półprzezroczysty bąbel przeszywany wyładowaniami elektrycznymi, który powstrzymuje wszystkie ataki dystansowe oraz magiczne  wymierzone w właściciela. Sfera utrzymuje się przez 10rund albo do chwili kiedy Weteran zdecyduje się wykonać Sprint. Pocisk, którego siła rażenia przewyższy 50pkt przebija i niszczy osłonę.",
  neurostability_cost: 3,
  money_cost: 6500,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Asgard",
  internal_name: "master_of_gravity",
  name: "Władca Grawitacji",
  description: "Bohater może zamortyzować zeskok z dowolnej wysokości. Ponadto jest w stanie skoczyć na dwukrotnie większą odległość lub wysokość.",
  neurostability_cost: 3,
  money_cost: 750,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Asgard",
  internal_name: "persistence_of_aesirs",
  name: "Wytrwałość Aesirów",
  description: "Weteran nie potrzebuje snu, a jego organizm zostaje przystosowany do działania 24godziny na dobę. Regeneracja odbywa się w trybie ciągłym zapewniając należyte funkcjonowanie postaci. Ponadto Weteran staje się całkowicie odporny na działanie granatów i pocisków EMP. ",
  neurostability_cost: 3,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Asgard",
  internal_name: "giantsbane",
  name: "Zabójca Gigantów",
  description: "walcząc z przeciwnikiem o rozmiarze Duży, Gigantyczny lub Olbrzymi postać zyskuje +3pkt do Trafienia i zadawanych Obrażeń. Raz na scenę walki z taką istotą może uniknąć jednego Trafionego przez nią ataku w zwarciu.  Bohater jest odporny na strach i grozę. Ponadto kiedy zabije istotę wywołująca ww efekty odzyskuje k5pkt Przerzutów lub Koncentracji.",
  neurostability_cost: 3,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Jotunheim",
  internal_name: "jotunheim_touch",
  name: "Dotyk Jotunheim",
  description: "za każde 10pkt otrzymanych Obrażeń Weteran zwiększa zadawane w walce w zwarciu Obrażenia o +1pkt.",
  neurostability_cost: 2,
  money_cost: 800,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Jotunheim",
  internal_name: "jotunheim_metabolism",
  name: "Metabolizm Jotunów",
  description: "Ciało Weterana przystosowało się do życia w warunkach znanych mieszkańcom Jotunheimu. Weteran może żywić się dosłownie wszystkim, włączając w to kamienie, i nie może się przy tym zatruć. Ponadto, jeżeli zajdzie taka potrzeba, może przejść w stan hibernacji (nawet kilka tygodni) i przetrwać bardzo ekstremalne warunki, włącznie z kosmiczną próżnią.",
  neurostability_cost: 4,
  money_cost: 500,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Jotunheim",
  internal_name: "regeneration",
  name: "Regeneracja",
  description: "raz na dobę postać może aktywować wszczep aby odzyskać k10+BC PŻ.",
  neurostability_cost: 3,
  money_cost: 700,
  construction: "Technika / Hekseri"
)
#TODO implement this on the FT
Implant.create(
  kind: "Jotunheim",
  internal_name: "heart_of_ice",
  name: "Serce z Lodu",
  description: "od teraz postać zmienia sposób w jaki wylicza swoją Witalność zastępując podstawową zasadę następującą mechaniką: BCx10.",
  neurostability_cost: 2,
  money_cost: 6000,
  construction: "Technika / Hekseri"
)

implant = Implant.create(
  kind: "Jotunheim",
  internal_name: "jotuns_skin",
  name: "Skóra Jotun'a",
  description: "Postać ma wszczepiony podskórny pancerz, który łączy się z każdą inną formą ochrony Weterana (zbroi, aury, itp.) podnosząc jej wartość o +2pkt.",
  neurostability_cost: 4,
  money_cost: 2000,
  construction: "Technika / Hekseri"
)

implant.auxiliary_parameters.create(name: "armor", bonus_type: "defense", value: 2)

Implant.create(
  kind: "Nilfheim",
  internal_name: "hels_blessing",
  name: "Błogosławieństwo Hel",
  description: "raz na grę kiedy Weteran będzie miał umrzeć w wyniku odniesionych ran (Witalność spadnie na zbyt niski poziom, efekt czaru, itp.) traci przytomność, jednak nie umiera. W ciągu jednej rundy ciało zostaje całkowicie zregenerowane i bohater może normalnie działać. Witalność postaci zostaje przywrócona do poziomu 10pkt. Moc wszczepu może zostać odnowiona jednak Weteran ponownie musi zapłacić pełen koszt wyrażony w Stykerach i Neurostabilności.",
  neurostability_cost: 8,
  money_cost: 3000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Nilfheim",
  internal_name: "phasing",
  name: "Fazowanie",
  description: "Weteran potrafi nagle rozproszyć swoją strukturę molekularną, po czym scala się po bardzo krótkim czasie. Pozwala to na np. przechodzenie przez ściany lub unikanie trafień w walce. Postać wykonuje test Siły Woli, którego trudność zależy od obiektu, przez jaki się przemieszcza.
Łatwy: Małe przedmioty, np. stoły, krzesła, blaty.
Standardowy: Ściana  budynku, okna, drzwi.
Trudny: Poszycie pojazdu, mur, grube ściany.
Bardzo trudny: Ściana twierdzy lub skarbca, ciężkie śluzy i grodzie.
Legendarny: Ściana jaskini (do najbliższej groty lub na zewnątrz), pola siłowe, magiczne bariery.
Boski: Weteran sam decyduje jak długo pozostaje w fazie i kiedy ją opuszcza (ale nie dłużej niż godzinę).
Jeżeli test jest nieudany postać odbija się od powierzchni przez, którą chciała przejść i kończy rundę.
Fazowania można również użyć do unikania ataków. Raz na rundę aby uniknąć jednego ataku dystansowego lub w walce wręcz (wycelowanego w posiadacza wszczepu), należy wykonać przeciwstawny test Siły Woli przeciwko wynikowi rzutu na Trafienie przeciwnika.",
  neurostability_cost: 4,
  money_cost: 5000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Nilfheim",
  internal_name: "lokis_aspects",
  name: "Oblicza Lokiego",
  description: "Postać przechodzi całkowitą rekonstrukcję organizmu, dzięki czemu może zmieniać swój wygląd oraz płeć, zachowując swoje statystyki – po prostu świetnie je maskuje. Weteran z łatwością może podszyć się pod osobę, którą wcześniej widział. Musi jednak uważać, zmiana dotyczy tylko wyglądu, nie zachowania. Jeżeli zajdzie okoliczność, w której Weteran może zdradzić swoją prawdziwą tożsamość (np. podszywając się pod ważną osobę wyda decyzję będącą bardzo dla niej negatywną), Bohaterowie Niezależni mają prawo do testu Inteligencji o PT zależnym od działania gracza (np. PT Trudny, gdy Weteran chce chwilę pogadać ze strażnikami, by odwrócić ich uwagę; PT Standardowy, gdy zachęci ich do opuszczenia posterunku; PT Łatwy, gdy próbuje   namówić jednego z nich do zabicia drugiego). Zdanie testu pozwala zorientować się, że mają oni do czynienia z oszustem.  Transformacja zajmuje dziesięć minut czasu – w zależności od rozmiaru zmian – i jest permanentna, aż do kolejnej zmiany, lub powrotu do swojej naturalnej formy. Wszczep działa raz na dobę.",
  neurostability_cost: 4,
  money_cost: 5000,
  construction: "Technika / Hekseri"
)
#TODO implement this
# Implant.create(
#   kind: "Nilfheim",
#   internal_name: "loan",
#   name: "Pożyczka",
#   description: "Działanie: wszczep staje się kopią dowolnego wszczepu wywodzącego się z innej grupy, którego koszt wyrażony w Neurostabilności nie jest wyższy od 7pkt.",
#   neurostability_cost: 0,
#   money_cost: 0,
#   construction: "Technika / Hekseri"
# )

Implant.create(
  kind: "Svartalfheim",
  internal_name: "gate_of_yggdrasil",
  name: "Brama Yggdrasila",
  description: "Weteran posiada wbudowane łącze, pozwalające mu na korzystanie z zakazanej Sieci Yggdrasil. (odnośnik do strony z zasadami). Każdorazowe użycie wymaga 5 pkt Koncentracji jako ceny za połączenie się z Siecią. ",
  neurostability_cost: 10,
  money_cost: 25000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Svartalfheim",
  internal_name: "hm_raven",
  name: "Kruk HM",
  description: "Weteran posiada wbudowane łącze, pozwalające mu na korzystanie z zakazanej Sieci Yggdrasil. (odnośnik do strony z zasadami). Każdorazowe użycie wymaga 5 pkt Koncentracji jako ceny za połączenie się z Siecią. ",
  neurostability_cost: 3,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)

implant = Implant.create(
  kind: "Svartalfheim",
  internal_name: "hm_cyberlink",
  name: "Cyberlink",
  description: "Jeżeli posiadasz wszczep pozwalający wyświetlać obraz (np. cybernetyczne oko) możesz połączyć kamerę drona z tym właśnie wszczepem.",
  neurostability_cost: 1,
  money_cost: 100,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "hm_raven")

implant = Implant.create(
  kind: "Svartalfheim",
  internal_name: "hm_armament",
  name: "Uzbrojenie",
  description: "Podpięcie broni z listy: Broń krótka – pistolety i rewolwery lub Broń długa – karabiny.",
  neurostability_cost: 1,
  money_cost: 100,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "hm_raven")

implant = Implant.create(
  kind: "Svartalfheim",
  internal_name: "hm_servolimbs",
  name: "Serwokończyny",
  description: "dzięki wyposażeniu drona w cybernetyczne kończyny postać może używać go do wykonania manualnych czynności na odległość.",
  neurostability_cost: 1,
  money_cost: 200,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "hm_raven")

implant = Implant.create(
  kind: "Svartalfheim",
  internal_name: "hm_energy_shield",
  name: "Tarcza energetyczna",
  description: "Pole siłowe redukuje otrzymane przez drona obrażenia o 15pkt.",
  neurostability_cost: 1,
  money_cost: 500,
  construction: "Technika / Hekseri"
)
implant.requirements.create(check_applies_to: "Implant", name: "hm_raven")

Implant.create(
  kind: "Svartalfheim",
  internal_name: "howitzer",
  name: "Moździerz Svartów",
  description: "Postać posiada masywne cyber-ramię, w którym ukryta jest wyrzutnia rakiet.",
  neurostability_cost: 5,
  money_cost: 7000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Svartalfheim",
  internal_name: "servolimb",
  name: "Serworamię",
  description: "Weteran zostaje wzbogacony o dodatkowe ramię, które działa niczym prawdziwa ręka. W walce można dzięki niej wykonać jeden darmowy atak (bez kar) w rundzie lub wykorzystać do prowadzenia ostrzału na normalnych zasadach.",
  neurostability_cost: 4,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Svartalfheim",
  internal_name: "servolimb",
  name: "Sfera Przechowywania",
  description: "Weteran posiada wszczepiony w swoim ciele portal do małego, ciemnego wymiaru, przez który może sięgnąć ręką by wydobyć schowany tam przedmiot. Przechowywać w nim może liczbę przedmiotów równą swojej E. Obiekty muszą mieć rozmiar i wagę taką, żeby dał radę wsadzić je za pomocą jednej ręki (decyzja MG). Poszukiwany przedmiot pojawia się w ręce gdy Weteran o nim pomyśli. Po śmierci postaci przechowywane w wymiarze przedmioty przepadają. Aktywowanie Sfery zajmuje jedną rundę, w której Weteran musi w pełni skoncentrować się na wybranym obiekcie – nie może wykonywać innych czynności.",
  neurostability_cost: 3,
  money_cost: 1000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Svartalfheim",
  internal_name: "gan_ganing_vortex",
  name: "Wir GapGaninga",
  description: "wszczep może być aktywowany w dowolnym momencie, a jego efekt następuje na końcu rundy. Właściciel znika w wirze przypominającym czarną dziurę i pojawia się w pobliżu (kilka metrów rozrzutu – losowo) po k10godzinach. Podczas swojej nieobecności rzeczywiście istnieje w Gapganinga gdzie czas płynie w odmienny sposób. Każde wejście do tych czeluści oznacza ryzyko nawet dla istot z nią związanych. Gracz musi wykonać rzut standardowy rzut 2k20, wylosowanie jedynki to spore problemy (walka a może nawet coś gorszego – losowo określa MG) uzyskanie dwóch jedynek to śmierć i rozpad w otchłani.",
  neurostability_cost: 3,
  money_cost: 3500,
  construction: "Technika / Hekseri"
)

########3

Implant.create(
  kind: "Vanaheim",
  internal_name: "njords_experience",
  name: "Doświadczenie Njorda",
  description: "po zainstalowaniu niniejszego wszczepu, postać wybiera dowolną Umiejętność. Testując ją, wartość: Suma Umiejętności wynosi minimum 10pkt. Korzystając z tej zasady Heros nie może wykorzystać premii wynikającej z Dubletu. Za każdy inny wszczep z Vanaheimu posiadany przez bohatera, postać może wybrać kolejną umiejętność. Tak wyuczone umiejętności traktowane są w identyczny sposób do umiejętności poznanych w tradycyjny sposób – np.: wykupione za pomocą PD, itp.",
  neurostability_cost: 15,
  money_cost: 3000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Vanaheim",
  internal_name: "njords_experience",
  name: "Doświadczenie Njorda",
  description: "po zainstalowaniu niniejszego wszczepu, postać wybiera dowolną Umiejętność. Testując ją, wartość: Suma Umiejętności wynosi minimum 10pkt. Korzystając z tej zasady Heros nie może wykorzystać premii wynikającej z Dubletu. Za każdy inny wszczep z Vanaheimu posiadany przez bohatera, postać może wybrać kolejną umiejętność. Tak wyuczone umiejętności traktowane są w identyczny sposób do umiejętności poznanych w tradycyjny sposób – np.: wykupione za pomocą PD, itp.",
  neurostability_cost: 15,
  money_cost: 3000,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Vanaheim",
  internal_name: "van_ancestor",
  name: "Dziedzic Vanirów",
  description: "postać potrafi komunikować się w mowie i piśmie ze wszystkimi istotami.",
  neurostability_cost: 2,
  money_cost: 400,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Vanaheim",
  internal_name: "depths_breath",
  name: "Oddech Odmętów",
  description: "najnowszy organ wspomagający działanie płuc, dzięki czemu postać może swobodnie oddychać pod wodą i w próżni. Ponadto, raz na dobę, Weteran może w ramach akcji wyssać powietrze z obszaru o promieniu 5m. Każdy, kto  potrzebuje tlenu do funkcjonowania, musi zdać Standardowy test Wytrzymałości. Niepowodzenie oznacza, że istota jest Otumaniona.",
  neurostability_cost: 3,
  money_cost: 750,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Vanaheim",
  internal_name: "kraken_tentacles",
  name: "Macki Krakena",
  description: "Postać potrafi wspinać się po wszelakich powierzchniach dzięki pomocy giętkich, wykonanych z bardzo delikatnych i lekkich materiałów macek, które ukryte są pod jej skórą na plecach. Weteran ignoruje przy tym grawitację, a testy nie są wymagane. W walce, podczas wspinaczki, Weteran uznawany jest za cel nieruchomy, chyba, że przestanie walczyć i skupi się na przemieszczaniu – kontrola dodatkowych kończyn nie jest łatwym zadaniem dla ludzkiego umysłu.",
  neurostability_cost: 3,
  money_cost: 700,
  construction: "Technika / Hekseri"
)

Implant.create(
  kind: "Vanaheim",
  internal_name: "heimdal_look",
  name: "Wzrok Heimdala",
  description: "wszczep zapewnia zamianę ludzkich oczu na cybernetyczne z opcją Noktowizora. Bohater ignoruje wszystkie iluzje i kamuflaże. Weteran potrafi ocenić poziom Witalności istot, które widzi (MG jest zobowiązany podać ich aktualną liczbę). Dodatkowo, po zdaniu Trudnego testu Siły Woli, Weteran może ocenić poziom jednej wybranej cechy i umiejętności Bohatera Niezależnego (ponownie, MG jest zobowiązany do wyjawienia tej informacji).",
  neurostability_cost: 3,
  money_cost: 2000,
  construction: "Technika / Hekseri"
)

puts("...done!")

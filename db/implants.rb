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
implant.primary_parameters.create(name: "physique", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__dexterity",
  name: "Cybernetyczne Udoskonalenie (Zręczność)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.primary_parameters.create(name: "dexterity", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__perception",
  name: "Cybernetyczne Udoskonalenie (Percepcja)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.primary_parameters.create(name: "perception", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__inteligence",
  name: "Cybernetyczne Udoskonalenie (Inteligencja)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.primary_parameters.create(name: "inteligence", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__self_control",
  name: "Cybernetyczne Udoskonalenie (Opanowanie)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.primary_parameters.create(name: "self_control", value: 1)

implant = Implant.create(
  kind: "Midgard",
  internal_name: "cybernetic_improvement__entropy",
  name: "Cybernetyczne Udoskonalenie (Entropia)",
  description: "wybrany Parametr Główny Herosa zwiększa się o 1pkt. Wszczep może być zainstalowany wielokrotnie jednak za każdym razem musi dotyczyć innego PG.",
  neurostability_cost: 5,
  money_cost: 4000,
  construction: "Technika / Hekseri"
)
implant.primary_parameters.create(name: "entropy", value: 1)

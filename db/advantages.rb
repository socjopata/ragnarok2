puts "creating advantages and requirements..."

Advantage.create(kind: "ranged", internal_name: "no_mercy", name: "Bez Litości", description: "atut aktywowany jest na początku rundy. Wszystkie Trafione w tej rundzie pociski i strzały mają specjalną zasadę: rzut na Obrażenia wykonywany jest z jedną dodatkową kością, a bohater odrzuca najniższy uzyskany wynik.", use_again_cost: 2, pd_cost: 3)

advantage = Advantage.create(kind: "ranged", internal_name: "ulls_experience", name: "Doświadczenie Ull'a", description: "Obrażenia wszystkich broni strzeleckich zwiększane są o +2pkt.", pd_cost: 7)
advantage.auxiliary_parameters.create(name: "guns", bonus_type: "damage", value: 2)

advantage = Advantage.create(kind: "ranged", internal_name: "storm_of_bullets", name: "Grad Pocisków", description: "kara wynikająca z dodatkowych strzałów zmniejszona jest o 2pkt (kumuluje się z Pewną Ręką). Ponadto Obrażenia pistoletów zwiększane są o +1pkt.", pd_cost: 6)
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "6")
advantage.auxiliary_parameters.create(name: "pistols", bonus_type: "additional_shots_penalty", value: -2)
advantage.auxiliary_parameters.create(name: "pistols", bonus_type: "damage", value: 1)

advantage = Advantage.create(kind: "ranged", internal_name: "bigger_the_better", name: "Im Większa Tym Lepsza!", description: "Weteran może przerzucić Rzut na Trafienie lub Obrażenia dotyczący Broni Ciężkiej.", pd_cost: 5, use_again_cost: 2)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "5")

advantage = Advantage.create(kind: "ranged", internal_name: "controlled_burst", name: "Kontrolowana Seria", description: "kara za strzelanie Serią zmniejszana jest o 2pkt.", pd_cost: 6)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "5")
advantage.auxiliary_parameters.create(name: "guns", bonus_type: "burst_penalty", value: 2) #we won't use this in the creator actually... however it can be represented as an enity in the system. As opposed to the bigger_the_better

advantage = Advantage.create(kind: "ranged", internal_name: "fuck_up_master", name: 'Mistrz Rozp#$@&%lu', description: "Obrażenia strzelb rozpryskowych zwiększane są o +2pkt. Ponadto każdy Dublet podczas testu Trafienia zwiększa zadawane Obrażenia o +5pkt.", pd_cost: 4)
advantage.auxiliary_parameters.create(name: "pistols", bonus_type: "burst_shotguns_damage", value: 2) #TODO nice case where name, bonus type pair is not enough

advantage = Advantage.create(kind: "ranged", internal_name: "ulls_master", name: "Mistrzostwo Ull'a", description: "postać zwiększa Obrażenia i Celność wszystkich broni strzeleckich jakimi się posługuje o +2pkt. Premia kumuluje się z atutem Doświadczenie Ull'a.", pd_cost: 12)
advantage.requirements.create(check_applies_to: "Advantage", name: "ulls_experience")
advantage.auxiliary_parameters.create(name: "guns", bonus_type: "damage", value: 2)
advantage.auxiliary_parameters.create(name: "guns", bonus_type: "accuracy", value: 2)

advantage = Advantage.create(kind: "ranged", internal_name: "hard_target", name: "Nieuchwytny Cel", description: "Obrona Dystansowa podnoszona jest na stałe o +2pkt.", pd_cost: 7)
advantage.auxiliary_parameters.create(name: "ranged_defense", bonus_type: "ranged_defense", value: 2) #TODO case, where name is just enough?
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "4")

advantage = Advantage.create(kind: "ranged", internal_name: "brave_and_fast", name: "Odważny i Szybki", description: "postać strzelając do przeciwnika, z którym jest w walce w zwarciu nie daje mu darmowego ataku. Ponadto może  poświecić wszystkie ataki w tej rundzie aby wycofać się z walki (Ruch lub Sprint) nie dając wrogowi okazjonalnego, darmowego ataku.", pd_cost: 7)
advantage.requirements.create(check_applies_to: "VirtualParameter", name: "sportiness", value: "10")

Advantage.create(kind: "ranged", internal_name: "perfect_coordination", name: "Perfekcyjna Koordynacja", description: "po udanym Trafieniu strzałem z rewolweru lub pistoletu Weteran może wykonać natychmiastowy, darmowy strzał. Atak ten nie ma żadnych kar, a za jego pomocą można przewyższyć standardową wartość parametru Szybkostrzelność broni. Atut nie może być wykorzystywany częściej niż raz na rundę.", pd_cost: 5, use_again_cost: 3)

advantage = Advantage.create(kind: "ranged", internal_name: "sure_hand", name: "Pewna Ręka", description: "kara wynikająca z dodatkowych strzałów zmniejszona jest o 2pkt.", pd_cost: 5)
advantage.auxiliary_parameters.create(name: "guns", bonus_type: "additional_shots_penalty", value: -2)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "4")

advantage = Advantage.create(kind: "ranged", internal_name: "gunman", name: "Rewolwerowiec", description: "Ataki wyprowadzone za pomocą rewolwerów mają zwiększone Obrażenia o +3pkt.", pd_cost: 5)
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "5")
advantage.auxiliary_parameters.create(name: "pistols", bonus_type: "revolver_damage", value: 3) #TODO nice case where name, bonus type pair is not enough

advantage = Advantage.create(kind: "ranged", internal_name: "eagle_eye", name: "Sokole Oko", description: "strzelając z pistoletu na Zasięg Średni postać nie otrzymuje kary do Trafienia wynikającej z odległości. Ponadto Weteran zwiększa Celność swoich Pistoletów o +1pkt.", pd_cost: 4)
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "5")
advantage.auxiliary_parameters.create(name: "pistols", bonus_type: "pistols_medium_range_shots_penalty", value: 0) #TODO interpret zero on the frontend as "cancel all". And it's really, pistols, medium, range_shots_penalty for the logic

advantage = Advantage.create(kind: "ranged", internal_name: "sniper", name: "Snajper", description: "strzelając z karabinu snajperskiego Weteran zmniejsza karę za celowanie w konkretną część ciała o 3pkt. Zasięg ekstremalny karabinów snajperskich zwiększony jest o 50metrów za każdy punkt w umiejętności Broń Długa.", pd_cost: 6)
advantage.requirements.create(check_applies_to: "MainParameter", name: "perception", value: "6")

Advantage.create(kind: "ranged", internal_name: "explosives_specialist", name: "Specjalista: Materiały Wybuchowe", description: "Weteran zapoznał się z obsługą niszczycielskich materiałów wybuchowych, detonatorów, itp. Posługując się tym typem broni nie otrzymuje żadnych kar (standardowo -5pkt).", pd_cost: 3)

advantage = Advantage.create(kind: "ranged", internal_name: "keen_eye_of_ull", name: "Spostrzegawczość Ull'a", description: "postać nie otrzymuje kary za Strzelanie w różne cele.", pd_cost: 4)
advantage.requirements.create(check_applies_to: "EitherMainParameter", name: "dexterity_or_perception", value: "5")

advantage = Advantage.create(kind: "ranged", internal_name: "heimdal_sight", name: "Wzrok Heimdala", description: "kara do Trafienia wynikająca ze złej widoczności zmniejszana jest o 3pkt.", pd_cost: 4)
advantage.requirements.create(check_applies_to: "MainParameter", name: "perception", value: "6")

advantage = Advantage.create(kind: "ranged", internal_name: "cold_blood", name: "Zimna Krew", description: "Bohater może wykonać tyle Przerzutów testu Trafienia w broni Dystansowej ile wynosi jego OP.", pd_cost: 6)
advantage.requirements.create(check_applies_to: "MainParameter", name: "self_control", value: "6")

puts "...done!"

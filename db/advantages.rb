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

advantage = Advantage.create(kind: "melee", internal_name: "till_blood_gets_spilled", name: "Aż Poleje się Krew", description: "Weteran może wykonać tyle Przerzutów testu Trafienia w Walce w Zwarciu ile wynosi jego OP.", pd_cost: 6)
advantage.requirements.create(check_applies_to: "MainParameter", name: "self_control", value: "6")

Advantage.create(kind: "carnage_time", internal_name: "Czas Rzezi", name: "Aż Poleje się Krew", description: "atut aktywowany jest na początku rundy. Wszystkie Trafione w tej rundzie ciosy w walce w zwarciu mają specjalną zasadę: rzut na Obrażenia wykonywany jest z jedną dodatkową kością, a bohater odrzuca najniższy wynik.", pd_cost: 3, use_again_cost: 2)

advantage = Advantage.create(kind: "melee", internal_name: "till_blood_gets_spilled", name: "Fechtmistrz", description: "Weteran potrafi wyprowadzić o jeden Atak więcej (za pomocą oręża), stosowne kary uzależnione są od rodzaju broni jaką się posługuje. Szczegóły należy sprawdzić w rozdziale Walka w Zwarciu lub na rewersie karty postaci. Ponadto Bohater zwiększa umiejętność Broń Biała o +1pk", pd_cost: 10)
advantage.secondary_parameters.create(name: "fencing", value: 1)

advantage = Advantage.create(kind: "melee", internal_name: "finesse_combat", name: "Finezyjna Walka", description: "Weteran walczący bronią Lekką (L) może użyć ZR + Broń Biała do wyliczania swojego Trafienia.", pd_cost: 5) #TODO add a special button someday on the FT
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "6")

Advantage.create(kind: "melee", internal_name: "odins_wrath", name: "Gniew Odyna", description: "po tym jak postać została zraniona zyskuje Jeden darmowy atak. Kumuluje się z efektami Szału Bitewnego.", pd_cost: 3, use_again_cost: 1)

advantage = Advantage.create(kind: "melee", internal_name: "massacreator", name: "Masakrator", description: "Obrażenia zadane przy użyciu oręża zwiększane są o +3pkt. Ta premia sumuje się z premią z Rzeźnika.", pd_cost: 8)
advantage.auxiliary_parameters.create(name: "melee", bonus_type: "damage", value: 3)
advantage.requirements.create(check_applies_to: "Advantage", name: "butcher")

advantage = Advantage.create(kind: "melee", internal_name: "shield_master", name: "Mistrz Tarczy", description: "Weteran może unieważnić cios mający go Trafić (po udanym teście Trafienia). Następnie jeżeli posiada atut Sprawność Asgardczyka zyskuje jeden darmowy atak.", pd_cost: 8, use_again_cost: 3)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "5")
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "5")
advantage.requirements.create(check_applies_to: "MainParameter", name: "self_control", value: "5")

Advantage.create(kind: "melee", internal_name: "the_power_of_fury", name: "Potęga Furii", description: "jeżeli w poprzedniej rundzie Weteran odniósł rany w walce w zwarciu, anuluje w tej rundzie wszystkie kary wynikające z ilości zadeklarowanych ataków. Atut działa raz na przeciwnika. Można wykonać tylko przeciw wrogowi, który zranił Weterana.", pd_cost: 8)

advantage = Advantage.create(kind: "melee", internal_name: "aimed_blow", name: "Precyzyjny Cios", description: "Kara za celowanie w wybraną część ciała zmniejszona jest o 3pkt. Parametr Trafienie wszystkich mieczy jakimi Heros walczy podnoszony jest o +1pkt.", pd_cost: 6)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "5")
advantage.auxiliary_parameters.create(name: "melee", bonus_type: "accuracy_swords", value: 1)

advantage = Advantage.create(kind: "melee", internal_name: "butcher", name: "Rzeźnik", description: "wszystkie Obrażenia jakie Weteran zada w walce w zwarciu zwiększane są o +2pkt.", pd_cost: 5)
advantage.auxiliary_parameters.create(name: "melee", bonus_type: "damage", value: 2)

advantage = Advantage.create(kind: "melee", internal_name: "smash", name: "Rozwałka", description: "Weteran deklaruje minimum 2 ataki w zwarciu. Za każdy Trafiony w tej rundzie cios zwiększa Obrażenia następnego ataku o +2pkt. Obrażenia w walce w Walce Wręcz zwiększane są o +2pkt.", pd_cost: 5)
advantage.auxiliary_parameters.create(name: "martial_arts", bonus_type: "damage", value: 2)

Advantage.create(kind: "melee", internal_name: "battle_rage", name: "Szał Bitewny", description: "po tym, jak Weteran został zraniony otrzymuje do najbliższego ataku +5pkt do Trafienia i zadawanych Obrażeń.", pd_cost: 3, use_again_cost: 2)

Advantage.create(kind: "melee", internal_name: "charge_of_tyr", name: "Szarża Tyra", description: "wszystkie ataki jakie Weteran wyprowadzi w tej rundzie mają zwiększone Trafienie i Obrażenia o +2pkt. Wymagania: rozbieg przynajmniej z 5metrów.", pd_cost: 3)

advantage = Advantage.create(kind: "melee", internal_name: "martial_arts", name: "Sztuki Walki", description: "ciosy wyprowadzone za pomocą umiejętności Walka Wręcz mają zwiększone Obrażenia o k10pkt. Ponadto Weteran może zadać o jeden Atak więcej w rundzie ale tylko za pomocą Walki Wręcz (stosując standardowe kary). ", pd_cost: 10)
advantage.auxiliary_parameters.create(name: "martial_arts", bonus_type: "damage", value: 0) #TODO variable, +k10
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "8")
advantage.requirements.create(check_applies_to: "SecondaryParameter", name: "martial_arts", value: "8")

Advantage.create(kind: "melee", internal_name: "shield_bearer", name: "Tarczownik", description: "postać walcząc bronią jednoręczną i tarczą otrzymuje premię do Obrony w Zwarciu +2pkt.", pd_cost: 6)
#TODO easier to code with an if, than use generic approach here

advantage = Advantage.create(kind: "melee", internal_name: "only_beauty_is_death", name: "Tylko Śmierć Jest Piękna", description: "kiedy Weteran zabije przeciwnika w walce w zwarciu (Broń Biała lub Walka Wręcz) otrzymuje jeden darmowy atak, którego Obrażenia zwiększane są o +5pkt. Ilość dodatkowych ataków nie może przekroczyć BC postaci.", pd_cost: 10)
advantage.requirements.create(check_applies_to: "Advantage", name: "battle_rage")

advantage = Advantage.create(kind: "melee", internal_name: "lokis_strike", name: "Uderzenie Lokiego", description: "Kara wynikająca z wielu ataków zredukowana jest o 2pkt. Obrażenia zadawane bronią lekką zwiększane są o +2pkt.", pd_cost: 9)
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "7")
advantage.auxiliary_parameters.create(name: "melee", bonus_type: "knives_daggers_damage", value: 2)

advantage = Advantage.create(kind: "melee", internal_name: "magnis_strike", name: "Uderzenie Magniego", description: "postać zwiększa Trafienie w Walce Wręcz, Obronę w Zwarciu oraz Obrażenia zadawane w Walce Wręcz o +1pkt. Ponadto wydając 2pkt Koncentracji Weteran może znieść wszystkie kary do Trafienia w walce w Zwarciu jakie wynikają z ilości zadeklarowanych ataków. Kumuluje się z efektem atutu Rzeźnik.", pd_cost: 8)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "7")
advantage.requirements.create(check_applies_to: "Advantage", name: "butcher")
advantage.auxiliary_parameters.create(name: "martial_arts", bonus_type: "damage", value: 1)
advantage.auxiliary_parameters.create(name: "martial_arts", bonus_type: "accuracy", value: 1)
advantage.auxiliary_parameters.create(name: "ranged_defense", bonus_type: "ranged_defense", value: 1)

advantage = Advantage.create(kind: "melee", internal_name: "odins_strike", name: "Uderzenie Odyna", description: "postać deklarując wykorzystanie tej zalety, otrzymuję kare -2pkt  do Trafienia (do końca rundy) dzięki czemu każdy trafiony w tej rundzie przez nią cios obniża pancerz celu o połowę (zaokrąglając w górę).", pd_cost: 4)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "6")

advantage = Advantage.create(kind: "melee", internal_name: "thors_strike", name: "Uderzenie Thora", description: "każdy dublet rzucony na Trafienie, dzięki któremu cios trafił oznacza wyprowadzenie kolejnego, darmowego ciosu, który automatycznie Trafia tego samego przeciwnika. Obrażenia młotów jakimi posługuje się Weteran zwiększane są o +2pkt.", pd_cost: 5)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "7")
advantage.auxiliary_parameters.create(name: "melee", bonus_type: "hammers_damage", value: 2)

advantage = Advantage.create(kind: "melee", internal_name: "tyrs_strike", name: "Uderzenie Tyra", description: "postać deklaruje jaką kare przyznaje sobie do Trafienia w zamian za co zwiększa zadawane Obrażenia o 2pkt za każdy pkt zadeklarowanej kary np.: -3pkt do Trafienia zwiększą Obrażenia o +6pkt. Kara nie może być wyższa niż umiejętność Broń Biała.", pd_cost: 4)
advantage.auxiliary_parameters.create(name: "melee", bonus_type: "axes_damage", value: 2)

advantage = Advantage.create(kind: "melee", internal_name: "vidars_strike", name: "Uderzenie Vidara", description: "Zadawane przez postać Obrażenia w walce w zwarciu wzrastają o +1pkt. Ponadto Weteran może zwiększyć swoje Trafienie o +4pkt. Każdy trafiony w tej rundzie cios traktowany jest jako Trafienie Krytyczne. ", pd_cost: 8, use_again_cost: 3)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "9")
advantage.auxiliary_parameters.create(name: "melee", bonus_type: "two_handed_damage", value: 1)

advantage = Advantage.create(kind: "melee", internal_name: "evasion", name: "Unik", description: "w walce w zwarciu Weteran może wykonać Unik dzięki czemu wybrany atak wroga nie trafia. Decyzja o wykorzystaniu tego Atutu może być podjęta po rzucie na Trafienie przeciwnika ale nie częściej niż raz względem danego wroga.", pd_cost: 6, use_again_cost: 2)
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "5")
advantage.requirements.create(check_applies_to: "MainParameter", name: "self_control", value: "5")

advantage = Advantage.create(kind: "melee", internal_name: "perfect_evasion", name: "Unik Doskonały", description: "w walce w zwarciu Weteran może wykonać Unik dzięki czemu wszystkie ataki, wybranego wroga, wykonane w tej rundzie nie trafiają. Decyzja o skorzystaniu z Uniku Doskonałego może być podjęta po rzucie na Trafienie przeciwnika ale nie więcej niż raz względem danego wroga. Atut ten nadpisuje swoją podstawową wersję „Unik”. ", pd_cost: 8, use_again_cost: 3)
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "6")
advantage.requirements.create(check_applies_to: "MainParameter", name: "self_control", value: "6")
advantage.requirements.create(check_applies_to: "Advantage", name: "evasion")

Advantage.create(kind: "melee", internal_name: "group_fighting", name: "Walka z Wieloma Przeciwnikami", description: "odczas walki z wieloma przeciwnikami Weteran otrzymuje premię +3 pkt do Obrony w zwarciu.", pd_cost: 3)

Advantage.create(kind: "melee", internal_name: "hector", name: "Walka z Wieloma Przeciwnikami", description: "Postać walcząca bronią improwizowaną lub za pomocą Walki Wręcz zwiększa Trafienie i zadawane nią Obrażenia o +2pkt.", pd_cost: 6)
advantage.auxiliary_parameters.create(name: "martial_arts", bonus_type: "damage", value: 2)
advantage.auxiliary_parameters.create(name: "martial_arts", bonus_type: "accuracy", value: 2)
advantage.auxiliary_parameters.create(name: "improvised_weapons", bonus_type: "damage", value: 2)
advantage.auxiliary_parameters.create(name: "improvised_weapons", bonus_type: "accuracy", value: 2)

advantage = Advantage.create(kind: "battle_general", internal_name: "finessee", name: "Walka z Wieloma Przeciwnikami", description: "Weteran może odjąć lub dodać +1pkt do wyniku na Kości Losu. Atut może być łączony z działaniem broni i/lub wpływem Entropii.", pd_cost: 3, use_again_cost: 1)
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "4")

advantage = Advantage.create(kind: "battle_general", internal_name: "ambidexterity", name: "Oburęczność", description: "postać nauczyła się walczyć dwoma lekkimi lub jednoręcznymi broniami równocześnie. W walce w zwarciu postać posługująca się dwoma orężami lub korzystająca z Walki Wręcz zwiększa swoje Trafienie i Obronę o +1pkt. Przed rzutem na trafienie Weteran musi określić, którą bronią będzie atakować.
W walce strzeleckiej postać wybiera dwa pistolety lub rewolwery tego samego modelu dzięki czemu podwaja Szybkostrzelność broni, którą się posługuje.", pd_cost: 5)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "4")
advantage.requirements.create(check_applies_to: "MainParameter", name: "dexterity", value: "4")

Advantage.create(kind: "battle_general", internal_name: "beast_hunter", name: "Pogromca Bestii", description: "bohater otrzymuje premię do Trafienia i zadawanych Obrażeń +3pkt walcząc z dzikimi bestiami lub niehumanoidalnymi obcymi. Dotyczy zarówno walki w zwarciu jak i dystansowej.", pd_cost: 3)

Advantage.create(kind: "battle_general", internal_name: "spaceship_gunner", name: "Specjalista w Ostrzale Kosmicznym", description: "bohater otrzymuje premię do Trafienia i zadawanych Obrażeń +3pkt walcząc z dzikimi bestiami lub niehumanoidalnymi obcymi. Dotyczy zarówno walki w zwarciu jak i dystansowej.", pd_cost: 3)

advantage = Advantage.create(kind: "battle_general", internal_name: "steel_warrior", name: "Stalowy Wojownik", description: "Weteran zwiększa Wartość każdego noszonego przez siebie Pancerza o +2pkt. Ponadto raz na scenę walki może zignorować/skasować karę wynikającą z wrogich akcji tj: otumanienie, działanie Hekseri, toksyny, itp.", pd_cost: 9)
advantage.auxiliary_parameters.create(name: "armor", bonus_type: "defense", value: 2)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "7")
advantage.requirements.create(check_applies_to: "Advantage", name: "iron_warrior")

advantage = Advantage.create(kind: "battle_general", internal_name: "speed", name: "Szybkość", description: "postać zwiększa Refleks o +1pkt oraz podnosi parametr Ruch o +3pkt.", pd_cost: 4)
advantage.virtual_parameters.create(name: "movement_speed", value: 3)
advantage.secondary_parameters.create(name: "reflex", value: 1)

advantage = Advantage.create(kind: "battle_general", internal_name: "sleipnirs_speed", name: "Szybkość Sleipnira", description: "postać może wykonać Sprint nie tracąc ataków. Wysportowanie i Ruch Herosa zostają zwiększone o +1pkt. Kumuluje się z efektami atutu Szybkość.", pd_cost: 5, use_again_cost: 2)
advantage.virtual_parameters.create(name: "movement_speed", value: 1)
advantage.virtual_parameters.create(name: "sportiness", value: 1)

Advantage.create(kind: "battle_general", internal_name: "exoskeletons", name: "Walka w Egzoszkieletach", description: "Weteran zapoznał się z obsługą Egzoszkieletów dzięki czemu nie otrzymuje kary za poruszanie się w sprzęcie, którego nie zna (standardowo -5pkt do wysportowania, trafienia, obrony i testów, itp).", pd_cost: 4)

Advantage.create(kind: "battle_general", internal_name: "power_armors", name: "Walka w Pancerzach Wspomaganych", description: "Weteran zapoznał się z obsługą Pancerzy Bojowych dzięki czemu nie otrzymuje kary za poruszanie się w sprzęcie, którego nie zna (standardowo -5pkt do wysportowania, trafienia, obrony i testów, itp).", pd_cost: 4)

Advantage.create(kind: "battle_general", internal_name: "difficult_conditions_combat", name: "Walka w Trudnych Warunkach", description: "Weteran zmniejsza Karę wynikającą z niedogodnych warunków panujących na polu walki o 3pkt. Ponadto raz na minutę, kiedy Weteran musi wykonać test Wysportowania, może obniżyć jego PT o jeden stopień.", pd_cost: 4)

advantage = Advantage.create(kind: "battle_general", internal_name: "iron_warrior", name: "Żelazny Wojownik", description: "Weteran zwiększa Wartość każdego noszonego przez siebie Pancerza o +1pkt. Ponadto wartość ta nie może być redukowana przy wykorzystaniu Atutów ani zdolności przeciwników (obniżyć nadal może tylko odpowiednia broń, amunicja, itp.).", pd_cost: 7)
advantage.auxiliary_parameters.create(name: "armor", bonus_type: "defense", value: 2)
advantage.requirements.create(check_applies_to: "MainParameter", name: "physique", value: "5")

puts "...done"

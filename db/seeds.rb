Hero.first_or_create([
  { name: 'Berzerker' },
  { name: 'Ulfhednar' },
  { name: 'Einher' },
  { name: 'Huskarl' },
  { name: 'Jarl' },
  { name: 'Jaeger' },
  { name: 'Skald'},
  { name: 'Techmistrz' },
  { name: 'Thane' },
  { name: 'Trickster' },
  { name: 'Wieszcz' },
  { name: 'Wiking' },
  { name: 'Wólwa' },
  { name: 'Walkiria' }
])

hero = Hero.find_by(name: 'Berzerker')
{ physique: 7, dexterity: 4, perception: 4, inteligence: 3, self_control: 5, entropy: 4 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 5, martial_arts: 5, endurance: 3, pistols: 2, vehicle_handling: 0, reflex: 2, rifles: 2, spaceships_handling: 0,
  senses: 2, connections: 0, technology: 0, knowledge: 0, hacking: 0, infiltration: 0, trick_and_subterfuge: 0,
  charisma: 0, hexeri: 0, willpower: 5
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

virtue = Virtue.create(hero_id: hero.id, name: "Furiat", internal_name: "furious", description: "Weterana zwiększana jest o +2pkt. Na początku starcia, w ramach darmowej akcji w swojej inicjatywie, Weteran wprowadza się w trans i wykonuje test Siły Woli. Za każdy poziom, który uda mu się zdać otrzymuje jedną rundę, w której wszystkie zadane mu Obrażenia zmniejszane są o połowę. Po upływie tego czasu, aby podtrzymać trans, co rundę wykonuje test Siły Woli. Jeżeli nie uda mu się go podtrzymać, zatrzymuje się oszołomiony na k5 rund, podczas których nie może czynnie atakować ani poruszać się, a jedynie bronić.")
virtue.secondary_parameters.create(name: "willpower", value: 2)
virtue = Virtue.create(hero_id: hero.id, name: "Runiczne Tatuaże", internal_name: "rune_tattoos", description: "Weteran, dzięki pokrywającym jego ciało mistycznym tatuażom, zwiększa swoją Entropię i Wytrzymałość o +1pkt, ponadto zyskuje Odporność na Hekseri +5pkt.")
virtue.main_parameters.create(name: "entropy", value: 1)
virtue.secondary_parameters.create(name: "endurance", value: 1)
Virtue.create(hero_id: hero.id, name: "Pogarda Śmierci", internal_name: "i_disdain_death", description: "Weteran śmieje się Hel prosto w twarz, mając śmierć za nic! Najważniejsze, to zabrać ze sobą jak najwięcej wrogów! Na początku każdego starcia, zanim ktokolwiek inny zdąży zareagować, Weteran wydaje z siebie szyderczy okrzyk, skupiający na nim uwagę Szeregowych przeciwników, którzy walczą z nim tak długo, aż nie zostaną zaatakowani przez kogoś innego. Doświadczeni i Elitarni przeciwnicy mogą obronić się przed działaniem okrzyku dzięki udanemu testowi Siły Woli. Jeżeli Weteran został zaskoczony nie może korzystać z tej zalety w danym starciu, chyba, że wyda 2 pkt Koncentracji.")

hero = Hero.find_by(name: 'Ulfhednar')
{ physique: 4, dexterity: 7, perception: 5, inteligence: 4, self_control: 4, entropy: 3 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 4, martial_arts: 0, endurance: 0, pistols: 0, vehicle_handling: 0, reflex: 4, rifles: 0, spaceships_handling: 0,
  senses: 3, connections: 3, technology: 0, knowledge: 0, hacking: 0, infiltration: 4, trick_and_subterfuge: 4,
  charisma: 2, hexeri: 0, willpower: 0, pistols_or_rifles: 4
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

virtue = Virtue.create(hero_id: hero.id, name: "Akrobata", internal_name: "acrobat", description: "Weteran zwiększa swoje Wysportowanie o +3pkt, a wydając 2 pkt Koncentracji może obniżyć Poziom Trudności takiego testu o jeden próg. Akcja musi być zadeklarowana przed wykonaniem rzutu. Ponadto wydając 3 pkt Koncentracji, po zadeklarowaniu użycia zalety do początku jego następnej tury, wszystkie ataki dystansowe skierowane w Cienia trafiają go tylko na Krytyku.")
virtue.virtual_parameters.create(name: "sportiness", value: 3)
virtue = Virtue.create(hero_id: hero.id, name: "Błyskawiczny Atak", internal_name: "lightning_fast_attack", description: "Refleks Weterana podnoszony jest o +3pkt. Ponadto wydając 2 pkt Koncentracji Weteran zwiększa swoje Trafienie i Obrażenia w pojedynczym ataku w zwarciu o wartość Zręczności. Aktywacja zalety musi być zadeklarowana przed rzutem na trafienie.")
virtue.secondary_parameters.create(name: "reflex", value: 3)
Virtue.create(hero_id: hero.id, name: "Kameleon", internal_name: "chameleon", description: "Wydając 4 pkt Koncentracji Weteran staje się Niewidzialny na okres jednej godziny, aktywacja zalety zajmuje minutę czasu. Aby pozostać niezauważonym, Weteran musi zdać test Infiltracji o poziomie trudności zależnym od okoliczności (np. przekradnięcie się obok pojedynczego strażnika – Standardowy, przemknięcie pomiędzy grupą przeciwników – Bardzo Trudny; decyzję podejmuje MG). Każda akcja ataku wykonana przez Cienia natychmiast kończy działanie Kameleona.")

hero = Hero.find_by(name: 'Einher')
{ physique: 6, dexterity: 4, perception: 5, inteligence: 3, self_control: 6, entropy: 3 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 0, martial_arts: 0, endurance: 4, pistols: 0, vehicle_handling: 3, reflex: 0, rifles: 5, spaceships_handling: 3,
  senses: 0, connections: 0, technology: 3, knowledge: 0, hacking: 3, infiltration: 0, trick_and_subterfuge: 0,
  charisma: 0, hexeri: 0, willpower: 3, fencing_or_martial_arts: 4
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

virtue = Virtue.create(hero_id: hero.id, name: "Cybernetyczne Ciało", internal_name: "cybernetic_body", description: "Bohater podwaja swoją Neurostabilność. Ponadto wykonuje dwa rzuty 2k10 w poniższej tabeli aby po odrodzeniu powrócić do formy. Wylosowane wszczepy otrzymywane są za darmo i nie mogą się powtórzyć.")
virtue.virtual_parameters.create(name: "neurostability", value: 0) #TODO remember you need to double the thing
virtue = Virtue.create(hero_id: hero.id, name: "Niezniszczalny", internal_name: "invincible", description: "Herosa zwiększane są o +10pkt a wszystkie Poziomy Trudności testów Wytrzymałości są zmniejszane o jeden próg. Ponadto, wydając 5 pkt Koncentracji, przez jedną rundę postać nie otrzymuje żadnych Obrażeń chyba, że ich jednorazowa wartość odebrała by mu wszystkie punkty Witalności np.: spada z 20 piętra, zostaje zmiażdżony przez walący się budynek, itp. Zaleta musi zostać zadeklarowana na początku rundy. ")
virtue.virtual_parameters.create(name: "hit_points", value: 10)
virtue = Virtue.create(hero_id: hero.id, name: "Z grubej Rury", internal_name: "big_guns", description: "Einher ignoruje kary wynikające z zasięgu strzelając z broni Ciężkiej oraz zwiększa jej Obrażenia o +2pkt.")
virtue.auxiliary_parameters.create(name: "heavy_guns", bonus_type: "damage", value: 2)

hero = Hero.find_by(name: 'Huskarl')
{ physique: 5, dexterity: 5, perception: 3, inteligence: 4, self_control: 4, entropy: 6 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 0, martial_arts: 0, endurance: 3, pistols: 4, vehicle_handling: 0, reflex: 3, rifles: 0, spaceships_handling: 0,
  senses: 0, connections: 3, technology: 0, knowledge: 0, hacking: 0, infiltration: 0, trick_and_subterfuge: 0,
  charisma: 4, hexeri: 5, willpower: 2, fencing_or_martial_arts: 4
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

Virtue.create(hero_id: hero.id, name: "Chwila Chwały", internal_name: "a_moment_of_glory", description: "podczas walki Huskarl podnosi swoją Obronę o wartość  Entropii. Premia aktywowana jest na początku rundy i utrzymuje się do końca następnej. Dopóki działa, Weteran odporny jest na Pecha oraz na wszystkie zasady Krytyków – przeciw niemu, co oznacza, że nadal należy przewyższyć lub zrównać się z jego Obroną, itd. Aby ponownie skorzystać z tej zalety, Weteran musi odbyć medytację przez co najmniej 5 minut, podczas której jest bezbronny.")
Virtue.create(hero_id: hero.id, name: "Hekser", internal_name: "hexer", description: "Weteran może rzucać Hekseri w walce nie dając przeciwnikowi darmowego ataku.")
virtue = Virtue.create(hero_id: hero.id, name: "Wyga", internal_name: "stager", description: "na etapie tworzenia postaci Weteran otrzymuje dodatkową ilość PD równą wartości swojej Entropii, a koszt nauczenia się wszystkich Hekseri na stałe zmniejszony jest o 1pkt.")
virtue.virtual_parameters.create(name: "experience_points", value: 0) #TODO remember to apply the Entropy bonus and smaller cost

hero = Hero.find_by(name: 'Jarl')
{ physique: 5, dexterity: 4, perception: 4, inteligence: 5, self_control: 5, entropy: 4 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 4, martial_arts: 0, endurance: 0, pistols: 0, vehicle_handling: 2, reflex: 0, rifles: 0, spaceships_handling: 0,
  senses: 0, connections: 4, technology: 0, knowledge: 4, hacking: 0, infiltration: 0, trick_and_subterfuge: 0,
  charisma: 5, hexeri: 0, willpower: 0, any_4: 4, any_3: 3, any_2: 2
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

virtue = Virtue.create(hero_id: hero.id, name: "Broń Rodowa", internal_name: "heritage_blade", description: "Weteran rozpoczyna grę z magiczną, nielegendarną i wybraną przez siebie bronią Białą posiadającą trzy możliwości modyfikacji wybrane przez gracza. Postać ignoruje koszt zakupu (w Stykerach) oręża i jego rozwinięć oraz zwiększa swoją umiejętność Broń Biała o +1pkt. Ponadto, raz na rundę i po wydaniu 4 pkt Koncentracji, przed akcjami pozostałych postaci, Jarl może wykonać jeden darmowy atak bronią przeznaczoną do walki w zwarciu.")
virtue.secondary_parameters.create(name: "fencing", value: 1)
#TODO actually you could create a Weapon instance on the Backend/FT and assign it on the fly to Jarl. Special case logic for filtering (other classes) and upgrading the weapon itself
virtue = Virtue.create(hero_id: hero.id, name: "Stać mnie: TODO", internal_name: "TODO: copy for each unique virtue", description: "Nie ma takiej rzeczy, której nie da się kupić za pieniądze. Weteran wybiera Zaletę innej klasy i używa jej tak jakby była jego Zaletą Klasową.")
#TODO repeat the above for any other Virtue...
virtue = Virtue.create(hero_id: hero.id, name: "Zasoby", internal_name: "resources", description: "Weteran posiada pokaźny majątek startowy, który wynosi aż 6.000 Stykerów. Ponadto ma dostęp do rodowej fortuny, jednak każdorazowe zaczerpnięcie z niej sporo go kosztuje. Wydając 1 Punkt Przerzutu uzyskuje 100 Stykerów.")
virtue.virtual_parameters.create(name: "money", value: 6000)

hero = Hero.find_by(name: 'Jaeger')
{ physique: 4, dexterity: 4, perception: 6, inteligence: 4, self_control: 5, entropy: 4 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 3, martial_arts: 0, endurance: 0, pistols: 3, vehicle_handling: 0, reflex: 2, rifles: 5, spaceships_handling: 0,
  senses: 5, connections: 3, technology: 0, knowledge: 0, hacking: 0, infiltration: 4, trick_and_subterfuge: 0,
  charisma: 0, hexeri: 0, willpower: 0, vehicle_handling_or_spaceships_handling: 3
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

Virtue.create(hero_id: hero.id, name: "Widzę Wszystko", internal_name: "clear_vision", description: "podczas sesji, za każdy punkt Percepcji, Weteran może wykonać Przerzut testu Wyczulonych Zmysłów. Wszystkie testy chroniące go przed zaskoczeniem zwiększone są o premię +5pkt. Ponadto wydając 4 pkt Koncentracji może automatycznie uniknąć jednego celnego ataku, co deklaruje przed rzutem na obrażenia – ta część zalety nie działa kiedy Jaeger jest Zaskoczony.")
virtue = Virtue.create(hero_id: hero.id, name: "Zapach Krwi", internal_name: "blood_scent", description: "Weteran doskonale zna się na odszukiwaniu tych, którzy marzą o zniknięciu. Otrzymuje +2pkt do Infiltracji i Koneksji.  Ponadto Weteran może wykonać tyle Przerzutów testów Infiltracji lub Koneksji ile wynosi jego Inteligencja.")
virtue.secondary_parameters.create(name: "connections", value: 2)
virtue.secondary_parameters.create(name: "infiltration", value: 2)
Virtue.create(hero_id: hero.id, name: "Żywy lub Martwy", internal_name: "dead_or_alive", description: "Nie wszystko na co polujesz musi umierać. Z drugiej strony zwłoki łatwiej się transportuje. Wydając 4 pkt Koncentracji Weteran otrzymuje jeden dodatkowy, darmowy Atak, który może przekroczyć standardową ilość Ciosów lub Szybkostrzelność broni. Ponadto wydając 3 pkt Koncentracji, przed wykonaniem ataku, Weteran może zadeklarować chęć oszczędzenia swej ofiary, dzięki czemu Trafienie nie zabije celu. Zraniona w ten sposób istota musi wykonać udany Trudny test Wytrzymałości lub pada Nieprzytomna. Żadna część zalety nie może być wykorzystana częściej niż raz na rundę.")

hero = Hero.find_by(name: 'Skald')
{ physique: 3, dexterity: 5, perception: 4, inteligence: 6, self_control: 3, entropy: 6 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 0, martial_arts: 0, endurance: 0, pistols: 0, vehicle_handling: 0, reflex: 2, rifles: 0, spaceships_handling: 4,
  senses: 0, connections: 3, technology: 0, knowledge: 4, hacking: 0, infiltration: 0, trick_and_subterfuge: 3,
  charisma: 5, hexeri: 4, willpower: 0, fencing_or_pistols: 3
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

virtue = Virtue.create(hero_id: hero.id, name: "Sława", internal_name: "fame", description: "na początku każdej sesji Weteran otrzymuje 500 Stykerów, które pochodzą z tantiemów, sprzedaży własnych dzieł lub przedstawień, które miał okazję poprowadzić. Ponadto raz za każdy punkt Entropii, Skald może wykorzystać swoje wpływy, aby obniżyć o jeden próg Poziom Trudności testu Koneksji")
virtue.virtual_parameters.create(name: "money", value: 500)
virtue = Virtue.create(hero_id: hero.id, name: "Szelma", internal_name: "knave", description: "Weteran zwiększa na stałe swoją Prezencję o +3pkt. Ponadto, wraz z studiowaniem sztuki i hekseri, nauczył się manipulować umysłami innych. Raz za każdy punkt Entropii Skald może „wyłgać się” z kłopotliwej sytuacji odwracając na moment czyjąś uwagę, lub przekierowując ją na inną osobę. Szeregowi przeciwnicy nie mogą oprzeć się temu efektowi. Doświadczeni i Elitarni przeciwnicy muszą zdać Trudny test Siły Woli, aby wyzwolić się spod mocy uroku.")
virtue.virtual_parameters.create(name: "apparition", value: 3)
Virtue.create(hero_id: hero.id, name: "Własna Fura: Pożoga", internal_name: "own_car_conflagration", description: "Weteran rozpoczyna grę ze statkiem kosmicznym: Błysk. Ponadto posiada pełne wyposażenie pozwalające wykonać jedną podróż Dalekim dystansie kosmicznym (opłaty postojowe, remont, paliwo, itp.).")
Virtue.create(hero_id: hero.id, name: "Własna Fura: Błysk", internal_name: "own_car_flash", description: "Weteran rozpoczyna grę ze statkiem kosmicznym: Pożoga. Ponadto posiada pełne wyposażenie pozwalające wykonać jedną podróż Dalekim dystansie kosmicznym (opłaty postojowe, remont, paliwo, itp.).")

hero = Hero.find_by(name: 'Techmistrz')
{ physique: 3, dexterity: 4, perception: 4, inteligence: 6, self_control: 5, entropy: 5 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 0, martial_arts: 0, endurance: 0, pistols: 0, vehicle_handling: 3, reflex: 0, rifles: 0, spaceships_handling: 3,
  senses: 0, connections: 0, technology: 5, knowledge: 3, hacking: 5, infiltration: 0, trick_and_subterfuge: 0,
  charisma: 0, hexeri: 3, willpower: 3, fencing_or_pistols_or_rifles: 3
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

Virtue.create(hero_id: hero.id, name: "Szalony Geniusz", internal_name: "crazy_genius", description: "Weteran zaczyna grę z chorobą psychiczną, którą losuje lub wybiera wspólnie z MG (patrz Choroby). Następnie zwiększa swoją Inteligencję do 8pkt, zmniejsza Opanowanie do 3pkt oraz podnosi wszystkie początkowe, wynikające z Klasy, Umiejętności o +1pkt. Majątek startowy zmniejszony jest do 50 Stykerów.")
#TODO so many ifs...
Virtue.create(hero_id: hero.id, name: "Tajemnice Asgardu", internal_name: "secrets_of_asgard", description: "Weteran poznał rąbek tajników rasy Asgardczyków, potrafi mówić ich dialektem oraz rozumie podstawowe mechanizmy ich technologii. Techmistrz rozpoczyna grę z Językiem Asgardzkim (jako dodatkowym językiem), trzema prostymi Hekseri Asów i otrzymuje jeden ich Pomniejszy Artefakt.")
#TODO implement the above
virtue = Virtue.create(hero_id: hero.id, name: "Zaufaj mi, jestem Inżynierem", internal_name: "trust_me_im_engineer", description: "Weteran może ulepszyć każdą posiadaną broń i pancerz (nie ponosząc żadnych kosztów) dzięki czemu zwiększa ich parametry w następujący sposób: Broń +2pkt do Obrażeń i +1pkt do Celności/Trafienia, Wartość Pancerza o +2pkt i jego Obronę o +1pkt. Techmistrz może wykonać dla innych graczy modyfikacje, jednak aby mogli oni korzystać ze zmodyfikowanych urządzeń muszą wydać 3PD za każdy przedmiot. Udoskonalenie może być wykonane raz na danym przedmiocie. Ekwipunek wykupiony przed pierwszą sesją udoskonalany jest od razu. Ulepszenie sprzętu nabytego w trakcie kolejnych sesji zajmuje 5 godzin i wymaga wydania 2 pkt Koncentracji. Techmistrz może zredukować ten czas wykonując test Techniki – za każdy uzyskany poziom trudności powyżej Łatwego zmniejsza czas oczekiwania o jedną godzinę.")
#TODO this is going to be... interesting
#
hero = Hero.find_by(name: 'Thane')
{ physique: 4, dexterity: 5, perception: 4, inteligence: 7, self_control: 5, entropy: 2 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 0, martial_arts: 0, endurance: 0, pistols: 5, vehicle_handling: 2, reflex: 3, rifles: 0, spaceships_handling: 0,
  senses: 3, connections: 2, technology: 0, knowledge: 5, hacking: 0, infiltration: 5, trick_and_subterfuge: 0,
  charisma: 3, hexeri: 0, willpower: 0
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

Virtue.create(hero_id: hero.id, name: "Analityczny Umysł", internal_name: "analytical_mind", description: "raz za każdy punkt Inteligencji, przed wykonaniem rzutu na Wyczulone Zmysły, Infiltrację, Wiedzę lub Charyzmę bohater zwiększa jego wynik o +5pkt.   ")
Virtue.create(hero_id: hero.id, name: "Ja strzelam pierwszy", internal_name: "im_shooting_first", description: "Postać na stałe podnosi Umiejętność Broń Krótka o +1pkt. Wydając 4 pkt Koncentracji, na początku rundy, Weteran może wykonać strzał przed wszystkimi innymi akcjami pozostałych uczestników starcia. Atak jest darmowy, nie liczy się do maksymalnej ilości strzałów w turze i zadaje podwójne Obrażenia (najpierw odliczana jest wartość pancerza, następnie podwajamy ilość zadanych Obrażeń).")
virtue.secondary_parameters.create(name: "pistols", value: 1)
Virtue.create(hero_id: hero.id, name: "Zahartowany", internal_name: "hardened", description: "za każdym razem kiedy Weteran wykonuje Przerzut dowolnego testu otrzymuje do niego premię +2pkt. Ponadto na koniec sesji zdobywa dodatkowe 2pkt Doświadczenia.")

hero = Hero.find_by(name: 'Trickster')
{ physique: 4, dexterity: 4, perception: 4, inteligence: 5, self_control: 6, entropy: 4 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 0, martial_arts: 0, endurance: 0, pistols: 0, vehicle_handling: 0, reflex: 0, rifles: 0, spaceships_handling: 0,
  senses: 2, connections: 5, technology: 2, knowledge: 0, hacking: 3, infiltration: 3, trick_and_subterfuge: 5,
  charisma: 4, hexeri: 0, willpower: 0, fencing_or_pistols: 4
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

virtue = Virtue.create(hero_id: hero.id, name: "Kanciarz", internal_name: "gyp", description: "Trickster zawsze wie gdzie i za ile można kupić nielegalne towary, zna dilerów, paserów, speluny, handlarzy, kupców i potrafi to załatwić szybko i tanio. W efekcie czego wszystkie towary jakie kupuje mają obniżoną cenę o 10% (Zaleta kumuluje się z Atutem Handel), umiejętność Koneksje zwiększana jest o +3pkt, a grę rozpoczyna z dodatkowym 1.500 Stykerów. ")
virtue.virtual_parameters.create(name: "money", value: 1500)
virtue.secondary_parameters.create(name: "connections", value: 3)
virtue = Virtue.create(hero_id: hero.id, name: "Nieczysta Zagrywka", internal_name: "dirty_play", description: "Trickster zwiększa umiejętność Broń Biała o +1pkt. Raz za każdy punkt Zręczności, po nieudanym ataku przeciwnika wycelowanym w Trickstera w walce wręcz, może on wykonać darmowy, natychmiastowy atak w tego samego przeciwnika. W razie trafienia rozpatruje się je jako trafienie krytyczne.")
virtue.secondary_parameters.create(name: "fencing", value: 1)
virtue = Virtue.create(hero_id: hero.id, name: "Oszust", internal_name: "fraud", description: "może czerpać z dwóch różnych specjalistycznych grup Wszczepów, zwiększa swoją Neurostabilność o +10pkt i otrzymuje 1.000 Stykerów. Umiejętności Trik i Fortel zwiększana jest o +3pkt.")
virtue.virtual_parameters.create(name: "neurostability", value: 10)
virtue.virtual_parameters.create(name: "money", value: 1000)
virtue.secondary_parameters.create(name: "trick_and_subterfuge", value: 3)
#TODO Body enhancements
#
hero = Hero.find_by(name: 'Wieszcz')
{ physique: 3, dexterity: 4, perception: 4, inteligence: 6, self_control: 3, entropy: 7 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 0, martial_arts: 0, endurance: 0, pistols: 3, vehicle_handling: 0, reflex: 0, rifles: 0, spaceships_handling: 0,
  senses: 0, connections: 2, technology: 0, knowledge: 5, hacking: 3, infiltration: 0, trick_and_subterfuge: 2,
  charisma: 5, hexeri: 5, willpower: 3
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

virtue = Virtue.create(hero_id: hero.id, name: "Badacz Hekseri", internal_name: "hexeri_researcher", description: "Bohater rozpoczyna grę z wszystkimi Prostymi Hekseri należącymi do jednej grupy a jego Hekseri wzrasta o +1pkt.")
virtue.secondary_parameters.create(name: "hexeri", value: 1)
#TODO all simple hexeries
virtue = Virtue.create(hero_id: hero.id, name: "Mistrz Entropii:", internal_name: "entropy_master", description: "Weterana zwiększona jest o +20pkt. Zasięg hekseri zwiększa się dwukrotnie.")
virtue.virtual_parameters.create(name: "power", value: 20)
virtue = Virtue.create(hero_id: hero.id, name: "Tajemne Arcana", internal_name: "mysterious_arcana", description: "Wieszcz zwiększa swoje Hekseri o +1pkt. Ponadto raz za każdy punkt Entropii, może użyć Złożone Hekseri na zasadach Prostego lub Mistrzowskie na zasadach Złożonego. ")
virtue.secondary_parameters.create(name: "hexeri", value: 1)

hero = Hero.find_by(name: 'Wiking')
{ physique: 5, dexterity: 5, perception: 5, inteligence: 4, self_control: 5, entropy: 3 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 0, martial_arts: 0, endurance: 4, pistols: 4, vehicle_handling: 3, reflex: 3, rifles: 4, spaceships_handling: 3,
  senses: 3, connections: 0, technology: 0, knowledge: 0, hacking: 0, infiltration: 0, trick_and_subterfuge: 0,
  charisma: 0, hexeri: 0, willpower: 0, fencing_or_martial_arts: 4
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

virtue = Virtue.create(hero_id: hero.id, name: "Poczułem Krew", internal_name: "blood_sensed", description: "Weteran może wykonać Przerzut dowolnego testu wykonanego w trakcie walki. Aby użyć tej zdolności ponownie, musi zostać zraniony przez przeciwnika. Wiking rozpoczyna grę zwiększając wybraną Umiejętność o +1pkt.")
virtue.secondary_parameters.create(name: "any_1", value: 1)
Virtue.create(hero_id: hero.id, name: "Potomek Tyra", internal_name: "descendant_of_tyr", description: "raz na walkę z danym przeciwnikiem, po nietrafionym ciosie, Weteran przerzuca test Trafienia otrzymując premię +3pkt. Jeżeli dzięki tej zalecie zabije wroga, odzyskuje 1pkt Przerzutu. ")
Virtue.create(hero_id: hero.id, name: "Wiarus", internal_name: "old_sweat", description: "raz za każdy punkt Opanowania, weteran zwiększa do końca tej rundy dwa z poniższych parametrów: Trafienie, Obronę, Refleks, Wysportowanie lub zadawane Obrażenia o +3pkt.")

hero = Hero.find_by(name: 'Wólwa')
{ physique: 3, dexterity: 3, perception: 3, inteligence: 6, self_control: 6, entropy: 6 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 3, martial_arts: 0, endurance: 0, pistols: 0, vehicle_handling: 0, reflex: 0, rifles: 0, spaceships_handling: 0,
  senses: 2, connections: 0, technology: 0, knowledge: 5, hacking: 0, infiltration: 4, trick_and_subterfuge: 2,
  charisma: 3, hexeri: 5, willpower: 4
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

Virtue.create(hero_id: hero.id, name: "Potęga Nadziei", internal_name: "power_of_hope", description: "postać korzystając z magii leczącej może zwiększyć ilość uzdrowionych ran o +1pkt za każdy pkt Entropii. Ponadto wydając 4 pkt Koncentracji bohaterka może zmienić moc leczącą Hekseri w klątwę dzięki czemu zamiast leczyć zadaje analogiczną ilość ran. Wölwa rozpoczyna grę z dwoma wybranymi, prostym Hekseri – Seidr. ")
#TODO two simple Siedr hexeri
virtue = Virtue.create(hero_id: hero.id, name: "Władczyni Losu", internal_name: "mistress_of_fate", description: "Hekseri Wölwy zwiększone jest o +1pkt. Wydając Punkty Przerzutu Wölwa może zamień wynik uzyskany na Kości Odyna z liczbą na Kości Losu. Jeżeli dzięki temu uda jej się rzucić Hekseri odzyskuje 5 punktów Mocy. ")
virtue.secondary_parameters.create(name: "hexeri", value: 1)
Virtue.create(hero_id: hero.id, name: "Wyczucie Entropii", internal_name: "sense_of_entropy", description: "Wölwa zyskuje Odporność na Hekseri +10pkt. Dotknięta przez Bohaterkę postać poznaje rąbek możliwej przyszłości, dzięki czemu przeciwnik wykonujący w nią pierwszy atak w walce rzuca dwiema kośćmi i wybiera gorszy wynik. Wróżba nie może być powtórzona częściej niż raz na dobę względem danej osoby, a ilość możliwych przepowiedni równa jest wartości Entropii Wölwy. Wykorzystanie tej zalety zajmuje całą rundę. ")

hero = Hero.find_by(name: 'Walkiria')
{ physique: 4, dexterity: 6, perception: 5, inteligence: 4, self_control: 4, entropy: 4 }.each do |param_name, value|
  hero.main_parameters.create(name: param_name, value: value)
end

{
  fencing: 4, martial_arts: 0, endurance: 0, pistols: 0, vehicle_handling: 5, reflex: 2, rifles: 0, spaceships_handling: 5,
  senses: 0, connections: 0, technology: 3, knowledge: 2, hacking: 0, infiltration: 0, trick_and_subterfuge: 0,
  charisma: 0, hexeri: 0, willpower: 2, pistols_or_rifles: 5
}.each do |param_name, value|
  hero.secondary_parameters.create(name: param_name, value: value)
end

virtue = Virtue.create(hero_id: hero.id, name: "Córka Frei", internal_name: "daughter_of_freia", description: "Prezencja Walkirii zwiększona jest o +5pkt ponadto zyskuje umiejętność Charyzma na poziomie 3pkt. Wszyscy są pod jej ogromnym wrażeniem. Za każdym razem, gdy inteligentny humanoid zaatakuje Walkirię, otrzymuje on do końca pierwszej rundy karę do Trafienia -5pkt. ")
virtue.virtual_parameters.create(name: "apparition", value: 5)
virtue.secondary_parameters.create(name: "charisma_or", value: 3) #TODO small hax. Can't think of an easier way of implementing this on the FT.
virtue = Virtue.create(hero_id: hero.id, name: "Gwiazda Heimdala", internal_name: "star_of_heimdal", description: "Walkiria może podłączyć się do statku za pomocą specjalnego wszczepu, co daje jej pełną kontrolę nad pojazdem. Dzięki temu nie potrzebuje nikogo innego do jego obsługi. Kiedy postać jest podłączona do statku jego Parametry zwiększone są o +1pkt. Bohaterka zyskuje atut <Specjalista w Ostrzale Kosmicznym> i może wykonać tyle przerzutów testu Gwiezdnego Pilotażu ile wynosi jej Zręczność.")
virtue.virtual_parameters.create(name: "skill", value: 0, bonus_type: "space_shelling_specialist") #TODO implement the conversion
Virtue.create(hero_id: hero.id, name: "Skrzydła Asgardu", internal_name: "wings_of_asgard", description: "postać posiada niezwykły wszczep – cybernetyczne Skrzydła schowane w plecach. Dzięki czemu może latać wydając 1 pkt Koncentracji za każde 10 minut lotu. Korzystanie z tej Zalety sprawdzane jest testem Obsługi Pojazdów w atmosferze lub testem Gwiezdnego Pilotażu w przestrzeni kosmicznej.")

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





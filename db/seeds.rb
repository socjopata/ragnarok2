Hero.first_or_create([
  { name: 'Berzerker' },
  { name: 'Cień' },
  { name: 'Einher' },
  { name: 'Huskarl' },
  { name: 'Jarl' },
  { name: 'Łowca' },
  { name: 'Skald'},
  { name: 'Techmistrz' },
  { name: 'Thane' },
  { name: 'Trickster' },
  { name: 'Wieszcz' },
  { name: 'Wiking' },
  { name: 'Wólwa' },
  { name: 'Valkiria' }
])

hero = Hero.find_by(name: 'Berzerker')
{ physique: 7, dexerity: 4, perception: 4, inteligence: 3, self_control: 5, entropy: 4 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Einher')
{ physique: 4, dexerity: 7, perception: 5, inteligence: 4, self_control: 4, entropy: 3 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Huskarl')
{ physique: 5, dexerity: 6, perception: 3, inteligence: 4, self_control: 4, entropy: 5 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Jarl')
{ physique: 5, dexerity: 4, perception: 4, inteligence: 5, self_control: 5, entropy: 4 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Łowca')
{ physique: 4, dexerity: 4, perception: 6, inteligence: 4, self_control: 5, entropy: 4 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Skald')
{ physique: 3, dexerity: 5, perception: 4, inteligence: 6, self_control: 3, entropy: 6 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Techmistrz')
{ physique: 4, dexerity: 4, perception: 4, inteligence: 6, self_control: 5, entropy: 4 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Thane')
{ physique: 4, dexerity: 5, perception: 5, inteligence: 7, self_control: 4, entropy: 2 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Trickster')
{ physique: 4, dexerity: 5, perception: 5, inteligence: 5, self_control: 4, entropy: 4 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Wieszcz')
{ physique: 3, dexerity: 4, perception: 4, inteligence: 6, self_control: 3, entropy: 7 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Wiking')
{ physique: 5, dexerity: 5, perception: 5, inteligence: 4, self_control: 5, entropy: 3 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Wólwa')
{ physique: 3, dexerity: 3, perception: 3, inteligence: 6, self_control: 6, entropy: 6 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

hero = Hero.find_by(name: 'Valkiria')
{ physique: 4, dexerity: 6, perception: 5, inteligence: 4, self_control: 4, entropy: 4 }.each do |param_name ,value|
  hero.main_parameters.create(name: param_name, value: value)
end

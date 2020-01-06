puts "creating weapons..."

MeleeWeapon.create(name: "Do rzucania", internal_name: "throwing_knife", kind: "L/M", dmg: "BC+3+k10", balance: 3, defense: 0,
  special_rules: "", money_cost: 10, family: "knives", rarity: "common"
)

MeleeWeapon.create(name: "Bojowy", internal_name: "battle_knife", kind: "L", dmg: "BC+3+k10", balance: 2, defense: 2,
  special_rules: "Dublet: +5pkt Obrażeń", money_cost: 15, family: "knives", rarity: "common"
)

MeleeWeapon.create(name: "Asgardzki Krzywy", internal_name: "asgardian_curved_knife", kind: "L", dmg: "BC+ZR+k10", balance: 2, defense: 2,
  special_rules: "+2pkt Obrażeń jeżeli Weteran posiada Atut Finezja", money_cost: 500, family: "knives", rarity: "military"
)
#TODO implement the special rule

MeleeWeapon.create(name: "Głód", internal_name: "hunger", kind: "L", dmg: "BC+5+k10", balance: 4, defense: 2,
  special_rules: "Ataki magiczne, Każde kolejne Obrażenia zadane tej samej ofierze otrzymują kumulatywną premię +2pkt",
  money_cost: 4500, family: "knives", rarity: "legendary"
)

MeleeWeapon.create(name: "Midgardzki", internal_name: "midgardian_dagger", kind: "L", dmg: "BC+2+k10", balance: 3, defense: 1,
  special_rules: "Dodatkowe miejsce na Upgrade", money_cost: 20, family: "daggers", rarity: "common"
)

MeleeWeapon.create(name: "Długi", internal_name: "long_dagger", kind: "L", dmg: "ZR+2+k10", balance: 2, defense: 2,
  special_rules: "Krytyk: 19-20", money_cost: 25, family: "daggers", rarity: "common"
)

MeleeWeapon.create(name: "Ostrze Giganta", internal_name: "giants_dagger", kind: "L", dmg: "BC+2k10", balance: 3, defense: 1,
  special_rules: "Dublet: Darmowy Atak", money_cost: 275, family: "daggers", rarity: "military"
)

MeleeWeapon.create(name: "Talhagorski", internal_name: "talhagorian_dagger", kind: "L", dmg: "BC+2+k20", balance: 4, defense: 1,
  special_rules: "Ataki magiczne, przed rzutem na Trafienie, wydając 1pkt Koncentracji Weteran otrzymuje premię +5pkt ",
  money_cost: 3500, family: "daggers", rarity: "legendary"
)

MeleeWeapon.create(name: "Midgardzka", internal_name: "midgardian_spear", kind: "J/M", dmg: "ZR+5+k10", balance: 2, defense: 2,
  special_rules: "", money_cost: 75, family: "spears", rarity: "common"
)

MeleeWeapon.create(name: "Bojowa", internal_name: "battle_spear", kind: "J/M", dmg: "BC+3+k10", balance: 3, defense: 1,
  special_rules: "Dublet: Przebicie", money_cost: 20, family: "spears", rarity: "common"
)

MeleeWeapon.create(name: "Asgardzka Krótka", internal_name: "asgardian_short_spear", kind: "J/M", dmg: "2xBC+k10", balance: 2, defense: 2,
  special_rules: "Jeżeli walczący nią weteran posiada chociaż dwa wszczepy Asgardu Obrażenia +k10pkt", money_cost: 500,
  family: "spears", rarity: "military"
)

MeleeWeapon.create(name: "Pogromca Fenrisa", internal_name: "fenris_demise", kind: "J/M", dmg: "BC+7+2k10", balance: 4, defense: 3,
  special_rules: "Ataki magiczne, Przesunięcie: Kość Losu o +/-2pkt", money_cost: 7000,
  family: "spears", rarity: "legendary"
)

MeleeWeapon.create(name: "Obusieczny", internal_name: "two_edged_sword", kind: "J", dmg: "BC+2+k10", balance: 3, defense: 2,
  special_rules: "", money_cost: 60, family: "swords", rarity: "common"
)

MeleeWeapon.create(name: "Midgardzki", internal_name: "midgardian_sword", kind: "J", dmg: "BC+2+k10", balance: 2, defense: 3,
  special_rules: "Dwa dodatkowe miejsca na Upgrade", money_cost: 125, family: "swords", rarity: "common"
)

MeleeWeapon.create(name: "Długi Aelfheimski", internal_name: "long_alfheim_sword", kind: "J", dmg: "BC+ZR+4+k10", balance: 2, defense: 3,
  special_rules: "Dodatkowe miejsce na Udoskonalenie", money_cost: 600, family: "swords", rarity: "military"
)

MeleeWeapon.create(name: "Angurvadal", internal_name: "angurvadal", kind: "J", dmg: "2xBC+2+k10", balance: 3, defense: 4,
  special_rules: "Ataki magiczne, Używając aktywnie tarczy otrzymuje premię do Obrony w Zwarciu +2pkt.",
  money_cost: 5000, family: "swords", rarity: "legendary"
)

#TODO a concept of active weapon. And to easy the pain of implementation. An user can buy only one armor and a shield.
# To easily calculate defenses

MeleeWeapon.create(name: "Bojowy", internal_name: "battle_axe", kind: "J/M", dmg: "BC+6+k10", balance: 2, defense: 1,
  special_rules: "", money_cost: 15, family: "axes", rarity: "common"
)

MeleeWeapon.create(name: "Rębacz", internal_name: "slashing_axe", kind: "J", dmg: "BC+4+k10", balance: 3, defense: 1,
  special_rules: "Dublet: Darmowy Atak", money_cost: 130, family: "axes", rarity: "military"
)

MeleeWeapon.create(name: "Jotunheimski", internal_name: "jotunheim_axe", kind: "J", dmg: "2xBC+2k10", balance: 4, defense: 2,
  special_rules: "Ataki magiczne, Darmowy atak w pierwszej turze walki, dodatkowe miejsce na Udoskonalenie",
  money_cost: 8000, family: "axes", rarity: "legendary"
)

MeleeWeapon.create(name: "Typowy", internal_name: "typical_hammer", kind: "J/M", dmg: "BC+3+2k10", balance: 3, defense: 0,
  special_rules: "", money_cost: 15, family: "hammers", rarity: "common"
)

MeleeWeapon.create(name: "Pogromca", internal_name: "conqueror_hammer", kind: "J", dmg: "BC+7+k10", balance: 4, defense: 0,
  special_rules: "+10pkt Obrażeń przeciw Olbrzymom i Gigantom", money_cost: 250, family: "hammers", rarity: "military"
)

MeleeWeapon.create(name: "Mjolnir", internal_name: "mjolnir", kind: "J/M", dmg: "BC+3k10", balance: 5, defense: 1,
  special_rules: "Ataki magiczne, Krytyk: +5pkt Obrażeń, po rzucie wraca do ręki", money_cost: 5000, family: "hammers",
  rarity: "legendary"
)

MeleeWeapon.create(name: "Długi", internal_name: "two_handed_long_sword", kind: "DW", dmg: "BC+3+2k10", balance: 3, defense: 2,
  special_rules: "Krytyk: 19-20", money_cost: 50, family: "two_handed_swords",
  rarity: "common"
)

MeleeWeapon.create(name: "Ostrze Fenrisa", internal_name: "fenris_blade", kind: "DW", dmg: "ZR+3k10", balance: 3, defense: 2,
  special_rules: "Krytyk: 19-20", money_cost: 110, family: "two_handed_swords",
  rarity: "common"
)

MeleeWeapon.create(name: "Flamberg Svartheimski", internal_name: "svartheim_flamberg", kind: "DW", dmg: "2xBC+k20", balance: 4, defense: 2,
  special_rules: "Wydając 3PM: +5pkt Obrażeń od Ognia do końca rundy", money_cost: 750, family: "two_handed_swords",
  rarity: "military"
)

MeleeWeapon.create(name: "Espadon", internal_name: "espadon", kind: "DW", dmg: "2xBC+2+k20", balance: 5, defense: 4,
  special_rules: "Ataki magiczne, Obrażenia zwiększone o Umiejętność Broń Biała", money_cost: 8000, family: "two_handed_swords",
  rarity: "legendary"
)

MeleeWeapon.create(name: "Berdysz", internal_name: "battle-ax", kind: "DW", dmg: "2xBC+2k10", balance: 4, defense: 0,
  special_rules: "", money_cost: 30, family: "two_handed_axes", rarity: "common"
)

MeleeWeapon.create(name: "Księżycowy", internal_name: "moon_axe", kind: "DW", dmg: "BC+3k10", balance: 4, defense: 1,
  special_rules: "Krytyk: +10 Obrażeń", money_cost: 40, family: "two_handed_axes", rarity: "common"
)

MeleeWeapon.create(name: "Jotunheimski Ciężki", internal_name: "jotunheim_heavy_axe", kind: "DW", dmg: "2xBC+2k10", balance: 5, defense: 1,
  special_rules: "Dublet: Darmowy Atak", money_cost: 300, family: "two_handed_axes", rarity: "military"
)

MeleeWeapon.create(name: "Boltrona", internal_name: "boltrona", kind: "DW", dmg: "2xBC+3k10", balance: 6, defense: 4,
  special_rules: "Ataki magiczne, Przeciw Asgardczykom Trafienie i Obrażenia +5pkt", money_cost: 10000,
  family: "two_handed_axes", rarity: "legendary"
)

MeleeWeapon.create(name: "Ciężki Niflheimski", internal_name: "nilfheim_heavy_hammer", kind: "DW", dmg: "BC+7+2k10", balance: 3, defense: 0,
  special_rules: "Dublet: Obrażenia +BC walczącego", money_cost: 20, family: "two_handed_hammers", rarity: "common"
)

MeleeWeapon.create(name: "Midgardzki", internal_name: "midgardian_heavy_hammer", kind: "DW", dmg: "BC+9+k20", balance: 4, defense: 0,
  special_rules: "Dublet: Ogłuszenie", money_cost: 40, family: "two_handed_hammers", rarity: "common"
)

MeleeWeapon.create(name: "Ostatni Argument", internal_name: "last_plea", kind: "DW", dmg: "2xBC+3k10", balance: 5, defense: 0,
  special_rules: "Dodatkowe miejsce na Upgrade", money_cost: 500, family: "two_handed_hammers", rarity: "military"
)

MeleeWeapon.create(name: "Ragnarok", internal_name: "ragnarok", kind: "DW", dmg: "3xBC+k10", balance: 7, defense: 2,
  special_rules: "Ataki magiczne, Pierwszy Trafiony atak w rundzie +2k10 Obrażeń", money_cost: 15000, family: "two_handed_hammers", rarity: "legendary"
)

#TODO hand to hand combat and the following

MeleeWeapon.create(name: "Kastety Vidara", internal_name: "vidars_brass_knuckles", kind: "DW", dmg: "+2", balance: 1, defense: 0,
  special_rules: "Dublet +5pkt Obrażeń", money_cost: 300, family: "hand_to_hand", rarity: "common"
)

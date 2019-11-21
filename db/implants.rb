puts "creating implants and requirements..."

implant = Implant.create(
  kind: "Midgard",
  internal_name: "anti_toxic",
  name: "Anti-Toxic",
  description: "Raz na 24 godziny automatycznie neguje działanie toksyny. Ponadto można go użyć aby pozbyć się wszystkich negatywnych efektów wynikających ze spożywania alkoholu lub słabych narkotyków.",
  neurostability_cost: 1,
  money_cost: 500,
  construction: "Technika / Hekseri"
)

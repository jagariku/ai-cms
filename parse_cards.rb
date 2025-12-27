require 'json'

data = JSON.parse(File.read('cards.json'))

bg_cards = data.select { |card| card['set'] == 'BATTLEGROUNDS' }

puts "BG cards: #{bg_cards.length}"

non_collectible = bg_cards.select { |card| card.key?('collectible') && card['collectible'] == false }

puts "Non collectible BG: #{non_collectible.length}"

non_collectible.each { |b| puts "#{b['name']}: #{b['text']}" }
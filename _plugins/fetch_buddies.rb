require 'dotenv/load'

module Jekyll
  class BuddiesGenerator < Generator
    safe true

    def generate(site)
      buddies = [
        { 'name' => 'Ghastcoiler', 'text' => '死亡時にランダムなTier 6ミニオンを召喚。' },
        { 'name' => 'Mama Bear', 'text' => '死亡時にランダムなBeastミニオンを召喚。' },
        { 'name' => 'Zapp Slywick', 'text' => '死亡時にランダムなElementalミニオンを召喚。' },
        { 'name' => 'Baron Rivendare', 'text' => '死亡時にランダムなUndeadミニオンを召喚。' },
        { 'name' => 'The Beast', 'text' => '死亡時にランダムなDemonミニオンを召喚。' },
        { 'name' => 'Goldrinn, the Great Wolf', 'text' => '死亡時にランダムなBeastミニオンを召喚。' },
        { 'name' => 'Arch-Villain Rafaam', 'text' => '死亡時にランダムなDemonミニオンを召喚。' },
        { 'name' => 'Mal\'Ganis', 'text' => '死亡時にランダムなDemonミニオンを召喚。' },
        { 'name' => 'Nomi, Kitchen Nightmare', 'text' => '死亡時にランダムなミニオンを召喚。' },
        { 'name' => 'Y\'Shaarj, Rage Unbound', 'text' => '死亡時にランダムなミニオンを召喚。' }
      ]
      site.data['buddies'] = buddies
    end
  end
end
const descriptions = [
  {
    id: 1,
    name: "Akiko Tanaka",
    country: "Japan",
    place: "Arashiyama Bamboo Grove, Kyoto",
    flora: ["Moso bamboo", "Japanese maple", "Cherry blossom"],
    fauna: ["Japanese macaque", "Bush warbler", "Tanuki"],
    description: "Walking through the towering bamboo, the world falls silent except for the creaking of stalks swaying overhead. Light filters through in shifting columns. I feel impossibly small and completely held at the same time. In autumn, the maples at the grove's edge burn crimson against the green, and I often spot macaques watching from the canopy with calm, knowing eyes.",
    feeling: "Peaceful and humbled"
  },
  {
    id: 2,
    name: "Carlos Rivera",
    country: "Costa Rica",
    place: "Monteverde Cloud Forest",
    flora: ["Orchids", "Bromeliads", "Strangler fig"],
    fauna: ["Resplendent quetzal", "Howler monkey", "Glass frog"],
    description: "The cloud forest is a world draped in mist. Every surface is alive — mosses, ferns, orchids clinging to branches. When the quetzal appears with its iridescent tail streaming behind, my heart stops. The howler monkeys call across the canopy like distant thunder. I feel like I've stepped into a primordial dream.",
    feeling: "Awestruck and alive"
  },
  {
    id: 3,
    name: "Ingrid Svensson",
    country: "Sweden",
    place: "Abisko National Park, Swedish Lapland",
    flora: ["Arctic birch", "Cloudberry", "Reindeer lichen"],
    fauna: ["Reindeer", "Arctic fox", "Golden eagle"],
    description: "In winter, the northern lights dance above the frozen lake and the silence is so deep it rings in your ears. In summer, the midnight sun bathes the birch forests in gold for weeks. I come here to feel the vastness of the world and my own smallness within it. The arctic foxes leave delicate tracks in the snow like secret messages.",
    feeling: "Free and insignificant in the best way"
  },
  {
    id: 4,
    name: "Amina Diallo",
    country: "Senegal",
    place: "Djoudj National Bird Sanctuary",
    flora: ["Typha reeds", "Water lilies", "Acacia"],
    fauna: ["White pelican", "Flamingo", "Warthog"],
    description: "Thousands of pelicans rising together from the water — the sound of their wings is like applause. The wetlands shimmer in the heat, and flamingos stand in impossible pink lines against the green reeds. I grew up near here and every visit reminds me that beauty doesn't need to be discovered, it just needs to be returned to.",
    feeling: "Rooted and grateful"
  },
  {
    id: 5,
    name: "James O'Brien",
    country: "Ireland",
    place: "Cliffs of Moher, County Clare",
    flora: ["Sea pink", "Bird's-foot trefoil", "Sea campion"],
    fauna: ["Atlantic puffin", "Peregrine falcon", "Grey seal"],
    description: "Standing at the edge with the Atlantic roaring two hundred metres below, the wind so strong it leans you back — there's nothing between you and America. Puffins nest in the cliff face, absurdly colourful against the grey rock. I come here when I need to remember that the world is bigger than my problems.",
    feeling: "Exhilarated and grounded"
  },
  {
    id: 6,
    name: "Mei-Ling Chen",
    country: "Taiwan",
    place: "Taroko Gorge",
    flora: ["Camphor tree", "Taiwan red cypress", "Ferns"],
    fauna: ["Formosan rock macaque", "Mikado pheasant", "Swinhoe's blue pheasant"],
    description: "The marble walls of the gorge rise hundreds of metres, carved by the Liwu River over millennia. Swallows dart between the cliff faces, and the turquoise water below is so clear it seems unreal. Walking the old trail carved into the rock, I feel connected to every person who has ever walked this path before me.",
    feeling: "Connected to deep time"
  },
  {
    id: 7,
    name: "Oluwaseun Adeyemi",
    country: "Nigeria",
    place: "Omo Forest Reserve",
    flora: ["Mahogany", "Iroko tree", "Oil palm"],
    fauna: ["Forest elephant", "Chimpanzee", "Grey parrot"],
    description: "The canopy is so thick that noon feels like dusk. You hear the forest before you see it — the crash of something large moving through undergrowth, the cascading call of grey parrots. Finding chimp nests high in the mahogany trees fills me with hope. This forest is fighting to survive, and so am I.",
    feeling: "Determined and hopeful"
  },
  {
    id: 8,
    name: "Elena Petrova",
    country: "Russia",
    place: "Lake Baikal, Siberia",
    flora: ["Siberian pine", "Rhododendron", "Sphagnum moss"],
    fauna: ["Baikal seal", "Omul fish", "Sable"],
    description: "In winter, the lake freezes into glass so clear you can see forty metres down. Cracks sing across the ice like whale song. The Baikal seals — found nowhere else on Earth — pop up through breathing holes and regard you with enormous dark eyes. I have never felt more present than on that ice, with the oldest lake in the world beneath my feet.",
    feeling: "Profoundly present"
  },
  {
    id: 9,
    name: "Lucas Martínez",
    country: "Argentina",
    place: "Los Glaciares National Park, Patagonia",
    flora: ["Lenga beech", "Calafate bush", "Antarctic moss"],
    fauna: ["Andean condor", "Guanaco", "Patagonian fox"],
    description: "Perito Moreno glacier creaks and groans like a living thing. Every few minutes, a house-sized chunk of ice calves into the lake with a sound like thunder. Condors circle above on thermals, barely moving their wings. The calafate berries are everywhere — legend says if you eat them, you'll always return. I have eaten many.",
    feeling: "Overwhelmed by scale"
  },
  {
    id: 10,
    name: "Fatima Al-Rashid",
    country: "Oman",
    place: "Wadi Shab",
    flora: ["Date palm", "Oleander", "Wild fig"],
    fauna: ["Arabian tahr", "Bonelli's eagle", "Blue-cheeked bee-eater"],
    description: "You walk through a narrow canyon with turquoise pools linked by short swims, and suddenly you're inside a cave with a waterfall pouring from the ceiling. Date palms cling to the cliff edges, and bee-eaters flash past in streaks of green and blue. It feels like finding a secret that the desert has been keeping for thousands of years.",
    feeling: "Wonder and discovery"
  },
  {
    id: 11,
    name: "Sophie Dubois",
    country: "France",
    place: "Camargue Wetlands",
    flora: ["Samphire", "Sea lavender", "Tamarisk"],
    fauna: ["Greater flamingo", "Camargue horse", "European bee-eater"],
    description: "The white horses gallop through shallow lagoons, sending up sprays of silver water. Flamingos turn the horizon pink. The light here is unlike anywhere else in France — it has a luminous, almost liquid quality. The salt marshes stretch endlessly, and the wind carries the scent of lavender and brine. I feel untethered from time.",
    feeling: "Timeless and dreamy"
  },
  {
    id: 12,
    name: "Kofi Mensah",
    country: "Ghana",
    place: "Kakum National Park",
    flora: ["African mahogany", "Epiphytic orchids", "Oil palm"],
    fauna: ["Diana monkey", "Forest elephant", "Hornbill"],
    description: "Walking the canopy walkway forty metres above the forest floor, swaying between giant trees, you see the forest as the birds see it. Hornbills glide below you. The sound is extraordinary — a wall of insect song punctuated by monkey calls. Up here, suspended between earth and sky, I feel utterly free.",
    feeling: "Liberated and joyful"
  },
  {
    id: 13,
    name: "Yuki Nakamura",
    country: "Japan",
    place: "Yakushima Island",
    flora: ["Ancient cedar (Yakusugi)", "Moss", "Rhododendron"],
    fauna: ["Yakushima macaque", "Yakushima deer", "Loggerhead turtle"],
    description: "The cedar trees here are thousands of years old, their trunks twisted into impossible shapes, every surface carpeted in moss so green it almost glows. Rain falls more days than not, and it makes everything luminous. Walking among these ancient trees, I feel the weight and beauty of deep time. They were old when Rome was young.",
    feeling: "Reverent and small"
  },
  {
    id: 14,
    name: "Priya Sharma",
    country: "India",
    place: "Valley of Flowers, Uttarakhand",
    flora: ["Brahma kamal", "Blue poppy", "Cobra lily"],
    fauna: ["Snow leopard", "Himalayan monal", "Musk deer"],
    description: "After days of trekking through bare mountain, you crest a ridge and suddenly the entire valley is carpeted in wildflowers — hundreds of species in every colour imaginable. Himalayan monals strut through the meadows, their feathers catching the sun like jewels. The air is thin and sweet. I wept the first time I saw it.",
    feeling: "Ecstatic and emotional"
  },
  {
    id: 15,
    name: "Marco Bianchi",
    country: "Italy",
    place: "Matera, Basilicata",
    flora: ["Wild thyme", "Caper bush", "Prickly pear"],
    fauna: ["Lesser kestrel", "Italian wall lizard", "European bee-eater"],
    description: "The sassi — ancient cave dwellings carved into limestone — cascade down the ravine like a stone waterfall. Kestrels nest in the abandoned caves and hunt over the gorge at sunset. Wild thyme and capers grow from every crack. Walking these streets, some of the oldest continuously inhabited places on Earth, I feel the layers of human persistence.",
    feeling: "Awed by human endurance"
  },
  {
    id: 16,
    name: "Aisha Mohammed",
    country: "Kenya",
    place: "Maasai Mara",
    flora: ["Red oat grass", "Balanites tree", "Croton bush"],
    fauna: ["Wildebeest", "Lion", "Lilac-breasted roller"],
    description: "During the great migration, the plains darken with wildebeest as far as the eye can see. The sound — a constant low rumbling — fills the air like distant surf. Lions watch from the shade of balanites trees. A lilac-breasted roller perches on a branch, impossibly beautiful against the golden grass. This is life at its most raw and magnificent.",
    feeling: "Alive and electric"
  },
  {
    id: 17,
    name: "Henrik Johansson",
    country: "Norway",
    place: "Lofoten Islands",
    flora: ["Arctic poppy", "Mountain avens", "Crowberry"],
    fauna: ["White-tailed eagle", "Atlantic puffin", "Orca"],
    description: "Jagged peaks rise straight from a sea that shifts between steel grey and impossible turquoise. The fishing villages are dots of red and yellow against the mountains. In winter, the northern lights reflect off the water. I once watched a white-tailed eagle pluck a fish from the fjord — effortless, precise, wild. This place makes me believe in untamed things.",
    feeling: "Wild and inspired"
  },
  {
    id: 18,
    name: "Maria Santos",
    country: "Brazil",
    place: "Chapada Diamantina, Bahia",
    flora: ["Bromeliad", "Candeia tree", "Sempre-viva flower"],
    fauna: ["Maned wolf", "Hyacinth macaw", "Black-chested buzzard eagle"],
    description: "Tabletop mountains rise from the cerrado like ancient monuments. Hidden caves hold crystal-clear pools, and waterfalls plunge into canyons so deep the bottom is in perpetual twilight. Hyacinth macaws — the world's largest parrot — fly overhead in pairs, their calls echoing off stone. I feel like an explorer finding lost worlds.",
    feeling: "Adventurous and amazed"
  },
  {
    id: 19,
    name: "Tenzin Dorje",
    country: "Nepal",
    place: "Annapurna Sanctuary",
    flora: ["Rhododendron", "Blue pine", "Juniper"],
    fauna: ["Himalayan tahr", "Danphe pheasant", "Lammergeier"],
    description: "The amphitheatre of peaks — Annapurna, Machapuchare, Hiunchuli — surrounds you on all sides, all above 6,000 metres. Prayer flags snap in the wind. The rhododendrons bloom red against the snow in spring. A lammergeier soars overhead, carrying a bone to drop on the rocks below. In this natural cathedral, I feel held by the mountains.",
    feeling: "Protected and spiritual"
  },
  {
    id: 20,
    name: "Sarah Mitchell",
    country: "Australia",
    place: "Daintree Rainforest, Queensland",
    flora: ["Fan palm", "Strangler fig", "King fern"],
    fauna: ["Cassowary", "Boyd's forest dragon", "Ulysses butterfly"],
    description: "This is the oldest continuously surviving rainforest on Earth — 180 million years. Meeting a cassowary on the trail, eye to eye with a dinosaur's descendant, the forest suddenly feels like the ancient place it is. Ulysses butterflies — electric blue — drift through the canopy gaps. Where the rainforest meets the reef at Cape Tribulation, two World Heritage sites touch. Nowhere else.",
    feeling: "Privileged and amazed"
  },
  {
    id: 21,
    name: "Dmitri Volkov",
    country: "Russia",
    place: "Kamchatka Peninsula",
    flora: ["Stone birch", "Fireweed", "Giant hogweed"],
    fauna: ["Brown bear", "Steller's sea eagle", "Pacific salmon"],
    description: "Volcanic peaks steam on the horizon while brown bears fish for salmon in rivers so thick with fish you could almost walk across them. Steller's sea eagles — the largest eagles in the world — perch in the stone birches, watching. The hot springs steam in the cold air. This is the edge of the world, and it is furiously alive.",
    feeling: "Raw and untamed"
  },
  {
    id: 22,
    name: "Isabella García",
    country: "Ecuador",
    place: "Galápagos Islands",
    flora: ["Prickly pear cactus", "Scalesia tree", "Mangrove"],
    fauna: ["Marine iguana", "Blue-footed booby", "Giant tortoise"],
    description: "The animals here have no fear of humans. A marine iguana sneezes salt on your foot. Blue-footed boobies dance their courtship inches from your face. Giant tortoises move through the highlands with geological patience. Darwin's enchanted islands taught the world about evolution, and standing here, you can feel it — life experimenting, adapting, becoming.",
    feeling: "Humbled by nature's creativity"
  },
  {
    id: 23,
    name: "Liam O'Sullivan",
    country: "New Zealand",
    place: "Milford Sound, Fiordland",
    flora: ["Silver beech", "Tree fern", "Rimu"],
    fauna: ["Fiordland crested penguin", "Bottlenose dolphin", "Kea"],
    description: "Mitre Peak rises 1,700 metres straight from black water. After rain — and it rains constantly — hundreds of temporary waterfalls pour down the cliffs. Dolphins ride the bow wave of the boat. A kea, the world's only alpine parrot, lands on the railing and tries to steal my sandwich. The scale is impossible and intimate at once.",
    feeling: "Dwarfed and delighted"
  },
  {
    id: 24,
    name: "Naomi Okafor",
    country: "Cameroon",
    place: "Dja Faunal Reserve",
    flora: ["African teak", "Sapele mahogany", "Raphia palm"],
    fauna: ["Western lowland gorilla", "Forest buffalo", "Mandrill"],
    description: "The forest here is so dense that GPS stops working. You navigate by river and sound. Mandrills — with their extraordinary painted faces — move through the undergrowth in troops of hundreds. Finding gorilla nests in the morning, still warm, knowing they were just here — it makes the forest feel like a shared home.",
    feeling: "Intimate and wild"
  },
  {
    id: 25,
    name: "Ana Kovač",
    country: "Slovenia",
    place: "Lake Bled",
    flora: ["European beech", "Linden tree", "Alpine rose"],
    fauna: ["Alpine ibex", "Golden eagle", "Fire salamander"],
    description: "The island church floats on emerald water, backed by a medieval castle clinging to a cliff, backed by the Julian Alps capped in snow. It looks like a painting that's trying too hard, but it's real. In autumn, the beeches turn gold and the reflections in the still water are perfect. I row out to the island and ring the wishing bell. I wish to come back.",
    feeling: "Enchanted and serene"
  },
  {
    id: 26,
    name: "David Kim",
    country: "South Korea",
    place: "Seoraksan National Park",
    flora: ["Korean pine", "Maple", "Royal azalea"],
    fauna: ["Asiatic black bear", "Mandarin duck", "Korean goral"],
    description: "In autumn, the mountains explode into colour — every shade of red, orange, gold, and russet against granite peaks. The morning mist fills the valleys like milk. Mandarin ducks float on impossibly clear streams. At dawn, from Ulsanbawi Rock, you watch the sun rise over the East Sea, and for a moment everything is outlined in gold.",
    feeling: "Elevated and at peace"
  },
  {
    id: 27,
    name: "Rosa Flores",
    country: "Mexico",
    place: "Monarch Butterfly Reserve, Michoacán",
    flora: ["Oyamel fir", "Pine", "Wildflowers"],
    fauna: ["Monarch butterfly", "White-eared hummingbird", "Long-tailed wood partridge"],
    description: "Millions of monarchs — after flying 4,000 kilometres from Canada — cluster on the oyamel firs so thickly that the branches bend. When the sun warms them, they rise in clouds of orange and black that blot out the sky. The sound of millions of wings is like gentle rain. I cry every single time. It is the most beautiful thing I have ever seen.",
    feeling: "Overwhelmed with beauty"
  },
  {
    id: 28,
    name: "Thomas Weber",
    country: "Germany",
    place: "Saxon Switzerland, Elbe Sandstone Mountains",
    flora: ["Scots pine", "Bilberry", "Moss"],
    fauna: ["Peregrine falcon", "Eurasian lynx", "Fire salamander"],
    description: "Sandstone pillars rise from ancient forests like the ruins of a giant's castle. The Bastei Bridge spans a gorge 200 metres above the Elbe, and the view stretches to Bohemia. Peregrine falcons nest on the pinnacles. In morning fog, only the tops of the pillars are visible, floating above a white sea. It is Germany's most dramatic secret.",
    feeling: "Transported to another world"
  },
  {
    id: 29,
    name: "Leila Ahmadi",
    country: "Iran",
    place: "Hyrcanian Forest, Gilan",
    flora: ["Persian ironwood", "Chestnut-leaved oak", "Box tree"],
    fauna: ["Persian leopard", "Brown bear", "Caspian red deer"],
    description: "This forest has survived since the last ice age — a relic of the ancient world clinging to the Caspian shore. The ironwood trees twist into extraordinary shapes, their autumn leaves turning every warm colour. Fog rolls in from the Caspian and the forest becomes a cathedral of dripping green. Knowing that leopards still walk here, unseen, makes every shadow significant.",
    feeling: "Ancient and mysterious"
  },
  {
    id: 30,
    name: "Ben Thompson",
    country: "Canada",
    place: "Nahanni National Park, Northwest Territories",
    flora: ["White spruce", "Fireweed", "Labrador tea"],
    fauna: ["Woodland caribou", "Grizzly bear", "Trumpeter swan"],
    description: "Virginia Falls drops twice the height of Niagara into a canyon that almost no one will ever see. The South Nahanni River winds through a landscape of hot springs, tufa mounds, and legends of lost gold miners. Grizzlies fish the tributaries. The boreal forest stretches to every horizon. This is wilderness as it was before we named it.",
    feeling: "Humbled by true wilderness"
  },
  {
    id: 31,
    name: "Chiara Rossi",
    country: "Italy",
    place: "Dolomites, South Tyrol",
    flora: ["Edelweiss", "Alpine gentian", "Larch"],
    fauna: ["Chamois", "Marmot", "Bearded vulture"],
    description: "The Dolomite peaks turn pink at sunset — the Enrosadira — and for twenty minutes the mountains look like they're carved from rose quartz. Marmots whistle warnings across the alpine meadows. Chamois navigate impossible cliff faces with casual grace. In the high meadows, edelweiss grows in secret places. I feel like I'm walking through a fairy tale that happens to be made of stone.",
    feeling: "Enchanted and breathless"
  },
  {
    id: 32,
    name: "Kwame Asante",
    country: "Botswana",
    place: "Okavango Delta",
    flora: ["Papyrus", "Water lily", "Sausage tree"],
    fauna: ["African elephant", "Leopard", "African fish eagle"],
    description: "A river that never reaches the sea, spreading into a labyrinth of channels and islands in the Kalahari. Gliding by mokoro through papyrus channels, an elephant feeds ten metres away, ignoring you completely. Fish eagles call — that ringing, thrown-back cry. At night, hippos grunt in the darkness. This is Africa at its most generous and indifferent.",
    feeling: "Quietly thrilled"
  },
  {
    id: 33,
    name: "Hana Yoshida",
    country: "Japan",
    place: "Shiretoko Peninsula, Hokkaido",
    flora: ["Ezo spruce", "Painted maple", "Skunk cabbage"],
    fauna: ["Blakiston's fish owl", "Brown bear", "Steller's sea eagle"],
    description: "At the edge of Japan, where pack ice drifts down from Russia, the largest owls in the world hunt along frozen streams. Bears catch salmon in waterfalls. Steller's sea eagles — massive, black and white — gather on the ice floes by the hundreds. Shiretoko means 'the end of the earth' in Ainu. It feels exactly like that.",
    feeling: "At the world's edge"
  },
  {
    id: 34,
    name: "Emma Larsson",
    country: "Sweden",
    place: "Gotland Island",
    flora: ["Wild orchid", "Sea buckthorn", "Raukar stone formations with lichen"],
    fauna: ["Gotland pony", "Guillemot", "Hedgehog"],
    description: "The raukar — limestone sea stacks shaped by millennia of waves — stand along the coast like abstract sculptures. More wild orchid species grow here than almost anywhere in Europe. The medieval town of Visby feels like stepping through a portal. In summer, the light lasts until midnight and the meadows buzz with life. It is Sweden's quiet magic.",
    feeling: "Enchanted and curious"
  },
  {
    id: 35,
    name: "André Nkomo",
    country: "South Africa",
    place: "Kirstenbosch and Table Mountain, Cape Town",
    flora: ["King protea", "Silver tree", "Fynbos"],
    fauna: ["Rock hyrax (dassie)", "Sunbird", "Chacma baboon"],
    description: "Table Mountain's flat summit holds a world of fynbos — the richest plant kingdom on Earth compressed into a tiny area. King proteas bloom like alien crowns. Sunbirds hover at flowers with iridescent precision. The view from the top — two oceans meeting — reminds you that this is where the continent ends and something else begins.",
    feeling: "Proud and inspired"
  },
  {
    id: 36,
    name: "Catherine Tremblay",
    country: "Canada",
    place: "Bay of Fundy, New Brunswick",
    flora: ["Dulse seaweed", "Rockweed", "Balsam fir"],
    fauna: ["North Atlantic right whale", "Atlantic puffin", "Bald eagle"],
    description: "The highest tides in the world — 16 metres — reveal a vast seafloor of sculpted rock at low tide, then swallow it whole six hours later. Kayaking at high tide, right whales surface so close the spray hits your face. The Hopewell Rocks stand like flowerpots carved by the sea. Time here is measured in tides, not hours.",
    feeling: "In rhythm with something ancient"
  },
  {
    id: 37,
    name: "Rashid Hassan",
    country: "Morocco",
    place: "Todra Gorge, Atlas Mountains",
    flora: ["Date palm", "Fig tree", "Oleander"],
    fauna: ["Barbary macaque", "Bonelli's eagle", "Atlas mountain viper"],
    description: "The gorge narrows until the walls are only ten metres apart and 300 metres high, and the strip of sky above is blinding blue. Date palms somehow grow at the base, fed by the river. Bonelli's eagles nest on ledges you can barely see. The Amazigh villages at the gorge mouth have been here for centuries, built from the same red stone. I feel sheltered by geology.",
    feeling: "Sheltered and awed"
  },
  {
    id: 38,
    name: "Linh Nguyen",
    country: "Vietnam",
    place: "Ha Long Bay",
    flora: ["Mangrove", "Cycad", "Tropical orchid"],
    fauna: ["Cat Ba langur", "Hawksbill turtle", "White-bellied sea eagle"],
    description: "Nearly two thousand limestone karsts rise from emerald water, each topped with jungle. Fishing boats thread between them. Caves hide inside the islands — vast cathedral spaces of stalactites. At dawn, the mist sits between the karsts and everything turns to silhouette and suggestion. It looks like a Chinese painting come to life, which of course is the other way around.",
    feeling: "Floating between worlds"
  },
  {
    id: 39,
    name: "João Silva",
    country: "Portugal",
    place: "Azores, São Miguel Island",
    flora: ["Hydrangea", "Laurel", "Japanese cedar"],
    fauna: ["Sperm whale", "Cory's shearwater", "Azores bullfinch"],
    description: "Volcanic crater lakes — one green, one blue — sit side by side in Sete Cidades, ringed by hydrangeas. Out at sea, sperm whales dive in water a thousand metres deep just kilometres from shore. At night, shearwaters return to their burrows, calling in the darkness. The Azores feel like the middle of nowhere and the centre of everything.",
    feeling: "Remote and complete"
  },
  {
    id: 40,
    name: "Grace Wanjiku",
    country: "Kenya",
    place: "Lake Nakuru",
    flora: ["Yellow-barked acacia", "Euphorbia", "Candelabra tree"],
    fauna: ["Lesser flamingo", "White rhino", "Rothschild's giraffe"],
    description: "Two million flamingos turn the lake into a living pink carpet. When they take flight, the sky fills with colour and the sound of wings is like rushing water. White rhinos graze in the fever tree forest, guarded by rangers. Rothschild's giraffes — fewer than a thousand left — move through the acacias with impossible elegance. Every visit feels urgent and precious.",
    feeling: "Urgent love"
  },
  {
    id: 41,
    name: "Sebastian Müller",
    country: "Germany",
    place: "Black Forest, Baden-Württemberg",
    flora: ["Silver fir", "Bilberry", "Foxglove"],
    fauna: ["Black woodpecker", "European badger", "Red deer"],
    description: "The forest is so dense and the firs so tall that the floor is a twilight world of moss and ferns. Black woodpeckers drum on dead trees — a sound like slow machine-gun fire. The trails wind through tiny valleys with streams cold enough to ache. In autumn, fog fills the valleys and only the hilltops emerge. It is every fairy tale's setting, and it knows it.",
    feeling: "Storied and calm"
  },
  {
    id: 42,
    name: "Arundhati Nair",
    country: "India",
    place: "Sundarbans, West Bengal",
    flora: ["Sundari tree", "Mangrove", "Nipa palm"],
    fauna: ["Bengal tiger", "Gangetic dolphin", "Mudskipper"],
    description: "The largest mangrove forest in the world, where rivers split into a thousand channels and land and water refuse to be separate things. Bengal tigers swim between islands. Dolphins surface in brown water. Mudskippers climb trees. Everything here defies categories. Navigating by boat through endless green corridors, I feel the pulse of a living labyrinth.",
    feeling: "Disoriented and fascinated"
  },
  {
    id: 43,
    name: "Pablo Herrera",
    country: "Chile",
    place: "Torres del Paine National Park",
    flora: ["Lenga beech", "Calafate bush", "Antarctic orchid"],
    fauna: ["Puma", "Guanaco", "Andean condor"],
    description: "The three granite towers — the Torres — catch the first light of dawn and turn from grey to gold to blazing orange in minutes. Guanacos graze on the steppe below, watched by pumas. Condors ride the thermals above the peaks. The wind in Patagonia is a physical force — it shapes the trees, the lakes, and eventually, you. I feel scoured clean.",
    feeling: "Stripped bare and renewed"
  },
  {
    id: 44,
    name: "Nadia Kowalski",
    country: "Poland",
    place: "Białowieża Forest",
    flora: ["Ancient oak", "Hornbeam", "Wood anemone"],
    fauna: ["European bison", "White-backed woodpecker", "Wolf"],
    description: "The last primeval forest in lowland Europe. Oaks over 500 years old, trunks too wide to embrace. European bison — brought back from extinction — move through the undergrowth like ghosts from the Pleistocene. Dead trees are left to fall and become cities of fungi and insects. This is what all of Europe once looked like. Walking here is walking backward through time.",
    feeling: "Time-travelling"
  },
  {
    id: 45,
    name: "Omar Al-Farsi",
    country: "United Arab Emirates",
    place: "Liwa Oasis, Empty Quarter",
    flora: ["Date palm", "Ghaf tree", "Desert hyacinth"],
    fauna: ["Arabian oryx", "Sand gazelle", "Pharaoh eagle-owl"],
    description: "The dunes of the Rub' al Khali rise over 300 metres — the largest sand sea on Earth. At Liwa, the oasis has sustained life for millennia, date palms rising from the sand in defiant green. At sunset, the dunes shift from gold to copper to violet. The silence is total. Arabian oryx, white as bone, move along the dune crests. The desert teaches patience.",
    feeling: "Still and patient"
  },
  {
    id: 46,
    name: "Hannah van der Berg",
    country: "Netherlands",
    place: "Wadden Sea",
    flora: ["Glasswort", "Sea aster", "Eelgrass"],
    fauna: ["Harbour seal", "Spoonbill", "Dunlin"],
    description: "At low tide, you can walk across the sea floor to the islands — mudflat hiking through a world that exists for only six hours. Seals haul out on sandbars. Millions of migratory birds use this as a refuelling stop. The mudflats stretch to every horizon, gleaming. It is the opposite of dramatic — subtle, shifting, and utterly captivating once you learn to read it.",
    feeling: "Attuned to subtlety"
  },
  {
    id: 47,
    name: "Diego Vargas",
    country: "Colombia",
    place: "Caño Cristales, Serranía de la Macarena",
    flora: ["Macarenia clavigera (river plant)", "Moss", "Riverweed"],
    fauna: ["Howler monkey", "Cock-of-the-rock", "River turtle"],
    description: "For a few months each year, the river turns into a liquid rainbow — red, yellow, green, blue, and black from aquatic plants, algae, and stone. It's called the River of Five Colours and it looks photoshopped but isn't. Howler monkeys roar from the forest edge. The remoteness — it takes real effort to reach — makes the colours feel like a reward.",
    feeling: "Rewarded and dazzled"
  },
  {
    id: 48,
    name: "Maren Haugen",
    country: "Norway",
    place: "Svalbard Archipelago",
    flora: ["Arctic moss", "Svalbard poppy", "Purple saxifrage"],
    fauna: ["Polar bear", "Arctic fox", "Walrus"],
    description: "At 78 degrees north, the sun doesn't set for four months, then doesn't rise for four more. Glaciers calve into fjords where walruses rest on ice floes. Polar bears patrol the shore ice. The Svalbard poppy — the northernmost flowering plant — blooms yellow against the grey scree. In the permanent daylight of summer, time loses all meaning. You just exist.",
    feeling: "Outside of time"
  },
  {
    id: 49,
    name: "Ravi Krishnamurthy",
    country: "India",
    place: "Ladakh, Pangong Lake",
    flora: ["Juniper", "Seabuckthorn", "Wild rose"],
    fauna: ["Black-necked crane", "Kiang (wild ass)", "Marmot"],
    description: "At 4,350 metres, the lake stretches 134 kilometres, changing colour from azure to turquoise to deep indigo as clouds pass overhead. The mountains around it are bare and vast, painted in stripes of red, brown, and grey. Black-necked cranes — sacred in Ladakh — feed at the marshy edges. The thin air makes everything crisp and unreal, like living inside a photograph.",
    feeling: "Elevated in every sense"
  },
  {
    id: 50,
    name: "Clara Johansson",
    country: "Finland",
    place: "Archipelago National Park",
    flora: ["Sea buckthorn", "Juniper", "Baltic orchid"],
    fauna: ["White-tailed eagle", "Baltic ringed seal", "Eider duck"],
    description: "Thousands of islands and skerries scatter across the Baltic like a broken mosaic. The granite is pink, smoothed by ice ages, and the junipers grow sideways from the wind. White-tailed eagles circle overhead. In midsummer, the sun barely dips below the horizon and the water turns to gold. I sail between islands and feel like I could sail forever.",
    feeling: "Endlessly free"
  },
  {
    id: 51,
    name: "Rafael Oliveira",
    country: "Brazil",
    place: "Fernando de Noronha Archipelago",
    flora: ["Mulungu tree", "Burra leiteira", "Sea grape"],
    fauna: ["Spinner dolphin", "Hawksbill turtle", "Red-billed tropicbird"],
    description: "Hundreds of spinner dolphins enter the bay each morning, leaping and spinning in the golden light. The water is so clear you can see thirty metres down to coral and turtles. Red-billed tropicbirds trail their long tails against volcanic cliffs. Only 460 visitors are allowed on the island at once. It feels like an exclusive audience with the ocean.",
    feeling: "Privileged and grateful"
  },
  {
    id: 52,
    name: "Elif Demir",
    country: "Turkey",
    place: "Cappadocia",
    flora: ["Apricot tree", "Grape vine", "Wild poppy"],
    fauna: ["European roller", "Rock nuthatch", "Long-eared hedgehog"],
    description: "The fairy chimneys — volcanic towers carved by wind and rain into impossible mushroom shapes — stretch across valleys carpeted in apricot orchards. At dawn, hundreds of hot air balloons rise into a pink sky above the formations. Cave churches hold 1,000-year-old frescoes. Rollers flash their blue wings from chimney tops. It's a landscape from a lucid dream.",
    feeling: "Dreaming while awake"
  },
  {
    id: 53,
    name: "Michael Fitzgerald",
    country: "United States",
    place: "Olympic National Park, Washington",
    flora: ["Sitka spruce", "Sword fern", "Club moss"],
    fauna: ["Roosevelt elk", "Spotted owl", "Banana slug"],
    description: "The Hoh Rainforest is draped in moss so thick that the trees look like they're wearing fur coats. Every surface is green. Roosevelt elk move through cathedral-like groves of Sitka spruce that have been growing for centuries. The rainfall — over three metres a year — feeds everything. In the silence between rain showers, you can hear the forest growing.",
    feeling: "Enveloped and nourished"
  },
  {
    id: 54,
    name: "Anja Becker",
    country: "Austria",
    place: "Hohe Tauern National Park",
    flora: ["Edelweiss", "Alpine rose", "Glacier buttercup"],
    fauna: ["Ibex", "Bearded vulture", "Alpine salamander"],
    description: "Grossglockner, Austria's highest peak, gleams with glacial ice above meadows thick with wildflowers. Ibex navigate vertical rock faces that make you dizzy to watch. Bearded vultures — recently reintroduced — soar on thermals with three-metre wingspans. Waterfalls cascade from hanging valleys. The Krimml Falls, Europe's highest, thunder with snowmelt. Everything here is vertical and vital.",
    feeling: "Uplifted and vigorous"
  },
  {
    id: 55,
    name: "Youssef Benali",
    country: "Tunisia",
    place: "Ichkeul National Park",
    flora: ["Olive tree", "Juncus reeds", "Potamogeton"],
    fauna: ["Greylag goose", "White-headed duck", "Water buffalo"],
    description: "The lake and marshes at the foot of Jebel Ichkeul host hundreds of thousands of migratory birds each winter. Greylag geese arrive in clouds. The rare white-headed duck paddles in the shallows. Water buffalo, introduced centuries ago, wallow in the reed beds. The mountain reflected in the still lake at dawn, surrounded by birds — it is a composition nature made on purpose.",
    feeling: "Composed and tranquil"
  },
  {
    id: 56,
    name: "Karolina Novak",
    country: "Croatia",
    place: "Plitvice Lakes",
    flora: ["European beech", "Moss", "Water mint"],
    fauna: ["Brown bear", "European otter", "Kingfisher"],
    description: "Sixteen lakes connected by waterfalls cascade down a forested valley, each a different shade of turquoise and green. The travertine barriers that form the falls are alive — built by moss and bacteria over thousands of years. Kingfishers dive into pools so clear they seem empty until a trout flashes silver. The boardwalks wind through mist from the falls. It is nature's architecture.",
    feeling: "In nature's cathedral"
  },
  {
    id: 57,
    name: "Takeshi Mori",
    country: "Japan",
    place: "Ogasawara Islands (Bonin Islands)",
    flora: ["Pandanus", "Screw pine", "Bonin Island juniper"],
    fauna: ["Bonin petrel", "Humpback whale", "Green sea turtle"],
    description: "Twenty-four hours by boat from Tokyo — no airport — these oceanic islands have been called the Galápagos of the East. Species found nowhere else on Earth. Humpback whales breach in the bay. Green turtles nest on beaches of blinding white sand. The isolation is the point — the journey itself teaches you to slow down. By the time you arrive, you've already changed.",
    feeling: "Transformed by distance"
  },
  {
    id: 58,
    name: "Lucia Morales",
    country: "Peru",
    place: "Colca Canyon",
    flora: ["Yareta plant", "Queñua tree", "Ichu grass"],
    fauna: ["Andean condor", "Vicuña", "Viscacha"],
    description: "Twice the depth of the Grand Canyon. Standing on the Cruz del Condor viewpoint, Andean condors rise on thermals from the canyon floor — three-metre wingspans, not a single flap, just riding the air. Vicuñas graze the high puna. The pre-Inca terraces still feed the villages. The canyon makes you feel the weight and patience of geological time.",
    feeling: "Patient and vast"
  },
  {
    id: 59,
    name: "Erik Lindqvist",
    country: "Iceland",
    place: "Þingvellir (Thingvellir) National Park",
    flora: ["Arctic thyme", "Birch", "Woolly willow"],
    fauna: ["Arctic char", "Golden plover", "Gyrfalcon"],
    description: "You can walk between the tectonic plates of North America and Eurasia here — the rift valley is visible and growing two centimetres each year. The ancient parliament site, the oldest in the world. Arctic char swim in water so clear it's invisible — the Silfra fissure is like flying through liquid air. Gyrfalcons hunt over the lava fields. History and geology merge.",
    feeling: "Standing between worlds"
  },
  {
    id: 60,
    name: "Adaeze Chukwu",
    country: "Nigeria",
    place: "Yankari National Park",
    flora: ["Savanna woodland", "Baobab", "Shea tree"],
    fauna: ["African elephant", "Olive baboon", "Roan antelope"],
    description: "The warm springs at Wikki bubble up at 31 degrees year-round, crystal clear in the savanna heat. Elephants come to drink and bathe — the largest remaining herd in West Africa. Baboons perch on baobabs watching everything with unnerving intelligence. The dry season draws all life to the springs. Sitting by the water, watching elephants arrive at dusk, the world simplifies to its essentials.",
    feeling: "Simplified and present"
  },
  {
    id: 61,
    name: "Katarina Nilsson",
    country: "Sweden",
    place: "Sarek National Park",
    flora: ["Mountain birch", "Reindeer lichen", "Glacier crowfoot"],
    fauna: ["Wolverine", "Arctic fox", "Golden eagle"],
    description: "No trails, no huts, no bridges. Sweden's last true wilderness. Nearly a hundred glaciers feed rivers that must be forded. Wolverines — elusive, powerful — leave tracks in the snow that you follow but never catch up to. The Rapa Valley opens before you like a secret kingdom. You carry everything in and everything out. The wilderness doesn't accommodate you — you accommodate it.",
    feeling: "Self-reliant and small"
  },
  {
    id: 62,
    name: "Alejandro Ruiz",
    country: "Spain",
    place: "Doñana National Park, Andalusia",
    flora: ["Stone pine", "Cork oak", "Rockrose"],
    fauna: ["Iberian lynx", "Spanish imperial eagle", "Greater flamingo"],
    description: "Where the Guadalquivir meets the Atlantic — vast marshes, dunes, and umbrella pine forests. The Iberian lynx, the world's most endangered cat, hunts rabbits in the scrub. Spanish imperial eagles soar overhead. In winter, the marshes fill and flamingos arrive in thousands. The shifting dunes bury and reveal pine forests over decades. Nothing here stays the same.",
    feeling: "Embracing impermanence"
  },
  {
    id: 63,
    name: "Minh Tran",
    country: "Vietnam",
    place: "Phong Nha-Ke Bang National Park",
    flora: ["Tropical hardwood", "Giant fern", "Cave moss"],
    fauna: ["Saola", "Langur", "Tiger"],
    description: "Son Doong — the largest cave passage in the world — contains its own weather system, its own jungle, its own river. The scale is incomprehensible until you see a person standing next to a stalagmite the height of a building. Outside, the karst mountains hide hundreds more caves. The forest above is so biodiverse that new species are still being discovered. Every visit reveals more.",
    feeling: "Endlessly surprised"
  },
  {
    id: 64,
    name: "Patrick Murphy",
    country: "United States",
    place: "Big Bend National Park, Texas",
    flora: ["Creosote bush", "Prickly pear cactus", "Madrone tree"],
    fauna: ["Roadrunner", "Javelina", "Mexican black bear"],
    description: "Where the Chihuahuan Desert meets the Rio Grande and the Chisos Mountains rise from the flatness like a mirage. The star-gazing here is the best in North America — the Milky Way casts shadows. Roadrunners sprint through the creosote. At sunset, the Santa Elena Canyon walls glow orange above the dark river. The space and silence here are physical presences.",
    feeling: "Spacious and clear"
  },
  {
    id: 65,
    name: "Zara Osman",
    country: "Ethiopia",
    place: "Simien Mountains",
    flora: ["Giant lobelia", "Erica shrub", "St. John's wort"],
    fauna: ["Gelada baboon", "Ethiopian wolf", "Walia ibex"],
    description: "The escarpment drops 1,500 metres into a haze of valleys and plateaus. Gelada baboons — hundreds strong — graze the alpine meadows, plucking grass with extraordinary dexterity. The Ethiopian wolf, the rarest canid on Earth, hunts giant molerats on the moorland. Giant lobelias stand like alien sentinels. Africa's rooftop feels like a separate continent floating above the rest.",
    feeling: "Above it all"
  },
  {
    id: 66,
    name: "Anna Kowalczyk",
    country: "Poland",
    place: "Biebrza Marshes",
    flora: ["Sedge", "Marsh marigold", "Sphagnum moss"],
    fauna: ["Aquatic warbler", "Elk (moose)", "Greater spotted eagle"],
    description: "Europe's largest undrained marshland. In spring, the river floods and the marshes become a shallow sea stretching to the horizon. Elk wade belly-deep through the sedge. The aquatic warbler — Europe's rarest songbird — nests only here. Greater spotted eagles quarter the wetlands with slow, heavy wingbeats. The marshes smell of peat and cold water. It is gloriously, defiantly unfashionable.",
    feeling: "Defiantly content"
  },
  {
    id: 67,
    name: "Chen Wei",
    country: "China",
    place: "Jiuzhaigou Valley, Sichuan",
    flora: ["Rhododendron", "Bamboo", "Larch"],
    fauna: ["Giant panda", "Golden snub-nosed monkey", "Temminck's tragopan"],
    description: "The lakes here are impossible colours — turquoise, emerald, sapphire — caused by calcium carbonate and hydrophytes. In autumn, the surrounding forests blaze with colour reflected in the still water. Waterfalls spread across travertine terraces like liquid lace. Golden snub-nosed monkeys, with their blue faces, watch from rhododendron thickets. It is the most colourful place I have ever been.",
    feeling: "Saturated with colour"
  },
  {
    id: 68,
    name: "Saoirse Byrne",
    country: "Ireland",
    place: "The Burren, County Clare",
    flora: ["Bloody crane's-bill", "Spring gentian", "Maidenhair fern"],
    fauna: ["Pine marten", "Peregrine falcon", "Feral goat"],
    description: "A limestone pavement where Arctic and Mediterranean plants grow side by side — spring gentians and bloody crane's-bill in the same crack. The rock is lunar and grey, but the fissures are gardens. Dolmens and ring forts dot the landscape — people have lived here for six thousand years among the stone. Pine martens hunt in the hazel scrub at dusk. The Burren teaches you that harshness and beauty are the same thing.",
    feeling: "Beautifully austere"
  },
  {
    id: 69,
    name: "Nikolai Petrov",
    country: "Bulgaria",
    place: "Rila Mountains",
    flora: ["Scots pine", "Bilberry", "Edelweiss"],
    fauna: ["Brown bear", "Chamois", "Wallcreeper"],
    description: "The Seven Rila Lakes sit in glacial cirques, each named for its shape — the Eye, the Kidney, the Tear. The water is snowmelt-clear and painfully cold. Wallcreepers — crimson-winged — flutter across cliff faces like butterflies made of stone. The Rila Monastery, white and red, nestles in the valley below. Walking the ridge between the lakes, I feel the bones of the mountain beneath my feet.",
    feeling: "Grounded on bedrock"
  },
  {
    id: 70,
    name: "Wei Lin",
    country: "Malaysia",
    place: "Danum Valley, Borneo",
    flora: ["Dipterocarp", "Rafflesia", "Pitcher plant"],
    fauna: ["Orangutan", "Pygmy elephant", "Rhinoceros hornbill"],
    description: "130 million years of unbroken rainforest. The dipterocarps tower 70 metres, their canopy so thick that the forest floor is a dim, humid world of giants. Orangutans build nests in the crown. Rafflesia — the world's largest flower — blooms on the forest floor, smelling of rot. A pygmy elephant herd crosses the river at dusk. This forest makes you understand the word 'primordial'.",
    feeling: "Humbled by age"
  },
  {
    id: 71,
    name: "Beatriz Campos",
    country: "Portugal",
    place: "Peneda-Gerês National Park",
    flora: ["Atlantic oak", "Arbutus", "Portuguese laurel"],
    fauna: ["Iberian wolf", "Garrano pony", "Golden eagle"],
    description: "The only national park in Portugal. Granite peaks, oak forests, and waterfalls cascading into pools of black water. Wild garrano ponies graze the high pastures. Iberian wolves — elusive and feared — have returned. Ancient Roman roads still cross the mountains. The traditional espigueiros — stone granaries — stand like miniature cathedrals. It is wild and layered and deeply Portuguese.",
    feeling: "Rooted in wild heritage"
  },
  {
    id: 72,
    name: "Samuel Osei",
    country: "Rwanda",
    place: "Volcanoes National Park",
    flora: ["Bamboo", "Hagenia", "Giant senecio"],
    fauna: ["Mountain gorilla", "Golden monkey", "Rwenzori turaco"],
    description: "Climbing through bamboo and stinging nettles, and then — a silverback, four hundred pounds, sitting in the hagenia, eating celery with delicate hands. He looks at you with brown eyes full of intelligence and disinterest. The babies tumble and play. You are allowed one hour. It is simultaneously the longest and shortest hour of your life. I left crying.",
    feeling: "Profoundly moved"
  },
  {
    id: 73,
    name: "Laura Bergström",
    country: "Finland",
    place: "Oulanka National Park",
    flora: ["Old-growth spruce", "Lady's slipper orchid", "Reindeer lichen"],
    fauna: ["Brown bear", "Dipper", "Siberian jay"],
    description: "The Karhunkierros trail follows the Oulanka River through gorges and rapids. Lady's slipper orchids — pink and yellow — bloom in the old-growth forest. Siberian jays land on your hand if you're patient. Dippers bob on riverside rocks, then walk underwater. In winter, the rapids freeze into sculptures. In summer, the midnight sun never quite sets. Each season is a different park.",
    feeling: "Seasonal and alive"
  },
  {
    id: 74,
    name: "Esperanza Gutiérrez",
    country: "Bolivia",
    place: "Salar de Uyuni",
    flora: ["Yareta cushion plant", "Tola bush", "Island cactus"],
    fauna: ["Andean flamingo", "Viscacha", "Andean fox"],
    description: "The world's largest salt flat — 10,000 square kilometres of blinding white. After rain, it becomes the world's largest mirror, reflecting the sky so perfectly that horizon and zenith merge and you can't tell which way is up. Flamingos feed in the shallow brine. Cactus-covered islands emerge from the white like hallucinations. At night, the stars are doubled — above and below. I have never felt so infinite.",
    feeling: "Infinite and weightless"
  },
  {
    id: 75,
    name: "Oscar Johansson",
    country: "Denmark",
    place: "Wadden Sea National Park, Denmark",
    flora: ["Eelgrass", "Glasswort", "Sea aster"],
    fauna: ["Harbour seal", "Oystercatcher", "Knot"],
    description: "The tidal flats stretch impossibly far at low tide. The sky is immense — bigger than anywhere else I know. Flocks of knots turn in the air like a single living thing, silver and dark, silver and dark. Seals lie on sandbanks, watching you with wet eyes. It's not dramatic, it's not photogenic, but it teaches you to look closely. The smallest things here are the most extraordinary.",
    feeling: "Quietly attentive"
  },
  {
    id: 76,
    name: "Thandiwe Moyo",
    country: "Zimbabwe",
    place: "Matobo Hills",
    flora: ["Mountain acacia", "Resurrection plant", "Wild fig"],
    fauna: ["Black eagle", "White rhinoceros", "Rock hyrax"],
    description: "Granite domes and balancing rocks — some the size of houses — scattered across the bush like a giant's game of marbles. Black eagles nest on the kopjes and hunt hyraxes with devastating precision. San rock paintings, thousands of years old, hide in shallow caves. Rhodes is buried here, but the hills belong to the San and the eagles. Standing on a dome at sunset, the whole world is round.",
    feeling: "Ancient and rounded"
  },
  {
    id: 77,
    name: "Isabelle Fontaine",
    country: "France",
    place: "Calanques National Park, Marseille",
    flora: ["Aleppo pine", "Rosemary", "Kermes oak"],
    fauna: ["Bonelli's eagle", "Hermann's tortoise", "Dolphins"],
    description: "White limestone cliffs plunge into impossibly blue Mediterranean water. Aleppo pines lean over the edge, their resin scenting the air. You hike down through rosemary and kermes oak to coves where the water is transparent turquoise. Bonelli's eagles nest on the cliff faces. The city of Marseille is minutes away but might as well be another planet. It is wilderness with good coffee nearby.",
    feeling: "Wild yet civilised"
  },
  {
    id: 78,
    name: "Haruki Watanabe",
    country: "Japan",
    place: "Iriomote Island, Okinawa",
    flora: ["Mangrove", "Subtropical broadleaf", "Sakishima habu grass"],
    fauna: ["Iriomote cat", "Crested serpent eagle", "Giant coconut crab"],
    description: "A subtropical island almost entirely covered in jungle and mangrove. The Iriomote cat — one of the world's rarest — exists only here, fewer than a hundred left. Kayaking through the mangrove rivers, crested serpent eagles watch from the canopy. At night, coconut crabs the size of cats emerge. Japan, but nothing like the Japan you imagine.",
    feeling: "Surprised and enchanted"
  },
  {
    id: 79,
    name: "Peter van Dijk",
    country: "Netherlands",
    place: "De Hoge Veluwe National Park",
    flora: ["Heather", "Scots pine", "Sand dune grass"],
    fauna: ["Red deer", "European badger", "Nightjar"],
    description: "The largest sand drifts in Western Europe sit in the middle of the Netherlands. In August, the heather turns the hills purple to every horizon. Red deer rut in autumn — their bellowing carries for kilometres. At dusk, nightjars churn from the pine edges. You can cycle through the park on free white bikes. It is a masterclass in how a small, crowded country can still hold wildness.",
    feeling: "Hopeful for nature"
  },
  {
    id: 80,
    name: "Dina Petrova",
    country: "Greece",
    place: "Samaria Gorge, Crete",
    flora: ["Cretan maple", "Cretan ebony", "Cyclamen"],
    fauna: ["Kri-kri (Cretan ibex)", "Griffon vulture", "Cretan wall lizard"],
    description: "Eighteen kilometres downhill through Europe's longest gorge. The Iron Gates — where the walls narrow to three metres and rise 300 metres — make you feel like a letter being posted into the earth. Kri-kri, the wild goats of Crete, watch from ledges. Griffon vultures circle the thermals. You emerge at the Libyan Sea, legs shaking, and the water is the blue of a gemstone.",
    feeling: "Earned and triumphant"
  },
  {
    id: 81,
    name: "Tariq Khalil",
    country: "Jordan",
    place: "Wadi Rum",
    flora: ["Desert shrub", "Tamarisk", "White broom"],
    fauna: ["Nubian ibex", "Sand cat", "Arabian oryx"],
    description: "Red sand and sandstone monoliths rising hundreds of metres — Lawrence called it 'vast, echoing, and God-like.' The Bedouin camps sit in the shadow of the cliffs. At night, the stars are so dense they look like spilled milk. Nubian ibex pick their way along impossible ledges. The silence has a texture you can almost touch. Mars rovers were tested here because it looks like another planet. It does.",
    feeling: "Otherworldly and still"
  },
  {
    id: 82,
    name: "Ivy Chen",
    country: "Taiwan",
    place: "Alishan National Scenic Area",
    flora: ["Red cypress", "Cherry blossom", "Tree fern"],
    fauna: ["Mikado pheasant", "Formosan sambar deer", "Barbet"],
    description: "The narrow-gauge railway climbs through bamboo and cypress forest to the summit, where you watch the sunrise over a sea of clouds. The ancient red cypress trees are over a thousand years old. Cherry blossoms line the forest trails in spring. The Mikado pheasant — iridescent purple and blue — crosses the path like a living jewel. Above the clouds, the world feels newly made.",
    feeling: "Reborn each sunrise"
  },
  {
    id: 83,
    name: "Abdul Rahman",
    country: "Indonesia",
    place: "Raja Ampat, West Papua",
    flora: ["Mangrove", "Sago palm", "Tropical hardwood"],
    fauna: ["Manta ray", "Wilson's bird-of-paradise", "Dugong"],
    description: "The most biodiverse marine area on Earth. More coral and fish species in one dive site than the entire Caribbean. Manta rays — five metres across — glide beneath your kayak like underwater birds. On the forested islands, Wilson's bird-of-paradise performs its absurd, spectacular dance on a cleared patch of forest floor. Above and below the waterline, life here is turned up to maximum.",
    feeling: "Sensory overload"
  },
  {
    id: 84,
    name: "Astrid Olsen",
    country: "Denmark",
    place: "Møns Klint, Møn Island",
    flora: ["Beech forest", "Wild orchid", "Elderflower"],
    fauna: ["Peregrine falcon", "Red kite", "Dormouse"],
    description: "White chalk cliffs rise 120 metres above the Baltic, streaked with flint. Fossils of sea urchins and belemnites tumble from the cliff face — 70 million years of ocean floor pushed into the sky. The beech forest on top is a cathedral of green in summer. Denmark's first Dark Sky Park is here, and the Milky Way arches over the white cliffs like a bridge to the past.",
    feeling: "Bridging past and present"
  },
  {
    id: 85,
    name: "Mateo González",
    country: "Uruguay",
    place: "Cabo Polonio",
    flora: ["Coastal scrub", "Ombú tree", "Beach morning glory"],
    fauna: ["South American sea lion", "Southern right whale", "Burrowing owl"],
    description: "No electricity grid, no paved roads. You arrive by 4x4 through sand dunes. A lighthouse and a few dozen houses. Sea lions haul out on the rocks by the hundreds, barking and fighting. Southern right whales breach offshore in winter. Burrowing owls watch you from their holes with permanent expressions of surprise. It is the opposite of everything modern, and it is exactly what I need.",
    feeling: "Unplugged and essential"
  },
  {
    id: 86,
    name: "Thandi Ndlovu",
    country: "South Africa",
    place: "iSimangaliso Wetland Park",
    flora: ["Mangrove", "Coastal forest", "Papyrus"],
    fauna: ["Hippopotamus", "Loggerhead turtle", "Whale shark"],
    description: "Five ecosystems in one park — coral reefs, beaches, wetlands, grasslands, and forest. Hippos wallow in the estuary by day and graze the golf course at night. Loggerhead turtles nest on the beaches where whale sharks cruise offshore. The name means 'miracle and wonder' in Zulu. Standing where the freshwater lake meets the Indian Ocean, where everything mingles, the name is exactly right.",
    feeling: "Miraculous"
  },
  {
    id: 87,
    name: "Georg Huber",
    country: "Switzerland",
    place: "Aletsch Glacier and Jungfrau region",
    flora: ["Alpine pasture flowers", "Larch", "Rhododendron"],
    fauna: ["Ibex", "Bearded vulture", "Marmot"],
    description: "The longest glacier in the Alps curves between mountains like a frozen river — which is what it is, only it moves a hundred metres a year. The Jungfrau, Mönch, and Eiger form a wall of ice and rock. Marmots whistle from the moraines. Bearded vultures drop bones on rocks to crack them. From the Eggishorn, you see the glacier's full 23-kilometre length, cracked and blue. It makes you reconsider what 'slow' means.",
    feeling: "Recalibrated"
  },
  {
    id: 88,
    name: "Nkechi Okoro",
    country: "South Africa",
    place: "Blyde River Canyon",
    flora: ["Yellowwood tree", "Cycad", "Protea"],
    fauna: ["Vervet monkey", "Crowned eagle", "Hippopotamus"],
    description: "The third-largest canyon on Earth, but green — the largest green canyon in the world. Lush subtropical vegetation clings to every ledge. The Three Rondavels — massive rock formations — stand like ancient huts at the canyon's rim. Bourke's Luck Potholes, carved by millennia of swirling water, are geological art. Crowned eagles hunt vervet monkeys in the yellowwood canopy. Drama in green.",
    feeling: "Verdant and alive"
  },
  {
    id: 89,
    name: "Sakura Fujimoto",
    country: "Japan",
    place: "Oirase Gorge, Aomori",
    flora: ["Japanese beech", "Japanese maple", "Moss"],
    fauna: ["Japanese serow", "Mandarin duck", "Japanese giant salamander"],
    description: "The stream tumbles through fourteen kilometres of beech forest over waterfalls and cascades, every rock and tree trunk upholstered in moss. In autumn, the maples turn the gorge into a tunnel of fire. Mandarin ducks float in the deeper pools. The Japanese giant salamander — a living fossil — hides under boulders. Walking the trail is like walking through a living watercolour painting.",
    feeling: "Flowing and artful"
  },
  {
    id: 90,
    name: "Daniel Eriksson",
    country: "Sweden",
    place: "Tiveden National Park",
    flora: ["Scots pine", "Lichen-covered boulders", "Bog rosemary"],
    fauna: ["Black-throated diver", "Osprey", "Pine marten"],
    description: "Ancient pine forests grow between granite boulders the size of houses, left by the retreating ice sheet. The lakes are dark and still, haunted by black-throated divers whose wailing calls carry across the water. Ospreys fish the larger lakes. The name comes from Tyr, the Norse god of war — this was considered a fearsome, trollish place. Walking through it, I understand why. And I love it.",
    feeling: "Thrillingly dark"
  },
  {
    id: 91,
    name: "Amara Touré",
    country: "Mali",
    place: "Bandiagara Escarpment, Dogon Country",
    flora: ["Baobab", "Shea tree", "Acacia"],
    fauna: ["Pale fox", "Rock python", "Abyssinian roller"],
    description: "The sandstone cliff runs 150 kilometres along the edge of the Sahel. The Dogon people have built their villages into the cliff face for centuries — granaries, meeting houses, shrines — all clinging to the rock. Baobabs stand in the sandy fields below. The Dogon cosmology maps the stars with precision that still astonishes scientists. Standing on the cliff edge at sunset, the Sahara beginning in the distance, I feel the depth of human knowledge.",
    feeling: "In awe of human knowledge"
  },
  {
    id: 92,
    name: "Margaret Wilson",
    country: "Scotland",
    place: "Isle of Skye",
    flora: ["Heather", "Bog cotton", "Wild thyme"],
    fauna: ["Red deer", "White-tailed eagle", "Otter"],
    description: "The Quiraing — a landslip landscape of pinnacles and hidden plateaus — looks like the ruins of a fantasy kingdom. The Old Man of Storr stands alone against skies that change every fifteen minutes. White-tailed eagles hunt over Loch Coruisk. Otters fish in the sea lochs. The Cuillin ridge cuts the sky like broken glass. Skye makes you understand why the Gaels believed in the otherworld. It's right there.",
    feeling: "Mythic and windswept"
  },
  {
    id: 93,
    name: "Andrei Popescu",
    country: "Romania",
    place: "Danube Delta",
    flora: ["Reed bed", "Water lily", "Willow"],
    fauna: ["Dalmatian pelican", "European mink", "White-tailed eagle"],
    description: "Europe's largest wetland, where the Danube dissolves into a labyrinth of channels, lakes, and reed beds before meeting the Black Sea. Dalmatian pelicans — huge, prehistoric — fish in the channels. Over 300 bird species pass through. At dawn, the mist sits on the water and the pelicans emerge like ghosts. Floating through the channels in a wooden boat, the only sound is water and wings.",
    feeling: "Dissolved into landscape"
  },
  {
    id: 94,
    name: "Chidi Nwosu",
    country: "Tanzania",
    place: "Ngorongoro Crater",
    flora: ["Fever tree", "Euphorbia", "Highland grassland"],
    fauna: ["Black rhinoceros", "Wildebeest", "Flamingo"],
    description: "A volcanic caldera 20 kilometres across, containing 25,000 large animals. Looking down from the rim, the crater floor is a complete world — lake, forest, grassland, swamp — all ringed by a wall of mountain. Black rhinos feed in the Lerai Forest. Flamingos pink the soda lake. The concentration of life is staggering — predator and prey in a natural amphitheatre. It is Earth's greatest show.",
    feeling: "Witnessing the greatest show"
  },
  {
    id: 95,
    name: "Valentina Lombardi",
    country: "Italy",
    place: "Cinque Terre, Liguria",
    flora: ["Lemon tree", "Grape vine", "Prickly pear"],
    fauna: ["Peregrine falcon", "Dolphin", "Mediterranean gull"],
    description: "Five villages in five colours — pink, yellow, orange, red, and peach — cling to cliffs above a sea so blue it hurts. Terraced vineyards rise behind them, hand-built over centuries. The footpath between the villages winds through lemon groves and olive trees. Dolphins pass offshore. At sunset, each village glows against the darkening water. It is Italy compressed to its essence.",
    feeling: "Joyful and colourful"
  },
  {
    id: 96,
    name: "Kenji Hayashi",
    country: "Japan",
    place: "Shirakami-Sanchi, Aomori-Akita",
    flora: ["Siebold's beech", "Japanese cypress", "Fern"],
    fauna: ["Japanese black bear", "Japanese serow", "Black woodpecker"],
    description: "The last virgin beech forest in East Asia. No roads, no trails in the core zone — just beech trees as they have grown for eight thousand years. The Anmon Falls cascade through the green in three tiers. Japanese black bears strip bark and leave claw marks higher than you can reach. Walking the forest edge, you feel the weight of what 'untouched' actually means.",
    feeling: "Respectful of what remains"
  },
  {
    id: 97,
    name: "Fatou Diop",
    country: "Madagascar",
    place: "Avenue of the Baobabs, Morondava",
    flora: ["Grandidier's baobab", "Ravenala (traveller's palm)", "Tamarind"],
    fauna: ["Lemur", "Fossa", "Chameleon"],
    description: "Thirty-metre baobabs line the red dirt road like columns of a ruined temple. They are 800 years old. Once they were part of a dense forest; now they stand alone, monuments to what was. At sunset, they become silhouettes — improbable, magnificent, sad. Lemurs call from the fragments of forest that remain. It is the most beautiful and most heartbreaking landscape I know.",
    feeling: "Beautiful and heartbroken"
  },
  {
    id: 98,
    name: "Charlotte Reed",
    country: "United Kingdom",
    place: "Pembrokeshire Coast, Wales",
    flora: ["Sea thrift", "Bluebell", "Gorse"],
    fauna: ["Atlantic puffin", "Grey seal", "Chough"],
    description: "The coastal path winds along 300 kilometres of cliffs, coves, and beaches. In spring, the clifftops blaze with bluebells and gorse. Puffins nest on Skomer Island, their burrows undermining the turf. Grey seals haul out on hidden beaches. Choughs — red-billed, glossy black — tumble in the updrafts. The sea below shifts between slate grey and improbable turquoise. Walking it, day after day, I forget every worry I've ever had.",
    feeling: "Worry-free and walking"
  },
  {
    id: 99,
    name: "Ali Sadeghi",
    country: "Iran",
    place: "Dasht-e Lut (Lut Desert)",
    flora: ["Tamarisk", "Desert shrub", "Haloxylon"],
    fauna: ["Asiatic cheetah", "Sand fox", "Desert monitor"],
    description: "The hottest surface temperature ever recorded on Earth — 70.7°C. The kaluts — wind-carved sandstone ridges — stretch for hundreds of kilometres in parallel lines, like a city designed by wind. At night, the desert cools and the Milky Way is overwhelming. The silence is absolute. Knowing that Asiatic cheetahs — among the rarest cats alive — still hunt here makes the emptiness feel full of secrets.",
    feeling: "Full of hidden things"
  },
  {
    id: 100,
    name: "Aroha Williams",
    country: "New Zealand",
    place: "Waipoua Forest, Northland",
    flora: ["Kauri tree", "Nikau palm", "Crown fern"],
    fauna: ["North Island brown kiwi", "Morepork owl", "Weta"],
    description: "Tāne Mahuta — Lord of the Forest — is a kauri tree over 2,000 years old, 50 metres tall, its trunk too wide for ten people to embrace. The Māori believe it holds the sky apart from the earth. Walking to it through the forest at night, listening for kiwi calls in the darkness, is a pilgrimage. When you stand before it, lit by torchlight, it is unmistakably a being, not a thing. I understood then what the Māori have always known.",
    feeling: "Reverent and transformed"
  }
];

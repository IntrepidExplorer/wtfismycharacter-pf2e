
$(function() {

    // Populate using an object literal

    WTF.init({

         heading:[
             "Have you ever played a",
             "What would your GM say to a",
             "For my back up character, I'm gonna play a fucking",
         ],
	    
         response:[
             "Already fucking seen one",
             "Give me a-fucking-nother one",
             "Another!",
             "Lame, try again",
             "Are you insane? Give me a different one",
             "This isn't the slightest big intriguing",
             "Nope, nope, nope",
         ],
	    
         template:[
            "@personality @ancestry @background @class from @location who @description"
         ],
        
        personality:[
		"active",
		"adaptable",
		"adventurous",
		"affable",
		"amiable",
		"amicable",
		"amusing",
		"brave",
		"bright",
		"calm",
		"careful",
		"charming",
		"circumspect",
		"communicative",
		"compassionate",
		"conscientious",
		"considerate",
		"courageous",
		"courteous",
		"creative",
		"determined",
		"diligent",
		"diplomatic",
		"discreet",
		"dynamic",
		"empathetic",
		"energetic",
		"faithful",
		"fearless",
		"friendly",
		"funny",
		"generous",
		"gentle",
		"good",
		"gregarious",
		"helpful",
		"honest",
		"hopeful",
		"humorous",
		"imaginative",
		"intelligent",
		"intuitive",
		"inventive",
		"joyful",
		"kind",
		"loving",
		"loyal",
		"lucky",
		"mature",
		"motivated",
		"neat",
		"nice",
		"optimistic",
		"passionate",
		"patient",
		"plucky",
		"polite",
		"popular",
		"powerful",
		"practical",
		"rational",
		"realistic",
		"reliable",
		"resourceful",
		"romantic",
		"sensible",
		"sincere",
		"smart",
		"sociable",
		"sympathetic",
		"tidy",
		"understanding",
		"willing",
		"wise",
		"witty",
		"abrasive",
		"aggressive",
		"apathetic",
		"argumentative",
		"boring",
		"bossy",
		"callous",
		"catty",
		"childish",
		"cocky",
		"confrontational",
		"controlling",
		"cowardly",
		"cruel",
		"cynical",
		"defensive",
		"deceitful",
		"dense",
		"devious",
		"dim",
		"dishonest",
		"disloyal",
		"disorganized",
		"disrespectful",
		"disruptive",
		"egotistical",
		"evasive",
		"evil",
		"fanatical",
		"flaky",
		"foolish",
		"forgetful",
		"frivolous",
		"gossipy",
		"greedy",
		"grumpy",
		"gullible",
		"hostile",
		"humorless",
		"hypocritical",
		"ignorant",
		"impatient",
		"impractical",
		"inconsiderate",
		"irrational",
		"jealous",
		"judgemental",
		"lazy",
		"manipulative",
		"mean",
		"moody",
		"morbid",
		"nasty",
		"nosy",
		"obsessive",
		"paranoid",
		"pessimistic",
		"petty",
		"posessive",
		"prejudiced",
		"pretentious",
		"reckless",
		"resentful",
		"rotten",
		"rude",
		"selfish",
		"sleazy",
		"spoiled",
		"stingy",
		"stupid",
		"unlucky",
		"unmotivated",
		"unreliable",
		"untidy",
		"vain",
		"ambitious",
		"anxious",
		"breezy",
		"businesslike",
		"busy",
		"casual",
		"cerebral",
		"cautious",
		"chatty",
		"childlike",
		"competitive",
		"complex",
		"conservative",
		"decisive",
		"emotional",
		"enigmatic",
		"extravagant",
		"extroverted",
		"exuberant",
		"folksy",
		"forceful",
		"frank",
		"frugal",
		"idiosyncratic",
		"impartial",
		"impressionable",
		"independent",
		"inhibited",
		"intellectual",
		"intense",
		"introverted",
		"irreverent",
		"loud",
		"martyr",
		"mercurial",
		"mischievous",
		"modern",
		"modest",
		"moralistic",
		"neutral",
		"noncommittal",
		"noncompetitive",
		"opportunistic",
		"ordinary",
		"outspoken",
		"perfectionist",
		"persistant",
		"philosophical",
		"political",
		"predictable",
		"private",
		"questioning",
		"rebellious",
		"relaxed",
		"reserved",
		"sarcastic",
		"sensitive",
		"serious",
		"shy",
		"silly",
		"smooth",
		"soft",
		"solemn",
		"straightforward",
		"strict",
		"subservient",
		"surprising",
		"timid",
		"tough",
		"unassuming",
		"unchanging",
		"uncompromising",
		"undemanding",
		"unyielding",
		"quiet",
        ],
	    
        ancestry:[
		"dwarf",
		"elf",
		"gnome",
		"goblin",
		"halfling",
		"human",
		"azarketi",
		"catfolk",
		"fetchling",
		"gnoll",
		"grippli",
		"hobgoblin",
		"kitsune",
		"kobold",
		"leshy",
		"lizardfolk",
		"orc",
		"ratfolk",
		"tengu",
		"anadi",
		"android",
		"conrasu",
		"fleshwarp",
		"goloma",
		"shisk",
		"shoony",
		"sprite",
		"strix",            
        ],
	    
	background:[
 		"academic",
		"acolyte",
		"acrobat",
		"adherent",
		"amnesiac",
		"animal whisperer",
		"archaeologist",
		"archaeologist",
		"artifact seeker",
		"artisan",
		"artist",
		"aspiring free captain",
		"aspiring river monarch",
		"bandit",
		"barber",
		"barkeep",
		"barrister",
		"black market smuggler",
		"blessed",
		"bookkeeper",
		"bounty hunter",
		"bright lion",
		"charlatan",
		"charmer",
		"child of squalor",
		"child of the city",
		"cook",
		"courier",
		"criminal",
		"crusader",
		"cultist",
		"cursed",
		"cursed family",
		"desert tracker",
		"detective",
		"emissary",
		"entertainer",
		"expatriate",
		"faithful",
		"farmhand",
		"feral child ",
		"feybound",
		"field medic",
		"follower",
		"fortune teller",
		"freed slave",
		"gambler",
		"gladiator",
		"goblinblood orphan",
		"grand council bureaucrat",
		"guard",
		"guerrilla",
		"haunted",
		"herbalist",
		"hermean heritor",
		"hermit",
		"hopeful",
		"hunter",
		"inlander",
		"insurgent",
		"laborer",
		"legendary parents",
		"loyalist",
		"lumberjack",
		"mammoth speaker",
		"mantis scion",
		"martial disciple",
		"menagerie dung sweeper",
		"mercenary",
		"merchant",
		"miner",
		"mystic",
		"name-bearer",
		"noble",
		"nomad",
		"onyx trader",
		"ooze-tender",
		"outrider",
		"partisan",
		"pathfinder recruiter",
		"pearl diver",
		"perfection seeker",
		"pilgrim",
		"press-ganged",
		"prisoner",
		"prodigy",
		"purveyor of the bizarre",
		"quick",
		"raider",
		"raised by belief",
		"rancher",
		"rebel",
		"reclaimer",
		"reformer",
		"refugee",
		"refugee",
		"restorer",
		"returned",
		"root worker",
		"royalty",
		"sailor",
		"sailor",
		"scavenger",
		"scavenger",
		"schemer",
		"scholar",
		"scholar of the ancients",
		"scion",
		"scout",
		"secular medic",
		"seeker",
		"servant",
		"shadow haunted",
		"slayer",
		"smuggler",
		"spell seeker",
		"squire",
		"storm survivor",
		"street urchin",
		"survivor",
		"tax collector",
		"teacher",
		"tinker",
		"touched by dragons",
		"trade consortium underling",
		"trailblazer",
		"traveler",
		"undersea enthusiast",
		"unifier",
		"wanderer",
		"ward",
		"warrior",
		"wavetouched",
		"wildborne",
		"winter’s child",
		"witch wary",
		"wonder taster",           
        ],
	    
        class:[
 		"alchemist",
		"barbarian",
		"bard",
		"champion",
		"cleric",
		"druid",
		"fighter",
		"investigator",
		"monk",
		"oracle",
		"ranger",
		"rogue",
		"sorcerer",
		"swashbuckler",
		"witch",
		"wizard",           
        ],
	location: [
		"the smallest city in the kingdom",
		"underneath a rotten log",
		"a treetop city",
		"a placid village with a high death rate",
		"a turnip farm",
		"the gutters",
		"the basement of a forgotten wizard's tower",
		"the last outpost before the wilderness",
		"a dairy farm where nothing ever happened",             
        ],
	    
        description: [
            	"isn't officially dead",
		"is definitely not a hugging type",
		"has an unhealthy obsession with frogs",
		"is the biggest fan of the king's jester",
		"thinks they have a divine right to the throne",
		"is wanted in four kingdoms for crimes they didn't commit",
		"can't tell if chickens are real or imaginary",
		"has met a god and thinks it was a dream",
		"is on the run from their murderous aunt",
        ],

     });
    
});

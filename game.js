const storyData = {
    start: {
        text: "The fluorescent lights of 7-11 buzz overhead. It's midnight, and you're alone, contemplating the existential significance of the choice between buying the expired cup noodles or going home and just having some salad. The bell above the door chimes, but no wind stirs outside. From somewhere in the store, a music box begins playing a distorted version of \'Pyar Kiya Toh Darna Kya.\'\n\nYou see a figure standing across the isle.\n\"Wait... is that - ?\"\n\n\"YES, THAT IS ME.\"\nsays Mahasweta Devi, cutting off your thought.\n\nHolding what appears to be a fountain pen that's leaking black ink onto the linoleum floor.\n\n\"YOU WANT MY AUTOGRAPH, YES YOUNGLING?\" she says as she extends her arm.",
        choices: [
            { text: "Accept your fate and extend your hand", nextScene: "accept" },
            { text: "Hide behind the rack of Doritos", nextScene: "hide" },
            { text: "Attempt to discuss her work on tribal communities", nextScene: "discuss" },
            { text: "Run toward the bathroom", nextScene: "bathroom" }
        ]
    },
    accept: {
        text: "You extend your trembling hand, remembering your mother's words: \"Never refuse an autograph from a renowned Bengali author at midnight in a convenience store.\"\n\n\"Where would you like me to sign?\" she asks, her eyes twinkling with an unsettling intensity. The music box melody grows louder, now mixing with what sounds like ice cream truck music played in reverse.",
        choices: [
            { text: "Offer your palm", nextScene: "palm" },
            { text: "Point to your forehead", nextScene: "forehead" },
            { text: "Grab a bag of chips for her to sign", nextScene: "chips" }
        ]
    },
    hide: {
        text: "You duck behind the Cool Ranch section, but the bags whisper your location in Bengali. Through the gaps between chips, you see her approaching, pen raised like a conductor's baton.\n\n\"YOU CAN'T HIDE FROM ME,\" her voice resonates through the aisles. The music box melody distorts further, mixing with the sound of carnival calliope music. \"AMAR BHAROT MOHAN.\"",
        choices: [
            { text: "Surrender and emerge", nextScene: "accept" },
            { text: "Build a fortress of snack foods", nextScene: "fortress" },
            { text: "Start stress-eating Doritos", nextScene: "eating" }
        ]
    },
    discuss: {
        text: "You clear your throat and begin, \"Your portrayal of institutional power structures in 'Draupadi' really—\"\n\nShe raises her hand, stopping you mid-sentence. The store's temperature drops several degrees. \"NOW IS NOT THE TIME FOR ANALYSIS. NOW IS THE TIME FOR SIGNATURE.\"\n\nThe lights flicker more intensely. In the freezer section, the ice cream begins to melt, forming puddles that spell out quotes from her works.",
        choices: [
            { text: "Continue your analysis anyway", nextScene: "analysis" },
            { text: "Accept the autograph", nextScene: "accept" },
            { text: "Faint dramatically", nextScene: "faint" }
        ]
    },
    bathroom: {
        text: "You sprint toward the bathroom, but the door is locked. The \"Out of Order\" sign appears to be written in Sanskrit.\n\nYou turn around to find Mahasweta Devi standing there.\n\n\"YOU CAN'T ESCAPE,\" she says, her smile widening. \"This story needs a signature ending.\"",
        choices: [
            { text: "Slide under her outstretched arm", nextScene: "slide" },
            { text: "Accept your destiny", nextScene: "accept" },
            { text: "Start reciting random quotes from her works", nextScene: "quotes" }
        ]
    },
    palm: {
        text: "As her pen touches your palm, you realize the ink is uncommonly warm. The signature begins to spread, crawling up your arm like dark vines.\n\n\"THE TRANSFORMATION HAS BEGUN,\" Mahasweta Devi says, her voice now seeming to come from everywhere at once. A child's laughter echoes from the freezer section.\n\nYou have now become a living anthology of subaltern literature.\nBut at what cost?\nMahashweta laughs.",
        choices: [
            { text: "Play Again", nextScene: "start" }
        ]
    },
    fortress: {
        text: "You frantically stack bags of chips, creating a wall between you and the author. The bags begin to sweat ink, forming tiny rivers of the Pali script on the floor.\n\n\"RESISTANCE IS MERELY ANOTHER FORM OF ENGAGEMENT,\" she calls out. Each word causes a bag of chips to float gently aside. The music box plays faster and faster.\n\nYour fortress now starts taking the shape of a library, each bag containing a different story.\nOn quiet nights, passersby can hear carnival music and see strange shadows dancing between the aisles.",
        choices: [
            { text: "Play Again", nextScene: "start" }
        ]
    },
    eating: {
        text: "You begin shoving Cool Ranch Doritos into your mouth, hoping this will somehow save you. The crunch of each chip echoes unnaturally in the empty store, mixing with the distant carnival music. To your horror, each chip dissolves into ink on your tongue, forcing you to taste complete passages from her works.\n\n\"MY WORDS FIND THEIR WAY IN,\" she says, her voice coming from inside your head now.\n\nA smile creeps across your ink-stained lips. \"That was exactly the plan,\" you say, wiping the Cool Ranch dust from your fingers. \"Did you really think I came to this 7-11 at midnight by accident?\"\n\nFor the first time, Mahasweta Devi takes a step back, her pen trembling slightly. The carnival music falters.\n\n\"You see,\" you continue, crunching another chip deliberately, \"I've spent years trying to truly understand your work. But reading wasn't enough. I needed to literally consume it. And now—\" you gesture at the growing horror on her face, \"—I have.\"\n\nThe music box grinds to a halt. You can feel her every written word coursing through your veins, carried by Cool Ranch-flavored ink.\n\nYour calculated gambit works. You become the world's leading authority on Bengali literature, having literally consumed the essence of Mahasweta Devi's works through strategically ink-cursed Doritos. In academic circles, they whisper about how you can recite entire passages by just tasting a single corn chip. Mahasweta Devi never haunts convenience stores again, wary of other literature students wielding snack foods as scholarly weapons.",
        choices: [
            { text: "Play Again", nextScene: "start" }
        ]
    },
    analysis: {
        text: "You launch into a passionate interpretation of her work's significance in post-colonial literature. The fluorescent lights begin to strobe in sync with your academic jargon. The music box melody intensifies with each theoretical reference you make.\n\n\"ANALYSIS CANNOT SAVE YOU,\" Mahasweta Devi's voice booms as her pen starts writing in the air.\n\nYour impromptu midnight lecture becomes a temporal loop. You're trapped in the 7-11, eternally analyzing subaltern literature while mysterious carnival music plays.",
        choices: [
            { text: "Play Again", nextScene: "start" }
        ]
    },
    forehead: {
        text: "You point to your forehead, and her eyes light up with an otherworldly gleam. The pen approaches your skin, and you feel a strange warmth emanating from its tip.\n\n\"THE MIND IS THE BEST CANVAS. OTAI ASHOL,\" she declares.\n\nYou walk out of the store and sleep hungry that night. You later find out the signature is only visible under fluorescent lights.",
        choices: [
            { text: "Play Again", nextScene: "start" }
        ]
    },
    chips: {
        text: "You grab a bag of chips for her to sign. As soon as her pen touches the bag, the air fills with the sound of crinkling plastic played backwards, mixing with the carnival music.\n\n\"PROCESSED CORN AS A METAPHOR FOR MODERN CONSUMPTION OF LITERATURE?\" Her smile widens impossibly.\n\nYou become the owner of the world's only snack-food-transformed-literature collection.\nFinally you might be able to afford a home cook.",
        choices: [
            { text: "Play Again", nextScene: "start" }
        ]
    },
    slide: {
        text: "You attempt a desperate slide worthy of being in an action movie. Time slows down. The music box plays in slow motion, each note stretching into eternity. As you pass under her arm, her pen makes the slightest contact with your hair.\n\n\"EVEN THE SMALLEST TOUCH IS ENOUGH,\" her voice booms triumphantly.\n\nYour hair becomes a flowing manuscript, each strand containing a different story.\n\"EKHON TOMAR MATHAY SHAHITYE'R UKUN BOI BE\"",
        choices: [
            { text: "Play Again", nextScene: "start" }
        ]
    },
    quotes: {
        text: "In panic, you begin shouting fragments from \"Breast-Giver\" and \"Draupadi.\" Each quote causes the bathroom door to crack slightly. The music box plays faster and faster, matching your rhythm.\n\n\"YOUR PRONUNCIATION NEEDS WORK,\" she says, advancing with the pen.\n\nYou become the 7-11's resident literature ghost, forever quoting Bengali literature in the darkness.",
        choices: [
            { text: "Play Again", nextScene: "start" }
        ]
    },
    faint: {
        text: "As you crumple to the floor, the last thing you see is Mahasweta Devi standing over you, pen poised. \"CONSCIOUSNESS IS NOT A NECESSITY FOR LITERATURE, BUT A CONSEQUENCE OF IT,\" she says, as she frantically signing book after book after book. The scene fades around you.\n\nYou wake up outside the 7-11 at dawn, clutching a complete collection of her works.",
        choices: [
            { text: "Play Again", nextScene: "start" }
        ]
    }
};

const endingBackgrounds = {
    palm: 'ed1',
    fortress: 'ed2',
    eating: 'ed3',
    analysis: 'ed4',
    forehead: 'ed5',
    chips: 'ed8',
    slide: 'ed9',
    quotes: 'ed7',
    faint: 'ed10'
};

let currentScene = 'start';

function displayScene(sceneName) {
    const scene = storyData[sceneName];
    document.getElementById('story-text').innerText = scene.text;
    
    // Remove any existing background
    const existingBg = document.querySelector('.ending-background');
    if (existingBg) {
        existingBg.remove();
    }
    
    // Add new background if it's an ending scene
    if (endingBackgrounds[sceneName]) {
        const bg = document.createElement('img');
        bg.className = 'ending-background';
        bg.src = `assets/images/${endingBackgrounds[sceneName]}.png`;
        document.body.insertBefore(bg, document.body.firstChild);
    }
    
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.innerText = choice.text;
        button.addEventListener('click', () => {
            currentScene = choice.nextScene;
            displayScene(choice.nextScene);
        });
        choicesContainer.appendChild(button);
    });
}

// Start the game
window.onload = () => displayScene('start'); 
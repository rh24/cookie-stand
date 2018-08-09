const pageData = [
  {
    id: 'who',
    images: [
      './assets/family.jpg'
    ],
    header: '<h2>About Us</h2>',
    text: 'Hi, we\'re the Smith family. We\'ve been making our salmon cookies recipe for 89 years. It\'s been passed down for three generations, and we don\'t plan to stop creating these fish cookies for our customers any time soon. <br /><br /> My wife, Caitlin, has been my partner in our business for fifteen years. My two children are our taste testers. They\'re also our biggest fans. <br /><br /> Come visit any of our locations to taste these treats for yourselves. They\'re seriously addictive!'
  },
  {
    id: 'source',
    header: 'Fresh, Wild Caught',
    images: [
      './assets/chinook.jpg'
    ],
    text: [
      'Lorem ipsum dolor amet godard next level readymade seitan ramps everyday carry brooklyn occupy. VHS crucifix yuccie snackwave. Next level kale chips PBR&B normcore swag. Cliche neutra raclette cardigan, chartreuse tote bag bicycle rights plaid yr biodiesel keffiyeh. Stumptown normcore microdosing tumeric hella farm-to-table hot chicken fashion axe pickled snackwave authentic banjo retro keffiyeh williamsburg. Drinking vinegar portland four loko vinyl fixie tbh lumbersexual tousled. Slow-carb vegan brunch synth tousled farm-to-table mlkshk skateboard before they sold out humblebrag. <br />Hammock bushwick letterpress swag YOLO wolf drinking vinegar literally. Hashtag austin XOXO bicycle rights taiyaki fanny pack. Swag ethical four loko hot chicken, normcore literally whatever forage tilde paleo microdosing. Tilde four loko fashion axe pok pok crucifix tbh fam kitsch raw denim beard tote bag marfa.',
      'Umami tacos leggings meh cred, vice kale chips paleo mixtape blue bottle forage kombucha semiotics drinking vinegar blog. Tilde knausgaard enamel pin mumblecore, fashion axe waistcoat cloud bread plaid mixtape disrupt. Kinfolk try-hard gastropub roof party mlkshk celiac, godard taiyaki ennui shaman pug. Ennui pinterest portland brunch, lumbersexual bespoke ethical drinking vinegar polaroid.'
    ]
  },
  {
    id: 'cookies',
    header: 'In the Kitchen',
    images: [
      './assets/cutter.jpeg',
      './assets/frosted-cookie.jpg'
    ],
    text: [
      'Cold-pressed XOXO skateboard four dollar toast brooklyn tousled roof party, air plant shaman live-edge pop-up vexillologist lyft bicycle rights. Sustainable butcher shaman, raw denim la croix banh mi lyft try-hard tofu readymade. Kinfolk shaman kickstarter farm-to-table vape coloring book knausgaard, food truck blue bottle mustache. Food truck cold-pressed affogato, cred mlkshk XOXO normcore post-ironic chia fanny pack. Franzen typewriter vinyl vexillologist pabst edison bulb, lomo iceland normcore pug portland pinterest taiyaki cred bicycle rights. Tumeric celiac viral fixie kinfolk green juice.',
      'Kickstarter YOLO sartorial actually ugh, unicorn venmo man bun roof party brooklyn lomo etsy. Chambray iPhone authentic man bun locavore. Gluten-free cold-pressed readymade vice meditation. Cardigan green juice squid ennui.',
    ]
  },
  {
    id: 'merch',
    header: 'Represent Us!',
    images: [
      './assets/shirt.jpg',
      './assets/fish.jpg'
    ]
  },
  {
    id: 'locations',
    // images: [
    // ]
    text: 'some filler text'
  },
  {
    id: 'contact',
    text: 'some filler text'
  }
];

function attachEventListeners() {
  // who we are
  // our source
  // our cookies
  // merchandise
  // our locations
  // contact us

  document.getElementById('who').addEventListener('click', (e) => {
    e.preventDefault();
    appendImage('who');
  });
  document.getElementById('source').addEventListener('click', (e) => {
    e.preventDefault();
    appendImage('source');
  });
  document.getElementById('cookies').addEventListener('click', (e) => {
    e.preventDefault();
    appendImage('cookies');
  });
  document.getElementById('merch').addEventListener('click', (e) => {
    e.preventDefault();
    appendImage('merch');
  });
  // document.getElementById('locations').addEventListener('click', appendImage('locations'));
  // document.getElementById('contact').addEventListener('click', appendImage('contact'));
}

function createEl(elementType, textContent = null, id = null) {
  let elem = document.createElement(elementType);
  elem.textContent = textContent;
  elem.id = id;

  return elem;
}

function appendImage(id) {
  // debugger;
  let moreInfoDiv = document.getElementsByClassName('appendPic')[0];
  // photo.class = 'appendPic';
  let photo;

  for (let obj of pageData) {
    if (obj.id === id) {
      for (let img of obj.images) {
        // debugger;
        photo = createEl('img');
        photo.src = img;
        moreInfoDiv.appendChild(photo);
      }
    }
  }
}

function appendTextToParagraph() {
  let paragraph = document.getElementsByTagName('article')[0].getElementsByTagName('p')[0];
}

attachEventListeners();
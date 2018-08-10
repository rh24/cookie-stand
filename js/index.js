const pageData = [
  {
    id: 'who',
    images: [
      './assets/family.jpg'
    ],
    header: '<h2>About Us</h2>',
    text: [
      '<h2>About Us</h2> <p>Hi, we\'re the Smith family. We\'ve been making our salmon cookies for 89 years. It\'s been passed down for three generations, and we don\'t plan on stopping the production of these delightful morsels any time soon. Our customers are our treasure as is our secret recipe. <br /><br /> My wife, Caitlin, has been my partner in our business for fifteen years. My two children are our taste testers. They\'re also our biggest fans. <br /><br /> Come visit any of our loc to taste these treats for yourselves. They\'re seriously addictive!</p>'
    ]
  },
  {
    id: 'source',
    header: 'Fresh, Wild Caught',
    images: [
      './assets/chinook.jpg'
    ],
    text: [
      '<h2>Fresh, Wild Caught</h2> <p>Lorem ipsum dolor amet godard next level readymade seitan ramps everyday carry brooklyn occupy. VHS crucifix yuccie snackwave. Next level kale chips PBR&B normcore swag. Cliche neutra raclette cardigan, chartreuse tote bag bicycle rights plaid yr biodiesel keffiyeh. Stumptown normcore microdosing tumeric hella farm-to-table hot chicken fashion axe pickled snackwave authentic banjo retro keffiyeh williamsburg. Drinking vinegar portland four loko vinyl fixie tbh lumbersexual tousled. Slow-carb vegan brunch synth tousled farm-to-table mlkshk skateboard before they sold out humblebrag. <br />Hammock bushwick letterpress swag YOLO wolf drinking vinegar literally. Hashtag austin XOXO bicycle rights taiyaki fanny pack. Swag ethical four loko hot chicken, normcore literally whatever forage tilde paleo microdosing. Tilde four loko fashion axe pok pok crucifix tbh fam kitsch raw denim beard tote bag marfa.',
      'Umami tacos leggings meh cred, vice kale chips paleo mixtape blue bottle forage kombucha semiotics drinking vinegar blog. Tilde knausgaard enamel pin mumblecore, fashion axe waistcoat cloud bread plaid mixtape disrupt. Kinfolk try-hard gastropub roof party mlkshk celiac, godard taiyaki ennui shaman pug. Ennui pinterest portland brunch, lumbersexual bespoke ethical drinking vinegar polaroid.</p>'
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
      '<h2>In the Kitchen</h2> <p>Cold-pressed XOXO skateboard four dollar toast brooklyn tousled roof party, air plant shaman live-edge pop-up vexillologist lyft bicycle rights. Sustainable butcher shaman, raw denim la croix banh mi lyft try-hard tofu readymade. Kinfolk shaman kickstarter farm-to-table vape coloring book knausgaard, food truck blue bottle mustache. Food truck cold-pressed affogato, cred mlkshk XOXO normcore post-ironic chia fanny pack. Franzen typewriter vinyl vexillologist pabst edison bulb, lomo iceland normcore pug portland pinterest taiyaki cred bicycle rights. Tumeric celiac viral fixie kinfolk green juice.',
      'Kickstarter YOLO sartorial actually ugh, unicorn venmo man bun roof party brooklyn lomo etsy. Chambray iPhone authentic man bun locavore. Gluten-free cold-pressed readymade vice meditation. Cardigan green juice squid ennui.</p>',
    ]
  },
  {
    id: 'merch',
    header: 'Represent Us!',
    images: [
      './assets/shirt.jpg',
      './assets/fish.jpg'
    ],
    text: [
      '<h2>Represent Us!</h2> <p>Beard shaman affogato, portland hammock adaptogen pickled YOLO shoreditch try-hard cred. Portland cliche waistcoat mlkshk health goth prism taxidermy street art salvia blog tumblr asymmetrical adaptogen. Cliche art party lyft slow-carb plaid copper mug helvetica irony forage 3 wolf moon photo booth before they sold out hashtag. DIY truffaut disrupt, crucifix ennui plaid fanny pack irony air plant umami. Tofu distillery slow-carb twee fingerstache kogi fixie hoodie truffaut swag subway tile four loko retro franzen flannel.</p>'
    ]
  },
  {
    id: 'contact',
    images: [

    ],
    text: [
      '<h2>Reach out. We cater events!</h2><p>some filler text</p>'
    ]
  },
  {
    id: 'loc',
    images: [
    ],
    text: [
      '<h2>Where to Find Us</h2> <p>some filler text</p>'
    ]
  },
];

function attachEventListeners() {
  // who we are
  // our source
  // our cookies
  // merchandise
  // our loc
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
  document.getElementById('loc').addEventListener('click', (e) => {
    e.preventDefault();
    appendImage('loc');
  });
  document.getElementById('contact').addEventListener('click', (e) => {
    e.preventDefault();
    appendImage('contact');
  });
}

function createEl(elementType, textContent = null, id = null) {
  let elem = document.createElement(elementType);
  elem.textContent = textContent;
  elem.id = id;

  return elem;
}

function clearChildren() {
  let nodes = document.querySelectorAll('.appendPic')[0];

  while (nodes.firstChild) {
    nodes.removeChild(nodes.firstChild);
  }
}

function appendImage(id) {
  clearChildren();
  let appPic = document.getElementsByClassName('appendPic')[0];
  let photo;

  if (!appPic) {
    appPic = createEl('div');
    appPic.class = 'appendPic';
    document.getElementsByClassName('more-info').appendChild(appPic);
  }

  for (let obj of pageData) {
    if (obj.id === id && obj.images.length > 0) {
      for (let img of obj.images) {
        photo = createEl('img');
        photo.src = img;
        appPic.appendChild(photo);
      }
    }
  }

  appendTextToParagraph(id);
}

function appendTextToParagraph(id) {
  let paragraph = document.getElementsByTagName('article')[0].getElementsByTagName('p')[0];

  for (let obj of pageData) {
    if (obj.id === id) {
      paragraph.innerHTML = obj.text[0];
    }
  }
}

attachEventListeners();
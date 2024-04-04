export const products = [
    {
      "title": "All purpose balm",
      "image": "/products/product_8281992819.jpg",
      "price": 469,
      "discountInPercent": 0,
      "recommended": true
    },
    {
        "title": "Multi-Action Concealer",
        "image": "/products/product_1213213211.jpg",
        "price": 85,
        "discountInPercent": 0,
        "recommended": false,
    },
    {
        "title": "Mayi Mousture Bamboo FibersShampoo",
        "image": "/products/product_4335542819.jpg",
        "price": 212,
        "discountInPercent": 25,
        "recommended": false
      },
      {
        "title": "Shower Gel",
        "image": "/products/product_2349838201.jpg",
        "price": 102,
        "discountInPercent": 0,
        "recommended": false,
      },
      {
        "title": "Bubble Bath, Body Wash, Conditioning detangler",
        "image": "/products/product_2233009200.jpg",
        "price": 118,
        "discountInPercent": 0,
        "recommended": false
      },
      {
        "title": "Facial oil",
        "image": "/products/product_2332233444.jpg",
        "price": 324,
        "discountInPercent": 10,
        "recommended": false
      },
      {
        "title": "Eyeshadow",
        "image": "/products/product_4566543883.jpg",
        "price": 110,
        "discountInPercent": 0,
        "recommended": false
      }
];

export const subscribers = [
    {
        "name": "Anders Christensen",
        "email": "anders@mediacollege.dk",
        "message": "Jeg er en subscriber"
    }
];

export const reviews = [
    {
        "name": "Kathrine Udgaard",
        "byline": "Tilfreds Kunde",
        "description": "Den hidtil bedste oplevelse med læbestifter! Jeg har fået så mange komplimenter, efter jeg er begyndt at gå med denne dagligt. Udover smuk farve, efterlader den læberne bløde og fugtige. Og det aller vigtigste - slet ikke klistret på den der ubehagelige måde, som nogen pomader kan. Den er et absolut \"must have\" i min håndtaske!!",
        "image" : "/reviews/kathrine_udgaard.jpg"
    },
    {
        "name": "Phoebe Larsen",
        "byline": "Tilfreds Kunde",
        "description": "Jeg døjer rigtig meget med uren hud, og har prøvet alt muligt. Jeg fik Honest produkter anbefalet som en 30 dags kur, hvor jeg KUN skulle bruge den morgen og aften. Det har jeg så prøvet nu, og jeg kan se en tydelig forskel. Et ekstra plus er, at den er dejlig fugtgivende.",
        "image" : "/reviews/phoebe_larsen.jpg"
    }
];

export const questions = [
  {
    "question": "Hvorfor dannes pigmentering?",
    "answer": "Vores brune pigmentering i huden kommer fra vores melaninceller, også kaldet melanocytter. De frigiver melanin til vores celler og lægger sig som en paraply oven på cellen for at beskytte cellens dna. Pigmentfejl skyldes skade eller forvirring i melanocytterne. Det kan være på grund af at huden har været udsat for meget sol eller skyldes hormoner som f.eks. stress eller graviditet. Pigmentering i forbindelse med stress kan ske ved overproduktion af stress hormon da det minder meget om vores melaninstimulerende hormon, og på den måde snyder kroppen til at danne melanin.",
  },
  {
    "question": "Glycerin, som dagens helt?",
    "answer": "En hud med dårlig fugtbalance har svært ved at optage din hudpleje, og det er jo ærgerligt. Det er det især, hvis du kaster en formue efter dine produkter. Heldigvis er slaget ikke tabt, for med de rette hudplejeingredienser kan du rette skaden og ubalancen op igen. Og det er her dagens ingrediens i skysovs kommer på banen – glycerin skal der til!",
  },
  {
    "question": "Hvorfor får man skæl?",
    "answer": "Først og fremmest er det vigtigt at vide, at skæl et meget almindeligt problem. Det er hverken smitsomt eller farligt, men det kan være generende. Skæl er et symptom på en irriteret hovedbund og skyldes, at huden på grund af forøget svampevækst afstødes hurtigere end normalt. Den milde type skæl ses ofte på mørkt tøj som tørre, hvide flager, hvorimod den svære type skæl er yderst kløende og sidder godt fast i hovedbunden. Som sagt, er skæl en bred betegnelse for mange typer skæl, og omfatter alt fra svampe-skæl til skæl-eksem og svær psoriasis. Disse typer skæl skyldes vidt forskellige faktorer. Nogle er medarvede, mens andre, særligt svampe-skæl, som er den hyppigst forekommende, bl.a. skyldes en uren hovedbund og dårlig kost.",
  },
  {
    "question": "Nu med HTML",
    "answer": "<p>Vores brune pigmentering i huden kommer fra vores melaninceller, også kaldet melanocytter. De frigiver melanin til vores celler og lægger sig som en paraply oven på cellen for at beskytte cellens dna. Pigmentfejl skyldes skade eller forvirring i melanocytterne.</p><p>Det kan være på grund af at huden har været udsat for meget sol eller skyldes hormoner som f.eks. stress eller graviditet.</p><p>Pigmentering i forbindelse med stress kan ske ved overproduktion af stress hormon da det minder meget om vores melaninstimulerende hormon, og på den måde snyder kroppen til at danne melanin.</p>",
  }
]

export const orders = (id) => [
  {
    "products": [{
        "id": id.toString(),
        "amount" : 1
    }],
    "email" : "anders@mediacollege.dk"
  }
];
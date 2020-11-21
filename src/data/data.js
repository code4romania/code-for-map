/* eslint-disable */

const data = {
  code4ro_logo: "",
  map_bg: require("../assets/images/map-bg.svg"),
  back_link: {
    icon: require("../assets/images/assets_svg/chevron_left.svg"),
    text: "Înapoi la harta"
  },
  header: {
    title: "Digitalizăm România împreună",
    description:
      "Navighează prin planul nostru de digitalizare a României cu ajutorul hărții de mai jos. Dă click pe oricare dintre destinațiile de mai jos pentru a descoperi soluțiile de care avem nevoie pentru a avea o țară funcțională. "
  },
  map_legend: {
    title: "LEGENDĂ",
    description: "",
    drum_executat: "Drum executat",
    drum_proiectat: "Drum proiectat",
    drum_planificat: "Drum planificat",
    destinatie: "Destinație",
    tema: "Obiectiv temă",
    realizat: "Obiectiv relizat",
    planificat: "Obiectiv planificat"
  },
  application_texts: {
    map_page: {
      text_1:
        "This is a placeholder text that should act as a call to action to help people understant why they need to be joining us in our journey."
    },
    info_sms: {
      title: {
        text_1: "Trimite un SMS cu cuvantul",
        text_2: "la"
      },
      msg_text: "PUTEM",
      phone_number: "8864",
      description:
        "Si contribuie la digitalizarea Romaniei. Cu un SMS recurent de 4 euro pe luna ajuti la construirea si mentinerea infrastructurii digitale de care avem nevoie in secolul XXI."
    }
  },
  call_to_action: {
    share: {
      title: "DISTRIBUIE",
      color: "primary",
      link: ""
    },
    donate: {
      title: "DONEAZA",
      color: "success",
      link: ""
    }
  },
  parteners: {
    title: "ÎMPREUNĂ",
    description:
      "Ei sunt arhitecții, constructorii și administratorii care ni s-au alăturat până acum în dezvoltarea infrastructurii digitale a României",
    main_parteners: [
      {
        id: 1,
        name: "test",
        logo: require("../assets/images/parteners/main/partener_test.svg")
      },
      {
        id: 2,
        name: "test",
        logo: require("../assets/images/parteners/main/partener_test.svg")
      },
      {
        id: 3,
        name: "test",
        logo: require("../assets/images/parteners/main/partener_test.svg")
      },
      {
        id: 4,
        name: "test",
        logo: require("../assets/images/parteners/main/partener_test.svg")
      },
      {
        id: 5,
        name: "test",
        logo: require("../assets/images/parteners/main/partener_test.svg")
      },
    ],
    secondary_parteners: [
      {
        id: 1,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 2,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 3,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 4,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 5,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 6,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 7,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 8,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 9,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 10,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 11,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 12,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 13,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      },
      {
        id: 14,
        name: "test",
        logo: require("../assets/images/parteners/secondary/partener_test.svg")
      }
    ]
  },
  code4ro_map: [
    {
      id: 1,
      slug: "care4ro",
      title: "Care for Romania",
      description:
        "Implicarea în viața comunității ne face pe toți mai bogați, mai împliniți și mai puternici. Implicându-ne, învățăm unii de la ceilalți și oferim ce avem mai bun, fiecare dintre noi, pentru mai binele tuturor. Dacă dorim sisteme puternice de educație, sănătate, protecția celor vulnerabili și a mediului, trebuie să fim conștienți de faptul că toate acestea nu sunt posibile fără o implicare reală a tuturor în viața societății. În plus, momentele de implicare sunt ferestre prin care vedem cât de puternici putem deveni atunci când suntem împreună. Ne continuăm misiunea de a încuraja participarea cetățenească în viața societății scoțând la iveală cele mai bune instrumente digitale pentru asta.",
      logo: require("../assets/images/care4ro/logo.svg"),
      btn: {
        color: "purple",
        top: "9%",
        left: "49.78%"
      },
      mobile_btn: {
        top: "13%",
        left: "22%"
      },
      color: "purple",
      highway_bg: require("../assets/images/care4ro/care4ro_bg.svg"),
      solution_status: {
        text: 'Descoperă mai jos care dintre segmentele din drumul nostru spre un mediu sănătos sunt deja executate și ce am proiectat.',
        implemented: 'Soluție proiectată',
        executed: 'Soluție executată'
      },
      highway_solutions: [
        {
          id: 1,
          highway_slug: "fara-trafic-de-persoane",
          title: "Fara trafic de persoane",
          description: "description",
          btn: {
            color: "purple",
            top: "15%",
            left: "46%"
          },
          icon_left: true,
          icon: require("../assets/images/care4ro/no-human-trafic/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "titlu proiect 1",
              description: "",
              executed: true,
            },
            {
              id: 2,
              project_slug: "",
              title: "titlu proiect 2",
              description: "",
              executed: true,
            },
            {
              id: 3,
              project_slug: "",
              title: "titlu proiect 3",
              description: "",
              executed: true,
            },
            {
              id: 4,
              project_slug: "",
              title: "titlu proiect 4",
              description: "",
              executed: false,
            },
            {
              id: 5,
              project_slug: "",
              title: "titlu proiect 5",
              description: "",
              executed: false,
            }
          ]
        },
        {
          id: 2,
          highway_slug: "sanse-pentru-persoanele-cu-dizabilitati",
          title: "Sanse pentru persoanele cu dizabilitati",
          description: "description",
          btn: {
            color: "purple",
            top: "20%",
            left: "40%"
          },
          icon_left: true,
          icon: require("../assets/images/care4ro/chance-for-disability-persons/icon.svg"),
          projects: [

          ]
        },
        {
          id: 3,
          highway_slug: "o-viata-buna-pentru-copiii-abandonati",
          title: "O viata buna pentru copiii abandonati",
          description: "description",
          btn: {
            color: "purple",
            top: "30%",
            left: "45%"
          },
          icon_left: true,
          icon: require("../assets/images/care4ro/better-life-for-orphans/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 4,
          highway_slug: "fara-discriminare-impotriva-etniei-rome",
          title: "Fara discriminare impotriva etniei rome",
          description: "description",
          btn: {
            color: "purple",
            top: "19%",
            left: "23%"
          },
          icon_left: false,
          icon: require("../assets/images/care4ro/no-discrimination/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 5,
          highway_slug: "incluziune-pentru-persoanele-LGBTQ+",
          title: "Incluziune pentru persoanele LGBTQ+",
          description: "description",
          btn: {
            color: "purple",
            top: "23%",
            left: "10%"
          },
          icon_left: false,
          icon: require("../assets/images/care4ro/lbgtq+/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 6,
          highway_slug: "diaspora-mai-aproape-de-casa",
          title: "Diaspora mai aproape de casa",
          description: "description",
          btn: {
            color: "purple",
            top: "32%",
            left: "20%"
          },
          icon_left: true,
          icon: require("../assets/images/care4ro/diaspora/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 7,
          highway_slug: "fara-violenta-acasa",
          title: "Fara violenta acasa",
          description: "description",
          btn: {
            color: "purple",
            top: "43%",
            left: "23%"
          },
          icon_left: true,
          icon: require("../assets/images/care4ro/no-violence/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        }
      ]
    },
    {
      id: 2,
      slug: "health4ro",
      title: "Health for Romania",
      description: "",
      logo: require("../assets/images/health4ro/logo.svg"),
      btn: {
        color: "red",
        top: "17.26%",
        left: "69.36%"
      },
      mobile_btn: {
        top: "31%",
        left: "48%"
      },
      highway_bg: require("../assets/images/health4ro/health4ro_bg.svg"),
      solution_status: {
        info: "Descoperă mai jos care dintre segmentele din drumul nostru spre un mediu sănătos sunt deja executate și ce am proiectat.",
        implemented: "",
        executed: "",
      },
      highway_solutions: [
        {
          id: 1,
          highway_slug: "sanatate-mintala-pentru-toti",
          title: "Sanatate mintala pentru toti",
          btn: {
            color: "red",
            top: "29%",
            left: "60.5%"
          },
          icon_left: false,
          icon: require("../assets/images/health4ro/mental-health/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 2,
          highway_slug: "spitale-functionale",
          title: "Spitale functionale",
          btn: {
            color: "red",
            top: "35.9%",
            left: "55.17%"
          },
          icon_left: false,
          icon: require("../assets/images/health4ro/working-hospitals/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 3,
          highway_slug: "sprjin-nu-pedeapsa-pentru-dependenti",
          title: "Sprijin nu pedeapsa pentru dependenti",
          btn: {
            color: "red",
            top: "42.42%",
            left: "78.25%"
          },
          icon_left: true,
          icon: require("../assets/images/health4ro/support-no-punishment/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 4,
          highway_slug: "servicii-de-sanatate-eficiente",
          title: "Servicii de sanatate eficiente",
          btn: {
            color: "red",
            top: "47.27%",
            left: "63.58%"
          },
          icon_left: true,
          icon: require("../assets/images/health4ro/health-services/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 5,
          highway_slug: "sprijin-pentru-cei-grav-bolnavi",
          title: "Sprijin pentru cei grav bolnavi",
          btn: {
            color: "red",
            top: "62.68%",
            left: "46.58%"
          },
          icon_left: true,
          icon: require("../assets/images/health4ro/support-for-ill-persons/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 6,
          highway_slug: "grija-pentru-sanatatea-mamei-si-a-copilului",
          title: "Grija pentru sanatatea mamei si a copilului",
          btn: {
            color: "red",
            top: "76.07%",
            left: "31.67%"
          },
          icon_left: false,
          icon: require("../assets/images/health4ro/mother-and-child/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        }
      ]
    },
    {
      id: 3,
      slug: "participation4ro",
      title: "Participation for Romania",
      description: "",
      logo: require("../assets/images/participation4ro/logo.svg"),
      btn: {
        color: "blue",
        top: "67.97%",
        left: "82.61%"
      },
      mobile_btn: {
        top: "52%",
        left: "53%"
      },
      highway_bg: require("../assets/images/participation4ro/participation4ro_bg.svg"),
      solution_status: {
        info: "Descoperă mai jos care dintre segmentele din drumul nostru spre un mediu sănătos sunt deja executate și ce am proiectat.",
        implemented: "",
        executed: "",
      },
      highway_solutions: [
        {
          id: 1,
          highway_slug: "acces-la-cultura",
          title: "Acces la cultura",
          btn: {
            color: "blue",
            top: "80.98%",
            left: "82.79%"
          },
          icon_left: true,
          icon: require("../assets/images/participation4ro/culture-access/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 2,
          highway_slug: "jurnalisti-eficienti",
          title: "Jurnalisti eficienti",
          btn: {
            color: "blue",
            top: "70.79%",
            left: "67.83%"
          },
          icon_left: false,
          icon: require("../assets/images/participation4ro/eficient-jurnalism/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 3,
          highway_slug: "primarii-functionale",
          title: "Primarii functionale",
          btn: {
            color: "blue",
            top: "76%",
            left: "60.75%"
          },
          icon_left: false,
          icon: require("../assets/images/participation4ro/working-cityhall/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 4,
          highway_slug: "institutii-centrale-functionale",
          title: "Institutii centrale functionale",
          btn: {
            color: "blue",
            top: "68.07%",
            left: "49.67%"
          },
          icon_left: false,
          icon: require("../assets/images/participation4ro/working-central-institutions/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 5,
          highway_slug: "o-mai-buna-relatie-cetetean-stat",
          title: "O mai buna relatie cetetean-stat",
          btn: {
            color: "blue",
            top: "58.34%",
            left: "53.33%"
          },
          icon_left: true,
          icon: require("../assets/images/participation4ro/better-relationship-citizen-state/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 6,
          highway_slug: "o-societate-civila-puternica",
          title: "O societate civila puternica",
          btn: {
            color: "blue",
            top: "50%",
            left: "48.5%"
          },
          icon_left: true,
          icon: require("../assets/images/participation4ro/strong-society/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 7,
          highway_slug: "alegeri-corecte-alegatori-informati",
          title: "Alegeri corecte Alegatori informati",
          btn: {
            color: "blue",
            top: "29.05%",
            left: "33%"
          },
          icon_left: true,
          icon: require("../assets/images/participation4ro/correct-election/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 8,
          highway_slug: "date-deschise",
          title: "Date deschise",
          btn: {
            color: "blue",
            top: "28.1%",
            left: "20.92%"
          },
          icon_left: false,
          icon: require("../assets/images/participation4ro/open-dates/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 9,
          highway_slug: "legislatie-accesibila",
          title: "Legislatie accesibila",
          btn: {
            color: "blue",
            top: "15.77%",
            left: "15.25%"
          },
          icon_left: false,
          icon: require("../assets/images/participation4ro/accesibil-legislation/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        }
      ]
    },
    {
      id: 4,
      slug: "education4ro",
      title: "Education for Romania",
      description: "",
      logo: require("../assets/images/education4ro/logo.svg"),
      btn: {
        color: "yellow",
        top: "54.61%",
        left: "35.36%"
      },
      mobile_btn: {
        top: "73%",
        left: "31%"
      },
      highway_bg: require("../assets/images/education4ro/education4ro_bg.svg"),
      solution_status: {
        info: "Descoperă mai jos care dintre segmentele din drumul nostru spre un mediu sănătos sunt deja executate și ce am proiectat.",
        implemented: "",
        executed: "",
      },
      highway_solutions: [
        {
          id: 1,
          highway_slug: "scoli-sigure-si-bine-administrate",
          title: "Scoli sigure si bine administrate",
          btn: {
            color: "yellow",
            top: "64.34%",
            left: "30.5%"
          },
          icon_left: true,
          icon: require("../assets/images/education4ro/secure-schools/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 2,
          highway_slug: "invatamant-universitar-de-calitate",
          title: "Invatamant universitar de calitate",
          btn: {
            color: "yellow",
            top: "45.26%",
            left: "15.75%"
          },
          icon_left: false,
          icon: require("../assets/images/education4ro/university-quality-learning/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 3,
          highway_slug: "invatamant-preuniversitar-de-calitate",
          title: "Invatamant preuniversitar de calitate",
          btn: {
            color: "yellow",
            top: "41.82%",
            left: "35.67%"
          },
          icon_left: true,
          icon: require("../assets/images/education4ro/preuniversity-quality-learning/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 4,
          highway_slug: "acces-la-educatie",
          title: "Acces la educatie",
          btn: {
            color: "yellow",
            top: "30.45%",
            left: "43.67%"
          },
          icon_left: false,
          icon: require("../assets/images/education4ro/education-access/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 5,
          highway_slug: "abilitati-pentru-viata-reala",
          title: "Abilitati pentru viata reala",
          btn: {
            color: "yellow",
            top: "20.62%",
            left: "53%"
          },
          icon_left: false,
          icon: require("../assets/images/education4ro/abilities-for-real-life/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 6,
          highway_slug: "profesori-bine-pregatiti",
          title: "Profesori bine pregatiti",
          btn: {
            color: "yellow",
            top: "12.2%",
            left: "66.17%"
          },
          icon_left: true,
          icon: require("../assets/images/education4ro/trained-teachers/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        }
      ]
    },
    {
      id: 5,
      slug: "environment4ro",
      title: "Environment for Romania",
      description: "",
      logo: require("../assets/images/environment4ro/logo.svg"),
      btn: {
        color: "green",
        top: "42.91%",
        left: "2.75%"
      },
      mobile_btn: {
        top: "47%",
        left: "15%"
      },
      color: "green",
      highway_bg: require("../assets/images/environment4ro/environment4ro_bg.svg"),
      solution_status: {
        info: "Descoperă mai jos care dintre segmentele din drumul nostru spre un mediu sănătos sunt deja executate și ce am proiectat.",
        implemented: "234",
        executed: "sdf",
      },
      highway_solutions: [
        {
          id: 1,
          highway_slug: "paduri-protejate-si-sanatoase",
          title: "Paduri protejate si sanatoase",
          description: "sad",
          btn: {
            color: "green",
            top: "55.09%",
            left: "-2.67%"
          },
          icon_left: false,
          icon: require("../assets/images/environment4ro/healty-forests/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 2,
          highway_slug: "protectia-naturii",
          title: "Protectia naturii",
          btn: {
            color: "green",
            top: "58.53%",
            left: "21.92%"
          },
          icon_left: true,
          icon: require("../assets/images/environment4ro/protected-nature/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 3,
          highway_slug: "sate-dezvoltate",
          title: "Sate dezvoltate",
          btn: {
            color: "green",
            top: "71.21%",
            left: "10.67%"
          },
          icon_left: false,
          icon: require("../assets/images/environment4ro/developed-villages/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 4,
          highway_slug: "orase-prietenoase",
          title: "Orase prietenoase",
          btn: {
            color: "green",
            top: "69.67%",
            left: "28.5%"
          },
          icon_left: true,
          icon: require("../assets/images/environment4ro/friendly-cities/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 5,
          highway_slug: "reciclarea-si-managementul-deseurilor",
          title: "Reciclarea si managementul deseurilor",
          btn: {
            color: "green",
            top: "88.51%",
            left: "24.92%"
          },
          icon_left: false,
          icon: require("../assets/images/environment4ro/recycling/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 6,
          highway_slug: "reducerea-poluarii",
          title: "Reducerea poluarii",
          btn: {
            color: "green",
            top: "92.89%",
            left: "48.92%"
          },
          icon_left: true,
          icon: require("../assets/images/environment4ro/polution-reduction/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 7,
          highway_slug: "reducerea-poluari",
          title: "Reducerea poluarii",
          btn: {
            color: "green",
            top: "80.81%",
            left: "52.33%"
          },
          icon_left: true,
          icon: require("../assets/images/environment4ro/polution/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 8,
          highway_slug: "pregatiti-pentru-urmatorul-cutremur",
          title: "Pregatiti pentru urmatorul cutremur",
          btn: {
            color: "green",
            top: "75.83%",
            left: "43.08%"
          },
          icon_left: false,
          icon: require("../assets/images/environment4ro/earthquake/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        },
        {
          id: 9,
          highway_slug: "pregatiti-pentru-urmatorul-dezastru-natural",
          title: "Pregatiti pentru urmatorul dezastru natural",
          btn: {
            color: "green",
            top: "60.55%",
            left: "68.08%"
          },
          icon_left: true,
          icon: require("../assets/images/environment4ro/natural-dezaster/icon.svg"),
          projects: [
            {
              id: 1,
              project_slug: "",
              title: "",
              description: ""
            }
          ]
        }
      ]
    }
  ]
};
export default data;

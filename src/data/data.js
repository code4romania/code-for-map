const data = {
  code4ro_logo: require("../assets/images/code4ro-logo.svg"),
  map_bg: require("../assets/images/harta.svg"),
  header: {
    title: "Digitalizăm România împreună",
    text:
      "Navighează prin planul nostru de digitalizare a României cu ajutprul hărții de mai jos. Dă click pe oricare dintre autostrăzi sau iconițe care marchează segmentele de drum pentru a descoperi soluțiile de care avem nevoie pentru a avea o țară funcțională. "
  },
  parteners_obj: {
    id: 1,
    title: "Alături de: ",
    parteners_arr: [
      {
        id: 1,
        title: "",
        link: "",
        image: require("../assets/images/parteners/partener-1.svg")
      },
      {
        id: 2,
        title: "",
        link: "",
        image: require("../assets/images/parteners/partener-2.svg")
      },
      {
        id: 3,
        title: "",
        link: "",
        image: require("../assets/images/parteners/partener-3.svg")
      }
    ]
  },
  text_content: {
    home: {
      text_1:
        "Diam donec adipiscing tristique risus nec feugiat in. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc non. Condimentum vitae sapien pellentesque habitant. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Habitasse platea dictumst quisque sagittis purus sit. Viverra tellus in hac habitasse platea dictumst vestibulum. Vel elit scelerisque mauris pellentesque. Nec nam aliquam sem et tortor consequat. Ultricies leo integer malesuada nunc vel risus commodo. Egestas diam in arcu cursus euismod. Rhoncus urna neque viverra justo nec ultrices dui. Amet venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Nunc mi ipsum faucibus vitae aliquet nec.",
      text_2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Arcu risus quis varius quam quisque id. Diam donec adipiscing tristique risus nec feugiat in. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc non. Condimentum vitae sapien pellentesque habitant."
    }
  },
  buttons: {
    id: 1,
    title: "CUM POȚI AJUTA:",
    spread: {
      text: "Dă de veste",
      state: false
    },
    give: {
      text: "Donează",
      state: false
    },
    adopt: {
      text: "Adoptă",
      state: false
    }
  },
  legend: {
    id: 1,
    title: "Legendă",
    drum_executat: "Drum executat",
    drum_proiectat: "Drum proiectat",
    drum_planificat: "Drum planificat",
    destinatie: "Destinație",
    tema: "Obiectiv temă",
    realizat: "Obiectiv realizat",
    planificat: "Obiectiv planificat"
  },
  harta: [
    {
      id: 1,
      title: "Education for Romania",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Arcu risus quis varius quam quisque id. Diam donec adipiscing tristique risus nec feugiat in. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc non. Condimentum vitae sapien pellentesque habitant. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Habitasse platea dictumst quisque sagittis purus sit. Viverra tellus in hac habitasse platea dictumst vestibulum. Vel elit scelerisque mauris pellentesque. Nec nam aliquam sem et tortor consequat. Ultricies leo integer malesuada nunc vel risus commodo. Egestas diam in arcu cursus euismod. Rhoncus urna neque viverra justo nec ultrices dui. Amet venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Nunc mi ipsum faucibus vitae aliquet nec.",
      slug: "education-for-romania",
      logo: require("../assets/images/education4ro/education4ro-logo.svg"),
      button: {
        left: "35.7%",
        right: "58.53%",
        top: "60.35%",
        bottom: "37.02%",
        btn: require("../assets/images/education4ro/button.svg")
      },
      youtube: {
        title: "Youtube Title",
        description: "description",
        video:"video?"
      },
      highway: [
        {
          id: 1,
          title: {
            text: "Profesori bine pregătiți",
            left: "66.62%",
            right: "30.91%",
            top: "16.47%",
            bottom: "82.21%"
          },
          image: {
            left: "67.86%",
            right: "29.46%",
            top: "12.88%",
            bottom: "83.4%",
            image: require("../assets/images/education4ro/category-images/well-trained-teachers.svg")
          },
          highway_portion: {
            id: 1,
            left: "61.43%",
            right: "32.78%",
            top: "6.96%",
            bottom: "82.58%",
            highway: require("../assets/images/education4ro/highway/highway_1.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: {
                    text: "Talent Manger for Schools",
                    left: "62.6%",
                    right: "32.46%",
                    top: "8.46%",
                    bottom: "90.95%"
                  },
                  image: {
                    left: "61.43%",
                    right: "37.56%",
                    top: "6.96%",
                    bottom: "90.78%",
                    highway: require("../assets/images/education4ro/highway/highway_1/tms.svg")
                  }
                }
              },
              {
                id: 2,
                project: {
                  id: 2,
                  title: {
                    text: "Digital Education Library",
                    left: "62.75%",
                    right: "32.87%",
                    top: "9.8%",
                    bottom: "89.61%"
                  },
                  image: {
                    left: "62.21%",
                    right: "37.35%",
                    top: "8.96%",
                    bottom: "89.39%",
                    highway: require("../assets/images/education4ro/highway/highway_1/del.svg")
                  }
                }
              },
              {
                id: 3,
                project: {
                  id: 3,
                  title: {
                    text: "Virtual Classrooms",
                    left: "63.86%",
                    right: "32.75%",
                    top: "10.91%",
                    bottom: "88.64%"
                  },
                  image: {
                    left: "62.46%",
                    right: "36.37%",
                    top: "10.3%",
                    bottom: "88.52%",
                    highway: require("../assets/images/education4ro/highway/highway_1/vc.svg")
                  }
                }
              },
              {
                id: 4,
                project: {
                  id: 4,
                  title: {
                    text: "Teacher Brain Fitness",
                    left: "60.21%",
                    right: "35.91%",
                    top: "12.15%",
                    bottom: "87.4%"
                  },
                  image: {
                    left: "63.47%",
                    right: "35.38%",
                    top: "11.22%",
                    bottom: "87.54%",
                    highway: require("../assets/images/education4ro/highway/highway_1/tbf.svg")
                  }
                }
              },
              {
                id: 5,
                project: {
                  id: 5,
                  title: {
                    text: "Profesor in Spital",
                    left: "62.56%",
                    right: "34.39%",
                    top: "13.09%",
                    bottom: "86.32%"
                  },
                  image: {
                    left: "64.44%",
                    right: "33.98%",
                    top: "12.17%",
                    bottom: "86.93%",
                    highway: require("../assets/images/education4ro/highway/highway_1/pin.svg")
                  }
                }
              },
              {
                id: 6,
                project: {
                  id: 6,
                  title: {
                    text: "Acces",
                    left: "65.15%",
                    right: "33.83%",
                    top: "13.83%",
                    bottom: "85.73%"
                  },
                  image: {
                    left: "65.85%",
                    right: "33.22%",
                    top: "12.83%",
                    bottom: "85.97%",
                    highway: require("../assets/images/education4ro/highway/highway_1/acces.svg")
                  }
                }
              },
              {
                id: 7,
                project: {
                  id: 7,
                  title: {
                    text: "eSense",
                    left: "65.35%",
                    right: "33.36%",
                    top: "15.1%",
                    bottom: "84.46%"
                  },
                  image: {
                    left: "65.41%",
                    right: "32.78%",
                    top: "13.8%",
                    bottom: "82.58%",
                    highway: require("../assets/images/education4ro/highway/highway_1/esense.svg")
                  }
                }
              }
            ]
          }
        },
        {
          id: 2,
          title: {
            text: "Abilități pentru viața reală",
            left: "62.32%",
            right: "32.8%",
            top: "20.06%",
            bottom: "79.29%"
          },
          image: {
            left: "63.39%",
            right: "33.75%",
            top: "21.16%",
            bottom: "74.8%",
            image: require("../assets/images/education4ro/category-images/abilities-for-real-life.svg")
          },
          highway_portion: {
            id: 1,
            left: "61.2%",
            right: "34.22%",
            top: "16.91%",
            bottom: "79.34%",
            highway: require("../assets/images/education4ro/highway/highway_2.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 3,
          title: {
            text: "Acces la educație",
            left: "54.04%",
            right: "42.77%",
            top: "34.82%",
            bottom: "64.56%"
          },
          image: {
            left: "54.52%",
            right: "42.61%",
            top: "31.39%",
            bottom: "65.53%",
            image: require("../assets/images/education4ro/category-images/education-access.svg")
          },
          highway_portion: {
            id: 1,
            left: "57.58%",
            right: "37.63%",
            top: "20.07%",
            bottom: "64.37%",
            highway: require("../assets/images/education4ro/highway/highway_3.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 4,
          title: {
            text: "Învățământ preuniversitar de calitate",
            left: "36.09%",
            right: "58.97%",
            top: "46.1%",
            bottom: "52.64%"
          },
          image: {
            left: "37.4%",
            right: "60.27%",
            top: "42.78%",
            bottom: "54.13%",
            image: require("../assets/images/education4ro/category-images/quality-prestudies.svg")
          },
          highway_portion: {
            id: 1,
            left: "40.23%",
            right: "42.07%",
            top: "35.11%",
            bottom: "51.38%",
            highway: require("../assets/images/education4ro/highway/highway_4.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 5,
          title: {
            text: "Învățământ universitar de calitate",
            left: "28.4%",
            right: "67.27%",
            top: "49.95%",
            bottom: "48.79%"
          },
          image: {
            left: "29.21%",
            right: "68.04%",
            top: "46.45%",
            bottom: "50.47%",
            image: require("../assets/images/education4ro/category-images/quality-university-studies.svg")
          },
          highway_portion: {
            id: 1,
            left: "30.47%",
            right: "59.41%",
            top: "48.14%",
            bottom: "47.13%",
            highway: require("../assets/images/education4ro/highway/highway_5.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 6,
          title: {
            text: "Școli sigure și bine administrate",
            left: "31.46%",
            right: "64.81%",
            top: "64.02%",
            bottom: "34.67%"
          },
          image: {
            left: "31.92%",
            right: "64.99%",
            top: "65.53%",
            bottom: "31.62%",
            image: require("../assets/images/education4ro/category-images/secure-schools.svg")
          },
          highway_portion: {
            id: 1,
            left: "29.88%",
            right: "62.52%",
            top: "52.39%",
            bottom: "35%",
            highway: require("../assets/images/education4ro/highway/highway_6.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Care for Romania",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Arcu risus quis varius quam quisque id. Diam donec adipiscing tristique risus nec feugiat in. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc non. Condimentum vitae sapien pellentesque habitant. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Habitasse platea dictumst quisque sagittis purus sit. Viverra tellus in hac habitasse platea dictumst vestibulum. Vel elit scelerisque mauris pellentesque. Nec nam aliquam sem et tortor consequat. Ultricies leo integer malesuada nunc vel risus commodo. Egestas diam in arcu cursus euismod. Rhoncus urna neque viverra justo nec ultrices dui. Amet venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Nunc mi ipsum faucibus vitae aliquet nec.",
      slug: "care-for-romania",
      logo: require("../assets/images/care4ro/care4ro-logo.svg"),
      button: {
        left: "49.78%",
        right: "44.5%",
        top: "14.16%",
        bottom: "83.21%",
        btn: require("../assets/images/care4ro/button.svg")
      },
      youtube: {
        title: "Youtube Title",
        description: "description",
        video:"video?"
      },
      highway: [
        {
          id: 1,
          title: {
            text: "Fără trafic de persoane",
            left: "46.39%",
            right: "49.33%",
            top: "20.14%",
            bottom: "79.27%"
          },
          image: {
            left: "47.42%",
            right: "50.43%",
            top: "16.81%",
            bottom: "80.29%",
            image: require("../assets/images/care4ro/category-images/no-human-trafic.svg")
          },
          highway_portion: {
            id: 1,
            left: "46.99%",
            right: "46.85%",
            top: "17.24%",
            bottom: "71.04%",
            highway: require("../assets/images/care4ro/highway/highway_1.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 2,
          title: {
            text: "O viață bună pentru copiii abandonați",
            left: "45.22%",
            right: "51.13%",
            top: "30.12%",
            bottom: "68.48%"
          },
          image: {
            left: "45.9%",
            right: "51.8%",
            top: "31.93%",
            bottom: "64.53%",
            image: require("../assets/images/care4ro/category-images/better-life-for-orphan-children.svg")
          },
          highway_portion: {
            id: 1,
            left: "39.16%",
            right: "52.62%",
            top: "24.61%",
            bottom: "70.52%",
            highway: require("../assets/images/care4ro/highway/highway_2.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 3,
          title: {
            text: "Șanse pentru persoanele cu dizabilități",
            left: "38.77%",
            right: "56.57%",
            top: "22.06%",
            bottom: "76.56%"
          },
          image: {
            left: "38.68%",
            right: "58.87%",
            top: "17.98%",
            bottom: "78.53%",
            image: require("../assets/images/care4ro/category-images/chance-for-disability-persons.svg")
          },
          highway_portion: {
            id: 1,
            left: "33.45%",
            right: "60.46%",
            top: "23.76%",
            bottom: "74.93%",
            highway: require("../assets/images/care4ro/highway/highway_3.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 4,
          title: {
            text: "Fără discriminare împotriva etniei rome",
            left: "31.43%",
            right: "64.52%",
            top: "22.44%",
            bottom: "76.21%"
          },
          image: {
            left: "32.45%",
            right: "65.6%",
            top: "19.97%",
            bottom: "78.18%",
            image: require("../assets/images/care4ro/category-images/no-discrimination.svg")
          },
          highway_portion: {
            id: 1,
            left: "23.99%",
            right: "66.19%",
            top: "24.33%",
            bottom: "72.19%",
            highway: require("../assets/images/care4ro/highway/highway_4.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 5,
          title: {
            text: "Incluziune pentru persoanele LGBTQ+",
            left: "19.82%",
            right: "76.57%",
            top: "26.47%",
            bottom: "72.21%"
          },
          image: {
            left: "19.75%",
            right: "76.51%",
            top: "22.72%",
            bottom: "73.91%",
            image: require("../assets/images/care4ro/category-images/lgbtq.svg")
          },
          highway_portion: {
            id: 1,
            left: "18.59%",
            right: "75.65%",
            top: "27.32%",
            bottom: "65.97%",
            highway: require("../assets/images/care4ro/highway/highway_5.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 6,
          title: {
            text: "Diaspora mai aproape de casă",
            left: "19.31%",
            right: "76.64%",
            top: "33.55%",
            bottom: "65.25%"
          },
          image: {
            left: "21.64%",
            right: "76.3%",
            top: "34.51%",
            bottom: "62.38%",
            image: require("../assets/images/care4ro/category-images/diaspora.svg")
          },
          highway_portion: {
            id: 1,
            left: "18.24%",
            right: "78.29%",
            top: "33.55%",
            bottom: "54.05%",
            highway: require("../assets/images/care4ro/highway/highway_6.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 7,
          title: {
            text: "Fără violență acasă",
            left: "22.39%",
            right: "74.05%",
            top: "45.75%",
            bottom: "53.59%"
          },
          image: {
            left: "22.74%",
            right: "74.48%",
            top: "41.19%",
            bottom: "54.86%",
            image: require("../assets/images/care4ro/category-images/no-violence-at-home.svg")
          },
          highway_portion: {
            id: 1,
            left: "12.59%",
            right: "77.98%",
            top: "45.47%",
            bottom: "32.42%",
            highway: require("../assets/images/care4ro/highway/highway_7.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Environment for Romania",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Arcu risus quis varius quam quisque id. Diam donec adipiscing tristique risus nec feugiat in. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc non. Condimentum vitae sapien pellentesque habitant. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Habitasse platea dictumst quisque sagittis purus sit. Viverra tellus in hac habitasse platea dictumst vestibulum. Vel elit scelerisque mauris pellentesque. Nec nam aliquam sem et tortor consequat. Ultricies leo integer malesuada nunc vel risus commodo. Egestas diam in arcu cursus euismod. Rhoncus urna neque viverra justo nec ultrices dui. Amet venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Nunc mi ipsum faucibus vitae aliquet nec.",
      slug: "envinronment-for-romania",
      logo: require("../assets/images/environment4ro/environment4ro-logo.svg"),
      button: {
        left: "7.24%",
        right: "87.07%",
        top: "48.44%",
        bottom: "48.93%",
        btn: require("../assets/images/environment4ro/button.svg")
      },
      youtube: {
        title: "Youtube Title",
        description: "description",
        video:"video?"
      },
      highway: [
        {
          id: 1,
          title: {
            text: "Pregătiți pentru următorul dezastru natural",
            left: "68.43%",
            right: "26.65%",
            top: "65.2%",
            bottom: "33.64%"
          },
          image: {
            left: "69.5%",
            right: "27.51%",
            top: "61.67%",
            bottom: "35.23%",
            image: require("../assets/images/environment4ro/category-images/ready-for-natural-dezasters.svg")
          },
          highway_portion: {
            id: 1,
            left: "71.56%",
            right: "17.12%",
            top: "50.17%",
            bottom: "32.01%",
            highway: require("../assets/images/environment4ro/highway/highway_1.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 2,
          title: {
            text: "Pregătiți pentru cutremur",
            left: "57.81%",
            right: "38.49%",
            top: "79.58%",
            bottom: "19.25%"
          },
          image: {
            left: "55.17%",
            right: "41.97%",
            top: "77.25%",
            bottom: "19.9%",
            image: require("../assets/images/environment4ro/category-images/ready-for-earthquake.svg")
          },
          highway_portion: {
            id: 1,
            left: "61.84%",
            right: "28.05%",
            top: "67.58%",
            bottom: "19.44%",
            highway: require("../assets/images/environment4ro/highway/highway_2.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 3,
          title: {
            text: "Măsurarea poluării",
            left: "53.36%",
            right: "43.14%",
            top: "85.76%",
            bottom: "13.64%"
          },
          image: {
            left: "54.09%",
            right: "43.52%",
            top: "81.8%",
            bottom: "14.67%",
            image: require("../assets/images/environment4ro/category-images/polution.svg")
          },
          highway_portion: {
            id: 1,
            left: "57.11%",
            right: "37.81%",
            top: "80.06%",
            bottom: "13.13%",
            highway: require("../assets/images/environment4ro/highway/highway_3.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 4,
          title: {
            text: "Reducerea poluării",
            left: "50.16%",
            right: "46.39%",
            top: "93.15%",
            bottom: "6.26%"
          },
          image: {
            left: "50.58%",
            right: "46.96%",
            top: "93.85%",
            bottom: "2.2%",
            image: require("../assets/images/environment4ro/category-images/polution-red.svg")
          },
          highway_portion: {
            id: 1,
            left: "50.27%",
            right: "42.53%",
            top: "86.36%",
            bottom: "7.25%",
            highway: require("../assets/images/environment4ro/highway/highway_4.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 5,
          title: {
            text: "Reciclarea și managementul deșeurilor",
            left: "38.69%",
            right: "56.5%",
            top: "88.23%",
            bottom: "10.46%"
          },
          image: {
            left: "39.56%",
            right: "57.52%",
            top: "89.84%",
            bottom: "7.45%",
            image: require("../assets/images/environment4ro/category-images/recycling.svg")
          },
          highway_portion: {
            id: 1,
            left: "40.73%",
            right: "49.37%",
            top: "86.24%",
            bottom: "7.77%",
            highway: require("../assets/images/environment4ro/highway/highway_5.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 6,
          title: {
            text: "Orașe prietenoase",
            left: "29.43%",
            right: "67.18%",
            top: "74.42%",
            bottom: "24.95%"
          },
          image: {
            left: "29.41%",
            right: "66.98%",
            top: "70.59%",
            bottom: "26.19%",
            image: require("../assets/images/environment4ro/category-images/friendly-cities.svg")
          },
          highway_portion: {
            id: 1,
            left: "30.79%",
            right: "58.9%",
            top: "75.47%",
            bottom: "13.24%",
            highway: require("../assets/images/environment4ro/highway/highway_6.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 7,
          title: {
            text: "Sate dezvoltate",
            left: "20.19%",
            right: "76.6%",
            top: "71.11%",
            bottom: "28.4%"
          },
          image: {
            left: "20.1%",
            right: "76.5%",
            top: "72.01%",
            bottom: "24.35%",
            image: require("../assets/images/environment4ro/category-images/villages.svg")
          },
          highway_portion: {
            id: 1,
            left: "23.89%",
            right: "68.87%",
            top: "70.67%",
            bottom: "23.25%",
            highway: require("../assets/images/environment4ro/highway/highway_7.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 8,
          title: {
            text: "Protecția naturii",
            left: "21.43%",
            right: "75.57%",
            top: "62.88%",
            bottom: "36.49%"
          },
          image: {
            left: "23.16%",
            right: "74.38%",
            top: "59.17%",
            bottom: "36.69%",
            image: require("../assets/images/environment4ro/category-images/environment-protection.svg")
          },
          highway_portion: {
            id: 1,
            left: "20.11%",
            right: "75.76%",
            top: "61.96%",
            bottom: "28.8%",
            highway: require("../assets/images/environment4ro/highway/highway_8.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 9,
          title: {
            text: "Păduri protejate și sănătoase",
            left: "8.22%",
            right: "88.78%",
            top: "54.41%",
            bottom: "44.24%"
          },
          image: {
            left: "8.38%",
            right: "89.01%",
            top: "55.98%",
            bottom: "40.53%",
            image: require("../assets/images/environment4ro/category-images/forest.svg")
          },
          highway_portion: {
            id: 1,
            left: "9.53%",
            right: "79.47%",
            top: "51.63%",
            bottom: "37.52%",
            highway: require("../assets/images/environment4ro/highway/highway_9.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Health for Romania",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Arcu risus quis varius quam quisque id. Diam donec adipiscing tristique risus nec feugiat in. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc non. Condimentum vitae sapien pellentesque habitant. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Habitasse platea dictumst quisque sagittis purus sit. Viverra tellus in hac habitasse platea dictumst vestibulum. Vel elit scelerisque mauris pellentesque. Nec nam aliquam sem et tortor consequat. Ultricies leo integer malesuada nunc vel risus commodo. Egestas diam in arcu cursus euismod. Rhoncus urna neque viverra justo nec ultrices dui. Amet venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Nunc mi ipsum faucibus vitae aliquet nec.",
      slug: "health-for-romania",
      logo: require("../assets/images/health4ro/health4ro-logo.svg"),
      button: {
        left: "72.18%",
        right: "23.13%",
        top: "22.53%",
        bottom: "74.84%",
        btn: require("../assets/images/health4ro/button.svg")
      },
      youtube: {
        title: "Youtube Title",
        description: "description",
        video:"video?"
      },
      highway: [
        {
          id: 1,
          title: {
            text: "Grijă pentru sănătatea mamei și a copilului",
            left: "41.3%",
            right: "54.54%",
            top: "78.85%",
            bottom: "19.81%"
          },
          image: {
            left: "45.65%",
            right: "52.32%",
            top: "77.18%",
            bottom: "19.63%",
            image: require("../assets/images/health4ro/category-images/mother-and-child.svg")
          },
          highway_portion: {
            id: 1,
            left: "35.43%",
            right: "59.31%",
            top: "78.93%",
            bottom: "4.12%",
            highway: require("../assets/images/health4ro/highway/highway_1.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 2,
          title: {
            text: "Sprijin pentru cei grav bolnavi",
            left: "47.65%",
            right: "49.21%",
            top: "67.26%",
            bottom: "31.47%"
          },
          image: {
            left: "48.39%",
            right: "49.64%",
            top: "63.72%",
            bottom: "33.32%",
            image: require("../assets/images/health4ro/category-images/care.svg")
          },
          highway_portion: {
            id: 1,
            left: "40.34%",
            right: "49%",
            top: "68.78%",
            bottom: "20.59%",
            highway: require("../assets/images/health4ro/highway/highway_2.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 3,
          title: {
            text: "Servicii de sănătate eficiente",
            left: "64.67%",
            right: "31.7%",
            top: "51.49%",
            bottom: "47.35%"
          },
          image: {
            left: "65%",
            right: "32.31%",
            top: "48.53%",
            bottom: "48.97%",
            image: require("../assets/images/health4ro/category-images/eficient-health.svg")
          },
          highway_portion: {
            id: 1,
            left: "50.87%",
            right: "35.71%",
            top: "51.33%",
            bottom: "30.86%",
            highway: require("../assets/images/health4ro/highway/highway_3.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 4,
          title: {
            text: "Spitale funcționale",
            left: "66.07%",
            right: "30.43%",
            top: "40.39%",
            bottom: "58.98%"
          },
          image: {
            left: "66.26%",
            right: "30.84%",
            top: "37.04%",
            bottom: "60.19%",
            image: require("../assets/images/health4ro/category-images/hospitals.svg")
          },
          highway_portion: {
            id: 1,
            left: "61.03%",
            right: "31.93%",
            top: "41.41%",
            bottom: "48.15%",
            highway: require("../assets/images/health4ro/highway/highway_4.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 5,
          title: {
            text: "Sprijin, nu pedeapsă pentru dependenți",
            left: "79.37%",
            right: "16.86%",
            top: "41.91%",
            bottom: "56.74%"
          },
          image: {
            left: "79.92%",
            right: "17.34%",
            top: "43.81%",
            bottom: "53.69%",
            image: require("../assets/images/health4ro/category-images/support.svg")
          },
          highway_portion: {
            id: 1,
            left: "67.71%",
            right: "20.92%",
            top: "41.86%",
            bottom: "56.32%",
            highway: require("../assets/images/health4ro/highway/highway_5.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 6,
          title: {
            text: "Sănătate mintală pentru toți",
            left: "71.54%",
            right: "25.28%",
            top: "29.11%",
            bottom: "69.55%"
          },
          image: {
            left: "71.6%",
            right: "25.29%",
            top: "30.63%",
            bottom: "66.54%",
            image: require("../assets/images/health4ro/category-images/mental-health.svg")
          },
          highway_portion: {
            id: 1,
            left: "74.01%",
            right: "21.11%",
            top: "25.69%",
            bottom: "57.63%",
            highway: require("../assets/images/health4ro/highway/highway_6.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "Participation for Romania",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Arcu risus quis varius quam quisque id. Diam donec adipiscing tristique risus nec feugiat in. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc non. Condimentum vitae sapien pellentesque habitant. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Habitasse platea dictumst quisque sagittis purus sit. Viverra tellus in hac habitasse platea dictumst vestibulum. Vel elit scelerisque mauris pellentesque. Nec nam aliquam sem et tortor consequat. Ultricies leo integer malesuada nunc vel risus commodo. Egestas diam in arcu cursus euismod. Rhoncus urna neque viverra justo nec ultrices dui. Amet venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Nunc mi ipsum faucibus vitae aliquet nec.",
      slug: "participation-for-romania",
      logo: require("../assets/images/participation4ro/participation4ro-logo.svg"),
      button: {
        left: "84.39%",
        right: "9.55%",
        top: "73.52%",
        bottom: "23.85%",
        btn: require("../assets/images/participation4ro/button.svg")
      },
      youtube: {
        title: "Youtube Title",
        description: "description",
        video:"video?"
      },
      highway: [
        {
          id: 1,
          title: {
            text: "Acces la cultură",
            left: "82.76%",
            right: "14.33%",
            top: "80.19%",
            bottom: "19.33%"
          },
          image: {
            left: "82.76%",
            right: "14.32%",
            top: "81.07%",
            bottom: "15.72%",
            image: require("../assets/images/participation4ro/category-images/culture.svg")
          },
          highway_portion: {
            id: 1,
            left: "79.33%",
            right: "14.03%",
            top: "76.53%",
            bottom: "20.38%",
            highway: require("../assets/images/participation4ro/highway/highway_1.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 2,
          title: {
            text: "Jurnaliști eficienți",
            left: "77.74%",
            right: "18.97%",
            top: "75.09%",
            bottom: "24.28%"
          },
          image: {
            left: "78.17%",
            right: "19.29%",
            top: "70.89%",
            bottom: "25.46%",
            image: require("../assets/images/participation4ro/category-images/jurnalism.svg")
          },
          highway_portion: {
            id: 1,
            left: "75.03%",
            right: "20.15%",
            top: "76.21%",
            bottom: "17.47%",
            highway: require("../assets/images/participation4ro/highway/highway_2.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 3,
          title: {
            text: "Primarii funcționale",
            left: "71.08%",
            right: "25.24%",
            top: "80.95%",
            bottom: "18.39%"
          },
          image: {
            left: "71.88%",
            right: "25.37%",
            top: "76.42%",
            bottom: "19.51%",
            image: require("../assets/images/participation4ro/category-images/cityhall.svg")
          },
          highway_portion: {
            id: 1,
            left: "60.14%",
            right: "24.61%",
            top: "74.66%",
            bottom: "13.74%",
            highway: require("../assets/images/participation4ro/highway/highway_3.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 4,
          title: {
            text: "Instituții centrale funcționale",
            left: "59.33%",
            right: "37.46%",
            top: "72.39%",
            bottom: "26.23%"
          },
          image: {
            left: "59.19%",
            right: "37.34%",
            top: "68.07%",
            bottom: "28.06%",
            image: require("../assets/images/participation4ro/category-images/institutions.svg")
          },
          highway_portion: {
            id: 1,
            left: "53.14%",
            right: "39.5%",
            top: "64.16%",
            bottom: "24.8%",
            highway: require("../assets/images/participation4ro/highway/highway_4.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 5,
          title: {
            text: "O mai bună relație cetățean stat",
            left: "53.16%",
            right: "43.45%",
            top: "62.24%",
            bottom: "36.41%"
          },
          image: {
            left: "53.32%",
            right: "43.61%",
            top: "58.4%",
            bottom: "38.37%",
            image: require("../assets/images/participation4ro/category-images/relations.svg")
          },
          highway_portion: {
            id: 1,
            left: "46.35%",
            right: "46.36%",
            top: "53.33%",
            bottom: "35.05%",
            highway: require("../assets/images/participation4ro/highway/highway_5.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 6,
          title: {
            text: "O societate civilă puternică",
            left: "46.89%",
            right: "49.98%",
            top: "52.59%",
            bottom: "46.05%"
          },
          image: {
            left: "49.8%",
            right: "46.86%",
            top: "49.93%",
            bottom: "46.77%",
            image: require("../assets/images/participation4ro/category-images/ong.svg")
          },
          highway_portion: {
            id: 1,
            left: "35.57%",
            right: "53.3%",
            top: "35.94%",
            bottom: "46.12%",
            highway: require("../assets/images/participation4ro/highway/highway_6.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 7,
          title: {
            text: "Alegeri cortecte. Alegători informați.",
            left: "33.88%",
            right: "62.58%",
            top: "33.75%",
            bottom: "64.94"
          },
          image: {
            left: "34.81%",
            right: "63.49%",
            top: "29.97%",
            bottom: "66.74%",
            image: require("../assets/images/participation4ro/category-images/election.svg")
          },
          highway_portion: {
            id: 1,
            left: "29.54%",
            right: "63.98%",
            top: "31.08%",
            bottom: "31.08%",
            highway: require("../assets/images/participation4ro/highway/highway_7.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 8,
          title: {
            text: "Date deschise",
            left: "30.84%",
            right: "66.6%",
            top: "31%",
            bottom: "68.56%"
          },
          image: {
            left: "31.72%",
            right: "66.82%",
            top: "27.53%",
            bottom: "69.4%",
            image: require("../assets/images/participation4ro/category-images/dates.svg")
          },
          highway_portion: {
            id: 1,
            left: "28.77%",
            right: "69.27%",
            top: "19.7%",
            bottom: "68.35%",
            highway: require("../assets/images/participation4ro/highway/highway_8.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        },
        {
          id: 9,
          title: {
            text: "Legislație accesibilă",
            left: "24.65%",
            right: "71.66%",
            top: "19.44%",
            bottom: "79.9%"
          },
          image: {
            left: "25.35%",
            right: "72.49%",
            top: "15.76%",
            bottom: "80.94%",
            image: require("../assets/images/participation4ro/category-images/legislation.svg")
          },
          highway_portion: {
            id: 1,
            left: "28.66%",
            right: "64.5%",
            top: "6.39%",
            bottom: "79.8%",
            highway: require("../assets/images/participation4ro/highway/highway_9.svg"),
            projects: [
              {
                id: 1,
                project: {
                  id: 1,
                  title: "",
                  image: ""
                }
              }
            ]
          }
        }
      ]
    }
  ]
};
export default data;

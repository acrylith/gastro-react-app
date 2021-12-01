//Our menu
const varesList = {
    vare1: {
        type: 'pizza',
        name: 'Салямі',
        image: './img/pizza-card.jpg',
        contain: 'Томати пелаті, моцарела, подвійна салямі',
        caliber: {
            s: {
                size: '32см.',
                weight: 520,
                price: 124
            },
            m: {
                size: '45см.',
                weight: 1040,
                price: 245
            }
        }
    },

    vare2: {
        type: 'pizza',
        name: 'Прошуто',
        image: './img/pizza-card.jpg',
        contain: 'Вершковий соус, моцарела, шинка, печериці',
        caliber: {
            s: {
                size: '32см.',
                weight: 520,
                price: 127
            },
            m: {
                size: '45см.',
                weight: 1040,
                price: 251
            }
        }
    },

    vare3: {
        type: 'pizza',
        name: 'Маргарита',
        image: './img/pizza-card.jpg',
        contain: 'Томати пелаті, моцарела, пармезан, свіжий базилік, трюфельна оливкова олія',
        caliber: {
            s: {
                size: '32см.',
                weight: 485,
                price: 131
            },
            m: {
                size: '45см.',
                weight: 970,
                price: 259
            }
        }
    },

    vare4: {
        type: 'pizza',
        name: 'Гавайська',
        image: './img/pizza-card.jpg',
        contain: 'Вершковий соус, моцарела, ананас, курка, кукурудза',
        caliber: {
            s: {
                size: '32см.',
                weight: 560,
                price: 136
            },
            m: {
                size: '45см.',
                weight: 1120,
                price: 269
            }
        }
    },

    vare5: {
        type: 'pizza',
        name: 'Пепероні',
        image: './img/pizza-card.jpg',
        contain: 'Томати пелаті, моцарела, подвійна салямі пепероні',
        caliber: {
            s: {
                size: '32см.',
                weight: 560,
                price: 136
            },
            m: {
                size: '45см.',
                weight: 1120,
                price: 269
            }
        }
    },

    vare6: {
        type: 'pizza',
        name: 'Вегетеріана',
        image: './img/pizza-card.jpg',
        contain: 'Томати пелаті, моцарела, печериці, оливки, солодкий перець, рукола',
        caliber: {
            s: {
                size: '32см.',
                weight: 560,
                price: 136
            },
            m: {
                size: '45см.',
                weight: 1120,
                price: 269
            }
        }
    },

    vare7: {
        type: 'pizza',
        name: 'Діабола',
        image: './img/pizza-card.jpg',
        contain: 'Томати пелаті, моцарелла, салямі пепероні, перець чилі, оливки, синя цибуля',
        caliber: {
            s: {
                size: '32см.',
                weight: 570,
                price: 151
            },
            m: {
                size: '45см.',
                weight: 1140,
                price: 299
            }
        }
    },

    vare8: {
        type: 'pizza',
        name: 'Кальцоне',
        image: './img/pizza-card.jpg',
        contain: 'Вершковий соус, моцарела, шинка, печериці, томати',
        caliber: {
            s: {
                size: '32см.',
                weight: 560,
                price: 147
            },
            m: {
                size: '45см.',
                weight: 1120,
                price: 291
            }
        }
    },

    vare9: {
        type: 'pizza',
        name: 'Провінціа',
        image: './img/pizza-card.jpg',
        contain: 'Вершковий соус, моцарела, баварські ковбаски, огірки корнішони, помідори чері',
        caliber: {
            s: {
                size: '32см.',
                weight: 560,
                price: 136
            },
            m: {
                size: '45см.',
                weight: 1120,
                price: 269
            }
        }
    },

    vare10: {
        type: 'sushi',
        name: 'Сет Макі',
        image: './img/sushi-card.jpg',
        contain: 'Макі лосось, макі вугор, макі креветка, макі краб, макі авокадо, макі огірок',
        caliber: {
            s: {
                size: '18шт.',
                weight: 330,
                price: 190
            },
            m: {
                size: '36шт.',
                weight: 665,
                price: 381
            }
        }
    },

    vare11: {
        type: 'sushi',
        name: 'Сет Соло',
        image: './img/sushi-card.jpg',
        contain: 'Філадельфія рейнбоу, макі краб, нігірі вугор, нігірі лосось, нігірі креветка',
        caliber: {
            s: {
                size: '9шт.',
                weight: 250,
                price: 200
            },
            m: {
                size: '18шт.',
                weight: 500,
                price: 400
            }
        }
    },

    vare12: {
        type: 'sushi',
        name: 'Сет Лосось',
        image: './img/sushi-card.jpg',
        contain: 'Філадельфія лосось, макі лосось, нігірі лосось х2',
        caliber: {
            s: {
                size: '9шт.',
                weight: 270,
                price: 210
            },
            m: {
                size: '18шт.',
                weight: 540,
                price: 420
            }
        }
    },

    vare13: {
        type: 'sushi',
        name: 'Сет Спайсі',
        image: './img/sushi-card.jpg',
        contain: 'Футо спайсі, філадельфія лайт, макі креветка, гункан лосось спайсі х2',
        caliber: {
            s: {
                size: '12шт.',
                weight: 315,
                price: 240
            },
            m: {
                size: '24шт.',
                weight: 630,
                price: 480
            }
        }
    },

    vare14: {
        type: 'sushi',
        name: 'Сет Нью-Йорк',
        image: './img/sushi-card.jpg',
        contain: 'Філадельфія мікс, каліфорнія креветка, кунжут, запечений краб',
        caliber: {
            s: {
                size: '12шт.',
                weight: 300,
                price: 240
            },
            m: {
                size: '24шт.',
                weight: 800,
                price: 600
            }
        }
    },

    vare15: {
        type: 'sushi',
        name: 'Сет Інь-Янь',
        image: './img/sushi-card.jpg',
        contain: 'Філадельфія лосось, філадельфія вугор, нігірі лосось х2, нігірі вугор х2',
        caliber: {
            s: {
                size: '10шт.',
                weight: 360,
                price: 330
            },
            m: {
                size: '20шт.',
                weight: 720,
                price: 660
            }
        }
    },
}

export default varesList;
const rooms = [
    {
        location: "San martino in badia italy",
        host: "azienda specializzata",
        bookingDate: '14-19 marz',
        pricePerNight: '336€',
        roomRating: '5.0',
        title: 'Chalet Milandura con servizio ski shuttle',
        roomType: 'Intero alloggio: casa',
        roomDesc: '6 ospiti,2 camere da letto,3 letti,2 bagni',
        host: {
            name: 'Ilaria E Alex',
            hostDesc: 'Superhost, 7 anni da host',
            languange: "inglese,tedesco e italiano",
            hostLocation: "San Martin de Tor, Italia",
            hostType: "azienda",
            answerRate: "100%",
            answerTime: "Entro qualche ora",
        },
        images:[
            {
                src:"https://a0.muscache.com/im/pictures/7a3f8fa1-ed44-4087-9c41-803d5aae92d8.jpg?im_w=1200&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/1f98296f-2654-424b-b6b3-8ea6c1bcb2e1.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/miso/Hosting-840287868247188587/original/9fcb7a9d-8b52-4923-b4f7-dc3eb56eb5a0.jpeg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/d931ed1b-f785-4597-9cc9-fe0789fb4d9e.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/0137f5d4-3225-47fe-abec-3fa82275dae3.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
        ],
        roomInfo: {
            description: "Prenditi una pausa e rilassati in questa oasi di pace.Immergetevi nel cuore delle Dolomiti,in questo chalet completamente ristrutturato e disponibile dall'estate 2020.Situato nella zona Mirì a San Martino in Badia, lo chalet offre un panorama mozzafiato e tutta la tranquillità che ci si aspetta da una vacanza in montagna.",
            space: "Lo chalet è una casa indipendente dal classico stile alpino, ottimo per chi voglia godersi un po' di privacy e tranquillità .Per 2/6 persone.La casa è composta da cucina accessoriata, due camere da letto con letto matrimoniale,salotto con divano letto e televisione, due bagni completi e un balcone con vista. Parcheggio privato e tanto spazio all'aperto a disposizione.Lenzuola, asciugamani e tutti gli accessori per cucinare saranno già presenti nell'alloggio.Inoltre la struttura dispone di una biosauna, una sauna ad infrarossi ed una vasca idromassaggio esterna con vista sulle Dolomiti.",
            guest: " Tutto il giardino circostante e gli spazi esterni posso essere utilizzati. All'esterno è presente anche una griglia ed un braciere per accendere il fuoco.",
            extraInfo: "Ai prezzi indicati va aggiunta la somma di €2,60 dell’imposta di soggiorno, a notte a persona (a partire dai 14 anni) da versare sul posto all'arrivo in contanti.",
            idNumber: "IT021082B59GLET92P",
        },
        services: [
            {
                serviceIcon: '<i class="bi bi-wifi"></i>',
                serviceDesc: "Vista sul giardino",
            },
            {
                serviceIcon: '<i class="bi bi-house-door"></i>',
                serviceDesc: "Cucina",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Parcheggio gratuito nella proprietà",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Sauna condivisa"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "carbonioRilevatore di monossido di carbonio"
            },
            {
                serviceIcon:'<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vista sulle montagne"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Wi-fi"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vasca idromassaggio condivisa: disponibile tutto l'anno, orari specifici"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "TV",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Allarme antincendio",
            },
        ],
        roomRatings: [
            {
                title: "pulizia",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Precisione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Check-in",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Comunicazione",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Posizione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Qualità/prezzo",
                rating: "4.8",
                icon:'<i class="bi bi-house"></i>',
            },
        ],
        houseRules:
        {
            checkIn: "16:00-21:00",
            checkOut: "entro le 10:00",
            maxGuest: 6,
        },
        security: {
            smoke: "nessun rilevatore di fumo",
            monoxydeCarbon: "non richiesto rilevatore di monossido di carbonio",
        },
        policy: "Effettua la cancellazione prima delle 12:00 del giorno 14 mar per ottenere un rimborso parziale. Dopo tale termine, il rimborso dipenderà dal momento in cui effettui la cancellazione."
    },
    {
        location: "Cortina d'Ampezzo, Italy",
        host: "Luxury Mountain Retreats",
        bookingDate: "10-15 Apr",
        pricePerNight: "420€",
        roomRating: "4.9",
        title: "Chalet di Lusso con Vista Dolomiti",
        roomType: "Intero alloggio: chalet",
        roomDesc: "8 ospiti, 3 camere da letto, 4 letti, 3 bagni",
        host: {
            name: "Giovanni e Maria",
            hostDesc: "Superhost, 5 anni da host",
            languange: "italiano, inglese",
            hostLocation: "Cortina d'Ampezzo, Italia",
            hostType: "privato",
            answerRate: "98%",
            answerTime: "Entro un'ora",
        },
        images:[
            {
                src:"https://a0.muscache.com/im/pictures/7a3f8fa1-ed44-4087-9c41-803d5aae92d8.jpg?im_w=1200&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/1f98296f-2654-424b-b6b3-8ea6c1bcb2e1.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/miso/Hosting-840287868247188587/original/9fcb7a9d-8b52-4923-b4f7-dc3eb56eb5a0.jpeg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/d931ed1b-f785-4597-9cc9-fe0789fb4d9e.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/0137f5d4-3225-47fe-abec-3fa82275dae3.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
        ],
        roomInfo: {
            description: "Chalet di lusso immerso nella natura con sauna e jacuzzi.",
            space: "Ampio soggiorno, cucina moderna, vista panoramica.",
            guest: "Accesso a tutto l'alloggio e giardino privato.",
            extraInfo: "Tassa di soggiorno di €3,00 a notte per adulto.",
            idNumber: "IT032045B72HLET92P",
        },
        services: [
            {
                serviceIcon: '<i class="bi bi-wifi"></i>',
                serviceDesc: "Vista sul giardino",
            },
            {
                serviceIcon: '<i class="bi bi-house-door"></i>',
                serviceDesc: "Cucina",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Parcheggio gratuito nella proprietà",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Sauna condivisa"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "carbonioRilevatore di monossido di carbonio"
            },
            {
                serviceIcon:'<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vista sulle montagne"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Wi-fi"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vasca idromassaggio condivisa: disponibile tutto l'anno, orari specifici"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "TV",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Allarme antincendio",
            },
        ],
        roomRatings: [
            {
                title: "pulizia",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Precisione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Check-in",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Comunicazione",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Posizione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Qualità/prezzo",
                rating: "4.8",
                icon:'<i class="bi bi-house"></i>',
            },
        ],
        houseRules: {
            checkIn: "15:00-20:00",
            checkOut: "entro le 11:00",
            maxGuest: 8,
        },
        security: {
            smoke: "rilevatore di fumo presente",
            monoxydeCarbon: "rilevatore di monossido di carbonio presente",
        },
        policy: "Cancellazione gratuita fino a 7 giorni prima dell'arrivo.",
    },
    {
        location: "Livigno, Italy",
        host: "Alpine Getaway",
        bookingDate: "5-10 Feb",
        pricePerNight: "290€",
        roomRating: "4.8",
        title: "Appartamento con Vista Piste da Sci",
        roomType: "Intero alloggio: appartamento",
        roomDesc: "4 ospiti, 2 camere da letto, 2 letti, 1 bagno",
        host: {
            name: "Marco e Laura",
            hostDesc: "Superhost, 6 anni da host",
            languange: "italiano, inglese, tedesco",
            hostLocation: "Livigno, Italia",
            hostType: "privato",
            answerRate: "95%",
            answerTime: "Entro poche ore",
        },
        images:[
            {
                src:"https://a0.muscache.com/im/pictures/7a3f8fa1-ed44-4087-9c41-803d5aae92d8.jpg?im_w=1200&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/1f98296f-2654-424b-b6b3-8ea6c1bcb2e1.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/miso/Hosting-840287868247188587/original/9fcb7a9d-8b52-4923-b4f7-dc3eb56eb5a0.jpeg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/d931ed1b-f785-4597-9cc9-fe0789fb4d9e.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/0137f5d4-3225-47fe-abec-3fa82275dae3.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
        ],
        roomInfo: {
            description: "Appartamento moderno vicino alle piste, perfetto per sciatori.",
            space: "Cucina attrezzata, soggiorno spazioso, balcone con vista.",
            guest: "Uso esclusivo dell'appartamento, deposito sci disponibile.",
            extraInfo: "La tassa di soggiorno di €2,50 a notte per adulto è esclusa.",
            idNumber: "IT045128C85HLET12Q",
        },
        services: [
            {
                serviceIcon: '<i class="bi bi-wifi"></i>',
                serviceDesc: "Vista sul giardino",
            },
            {
                serviceIcon: '<i class="bi bi-house-door"></i>',
                serviceDesc: "Cucina",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Parcheggio gratuito nella proprietà",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Sauna condivisa"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "carbonioRilevatore di monossido di carbonio"
            },
            {
                serviceIcon:'<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vista sulle montagne"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Wi-fi"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vasca idromassaggio condivisa: disponibile tutto l'anno, orari specifici"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "TV",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Allarme antincendio",
            },
        ],
        roomRatings: [
            {
                title: "pulizia",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Precisione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Check-in",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Comunicazione",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Posizione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Qualità/prezzo",
                rating: "4.8",
                icon:'<i class="bi bi-house"></i>',
            },
        ],
        houseRules: {
            checkIn: "14:00-19:00",
            checkOut: "entro le 10:30",
            maxGuest: 4,
        },
        security: {
            smoke: "rilevatore di fumo presente",
            monoxydeCarbon: "non richiesto rilevatore di monossido di carbonio",
        },
        policy: "Rimborso del 50% se cancellato entro 3 giorni dall'arrivo.",
    },
    {
        location: "Madonna di Campiglio, Italy",
        host: "Luxury Alpine Homes",
        bookingDate: "20-25 Mar",
        pricePerNight: "380€",
        roomRating: "5.0",
        title: "Chalet di Charme con Sauna e Vista",
        roomType: "Intero alloggio: chalet",
        roomDesc: "6 ospiti, 3 camere da letto, 3 letti, 2 bagni",
        host: {
            name: "Elisa e Federico",
            hostDesc: "Superhost, 4 anni da host",
            languange: "italiano, inglese",
            hostLocation: "Madonna di Campiglio, Italia",
            hostType: "privato",
            answerRate: "99%",
            answerTime: "Entro un'ora",
        },
        images:[
            {
                src:"https://a0.muscache.com/im/pictures/7a3f8fa1-ed44-4087-9c41-803d5aae92d8.jpg?im_w=1200&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/1f98296f-2654-424b-b6b3-8ea6c1bcb2e1.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/miso/Hosting-840287868247188587/original/9fcb7a9d-8b52-4923-b4f7-dc3eb56eb5a0.jpeg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/d931ed1b-f785-4597-9cc9-fe0789fb4d9e.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/0137f5d4-3225-47fe-abec-3fa82275dae3.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
        ],
        roomInfo: {
            description: "Splendido chalet con camino e sauna privata.",
            space: "Ampia zona giorno, cucina moderna, terrazza con vista.",
            guest: "Accesso a tutto lo chalet, parcheggio privato incluso.",
            extraInfo: "Supplemento di €3,00 a notte per adulto per tassa di soggiorno.",
            idNumber: "IT054763A74HLET82P",
        },
        services: [
            {
                serviceIcon: '<i class="bi bi-wifi"></i>',
                serviceDesc: "Vista sul giardino",
            },
            {
                serviceIcon: '<i class="bi bi-house-door"></i>',
                serviceDesc: "Cucina",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Parcheggio gratuito nella proprietà",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Sauna condivisa"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "carbonioRilevatore di monossido di carbonio"
            },
            {
                serviceIcon:'<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vista sulle montagne"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Wi-fi"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vasca idromassaggio condivisa: disponibile tutto l'anno, orari specifici"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "TV",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Allarme antincendio",
            },
        ],
        roomRatings: [
            {
                title: "pulizia",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Precisione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Check-in",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Comunicazione",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Posizione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Qualità/prezzo",
                rating: "4.8",
                icon:'<i class="bi bi-house"></i>',
            },
        ],
        houseRules: {
            checkIn: "15:00-20:00",
            checkOut: "entro le 11:00",
            maxGuest: 6,
        },
        security: {
            smoke: "rilevatore di fumo presente",
            monoxydeCarbon: "rilevatore di monossido di carbonio presente",
        },
        policy: "Cancellazione gratuita fino a 7 giorni prima dell'arrivo.",
    },
    {
        location: "Bormio, Italy",
        host: "Mountain Relax Homes",
        bookingDate: "12-17 May",
        pricePerNight: "310€",
        roomRating: "4.9",
        title: "Appartamento Panoramico con Terrazza e SPA",
        roomType: "Intero alloggio: appartamento",
        roomDesc: "5 ospiti, 2 camere da letto, 3 letti, 2 bagni",
        host: {
            name: "Andrea e Martina",
            hostDesc: "Superhost, 8 anni da host",
            languange: "italiano, inglese, francese",
            hostLocation: "Bormio, Italia",
            hostType: "privato",
            answerRate: "97%",
            answerTime: "Entro poche ore",
        },
        images:[
            {
                src:"https://a0.muscache.com/im/pictures/7a3f8fa1-ed44-4087-9c41-803d5aae92d8.jpg?im_w=1200&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/1f98296f-2654-424b-b6b3-8ea6c1bcb2e1.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/miso/Hosting-840287868247188587/original/9fcb7a9d-8b52-4923-b4f7-dc3eb56eb5a0.jpeg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/d931ed1b-f785-4597-9cc9-fe0789fb4d9e.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/0137f5d4-3225-47fe-abec-3fa82275dae3.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
        ],
        roomInfo: {
            description: "Appartamento moderno con vista mozzafiato sulle Alpi, dotato di SPA privata.",
            space: "Ampio soggiorno con cucina open-space, terrazza panoramica con jacuzzi.",
            guest: "Accesso a tutto l'appartamento e alla SPA privata.",
            extraInfo: "Tassa di soggiorno di €2,50 a notte per persona non inclusa.",
            idNumber: "IT078562B61HLET45P",
        },
        services: [
            {
                serviceIcon: '<i class="bi bi-wifi"></i>',
                serviceDesc: "Vista sul giardino",
            },
            {
                serviceIcon: '<i class="bi bi-house-door"></i>',
                serviceDesc: "Cucina",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Parcheggio gratuito nella proprietà",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Sauna condivisa"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "carbonioRilevatore di monossido di carbonio"
            },
            {
                serviceIcon:'<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vista sulle montagne"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Wi-fi"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vasca idromassaggio condivisa: disponibile tutto l'anno, orari specifici"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "TV",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Allarme antincendio",
            },
        ],
        roomRatings: [
            {
                title: "pulizia",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Precisione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Check-in",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Comunicazione",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Posizione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Qualità/prezzo",
                rating: "4.8",
                icon:'<i class="bi bi-house"></i>',
            },
        ],
        houseRules: {
            checkIn: "15:00-21:00",
            checkOut: "entro le 10:30",
            maxGuest: 5,
        },
        security: {
            smoke: "rilevatore di fumo presente",
            monoxydeCarbon: "rilevatore di monossido di carbonio presente",
        },
        policy: "Cancellazione gratuita fino a 5 giorni prima dell'arrivo.",
    },
    {
        location: "Courmayeur, Italy",
        host: "Alpine Elegance",
        bookingDate: "8-13 Dec",
        pricePerNight: "450€",
        roomRating: "5.0",
        title: "Chalet Esclusivo con Camino e Palestra Privata",
        roomType: "Intero alloggio: chalet",
        roomDesc: "6 ospiti, 3 camere da letto, 3 letti, 3 bagni",
        host: {
            name: "Francesco e Giulia",
            hostDesc: "Superhost, 6 anni da host",
            languange: "italiano, inglese, spagnolo",
            hostLocation: "Courmayeur, Italia",
            hostType: "privato",
            answerRate: "98%",
            answerTime: "Entro un'ora",
        },
        images:[
            {
                src:"https://a0.muscache.com/im/pictures/7a3f8fa1-ed44-4087-9c41-803d5aae92d8.jpg?im_w=1200&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/1f98296f-2654-424b-b6b3-8ea6c1bcb2e1.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/miso/Hosting-840287868247188587/original/9fcb7a9d-8b52-4923-b4f7-dc3eb56eb5a0.jpeg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/d931ed1b-f785-4597-9cc9-fe0789fb4d9e.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/0137f5d4-3225-47fe-abec-3fa82275dae3.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
        ],
        roomInfo: {
            description: "Chalet di lusso immerso nella natura, dotato di palestra e camino.",
            space: "Zona giorno open-space, cucina moderna, terrazza panoramica.",
            guest: "Accesso esclusivo all'intera struttura e alla palestra privata.",
            extraInfo: "Supplemento di €4,00 a notte per adulto per tassa di soggiorno.",
            idNumber: "IT094723D56HLET29P",
        },
        services: [
            {
                serviceIcon: '<i class="bi bi-wifi"></i>',
                serviceDesc: "Vista sul giardino",
            },
            {
                serviceIcon: '<i class="bi bi-house-door"></i>',
                serviceDesc: "Cucina",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Parcheggio gratuito nella proprietà",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Sauna condivisa"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "carbonioRilevatore di monossido di carbonio"
            },
            {
                serviceIcon:'<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vista sulle montagne"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Wi-fi"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vasca idromassaggio condivisa: disponibile tutto l'anno, orari specifici"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "TV",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Allarme antincendio",
            },
        ],
        roomRatings: [
            {
                title: "pulizia",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Precisione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Check-in",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Comunicazione",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Posizione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Qualità/prezzo",
                rating: "4.8",
                icon:'<i class="bi bi-house"></i>',
            },
        ],
        houseRules: {
            checkIn: "14:00-19:00",
            checkOut: "entro le 11:00",
            maxGuest: 6,
        },
        security: {
            smoke: "rilevatore di fumo presente",
            monoxydeCarbon: "rilevatore di monossido di carbonio presente",
        },
        policy: "Cancellazione gratuita fino a 7 giorni prima dell'arrivo.",
    },
    {
        location: "Selva di Val Gardena, Italy",
        host: "Dolomiti Stay",
        bookingDate: "15-20 Jul",
        pricePerNight: "280€",
        roomRating: "4.8",
        title: "Appartamento Rustico con Vista Montagne",
        roomType: "Intero alloggio: appartamento",
        roomDesc: "4 ospiti, 2 camere da letto, 2 letti, 1 bagno",
        host: {
            name: "Luca e Sara",
            hostDesc: "Superhost, 5 anni da host",
            languange: "italiano, tedesco, inglese",
            hostLocation: "Selva di Val Gardena, Italia",
            hostType: "privato",
            answerRate: "96%",
            answerTime: "Entro poche ore",
        },
        images:[
            {
                src:"https://a0.muscache.com/im/pictures/7a3f8fa1-ed44-4087-9c41-803d5aae92d8.jpg?im_w=1200&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/1f98296f-2654-424b-b6b3-8ea6c1bcb2e1.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/miso/Hosting-840287868247188587/original/9fcb7a9d-8b52-4923-b4f7-dc3eb56eb5a0.jpeg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/d931ed1b-f785-4597-9cc9-fe0789fb4d9e.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
            {
                src:"https://a0.muscache.com/im/pictures/0137f5d4-3225-47fe-abec-3fa82275dae3.jpg?im_w=720&im_format=avif",
                alt:"immagine",
            },
        ],
        roomInfo: {
            description: "Appartamento in stile rustico con panorama mozzafiato sulle Dolomiti.",
            space: "Soggiorno accogliente, cucina attrezzata, balcone privato.",
            guest: "Accesso esclusivo all'intero appartamento e al deposito sci.",
            extraInfo: "La tassa di soggiorno di €2,50 a notte per adulto non è inclusa.",
            idNumber: "IT032862C74HLET62Q",
        },
        services: [
            {
                serviceIcon: '<i class="bi bi-wifi"></i>',
                serviceDesc: "Vista sul giardino",
            },
            {
                serviceIcon: '<i class="bi bi-house-door"></i>',
                serviceDesc: "Cucina",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Parcheggio gratuito nella proprietà",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Sauna condivisa"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "carbonioRilevatore di monossido di carbonio"
            },
            {
                serviceIcon:'<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vista sulle montagne"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Wi-fi"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Vasca idromassaggio condivisa: disponibile tutto l'anno, orari specifici"
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "TV",
            },
            {
                serviceIcon: '<i class="bi bi-car-front-fill"></i>',
                serviceDesc: "Allarme antincendio",
            },
        ],
        roomRatings: [
            {
                title: "pulizia",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Precisione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Check-in",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Comunicazione",
                rating: "5.0",
                icon: '<i class="bi bi-house"></i>',
            },
            {
                title: "Posizione",
                rating: "5.0",
                icon:'<i class="bi bi-house"></i>',
            },
            {
                title: "Qualità/prezzo",
                rating: "4.8",
                icon:'<i class="bi bi-house"></i>',
            },
        ],
        houseRules: {
            checkIn: "15:00-20:00",
            checkOut: "entro le 10:30",
            maxGuest: 4,
        },
        security: {
            smoke: "rilevatore di fumo presente",
            monoxydeCarbon: "non richiesto rilevatore di monossido di carbonio",
        },
        policy: "Rimborso del 50% se cancellato entro 3 giorni dall'arrivo.",
    },
];
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products: Product[] = [

    {
      id: 1,
      name: 'Наушники Marshall Major V бежевый',
      description: 'Marshall Major V — идеальный выбор для тех, кто ценит высокое качество звука и стильный дизайн. Эти накладные наушники обеспечивают чистое звучание и удобство использования в любых условиях.',
      price: 42935,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pbb/p86/32893179.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p27/p89/32893180.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p44/p89/32893181.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-v-bezhevyi-129797584/?c=750000000'
    },

    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine.',
      price: 419900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/hf4/81186517360670.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },

    {
      id: 3,
      name: 'Смарт-очки Ray-Ban Meta Wayfarer Standard RW4006 601SM1 50-22 черный',
      description: 'Легендарный стиль Ray-Ban, передовые технологии Meta и легкая форма объединены в ряд оправ, созданных для того, чтобы жить настоящим и выражать себя по максимуму.',
      price: 257805,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h32/81186517327806.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/pd8/54777416.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p9a/pd8/54777419.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p2e/pd6/54777420.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p12/pd6/54777421.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pf6/pd5/54777422.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/smart-ochki-ray-ban-meta-wayfarer-standard-rw4006-601sm1-50-22-chernyi-116509833/?c=750000000'
    },

    {
      id: 4,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro Max 256Gb — это воплощение инноваций и стиля, предлагающее безупречную производительность и непревзойденные возможности для тех, кто всегда в движении.',
      price: 813010,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h32/81186517327806.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ped/p29/64476207.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p41/p88/64170091.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p79/p88/64170093.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/?c=750000000'
    },

    {
      id: 5,
      name: 'Смарт-часы Apple Watch Ultra Ocean серый-белый',
      description: 'возможность совершать звонки, дистанционное управление музыкой, возможность отправлять SMS, уведомления от приложений, возможность принимать звонки, уведомления о SMS, уведомления о звонках, дистанционное управление камерой',
      price: 499990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h32/81186517327806.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h66/he7/86598624378910.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h62/hc8/86598624411678.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h70/h42/86598624444446.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-belyi-106667220/?c=750000000'
    },

    {
      id: 6,
      name: 'Смартфон Samsung Galaxy Z Flip6 5G 12 ГБ/256 ГБ голубой + подарок',
      description: 'смартфон; комплект зарядного устройства; коробка; документация',
      price: 499000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h32/81186517327806.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hcd/hbf/86481297080350.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h52/hb1/86481297145886.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h24/h25/86481297211422.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf6/hbc/86481297276958.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h30/h6f/86481297342494.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h11/hd8/86481297408030.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip6-5g-12-gb-256-gb-goluboi-podarok-121175728/?c=750000000'
    },

    {
      id: 7,
      name: 'LANCOME крем Absolue Rich для лица 60 мл',
      description: 'Роскошный крем, созданный для эффективного ухода за кожей лица. Его уникальная формула сочетает в себе регенерирующие и осветляющие свойства, обеспечивая интенсивный уход и великолепные результаты.',
      price: 118235,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h32/81186517327806.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p2e/p56/88784347.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p4a/p56/88784348.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p67/p56/88784349.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pd3/p58/88784350.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lancome-krem-absolue-rich-dlja-litsa-60-ml-131806303/?c=750000000'
    },

    {
      id: 8,
      name: 'Tashe Liquid Silk масло 100 мл',
      description: 'Масло для волос — это универсальное средство, которое обеспечивает уход и защиту. Несмываемое масло с текстурой жидкого шелка позволяет добиться идеальной гладкости и сияния. Благодаря своему составу, оно эффективно выполняет функции термозащиты, защищая от воздействия высоких температур. Это незаменимое решение для ухода за кончиками, склонными к секущимся концам. Применение масла с натуральным составом способствует уменьшению повреждений, делая волосы более здоровыми и привлекательными. Флюид для использования обеспечит нежный шелковистый эффект без утяжеления. ',
      price: 2450,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h32/81186517327806.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p34/p90/72811509.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p6b/p96/55141663.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p74/p92/55141678.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p16/p96/55141666.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p56/p93/55141670.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/tashe-liquid-silk-maslo-100-ml-117503489/?c=750000000'
    },

    {
      id: 9,
      name: 'Charlotte Tilbury Beautiful Skin Sun-kissed Glow Bronzer бронзер 01 Fair',
      description: 'Формула кремовая, но при нанесении имеет пудровый сияющий финиш, придает коже красивое натуральное свечение.',
      price: 22702,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h32/81186517327806.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc0/h84/64524434964510.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h19/h4f/64524437815326.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h87/h19/64524440338462.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h42/h34/64524443418654.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h30/h93/64524511838238.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h7a/h43/64524514590750.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/charlotte-tilbury-beautiful-skin-sun-kissed-glow-bronzer-bronzer-01-fair-105170941/?c=750000000'
    },

    {
      id: 10,
      name: 'Dior Backstage Eye Palette 001 Warm Neutrals',
      description: 'Палетка для глаз Dior Backstage – секретное оружие визажистов Dior, вдохновленное вибрирующей атмосферой, что царит за кулисами показов мод. В её состав входят мерцающие и матовые текстуры различной интенсивности, которые подходят всем оттенкам кожи.',
      price: 24998,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h32/81186517327806.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h92/h12/64676655104030.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hd1/h6a/64676657922078.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/dior-backstage-eye-palette-001-warm-neutrals-106252037/?c=750000000'
    }

  ];
}
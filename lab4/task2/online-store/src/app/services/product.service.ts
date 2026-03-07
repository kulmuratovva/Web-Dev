import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
        id: 1,
        name: 'Чехол для Apple',
        description: 'для Apple iPhone 16 Pro серый',
        price: 395,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h62/87345803198494.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h08/h62/87345803198494.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h24/h2a/87345803264030.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h05/hb9/87345803329566.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h27/hfb/87345803526174.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-16-pro-seryi-124489389/?c=750000000',
        isFavorite: false,
        categoryId: 1
    },

    {
        id: 2,
        name: 'Смарт-часы Apple Watch',
        description: 'SE GPS Gen.2 2024 S/M 40 мм бежевый',
        price: 139900,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
        isFavorite: false,
        categoryId: 1
    },

    {
        id: 3,
        name: 'Смартфон Apple iPhone 17 Pro Max',
        description: 'Смартфон Apple iPhone 17 Pro Max 256Gb темно-синий',
        price: 842500,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p65/p0f/64476280.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pbc/pf2/64169613.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p84/pf2/64169615.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pa0/pf2/64169614.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p49/p0f/64476281.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-temno-sinii-145440732/?c=750000000',
        isFavorite: false,
        categoryId: 1
    },

    {
        id: 4,
        name: 'Радиотелефон Panasonic',
        description: 'Радиотелефон Panasonic KX-TG2511RUN',
        price: 25149,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/hb5/64077529677854.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h07/hb5/64077529677854.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf6/87109721653278.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h11/hc5/87109721718814.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/panasonic-kx-tg2511run-100695710/?c=750000000',
        isFavorite: false,
        categoryId: 1
    },

    {
        id: 5,
        name: 'Смарт-очки Ravilo',
        description: 'Смарт-очки Ravilo L801 04112550 черный',
        price: 64000,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/p4c/95625593.jpeg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pae/p4c/95625593.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p8c/p06/81799012.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p46/p00/81799014.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p19/p07/81799016.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p6c/p5c/81799020.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/smart-ochki-ravilo-l801-04112550-chernyi-149652341/?c=750000000',
        isFavorite: false,
        categoryId: 1
    },

    {
        id: 6,
        name: 'Кроссовки New Balance',
        description: 'Кроссовки New Balance серый',
        price: 149990,
        rating: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pe6/p07/108360397.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pe6/p07/108360397.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p1f/p08/108360399.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p6e/p52/108360402.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pdf/p52/108360406.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p34/p53/108360409.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pbc/p55/108360411.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/krossovki-new-balance-u190652h-d-seryi-35-5-157822736/?c=750000000',
        isFavorite: false,
        categoryId: 2
    },

    {
        id: 7,
        name: 'Кеды adidas',
        description: 'Кеды adidas SAMBA OG W бежевый, сиреневый',
        price: 47990,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pbc/pb6/36122709.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pbc/pb6/36122709.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p34/pb4/36122711.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pdf/pb3/36122714.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p8a/pb3/36122717.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe6/pb0/36122720.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p3d/pb0/36122726.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/kedy-adidas-samba-og-w-ji2678-bezhevyi-sirenevyi-36-5-137965145/?c=750000000&m=Adidas',
        isFavorite: false,
        categoryId: 2
    },

    {
        id: 8,
        name: 'Дутики adidas черный',
        description: 'синтетические материалы, зима',
        price: 25990,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p43/pc4/66178006.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p43/pc4/66178006.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p0b/pc4/66178008.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pef/pc3/66178009.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p83/pc1/66178010.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p2e/pc1/66178013.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dutiki-adidas-f38604-chernyi-35-5-146058217/?c=750000000&m=Adidas',
        isFavorite: false,
        categoryId: 2
    },

    {
        id: 9,
        name: 'Мюли Roberto Festa светло-зеленый',
        description: 'Минималистичный силуэт и глянцевая отделка',
        price: 214000,
        rating: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pe9/p9f/104294540.jpeg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pe9/p9f/104294540.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p16/p99/104294542.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p43/p92/104294544.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p32/p81/104294549.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe0/p2b/104294553.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/mjuli-roberto-festa-boa-svetlo-zelenyi-38-156756402/?c=750000000',
        isFavorite: false,
        categoryId: 2
    },

    {
        id: 10,
        name: 'Галоши ',
        description: 'Галоши RT черный',
        price: 1559,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/hec/85318467190814.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/ha2/hec/85318467190814.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h04/h03/85318467223582.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h28/hf2/85318467256350.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h5b/h16/85318467289118.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/galoshi-rt-art-106m-chernyi-36-110870621/?c=750000000',
        isFavorite: false,
        categoryId: 2
    },

    {
        id: 11,
        name: 'Корм Felix',
        description: 'Корм Felix Аппетитные кусочки в желе говядина 75 г 1 шт',
        price: 229,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h01/84564384645150.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h3b/h01/84564384645150.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hf8/h5b/84564384677918.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h2f/h6c/86904007819294.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/ha2/h06/86904007884830.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/felix-appetitnye-kusochki-v-zhele-govjadina-75-g-1-sht-107965425/?c=750000000',
        isFavorite: false,
        categoryId: 3
    },

    {
        id: 12,
        name: 'Домик для кошек и собак',
        description: '73x73 см, Складной дизайн, портативный.',
        price: 4400,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/hd6/85421882605598.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h7e/hd6/85421882605598.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pcc/p2a/50033676.PNG?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe8/p2a/50033677.PNG?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p04/p2b/50033678.PNG?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/domik-dlja-koshek-i-sobak-73x73-sm-117397530/?c=750000000',
        isFavorite: false,
        categoryId: 3
    },

    {
        id: 13,
        name: 'RMXX игровой комплекс',
        description: 'RMXX игровой комплекс когтеточка для котят и кошек напольная с игрушками, джут, бежевый',
        price: 4990,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p9a/p66/107865346.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p9a/p66/107865346.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pb7/p66/107865347.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pd3/p66/107865348.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pef/p66/107865349.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p77/p69/107865351.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/rmxx-igrovoi-kompleks-kogtetochka-dlja-kotjat-i-koshek-napol-naja-s-igrushkami-dzhut-bezhevyi-150890707/?c=750000000',
        isFavorite: false,
        categoryId: 3
    },

    {
        id: 14,
        name: 'Laser Pointer',
        description: 'Laser Pointer лазер для совместных игр металл',
        price: 1798,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/h50/64086135275550.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h8c/h50/64086135275550.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/ha1/h83/86756764811294.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h7d/h14/86756764876830.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/ha6/hea/86756764942366.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/laser-pointer-lazer-dlja-sovmestnyh-igr-metall-102538485/?c=750000000',
        isFavorite: false,
        categoryId: 3
    },

    {
        id: 15,
        name: 'Корм Jarvi Sterilized',
        description: 'Корм Jarvi Sterilized кусочки в желе индейка 85 г 24 шт',
        price: 14520,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p83/p95/19339783.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p83/p95/19339783.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p66/p95/19339784.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p4a/p95/19339785.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p2e/p95/19339786.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p3b/p0d/19339787.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/jarvi-sterilized-kusochki-v-zhele-indeika-85-g-24-sht-133207350/?c=750000000',
        isFavorite: false,
        categoryId: 3
    },

    {
        id: 16,
        name: 'Groinneya TJ-05 пучковые',
        description: 'Groinneya TJ-05 пучковые C 0.03 мм черный mix 8-16 мм',
        price: 638,
        rating: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa9/p37/10990956.jpeg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa9/p37/10990956.jpeg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/groinneya-tj-05-puchkovye-c-0-03-mm-chernyi-mix-8-16-mm-130803713/?c=750000000',
        isFavorite: false,
        categoryId: 4
    },

    {
        id: 17,
        name: 'Пудра RELOUIS',
        description: 'Пудра RELOUIS HD Powder Fixing transparent рассыпчатая 01 белый',
        price: 2200,
        rating: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/hd0/63967831031838.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h2b/hd0/63967831031838.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h3f/h30/63967833522206.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h59/hc8/63967837257758.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/pudra-relouis-hd-powder-fixing-transparent-rassypchataja-01-belyi-100968225/?c=750000000',
        isFavorite: false,
        categoryId: 4
    },

    {
        id: 18,
        name: 'Pantene',
        description: 'Pantene Интенсивное восстановление шампунь 900 мл',
        price: 4090,
        rating: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p2d/p27/45765034.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p2d/p27/45765034.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p11/p27/45765035.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pf5/p26/45765036.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pd9/p26/45765037.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pbc/p26/45765038.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/pantene-intensivnoe-vosstanovlenie-shampun-900-ml-102202629/?c=750000000',
        isFavorite: false,
        categoryId: 4
    },

    {
        id: 19,
        name: 'Hollow Comb',
        description: 'Hollow Comb массажная расческа 21/8',
        price: 255,
        rating: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h7a/81449624698910.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hc6/h7a/81449624698910.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p87/pd7/67517676.bin?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/hollow-comb-massazhnaja-rascheska-21-8-111063578/?c=750000000',
        isFavorite: false,
        categoryId: 4
    },

    {
        id: 20,
        name: 'HOURGLASS Ambient Lighting Edit Unlocked Palette',
        description: 'HOURGLASS Ambient Lighting Edit Unlocked Palette румяна, бронзер, пудра-хайлайтер, хайлайтер Horse',
        price: 103000,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pe0/65873985.jpeg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pf3/pe0/65873985.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p8a/pdd/65873986.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p20/pda/65873987.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pb6/pd6/65873988.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p4d/pd3/65873989.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/hourglass-ambient-lighting-edit-unlocked-palette-rumjana-bronzer-pudra-hailaiter-hailaiter-horse-145970774/?c=750000000',
        isFavorite: false,
        categoryId: 4
    }
  ];

    getCategories(): Category[] {
        return this.categories;
    }

    getProductsByCategory(categoryId: number): Product[] {
        return this.products.filter(p => p.categoryId === categoryId);
    }

    categories: Category[] = [
        { id: 1, name: 'Phones, gadgets', image: 'assets/categories/phones.png' },
        { id: 2, name: 'Shoes', image: 'assets/categories/shoes.png' },
        { id: 3, name: 'Products for animals', image: 'assets/categories/animals.png' },
        { id: 4, name: 'Beauty, health', image: 'assets/categories/beauty-health.png' }
    ];

    toggleFavorite(productId: number) {
  const product = this.products.find(p => p.id === productId);
  if (product) {
    product.isFavorite = !product.isFavorite;
  }
}

getFavorites(): Product[] {
  return this.products.filter(p => p.isFavorite);
}
}
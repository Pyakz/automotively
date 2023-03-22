import { Vehicle } from "./types";

export const CARS: Vehicle[] = [
  {
    vin: "1HGCM82633A004352",
    make: "Honda",
    model: "Accord",
    year: 2003,
    price: 5999,
    image_url:
      "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/110007426/1HGCY2F55PA005303/c49d4d2011f235a14bf2dea29c377240.png",
    gallery: [
      "https://inv.assets.sincrod.com/1/0/3/31929542301.jpg",
      "https://media.assets.sincrod.com/websites/content/gmps-mike-haggerty/generics/26f838d52e7a4cafb83754bed3cc9e2c_768x460.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/2022-buick-enclave-avenir-109-1622657980.jpg?crop=0.862xw:0.647xh;0.0929xw,0.248xh&resize=1200:*",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxOzTOTfX35ZZnIzP8PmEnTUfa3oAuawkR9QfKwedATsYYhNaYEGW_XLVked-Z7FHWSQ&usqp=CAU",
      "https://tractionlife.com/wp-content/uploads/2021/06/2022-Buick-Enclave-Avenir-016.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
    ],
    ownership_history: [
      {
        owner: "John Doe",
        start_date: "2010-05-15",
        end_date: "2012-08-01",
      },
      {
        owner: "Jane Smith",
        start_date: "2012-08-01",
        end_date: "2016-01-10",
      },
      {
        owner: "Bob Johnson",
        start_date: "2016-01-10",
        end_date: null,
      },
    ],
    accident_history: [
      {
        date: "2015-03-10",
        description:
          "Minor collision with another vehicle. No injuries reported.",
      },
      {
        date: "2018-06-02",
        description:
          "Damage to front bumper from hitting curb. No other vehicles involved.",
      },
    ],
  },
  {
    vin: "3GNAXPEV1JL228357",
    make: "Chevrolet",
    model: "Bolt",
    year: 2018,
    price: 23999,
    image_url:
      "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/model-years/13575-2022-chevrolet-bolt",
    gallery: [
      "https://inv.assets.sincrod.com/1/0/3/31929542301.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
      "https://media.assets.sincrod.com/websites/content/gmps-mike-haggerty/generics/26f838d52e7a4cafb83754bed3cc9e2c_768x460.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
      "https://media.assets.sincrod.com/websites/content/gmps-mike-haggerty/generics/26f838d52e7a4cafb83754bed3cc9e2c_768x460.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/2022-buick-enclave-avenir-109-1622657980.jpg?crop=0.862xw:0.647xh;0.0929xw,0.248xh&resize=1200:*",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxOzTOTfX35ZZnIzP8PmEnTUfa3oAuawkR9QfKwedATsYYhNaYEGW_XLVked-Z7FHWSQ&usqp=CAU",
    ],
    ownership_history: [
      {
        owner: "Mary Johnson",
        start_date: "2018-06-01",
        end_date: "2019-09-30",
      },
      {
        owner: "Mike Adams",
        start_date: "2019-09-30",
        end_date: null,
      },
    ],
    accident_history: [],
  },
  {
    vin: "5GAKRCKD5FJ126865",
    make: "Buick",
    model: "Enclave",
    year: 2015,
    price: 18999,
    image_url:
      "https://www.motortrend.com/uploads/sites/10/2016/07/2017-buick-enclave-convenience-suv-angular-front.png",
    gallery: [
      "https://inv.assets.sincrod.com/1/0/3/31929542301.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
      "https://media.assets.sincrod.com/websites/content/gmps-mike-haggerty/generics/26f838d52e7a4cafb83754bed3cc9e2c_768x460.jpg",
      "https://tractionlife.com/wp-content/uploads/2021/06/2022-Buick-Enclave-Avenir-016.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
      "https://media.assets.sincrod.com/websites/content/gmps-mike-haggerty/generics/26f838d52e7a4cafb83754bed3cc9e2c_768x460.jpg",
    ],
    ownership_history: [
      {
        owner: "David Brown",
        start_date: "2015-03-15",
        end_date: "2018-05-01",
      },
      {
        owner: "Emily Johnson",
        start_date: "2018-05-01",
        end_date: null,
      },
    ],
    accident_history: [
      {
        date: "2016-08-15",
        description:
          "Rear-end collision with another vehicle. Moderate damage.",
      },
      {
        date: "2019-11-22",
        description: "Minor scrape on left side from parking lot accident.",
      },
    ],
  },
  {
    vin: "JTEBU14R768089834",
    make: "Toyota",
    model: "4Runner",
    year: 2006,
    price: 8999,
    image_url:
      "https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dw309d220f/images/model/4Runner/360/ice-cap/23_4Runner_SR5_IceCap_1.png",
    gallery: [
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
      "https://tractionlife.com/wp-content/uploads/2021/06/2022-Buick-Enclave-Avenir-016.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
      "https://media.assets.sincrod.com/websites/content/gmps-mike-haggerty/generics/26f838d52e7a4cafb83754bed3cc9e2c_768x460.jpg",
      "https://tractionlife.com/wp-content/uploads/2021/06/2022-Buick-Enclave-Avenir-016.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
    ],
    ownership_history: [
      {
        owner: "Sarah Lee",
        start_date: "2006-10-01",
        end_date: "2009-11-15",
      },
      {
        owner: "Mark Kim",
        start_date: "2009-11-15",
        end_date: "2012-02-01",
      },
      {
        owner: "Jessica Lee",
        start_date: "2012-02-01",
        end_date: null,
      },
    ],
    accident_history: [
      {
        date: "2007-07-22",
        description:
          "Side collision with another vehicle. Moderate damage to passenger side.",
      },
      {
        date: "2010-04-14",
        description: "Minor scrape on rear bumper from parking lot accident.",
      },
    ],
  },
  {
    vin: "5GAKRCKD5FJ126866",
    make: "Buick",
    model: "Enclave",
    year: 2015,
    price: 18999,
    image_url:
      "https://www.motortrend.com/uploads/sites/10/2016/07/2017-buick-enclave-convenience-suv-angular-front.png",
    gallery: [
      "https://media.assets.sincrod.com/websites/content/gmps-mike-haggerty/generics/26f838d52e7a4cafb83754bed3cc9e2c_768x460.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
      "https://tractionlife.com/wp-content/uploads/2021/06/2022-Buick-Enclave-Avenir-016.jpg",
    ],
    ownership_history: [
      {
        owner: "David Brown",
        start_date: "2015-03-15",
        end_date: "2018-05-01",
      },
      {
        owner: "Emily Johnson",
        start_date: "2018-05-01",
        end_date: null,
      },
    ],
    accident_history: [
      {
        date: "2016-08-15",
        description:
          "Rear-end collision with another vehicle. Moderate damage.",
      },
      {
        date: "2019-11-22",
        description: "Minor scrape on left side from parking lot accident.",
      },
    ],
  },
  {
    vin: "1C4RJFBG2GC473159",
    make: "Jeep",
    model: "Grand Cherokee",
    year: 2016,
    price: 21999,
    image_url:
      "https://www.motortrend.com/uploads/sites/10/2016/07/2017-buick-enclave-convenience-suv-angular-front.png",
    gallery: [
      "https://media.assets.sincrod.com/websites/content/gmps-mike-haggerty/generics/26f838d52e7a4cafb83754bed3cc9e2c_768x460.jpg",
      "https://tractionlife.com/wp-content/uploads/2021/06/2022-Buick-Enclave-Avenir-016.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
      "https://media.assets.sincrod.com/websites/content/gmps-mike-haggerty/generics/26f838d52e7a4cafb83754bed3cc9e2c_768x460.jpg",
      "https://tractionlife.com/wp-content/uploads/2021/06/2022-Buick-Enclave-Avenir-016.jpg",
      "https://cdn.jdpower.com/JDP_2022%20Buick%20Enclave%20Avenir%20Front%20Quarter%20View.jpg",
    ],
    ownership_history: [
      {
        owner: "Chris Davis",
        start_date: "2016-06-15",
        end_date: "2019-07-01",
      },
      {
        owner: "Katie Lee",
        start_date: "2019-07-01",
        end_date: null,
      },
    ],
    accident_history: [
      {
        date: "2017-09-10",
        description:
          "Rear-end collision with another vehicle. No injuries reported.",
      },
    ],
  },
];

console.log(CARS);

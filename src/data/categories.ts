import heroCostaNavarino from "@/assets/hero-costa-navarino.jpg";
import heroBelek from "@/assets/hero-belek.jpg";
import heroMallorca from "@/assets/hero-mallorca.jpg";
import yritykset from "@/assets/business-800.jpg";
import pohjoisenGolfkesa from "@/assets/pohjoisen-golfkesa.jpg";
import golfpassiPoppoo from "@/assets/sinkkumatkat-800.jpg";
import kulinarismi from "@/assets/kulinarismi-800.jpg";
import historiaa from "@/assets/historiaa-800.jpg";
import ladies from "@/assets/ladies-800.jpg";
import seniorit from "@/assets/seniorit-800.jpg";

// New custom generated category images
import longStayCategory from "@/assets/long-stay-category.png";
import shortBreaksCategory from "@/assets/short-breaks-category.png";
import huippukentatCategory from "@/assets/huippukentat-category.png";
import luksusCategory from "@/assets/luksus-category.png";
import luontoCategory from "@/assets/luonto-category.png";
import kaupunkiCategory from "@/assets/kaupunki-category.png";
import proCategory from "@/assets/pro-category.png";
import kisaCategory from "@/assets/kisa-category.png";

export const categoryGroups = [
  {
    title: "Haasta itsesi",
    items: [
      {
        id: "pro",
        title: "Pron matkassa",
        description: "Kehity ammattilaisen vinkeillä ja nauti seurasta matkan jokaisena päivänä.",
        count: 12,
        image: proCategory,
        href: "/teemamatkat/pro"
      },
      {
        id: "kisa",
        title: "Kisamatkat",
        description: "Mittaa tasoasi ja nauti kilpailuhengestä huikeilla kentillä ja samanhenkisessä seurassa.",
        count: 5,
        image: kisaCategory,
        href: "/teemamatkat/kisa"
      }
    ]
  },
  {
    title: "Sopiva irtiotto",
    items: [
      {
        id: "long-stay",
        title: "Long Stay",
        description: "Viihdy pidempään ja asu kuin kotonasi upeissa golfkohteissa.",
        count: 8,
        image: longStayCategory,
        href: "/teemamatkat/long-stay"
      },
      {
        id: "short-breaks",
        title: "Short Breaks",
        description: "3-4 päivän lomat nopeaan irtiottoon arjesta.",
        count: 15,
        image: shortBreaksCategory,
        href: "/teemamatkat/short-breaks"
      }
    ]
  },
  {
    title: "Valitse teema!",
    items: [
      {
        id: "top-courses",
        title: "Huippukentät",
        description: "Pelaa maailman arvostetuimmilla ja tunnetuimmilla kentillä.",
        count: 8,
        image: huippukentatCategory,
        href: "/teemamatkat/top-courses"
      },
      {
        id: "luxury",
        title: "Laatua & luksusta",
        description: "Viiden tähden majoitus ja ensiluokkainen palvelu koko matkan ajan.",
        count: 6,
        image: luksusCategory,
        href: "/teemamatkat/luxury"
      },
      {
        id: "nature",
        title: "Luontoelämyksiä",
        description: "Golfia upeissa ja eksoottisissa luontokohteissa, joissa sielu lepää.",
        count: 4,
        image: luontoCategory,
        href: "/teemamatkat/nature"
      },
      {
        id: "wine",
        title: "Makumatkoja",
        description: "Yhdistä huippugolf, erinomainen ruoka ja maailmanluokan viinialueet.",
        count: 7,
        image: kulinarismi,
        href: "/teemamatkat/wine"
      },
      {
        id: "city",
        title: "Kaupungin vilinää",
        description: "Urbaaneja golfmatkoja lähellä kaupungin sykettä ja palveluita.",
        count: 3,
        image: kaupunkiCategory,
        href: "/teemamatkat/city"
      },
      {
        id: "culture",
        title: "Historian havinaa",
        description: "Golfia historiallisissa ja kulttuurisesti rikkaissa ympäristöissä.",
        count: 2,
        image: historiaa,
        href: "/teemamatkat/culture"
      }
    ]
  },
  {
    title: "Hyvässä seurassa",
    items: [
      {
        id: "women",
        title: "Naisten matkat",
        description: "Hemmottelua ja elämyksiä naisten omilla golfmatkoilla.",
        count: 6,
        image: ladies,
        href: "/teemamatkat/women"
      },
      {
        id: "seniors",
        title: "Seniorimatkat",
        description: "Masters tunnelmaa ja leppoisaa peliä hyvässä seurassa.",
        count: 9,
        image: seniorit,
        href: "/teemamatkat/seniors"
      },
      {
        id: "singles",
        title: "Sinkkumatkat",
        description: "Laatuaikaa ja vapautta muiden golfareiden kanssa.",
        count: 4,
        image: golfpassiPoppoo,
        href: "/teemamatkat/singles"
      },
      {
        id: "corporate",
        title: "Business & pleasure",
        description: "Työ ja huvi tasapainossa - tulokset ja inspiraatio huipussaan.",
        count: 10,
        image: yritykset,
        href: "/teemamatkat/corporate"
      }
    ]
  }
];

// Flat list for the carousel, maintaining all categories
export const flatCategories = categoryGroups.flatMap(group => group.items);

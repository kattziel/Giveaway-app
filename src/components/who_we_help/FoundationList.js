import React from "react";
import { BeneficientsElement } from "../beneficients/BeneficientsElement";

export const FoundationList = ({ activePagination }) => {
  switch (activePagination) {
    case 1:
      return <Page1 />;
    case 2:
      return <Page2 />;
    default:
      return <Page3 />;
  }
};

const Page1 = () => (
  <div>
    <BeneficientsElement
      beneficientsName="Fundacja Dbam o zdrowie - 1"
      beneficientsTarget="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej"
      beneficientsNeeds="ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    />
    <BeneficientsElement
      beneficientsName="Fundacja Dla dzieci - 1"
      beneficientsTarget="Cel i misja: Pomoc dzieciom z ubogich rodzin"
      beneficientsNeeds="ubrania, meble, zabawki"
    />
    <BeneficientsElement
      beneficientsName="Fundacja Bez domu - 1"
      beneficientsTarget="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania"
      beneficientsNeeds="ubrania, jedzenie, ciepłe koce"
    />
  </div>
);

const Page2 = () => (
  <div>
    <BeneficientsElement
      beneficientsName="Fundacja Dbam o zdrowie - 2"
      beneficientsTarget="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej"
      beneficientsNeeds="ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    />
    <BeneficientsElement
      beneficientsName="Fundacja Dla dzieci - 2"
      beneficientsTarget="Cel i misja: Pomoc dzieciom z ubogich rodzin"
      beneficientsNeeds="ubrania, meble, zabawki"
    />
    <BeneficientsElement
      beneficientsName="Fundacja Bez domu - 2"
      beneficientsTarget="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania"
      beneficientsNeeds="ubrania, jedzenie, ciepłe koce"
    />
  </div>
);
const Page3 = () => (
  <div>
    <BeneficientsElement
      beneficientsName="Fundacja Dbam o zdrowie - 3"
      beneficientsTarget="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej"
      beneficientsNeeds="ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    />
    <BeneficientsElement
      beneficientsName="Fundacja Dla dzieci - 3"
      beneficientsTarget="Cel i misja: Pomoc dzieciom z ubogich rodzin"
      beneficientsNeeds="ubrania, meble, zabawki"
    />
    <BeneficientsElement
      beneficientsName="Fundacja Bez domu - 3"
      beneficientsTarget="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania"
      beneficientsNeeds="ubrania, jedzenie, ciepłe koce"
    />
  </div>
);

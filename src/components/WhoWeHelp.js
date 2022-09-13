import React from 'react'
import '../scss/components_scss/WhoWeHelp.scss'
import { BeneficientsElement } from "./beneficients/BeneficientsElement";
import { BeneficientsNumbering } from "./beneficients/BeneficientsNumbering";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";

export default function WhoWeHelp() {
  return (
    <div className="whowehelp-container">

      <div className="whowehelp-first-section">
        <p>Komu pomagamy?</p>
        <Decoration/>
      </div>

      <div className="whowehelp-second-section">
        <div><p>Fundacjom</p></div>
        <div><p>Organizacjom pozarządowym</p></div>
        <div><p>Lokalnym zbiórkom</p></div>
      </div>

      <div className="whowehelp-third-section">
        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Mozesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
      </div>

      <div className="whowehelp-fourth-section">
        <div className="beneficient">
          <BeneficientsElement
          beneficientsName="Fundacja Dbam o zdrowie"
          beneficientsTarget="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej"
          beneficientsNeeds="ubrania, jedzenie, sprzęt AGD, meble, zabawki"
          />
        </div>
        <div className="beneficient">
          <BeneficientsElement
          beneficientsName="Fundacja Dla dzieci"
          beneficientsTarget="Cel i misja: Pomoc dzieciom z ubogich rodzin"
          beneficientsNeeds="ubrania, meble, zabawki"
          />
        </div>
        <div className="beneficient">
        <BeneficientsElement
          beneficientsName="Fundacja Bez domu"
          beneficientsTarget="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania"
          beneficientsNeeds="ubrania, jedzenie, ciepłe koce"
          />
        </div>
      </div>
      <div className="whowehelp-numbering">
        {/* <div>1</div>
        <div>2</div>
        <div>3</div> */}
        <BeneficientsNumbering
        pageNumber="1"
        // end
        // to="/"
        // className={({isActive}) => isActive? 'active' : undefined}
        />
        <BeneficientsNumbering
        pageNumber="2"/>
        <BeneficientsNumbering
        pageNumber="3"/>
      </div>

    </div>
  )
}

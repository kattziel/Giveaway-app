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
      beneficientsName="Foundation Care for health - 1"
      beneficientsTarget="Goal and mission: Helping people in a difficult life situation"
      beneficientsNeeds="clothes, food, household appliances, furniture, toys"
    />
    <BeneficientsElement
      beneficientsName="Foundation For Children - 1"
      beneficientsTarget="
      Goal and mission: Helping children from poor families"
      beneficientsNeeds="clothes, furniture, toys"
    />
    <BeneficientsElement
      beneficientsName="Foundation Homeless - 1"
      beneficientsTarget="
      Goal and mission: Help for people without a place of residence"
      beneficientsNeeds="clothes, food, warm blankets"
    />
  </div>
);

const Page2 = () => (
  <div>
    <BeneficientsElement
      beneficientsName="Foundation Care for health - 2"
      beneficientsTarget="Goal and mission: Helping people in a difficult life situation"
      beneficientsNeeds="clothes, food, household appliances, furniture, toys"
    />
    <BeneficientsElement
      beneficientsName="Foundation For Children - 2"
      beneficientsTarget="
      Goal and mission: Helping children from poor families"
      beneficientsNeeds="clothes, furniture, toys"
    />
    <BeneficientsElement
      beneficientsName="Foundation Homeless - 2"
      beneficientsTarget="
      Goal and mission: Help for people without a place of residence"
      beneficientsNeeds="clothes, food, warm blankets"
    />
  </div>
);
const Page3 = () => (
  <div>
    <BeneficientsElement
      beneficientsName="Foundation Care for health - 3"
      beneficientsTarget="Goal and mission: Helping people in a difficult life situation"
      beneficientsNeeds="clothes, food, household appliances, furniture, toys"
    />
    <BeneficientsElement
      beneficientsName="Foundation For Children - 3"
      beneficientsTarget="
      Goal and mission: Helping children from poor families"
      beneficientsNeeds="clothes, furniture, toys"
    />
    <BeneficientsElement
      beneficientsName="Foundation Homeless - 3"
      beneficientsTarget="
      Goal and mission: Help for people without a place of residence"
      beneficientsNeeds="clothes, food, warm blankets"
    />
  </div>
);

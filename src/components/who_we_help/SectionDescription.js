import React from "react";

export const SectionDescription = ({ activeSection }) => {
  switch (activeSection) {
    case "foundation":
      return (
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Mozesz sprawdzić, czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
      );

    case "organization":
      return (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      );
    default:
      return (
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      );
  }
};

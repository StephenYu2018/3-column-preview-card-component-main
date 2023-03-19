window.onload = function() {
  const component = document.querySelector('article');
  component.append(
    makeCard('Sedans', 'Choose a sedan for its affordability and excellent '
      + 'fuel economy. Ideal for cruising in the city or on your next road '
      + 'trip.', 'brightOrange'),
    makeCard('SUVs', 'Take an SUV for its spacious interior, power, and '
      + 'versatility. Perfect for your next family vacation and off-road '
      + 'adventures.', 'darkCyan'),
    makeCard('Luxury', 'Cruise in the best car brands without the bloated '
      + 'prices. Enjoy the enhanced comfort of a luxury rental and arrive '
      + 'in style.', 'veryDarkCyan')
  );
};

function makeCard(carType, summary, primaryColor) {
  const colorVariants = {
    background: {
      brightOrange: 'bg-bright-orange',
      darkCyan: 'bg-dark-cyan',
      veryDarkCyan: 'bg-very-dark-cyan',
    },
    text: {
      brightOrange: 'text-bright-orange',
      darkCyan: 'text-dark-cyan',
      veryDarkCyan: 'text-very-dark-cyan',
    }
  };

  const card = document.createElement('article');
  card.className = `${colorVariants.background[primaryColor]} w-[21.667rem] `
    + 'h-auto p-[3.067rem] space-y-[1.8rem]';
  
  card.append(makeCardInfo(), makeLearnMoreButton())
  return card;

  function makeCardInfo() {
    const cardInfo = document.createElement('section');
    cardInfo.append(makeIcon(), makeHeading(), makeParagraph());
    return cardInfo;

    function makeIcon() {
      const icon = document.createElement('img');
      icon.src = `./images/icon-${carType.toLowerCase()}.svg`;
      icon.alt = `${carType} Car icon`;
      icon.className = 'h-auto w-auto';
      return icon;
    }

    function makeHeading() {
      const heading = document.createElement('h1');
      heading.className = 'font-big-shoulders-display font-bold text-[2.6rem] '
        + 'text-very-light-gray uppercase mt-[1.8rem]';
      heading.innerHTML = carType;
      return heading;
    }

    function makeParagraph() {
      const paragraph = document.createElement('p');
      paragraph.className = 'font-lexend-deca font-normal text-base '
        + 'text-transparent-white leading-relaxed mt-[1.6rem]';
      paragraph.innerHTML = summary;
      return paragraph;
    }
  }

  function makeLearnMoreButton() {
    const button = document.createElement('button');
    button.className = 'bg-very-light-gray rounded-full px-[1.933rem] '
      + 'py-[0.8rem] font-lexend-deca font-normal text-base '
      + `${colorVariants.text[primaryColor]}`;
    button.type = 'button';
    button.innerHTML = 'Learn More';
    return button;
  }
}
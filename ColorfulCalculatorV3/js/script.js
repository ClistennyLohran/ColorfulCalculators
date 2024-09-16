window.onload = () => {
  let calculatorColor = document.getElementById('calculatorColor');
  let screenButtonsColor = document.getElementById('screenButtonsColor');
  let operatorsColor = document.getElementById('operatorsColor');
  let backgroundColor = document.getElementById('backgroundColor');
  let spaceAndOperatorsFontColor = document.getElementById('spaceAndOperatorsFontColor');
  let normalFontColor = document.getElementById('normalFontColor');

  let root = document.documentElement;
  let storageColor = "";

  let insideInput = false;

  calculatorColor.oninput = () => {
    root.style.setProperty('--calculatorColor', calculatorColor.value);
    insideInput = true;
  }
  calculatorColor.blur = () => {
    insideInput = false;
  }
  calculatorColor.onmouseenter = () => {
    storageColor = root.style.getPropertyValue('--calculatorColor');
    root.style.setProperty('--calculatorColor', '#ff0000a4');
  }
  calculatorColor.onmouseleave = () => {
    if(!insideInput) {
      root.style.setProperty('--calculatorColor', storageColor);
    } else {
      insideInput = false;
    }
  }

  screenButtonsColor.oninput = () => {
    root.style.setProperty('--screenButtonsColor', screenButtonsColor.value);
    insideInput = true;
  }
  screenButtonsColor.blur = () => {
    insideInput = false;
  }
  screenButtonsColor.onmouseenter = () => {
    storageColor = root.style.getPropertyValue('--screenButtonsColor');
    root.style.setProperty('--screenButtonsColor', '#ff0000a4');
  }
  screenButtonsColor.onmouseleave = () => {
    if(!insideInput) {
      root.style.setProperty('--screenButtonsColor', storageColor);
    } else {
      insideInput = false;
    }
  }

  operatorsColor.oninput = () => {
    root.style.setProperty('--operatorsColor', operatorsColor.value);
    insideInput = true;
  }
  operatorsColor.blur = () => {
    insideInput = false;
  }
  operatorsColor.onmouseenter = () => {
    storageColor = root.style.getPropertyValue('--operatorsColor');
    root.style.setProperty('--operatorsColor', '#ff0000a4');
  }
  operatorsColor.onmouseleave = () => {
    if(!insideInput) {
      root.style.setProperty('--operatorsColor', storageColor);
    } else {
      insideInput = false;
    }
  }

  backgroundColor.oninput = () => {
    root.style.setProperty('--backgroundColor', backgroundColor.value);
    insideInput = true;
  }
  backgroundColor.blur = () => {
    insideInput = false;
  }
  backgroundColor.onmouseenter = () => {
    storageColor = root.style.getPropertyValue('--backgroundColor');
    root.style.setProperty('--backgroundColor', '#ff0000a4');
  }
  backgroundColor.onmouseleave = () => {
    if(!insideInput) {
      root.style.setProperty('--backgroundColor', storageColor);
    } else {
      insideInput = false;
    }
  }

  spaceAndOperatorsFontColor.oninput = () => {
    root.style.setProperty('--spaceAndOperatorsFontColor', spaceAndOperatorsFontColor.value);
    insideInput = true;
  }
  spaceAndOperatorsFontColor.blur = () => {
    insideInput = false;
  }
  spaceAndOperatorsFontColor.onmouseenter = () => {
    storageColor = root.style.getPropertyValue('--spaceAndOperatorsFontColor');
    root.style.setProperty('--spaceAndOperatorsFontColor', '#ff0000a4');
  }
  spaceAndOperatorsFontColor.onmouseleave = () => {
    if(!insideInput) {
      root.style.setProperty('--spaceAndOperatorsFontColor', storageColor);
    } else {
      insideInput = false;
    }
  }

  normalFontColor.oninput = () => {
    root.style.setProperty('--normalFontColor', normalFontColor.value);
    insideInput = true;
  }
  normalFontColor.blur = () => {
    insideInput = false;
  }
  normalFontColor.onmouseenter = () => {
    storageColor = root.style.getPropertyValue('--normalFontColor');
    root.style.setProperty('--normalFontColor', '#ff0000a4');
  }
  normalFontColor.onmouseleave = () => {
    if(!insideInput) {
      root.style.setProperty('--normalFontColor', storageColor);
    } else {
      insideInput = false;
    }
  }
}
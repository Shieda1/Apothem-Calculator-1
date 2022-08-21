// https://calculator.swiftutors.com/apothem-calculator.html

// calculations not working and there is another part of this calculator

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const apothemofPolygonRadio = document.getElementById('apothemofPolygonRadio');
const lengthofanySideofPolygonRadio = document.getElementById('lengthofanySideofPolygonRadio');
const numberofSidesofaPolygonRadio = document.getElementById('numberofSidesofaPolygonRadio');

let apothemofPolygon;
let lengthofanySideofPolygon = v1;
let numberofSidesofaPolygon = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

apothemofPolygonRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of any Side of Polygon';
  variable2.textContent = 'Number of Sides of a Polygon';
  lengthofanySideofPolygon = v1;
  numberofSidesofaPolygon = v2;
  result.textContent = '';
});

lengthofanySideofPolygonRadio.addEventListener('click', function() {
  variable1.textContent = 'Apothem of Polygon';
  variable2.textContent = 'Number of Sides of a Polygon';
  apothemofPolygon = v1;
  numberofSidesofaPolygon = v2;
  result.textContent = '';
});

numberofSidesofaPolygonRadio.addEventListener('click', function() {
  variable1.textContent = 'Apothem of Polygon';
  variable2.textContent = 'Length of any Side of Polygon';
  apothemofPolygon = v1;
  lengthofanySideofPolygon = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(apothemofPolygonRadio.checked)
    result.textContent = `Apothem of Polygon = ${computeApothemofPolygon().toFixed(2)}`;

  else if(lengthofanySideofPolygonRadio.checked)
    result.textContent = `Length of any Side of Polygon = ${computeLengthofanySideofPolygon().toFixed(2)}`;

  else if(numberofSidesofaPolygonRadio.checked)
    result.textContent = `Number of Sides of a Polygon = ${computeNumberofSidesofaPolygon().toFixed(2)}`;
})

// calculation

function computeApothemofPolygon() {
  return Number(lengthofanySideofPolygon.value) / (2 * Math.tan(180 / Number(numberofSidesofaPolygon.value)));
}

function computeLengthofanySideofPolygon() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeNumberofSidesofaPolygon() {
  return Number(decliningBalanceDepreciation.value) / Number(depreciationRate.value);
}
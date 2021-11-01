import React, { useState } from 'react'
import { data } from './data'
import { dietFunc, naturalGasFunc, electricityFunc, fuelOilFunc, propaneFunc, wasteFunc, carFunc, flightFunc } from './functions'

function App() {
  const [diet, setDiet] = useState(0)
  const [naturalGas, setNaturalGas] = useState('')
  const [electricity, setElectricity] = useState('')
  const [fuelOil, setFuelOil] = useState('')
  const [propane, setPropane] = useState('')
  const [waste, setWaste] = useState('')
  const [car, setCar] = useState('')
  const [flight, setFlight] = useState('')
  const [emission, setEmission] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = [diet, naturalGas, electricity, fuelOil, propane, waste, car, flight]
    var sum = 0
    for (var i = 0; i < values.length; i++){
      sum += parseFloat(values[i])
    }
    setEmission(sum)
    window.scrollTo(0,document.body.scrollHeight);
  }

  return(
      <div className="app">
        <div className="main">
          <div className="title">
            <p>Carbon Footprint Calculator</p>
          </div>
          <div className="slogan">
            <b>Understand your carbon emission</b>
          </div>
          <form className="input" onSubmit={handleSubmit}>
            <div className="input-box">
              <div className="diet">
                <p className="questions">
                  How would you categorize your diet?
                </p>
                <div className="answers">
                  <div className="block" id="block-11">
                    <label htmlFor="option-00">
                    <input type="radio" name="diet" value={data[0].option0.toString()} id="option-00" onChange={(e) => setDiet(e.target.value)}/>
                      Meat Lover
                    </label>
                    <label htmlFor="option-01">
                      <input type="radio" name="diet" value={data[0].option1.toString()} id="option-01" onChange={(e) => setDiet(e.target.value)}/>
                      Average
                    </label>
                    <label htmlFor="option-02">
                      <input type="radio" name="diet" value={data[0].option2.toString()} id="option-02" onChange={(e) => setDiet(e.target.value)}/>
                      No Beef
                    </label>
                    <label htmlFor="option-03">
                      <input type="radio" name="diet" value={data[0].option3.toString()} id="option-03" onChange={(e) => setDiet(e.target.value)}/>
                      Vegetarian
                    </label>
                    <label htmlFor="option-04">
                      <input type="radio" name="diet" value={data[0].option4.toString()}id="option-04" onChange={(e) => setDiet(e.target.value)}/>
                      Vegan
                    </label>
                  </div>
                </div>
              </div>
              <div className="natural-gas">
                <p className="questions">
                  How would you categorize your natural gas use (residential energy consumption)?
                </p>
                <div className="answers">
                  <div className="block" id="block-11">
                    <label htmlFor="option-10">
                      <input type="radio" name="natural-gas" value={data[1].option0.toString()} id="option-10" onChange={(e) => setNaturalGas(e.target.value)}/>
                      Below Average (1605 m<sup>3</sup>/month)
                    </label>
                    <label htmlFor="option-11">
                      <input type="radio" name="natural-gas" value={data[1].option1.toString()} id="option-11" onChange={(e) => setNaturalGas(e.target.value)}/>
                      Average (2140 m<sup>3</sup>/month)
                    </label>
                    <label htmlFor="option-12">
                      <input type="radio" name="natural-gas" value={data[1].option2.toString()} id="option-12" onChange={(e) => setNaturalGas(e.target.value)}/>
                      Above Average (2675 m<sup>3</sup>/month)
                    </label>
                  </div>
                </div>
              </div>
              <div className="electrcity">
                <p className="questions">
                  How would you categorize your electricity use?
                </p>
                <div className="answers">
                  <div className="block" id="block-11">
                    <label htmlFor="option-20">
                      <input type="radio" name="electricity" value={data[2].option0.toString()} id="option-20" onChange={(e) => setElectricity(e.target.value)}/>
                      Below Average (275 kWh/month)
                    </label>
                    <label htmlFor="option-21">
                      <input type="radio" name="electricity" value={data[2].option1.toString()} id="option-21" onChange={(e) => setElectricity(e.target.value)}/>
                      Average (367 kWh/month)
                    </label>
                    <label htmlFor="option-22">
                      <input type="radio" name="electricity" value={data[2].option2.toString()} id="option-22" onChange={(e) => setElectricity(e.target.value)}/>
                      Above Average (459 kWh/month)
                    </label>
                  </div>
                </div>
              </div>
              <div className="fuel-oil">
                <p className="questions">
                  How would you categorize your use of fuel oil (heat your home and car)?
                </p>
                <div className="answers">
                  <div className="block" id="block-11">
                    <label htmlFor="option-30">
                      <input type="radio" name="fuel-oil" value={data[3].option0.toString()} id="option-30" onChange={(e) => setFuelOil(e.target.value)}/>
                      Zero
                    </label>
                    <label htmlFor="option-31">
                      <input type="radio" name="fuel-oil" value={data[3].option1.toString()} id="option-31" onChange={(e) => setFuelOil(e.target.value)}/>
                      Below Average (34.5 gallons/month)
                    </label>
                    <label htmlFor="option-32">
                      <input type="radio" name="fuel-oil" value={data[3].option2.toString()} id="option-32" onChange={(e) => setFuelOil(e.target.value)}/>
                      Average (46 gallons/month)
                    </label>
                    <label htmlFor="option-33">
                      <input type="radio" name="fuel-oil" value={data[3].option3.toString()} id="option-33" onChange={(e) => setFuelOil(e.target.value)}/>
                      Above Average (57.5 gallons/month)
                    </label>
                  </div>
                </div>
              </div>
              <div className="propane">
                <p className="questions">
                  How would you categorize your use of propane (water heating, cooking, refrigerating, clothes drying)?
                </p>
                <div className="answers">
                  <div className="block" id="block-11">
                    <label htmlFor="option-40">
                      <input type="radio" name="propane" value={data[4].option0.toString()} id="option-40" onChange={(e) => setPropane(e.target.value)}/>
                      Zero
                    </label>
                    <label htmlFor="option-41">
                      <input type="radio" name="propane" value={data[4].option1.toString()} id="option-41" onChange={(e) => setPropane(e.target.value)}/>
                      Below Average (29.25 gallons/month)
                    </label>
                    <label htmlFor="option-42">
                      <input type="radio" name="propane" value={data[4].option2.toString()} id="option-42" onChange={(e) => setPropane(e.target.value)}/>
                      Average (39 gallons/month)
                    </label>
                    <label htmlFor="option-43">
                      <input type="radio" name="propane" value={data[4].option3.toString()} id="option-43" onChange={(e) => setPropane(e.target.value)}/>
                      Above Average (48.75 gallons/month)
                    </label>
                  </div>
                </div>
              </div>
              <div className="waste">
                <p className="questions">
                  How would you categorize your waste (liquid, solid, organic, recyclable, hazardou)?
                </p>
                <div className="answers">
                  <div className="block" id="block-11">
                    <label htmlFor="option-50">
                      <input type="radio" name="waste" value={data[5].option0.toString()} id="option-50" onChange={(e) => setWaste(e.target.value)}/>
                      I don't recycle
                    </label>
                    <label htmlFor="option-51">
                      <input type="radio" name="waste" value={data[5].option1.toString()} id="option-51" onChange={(e) => setWaste(e.target.value)}/>
                      I recycle around half of my recyclable waste, including metal, plastic, glass, and paper
                    </label>
                    <label htmlFor="option-52">
                      <input type="radio" name="waste" value={data[5].option2.toString()} id="option-52" onChange={(e) => setWaste(e.target.value)}/>
                      I recycle all of my recyclable waste, including metal, plastic, glass, and paper
                    </label>
                  </div>
                </div>
              </div>
              <div className="car">
                <p className="questions">
                  How often do you drive your car?
                </p>
                <div className="answers">
                  <div className="block" id="block-11">
                    <label htmlFor="option-60">
                      <input type="radio" name="car" value={data[6].option0.toString()} id="option-60" onChange={(e) => setCar(e.target.value)}/>
                      I don't drive a car
                    </label>
                    <label htmlFor="option-61">
                      <input type="radio" name="car" value={data[6].option1.toString()} id="option-61" onChange={(e) => setCar(e.target.value)}/>
                      I sometimes drive a car 
                    </label>
                    <label htmlFor="option-62">
                      <input type="radio" name="car" value={data[6].option2.toString()} id="option-62" onChange={(e) => setCar(e.target.value)}/>
                      Average
                    </label>
                    <label htmlFor="option-63">
                      <input type="radio" name="car" value={data[6].option3.toString()} id="option-63" onChange={(e) => setCar(e.target.value)}/>
                      I drive a car all the time
                    </label>
                  </div>
                </div>
              </div>
              <div className="flight">
                <p className="questions">
                  What's your approximate flight distance for one year? (Average: 816.63 miles)
                </p>
                <div className="answers">
                  <div className="block" id="block-11">
                    <label htmlFor="option-70">
                      <input type="radio" name="flight" value={data[7].option0.toString()} id="option-70" onChange={(e) => setFlight(e.target.value)}/>
                      0
                    </label>
                    <label htmlFor="option-71">
                      <input type="radio" name="flight" value={data[7].option1.toString()} id="option-71" onChange={(e) => setFlight(e.target.value)}/>
                      612 miles
                    </label>
                    <label htmlFor="option-72">
                      <input type="radio" name="flight" value={data[7].option2.toString()} id="option-72" onChange={(e) => setFlight(e.target.value)}/>
                      817 miles (Average)
                    </label>
                    <label htmlFor="option-73">
                      <input type="radio" name="flight" value={data[7].option3.toString()} id="option-73" onChange={(e) => setFlight(e.target.value)}/>
                      1021 miles
                    </label>
                    <label htmlFor="option-74">
                      <input type="radio" name="flight" value={data[7].option4.toString()} id="option-74" onChange={(e) => setFlight(e.target.value)}/>
                      2450 miles
                    </label>
                    <label htmlFor="option-75">
                      <input type="radio" name="flight" value={data[7].option5.toString()} id="option-75" onChange={(e) => setFlight(e.target.value)}/>
                      4083 miles
                    </label>
                    <label htmlFor="option-76">
                      <input type="radio" name="flight" value={data[7].option6.toString()} id="option-76" onChange={(e) => setFlight(e.target.value)}/>
                      8166 miles
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn">
              <button type="submit">Calculate</button>
            </div>
          </form>
          <div className="result">
            <div className="result-box">
              Your annual emission is {emission.toFixed(2)} metric tons or {(emission * 2204.62).toFixed(0)} lbs of CO2
              <br />
              Average: 12.32 metric tons
              <br />
              <br />
              Your emission requires {(emission * 2204.62 / 48).toFixed(0)} trees
                <span class="material-icons">
                  park
                </span>
                <span class="material-icons">
                  park
                </span>
                <span class="material-icons">
                 park
                </span>
              to absorb
              <br />
              But...
            </div>
          </div>
          <div className="improvement">
            <div className="improvement-box">
              <p>
                Based on your answers, you can do these to help the planet:
              </p>
              <ul>
                {dietFunc(diet)}
                {naturalGasFunc(naturalGas)}
                {electricityFunc(electricity)}
                {fuelOilFunc(fuelOil)}
                {propaneFunc(propane)}
                {wasteFunc(waste)}
                {carFunc(car)}
                {flightFunc(flight)}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

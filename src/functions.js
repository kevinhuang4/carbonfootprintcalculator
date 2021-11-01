import { data } from './data'

export function dietFunc(diet) {
    if(parseFloat(diet) >= data[0].option1){
        return <li>Eat more plant-based food</li>
    }
}

export function naturalGasFunc(naturalGas) {
    if(parseFloat(naturalGas) >= data[1].option1) {
        return <li>Use less natural gas by using cold water for washing when possible, heating your house less frequently, installing programmable thermostats...</li>
    }
}

export function electricityFunc(electricity) {
    if(parseFloat(electricity) >= data[2].option1) {
        return <li>Use less electricity by turning off unnecessary water, lights and AC, unpluging unused electronics, running full loads in laundry...</li>
    }
}

export function fuelOilFunc(fuelOil) {
    if(parseFloat(fuelOil) >= data[3].option2) {
        return <li>Use less fuel oils by heating your home or using furnaces less frequently</li>
    }
}

export function propaneFunc(propane) {
    if(parseFloat(propane) >= data[4].option2) {
        return <li>Use less propane by sealing air leaks, lowering hot water thermostat, and closing doors in unused rooms</li>
    }
}

export function wasteFunc(waste) {
    if(parseFloat(waste) >= data[5].option1) {
        return <li>Recycle more (batteries, beverage containers, electronics, hazardous waste, metals, papers, plastics, food waste) and buy more recycled products</li>
    }
}

export function carFunc(car) {
    if(parseFloat(car) >= data[6].option2) {
        return <li>Drive less. Walk, cycle, and take public transportation more</li>
    }
}

export function flightFunc(flight) {
    if(parseFloat(flight) >= data[7].option2) {
        return <li>Reduce unnecessary flights and switch to other transportations like trains and buses</li>
    }
}


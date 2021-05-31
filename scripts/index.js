"use strict"

let cityStates = [{
        state: "California",
        stateAbbr: "CA",
        cities: ["Los Angeles", "San Francisco", "San Diego"]
    },
    {
        state: "Colorado",
        stateAbbr: "CO",
        cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
    },
    {
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Austin", "Dallas", "Houston", "San Antonio"]
    }
];

window.onload = function () {
    loadStateSelection();
    loadCitySelection();
}

function loadStateSelection() {
    const stateSelectionDropdown = document.getElementById("stateSelection");
    let selectOneOption = new Option("Select One... ", "");
    stateSelectionDropdown.appendChild(selectOneOption);

    let length = cityStates.length;
    for (let i = 0; i < length; i++) {
        let stateOption = document.createElement("option");
        stateOption.textContent = cityStates[i].state;
        stateOption.value = cityStates[i].stateAbbr;

        stateSelectionDropdown.appendChild(stateOption);
    }
}

function loadCitySelection() {
    const citySelectionDropdown = document.getElementById("citySelection");
    const stateSelectionDropdown = document.getElementById("stateSelection");
    // let stateSelected = cityStates.find(arrayElement => arrayElement.stateAbbr == stateSelectionDropdown.value);
    let stateSelected = stateSelectionDropdown.value;
    console.log(stateSelected);
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == stateSelected);

    if (matchingState != "") {
        for (let i = 0; i < matchingState.cities.length; i++) {
            let cityOptions = document.createElement("option");
            cityOptions.textContent = matchingState.cities[i];
            citySelectionDropdown.appendChild("cityOptions");
        }
    } else {
        alert = "Please select a valid state";
        return;
    }
}
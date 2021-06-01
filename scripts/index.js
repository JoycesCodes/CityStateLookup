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
    document.getElementById("stateSelection").onchange = loadCitySelection;
    document.getElementById("citySelection").onchange = loadCityStatePara;
}

const citySelectionDropdown = document.getElementById("citySelection");
const stateSelectionDropdown = document.getElementById("stateSelection");

//function to create list of states from the array
function loadStateSelection() {
    let selectOneOption = new Option("Select One... ", "");
    stateSelectionDropdown.appendChild(selectOneOption);

    let length = cityStates.length;
    for (let i = 0; i < length; i++) {
        let stateOption = document.createElement("option");
        // stateOption.textContent = cityStates[i].state;
        // stateOption.value = cityStates[i].stateAbbr;
        // changed to abbr. version to practice
        stateOption = new Option(cityStates[i].state, cityStates[i].stateAbbr)
        stateSelectionDropdown.appendChild(stateOption);
    }
}

//onchange function
function loadCitySelection() {
    //city selection is always empty until something is changed
    let stateSelected = stateSelectionDropdown.value;
    citySelectionDropdown.length = 0;

    //alert to ensure that a proper state is selected
    if (stateSelected === "") {
        alert("Please select a state to view its cities.");
        return;
    }
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr === stateSelected);
    if (matchingState !== null) {
        let selectCityOption = new Option("Select a City...","");
        citySelectionDropdown.appendChild(selectCityOption);
        for (let i = 0; i < matchingState.cities.length; i++) {
            let cityOptions = document.createElement("option");
            // cityOptions.textContent = matchingState.cities[i];
            // cityOptions.value = matchingState.cities[i];
            // changed to abbr. version to practice
            cityOptions = new Option(matchingState.cities[i], matchingState[i])
            citySelectionDropdown.appendChild(cityOptions);
        }
    }
}

function loadCityStatePara(){
    const cityStatePara = document.getElementById("cityStatePara");
    cityStatePara.innerHTML = "";
    let stateSelected = stateSelectionDropdown.value;
    let citySelected = citySelectionDropdown.value;
    if(stateSelected === ""){
        return;
    }
    let selectedStateIndex = stateSelectionDropdown.selectedIndex;
    let selectedState = stateSelectionDropdown.options[selectedStateIndex].text;

    cityStatePara.innerHTML = citySelected+", "+selectedState;

}
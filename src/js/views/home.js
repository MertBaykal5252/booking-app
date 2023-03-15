import { GlobalState } from "../core/state";
import { useDatePicker } from "../datepicker";
import { fetchLocations, fetchSession } from "../services/locations";
import { HomeTemplate } from "./home.template";

export class HomeView {
  swapInputs() {
    const inputFrom = this.getById("from");
    const inputDestination = this.getById("destination");
    const temp = inputFrom.value;

    inputFrom.value = inputDestination.value;
    inputDestination.value = temp;

    GlobalState.location = {
      ...GlobalState.location,
      from: inputFrom.value,
      to: inputDestination.value,
    };
  }

  // Template üzerindeki gerekli eventleri ata
  bindEvents() {
    const switchDestination = this.get(".js-switch-dest");
    const findTicket = this.getById("js-find-ticket");
    const datePicker = this.getById("datepicker");

    switchDestination.on("click", (e) => this.swapInputs(e));
    findTicket.on("click", () => {
      GlobalState.location.date = datePicker.value;
      console.log(GlobalState.json)
    });
  }

  // View çalıştırıldığında
  mount() {
    GlobalState.location = {
      from: "",
      to: "",
      date: "",
    };

    fetchSession().then((currentSession) => {
      //GlobalState.currentSession = currentSession;
      console.log(currentSession);
    });

  //  fetchLocations().then(data=>console.log(data));

    // Filtered data value to main value
    const searchContainers = this.getAll(".booking__form-item.-search");

    searchContainers.forEach((searchItem) => {
      const searchInput = searchItem.get(".search-input");
      const searchResults = searchItem.get(".booking__form-item_filtered");

      searchInput.addEventListener("input", () => {
        const inputValue = searchInput.value.trim();
        if (inputValue.length > 0) {
          searchResults.style.display = "block";
        } else {
          searchResults.style.display = "none";
        }
      });

      searchResults.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
          const clickedValue = event.target.textContent;
          searchInput.value = clickedValue;
          GlobalState.location = {
            ...GlobalState.location,
            [searchInput.name]: searchInput.value,
          };
          searchResults.style.display = "none";
        }
      });
    });

    this.bindEvents();

    useDatePicker();
  }

  unmount() {
    console.log("Kaldırıldı");
  }

  render() {
    return HomeTemplate();
  }
}

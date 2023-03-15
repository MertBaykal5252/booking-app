export const HomeTemplate = () => `
    <div class="booking">
    <div class="booking__wrapper container">
      <div class="booking__form">
        <div class="booking__form-items">
            <div class="booking__form-item -search">
                <input type="search" name="from" id="from" class="search-input" required/>
                <span class="floating-label">Nereden</span>
                <ul class="booking__form-item_filtered" style="display: none;">
                    <li class="filtered-item">İstanbul</li>
                    <li class="filtered-item">Ankara</li>
                    <li class="filtered-item">İzmir</li>
                </ul>
            </div>

            <div class="booking__form-item -search">
                <input type="search" name="to" id="destination" class="search-input" required/>
                <span class="floating-label">Nereye</span>
                <ul class="booking__form-item_filtered" style="display: none;">
                    <li class="filtered-item">İstanbul</li>
                    <li class="filtered-item">Ankara</li>
                    <li class="filtered-item">İzmir</li>
                </ul>
            </div>

            <div class="booking__form-item_swap">
                <button type="button" class="js-switch-dest">SWICTH</button>
            </div>
        </div>

        <div class="booking__form-items -date">
            <div class="booking__form-item -date">
                <input type="text" name="date" id="datepicker" value="" required />
                <span class="floating-label">Tarih</span>
            </div>
            <div class="booking__form-quickdate">
                <a href="#" id="today">Bugün</a>
                <a href="#" id="tomorrow">Yarın</a>
            </div>
        </div>

        <div class="booking__form-button">
            <button id="js-find-ticket">Bileti Bul</button>
        </div>
      </div>
    </div>
  
    <div class="booking__content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolores iusto distinctio reiciendis ut fugiat consequatur cum blanditiis. Pariatur, quibusdam veniam velit voluptatum tempora quod sapiente perferendis vero illum numquam.
    </div>
  </div>
  `;

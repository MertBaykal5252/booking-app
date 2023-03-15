const { routes } = require("../routes");

// Router Module
((root) => {
  // Mevcut açık olan view nesnesi
  let currentView = null;

  // Mevcut değişen url bilgisi
  let currentURL = location.hash ? location.hash.slice(1) : location.pathname;

  // URL değişikliği istendiğinde çalıştırılacak fonksiyon
  const changeView = (url) => {
    // Görüntülenmek istenen url bilgisine sahip view nesnesini bul
    const findView = routes.find((route) => route.url == url);

    if (findView) {
      currentURL = url;

      // Önceki açık olan view nesnesi varsa, kaldırılması istenen method veya işlemleri çalıştır
      currentView?.unmount();

      // Görüntülenmek istenen yeni view nesnesini örnekle
      currentView = new findView.view();

      // Görüntülenmek istenen view nesnesinin template datasını ekranda göster
      root.innerHTML = currentView.render();

      currentView.template = Object.freeze(root);

      currentView.get = (selector)=> root.querySelector(selector);
      currentView.getById = (name)=> root.querySelector(`#${name}`);
      currentView.getAll = (selector) => root.querySelectorAll(selector);

      // Görüntülenmek istenne view nesnesi için başlangıçta çalıştırılması istenen işlemleri başlat
      currentView.mount();
    }
  };

  // URL Hash bilgisi değiştiğinde ilgili view nesnelerini görüntüle
  window.addEventListener("hashchange", function (e) {
    changeView(location.hash.slice(1));
  });

  // Uygulama başladığında url bilgisine göre ilgili view nesnesini bul ve çalıştır
  changeView(currentURL);
})(document.getElementById("root"));

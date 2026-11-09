function commander(produit) {
  let message = "Bonjour Boutique Khadim, je veux commander : " + produit;
  let url = "https://wa.me/221783542249?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
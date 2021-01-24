function smoothTo(section) {
  document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  activeMenuLinkBasedOnSection('#contactLink', '#contactSection');
  activeMenuLinkBasedOnSection('#aboutLink', '#aboutSection');
  activeMenuLinkBasedOnSection('#profileLink', '#profileSection');
});

function activeMenuLinkBasedOnSection(linkId, sectionId) {
  var section = document.querySelector(sectionId).getBoundingClientRect();
  if(section.top >= 0 && section.bottom <= window.innerHeight) {
    $(".menu-link").removeClass('text-secondary').addClass('text-white');
    $(linkId).addClass('text-secondary');
  }
}
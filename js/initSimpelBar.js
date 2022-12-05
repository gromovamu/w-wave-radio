let playlistsSimpleBar = null;

function createSimpleBar () {
  if ( ( playlistsSimpleBar == null ) && ( document.documentElement.clientWidth < 576 ) ) {
    let form = document.querySelector('.playlists__choice-form');

    form.setAttribute('data-simplebar','');

    new SimpleBar(form, {
      autoHide: false,
      forceVisible: 'x',
    });
  }
}

createSimpleBar ();

window.addEventListener('resize', function() {
  createSimpleBar();
});








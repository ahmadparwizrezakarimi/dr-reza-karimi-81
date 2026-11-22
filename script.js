
/* A.P.R.K 3D UNIVERSE LAYER */
#universe {
  position: fixed;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.noise,
.cursor-glow {
  pointer-events: none;
}

.intro-screen,
.topbar,
main,
footer,
.back-top,
.toast {
  position: relative;
  z-index: 2;
}

#universe {
  touch-action: pan-y;
}

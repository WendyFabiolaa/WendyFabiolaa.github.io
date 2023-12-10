let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #621e33;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #4a081e;">Soy estudiante de Ingeniería de Software</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

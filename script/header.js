document.getElementById("header").innerHTML = `
    <a href="#" class="logo">
    <span>LOGO</span>
    </a>
    <button class="abrir-menu" id="abrir-nav">
    <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
    </button>
    <nav class="nav" id="nav">
    <button class="cerrar-nav" id="cerrar-nav">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
    </button>
    <ul class="nav-menu">
        <h2 class="title-nav">MENU</h2>
        <li><a class="nav-item" href="cursos.html">Cursos</a></li>
        <li><a class="nav-item" href="#">Nosotros</a></li>
        <li><a class="nav-item" href="#">Contacto</a></li>
        <div class="container-btns-nav">
            <li><a class="btn-nav-hover"  href="#">Registrarse</a></li>
            <hr class="separador-movile">
            <li><a class="btn-nav-hover" href="#">Iniciar sesion</a></li>
        </div>
    </ul>
    </nav>
`
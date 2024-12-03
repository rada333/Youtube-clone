class MenuTop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="videos-menu" style="color="red">
                <ul>
                    <li><a href="#" class="menu-topo_ativo"><span>Tudo</span></a></li>
                    <li><a href="#"><span>Músicas</span></a></li>
                    <li><a href="#"><span>Ao vivo</span></a></li>
                    <li><a href="#"><span>Tropical house</span></a></li>
                    <li><a href="#"><span>Mixes</span></a></li>
                    <li><a href="#"><span>Lista de reprodução</span></a></li>
                    <li><a href="#"><span>Anos 2000</span></a></li>
                    <li><a href="#"><span>Forró</span></a></li>
                    <li><a href="#"><span>Notícias</span></a></li>
                    <li><a href="#"><span>Funk carioca</span></a></li>
                </ul>
            </nav>
        `
    } 
}

customElements.define('menu-top', MenuTop);